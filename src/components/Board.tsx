import { DragDropContext } from '@hello-pangea/dnd';
import type { DropResult } from '@hello-pangea/dnd';
import { useKanbanStore } from '../store';
import { Column } from './Column';
import { AddTask } from './AddTask';
import type { ColumnId } from '../types';

export const Board = () => {
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
    <div className="min-h-screen bg-[#f4f5f7] p-2">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-[#172b4d]">
                Personal Kanban Board
              </h1>
            </div>
            <AddTask />
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
    </div>
  );
};

