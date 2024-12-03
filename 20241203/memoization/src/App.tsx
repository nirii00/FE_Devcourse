// 리액트 메모이제이션
// 1. React.memo();
// 2. UseCallback
// 3. useMemo

// 컴포넌트가 재 랜더링 되는 경우 -> 컴포넌트의 상태 변경, props가 변경
// 이경우에 A의 state가 변경이 돼서 리렌더링이 되면 자식 컴포넌트도 모두 리렌더링 됨 -> 비효율적

// 1. react memoixation
// 하위 컴포넌트 export시 React.memo로 묶기
// 이렇게 하면 memo로 묶은 컴포넌트는 내용이 변경되지 않으면, 재렌더링되는경우 메모리 값을 그냥 가져다 쓰기 떄문에 렌더링 되지 않는다.
// 만약 컴포넌트에 정의된 상태가 변경되면 memoization이 깨짐

// 메모이제이션 낭비
// 메모이제이션은 비용이 꽤 높은 편임

//2. UseCallback
// 함수를 memoization할때
// 함수를 useCallback으로 감싸고, 의존성 배열

//3. UseMemo
// 콜백함수의 리턴값을 메모이제이션
// 리액트 메모와 useMemo의 차이 -> 리액트메모: 컴포넌트 메모 / useMemo: 함수의 반환값 메모
// 고차함수? -> 함수를 인자/ 반환하는 함수

//
import A from "./components/A";
import { initialItems } from "./utils/utils.ts";
import { useState, useMemo } from "react";

export default function App() {
  console.log("App Rendering");
  const [count, setCount] = useState(0);
  // 연산이 많이 들어가는 작업 -> 이부분만 메모이제이션? -> useMemo(()=>값, [])
  const selectedItems = useMemo(
    () => initialItems.find((item) => item.selected),
    []
  );
  return (
    <>
      <h1>
        App: {count}/{selectedItems?.id}
      </h1>
      <button onClick={() => setCount((count) => count + 1)}></button>
      <A />
    </>
  );
}
