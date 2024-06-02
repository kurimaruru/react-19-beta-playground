import { useActionState } from "react";
import { sleep } from "../../likes";

// ステート更新に非同期処理が必要だったり、更新系の処理に紐づいたステートがある場合には、useActionStateを使うと良い
export function SampleFormAction() {
  //  [state, runAction, isPending]
  const [count, increment, isPending] = useActionState(
    async (currentCount: number) => {
      await registerMock(); // action

      return currentCount + 1; // newState
    },
    0 // initialState
  );
  return (
    // アクションを指定することでフォームの送信時に非同期処理を実行することが可能
    <form action={increment}>
      <h3>ただ今のカウントは{count}です</h3>
      <button type="submit" disabled={isPending}>
        Increment
      </button>
    </form>
  );
}

async function registerMock() {
  await sleep(2000);
}
