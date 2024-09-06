import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { motion } from "framer-motion";
import { Worker } from "../types/Worker";

interface WorkerCardProps {
  worker: Worker;
  isAvailable: boolean;
}

export const WorkerCard: React.FC<WorkerCardProps> = ({
  worker,
  isAvailable,
}) => {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id: worker.id.toString(),
  });

  return (
    <motion.div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className={`p-4 rounded-lg shadow-md cursor-pointer transition ${
        isAvailable
          ? "bg-gradient-to-r from-green-400 to-blue-500 hover:shadow-xl hover:scale-105"
          : "bg-gray-300 hover:shadow-xl hover:scale-105"
      }`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <p className="font-semibold text-lg">{worker.name}</p>
      <p className="text-sm text-gray-700">{worker.role}</p>
      <p
        className={`text-xs mt-2 ${
          isAvailable ? "text-green-500" : "text-red-500"
        }`}
      >
        {isAvailable ? "Available" : "Unavailable"}
      </p>
    </motion.div>
  );
};
