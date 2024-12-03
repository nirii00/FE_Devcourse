import React, { useId } from "react";

export default React.memo(function TodoListItem({
  todo,
  removeTodo,
  toggleTodo,
}: {
  todo: Todo;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}) {
  // 그냥 하면 
  // 새로 아이템이 추가 될떄마다 모든 item에 대해서 렌더링이 된다.
  // React.memo -> memoization 적용해서 바뀌는 내용에 대해서만 적용
  // 그런데 다른 아이템들이 여전히 렌더링이 된다? -> 메모이제이션이 어디선가 깨진다 
  // 전달되는 props확인
  // 유의! todo 같은 경우는 useState로 적용된 배열 이기 때문에 데이터 주소가 바뀌는게 아니라 렌더링에 영향을 안줌 -> 즉 memoization이 깨지는 이유가 아님
  
  console.log("Todolist Item Rendering");
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
});
