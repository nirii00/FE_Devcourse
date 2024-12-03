import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export default function CountDisplay() {
  // CounterContext에서 count를 가져올 수 있음
  
  const { count } = useContext(CounterContext)!;
  return <div>Count: {count}</div>;
}
