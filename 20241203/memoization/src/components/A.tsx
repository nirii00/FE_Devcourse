import B from "./B";
import { useState, useCallback } from "react";
export default function A() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  // 이렇게 하면 참조값이 다시 생성되지 않는다.
  // useCallback을 사용하는 이유?
  // 하위 컴포넌트에 전달하는데, memoization이 풀릴 것 같을때
  // 하위로 넘기지 않을때는 굳이 useCallback할필요 없음
  const increment = useCallback(() => {
    // 이렇게 하면 memoization 돼있을때 문제가 생긴다.
    // setCount(count + 1)
    setCount((count) => count + 1);
    // 이렇게 count를 넣는건 메모리 낭비
    // 왜냐면 이게 변경되면 memoization이 풀리니까
  }, [count]);
  return (
    <>
      <div>
        A: {count} / {count2}
      </div>
      {/* count가 업데이트돼서 재 랜더링 되면 B, C도 같이 다시 렌더링됨 */}
      <button onClick={() => setCount((count) => count + 1)}>
        Count1 증가
      </button>
      <button onClick={() => setCount2((count2) => count2 + 1)}>
        Count2 증가
      </button>
      {/* A가 렌더링 돼서 다시 increment 참조값이 변하면 B도 리렌더링이 됨 */}
      {/* 그런데 setCount가 변경되도 하위함수가 리렌더링이 안됨 -> 오옹 useState의 setCount는 리렌더링이 안되는구나 
      리렌더링? 컴포넌트가 재정의된다 <-> count가 0이 돼야한다. <-> 근데 setCount는 0이 안됨 <-> 아항 리액트 훅은 기본적으로 생성될떄 한번만 정의되고, memoization! */}
      <B count2={count2} increment={increment} setCount={setCount} />
    </>
  );
}
