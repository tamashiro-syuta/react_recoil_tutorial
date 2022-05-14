import { atom } from "recoil";

const todoTitleFormState = atom<string>({
  key: 'todoTitleForm',
  default: ''
});

export default todoTitleFormState;
