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
    <div className="bg-white rounded-lg shadow-md">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-primary mb-4">Teaching</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg text-primary mb-2">Machine Learning Systems</h3>
            <ul className="list-disc list-inside text-secondary space-y-1">
              {courses.map((course, index) => (
                <li key={index}>
                  <a href={course.link} className="text-accent hover:underline">
                    {course.semester}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-primary mb-2">AI Ethics Seminar</h3>
            <ul className="list-disc list-inside text-secondary space-y-1">
              {seminars.map((seminar, index) => (
                <li key={index}>
                  <a href={seminar.link} className="text-accent hover:underline">
                    {seminar.semester}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}