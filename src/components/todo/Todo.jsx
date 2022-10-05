import React from "react";
import "./style.css";

export default function Todo({ todo, onDeleteHandler, onEditHandler }) {
  return (
    <div className="todo-container">
      <div>
        <h2 className="todo-title">{todo.title}</h2>
        <div>{todo.body}</div>
      </div>
      <div className="button-set">
        <button
          className="todo-delete-button button"
          onClick={() => onDeleteHandler(todo.id)}
          //함수가 즉시 실행되는 것을 방지하고, 사용자가 클릭했을 때만 호출 되도록 한다.
        >
          삭제
        </button>
        <button
          className="todo-complete-button button"
          onClick={() => onEditHandler(todo.id)}
        >
          {todo.isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
}
