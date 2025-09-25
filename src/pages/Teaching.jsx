import React from 'react';

const courses = [
  { semester: "Fall 2020", link: "#" },
  { semester: "Fall 2021", link: "#" },
  { semester: "Fall 2022", link: "#" },
  { semester: "Fall 2023", link: "#" },
  { semester: "Fall 2024", link: "#" },
  { semester: "Spring 2025", link: "#" }
];

const seminars = [
  { semester: "Spring 2022", link: "#" },
  { semester: "Spring 2023", link: "#" },
  { semester: "Spring 2024", link: "#" }
];

export default function Teaching() {
  return (
    <div className="space-y-6">
      
      <section className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-medium text-slate-800 mb-6">Teaching</h2>
        
        <div className="mb-8">
          <h3 className="font-medium text-slate-800 mb-3">Machine Learning Systems</h3>
          <div className="flex flex-wrap gap-1">
            {courses.map((course, index) => (
              <React.Fragment key={index}>
                <a 
                  href={course.link} 
                  className="text-emphasis text-highlight text-sm"
                >
                  {course.semester}
                </a>
                {index < courses.length - 1 && (
                  <span className="text-slate-400 text-sm">, </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="font-medium text-slate-800 mb-3">AI Ethics Seminar</h3>
          <div className="flex flex-wrap gap-1">
            {seminars.map((seminar, index) => (
              <React.Fragment key={index}>
                <a 
                  href={seminar.link} 
                  className="text-emphasis text-highlight text-sm"
                >
                  {seminar.semester}
                </a>
                {index < seminars.length - 1 && (
                  <span className="text-slate-400 text-sm">, </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}