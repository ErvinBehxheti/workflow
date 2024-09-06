"use client";
import { DndContext } from "@dnd-kit/core";
import { useState } from "react";
import { Worker } from "@/types/Worker";
import { ProjectCard } from "@/components/ProjectCard";
import { WeekDay } from "@/components/WeekDay";
import { WorkerCard } from "@/components/WorkerCard";
import { UndoModal } from "@/components/UndoModal";

const workers: Worker[] = [
  { id: 1, name: "John Doe", role: "Developer", isAvailable: true },
  { id: 2, name: "Jane Smith", role: "Designer", isAvailable: true },
  { id: 3, name: "Alex Johnson", role: "Tester", isAvailable: true },
];

const projects = [
  { id: 1, name: "Project Alpha", description: "AI project" },
  { id: 2, name: "Project Beta", description: "Web app redesign" },
];

const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const page = () => {
  const [assignedWorkers, setAssignedWorkers] = useState<
    Record<string, Worker | null>
  >({});
  const [availableWorkers, setAvailableWorkers] = useState(workers);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pendingAssignment, setPendingAssignment] = useState<{
    worker: Worker;
    day: string;
  } | null>(null);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    const workerId = parseInt(active.id);

    const worker = availableWorkers.find((w) => w.id === workerId);
    if (worker && over) {
      // If worker dropped on a day, trigger modal
      const day = over.id;

      setPendingAssignment({ worker, day });
      setIsModalOpen(true);
    } else if (over === null) {
      // Worker dropped back to the available/unavailable list
      setAvailableWorkers((prev) =>
        prev.map((w) => (w.id === workerId ? { ...w, isAvailable: true } : w))
      );

      setAssignedWorkers((prev) => {
        const updated = { ...prev };
        Object.keys(updated).forEach((key) => {
          if (updated[key]?.id === workerId) {
            updated[key] = null;
          }
        });
        return updated;
      });
    }
  };

  const handleConfirmAssignment = () => {
    if (pendingAssignment) {
      const { worker, day } = pendingAssignment;

      // Assign the worker to the specified day
      setAssignedWorkers((prev) => ({
        ...prev,
        [day]: worker,
      }));

      setAvailableWorkers((prev) =>
        prev.map((w) => (w.id === worker.id ? { ...w, isAvailable: false } : w))
      );
    }
    setIsModalOpen(false);
    setPendingAssignment(null);
  };

  const handleCancelAssignment = () => {
    setIsModalOpen(false);
    setPendingAssignment(null);
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex h-screen font-poppins bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
        {/* Left Sidebar - Projects */}
        <div className="w-1/4 bg-white shadow-xl p-6 glass backdrop-blur-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-6">Projects</h2>
          <div className="space-y-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* Main Section - Week Grid */}
        <div className="flex-grow bg-white shadow-xl rounded-lg p-6 mx-4 glass backdrop-blur-lg">
          <h2 className="text-2xl font-semibold mb-6">Week Planner</h2>
          <div className="grid grid-cols-7 gap-4">
            {weekDays.map((day) => (
              <WeekDay
                key={day}
                day={day}
                assignedWorker={assignedWorkers[day]}
              />
            ))}
          </div>
        </div>

        {/* Right Sidebar - Workers */}
        <div className="w-1/4 bg-white shadow-xl p-6 glass backdrop-blur-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-6">Available Workers</h2>
          <div className="space-y-6">
            {availableWorkers
              .filter((worker) => worker.isAvailable)
              .map((worker) => (
                <WorkerCard key={worker.id} worker={worker} />
              ))}
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-6">
            Unavailable Workers
          </h2>
          <div className="space-y-6">
            {availableWorkers
              .filter((worker) => !worker.isAvailable)
              .map((worker) => (
                <WorkerCard key={worker.id} worker={worker} />
              ))}
          </div>
        </div>

        {/* Undo Modal */}
        {isModalOpen && (
          <UndoModal
            onConfirm={handleConfirmAssignment}
            onCancel={handleCancelAssignment}
          />
        )}
      </div>
    </DndContext>
  );
};

export default page;
