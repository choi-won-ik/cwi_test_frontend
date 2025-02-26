<script setup>
import { RouterLink, useRoute } from 'vue-router';
import { ref, onMounted } from "vue";
import { userBoardStore } from '../store/userBoardStore.js';

const store = userBoardStore();
const board = ref('');
const route = useRoute();
const boadIdx = route.params.idx;

onMounted(async () => {
    console.log(boadIdx);
    await store.fetchdetails(boadIdx);
    board.value = store.board;
    console.log(board.value);
});
</script>

<template>
    <div>
        <h1>제목 : {{ board.title }}</h1>
        <div>작성자 : {{ board.writer }}</div>
        <div>내용 : {{ board.content }}</div>

        <hr>
        <h2>댓글</h2>
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