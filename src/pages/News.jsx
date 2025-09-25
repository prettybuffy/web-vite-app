import React from 'react';

const news = [
 {
    title: "How AI Supports Student Mental Health in Higher Education",
    publisher: "ED Tech",
    link: "https://edtechmagazine.com/higher/how-ai-supports-student-mental-health-in-higher-education-perfcon",
    date: "Aug 08, 2025"
 },
 {
    title: "Nominated (twice!) as 1 of 4 PhD Students University-Wide at Brown for Google PhD Fellowship (Year 2024, Year 2025)",
    date: "Aug 08, 2025"
 },
 {
    title: "Spotlighted in Brown’s “Student Stories”",
    date: "May 14, 2025"
  },
  {
    title: "Zainab Iftikhar: Helping humans use artificial intelligence to better support mental health",
    publisher: "Brown News",
    link: "https://www.brown.edu/news/2025-05-14/iftikhar",
    date: "May 14, 2025"
  },
  {
    title: "Selected for the 2024 CSCW Doctoral Consortium (San José, Costa Rica)",
    publisher: "CSCW",
    date: "Aug 17, 2024"
  },
 {
    title: "Can AI understand empathy? See our talk at CHI’24 (Hawaii, USA)",
    link: "https://www.youtube.com/watch?v=9NX7uDciJe8",
    date: "May 17, 2024"
  },
  {
    title: "Brown CS PhD Student Zainab Iftikhar Asks How Machines Understand Empathy",
    publisher: "Brown CS",
    link: "https://blog.cs.brown.edu/2024/05/09/brown-cs-student-zainab-iftikhar-asks-how-machines-understand-empathy/",
    date: "May 17, 2024"
  },
  {
    title: "I received the Paris Kanellakis Graduate Fellowship Award for the Academic Year 2023-2024!",
    publisher: "",
    date: "May 06, 2024",
  },
  {
    title: "Invited to talk about The Role of Human, AI and Design in Mental Health Access",
    publisher: "Carnegie Mellon University",
    date: "Jan 22, 2024"
  },
  {
    title: "What Are You Typing? Enhancing Digital Communication Through Rich Typing Indicators",
    link: "https://posts.cs.brown.edu/2023/07/11/what-are-you-typing-enhancing-digital-communication-through-rich-typing-indicators/",
    pubisher: "Brown CS",
    date: "July 11, 2023"
  },
  {
    title: "Passed my comprehensive exams at Brown. I’m now a Ph.D. Candidate!",
    date: "May 31, 2023"
  },
  {
    title: "Can typing indicators improve task performance and online collaboration? See my talk at CHI’23 (Hamburg, Germany)",
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
        {news.map((news, index) => (
          <div key={index} className="flex gap-2">            
            <div className="flex-1">
            <a href={news.link}>
              <h3 className="cursor-pointer">
                {news.title}
              </h3>
            </a>
                {news.publisher && (
                  <span className="italic">{news.publisher} </span>
                )}
                {news.link && (
                  <a href={news.link} className="text-emphasis hover:text-highlight">
                    [Read More]
                  </a>
                )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}