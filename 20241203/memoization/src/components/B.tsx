import React, { useState, Dispatch, SetStateAction } from "react";
import C from "./C";

export default React.memo(function B({
  count2,
  increment,
  setCount,
}: {
  count2: number;
  increment: () => void;
  setCount: Dispatch<SetStateAction<number>>;
}) {
  const [count, setCount3] = useState(0);
  console.log("B Rendering", count2);
  return (
    <>
      <h1>B: {count}</h1>
      <button onClick={() => setCount3((count) => count + 1)}>증가</button>
      <C />
    </>
  );
});
