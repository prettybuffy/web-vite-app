import React from 'react';

const projects = [
  {
    title: "Responsible Human-AI Collaboration for Scalable Mental Health",
    description: `Large Language Models (LLMs) are increasingly being used as ad-hoc therapists, often in ways that may lead users to overestimate the roles these systems can safely assume. 
    What does it mean to responsibly use AI to support mental health? How can we build AI systems that augment not replace human mental health providers?
    I have been exploring these questions from a Responsible AI perspective, in collaboration with clinical psychologists, AI ethicists, and mental health organizations. 
    Here are some of our ongoing efforts—both systems and frameworks—to better understand and situate AI's role in scaling therapy.`,
    system: "Cheeseburger Therapy: An accessible chat-based platform that provides peer support through Cognitive Behavioral Therapy (CBT) to scale mental health, a collaboration with the Cheese team.",
    link: "#",
    publications: "related publications: AAAI'25, CHI'24, CSCW'24"
  },
  {
    title: "ML-Driven Personal Data Visualization for Social and Behavioral Insights",
    description: `The way you communicated in 2018 is likely not the same as how you communicate today. While individuals change over time, our digital traces often remain static, fragmanted and disconnected.
    Using machine learning within a Personal Informatics framework, I'm building personalised systems that analyze long-term everyday digital traces to help users reflect on how they've changed over 
    time—through observable patterns in their routines and social behavior.`,
    //How has someone’s communication style evolved? Which relationships have grown or faded? This work investigates how personal 
    //data can serve as a mirror, helping people make sense of their digital histories in meaningful ways.
    //This work explores how personal data can serve as a mirror, enabling meaningful self-reflection through everyday digital traces.`,
    systems: "Sochiatrist: An ML-driven system for extracting, analyzing and visualizing social messaging to support data-driven self-reflection.",
    link: "#",
  },
  {
    title: "Accessible Cues for Increasing Social Presence in Messaging Platforms",
    description: `Messaging can be overwhelming. While typing indicators and read receipts offer cues that reduce anxiety, they can also increase pressure to respond quickly and feelings of being monitored. 
    This line of my research explores customizable designs that balance information needs with privacy and autonomy. It focuses on improving communication accessibility by introducing expressive typing indicators and tone cues to increase 
    social presence while reducing message-based cognitive 
    load.`, //Using mixed methods, the work highlights how tailored cues can enhance clarity, confidence, and social connection, with implications for inclusive messaging design.`,
    systems: "Live Typing: Real-time typing indicators designed to increasing social presence in messaging platforms.",
    link: "#",
    publications: "related publications: CHI'23, CSCW'25"

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
            <h3 className="font-semibold">{project.title}</h3>
            <blockquote className="border-l-4 border-gray-300 pl-4 mt-2 text-gray-600">
              {project.description}
            </blockquote>
            <a href={project.link} className="text-blue-600 hover:underline mt-2 inline-block">
              systems: {project.system || project.systems} {project.publications && `| ${project.publications}`}
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