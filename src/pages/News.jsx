import React from 'react';

const news = [
 {
    title: "Nominated (Twice!) as 1 of 4 PhD Students University-Wide at Brown for Google PhD Fellowship (Year 2024, Year 2025)",
    date: "Aug 30, 2025"
 },
 {
    title: "How AI Supports Student Mental Health in Higher Education",
    publisher: "ED Tech",
    link: "https://edtechmagazine.com/higher/how-ai-supports-student-mental-health-in-higher-education-perfcon",
    date: "Aug 08, 2025"
 },
 {
    title: "🎓 Spotlighted in Brown’s “Student Stories” for My Work on Human-AI Collaboration in Mental Health Support",
    date: "May 14, 2025"
  },
  {
    title: "Zainab Iftikhar: Helping Humans Use Artificial Intelligence to Better Support Mental Health",
    publisher: "Brown News",
    link: "https://www.brown.edu/news/2025-05-14/iftikhar",
    date: "May 14, 2025"
  },
  {
    title: "Selected for the 2024 CSCW Doctoral Consortium", //(San José, Costa Rica)
    publisher: "Computer-Supported Cooperative Work (CSCW)",
    date: "Aug 17, 2024"
  },
 {
    title: "Can AI Understand Empathy? See Our Talk at CHI’24", //(Hawaii, USA)
    link: "https://www.youtube.com/watch?v=9NX7uDciJe8",
    date: "May 17, 2024"
  },
  {
    title: "PhD Student Zainab Iftikhar Asks How Machines Understand Empathy",
    publisher: "Brown CS",
    link: "https://blog.cs.brown.edu/2024/05/09/brown-cs-student-zainab-iftikhar-asks-how-machines-understand-empathy/",
    date: "May 17, 2024"
  },
  {
    title: "Received the Paris Kanellakis Graduate Fellowship Award (2023-2024)",
    publisher: "",
    date: "May 06, 2024",
  },
  {
    title: "Invited Talk: The Role of Human, AI & Design in Mental Health Access",
    publisher: "Carnegie Mellon University",
    date: "Jan 22, 2024"
  },
  {
    title: "Enhancing Digital Communication Through Rich Typing Indicators",
    link: "https://posts.cs.brown.edu/2023/07/11/what-are-you-typing-enhancing-digital-communication-through-rich-typing-indicators/",
    publisher: "Brown CS",
    date: "July 11, 2023"
  },
  {
    title: "Passed My Comprehensive Exams at Brown. I’m Now a Ph.D. Candidate!",
    date: "May 31, 2023"
  },
  {
    title: "Can Typing Indicators Improve Task Performance & Online Collaboration?",// See my talk at CHI’23 (Hamburg, Germany)",
    link: "https://www.youtube.com/watch?v=SQ4VQey6zcI",
    date: "Apr 27, 2023"
  },
  {
    title: "Selected as the Study Group Leader at Brown CS Summer REU Site!",
    date: "June 1, 2022"
  },
  {
    title: "Started my Ph.D. at Brown!",
    date: "Sep 15, 2021"
  }
];

export default function News() {
  return (
    <section>
      <h2 className="text-2xl font-normal">
         News, Press, Awards & More </h2>
        
      <div className="space-y-4 mt-4">
        {news.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            <p className="py-0.5 text-sm font-normal text-gray-500">{item.date}</p>
            <div className="flex-1">
              <div>
                {item.publisher && (
                  <p className="italic text-emphasis">{item.publisher}</p>
                )}
                <p>
                  {item.link ? (
                    <a href={item.link} className="hover:text-highlight">
                      {item.title}
                    </a>
                  ) : (
                    item.title
                  )}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}