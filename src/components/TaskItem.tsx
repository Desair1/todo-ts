import TaskItemProps from "../types/TaskItemProps";

const TaskItem = ({ task, toggleComplete, deleteTask }: TaskItemProps) => {
  return (
    <li>
      <span>{task.text}</span>
      <button onClick={() => toggleComplete(task.id)}>Завершить</button>
      <button onClick={() => deleteTask(task.id)}>Удалить</button>
    </li>
  );
};

export default TaskItem;
