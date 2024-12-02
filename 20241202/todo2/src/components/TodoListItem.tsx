import { useState } from "react";

export default function TodoListItem({
  content,
  deleteList,
}: {
  content: string;
  deleteList: () => void;
}) {
  const [check, setCheck] = useState(false);
  return (
    <li className="flex items-center justify-between p-3 border-b hover:bg-gray-100 transition-colors">
      <div className="flex items-center">
        <input
          type="checkbox"
          className="mr-3 h-4 w-4 text-blue-500 focus:ring-blue-400"
          checked={check}
          onChange={() => setCheck((check) => !check)}
        />
        <span style={check ? { textDecoration: "line-through" } : undefined}>
          {content}
        </span>
      </div>
      <button
        className="text-red-500 hover:text-red-700 ml-4"
        onClick={deleteList}
      >
        Delete
      </button>
    </li>
  );
}
