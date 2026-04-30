# 🚀 PrepWiseAi — AI-Powered Mock Interview Platform

InterviewIQ is a full-stack AI-driven mock interview platform designed to help users prepare for real-world interviews through personalized question generation, answer evaluation, and detailed performance analytics.

It simulates realistic interview scenarios using AI, analyzes responses based on role and experience, and provides actionable feedback to improve performance.

---

# 🧠 Core Features

### 🎯 AI-Powered Mock Interviews

* Generates interview questions tailored to:

  * Job role
  * Experience level
  * Resume content
* Supports both technical and behavioral interviews

### 📄 Resume-Based Personalization

* Parses user resumes
* Adapts interview flow dynamically based on skills and experience

### 🧪 Intelligent Answer Evaluation

* Evaluates answers for:

  * Accuracy
  * Depth of knowledge
  * Communication clarity
* Provides structured feedback and scoring

### 📊 Detailed Performance Reports

* Score-based evaluation system
* Strengths & weaknesses analysis
* Improvement suggestions
* Visual analytics using charts

### 📁 Interview History & Tracking

* Stores past interviews
* Allows progress tracking over time

### 🔐 Authentication System

* Secure login/signup using JWT
* Persistent user sessions

### 💳 Premium Features & Payments

* Razorpay integration for subscription plans
* Enables advanced features for premium users

### 📄 PDF Report Generation

* Export interview reports as downloadable PDFs

---

# 🏗️ Tech Stack

## Frontend (Client)

* React 19 (Vite)
* Redux Toolkit (state management)
* Tailwind CSS (styling)
* Framer Motion (animations)
* Recharts (data visualization)
* jsPDF (PDF generation)
* Firebase (utility services)

## Backend (Server)

* Node.js + Express.js
* MongoDB + Mongoose
* Google Gemini API (AI engine)
* Razorpay (payment gateway)
* JWT (authentication)
* Multer (file uploads)

---

# 📁 Project Structure

```
3.interviewIQ/
│
├── client/        # React frontend
└── server/        # Node.js backend
```

---

# 🎨 Frontend (client/)

Handles UI, user interaction, and communication with backend APIs.

## Key Structure

```
client/
├── public/            # Static assets
├── src/
│   ├── assets/        # Media files (videos/images)
│   ├── components/    # Reusable UI components
│   ├── pages/         # Route-level pages
│   ├── redux/         # State management
│   ├── utils/         # Firebase & helpers
│   ├── App.jsx        # Root component
│   └── main.jsx       # Entry point
```

## Key Components

* **Step1SetUp** → Interview configuration (role, experience, resume)
* **Step2Interview** → Live interview interface
* **Step3Report** → Feedback and results display
* **Timer** → Interview time tracking
* **Navbar / Footer** → Layout components

## Pages

* Home
* Auth (Login/Signup)
* Interview Page
* Interview Report
* Interview History
* Pricing

---

# ⚙️ Backend (server/)

Handles business logic, APIs, AI integration, database operations, and payments.

## Key Structure

```
server/
├── config/        # DB & token configs
├── controllers/   # Business logic
├── middlewares/   # Auth & file handling
├── models/        # MongoDB schemas
├── routes/        # API routes
├── services/      # External integrations
└── index.js       # Server entry point
```

---

## 🔑 Core Modules

### Controllers

* **auth.controller.js** → Authentication logic
* **interview.controller.js** → Interview workflow & evaluation
* **user.controller.js** → User data & history
* **payment.controller.js** → Payment handling

### Services

* **gemini.service.js** → AI interaction (question generation, evaluation)
* **razorpay.service.js** → Payment processing

### Models

* User
* Interview
* Payment

### Middleware

* JWT Authentication
* File uploads (Multer)


🔄 Application Flow
1. User signs up / logs in
2. Inputs:

   * Job role
   * Experience
   * Resume
3. AI generates interview questions
4. User answers questions
5. AI evaluates responses
6. System generates detailed report
7. Data stored for history & tracking

---

# 🔌 API Overview

## Auth Routes

```
/api/auth
```

## Interview Routes

```
/api/interview
```

## User Routes

```
/api/user
```

## Payment Routes

```
/api/payment
```

🌍 Environment Variables
Backend (.env)
```
PORT=8000
MONGODB_URL=your_mongodb_uri
JWT_SECRET=your_secret
GEMINI_API_KEY=your_api_key
RAZORPAY_KEY_ID=your_key
RAZORPAY_KEY_SECRET=your_secret
CLIENT_URL=your_frontend_url
```



🚀 Deployment
Frontend
Hosted on Vercel

Backend
Hosted on Render

Database
MongoDB Atlas (cloud)



⚠️ Production Considerations

* Use environment variables for all secrets
* Enable proper CORS configuration
* Handle API timeouts and retries
* Optimize token usage for AI calls
* Validate all user inputs
* Avoid exposing API keys on frontend


📈 Future Improvements

* Real-time voice interviews
* AI avatar integration
* Multi-language support
* Advanced analytics dashboard
* Adaptive difficulty interviews


🤝 Contributing

Contributions are welcome. Feel free to fork the repo, create a feature branch, and submit a pull request.

---

# 📜 License

This project is licensed under the MIT License.

---

# 💡 Final Note

PrepWiseAi is not just a project — it's a scalable AI system designed to simulate real interview environments. Built with a focus on performance, modular architecture, and extensibility, it can be evolved into a production-grade SaaS platform.

---
