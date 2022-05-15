// 値を取得するには、useRecoilValue を使う
import { useRecoilValue } from "recoil";
import searchedTodoListSelector  from '../selectors/SearchedTodoListSelector'
import Todo from "../types/Todo";

const TodoList: React.FC = () => {
  // useRecoilValueにsearchedTodoListSelectorの値(get関数でreturnしたオブジェクト)を渡してる
  // useRecoilValueで返される値は、searchedTodoListSelectorのget()で定義した通りTodo[]
  const list: Todo[] = useRecoilValue(searchedTodoListSelector);
  return (
    <div>
      <p>タスク一覧</p>
      <ul>
        {list.map((todo: Todo, i: number) => {
          return <li key={`${todo.title}_${i}`}>{todo.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
