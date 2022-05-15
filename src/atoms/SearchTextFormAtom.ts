import { atom } from "recoil";

// 検索用テキストフィールドの状態
const searchTextFormState = atom<string>({
  key: 'searchTextForm',
  default: '',
});

export default searchTextFormState;
