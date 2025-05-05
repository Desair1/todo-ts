import React, { useEffect, useState } from "react";
import Task from "../types/task";
import TaskItem from "./TaskItem";

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputValueText, setInputValueText] = useState("");

  // useEffect для загрузки данных из localStorage при монтировании компонента
  useEffect(() => {}, []);

  // useEffect для сохранения данных в localStorage при изменении tasks
  useEffect(() => {}, [tasks]);

  const addTask = (text: string) => {
    if (inputValueText.trim() !== "") {
      const newTask: Task = {
        id: Date.now(),
        text: inputValueText,
        completed: false,
      };

      setTasks([...tasks, newTask]);
    }
  };

  const toggleComplete = (id: number) => {};

  const deleteTask = (id: number) => {};

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={inputValueText}
          onChange={(e) => setInputValueText(e.target.value)}
        />
        <button onClick={() => addTask(inputValueText)}>Создать</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            Task={task}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
          ></TaskItem>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
