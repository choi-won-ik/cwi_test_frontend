import { defineStore } from "pinia";
import axios from "axios";

export const userListStore = defineStore("board", {
  state: () => ({
    list: [],
  }),

  actions: {
    // 특정 채팅방의 메시지 불러오기 (REST API)
    async fetchList() {
      try {
        const response = await axios.get("/api/board/list");
        console.log(response.data);
        this.list = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
});