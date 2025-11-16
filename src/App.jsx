import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard.jsx';
import StudentForm from './components/StudentForm.jsx';
import StudentList from './components/StudentList.jsx';
import MeritLists from './components/MeritList.jsx';
import IdCards from './components/IdCards.jsx';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [students, setStudents] = useState([]);

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedStudents = localStorage.getItem('admissionStudents');
    if (savedStudents) {
      setStudents(JSON.parse(savedStudents));
    }
  }, []);

  // Save to localStorage whenever students change
  useEffect(() => {
    localStorage.setItem('admissionStudents', JSON.stringify(students));
  }, [students]);

  const addStudent = (studentData) => {
    const adjustedMarks = calculateAdjustedMarks(parseFloat(studentData.lastMarks));
    const isEligible = calculateEligibility(studentData.program, adjustedMarks);
    
    const newStudent = {
      id: Date.now(),
      ...studentData,
      lastMarks: adjustedMarks,
      status: isEligible ? 'Pending' : 'Rejected',
      appliedDate: new Date().toISOString().split('T')[0],
      rollId: generateRollId(studentData.program)
    };
    
    setStudents([...students, newStudent]);
    
    // Simulate email sending
    setTimeout(() => {
      alert(`Email sent to ${studentData.email}: Your application has been ${isEligible ? 'received and is under review' : 'rejected due to ineligibility'}`);
    }, 1000);
  };

  const calculateEligibility = (program, marks) => {
    const undergradPrograms = ['BSCS', 'BS(IT)', 'BBA'];
    const gradPrograms = ['MS(CS)'];
    
    if (undergradPrograms.includes(program) && marks >= 45) {
      return true;
    }
    if (gradPrograms.includes(program) && marks >= 45) {
      return true;
    }
    return false;
  };

  const calculateAdjustedMarks = (marks) => {
    return marks < 45 ? marks * 0.95 : marks;
  };

  const generateRollId = (program) => {
    const prefix = program === 'MS(CS)' ? 'MS' : 'BS';
    const count = students.filter(s => s.program === program).length + 1;
    return `${prefix}${count.toString().padStart(3, '0')}`;
  };

  const updateStudentStatus = (studentId, status) => {
    setStudents(students.map(student => 
      student.id === studentId ? { ...student, status } : student
    ));
  };

  const deleteStudent = (studentId) => {
    setStudents(students.filter(student => student.id !== studentId));
  };

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard students={students} />;
      case 'apply':
        return <StudentForm onAddStudent={addStudent} />;
      case 'students':
        return <StudentList 
          students={students} 
          onUpdateStatus={updateStudentStatus}
          onDeleteStudent={deleteStudent}
        />;
      case 'merit':
        return <MeritLists students={students} />;
      case 'idcards':
        return <IdCards students={students} />;
      default:
        return <Dashboard students={students} />;
    }
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>University Admission Management System</h1>
        <nav className="main-nav">
          <button 
            className={currentView === 'dashboard' ? 'active' : ''}
            onClick={() => setCurrentView('dashboard')}
          >
            Dashboard
          </button>
          <button 
            className={currentView === 'apply' ? 'active' : ''}
            onClick={() => setCurrentView('apply')}
          >
            Apply Online
          </button>
          <button 
            className={currentView === 'students' ? 'active' : ''}
            onClick={() => setCurrentView('students')}
          >
            Manage Students
          </button>
          <button 
            className={currentView === 'merit' ? 'active' : ''}
            onClick={() => setCurrentView('merit')}
          >
            Merit Lists
          </button>
          <button 
            className={currentView === 'idcards' ? 'active' : ''}
            onClick={() => setCurrentView('idcards')}
          >
            ID Cards
          </button>
        </nav>
      </header>
      
      <main className="main-content">
        {renderView()}
      </main>
      
      <footer className="app-footer">
        <p>&copy; 2024 University Admission System. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;