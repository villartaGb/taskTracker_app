import type { Task } from "../types";

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

export default function TaskList({
  tasks,
  onToggleTask,
  onDeleteTask,
}: TaskListProps) {
  if (tasks.length === 0)
    return <p className="empty-message">No tasks found</p>;

  return (
    <div className="task-grid">
      {tasks.map((task) => (
        <div
          key={task.id}
          className={`task-card ${task.completed ? "completed" : ""}`}
        >
          <div className="task-text">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleTask(task.id)}
            />
            <span>{task.text}</span>
          </div>
          <button onClick={() => onDeleteTask(task.id)} className="delete-btn">
            ❌
          </button>
        </div>
      ))}
    </div>
  );
}
