<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

// 데이터와 메서드 정의
const form = ref({
  writer: '',
  title: '',
  content: ''
});

// useRouter를 이용하여 Vue Router의 push 메서드 사용
const router = useRouter();

// 폼 제출 처리 함수
const handleSubmit = async () => {
  try {
    console.log(form);
    // axios로 폼 데이터 제출
    const response = await axios.post('/api/board/regist', form.value);

    // 성공 시 다른 URL로 리다이렉트
    router.push({ path: '/' });
  } catch (error) {
    console.error('폼 제출 오류:', error);
  }
};
</script>

<template>
      <form @submit.prevent="handleSubmit">
    <div>
      작성자 : <input type="text" v-model="form.writer" id="writer" />
    </div>
    <div>
      제목 : <input type="text" v-model="form.title" id="title" />
    </div>
    <div>
      내용 : <input type="text" v-model="form.content" id="content" />
    </div>
    <button type="submit">작성</button>
  </form>
    
</template>

<style lang="scss" scoped></style>