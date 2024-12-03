import TodoListItem from "./TodoListItem";

export default function TodoList({
  todos,
  toggleTodo,
  removeTodo,
}: {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}) {
  return (
    <ul className="divide-y divide-gray-200">
      {todos.length > 0 &&
        todos.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
          />
        ))}
    </ul>
  );
}
