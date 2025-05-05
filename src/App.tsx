import { useState } from "react";
import styles from "./App.module.css";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export default function App() {
  const [taskList, setTaskList] = useState<Task[]>([]);

  return (
    <>
      <input type="text" placeholder="Добавить задачу" />
      <button type="submit">Создать задачу</button>
    </>
  );
}
