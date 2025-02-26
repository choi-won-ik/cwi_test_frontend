import { defineStore } from "pinia";
import axios from "axios";

export const userBoardStore = defineStore("board", {
  state: () => ({
    list: [],board:{},
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


    async fetchdetails(idx) {
      try {
        const response = await axios.get(`/api/board/details/${idx}`);
        console.log(response.data);
        this.board = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
});