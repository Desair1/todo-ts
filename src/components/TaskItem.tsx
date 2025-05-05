import Task from "../types/task";

interface TaskItemProps {
  Task: Task;
  toggleComplete: (id: number) => void;
  deleteTask: (id: number) => void;
}

const TaskItem = ({ Task, toggleComplete, deleteTask }: TaskItemProps) => {
  return (
    <div>
      <span>{Task.text}</span>
      <button onClick={() => toggleComplete(Date.now())}>Завершить</button>
      <button onClick={() => deleteTask(Task.id)}>Удалить</button>
    </div>
  );
};

export default TaskItem;
