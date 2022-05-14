import { selector } from "recoil";
import  todoListState from '../atoms/TodoListAtom'
import  searchTextFormState  from '../atoms/SearchTextFormAtom'
import Todo from "../types/Todo";

// SelectorはAtomの値を用いて何らかの計算や加工・副作用を処理した結果を返します。
// Selectorの宣言はselector()で行います。
// 引数としてReadOnlySelectorOptions型のオブジェクトを渡す必要があります。
// ReadOnlySelectorOptions型は以下です。

// export interface ReadOnlySelectorOptions<T> {
//     key: string;
//     get: (opts: { get: GetRecoilValue }) => Promise<T> | RecoilValue<T> | T;
//     dangerouslyAllowMutability?: boolean;
// }

// get は、値を取得する関数


const searchedTodoListSelectors = selector<Todo[]>({
  key: 'searchedTodoListSelector',
  // getは、{ get }を引数に取る関数
  get: ({ get }) => {
    // 引数getを利用してAtomからtodoListStateの最新の値を取得(タスク一覧)
    const todoList: Todo[] = get(todoListState);
    // 同様に検索フィールド(searchTextFormState)の最新の値を取得
    const searchText: string = get(searchTextFormState);

    // 検索フィールドに値がある場合は、条件にあったタスクを返す
    return searchText ? todoList.filter((t) => t.title.includes(searchText)) : todoList;
  },
})

export default searchedTodoListSelectors;
