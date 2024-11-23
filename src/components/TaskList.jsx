import TaskCard from './TaskCard';

const TaskList = ({ tasks, onComplete, onEdit, onDelete }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {tasks
      .sort((a, b) => {
        const priorityOrder = { high: 1, medium: 2, low: 3 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      })
      .map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onComplete={() => onComplete(task.id)}
          onEdit={() => onEdit(task.id)}
          onDelete={() => onDelete(task.id)}
        />
      ))}
  </div>
);

export default TaskList;
