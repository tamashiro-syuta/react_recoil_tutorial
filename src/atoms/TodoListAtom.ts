import { atom } from 'recoil'
import Todo from '../types/Todo'

// atomは、recoilにおけるデータストアのようなもの(redux,mobxにおけるstoreのイメージ)
// atomには、AtomOptions型のオブジェクトを渡す
// AtomOptionsは以下

// export interface AtomOptions<T> {
//   key: NodeKey;
//   default: RecoilValue<T> | Promise<T> | T;
//   effects_UNSTABLE?: ReadonlyArray<AtomEffect<T>>;
//   dangerouslyAllowMutability?: boolean;
// }

// 要はkeyとdefault(管理したい値の初期値)を渡せばOK!!!!
// 下では、TodoListのタスク一覧を管理するように定義

// タスク一覧の状態
const todoListState = atom<Todo[]>({
  key: 'todoList',
  default: [
    { title: 'タスク１' },
    { title: 'タスク2' },
    { title: 'タスク3' },
  ],
})

export default todoListState;
