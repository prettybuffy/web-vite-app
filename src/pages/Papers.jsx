import React from 'react';

const papers = [
  {
    title: "How LLM Counselors Violate Ethical Standards in Mental Health Practice: A Practitioner-Informed Framework",
    authors: "Zainab Iftikhar, Amy Xiao, Sean Ransom, Jeff Huang, Harini Suresh",
    venue: "AAAI/AIES 2025",
    /*award: "(Best Paper Award)",*/
    link: "#"
  },
  {
    title: "Multimodal AI for Human-Computer Collaboration",
    authors: "David Kim, Sarah Chen, Jennifer Liu, Alex Thompson",
    venue: "ICML 2024",
    website: "[website]",
    link: "#"
  }
];

export default function Research() {
  return (
    <section className="p-4">
      <h2 className="text-xl font-medium text-slate-700 mb-4">
        Recent Publications</h2>
      
      <div className="space-y-4">
        {papers.map((paper, index) => (
          <div key={index} className="flex gap-4">
            {/*<div className="flex-shrink-0">
              <div className="w-12 h-16 bg-red-0 border border-red-300 rounded flex items-center justify-center relative">
                <div className="w-6 h-6 text-red-600" />
                <span className="text-xs text-red-600 font-medium absolute bottom-1">PDF</span>
              </div>
            </div>*/}
            
            <div className="flex-1">
              <h3 className="text-pink-600 hover:underline cursor-pointer">
                {paper.title}
              </h3>
              <p className="text-slate-700">{paper.authors}</p>
              <div className="flex items-center gap-2">
                <span className="text-slate-700">{paper.venue}</span>
                {paper.award && (
                  <span className="text-orange-600 font-medium">{paper.award}</span>
                )}
                {paper.website && (
                  <a href={paper.link} className="text-pink-600 hover:underline">
                    {paper.website}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}