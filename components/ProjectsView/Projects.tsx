"use client";
import React, { useState } from "react";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [isProjectMenuOpen, setIsProjectMenuOpen] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const projects = [
    { name: "Ndertimtari", tasks: ["Beton", "Fasad", "Skele"] },
    { name: "Mobileri", tasks: ["Kuzhina", "Komoda", "Trapezari"] },
    { name: "IT", tasks: ["Servera", "Restartime", "Konfigurime"] },
  ];

  return (
    <div className="flex h-screen">
      {/* Primary Sidebar */}
      <div
        className={`bg-gray-900 text-white p-4 transition-all duration-300 ${
          isProjectMenuOpen ? "w-32" : "w-64"
        }`}
      >
        <div className="flex justify-between items-center">
          <button
            className="bg-blue-600 p-2 rounded"
            onClick={() => {
              setIsProjectMenuOpen(!isProjectMenuOpen);
            }}
          >
            Projects
          </button>
        </div>

        {/* Conditionally render either tasks for a project or all projects */}
        {showAllProjects ? (
          <div className="mt-4">
            <h3 className="text-xl font-bold">All Projects</h3>
            <ul>
              {projects.map((project, idx) => (
                <li key={idx}>
                  <h4 className="text-lg mt-2">{project.name}</h4>
                  <ul>
                    {project.tasks.map((task, tIdx) => (
                      <li key={tIdx} className="py-1 text-gray-300">
                        {task}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="mt-4">
            <h3 className="text-xl font-bold">
              {projects[activeProject].name}
            </h3>
            <ul>
              {projects[activeProject].tasks.map((task, idx) => (
                <li key={idx} className="py-2 border-b border-gray-700">
                  {task}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Secondary Sidebar for Projects */}
      <div
        className={`bg-gray-800 text-white w-32 p-4 transition-all duration-300 ${
          isProjectMenuOpen ? "block" : "hidden"
        }`}
      >
        <h2 className="text-lg font-semibold mb-4">Projects</h2>
        <ul>
          {/* Filter out the currently active project */}
          {projects
            .filter((_, idx) => idx !== activeProject)
            .map((project, idx) => (
              <li
                key={idx}
                className="py-2 border-b border-gray-700 cursor-pointer hover:bg-gray-700"
                onClick={() => {
                  setActiveProject(
                    projects.findIndex((p) => p.name === project.name)
                  ); // Find correct index and set it as active
                  setIsProjectMenuOpen(false);
                  setShowAllProjects(false); // Reset "See All" view
                }}
              >
                {project.name}
              </li>
            ))}
          <li
            className="py-2 mt-4 text-blue-400 cursor-pointer"
            onClick={() => {
              setShowAllProjects(true);
              setIsProjectMenuOpen(false);
            }}
          >
            See All Projects
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
