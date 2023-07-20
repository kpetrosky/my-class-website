import React, { Component } from 'react';
import Header from './components/header';
import Announcements from './components/pages/Announcements';
import Assignments from './components/pages/Assignments';
import Resources from './components/pages/Resources';
import './App.css';
// import TeacherClassroom from './components/pages/teacherClassroom';

class App extends Component {
  constructor() {
    super();
    // Initialize state
    this.state = {
      currentPage: 'announcements'
    };
  }

  // Function to handle page changes
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const { currentPage } = this.state;

    return (
      <div className="App">
        <Header currentPage={currentPage} handlePageChange={this.handlePageChange} />

        {/* Main content section */}
        <main className="App-content">
          {/* Render the content based on the selected page */}
          {currentPage === 'announcements' && <Announcements />}
          {currentPage === 'assignments' && <Assignments />}
          {currentPage === 'resources' && <Resources />}
          {/* {currentPage === 'TeacherClassroom' && <TeacherClassroom />} */}
        </main>
      </div>
    );
  }
}

export default App;
