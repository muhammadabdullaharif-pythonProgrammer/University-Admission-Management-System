University Admission Management System
A comprehensive React.js web application for managing university admissions online. This system allows students to apply for various programs, administrators to manage applications, generate merit lists, and create ID cards.

🚀 Features
For Students
Online Application Form: Easy-to-use form for submitting admission applications

Multiple Program Support: Apply to BSCS, BS(IT), BBA, and MS(CS) programs

Automatic Eligibility Check: System automatically checks eligibility based on marks

Email Notifications: Receive acceptance/rejection emails

Priority Selection: Choose program preferences with priority levels

For Administrators
Dashboard: Overview of all applications with statistics

Student Management: Accept, reject, or delete applications

Merit List Generation: Multiple types of merit lists:

General merit list

Program-wise merit lists

Quota-wise merit lists

Eligible vs Non-eligible candidates

ID Card Generation: Automatic ID card creation for accepted students

Data Persistence: All data saved in browser localStorage

📋 Eligibility Criteria
Undergraduate Programs (BSCS, BS(IT), BBA)
Intermediate (12-years education) with at least 45% marks

5% marks deduction if previous degree marks are less than 45%

Graduate Program (MS(CS))
4 Years Bachelor's degree (16-years education) with at least 45% marks

5% marks deduction if previous degree marks are less than 45%

🛠️ Installation & Setup
Prerequisites
Node.js (version 14 or higher)

npm or yarn

Installation Steps
Clone or download the project

bash
git clone <repository-url>
cd admission-system
Install dependencies

bash
npm install
Start the development server

bash
npm run dev
Open your browser
Navigate to http://localhost:3000

Build for Production
bash
npm run build
📁 Project Structure
text
admission-system/
├── src/
│   ├── components/
│   │   ├── Dashboard.jsx      # Main dashboard with statistics
│   │   ├── StudentForm.jsx    # Online application form
│   │   ├── StudentList.jsx    # Student management interface
│   │   ├── MeritLists.jsx     # Merit list generation
│   │   └── IdCards.jsx        # ID card generation
│   ├── App.jsx               # Main application component
│   ├── App.css              # Application styles
│   └── main.jsx             # Application entry point
├── index.html               # HTML template
├── package.json            # Project dependencies
└── vite.config.js          # Vite configuration
🎯 How to Use
For Applicants
Navigate to "Apply Online"

Fill in personal details

Select desired program and priority

Submit educational information

Receive automatic eligibility assessment

Get email confirmation

For Administrators
Dashboard: View application statistics

Manage Students: Review and process applications

Merit Lists: Generate various merit lists

ID Cards: Create ID cards for accepted students

🔧 Technical Features
React 18: Modern React with hooks

Vite: Fast development build tool

Local Storage: Data persistence in browser

Responsive Design: Works on all devices

CSS Grid & Flexbox: Modern layout techniques

Form Validation: Client-side validation

Email Simulation: Simulated email notifications

📊 Merit List Types
General Merit List: All students sorted by marks

Program-wise Lists: Separate lists for each program

Quota-wise Lists: Lists based on admission quotas

Priority-based Lists: Lists considering student preferences

Eligibility Lists: Separate lists for eligible/non-eligible candidates

🎨 Quota System
The system supports multiple admission quotas:

Open Merit

Provisional

District

Other

📝 Application Process
Student submits online application

System automatically checks eligibility

Administrator reviews application

Administrator accepts/rejects application

Student receives email notification

Accepted students appear in ID card section

🔒 Data Management
All data stored in browser localStorage

Data persists between browser sessions

No server required for basic functionality

Easy data export/import capabilities

🚀 Future Enhancements
Database integration

Real email notifications

File upload for documents

Payment integration

Advanced reporting

Multi-admin support

Audit logs

🤝 Contributing
Fork the project

Create your feature branch

Commit your changes

Push to the branch

Open a pull request

📄 License
This project is licensed under the MIT License.

👥 Support
For support and questions, please contact the development team or create an issue in the project repository.

