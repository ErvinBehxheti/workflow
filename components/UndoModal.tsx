import React from "react";

export const UndoModal: React.FC<{
  onConfirm: () => void;
  onCancel: () => void;
}> = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm text-center space-y-4 glass backdrop-blur-lg">
        <h3 className="text-xl font-semibold">Confirm Assignment</h3>
        <p>Are you sure you want to assign this worker?</p>
        <div className="flex justify-between mt-4">
          <button
            onClick={onCancel}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};
