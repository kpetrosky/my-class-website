import React from 'react';
import title from './images/title image.png';
import GradeLevelDropdown from '../GradeLevelDropdown'; // Import the GradeLevelDropdown component

function Header({ currentPage, handlePageChange }) {
  return (
    <header className="App-header">
      <img src={title} className="App-title" alt="title" />
      <div className="header-container">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a
              href="#announcements"
              onClick={() => handlePageChange('announcements')}
              className={currentPage === 'announcements' ? 'nav-link active' : 'nav-link'}
            >
              🧡Announcements
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#assignments"
              onClick={() => handlePageChange('assignments')}
              className={currentPage === 'assignments' ? 'nav-link active' : 'nav-link'}
            >
              🧐Assignments
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#resources"
              onClick={() => handlePageChange('resources')}
              className={currentPage === 'resources' ? 'nav-link active' : 'nav-link'}
            >
              🐶Resources
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#teachers"
              onClick={() => handlePageChange('teachers')}
              className={currentPage === 'teachers' ? 'nav-link active' : 'nav-link'}
            >
              🌞Teachers
            </a>
          </li>
        </ul>

        {/* Render GradeLevelDropdown component */}
        <GradeLevelDropdown />
      </div>
    </header>
  );
}

export default Header;
