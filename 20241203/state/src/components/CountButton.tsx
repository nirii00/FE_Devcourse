import React, { useContext } from "react";
import { CounterActionContext } from "../context/CounterContext";

// 그냥 쓰면 CountButton도 매번 렌더링 됨 -> component 렌더링을 안하고 싶음
// React.memo -> react.memo 써도 매번 렌더링 됨 -> count가 바뀌면 counterProvider가 계속 바뀌니까 그 하위 객체들이 자꾸 렌더링 될 수 밖에 없음
// context를 두개를 만들어서 단계별로 렌더링을 정의해줌
export default React.memo(function CountButton() {
  // 마지막 ! -> null일 수도 있기 때문에
  const { increment, decrement, reset } = useContext(CounterActionContext)!;
  return (
    <>
      <button onClick={decrement}>감소</button>
      <button onClick={increment}>증가</button>
      <button onClick={reset}>리셋</button>
    </>
  );
});
