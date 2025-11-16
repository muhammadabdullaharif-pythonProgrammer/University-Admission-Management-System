import React, { useState } from 'react';

const StudentList = ({ students, onUpdateStatus, onDeleteStudent }) => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStudents = students.filter(student => {
    const matchesFilter = filter === 'all' || student.status === filter;
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.program.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleStatusChange = (studentId, newStatus) => {
    onUpdateStatus(studentId, newStatus);
    
    const student = students.find(s => s.id === studentId);
    if (student) {
      setTimeout(() => {
        alert(`Email sent to ${student.email}: Your application has been ${newStatus.toLowerCase()}`);
      }, 500);
    }
  };

  return (
    <div className="student-list">
      <h2>Manage Student Applications</h2>
      
      <div className="filters" style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <div className="form-group" style={{ flex: '1', minWidth: '200px' }}>
          <input
            type="text"
            placeholder="Search by name, email, or program..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: '100%' }}
          />
        </div>
        
        <div className="form-group" style={{ minWidth: '150px' }}>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            style={{ width: '100%' }}
          >
            <option value="all">All Status</option>
            <option value="Pending">Pending</option>
            <option value="Accepted">Accepted</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
      </div>

      <div className="student-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Program</th>
              <th>Marks</th>
              <th>Quota</th>
              <th>Applied Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map(student => (
              <tr key={student.id}>
                <td>{student.rollId}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.program}</td>
                <td>{student.lastMarks.toFixed(2)}%</td>
                <td>{student.quota}</td>
                <td>{student.appliedDate}</td>
                <td className={`status-${student.status.toLowerCase()}`}>
                  {student.status}
                </td>
                <td>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {student.status === 'Pending' && (
                      <>
                        <button 
                          className="btn btn-success"
                          onClick={() => handleStatusChange(student.id, 'Accepted')}
                          style={{ padding: '0.25rem 0.5rem', fontSize: '0.8rem' }}
                        >
                          Accept
                        </button>
                        <button 
                          className="btn btn-danger"
                          onClick={() => handleStatusChange(student.id, 'Rejected')}
                          style={{ padding: '0.25rem 0.5rem', fontSize: '0.8rem' }}
                        >
                          Reject
                        </button>
                      </>
                    )}
                    <button 
                      className="btn"
                      onClick={() => onDeleteStudent(student.id)}
                      style={{ 
                        padding: '0.25rem 0.5rem', 
                        fontSize: '0.8rem',
                        background: '#95a5a6'
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {filteredStudents.length === 0 && (
          <div style={{ textAlign: 'center', padding: '2rem', color: '#7f8c8d' }}>
            No students found matching your criteria.
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentList;