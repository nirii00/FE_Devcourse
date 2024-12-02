import { useState, useReducer } from "react";
import { reducer } from "./CountReducer.ts";

// 리듀서 함수 내에서 상태를 업데이트 할때 참조할 수 있는 값

export default function CountWithReducer() {
  // useReducer hook
  // UseReducer is to definining local status
  // Similar to useState
  // const [state, SetState] = useState(init);
  // 다른 점은 useReducer는 액션발생함수 사용 setState 대신
  //   const [state, dispatch] = useReducer(reducerFn, Init);
  // reducerFn? 상태변경 로직 수행
  // UseState의 단점
  // 상태를 업데이트 하는 로직을 임의로 수정할 수 있기 떄문에 setState함수를 예측할 수 없다.
  // 반대로 useReducerFn은 상태 없데이트 로직을 리듀서 함수 안에서만 선언할 수 있다.
  // 리듀서 함수 -> state와 action 무조건 두개의 매개변수
  //   function reducer(state, action) {}
  // dispatch로 action을 발생시킴
  const [count, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <>
      <h1>Count: {count.count}</h1>
      {/* dispatch로 액션을 발생시킴 */}
      {/* dispatch(action){
    ... return reducer(최신State, action)} */}
      <button onClick={() => dispatch({ type: "decrement" })}>감소</button>
      <button onClick={() => dispatch({ type: "reset" })}>리셋</button>
      <button onClick={() => dispatch({ type: "increment" })}>증가</button>
    </>
  );
}

// UseReducer원리 -> useReducer.png 확ㅔ인
// state하나당 reducer하나
