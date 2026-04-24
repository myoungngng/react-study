import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import TodoList from "./components/todo/TodoList";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <TodoList />
  </StrictMode>
);