import { CounterActionContext, CounterContext } from "../CounterContext";
import { useState, useMemo } from "react";
export default function CounterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((count) => count + 1);
  };
  const decrement = () => {
    setCount((count) => count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  const memo = useMemo(
    () => ({
      increment,
      decrement,
      reset,
    }),

    []
  );
  return (
    <>
      {/* value에는 값 하나만 전달 가능 */}
      {/* 함수 공급 컨텍스트와 데이터 공급 컨텍스트를 분리하자! */}
      <CounterActionContext.Provider value={memo}>
        <CounterContext.Provider value={{ count }}>
          {children}
        </CounterContext.Provider>
      </CounterActionContext.Provider>
    </>
  );
}
