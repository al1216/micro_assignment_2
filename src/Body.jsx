import React from "react";
import Left from "./Left.jsx";
import Right from "./Right.jsx";
import "./Body.css";

function Body() {
  return (
    <>
      <div className="container">
        <Left />
        <Right />
      </div>
    </>
  );
}

export default Body;
