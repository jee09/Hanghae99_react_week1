import React, { useState } from "react";
import Form from "../components/form/Form";
import Header from "../components/header/Header";
import Layout from "../components/layout/Layout";
import List from "../components/list/List";

export default function TodoList() {
  console.log("todolist");
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다.",
      isDone: false,
    },
    {
      id: 2,
      title: "JS 공부하기",
      body: "JS 기초를 공부해봅시다.",
      isDone: true,
    },
  ]);

  return (
    <Layout>
      <Header />
      <Form setTodos={setTodos} todos={todos} />
      <List todos={todos} setTodos={setTodos} />
    </Layout>
    //자식은 부모에게 정보를 받아 렌더링해줌
    //Layout컴포넌트에서 props.children을 받아 렌더링
  );
}
