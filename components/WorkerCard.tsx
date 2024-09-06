import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { Worker } from '@/types/Worker';

interface WorkerCardProps {
  worker: Worker;
}

export const WorkerCard: React.FC<WorkerCardProps> = ({ worker }) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: worker.id,
  });

  // Define styles to indicate that the card is draggable
  const cardStyle = `p-4 mb-2 rounded-lg transition-all duration-200 cursor-pointer 
    ${isDragging ? 'shadow-xl scale-105' : 'shadow-md'} 
    ${worker.isAvailable ? 'bg-green-100' : 'bg-red-100'}`;

  const style = {
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
    opacity: isDragging ? 0.75 : 1,  // Make it a bit transparent while dragging
  };

  return (
    <div 
      ref={setNodeRef} 
      style={style} 
      className={cardStyle} 
      {...listeners} 
      {...attributes}
    >
      <h3 className="font-bold">{worker.name}</h3>
      <p className="text-sm text-gray-500">{worker.role}</p>
      <p className="text-xs text-gray-400">{worker.isAvailable ? 'Available' : 'Unavailable'}</p>
    </div>
  );
};
