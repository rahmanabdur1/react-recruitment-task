Complaint Submission App
A simple React-based application for submitting and viewing complaints using a REST API.

Features
Submit complaints with a title and body

View a list of submitted complaints

Real-time form validation with error feedback

API integration with loading and success states

Responsive layout for better user experience

Technologies Used
React (with Hooks)

TypeScript

Fetch API

CSS (custom styling)

🚀 Getting Started

# Clone the repository
git clone https://github.com/rahmanabdur1/react-recruitment-task

# Navigate into the project directory
cd react-recruitment-task

# Install dependencies
npm install

# Start the development server
npm start
🛠️ Summary of Changes
Fixed:

API endpoint configuration

Form state reset bug

Inconsistent error handling for failed requests

Improved:

UI layout with better spacing and styling

Button states and feedback during form submission

Responsive design with media queries

Loading and success indicators for better UX

Added:

Centralized API base URL constant

useCallback and safe useEffect cleanup

Form validation and accessibility improvements

Auto-clearing of error/success messages with timeout

📌 Technical Decisions
Used useCallback for memoizing the fetch function

Added a setTimeout to auto-clear user notifications

Applied native form validation to assist accessibility

Defined a reusable API base URL to simplify configuration

Ensured responsive design and mobile compatibility

