// UI Text Constants
export const UI_TEXT = {
  // Board
  BOARD_TITLE: 'Personal Kanban Board',
  BOARD_SUBTITLE: 'Software project',
  
  // Columns
  COLUMN_TODO: 'To Do',
  COLUMN_IN_PROGRESS: 'In Progress',
  COLUMN_DONE: 'Done',
  COLUMN_EMPTY_MESSAGE: 'Drop tasks here',
  
  // Task Actions
  CREATE_TASK_BUTTON: '+ Create Task',
  CREATE_TASK_TITLE: 'Create Task',
  TASK_TITLE_LABEL: 'Title',
  TASK_TITLE_REQUIRED: '*',
  TASK_TITLE_PLACEHOLDER: 'Enter task title',
  TASK_DESCRIPTION_LABEL: 'Description',
  TASK_DESCRIPTION_PLACEHOLDER: 'Add a description (optional)',
  DELETE_TASK_ARIA: 'Delete task',
  
  // Buttons
  BUTTON_CREATE: 'Create',
  BUTTON_CANCEL: 'Cancel',
  BUTTON_ADD_TASK: 'Add Task',

  // Validation
  VALIDATION_TITLE_REQUIRED: 'Please enter a task title',
  ARIA_MOVED_ITEM: 'You have moved the item',
} as const;

// Column Configuration
export const COLUMNS = {
  TODO: {
    id: 'todo' as const,
    title: UI_TEXT.COLUMN_TODO,
  },
  IN_PROGRESS: {
    id: 'inProgress' as const,
    title: UI_TEXT.COLUMN_IN_PROGRESS,
  },
  DONE: {
    id: 'done' as const,
    title: UI_TEXT.COLUMN_DONE,
  },
} as const;

// Storage Keys
export const STORAGE_KEYS = {
  KANBAN_STORAGE: 'kanban-storage',
} as const;

