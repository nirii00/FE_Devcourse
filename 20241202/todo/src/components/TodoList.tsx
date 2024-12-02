import TodoListItem from "./TodoListItem";

export default function TodoList({
  todos,
  onDeleteTodo,
}: {
  todos: { id: string; content: string }[];
  onDeleteTodo: (index: string) => void;
}) {
  return (
    <ul className="divide-y divide-gray-200">
      {todos.map((item: { id: string; content: string }) => {
        return (
          <TodoListItem
            key={item.id}
            content={item.content}
            onDelete={() => onDeleteTodo(item.id)}
          />
        );
      })}
    </ul>
  );
}
