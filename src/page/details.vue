<script setup>
import { useRouter, useRoute } from 'vue-router';
import { ref, onMounted } from "vue";
import { userBoardStore } from '../store/userBoardStore.js';

import axios from 'axios';

const store = userBoardStore();
const board = ref('');
const route = useRoute();
const router = useRouter();
const boadIdx = route.params.idx;

onMounted(async () => {
    console.log(boadIdx);
    await store.fetchdetails(boadIdx);
    board.value = store.board;
    console.log(board.value);
});



// 데이터와 메서드 정의
const form = ref({
    boardIdx:boadIdx,
  writer: '',
  content: ''
});


// 폼 제출 처리 함수
const handleSubmit = async () => {
  try {
    console.log(form);
    // axios로 폼 데이터 제출
    const response = await axios.post('/api/comment/regist', form.value);

    // 성공 시 다른 URL로 리다이렉트
    window.location.reload();
  } catch (error) {
    console.error('폼 제출 오류:', error);
  }
};
</script>

<template>
    <div>
        <h1>제목 : {{ board.title }}</h1>
        <div>작성자 : {{ board.writer }}</div>
        <div>내용 : {{ board.content }}</div>

        <hr>
        <h2>댓글</h2>
        <form @submit.prevent="handleSubmit">
            <div>
                작성자 : <input type="text" style="width: 350px;" name="writer"  v-model="form.writer" id="writer">
            </div>
            <div style="margin:15px 0px">
                내용 : <input type="text" style="width: 400px;" name="content" v-model="form.content" id="content">
            </div>
            
            <button type="submit">작성</button>
        </form>
        <div v-for="comment in board.comments" :key="comment.idx">
            <div style="display: flex;">
                <div style="margin-left: 100px;">작성자 : {{ comment.writer }}</div>
                <div style="margin-left: auto; margin-right: 100px;">댓글 내용 : {{ comment.content }}</div>
            </div>
            <hr>
        </div>


    </div>
</template>

<style lang="scss" scoped></style>