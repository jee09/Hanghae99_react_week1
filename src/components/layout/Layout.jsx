import React from "react";
import "../layout/style.css";

//부모 컴포넌트에서 자식 컴포넌트로 데이터를 전할 때 props 사용
//: 화면에 데이터를 출력할 목적 , 매개변수를 전달할 때 사용
function Layout(props) {
  return <div className="layout">{props.children}</div>;
}
//컴포넌트 태그 사이의 컴포넌트의 값을 조회하고 싶을 때 props.children을 사용
export default Layout;
