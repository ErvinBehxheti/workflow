import React from "react";
import { useDroppable } from "@dnd-kit/core";
import { Worker } from "../types/Worker";

interface WeekDayProps {
  day: string;
  assignedWorker?: Worker | null;
}

export const WeekDay: React.FC<WeekDayProps> = ({ day, assignedWorker }) => {
  const { setNodeRef, isOver } = useDroppable({
    id: day,
  });

  const dayStyle = `p-4 rounded-lg transition-all duration-200 
  ${isOver ? 'bg-blue-100 shadow-lg' : 'bg-white'}`;

  return (
    <div
      ref={setNodeRef}
      className={dayStyle}
      
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
