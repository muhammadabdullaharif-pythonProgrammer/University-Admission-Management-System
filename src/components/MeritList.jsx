import React, { useState } from 'react';

const MeritLists = ({ students }) => {
  const [selectedProgram, setSelectedProgram] = useState('all');
  const [selectedQuota, setSelectedQuota] = useState('all');

  const filteredStudents = students.filter(student => {
    const programMatch = selectedProgram === 'all' || student.program === selectedProgram;
    const quotaMatch = selectedQuota === 'all' || student.quota === selectedQuota;
    return programMatch && quotaMatch;
  });

  const sortedStudents = [...filteredStudents].sort((a, b) => b.lastMarks - a.lastMarks);

  const programWiseMerit = {};
  students.forEach(student => {
    if (!programWiseMerit[student.program]) {
      programWiseMerit[student.program] = [];
    }
    programWiseMerit[student.program].push(student);
  });

  Object.keys(programWiseMerit).forEach(program => {
    programWiseMerit[program].sort((a, b) => b.lastMarks - a.lastMarks);
  });

  const quotaWiseMerit = {};
  students.forEach(student => {
    if (!quotaWiseMerit[student.quota]) {
      quotaWiseMerit[student.quota] = [];
    }
    quotaWiseMerit[student.quota].push(student);
  });

  Object.keys(quotaWiseMerit).forEach(quota => {
    quotaWiseMerit[quota].sort((a, b) => b.lastMarks - a.lastMarks);
  });

  const eligibleStudents = students.filter(student => 
    (student.program === 'MS(CS)' && student.lastMarks >= 45) ||
    (['BSCS', 'BS(IT)', 'BBA'].includes(student.program) && student.lastMarks >= 45)
  );

  const nonEligibleStudents = students.filter(student => 
    (student.program === 'MS(CS)' && student.lastMarks < 45) ||
    (['BSCS', 'BS(IT)', 'BBA'].includes(student.program) && student.lastMarks < 45)
  );

  return (
    <div className="merit-lists">
      <h2>Merit Lists</h2>

      <div className="filters" style={{ marginBottom: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <div className="form-group" style={{ minWidth: '200px' }}>
          <label>Filter by Program:</label>
          <select 
            value={selectedProgram} 
            onChange={(e) => setSelectedProgram(e.target.value)}
            style={{ width: '100%' }}
          >
            <option value="all">All Programs</option>
            <option value="BSCS">BSCS</option>
            <option value="BS(IT)">BS(IT)</option>
            <option value="BBA">BBA</option>
            <option value="MS(CS)">MS(CS)</option>
          </select>
        </div>
        
        <div className="form-group" style={{ minWidth: '200px' }}>
          <label>Filter by Quota:</label>
          <select 
            value={selectedQuota} 
            onChange={(e) => setSelectedQuota(e.target.value)}
            style={{ width: '100%' }}
          >
            <option value="all">All Quotas</option>
            <option value="Open Merit">Open Merit</option>
            <option value="Provisional">Provisional</option>
            <option value="District">District</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div className="merit-section">
        <h3>General Merit List ({selectedProgram === 'all' ? 'All Programs' : selectedProgram})</h3>
        <div className="student-table">
          <table>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Roll ID</th>
                <th>Name</th>
                <th>Program</th>
                <th>Quota</th>
                <th>Marks</th>
                <th>Status</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              {sortedStudents.map((student, index) => (
                <tr key={student.id}>
                  <td>{index + 1}</td>
                  <td>{student.rollId}</td>
                  <td>{student.name}</td>
                  <td>{student.program}</td>
                  <td>{student.quota}</td>
                  <td>{student.lastMarks.toFixed(2)}%</td>
                  <td className={`status-${student.status.toLowerCase()}`}>
                    {student.status}
                  </td>
                  <td>{student.priority}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="merit-section">
        <h3>Program-wise Merit Lists</h3>
        {Object.entries(programWiseMerit).map(([program, programStudents]) => (
          <div key={program} style={{ marginBottom: '2rem' }}>
            <h4>{program} - Total Applicants: {programStudents.length}</h4>
            <div className="student-table">
              <table>
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Roll ID</th>
                    <th>Name</th>
                    <th>Marks</th>
                    <th>Quota</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {programStudents.map((student, index) => (
                    <tr key={student.id}>
                      <td>{index + 1}</td>
                      <td>{student.rollId}</td>
                      <td>{student.name}</td>
                      <td>{student.lastMarks.toFixed(2)}%</td>
                      <td>{student.quota}</td>
                      <td className={`status-${student.status.toLowerCase()}`}>
                        {student.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>

      <div className="merit-section">
        <h3>Quota-wise Merit Lists</h3>
        {Object.entries(quotaWiseMerit).map(([quota, quotaStudents]) => (
          <div key={quota} style={{ marginBottom: '2rem' }}>
            <h4>{quota} Quota - Total Applicants: {quotaStudents.length}</h4>
            <div className="student-table">
              <table>
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Roll ID</th>
                    <th>Name</th>
                    <th>Program</th>
                    <th>Marks</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {quotaStudents.map((student, index) => (
                    <tr key={student.id}>
                      <td>{index + 1}</td>
                      <td>{student.rollId}</td>
                      <td>{student.name}</td>
                      <td>{student.program}</td>
                      <td>{student.lastMarks.toFixed(2)}%</td>
                      <td className={`status-${student.status.toLowerCase()}`}>
                        {student.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        <div className="merit-section">
          <h3>Eligible Candidates</h3>
          <div className="student-table">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Program</th>
                  <th>Marks</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {eligibleStudents.map(student => (
                  <tr key={student.id}>
                    <td>{student.name}</td>
                    <td>{student.program}</td>
                    <td>{student.lastMarks.toFixed(2)}%</td>
                    <td className={`status-${student.status.toLowerCase()}`}>
                      {student.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="merit-section">
          <h3>Non-Eligible Candidates</h3>
          <div className="student-table">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Program</th>
                  <th>Marks</th>
                  <th>Reason</th>
                </tr>
              </thead>
              <tbody>
                {nonEligibleStudents.map(student => (
                  <tr key={student.id}>
                    <td>{student.name}</td>
                    <td>{student.program}</td>
                    <td>{student.lastMarks.toFixed(2)}%</td>
                    <td>Below minimum marks requirement</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeritLists;