import React from 'react';

const Dashboard = ({ students }) => {
  const totalStudents = students.length;
  const pendingStudents = students.filter(s => s.status === 'Pending').length;
  const acceptedStudents = students.filter(s => s.status === 'Accepted').length;
  const rejectedStudents = students.filter(s => s.status === 'Rejected').length;
  
  const programStats = students.reduce((acc, student) => {
    acc[student.program] = (acc[student.program] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="dashboard-page">
      <h2>Admission Dashboard</h2>
      
      <div className="dashboard">
        <div className="stat-card">
          <h3>Total Applications</h3>
          <div className="number">{totalStudents}</div>
        </div>
        <div className="stat-card">
          <h3>Pending Review</h3>
          <div className="number">{pendingStudents}</div>
        </div>
        <div className="stat-card">
          <h3>Accepted</h3>
          <div className="number">{acceptedStudents}</div>
        </div>
        <div className="stat-card">
          <h3>Rejected</h3>
          <div className="number">{rejectedStudents}</div>
        </div>
      </div>

      <div className="merit-section">
        <h3>Program-wise Applications</h3>
        <div className="student-table">
          <table>
            <thead>
              <tr>
                <th>Program</th>
                <th>Applications</th>
                <th>Pending</th>
                <th>Accepted</th>
                <th>Rejected</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(programStats).map(([program, count]) => {
                const programStudents = students.filter(s => s.program === program);
                const pending = programStudents.filter(s => s.status === 'Pending').length;
                const accepted = programStudents.filter(s => s.status === 'Accepted').length;
                const rejected = programStudents.filter(s => s.status === 'Rejected').length;
                
                return (
                  <tr key={program}>
                    <td>{program}</td>
                    <td>{count}</td>
                    <td>{pending}</td>
                    <td>{accepted}</td>
                    <td>{rejected}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="merit-section">
        <h3>Recent Applications</h3>
        <div className="student-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Program</th>
                <th>Applied Date</th>
                <th>Status</th>
                <th>Marks</th>
              </tr>
            </thead>
            <tbody>
              {students.slice(-5).map(student => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.program}</td>
                  <td>{student.appliedDate}</td>
                  <td className={`status-${student.status.toLowerCase()}`}>
                    {student.status}
                  </td>
                  <td>{student.lastMarks.toFixed(2)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;