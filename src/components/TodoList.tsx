import React, { useEffect, useState } from "react";
import Task from "../types/task";
import TaskItem from "./TaskItem";

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {}, []);

  useEffect(() => {}, [tasks]);

  const addTask = (text: string) => {};

  const toggleComplete = (id: number) => {};

  const deleteTask = (id: number) => {};

  return (
    <>
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
