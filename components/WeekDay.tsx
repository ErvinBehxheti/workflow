import React from "react";
import { useDroppable } from "@dnd-kit/core";
import { Worker } from "../types/Worker";

interface WeekDayProps {
  day: string;
  assignedWorker?: Worker | null;
}

export const WeekDay: React.FC<WeekDayProps> = ({ day, assignedWorker }) => {
  const { setNodeRef } = useDroppable({
    id: day,
  });

  return (
    <div
      ref={setNodeRef}
      className="border border-gray-300 rounded-lg p-4 shadow-md min-h-[150px] bg-white"
    >
      <p className="font-semibold text-lg mb-4">{day}</p>
      {assignedWorker ? (
        <div className="p-2 bg-gradient-to-r from-purple-400 to-blue-500 text-white rounded-lg shadow">
          <p>{assignedWorker.name}</p>
          <p className="text-sm">{assignedWorker.role}</p>
        </div>
      ) : (
        <p className="text-sm text-gray-500">No worker assigned</p>
      )}
    </div>
  );
};
