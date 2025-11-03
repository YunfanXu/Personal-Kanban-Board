import { useMemo } from 'react';
import { Droppable } from '@hello-pangea/dnd';
import type { Column as ColumnType } from '../types';
import { useKanbanStore } from '../store';
import { TaskCard } from './TaskCard';
import { UI_TEXT } from '../constants';
import { THEME_CLASSES, TRANSITIONS } from '../theme';

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
    <div className={`flex-1 flex-col ${THEME_CLASSES.background.column} p-2 rounded-md`}>
      <div className="px-2 py-3 flex items-center justify-between">
        <h2 className={`text-xs font-semibold ${THEME_CLASSES.text.body} uppercase tracking-wide`}>
          {column.title}
        </h2>
        <span className={`text-xs font-medium ${THEME_CLASSES.text.body} ${THEME_CLASSES.badge}`}>
          {tasks.length}
        </span>
      </div>

      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`flex-1 px-2 py-1 rounded-sm min-h-[200px] ${TRANSITIONS.default} ${
              snapshot.isDraggingOver ? THEME_CLASSES.background.column : ''
            }`}
          >
            <div className="space-y-2">
              {tasks.map((task, index) => (
                <TaskCard key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </div>
            {tasks.length === 0 && !snapshot.isDraggingOver && (
              <div className={`text-center ${THEME_CLASSES.text.body} py-8 text-sm`}>
                {UI_TEXT.COLUMN_EMPTY_MESSAGE}
              </div>
            )}
          </div>
        )}
      </Droppable>
    </div>
  );
};

