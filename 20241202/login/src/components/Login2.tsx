import Input from "./html/Input";
import Checkbox from "./html/Checkbox";
import Button from "./html/Button";
import { useReducer } from "react";

interface ReducerState {
  email: string;
  password: string;
  agree: boolean;
  error: string;
}

type ReducerAction =
  | { type: "SET_EMAIL"; payload: string }
  | { type: "SET_PASSWORD"; payload: string }
  | { type: "SET_AGREE"; payload: boolean }
  | { type: "SET_ERROR"; payload: string };

const initialState = {
  email: "",
  password: "",
  agree: false,
  error: "",
};

function reducer(state: ReducerState, action: ReducerAction): ReducerState {
  switch (action.type) {
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "SET_AGREE":
      return { ...state, agree: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

export default function Login() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const validationForm = () => {
    if (!state.email) {
      dispatch({ type: "SET_ERROR", payload: "이메일을 입력해주세요." });
      return false;
    }
    if (!state.password) {
      dispatch({ type: "SET_ERROR", payload: "비밀번호를 입력해주세요." });
      return false;
    }
    if (!state.agree) {
      dispatch({ type: "SET_ERROR", payload: "약관 동의를 체크해주세요." });
      return false;
    }

    dispatch({ type: "SET_ERROR", payload: "" });
    return true;
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validationForm()) {
      alert("로그인 성공!");
    }
  };

  return (
    <>
      <div className="item-middle bg-black">
        <div className="w-[375px] rounded-lg bg-white border border-[#D1D1D1] py-10 px-[25px] text-[#4f4f4f]">
          <h1 className="text-xl font-bold mb-[10px]">Login Into App</h1>
          <p className="text-sm mb-5">Please enter your details to continue.</p>
          <form className="grid gap-4" onSubmit={submitHandler}>
            <Input
              type="text"
              className="input-style1"
              placeholder="someone@example.com"
              value={state.email}
              onChange={(e) =>
                dispatch({ type: "SET_EMAIL", payload: e.target.value })
              }
            />
            <Input
              type="password"
              className="input-style1"
              placeholder="Enter Password"
              value={state.password}
              onChange={(e) =>
                dispatch({ type: "SET_PASSWORD", payload: e.target.value })
              }
            />
            <Checkbox
              checked={state.agree}
              onChange={(e) =>
                dispatch({ type: "SET_AGREE", payload: e.target.checked })
              }
            >
              <span className="text-sm color-[#4f4f4f]">
                I agree with <em className="not-italic font-bold">terms</em> and{" "}
                <em className="not-italic font-bold">policies</em>.
              </span>
            </Checkbox>
            <div className="mt-4 grid gap-4">
              <Button
                type="submit"
                className="w-full bg-[#4F4F4F] text-[#F5F5F5] rounded-lg"
              >
                Log In
              </Button>
              <Button
                type="button"
                className="w-full border border-[#4f4f4f] text-[#4f4f4f] rounded-lg"
              >
                Go To Sing up
              </Button>
            </div>
            {state.error && <p className="text-rose-500">{state.error}</p>}
          </form>
        </div>
      </div>
    </>
  );
}
