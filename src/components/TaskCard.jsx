import { CheckBadgeIcon, PencilIcon, XCircleIcon } from "@heroicons/react/16/solid";

function TaskCard({ task, onComplete, onEdit, onDelete }) {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'text-red-700 font-semibold';
      case 'medium':
        return 'text-yellow-700 font-semibold';
      case 'low':
        return 'text-green-700 font-semibold';
      default:
        return 'text-gray-700 font-semibold';
    }
  };

  return (
    <div className="w-full max-w-xs mx-auto transition-all ease-in-out hover:scale-105 cursor-pointer">
      <div className="w-full h-64 bg-white rounded-lg shadow-xl flex flex-col">
        {/* Header with title and actions */}
        <div className="p-4 flex items-start justify-between border-b">
          <h3 className="font-semibold text-gray-800 line-clamp-2 flex-1">
            {task.title}
          </h3>
          <div className="flex gap-2 ml-2">
            <button
              onClick={() => onComplete(task.id)}
              className={`p-1.5 rounded-md hover:bg-gray-100 transition-colors ${
                task.completed ? 'text-green-600' : 'text-gray-400'
              }`}
              title="Completed"
            >
              <CheckBadgeIcon className="h-5" />
            </button>
            <button
              onClick={() => onEdit(task.id)}
              className="p-1.5 rounded-md hover:bg-gray-100 transition-colors text-gray-400"
              title="Edit the task"
            >
              <PencilIcon className="h-4" />
            </button>
            <button
              onClick={() => onDelete(task.id)}
              className="p-1.5 rounded-md hover:bg-gray-100 transition-colors text-gray-400"
              title="Delete the task"
            >
              <XCircleIcon className="h-4" />
            </button>
          </div>
        </div>

        {/* Task details */}
        <div className="p-4 flex-1 overflow-auto">
          <p className="text-gray-600 text-sm">
            {task.details || 'No description provided'}
          </p>
        </div>

        {/* Priority and Completion Status */}
        <div className="p-4 border-t flex justify-between items-center">
          <span className={`inline-block px-3 py-1 rounded-full text-sm ${getPriorityColor(task.priority)}`}>
            {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)} Priority
          </span>
          <span
            className={`text-sm font-semibold ${
              task.completed ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {task.completed ? 'Completed' : 'Incomplete'}
          </span>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
