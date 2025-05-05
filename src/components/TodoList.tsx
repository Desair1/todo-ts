import React, { useEffect, useState } from "react";
import Task from "../types/task";
import TaskItem from "./TaskItem";

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {}, []);

  useEffect(() => {}, [tasks]);
};

export default TodoList;
