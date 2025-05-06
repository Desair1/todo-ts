import React, { useEffect, useState } from "react";
import Task from "../types/task";
import TaskItem from "./TaskItem";

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputValueText, setInputValueText] = useState("");

  // useEffect для загрузки данных из localStorage при монтировании компонента
  useEffect(() => {
    console.log("Попытка загрузки данных из localStorage");
    try {
      const savedTasks = localStorage.getItem("tasksList");
      console.log("Полученные данные:", savedTasks);
      if (savedTasks) {
        const parsedTasks = JSON.parse(savedTasks);
        console.log("Распарсенные данные:", parsedTasks);
        setTasks(parsedTasks);
      } else {
        console.log("Данных нет, создаём пустой массив");
        setTasks([]);
      }
    } catch (error) {
      console.error("Ошибка при загрузке данных:", error);
      setTasks([]);
    }
  }, []);

  useEffect(() => {
    console.log("Попытка сохранения данных в localStorage");
    if (tasks.length !== 0) {
      try {
        localStorage.setItem("tasksList", JSON.stringify(tasks));
        console.log("Данные успешно сохранены:", tasks);
      } catch (error) {
        console.error("Ошибка при сохранении данных:", error);
      }
    }
  }, [tasks]);

  const addTask = (text: string) => {
    if (inputValueText.trim() !== "") {
      const newTask: Task = {
        id: Date.now(),
        text: text,
        completed: false,
      };

      setInputValueText("");
      setTasks([...tasks, newTask]);
    }
  };

  const toggleComplete = (id: number) => {
    const completedTask = tasks.map((task) => {
      return task.id === id ? { ...task, completed: !task.completed } : task;
    });
    setTasks(completedTask);
  };

  const deleteTask = (id: number) => {
    const newTasksArray = tasks.filter((task) => task.id !== id);
    setTasks(newTasksArray);
  };

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
            task={task}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
          ></TaskItem>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
