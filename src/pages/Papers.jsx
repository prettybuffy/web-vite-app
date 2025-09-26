import React from 'react';
import pdfLogo from '/img/pdf_icon.svg'

const papers = [
 {
    title: "How LLM Counselors Violate Ethical Standards in Mental Health Practice: A Practitioner-Informed Framework",
    authors: "Zainab Iftikhar, Amy Xiao, Sean Ransom, Jeff Huang, Harini Suresh",
    venue: "AAAI/AIES 2025",
    /*award: "(Best Paper Award)",*/
    pdf: "/papers/EthicalFramework_AAAI25.pdf",
    doi: ""
  },
  {
    title: "Therapy as an NLP Task: Psychologists' Comparison of LLMs and Human Peers in CBT",
    authors: "Zainab Iftikhar, Sean Ransom, Amy Xiao, Nicole Nugent, Jeff Huang",
    venue: "preprint 2025",
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
    title: "Re-imagining Mental Health Access: The Role of Human, AI and Design",
    authors: "Zainab Iftikhar",
    venue: "CSCW 2024",
    pdf: "/papers/DC_CSCW24.pdf",
    doi: "https://dl.acm.org/doi/abs/10.1145/3678884.3682056"
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
    title: "Child-Computer Interaction in the Global South: Designing for Children on the Margins",
    authors: "Suleman Shahid, Zainab Iftikhar, Rabiah Arshad, Omar Mubin, Abdullah Al Mahmud",
    venue: "IDC 2021",
    pdf: "papers/ChildrenMargin_IDC21.pdf",
    doi: "https://dl.acm.org/doi/abs/10.1145/3459990.3460518"
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
      <h2 className="text-2xl font-normal">
         Papers </h2>
        <p className='text-sm mb-4'>(✧ denotes equal contribution)</p>
        
      <div className="space-y-4">
        {papers.map((paper, index) => (
          <div key={index} className="flex gap-2">
            <a href={paper.pdf} className="flex-shrink-0">
              <div className="w-12 h-16 flex items-center justify-center">
                <img src={pdfLogo} alt="PDF Logo" />
              </div>
            </a>   
            
            <div className="flex-1">
            <a href={paper.doi}>
              <h3 className="text-emphasis hover:text-highlight cursor-pointer">
                {paper.title}
              </h3>
            </a>
              <p className="">{paper.authors}</p>
              <div className="flex items-center gap-2">
                <span className="italic">{paper.venue}</span>
                {paper.award && (
                  <span className="text-orange-600 font-medium">{paper.award}</span>
                )}
                {paper.website && (
                  <a href={paper.website} className="text-emphasis hover:text-highlight">
                    [website]
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