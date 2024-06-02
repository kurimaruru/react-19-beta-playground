import { useActionState } from "react";
import { sleep } from "../../likes";

// ステート更新に非同期処理が必要だったり、更新系の処理に紐づいたステートがある場合には、useActionStateを使うと良い
export function SampleUseActionState() {
  //  [state, runAction, isPending]
  const [count, increment, isPending] = useActionState(
    async (currentCount: number) => {
      await registerMock(); // action

      return currentCount + 1; // newState
    },
    0 // initialState
  );
  return (
    <>
      <h3>ただ今のカウントは{count}です</h3>
      {/* transitionでisPendingがtureの場合ボタンは非活性 */}
      <button type="button" onClick={increment} disabled={isPending}>
        Increment
      </button>
    </>
  );
}

async function registerMock() {
  await sleep(2000);
}
