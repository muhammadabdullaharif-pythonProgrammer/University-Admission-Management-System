import React, { useState } from 'react';

const StudentForm = ({ onAddStudent }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cnic: '',
    phone: '',
    dob: '',
    address: '',
    lastDegree: '',
    lastMarks: '',
    program: '',
    priority: 1,
    quota: 'Open Merit'
  });

  const programs = {
    undergraduate: ['BSCS', 'BS(IT)', 'BBA'],
    graduate: ['MS(CS)']
  };

  const quotas = ['Open Merit', 'Provisional', 'District', 'Other'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddStudent(formData);
    
    setFormData({
      name: '',
      email: '',
      cnic: '',
      phone: '',
      dob: '',
      address: '',
      lastDegree: '',
      lastMarks: '',
      program: '',
      priority: 1,
      quota: 'Open Merit'
    });
    
    alert('Application submitted successfully! You will receive an email confirmation shortly.');
  };

  return (
    <div className="student-form-container">
      <h2>Online Admission Application</h2>
      <form onSubmit={handleSubmit} className="student-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="cnic">CNIC *</label>
            <input
              type="text"
              id="cnic"
              name="cnic"
              value={formData.cnic}
              onChange={handleInputChange}
              placeholder="XXXXX-XXXXXXX-X"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="dob">Date of Birth *</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="quota">Admission Quota *</label>
            <select
              id="quota"
              name="quota"
              value={formData.quota}
              onChange={handleInputChange}
              required
            >
              {quotas.map(quota => (
                <option key={quota} value={quota}>{quota}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="address">Address *</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            rows="3"
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="lastDegree">Last Degree *</label>
            <input
              type="text"
              id="lastDegree"
              name="lastDegree"
              value={formData.lastDegree}
              onChange={handleInputChange}
              placeholder="e.g., Intermediate, Bachelor"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="lastMarks">Marks (%) *</label>
            <input
              type="number"
              id="lastMarks"
              name="lastMarks"
              value={formData.lastMarks}
              onChange={handleInputChange}
              min="0"
              max="100"
              step="0.01"
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="program">Study Program *</label>
            <select
              id="program"
              name="program"
              value={formData.program}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Program</option>
              <optgroup label="Undergraduate Programs">
                {programs.undergraduate.map(program => (
                  <option key={program} value={program}>{program}</option>
                ))}
              </optgroup>
              <optgroup label="Graduate Programs">
                {programs.graduate.map(program => (
                  <option key={program} value={program}>{program}</option>
                ))}
              </optgroup>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="priority">Priority</label>
            <select
              id="priority"
              name="priority"
              value={formData.priority}
              onChange={handleInputChange}
            >
              <option value="1">1st Priority</option>
              <option value="2">2nd Priority</option>
              <option value="3">3rd Priority</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-success">
            Submit Application
          </button>
        </div>

        <div className="form-info">
          <p><strong>Note:</strong></p>
          <ul>
            <li>Minimum 45% marks required for eligibility</li>
            <li>5% marks will be deducted if previous degree marks are less than 45%</li>
            <li>You will receive confirmation email after submission</li>
          </ul>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;