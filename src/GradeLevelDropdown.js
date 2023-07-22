import React from 'react';

const GradeLevelDropdown = ({ selectedGrade, handleGradeChange }) => {
  // Define grade levels and teachers
  const gradeLevels = ['Kindergarten', '1st Grade', '2nd Grade', '3rd Grade', '4th Grade', '5th Grade'];
  const teachersByGrade = {
    'Kindergarten': ['Teacher A', 'Teacher B', 'Teacher C'],
    '1st Grade': ['Teacher D', 'Teacher E', 'Teacher F'],
    '2nd Grade': ['Teacher G', 'Teacher H', 'Teacher I'],
    '3rd Grade': ['Teacher J', 'Teacher K', 'Teacher L'],
    '4th Grade': ['Teacher M', 'Teacher N', 'Teacher O'],
    '5th Grade': ['Teacher P', 'Teacher Q', 'Teacher R'],
  };

  const selectedTeachers = teachersByGrade[selectedGrade];

  return (
    <div>
      <h2>Select Grade Level:</h2>
      <select value={selectedGrade} onChange={handleGradeChange}>
        {gradeLevels.map((grade) => (
          <option key={grade} value={grade}>
            {grade}
          </option>
        ))}
      </select>
      <h2>Teachers for {selectedGrade}:</h2>
      <ul>
        {selectedTeachers.map((teacher) => (
          <li key={teacher}>{teacher}</li>
        ))}
      </ul>
    </div>
  );
};

export default GradeLevelDropdown;
