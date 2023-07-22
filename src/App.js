import React from 'react';
import Header from './components/header';
import Announcements from './components/pages/Announcements';
import Assignments from './components/pages/Assignments';
import Resources from './components/pages/Resources';
import TeacherClassroom from './components/pages/TeacherClassroom'; // Correct file path

import GradeLevelDropdown from './GradeLevelDropdown'; // Correct file path

import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = React.useState('announcements');
  const [selectedGrade, setSelectedGrade] = React.useState('Kindergarten');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleGradeChange = (event) => {
    setSelectedGrade(event.target.value);
  };

  return (
    <div className="App">
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />

      {/* Main content section */}
      <main className="App-content">
        {/* Render the content based on the selected page */}
        {currentPage === 'announcements' && <Announcements />}
        {currentPage === 'assignments' && <Assignments />}
        {currentPage === 'resources' && <Resources />}
        {currentPage === 'TeacherClassroom' && <TeacherClassroom />}

        {/* Render GradeLevelDropdown component */}
        <GradeLevelDropdown selectedGrade={selectedGrade} handleGradeChange={handleGradeChange} />
      </main>
    </div>
  );
};

export default App;
