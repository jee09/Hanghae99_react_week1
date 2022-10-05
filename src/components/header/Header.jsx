import React from "react";
import "../header/style.css";

export default function Header() {
  console.log("헤더");
  return (
    <div className="container">
      <div>My Todo List</div>
      <div>React</div>
    </div>
  );
}
