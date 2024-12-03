import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export default function CountOutsideDisplay() {
  const { count } = useContext(CounterContext)!;
  return <div>Outside count:{count}</div>;
}
