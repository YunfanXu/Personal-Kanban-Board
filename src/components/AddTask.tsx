import { useState } from 'react';
import { useKanbanStore } from '../store';

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
        className="bg-[#0052cc] hover:bg-[#0747a6] text-white font-medium py-2 px-4 rounded text-sm transition-colors shadow-sm"
      >
        + Create Task
      </button>
    );
  }

  return (
    <>
      {/* Modal Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={handleCancel}
      />

      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md">
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-xl">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-[#172b4d]">Create Task</h2>
          </div>

          <div className="px-6 py-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#172b4d] mb-2">
                Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter task title"
                className="w-full px-3 py-2 text-sm border border-[#dfe1e6] rounded focus:outline-none focus:ring-2 focus:ring-[#0052cc] focus:border-transparent"
                autoFocus
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#172b4d] mb-2">
                Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Add a description (optional)"
                className="w-full px-3 py-2 text-sm border border-[#dfe1e6] rounded focus:outline-none focus:ring-2 focus:ring-[#0052cc] focus:border-transparent resize-none"
                rows={4}
              />
            </div>
          </div>

          <div className="px-6 py-4 bg-[#f4f5f7] rounded-b-lg flex justify-end gap-2">
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 text-sm font-medium text-[#42526e] hover:bg-[#ebecf0] rounded transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium bg-[#0052cc] hover:bg-[#0747a6] text-white rounded transition-colors"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

