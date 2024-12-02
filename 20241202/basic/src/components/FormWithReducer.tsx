import { useReducer } from "react";
interface ReducerState {
  name: string;
  email: string;
  password: string;
  isSubmit: boolean;
  error?: string;
}

interface ReducerAction {
  type: string;
  field?: string;
  value?: string;
  error?: string;
}
const initState = {
  name: "",
  email: "",
  password: "",
  isSubmit: false,
  error: "",
};

function reducer(state: ReducerState, action: ReducerAction) {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field!]: action.value };
    case "SET_ERROR":
      return { ...state, error: action.error };
    case "SUBMIT_START":
      return { ...state, isSubmit: true };
    case "SUBMIT_SUCCESS":
      return { ...state, isSubmit: false };
    case "SUBMIT_END":
      return { ...state, isSubmit: false };
    default:
      return state;
  }
  return state;
}
export default function FormWithReducer() {
  const [state, dispatch] = useReducer(reducer, initState);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ type: "SET_FIELD", field: name, value });
  };
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 에러처리
    if (!state.name || !state.email || !state.password) {
      dispatch({ type: "SET_ERROR", error: "입력값을 모두 입력하세요." });
    }
    // 성공
    // 클릭할때 submit 하면 더블클릭시 두번이니까
    // isSubmit 상태를 정의해서
    if (state.isSubmit) return;
    dispatch({ type: "SET_ERROR", error: "" });
    dispatch({ type: "SUBMIT_START" });

    // 성공시 API 호출
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      dispatch({ type: "SUBMIT_SUCCESS" });
    } catch (error) {
      if (error)
        dispatch({ type: "SET_ERROR", error: "form 전송중 에러 발생!" });
    } finally {
      dispatch({ type: "SUBMIT_END" });
    }
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="uname">Name:</label>
          <input
            type="text"
            name="uname"
            value={state.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">email:</label>
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">password:</label>
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
          />
        </div>
        {state.error && <div style={{ color: "red" }}>{state.error}</div>}
        {/* isSubmit이 false일떄만 활성화*/}
        <button type="submit" disabled={state.isSubmit}>
          {" "}
          회원가입{" "}
        </button>
      </form>
    </>
  );
}
