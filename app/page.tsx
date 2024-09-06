"use client";
import { ProjectCard } from "@/components/ProjectCard";
import { WeekDay } from "@/components/WeekDay";
import { WorkerCard } from "@/components/WorkerCard";
import React, { useState } from "react";

const workers = [
  { id: 1, name: "John Doe", role: "Developer", isAvailable: true },
  { id: 2, name: "Jane Smith", role: "Designer", isAvailable: true },
  { id: 3, name: "Alex Johnson", role: "Tester", isAvailable: false },
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
  const [assignedWorkers, setAssignedWorkers] = useState<Record<string, any>>(
    {}
  );

  return (
    <div className="flex h-screen">
      {/* Left Sidebar - Projects */}
      <div className="w-1/4 bg-white shadow-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Projects</h2>
        <div className="space-y-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* Main Section - Week Grid */}
      <div className="flex-grow bg-gray-100 p-4">
        <h2 className="text-xl font-semibold mb-4">Week Planner</h2>
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
      <div className="w-1/4 bg-white shadow-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Available Workers</h2>
        <div className="space-y-4">
          {workers
            .filter((worker) => worker.isAvailable)
            .map((worker) => (
              <WorkerCard key={worker.id} worker={worker} isAvailable={true} />
            ))}
        </div>

        <h2 className="text-xl font-semibold mt-8 mb-4">Unavailable Workers</h2>
        <div className="space-y-4">
          {workers
            .filter((worker) => !worker.isAvailable)
            .map((worker) => (
              <WorkerCard key={worker.id} worker={worker} isAvailable={false} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default page;
