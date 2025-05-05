import React from "react";
import Task from "../types/task";

interface TaskItemProps {
  Task: Task;
  toggleComplete: (id: number) => void;
  deleteTask: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = () => {};

export default TaskItem;
