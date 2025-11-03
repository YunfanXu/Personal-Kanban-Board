# Personal Kanban Board

A single-user Kanban-style task board built with React, TypeScript, and Zustand that persists tasks between reloads.

## Features

- ✅ **Drag & Drop** - Intuitive task movement between columns
- ✅ **Persistent Storage** - Tasks automatically saved to localStorage
- ✅ **Inline Editing** - Edit task titles and descriptions directly
- ✅ **Form Validation** - Required field validation with helpful tooltips
- ✅ **Responsive Design** - Works on desktop and mobile devices
- ✅ **Clean Architecture** - Separation of concerns with reusable components

## Tech Stack

- **React** with TypeScript
- **Zustand** for state management with persist middleware
- **@hello-pangea/dnd** for drag and drop functionality
- **Tailwind CSS** for styling
- **Vite** for fast development and building

## Getting Started

### Prerequisites

- Node.js 20.19+ or 22.12+ (recommended)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Architecture

### Component Structure

```
src/
├── components/
│   ├── Board.tsx          # Main container with DragDropContext and dialog state
│   ├── Column.tsx         # Individual column (To Do, In Progress, Done)
│   ├── TaskCard.tsx       # Draggable task card with inline editing
│   ├── AddTask.tsx        # Simple button component to trigger task creation
│   └── TaskDialog.tsx     # Reusable modal dialog for creating tasks
├── constants.ts           # Centralized UI text and configuration
├── theme.ts               # Centralized color palette and theme utilities
├── store.ts               # Zustand store with persist middleware
├── types.ts               # TypeScript interfaces and types
└── App.tsx                # Root component
```

### State Management

- **Zustand** with persist middleware for automatic localStorage synchronization
- Normalized state structure with tasks stored by ID for efficient lookups
- Columns maintain arrays of task IDs for ordering
- All state mutations go through Zustand actions (addTask, updateTask, deleteTask, moveTask)

### Styling & Theme

- **Tailwind CSS v4** with `@import "tailwindcss"` syntax
- **Centralized theme system** (`src/theme.ts`) with modern teal/green color palette
  - Primary: `rgb(52, 211, 153)` (Teal-400)
  - Pre-built class strings for consistent UI patterns
- **Centralized constants** (`src/constants.ts`) for all UI text and configuration
- Single source of truth for colors and text

### Code Organization
- All colors defined in `theme.ts` 
- All UI text in `constants.ts`

## Time spent
Used around 1 hour

## Shortcuts Taken
1.	Zustand Persist – Leveraged automatic localStorage synchronization by wrapping the store with persist(), eliminating boilerplate code.
2.	@hello-pangea/dnd – Implemented drag-and-drop functionality with a lightweight, well-maintained library.
3.	AI Assistance – Used AI tools to accelerate coding and improve productivity.


## License

MIT
