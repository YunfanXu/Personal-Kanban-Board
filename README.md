# Personal Kanban Board

A single-user Kanban-style task board built with React, TypeScript, and Zustand that persists tasks between reloads.

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
│   ├── Board.tsx          # Main container with DragDropContext
│   ├── Column.tsx         # Individual column (To Do, In Progress, Done)
│   ├── TaskCard.tsx       # Draggable task card with inline editing
│   └── AddTask.tsx        # Modal form for creating new tasks
├── store.ts               # Zustand store with persist middleware
├── types.ts               # TypeScript interfaces and types
└── App.tsx                # Root component
```

### State Management

- **Zustand** with persist middleware for automatic localStorage synchronization
- Normalized state structure with tasks stored by ID for efficient lookups
- Columns maintain arrays of task IDs for ordering
- All state mutations go through Zustand actions (addTask, updateTask, deleteTask, moveTask)


## Shortcuts Taken
1.	Zustand Persist – Leveraged automatic localStorage synchronization by wrapping the store with persist(), eliminating boilerplate code.
2.	@hello-pangea/dnd – Implemented drag-and-drop functionality with a lightweight, well-maintained library.
3.	AI Assistance – Used AI tools to accelerate coding and improve productivity.


## License

MIT
