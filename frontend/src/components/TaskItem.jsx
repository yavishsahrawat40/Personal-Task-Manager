import { Trash2, CheckCircle, Circle, Edit2 } from 'lucide-react';

const TaskItem = ({ task, onDelete, onToggle, onEdit }) => {
  return (
    <div className={`flex items-center justify-between p-4 mb-3 bg-white rounded-lg shadow-sm border-l-4 ${task.status === 'completed' ? 'border-green-500' : 'border-yellow-500'}`}>
      <div className="flex items-center space-x-4">
        <button onClick={() => onToggle(task._id)} className="text-gray-500 hover:text-green-600 transition-colors">
          {task.status === 'completed' ? <CheckCircle className="text-green-500" /> : <Circle />}
        </button>
        <div>
          <h3 className={`font-semibold text-lg ${task.status === 'completed' ? 'line-through text-gray-400' : 'text-gray-800'}`}>
            {task.title}
          </h3>
          {task.description && <p className="text-gray-500 text-sm">{task.description}</p>}
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <button onClick={() => onEdit(task)} className="p-2 text-gray-500 hover:text-blue-600 transition-colors">
          <Edit2 size={18} />
        </button>
        <button onClick={() => onDelete(task._id)} className="p-2 text-gray-500 hover:text-red-600 transition-colors">
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
