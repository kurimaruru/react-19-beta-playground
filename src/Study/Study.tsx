import { Suspense } from "react";
import { ErrorBoundary } from "../ErrorBoundary";
import { SampleUseTransiton } from "./React19New/SampleUseTransition";

export function Study() {
  return (
    <>
    <div>
      <h1>React 19 学習用ページ</h1>
      <h2>useTransitionのアクション対応</h2>
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <SampleUseTransiton />
        </Suspense>
      </ErrorBoundary>
    </div>
      <div>
        <h2>useActionStateのサンプル</h2>
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <SampleUseActionState />
          </Suspense>
        </ErrorBoundary>
      </div>
    </>
  );
}
