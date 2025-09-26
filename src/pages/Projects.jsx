import React from 'react';

const projects = [
  {
    title: "Human-AI Collaboration for Scalable Mental Health",
    description: `Large Language Models (LLMs) are increasingly being used as ad-hoc therapists, often in ways that may lead users to overestimate the roles these systems can safely assume. 
    What does it mean to responsibly use AI to support mental health? How can we build AI systems that augment not replace human mental health providers?
    I have been exploring these questions from a Responsible AI perspective, in collaboration with clinical psychologists, AI ethicists, and mental health organizations. 
    Here are some of our ongoing efforts—both systems and frameworks—to better understand and situate AI's role in scaling therapy.`,
    system: `🍔 Cheeseburger Therapy: Cognitive Behavioral Therapy (CBT) provided by volunteer human counselors and prompted LLMs to scale mental health, 
    a collaboration with the Cheese team.`,
    link: "https://cheeseburgertherapy.org/",
    publications: "related publications: AAAI'25, CHI'24, CSCW'24",
    type: "ongoing"
  },
  {
    title: "ML-Driven Personal Data Visualization for Social and Behavioral Insights",
    description: `The way you communicated in 2018 is likely not the same as how you communicate today. While individuals change over time, our digital traces often remain static, fragmanted and disconnected.
    Using machine learning within a Personal Informatics framework, I'm building personalised systems that analyze long-term everyday digital traces to help users reflect on how they've changed over 
    time—through observable patterns in their routines and social behavior.`,
    //How has someone’s communication style evolved? Which relationships have grown or faded? This work investigates how personal 
    //data can serve as a mirror, helping people make sense of their digital histories in meaningful ways.
    //This work explores how personal data can serve as a mirror, enabling meaningful self-reflection through everyday digital traces.`,
    systems: `📈Sochiatrist: An ML-driven system for extracting, analyzing and visualizing social messaging to support 
    data-driven self-reflection.`,
    link: "https://sochiatrist.cs.brown.edu/",
    type: "ongoing"

  },
    {
    title: "Integrating Responsible AI into the Workplace",
    description: `As AI systems are adopted across several workplaces (from programming to healthcare), they are reshaping decision-making, collaboration, and task delegation. How then can we develop AI systems that augment 
    human expertise while preserving human oversight, accountability, and trust? Through mixed-methods studies, policy analysis and design research, 
    this research examines how organizations can responsibly integrate AI into daily workflows for real-world deployment
    while centering human values and ethics.`,
    publications: "related publications: AAAI'25 (framework)",
    type: "ongoing"
  },
  {
    title: "Accessible Cues for Increasing Social Presence in Messaging Platforms",
    description: `Messaging can be overwhelming. While typing cues reduce anxiety, they also increase pressure and stress. 
    I develop novel open-source customizable typing cues to balance information needs with privacy, focusing on improving communication accessibility 
    while reducing message-based cognitive load.`, //Using mixed methods, the work highlights how tailored cues can enhance clarity, confidence, and social connection, with implications for inclusive messaging design.`,
    systems: "💬 Live Typing: Real-time typing indicators to increase social presence in messaging platforms.",
    link: "https://github.com/brownhci/live-typing",
    publications: "related publications: CHI'23, CSCW'25",
    type: "past"
  }
];

const ongoingProjects = projects.filter(p => p.type === 'ongoing');
const pastProjects = projects.filter(p => p.type === 'past');

export default function Projects() {
  return (
    <section>
      <h2 className="text-2xl font-normal">Active Projects</h2>
      <div className="space-y-8 mt-4">
        {ongoingProjects.map((project, index) => (
          <div key={index}>
            <h3 className="font-semibold">{project.title}</h3>
            <blockquote className="border-l-4 border-gray-300 pl-4 mt-2 text-gray-600">
              {project.description}
            </blockquote>
            <div className="mt-2 space-y-2">
              {(project.system || project.systems) && (
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-sm font-medium hover:bg-blue-100 transition"
                >
                  <span className="bg-blue-200 text-blue-800 px-1.5 py-0.5 rounded-md text-xs font-semibold">
                    {project.system || project.systems}
                  </span>
                </a>
              )}
              {project.publications && (
                <div className="text-sm font-semibold">{project.publications}</div>
              )}
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-normal mt-10">Past Projects</h2>
      <div className="space-y-8 mt-4">
        {pastProjects.map((project, index) => (
          <div key={index}>
            <h3 className="font-semibold">{project.title}</h3>
            <blockquote className="border-l-4 border-gray-300 pl-4 mt-2 text-gray-600">
              {project.description}
            </blockquote>
            <div className="mt-2 space-y-2">
              {(project.system || project.systems) && (
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-sm font-medium hover:bg-blue-100 transition"
                >
                  <span className="bg-blue-200 text-blue-800 px-1.5 py-0.5 rounded-md text-xs font-semibold">
                    {project.system || project.systems}
                  </span>
                </a>
              )}
              {project.publications && (
                <div className="text-sm font-semibold">{project.publications}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}