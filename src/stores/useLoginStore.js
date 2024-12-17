import { create } from "zustand";

// {}는 객체고 함수 몸체가 없어서 객체 리턴을 위해 ({}) 형태가 됨
// >> 리턴 형태가 객체
export const useLoginStore = create((set) => ({
  isLogin: false,
  setLogin: (value) => set({
    isLogin: value
  }),
}));