import { useCallback } from "react";
import { useRecoilValue, useSetRecoilState, SetterOrUpdater } from "recoil";
import todoTitleFormState from "../atoms/TodoTitleFromAtom";


// reducやmobxと同様に、RecoilにおいてもAtomの値を変更することで、参照しているSelectorやコンポーネントに自動反映されます。
// Atomの値を変更するためにはuseSetRecoilState()にAtomを引数として渡します。
// 返り値としてSetterOrUpdater<T>型の関数が返されます。
// これはAtomの値に対するSetter関数のようなもので、この関数を経由してAtomを更新することで前述の再計算処理が行われます。


const TitleForm: React.FC = () => {
  // useRecoilValue => todoTitleFormStateの値を取得
  const todoTitleFormValue: string = useRecoilValue(todoTitleFormState);
  // useSetRecoilState => todoTitleFormStateの値を更新するSetter関数を取得
  const setTodoTitleFormValue: SetterOrUpdater<string> = useSetRecoilState(
    todoTitleFormState
  );
  // テキストフィールドのonChange処理
  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      // 先に取得したsetTodoTitleFormValueに対して更新したい値を渡して実行
      setTodoTitleFormValue(event.target.value);
    },
    [setTodoTitleFormValue]
  );

  return (
    <label>
      タスク名:
      <input
        type="text"
        value={todoTitleFormValue}
        onChange={onChange}
        name="title"
        style={{ margin: 12 }}
      />
    </label>
  );
};

export default TitleForm;
