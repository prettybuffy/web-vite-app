import React from 'react';
import pdfLogo from '/pdf_icon.svg'

const papers = [
  {
    title: "Therapy as an NLP Task: Psychologists' Comparison of LLMs and Human Peers in CBT",
    authors: "Zainab Iftikhar, Sean Ransom, Amy Xiao, Nicole Nugent, Jeff Huang",
    venue: "(under review) 2025",
    website: "[website]",
    link: "#"
  },
  {
    title: "How LLM Counselors Violate Ethical Standards in Mental Health Practice: A Practitoner-Informed Framework",
    authors: "Zainab Iftikhar, Amy Xiao, Sean Ransom, Jeff Huang, Harini Suresh",
    venue: "AAAI/AIES 2025",
    /*award: "(Best Paper Award)",*/
    link: "/src/files/AIES25_Framework.pdf"
  },
    {
    title: "Tone Indicators: Designing Accessible CMC Cues for Neurodiverse Users",
    authors: "Amy Xiao✧, Zainab Iftikhar✧, Jeff Huang",
    venue: "CSCW 2025",
    link: "/src/files/AIES25_Framework.pdf"
  },
  {
    title: "Machine and Human Understanding of Empathy in Online Peer Support: A Cognitive Behavioral Approach",
    authors: "Sara Syed✧, Zainab Iftikhar✧, Amy Xiao, Jeff Huang",
    venue: "CHI 2024",
    website: "[website]",
    link: "#"
  },
  {
    title: "“Together but not together”: Evaluating Typing Indicators for Interaction-Rich Communication",
    authors: "Zainab Iftikhar, Yumeng Ma, Jeff Huang",
    venue: "CHI 2023",
    website: "[website]",
    link: "#"
  },
  {
    title: "Technology, Privacy, and User Opinions of COVID-19 Mobile Apps for Contact Tracing: Systematic Search and Content Analysis",
    authors: "Mahmoud Elkhodr, Omar Mubin, Zainab Iftikhar, Maleeha Masood, Belal Alsinglawi, Suleman Shahid, Fady Alnajjar",
    venue: "JMIR 2021",
    link: "#"
  },
  {
    title: "Designing Parental Monitoring and Control Technology: A Systematic Review",
    authors: "Zainab Iftikhar, Qutaiba Rohan ul Haq, Osama Younus, Taha Sardar, Hammad Arif, Mobin Javed, Suleman Shahid",
    venue: "INTERACT 2021",
    link: "#"
  }
];

export default function Research() {
  return (
    <section className="p-4 text-slate-700">
      <h2 className="text-xl font-medium">
        Recent Publications </h2>
        <p className='text-sm mb-4'>(✧ denotes equal contribution)</p>
        
      <div className="space-y-4">
        {papers.map((paper, index) => (
          <div key={index} className="flex gap-2">
            <div className="flex-shrink-0">
              <div className="w-12 h-16 flex items-center justify-center">
                <img src={pdfLogo} alt="PDF Logo" />
              </div>
            </div>   
            
            <div className="flex-1">
              <h3 className="font-medium hover:text-pink-600 cursor-pointer">
                {paper.title}
              </h3>
              <p className="">{paper.authors}</p>
              <div className="flex items-center gap-2">
                <span className="">{paper.venue}</span>
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