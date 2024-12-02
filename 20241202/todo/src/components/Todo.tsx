import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";

export default function Todo() {
  return (
    <div className="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
      <TodoHeader />
      <TodoEditor />
    </div>
  );
}
