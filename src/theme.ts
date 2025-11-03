export const COLORS = {
  primary: {
    DEFAULT: 'rgb(52, 211, 153)',
    hover: 'rgb(45, 190, 138)',
    light: 'rgb(94, 234, 212)',
    dark: 'rgb(20, 184, 166)',
  },

  text: {
    primary: 'rgb(23, 43, 77)',
    secondary: 'rgb(94, 108, 132)',
    tertiary: 'rgb(66, 82, 110)',
    inverse: 'rgb(255, 255, 255)',
  },

  background: {
    page: 'rgb(244, 245, 247)',
    card: 'rgb(255, 255, 255)',
    column: 'rgb(235, 236, 240)',
    hover: 'rgb(244, 245, 247)',
    modal: 'rgb(244, 245, 247)',
    overlay: 'rgba(0, 0, 0, 0.5)',
  },

  border: {
    DEFAULT: 'rgb(223, 225, 230)',
    light: 'rgb(235, 236, 240)',
    focus: 'rgb(52, 211, 153)',
  },

  status: {
    error: 'rgb(222, 53, 11)',
    errorHover: 'rgb(191, 38, 0)',
    success: 'rgb(52, 211, 153)',
    warning: 'rgb(255, 171, 0)',
  },

  interactive: {
    badge: 'rgb(223, 225, 230)',
    scrollbar: 'rgb(193, 199, 208)',
    scrollbarHover: 'rgb(165, 173, 186)',
  },
} as const;

export const THEME_CLASSES = {
  button: {
    primary: 'bg-[rgb(52,211,153)] hover:bg-[rgb(45,190,138)] text-white font-medium py-2 px-4 rounded text-sm transition-colors shadow-sm',
    secondary: 'px-4 py-2 text-sm font-medium text-[rgb(66,82,110)] hover:bg-[rgb(235,236,240)] rounded transition-colors',
    danger: 'text-[rgb(94,108,132)] hover:text-[rgb(222,53,11)] transition-all',
  },

  card: {
    base: 'bg-[rgb(255,255,255)] rounded-md shadow-sm border border-[rgb(223,225,230)] transition-all',
    hover: 'hover:bg-[rgb(244,245,247)]',
    dragging: 'shadow-lg rotate-1 ring-2 ring-[rgb(52,211,153)]',
  },

  input: {
    base: 'w-full px-3 py-2 text-sm border border-[rgb(223,225,230)] rounded focus:outline-none focus:ring-2 focus:ring-[rgb(52,211,153)] focus:border-transparent',
    textarea: 'w-full px-3 py-2 text-sm border border-[rgb(223,225,230)] rounded focus:outline-none focus:ring-2 focus:ring-[rgb(52,211,153)] focus:border-transparent resize-none',
  },

  text: {
    heading: 'text-[rgb(23,43,77)]',
    body: 'text-[rgb(94,108,132)]',
    subtle: 'text-[rgb(66,82,110)]',
  },

  background: {
    page: 'bg-[rgb(244,245,247)]',
    card: 'bg-[rgb(255,255,255)]',
    column: 'bg-[rgb(235,236,240)]',
    modal: 'bg-[rgb(244,245,247)]',
  },

  border: {
    default: 'border-[rgb(223,225,230)]',
    light: 'border-[rgb(235,236,240)]',
  },

  badge: 'bg-[rgb(223,225,230)] rounded-full px-2 py-0.5',
  deleteButton: 'opacity-0 group-hover:opacity-100 text-[rgb(94,108,132)] hover:text-[rgb(222,53,11)] transition-all flex-shrink-0 p-1 rounded hover:bg-[rgb(235,236,240)]',
} as const;

export const SPACING = {
  page: 'p-6',
  card: 'p-3',
  column: 'p-2',
  modal: {
    padding: 'px-6 py-4',
    gap: 'space-y-4',
  },
} as const;

export const TRANSITIONS = {
  default: 'transition-colors',
  all: 'transition-all',
  fast: 'transition-all duration-150',
  medium: 'transition-all duration-300',
} as const;