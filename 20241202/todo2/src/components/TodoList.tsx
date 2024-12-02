import TodoListItem from "./TodoListItem";

export default function TodoList({
  list,
  onDelete,
}: {
  list: { id: string; content: string }[];
  onDelete: (id: string) => void;
}) {
  return (
    <ul className="divide-y divide-gray-200">
      {list.map((item) => (
        <TodoListItem
          // 반복문에서 unique한 key를 지정해줘야한다.
          key={item.id}
          content={item.content}
          deleteList={() => onDelete(item.id)}
        />
      ))}
    </ul>
  );
}
