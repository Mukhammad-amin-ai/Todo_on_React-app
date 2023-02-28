import React from "react";
import ReactDom from "react-dom/client";
import Todo from "./Components/Todo/Todo";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<Todo />);
