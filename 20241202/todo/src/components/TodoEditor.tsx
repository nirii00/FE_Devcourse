import { useReducer } from "react";
import TodoList from "./TodoList";

const init = {
  value: "",
  error: "",
  todo: [],
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        value: "",
        error: "",
        todo: [
          ...state.todo,
          { id: Date.now().toString(), content: action.value },
        ],
      };
    case "ADD_ERROR":
      return { ...state, error: action.error };
    case "UPDATE_TODO":
      return { ...state, value: action.value };
    case "DELETE_TODO":
      return {
        ...state,
        todo: state.todo.filter(
          (item: { id: string; content: string }) => item.id !== action.id
        ),
      };
  }
}

export default function TodoEditor() {
  const [state, dispatch] = useReducer(reducer, init);

  function SubmitTodo(value: string) {
    if (value.trim()) {
      dispatch({ type: "ADD_TODO", value: value });
    } else {
      dispatch({ type: "ADD_ERROR", error: "값을 입력해주세요" });
    }
  }
  const deleteTodo = (id: string) => {
    dispatch({ type: "DELETE_TODO", id });
  };

  return (
    <>
      <div className="flex p-4">
        <input
          type="text"
          placeholder="Enter a new todo"
          className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={state.value}
          onChange={(e) =>
            dispatch({ type: "UPDATE_TODO", value: e.target.value })
          }
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
          onClick={(_) => SubmitTodo(state.value)}
        >
          Add Todo
        </button>
      </div>
      {state.error && <p style={{ color: "red" }}>{state.error}</p>}
      <TodoList todos={state.todo} onDeleteTodo={deleteTodo} />
    </>
  );
}
