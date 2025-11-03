import { useState } from 'react';
import { Draggable } from '@hello-pangea/dnd';
import type { Task } from '../types';
import { useKanbanStore } from '../store';

interface TaskCardProps {
  task: Task;
  index: number;
}

export const TaskCard = ({ task, index }: TaskCardProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const { updateTask, deleteTask } = useKanbanStore();

  const handleSave = () => {
    if (editedTitle.trim()) {
      updateTask(task.id, { title: editedTitle.trim() });
      setIsEditing(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      setEditedTitle(task.title);
      setIsEditing(false);
    }
  };

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`group bg-white rounded-md shadow-sm border border-[#dfe1e6] p-3 transition-all cursor-pointer hover:bg-[#f4f5f7] ${
            snapshot.isDragging ? 'shadow-lg rotate-1 ring-2 ring-[#0052cc]' : ''
          }`}
        >
          {isEditing ? (
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              onBlur={handleSave}
              onKeyDown={handleKeyDown}
              className="w-full px-2 py-1 text-sm border border-[#0052cc] rounded focus:outline-none focus:ring-2 focus:ring-[#0052cc] bg-white"
              autoFocus
            />
          ) : (
            <div>
              <div className="flex items-start justify-between gap-2 mb-1">
                <h3
                  className="text-sm text-[#172b4d] flex-1 leading-5 hover:underline"
                  onClick={() => setIsEditing(true)}
                >
                  {task.title}
                </h3>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteTask(task.id);
                  }}
                  className="opacity-0 group-hover:opacity-100 text-[#5e6c84] hover:text-[#de350b] transition-all flex-shrink-0 p-1 rounded hover:bg-[#ebecf0]"
                  aria-label="Delete task"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              {task.description && (
                <p className="text-xs text-[#5e6c84] mt-2 leading-relaxed">
                  {task.description}
                </p>
              )}
            </div>
          )}
        </div>
      )}
    </Draggable>
  );
};

