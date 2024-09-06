import { Worker } from '@/types/Worker';
import { useDraggable } from '@dnd-kit/core';

interface WorkerCardProps {
  worker: Worker;
  isAvailable: boolean;
}

export const WorkerCard: React.FC<WorkerCardProps> = ({ worker, isAvailable }) => {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id: worker.id,
  });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className={`p-4 rounded-lg shadow-md cursor-pointer ${
        isAvailable ? 'bg-gradient-to-r from-green-400 to-blue-500' : 'bg-gray-300'
      }`}
    >
      <p className="font-semibold text-lg">{worker.name}</p>
      <p className="text-sm text-gray-700">{worker.role}</p>
    </div>
  );
};
