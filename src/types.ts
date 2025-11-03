export type ColumnId = 'todo' | 'inProgress' | 'done';

export interface Task {
  id: string;
  title: string;
  description?: string;
  columnId: ColumnId;
}

export interface Column {
  id: ColumnId;
  title: string;
  taskIds: string[];
}

