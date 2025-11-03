import { useMemo } from 'react';
import { Droppable } from '@hello-pangea/dnd';
import type { Column as ColumnType } from '../types';
import { useKanbanStore } from '../store';
import { TaskCard } from './TaskCard';

interface ColumnProps {
  column: ColumnType;
}

export const Column = ({ column }: ColumnProps) => {
  const allTasks = useKanbanStore((state) => state.tasks);

  const tasks = useMemo(
    () => column.taskIds.map((id) => allTasks[id]).filter(Boolean),
    [column.taskIds, allTasks]
  );

  return (
    <div className="flex-1 flex-col bg-[#EBECF0] p-2 rounded-md">
      <div className="px-2 py-3 flex items-center justify-between">
        <h2 className="text-xs font-semibold text-[#5e6c84] uppercase tracking-wide">
          {column.title}
        </h2>
        <span className="text-xs font-medium text-[#5e6c84] bg-[#dfe1e6] rounded-full px-2 py-0.5">
          {tasks.length}
        </span>
      </div>

      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`flex-1 px-2 py-1 rounded-sm min-h-[200px] transition-colors ${
              snapshot.isDraggingOver ? 'bg-[#ebecf0]' : ''
            }`}
          >
            <div className="space-y-2">
              {tasks.map((task, index) => (
                <TaskCard key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </div>
            {tasks.length === 0 && !snapshot.isDraggingOver && (
              <div className="text-center text-[#5e6c84] py-8 text-sm">
                Drop tasks here
              </div>
            )}
          </div>
        )}
      </Droppable>
    </div>
  );
};

