import React from 'react';

const gradesData = [
  {
    grade: 'Kindergarten',
    teachers: [
      { id: 1, name: 'Teacher A', resources: '/Kindergarten/teacher-a-resources' },
      { id: 2, name: 'Teacher B', resources: '/Kindergarten/teacher-b-resources' },
      { id: 3, name: 'Teacher C', resources: '/Kindergarten/teacher-c-resources' },
    ],
  },
  {
    grade: 'Grade 1',
    teachers: [
      { id: 1, name: 'Teacher A', resources: '/Grade1/teacher-a-resources' },
      { id: 2, name: 'Teacher B', resources: '/Grade1/teacher-b-resources' },
      { id: 3, name: 'Teacher C', resources: '/Grade1/teacher-c-resources' },
    ],
  },
  {
    grade: 'Grade 2',
    teachers: [
      { id: 3, name: 'Teacher C', resources: '/Grade2/teacher-c-resources' },
      { id: 4, name: 'Teacher D', resources: '/Grade2/teacher-d-resources' },
      { id: 5, name: 'Teacher E', resources: '/Grade2/teacher-e-resources' },
    ],
  },
  // Add more grades and teachers as needed
];

const Resources = () => {
  return (
    <section>
      <h2>Teacher Resources</h2>
      {gradesData.map((gradeData) => (
        <div key={gradeData.grade}>
          <h3>{gradeData.grade}</h3>
          <ul>
            {gradeData.teachers.map((teacher) => (
              <li key={teacher.id}>
                <a href={teacher.resources}>{teacher.name}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Resources;
