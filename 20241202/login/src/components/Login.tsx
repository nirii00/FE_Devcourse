import { useState, useReducer } from "react";
import Input from "./html/Input";
import Checkbox from "./html/Checkbox";
import Button from "./html/Button";

interface ReducerState {
  email: string;
  password: string;
  isSubmit: boolean;
  error?: string;
  success?: string;
}

interface ReducerAction {
  type: string;
  field?: string;
  value?: string;
  error?: string;
  success?: string;
}
const init = {
  email: "",
  password: "",
  isSubmit: false,
  error: "",
  success: "",
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
      return { ...state, isSubmit: false, success: action.success };
    case "SUBMIT_END":
      return { ...state, isSubmit: false, success: action.success };
    default:
      return state;
  }
}
export default function Login() {
  const [agree, setAgree] = useState(false);
  const [state, dispatch] = useReducer(reducer, init);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ type: "SET_FIELD", field: name, value });
  };
  const SubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 에러 및 성공 초기화
    dispatch({ type: "SET_ERROR", error: "" });
    dispatch({ type: "SET_SUCCESS", success: "" });

    // 검증
    if (!state.email || !state.password) {
      dispatch({ type: "SET_ERROR", error: "입력값을 모두 입력하세요" });
      return;
    }
    if (!agree) {
      dispatch({ type: "SET_ERROR", error: "동의 후 회원가입 가능합니다." });
      return;
    }

    // 중복 제출 방지
    if (state.isSubmit) return;
    dispatch({ type: "SUBMIT_START" });

    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      dispatch({ type: "SUBMIT_SUCCESS", success: "전송이 완료되었습니다!" }); // 성공 메시지 설정
    } catch (error) {
      dispatch({ type: "SET_ERROR", error: "form 전송 중 에러 발생!" });
    } finally {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      dispatch({ type: "SUBMIT_END", success: "" });
    }
  };
  return (
    <>
      <div className="item-middle bg-black">
        <div className="w-[375px] h-[434px] rounded-lg bg-white border border-[#D1D1D1] py-10 px-[25px] text-[#4f4f4f]">
          <h1 className="text-xl font-bold mb-[10px]">Login Into App</h1>
          <p className="text-sm mb-5">Please enter your details to continue.</p>
          <form onSubmit={SubmitHandler} className="grid gap-4">
            <Input
              type="email"
              className="input-style1"
              name="email"
              placeholder="someone@example.com"
              value={state.email}
              onChange={handleChange}
            />
            <Input
              type="password"
              name="password"
              className="input-style1"
              placeholder="Enter Password"
              value={state.password}
              onChange={handleChange}
            />
            <Checkbox
              checked={agree}
              name="checkbox"
              onChange={() => setAgree(!agree)}
            >
              <span className="text-sm color-[#4f4f4f]">
                I agree with <em className="not-italic font-bold">terms</em> and{" "}
                <em className="not-italic font-bold">policies</em>.
              </span>
            </Checkbox>
            {state.error && <div style={{ color: "red" }}>{state.error}</div>}
            {state.success && (
              <div style={{ color: "green" }}>{state.success}</div>
            )}
            <div className="mt-4 grid gap-4">
              <Button
                type="submit"
                className="w-full bg-[#4F4F4F] text-[#F5F5F5] rounded-lg"
                style={
                  (state.isSubmit && { background: "#7e7e7e" }) || {
                    background: "#4F4F4F",
                  }
                }
                disabled={state.isSubmit}
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
          </form>
        </div>
      </div>
    </>
  );
}
