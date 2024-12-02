import { useState } from "react";
import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

export default function Todo() {
  const [todos, setTodos] = useState<{ id: string; content: string }[]>([]);
  // todos 업데이트
  const addItem = (item: { id: string; content: string }) => {
    setTodos((todos) => [...todos, item]);
    console.log(todos);
  };
  const deleteItem = (id: string) => {
    setTodos((todos) => todos.filter((item) => item.id != id));
  };

  return (
    <div className="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
      <TodoHeader />
      <TodoEditor clickAdd={addItem} />
      <TodoList list={todos} onDelete={deleteItem} />
    </div>
  );
}
