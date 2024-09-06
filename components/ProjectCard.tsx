"use client";
import React from "react";
import { Project } from "../types/Project";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="font-semibold text-lg">{project.name}</h3>
      <p className="text-sm text-gray-500">{project.description}</p>
    </div>
  );
};
