import { useId } from "react";

export default function TodoListItem({
  todo,
  removeTodo,
  toggleTodo,
}: {
  todo: Todo;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}) {
  const uuid = useId();
  return (
    <li className="flex items-center justify-between p-3 border-b hover:bg-gray-100 transition-colors">
      <div className="flex items-center">
        <input
          id={uuid}
          type="checkbox"
          className="mr-3 h-4 w-4 text-blue-500 focus:ring-blue-400"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <label htmlFor={uuid} className={`${todo.completed && "line-through"}`}>
          {todo.text}
        </label>
      </div>
      <button
        className="text-red-500 hover:text-red-700 ml-4"
        onClick={() => removeTodo(todo.id)}
      >
        Delete
      </button>
    </li>
  );
}
