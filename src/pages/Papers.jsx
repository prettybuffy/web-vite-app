import React from 'react';
import pdfLogo from '/pdf_icon.svg';

const papers = [
  {
    title: "How LLM Counselors Violate Ethical Standards in Mental Health Practice: A Practitoner-Informed Framework",
    authors: "Zainab Iftikhar, Amy Xiao, Sean Ransom, Jeff Huang, Harini Suresh",
    venue: "AAAI/AIES 2025",
    pdf: "/papers/EthicalFramework_AAAI25.pdf",
    doi: ""
  },
  {
    title: "Therapy as an NLP Task: Psychologists' Comparison of LLMs and Human Peers in CBT",
    authors: "Zainab Iftikhar, Sean Ransom, Amy Xiao, Nicole Nugent, Jeff Huang",
    venue: "(under review) 2025",
    website: "https://cheeseburgertherapy.org",
    pdf: "/papers/LLM_Therapy.pdf",
    doi: "https://arxiv.org/abs/2409.02244"
  },
  {
    title: "Tone Indicators: Designing Accessible CMC Cues for Neurodiverse Users",
    authors: "Amy Xiao✧, Zainab Iftikhar✧, Jeff Huang",
    venue: "CSCW 2025",
    pdf: "/papers/ToneIndicators_CSCW25.pdf",
    doi: "https://doi.org/10.1145/3757677"
  },
  {
    title: "Machine and Human Understanding of Empathy in Online Peer Support: A Cognitive Behavioral Approach",
    authors: "Sara Syed✧, Zainab Iftikhar✧, Amy Xiao, Jeff Huang",
    venue: "CHI 2024",
    website: "https://cheeseburgertherapy.org/",
    pdf: "/papers/DigitalEmpathy_CHI24.pdf",
    doi: "https://dl.acm.org/doi/10.1145/3613904.3642034"
  },
  {
    title: "“Together but not together”: Evaluating Typing Indicators for Interaction-Rich Communication",
    authors: "Zainab Iftikhar, Yumeng Ma, Jeff Huang",
    venue: "CHI 2023",
    website: "https://github.com/brownhci/live-typing",
    pdf: "/papers/LiveTyping_CHI23.pdf",
    doi: "https://dl.acm.org/doi/10.1145/3544548.3581248"
  },
  {
    title: "Technology, Privacy, and User Opinions of COVID-19 Mobile Apps for Contact Tracing: Systematic Search and Content Analysis",
    authors: "Mahmoud Elkhodr, Omar Mubin, Zainab Iftikhar, Maleeha Masood, Belal Alsinglawi, Suleman Shahid, Fady Alnajjar",
    venue: "JMIR 2021",
    pdf: "papers/ContactTracing_JMIR21.pdf",
    doi: "https://pubmed.ncbi.nlm.nih.gov/33493125/"
  },
  {
    title: "Designing Parental Monitoring and Control Technology: A Systematic Review",
    authors: "Zainab Iftikhar, Qutaiba Rohan ul Haq, Osama Younus, Taha Sardar, Hammad Arif, Mobin Javed, Suleman Shahid",
    venue: "INTERACT 2021",
    pdf: "papers/ParentalControls_INTERACT21.pdf",
    doi: "https://link.springer.com/chapter/10.1007/978-3-030-85610-6_39"
  }
];

export default function Research() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-primary mb-1">Recent Publications</h2>
      <p className='text-sm text-secondary mb-6'>(✧ denotes equal contribution)</p>
        
      <div className="space-y-6">
        {papers.map((paper, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-lg">
            <div className="p-6">
              <a href={paper.doi} target="_blank" rel="noopener noreferrer" className="block mb-2">
                <h3 className="text-xl font-semibold text-primary hover:text-accent transition-colors break-words">
                  {paper.title}
                </h3>
              </a>
              <p className="text-secondary mb-3">{paper.authors}</p>
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-secondary">{paper.venue}</span>
                <div className="flex items-center space-x-4">
                  {paper.website && (
                    <a href={paper.website} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                      Website
                    </a>
                  )}
                  <a href={paper.pdf} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-accent hover:underline">
                    <img src={pdfLogo} alt="PDF" className="h-5 w-5" />
                    <span>PDF</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}