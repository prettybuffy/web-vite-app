import React from 'react';

const projects = [
  {
    title: "Responsible Human-AI Collaboration for Scalable Mental Health",
    description: "systems: Cheeseburger Therapy An accessible chat-based platform that provides peer support through Cognitive Behavioral Therapy (CBT) to scale mental health, a collaboration with the Cheese team.",
    link: "#" // Placeholder link
  },
  {
    title: "Viusalisation Messaging Data to help users understand their routines and relationships",
    description: "systems:",
    link: "#" // Placeholder link
  },
  {
    title: "Accessible Cues for Improving Text Design/Messaging Platforms",
    description: "systems:",
    link: "#" // Placeholder link
  }
];

const pastProjects = [
  // Past projects will be added here
];

export default function Projects() {
  return (
    <section>
      <h2 className="text-2xl font-normal">Projects</h2>
      <div className="space-y-8 mt-4">
        {projects.map((project, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
            <blockquote className="border-l-4 border-gray-300 pl-4 mt-2 text-gray-600 italic">
              {project.description}
            </blockquote>
            <a href={project.link} className="text-blue-600 hover:underline mt-2 inline-block">
              related publications
            </a>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-normal mt-10">Past Projects</h2>
      <div className="space-y-4 mt-4">
        {/* Past projects content goes here */}
      </div>
    </section>
  );
}