import React from 'react';

const IdCards = ({ students }) => {
  const acceptedStudents = students.filter(student => student.status === 'Accepted');

  const handlePrint = () => {
    window.print();
  };

  const getExpiryDate = () => {
    const date = new Date();
    date.setFullYear(date.getFullYear() + 2);
    return date.toLocaleDateString();
  };

  return (
    <div className="id-cards-page">
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2>Student ID Cards</h2>
        <button className="btn" onClick={handlePrint}>
          Print All ID Cards
        </button>
      </div>

      {acceptedStudents.length === 0 ? (
        <div className="no-data" style={{ textAlign: 'center', padding: '3rem', color: '#7f8c8d' }}>
          <h3>No Accepted Students Found</h3>
          <p>ID cards will be generated for students with accepted admission status.</p>
        </div>
      ) : (
        <>
          <div className="id-cards-grid">
            {acceptedStudents.map(student => (
              <div key={student.id} className="id-card">
                <div className="id-card-header">
                  <div>
                    <h3>UNIVERSITY ID CARD</h3>
                    <div className="id-card-university">Prestige University</div>
                  </div>
                  <div className="id-card-photo">
                    Photo
                  </div>
                </div>
                
                <div className="id-card-body">
                  <div className="id-card-details">
                    <p><strong>Name:</strong> {student.name}</p>
                    <p><strong>Roll ID:</strong> {student.rollId}</p>
                    <p><strong>Program:</strong> {student.program}</p>
                    <p><strong>CNIC:</strong> {student.cnic}</p>
                  </div>
                </div>
                
                <div className="id-card-footer">
                  <p><strong>Valid Until:</strong> {getExpiryDate()}</p>
                  <p><strong>Issued Date:</strong> {new Date().toLocaleDateString()}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="print-btn">
            <button className="btn btn-success" onClick={handlePrint}>
              Print ID Cards
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default IdCards;