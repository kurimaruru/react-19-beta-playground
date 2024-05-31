import { use, useState, useTransition } from "react";
import { sleep } from "../../likes";

export function SampleUseTransiton() {
  use(fetchMock()); // suspenceの動作確認用
  const [count, setCount] = useState(0);
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(async () => {
      // 登録処理の非同期処理が終わるまでisPendingはtrueになる
      await registerMock();
      setCount((prev) => prev + 1);
    });
  };

  return (
    <>
      <h3>ただ今のカウントは{count}です</h3>
      {/* transitionでisPendingがtureの場合ボタンは非活性 */}
      <button type="button" onClick={handleClick} disabled={isPending}>
        Increment
      </button>
    </>
  );
}

async function registerMock() {
  await sleep(2000);
  console.log("登録処理が完了しました");
}

async function fetchMock() {
  await sleep(1000);
  return "testValue";
}
