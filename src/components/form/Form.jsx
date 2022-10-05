import React, { useState } from "react";
import "../form/style.css";
// import React, { useState } from 'react';
// 이 코드는 리액트 패키지에서 useState 라는 함수를 불러와줍니다.

export default function Form({ setTodos, todos }) {
  console.log("폼");
  const initialVal = {
    id: 0,
    title: "",
    body: "",
    isDone: false,
  }; //초기값세팅

  const [number, setNumber] = useState(3);
  const [todo, setTodo] = useState(initialVal);

  // =>동적인 값 끼얹기, useState
  // 컴포넌트에서 동적인 값을 상태(state)라고 부름 리액트에 useState 라는 함수가 있음
  //이것을 사용하면 컴포넌트에서 상태를 관리 할 수 있음

  // const [number, setNumber] = useState(0);
  // useState 를 사용 할 때에는 상태의 기본값을 파라미터로 넣어서 호출해줌 이 함수를 호출해주면 배열이 반환됨
  //여기서 첫번째 원소는 현재 상태, 두번째 원소는 Setter 함수 (바꿔진값?)

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (todo.title.trim() === "" || todo.body.trim() === "") return;
    //예외처리 (빈칸이면 돌아가)

    setTodos([...todos, { ...todo, id: number }]);
    /*
      {
      id: 3,    // let number = 3;
      title: "나는 제목",
      body: "난 내용",
      isDone: false,
    }, */

    setTodo(initialVal);
    setNumber(number + 1);
  };
  return (
    <form onSubmit={onSubmitHandler} className="add-form">
      <div className="input-group">
        <label className="form-label">주제</label>
        <input
          type="text"
          name="title"
          value={todo.title} // 제목값
          className="add-input input-body"
          onChange={onChangeHandler}
        />
        <label className="form-label">내용</label>
        <input
          type="text"
          name="body"
          value={todo.body} //내용값
          className="add-input"
          onChange={onChangeHandler}
        />
      </div>
      <button className="add-button">추가하기</button>
    </form>
  );
}
