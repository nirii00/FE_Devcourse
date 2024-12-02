import { useState } from "react";

export default function TodoEditor({
  clickAdd,
}: {
  clickAdd: (item: { id: string; content: string }) => void;
}) {
  const [value, setValue] = useState("");
  let empty = false;
  const handleClick = () => {
    if (value.trim()) {
      const id = Date.now().toString();
      const content = value;
      // data 전달
      clickAdd({ id, content });
      // value 초기화
      setValue("");
      empty = false;
    } else {
      empty = true;
    }
  };
  return (
    <div className="flex p-4">
      <input
        type="text"
        placeholder={empty ? "Can't add empty list" : "Enter a new todo"}
        className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
        onClick={handleClick}
      >
        Add Todo
      </button>
    </div>
  );
}
