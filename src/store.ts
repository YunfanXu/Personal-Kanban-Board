import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Task, Column, ColumnId } from './types';

interface KanbanState {
  tasks: Record<string, Task>;
  columns: Record<ColumnId, Column>;
  addTask: (title: string, description?: string) => void;
  updateTask: (id: string, updates: Partial<Task>) => void;
  deleteTask: (id: string) => void;
  moveTask: (taskId: string, sourceColumnId: ColumnId, destinationColumnId: ColumnId, destinationIndex: number) => void;
}

const initialColumns: Record<ColumnId, Column> = {
  todo: { id: 'todo', title: 'To Do', taskIds: [] },
  inProgress: { id: 'inProgress', title: 'In Progress', taskIds: [] },
  done: { id: 'done', title: 'Done', taskIds: [] },
};

export const useKanbanStore = create<KanbanState>()(
  persist(
    (set) => ({
      tasks: {},
      columns: initialColumns,

      addTask: (title: string, description?: string) => {
        const newTask: Task = {
          id: `task-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          title,
          description,
          columnId: 'todo',
        };

        set((state) => ({
          tasks: { ...state.tasks, [newTask.id]: newTask },
          columns: {
            ...state.columns,
            todo: {
              ...state.columns.todo,
              taskIds: [...state.columns.todo.taskIds, newTask.id],
            },
          },
        }));
      },

      updateTask: (id: string, updates: Partial<Task>) => {
        set((state) => ({
          tasks: {
            ...state.tasks,
            [id]: { ...state.tasks[id], ...updates },
          },
        }));
      },

      deleteTask: (id: string) => {
        set((state) => {
          const task = state.tasks[id];
          if (!task) return state;

          const { [id]: deletedTask, ...remainingTasks } = state.tasks;
          const column = state.columns[task.columnId];

          return {
            tasks: remainingTasks,
            columns: {
              ...state.columns,
              [task.columnId]: {
                ...column,
                taskIds: column.taskIds.filter((taskId) => taskId !== id),
              },
            },
          };
        });
      },

      moveTask: (taskId: string, sourceColumnId: ColumnId, destinationColumnId: ColumnId, destinationIndex: number) => {
        set((state) => {
          const task = state.tasks[taskId];
          if (!task) return state;

          const sourceColumn = state.columns[sourceColumnId];
          const destinationColumn = state.columns[destinationColumnId];

          // Remove from source
          const newSourceTaskIds = sourceColumn.taskIds.filter((id) => id !== taskId);

          // Add to destination
          const newDestinationTaskIds = [...destinationColumn.taskIds];
          if (sourceColumnId === destinationColumnId) {
            // Moving within the same column
            const oldIndex = sourceColumn.taskIds.indexOf(taskId);
            newDestinationTaskIds.splice(oldIndex, 1);
            newDestinationTaskIds.splice(destinationIndex, 0, taskId);
          } else {
            // Moving to a different column
            newDestinationTaskIds.splice(destinationIndex, 0, taskId);
          }

          return {
            tasks: {
              ...state.tasks,
              [taskId]: { ...task, columnId: destinationColumnId },
            },
            columns: {
              ...state.columns,
              [sourceColumnId]: {
                ...sourceColumn,
                taskIds: sourceColumnId === destinationColumnId ? newDestinationTaskIds : newSourceTaskIds,
              },
              ...(sourceColumnId !== destinationColumnId && {
                [destinationColumnId]: {
                  ...destinationColumn,
                  taskIds: newDestinationTaskIds,
                },
              }),
            },
          };
        });
      },
    }),
    {
      name: 'kanban-storage',
    }
  )
);

