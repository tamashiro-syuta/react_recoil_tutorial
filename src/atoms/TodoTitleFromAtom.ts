import { atom } from "recoil";

// タスク追加用テキストフィールドの状態
const todoTitleFormState = atom<string>({
  key: 'todoTitleForm',
  default: ''
});

export default todoTitleFormState;
