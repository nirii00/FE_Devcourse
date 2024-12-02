import { useState } from "react";

export default function Count() {
  // useState  로컬 상태를 정의하기 위한 훅
  const [Count, setCount] = useState(0);
  const increment = () => {
    setCount((count) => count + 1);
  };
  const decrement = () => {
    setCount((count) => count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <h1>Count: {Count}</h1>
      <button onClick={decrement}>감소</button>
      <button onClick={increment}>증가</button>
      <button onClick={reset}>리셋</button>
    </>
  );
}
