import { atom } from "recoil";

const searchTextFormState = atom<string>({
  key: 'searchTextForm',
  default: '',
});

export default searchTextFormState;
