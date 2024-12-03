import { useState } from "react";

export default function TodoEditor({
  addTodo,
}: {
  addTodo: (text: string) => void;
}) {
  const [text, setText] = useState("");
  const addHandler = () => {
    if (!text) return;
    addTodo(text);
    setText("");
  };
  // IME -> 조합문자
  const keyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing) return;
    addHandler();
  };
  return (
    <div className="flex p-4">
      <input
        type="text"
        placeholder="Enter a new todo"
        className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && keyDownHandler(e)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
        onClick={addHandler}
      >
        Add Todo
      </button>
    </div>
  );
}
