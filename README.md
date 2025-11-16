# University Admission Management System

A comprehensive React.js web application for managing university admissions online. This system allows students to apply for various programs, administrators to manage applications, generate merit lists, and create ID cards.

## 🚀 Features

### For Students
- **Online Application Form**: Easy-to-use form for submitting admission applications
- **Multiple Program Support**: Apply to BSCS, BS(IT), BBA, and MS(CS) programs
- **Automatic Eligibility Check**: System automatically checks eligibility based on marks
- **Email Notifications**: Receive acceptance/rejection emails
- **Priority Selection**: Choose program preferences with priority levels

### For Administrators
- **Dashboard**: Overview of all applications with statistics
- **Student Management**: Accept, reject, or delete applications
- **Merit List Generation**: Multiple types of merit lists:
  - General merit list
  - Program-wise merit lists
  - Quota-wise merit lists
  - Eligible vs Non-eligible candidates
- **ID Card Generation**: Automatic ID card creation for accepted students
- **Data Persistence**: All data saved in browser localStorage

## 📋 Eligibility Criteria

### Undergraduate Programs (BSCS, BS(IT), BBA)
- Intermediate (12-years education) with at least 45% marks
- 5% marks deduction if previous degree marks are less than 45%

### Graduate Program (MS(CS))
- 4 Years Bachelor's degree (16-years education) with at least 45% marks
- 5% marks deduction if previous degree marks are less than 45%

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation Steps

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd admission-system
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production
```bash
npm run build
```

## 📁 Project Structure

```
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
```

## 🎯 How to Use

### For Applicants
1. Navigate to "Apply Online"
2. Fill in personal details
3. Select desired program and priority
4. Submit educational information
5. Receive automatic eligibility assessment
6. Get email confirmation

### For Administrators
1. **Dashboard**: View application statistics
2. **Manage Students**: Review and process applications
3. **Merit Lists**: Generate various merit lists
4. **ID Cards**: Create ID cards for accepted students

## 🔧 Technical Features

- **React 18**: Modern React with hooks
- **Vite**: Fast development build tool
- **Local Storage**: Data persistence in browser
- **Responsive Design**: Works on all devices
- **CSS Grid & Flexbox**: Modern layout techniques
- **Form Validation**: Client-side validation
- **Email Simulation**: Simulated email notifications

## 📊 Merit List Types

1. **General Merit List**: All students sorted by marks
2. **Program-wise Lists**: Separate lists for each program
3. **Quota-wise Lists**: Lists based on admission quotas
4. **Priority-based Lists**: Lists considering student preferences
5. **Eligibility Lists**: Separate lists for eligible/non-eligible candidates

## 🎨 Quota System

The system supports multiple admission quotas:
- Open Merit
- Provisional
- District
- Other

## 📝 Application Process

1. Student submits online application
2. System automatically checks eligibility
3. Administrator reviews application
4. Administrator accepts/rejects application
5. Student receives email notification
6. Accepted students appear in ID card section

## 🔒 Data Management

- All data stored in browser localStorage
- Data persists between browser sessions
- No server required for basic functionality
- Easy data export/import capabilities

## 🚀 Future Enhancements

- Database integration
- Real email notifications
- File upload for documents
- Payment integration
- Advanced reporting
- Multi-admin support
- Audit logs

## 🤝 Contributing

1. Fork the project
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📄 License

This project is licensed under the MIT License.

## 👥 Support

For support and questions, please contact the development team or create an issue in the project repository.

---

**Built with React.js & Vite** | **University Admission System**
