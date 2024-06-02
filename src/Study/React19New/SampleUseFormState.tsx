import { useState } from "react";
import { sleep } from "../../likes";
import { useFormStatus } from "react-dom";

const IncrementButton = () => {
  // <form>の中にレンダリングされるコンポーネントで使用することが可能
  const { pending, data } = useFormStatus();

  console.log(data); // フォームの送信中のみ、つまりisPendingがtrueのときだけdataの値がとれる
  return (
    <button type="submit" disabled={pending} name="command">
      Increment
    </button>
  );
};
// ステート更新に非同期処理が必要だったり、更新系の処理に紐づいたステートがある場合には、useActionStateを使うと良い
export function SampleUseFormStatus() {
  const [count, increment] = useState(0);
  return (
    // アクションを指定することでフォームの送信時に非同期処理を実行することが可能
    <form
      //<form>のaction属性に渡された関数には、FormDataオブジェクトが引数として渡される
      action={async (formData: FormData) => {
        console.log(formData);
        await registerMock();
        increment(count + 1);
      }}
    >
      <h3>ただ今のカウントは{count}です</h3>
      <IncrementButton />
    </form>
  );
}

async function registerMock() {
  await sleep(2000);
}
