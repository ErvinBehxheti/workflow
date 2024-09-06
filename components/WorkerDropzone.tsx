import React from 'react';
import { useDroppable } from '@dnd-kit/core';

interface WorkerDropzoneProps {
  zoneType: 'available' | 'unavailable';
  children: React.ReactNode;
}

export const WorkerDropzone: React.FC<WorkerDropzoneProps> = ({ zoneType, children }) => {
  const { setNodeRef } = useDroppable({
    id: zoneType,
  });

  return (
    <div ref={setNodeRef} className="p-4 space-y-4">
      {children}
    </div>
  );
};
