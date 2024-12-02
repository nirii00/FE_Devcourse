type ReducerState = { count: number };
type ReducerAction = { type: string };
export function reducer(count: ReducerState, action: ReducerAction) {
  // reducer 함수는 반드시 상태, 즉 값을 반환해야한다.

  if (action.type === "decrement") return { ...count, count: count.count - 1 };
  else if (action.type === "increment")
    return { ...count, count: count.count + 1 };
  else if (action.type === "reset") return { ...count, count: 0 };
  // 무조건 아무 조건을 만족하지 않을 떄는 state를 반환해야한다.
  else return count;
}
