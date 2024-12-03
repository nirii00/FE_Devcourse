import { useState } from "react";
import Counts from "./components/Counts";
// 상태 끌어올리기
// props drilling pattern -> 복잡... -> 해결? 전역 상태관리
// 전역 상태관리 -> 상태를 관리하는 애가 따로 있어서 각각의 컴포넌트가 얘한테 상태 요청
// context API -> 리액트 컴포넌트를 같은 context로 만들기 위한 API

export default function App() {
  return <Counts />;
}
