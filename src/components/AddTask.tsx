import { useState } from 'react';
import { useKanbanStore } from '../store';
import { UI_TEXT } from '../constants';
import { THEME_CLASSES, COLORS } from '../theme';

export const AddTask = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { addTask } = useKanbanStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      addTask(title.trim(), description.trim() || undefined);
      setTitle('');
      setDescription('');
      setIsOpen(false);
    }
  };

  const handleCancel = () => {
    setTitle('');
    setDescription('');
    setIsOpen(false);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className={THEME_CLASSES.button.primary}
      >
        {UI_TEXT.CREATE_TASK_BUTTON}
      </button>
    );
  }

  return (
    <>
      <div
        className="fixed inset-0 z-40"
        style={{ backgroundColor: COLORS.background.overlay }}
        onClick={handleCancel}
      />

      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md">
        <form onSubmit={handleSubmit} className={`${THEME_CLASSES.background.card} rounded-lg shadow-xl`}>
          <div className={`px-6 py-4 border-b ${THEME_CLASSES.border.light}`}>
            <h2 className={`text-lg font-semibold ${THEME_CLASSES.text.heading}`}>
              {UI_TEXT.CREATE_TASK_TITLE}
            </h2>
          </div>

          <div className="px-6 py-4 space-y-4">
            <div>
              <label className={`block text-sm font-medium ${THEME_CLASSES.text.heading} mb-2`}>
                {UI_TEXT.TASK_TITLE_LABEL} <span style={{ color: COLORS.status.error }}>{UI_TEXT.TASK_TITLE_REQUIRED}</span>
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder={UI_TEXT.TASK_TITLE_PLACEHOLDER}
                className={THEME_CLASSES.input.base}
                autoFocus
              />
            </div>

            <div>
              <label className={`block text-sm font-medium ${THEME_CLASSES.text.heading} mb-2`}>
                {UI_TEXT.TASK_DESCRIPTION_LABEL}
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder={UI_TEXT.TASK_DESCRIPTION_PLACEHOLDER}
                className={THEME_CLASSES.input.textarea}
                rows={4}
              />
            </div>
          </div>

          <div className={`px-6 py-4 ${THEME_CLASSES.background.modal} rounded-b-lg flex justify-end gap-2`}>
            <button
              type="button"
              onClick={handleCancel}
              className={THEME_CLASSES.button.secondary}
            >
              {UI_TEXT.BUTTON_CANCEL}
            </button>
            <div className="relative group">
              <button
                type="submit"
                disabled={!title.trim()}
                className={`${THEME_CLASSES.button.primary} disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {UI_TEXT.BUTTON_CREATE}
              </button>
              {!title.trim() && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {UI_TEXT.VALIDATION_TITLE_REQUIRED}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900"></div>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

