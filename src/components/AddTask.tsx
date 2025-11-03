import { UI_TEXT } from '../constants';
import { THEME_CLASSES } from '../theme';

interface AddTaskProps {
  onOpenDialog: () => void;
}

export const AddTask = ({ onOpenDialog }: AddTaskProps) => {
  return (
    <button
      onClick={onOpenDialog}
      className={THEME_CLASSES.button.primary}
    >
      {UI_TEXT.CREATE_TASK_BUTTON}
    </button>
  );
};

