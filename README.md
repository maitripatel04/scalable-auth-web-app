# 🚀 Full-Stack Web App ![React](https://img.shields.io/badge/React-18.2.0-blue) ![Node.js](https://img.shields.io/badge/Node.js-18-green) ![MongoDB](https://img.shields.io/badge/MongoDB-7.3.1-brightgreen) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3.3-teal) ![License](https://img.shields.io/badge/License-MIT-yellow)

## 🌟 Overview

A **full-stack web application** with **JWT authentication 🔐** (register/login/logout) and a **dashboard 🗂️** for managing tasks with **CRUD operations ✅**.

* **Frontend:** React.js ⚛️ + TailwindCSS 🎨
* **Backend:** Node.js 🟢 + Express 🚀 + MongoDB 🍃

---

## 🛠 Features

* User registration & login with JWT
* Protected dashboard routes 🔒
* Create, Read, Update, Delete tasks ✅
* Logout functionality 👋
* Task search & filter 🔎
* Responsive UI for all devices 📱
* Secure password hashing 🔑

---

## 📁 Project Structure

```
frontend-backend-app/
├── backend/      # Node.js + Express + MongoDB
│   ├── config/      # Database connection
│   ├── controllers/ # Auth & Task controllers
│   ├── middleware/  # JWT auth middleware
│   ├── models/      # MongoDB models
│   ├── routes/      # API routes
│   ├── .env         # Environment variables
│   └── server.js    # Backend entry point
├── frontend/     # React + TailwindCSS frontend
│   ├── src/
│   │   ├── components/ # ProtectedRoute, etc.
│   │   ├── pages/      # Login, Register, Dashboard
│   │   ├── services/   # Axios API calls
│   │   ├── App.js
│   │   └── index.js
└── README.md
```

---

## ⚡ Setup Instructions

### Backend

```bash
cd backend
npm install
# Create .env with PORT, MONGO_URI, JWT_SECRET
npm run dev
```

Server runs at: `http://localhost:5000`

### Frontend

```bash
cd frontend
npm install
npm start
```

Frontend runs at: `http://localhost:3000`

---

## 🔗 API Endpoints

### Authentication

| Method | Endpoint           | Description          |
| ------ | ------------------ | -------------------- |
| POST   | /api/auth/register | Register user        |
| POST   | /api/auth/login    | Login user & get JWT |

### Tasks (JWT required)

| Method | Endpoint       | Description   |
| ------ | -------------- | ------------- |
| GET    | /api/tasks     | Get all tasks |
| POST   | /api/tasks     | Create a task |
| PUT    | /api/tasks/:id | Update a task |
| DELETE | /api/tasks/:id | Delete a task |

---

## 🚀 Scaling

**Frontend:**

* Modular components
* Redux/Context API for state
* Lazy loading & code splitting

**Backend:**

* Modular routes/controllers
* Dev/prod environment configs
* Caching (Redis)
* Docker-ready deployment 🐳

---

## 👤 Author

**Maitri Patel 👩‍💻** 
