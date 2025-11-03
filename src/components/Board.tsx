import { useState } from 'react';
import { DragDropContext } from '@hello-pangea/dnd';
import type { DropResult } from '@hello-pangea/dnd';
import { useKanbanStore } from '../store';
import { Column } from './Column';
import { AddTask } from './AddTask';
import { TaskDialog } from './TaskDialog';
import type { ColumnId } from '../types';
import { UI_TEXT } from '../constants';
import { THEME_CLASSES } from '../theme';

export const Board = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { columns, moveTask } = useKanbanStore();

  const handleDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    moveTask(
      draggableId,
      source.droppableId as ColumnId,
      destination.droppableId as ColumnId,
      destination.index
    );
  };

  return (
    <div className={`min-h-screen ${THEME_CLASSES.background.page} p-2`}>
      <div className={`${THEME_CLASSES.background.card} border ${THEME_CLASSES.border.light} shadow-sm`}>
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className={`text-2xl font-semibold ${THEME_CLASSES.text.heading}`}>
                {UI_TEXT.BOARD_TITLE}
              </h1>
            </div>
            <AddTask onOpenDialog={() => setIsDialogOpen(true)} />
          </div>
        </div>
      </div>

      <div className="p-6">
        <DragDropContext onDragEnd={handleDragEnd}>
          <div className="flex gap-4 w-full overflow-x-auto pb-4">
            <Column column={columns.todo} />
            <Column column={columns.inProgress} />
            <Column column={columns.done} />
          </div>
        </DragDropContext>
      </div>

      <TaskDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </div>
  );
};

