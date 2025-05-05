import { useState } from "react";
import styles from "./App.module.css";
import Task from "./types/task";
import TodoList from "./components/TodoList";

export default function App() {
  return <TodoList />;
}
