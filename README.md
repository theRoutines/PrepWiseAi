# InterviewIQ - AI-Powered Mock Interview Platform

InterviewIQ is a cutting-edge platform designed to help job seekers ace their interviews through AI-driven simulations. By leveraging advanced LLMs (Large Language Models), the platform provides realistic interview experiences, personalized feedback, and performance analytics.

## 🚀 Features

- **AI Mock Interviews**: Engage in real-time, interactive interviews tailored to specific roles and resumes.
- **Performance Reports**: Receive detailed analysis, scoring, and actionable feedback after each session.
- **Progress Tracking**: Visualize your improvement over time with integrated charts and history.
- **PDF Generation**: Export your interview performance reports for offline review.
- **Secure Authentication**: Robust user management and authentication system.
- **Premium Plans**: Integrated subscription models via Razorpay for advanced features.

## 🛠️ Technology Stack

### Frontend
- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Charts**: [Recharts](https://recharts.org/)
- **PDF Export**: [jsPDF](https://github.com/parallax/jsPDF)

### Backend
- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) (via Mongoose)
- **AI Engine**: [Google Gemini API](https://ai.google.dev/) (gemini-1.5-flash)
- **Payments**: [Razorpay](https://razorpay.com/)
- **File Handling**: [Multer](https://github.com/expressjs/multer)

---

## 📁 Project Structure

```bash
interviewIQ/
├── client/          # React frontend (Vite)
│   ├── src/         # Components, Pages, Redux Store
│   └── public/      # Static assets
└── server/          # Node.js backend
    ├── controllers/ # Request handlers
    ├── models/      # MongoDB schemas
    ├── routes/      # API endpoints
    ├── services/    # AI and Payment logic
    └── config/      # Database and Env config
```

---

## ⚙️ Setup & Installation

### Prerequisites
- Node.js (v18+)
- MongoDB Atlas account or local MongoDB instance
- API Keys: Google Gemini, Razorpay, and Firebase (if using specific client features)

### 1. Clone the Repository
```bash
git clone <repository-url>
cd interviewIQ
```

### 2. Backend Setup
```bash
cd server
npm install
```
Create a `.env` file in the `server` directory:
```env
PORT=6000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
GEMINI_API_KEY=your_key
RAZORPAY_KEY_ID=your_id
RAZORPAY_KEY_SECRET=your_secret
```
Start the server:
```bash
npm run dev
```

### 3. Frontend Setup
```bash
cd ../client
npm install
```
Create a `.env` file in the `client` directory:
```env
VITE_SERVER_URL=http://localhost:6000
```
Start the client:
```bash
npm run dev
```

---

## 📄 License
This project is licensed under the ISC License.
