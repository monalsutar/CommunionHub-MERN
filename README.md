# CommunionHub – Unified Portal for Community Events and Engagement

![License](https://img.shields.io/badge/license-MIT-green)
![Tech Stack](https://img.shields.io/badge/MERN-Stack-blue)

## 📝 Project Overview

**CommunionHub** is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It serves as a centralized portal for community members, students, or organizations to **create**, **view**, and **manage** events in a structured and accessible format.

- All events are **publicly visible**
- Only **authenticated users** can create or delete events
- Aimed at academic institutions, local clubs, and small communities

## 🚀 Features

- 🔐 **User Authentication** – Register and login with email and password
- 🗓️ **Event Creation** – Add events with title, description, date, category, and location
- 🗂️ **Event Listing Dashboard** – View all events in a clean, card-based layout
- 🧹 **Event Deletion** – Authenticated users can delete their own events
- 📱 **Responsive Design** – Mobile-first UI with clean navigation
- ⚙️ **RESTful API Integration** – Seamless frontend-backend communication

## 🔧 Tech Stack

| Layer         | Technology               |
|---------------|---------------------------|
| Frontend      | React.js, React Router, Axios, Bootstrap |
| Backend       | Node.js, Express.js       |
| Database      | MongoDB Atlas             |
| Authentication| Custom login/registration |
| Hosting       | Vercel / Render / Netlify (Frontend), Render / Railway (Backend) |

## 🖼️ Screenshots

![image](https://github.com/user-attachments/assets/0bcb675f-4dfc-4222-aa66-3bf90b090158)

![image](https://github.com/user-attachments/assets/8a75fb61-bf81-4f14-a6e3-13c7167307a2)

![image](https://github.com/user-attachments/assets/a4e1c0d2-25da-4d58-85ff-77fc22e8b1a2)

![image](https://github.com/user-attachments/assets/6d3c2e1c-83aa-4128-b4f1-4924df4b5742)





## 📂 Folder Structure

CommunionHub-MERN/
│
├── backend/
│   ├── models/         # Mongoose schemas
│   ├── routes/         # API routes for users and events
│   ├── controllers/    # Business logic
│   └── server.js       # Entry point for Express server
│
├── frontend/
│   ├── src/
│   │   ├── components/ # React components (Navbar, EventCard, etc.)
│   │   ├── pages/      # Pages like Home, Login, Signup
│   │   └── App.js
│   └── public/
│
└── README.md


⚙️ Setup Instructions

1. Clone the Repository
  git clone https://github.com/monalsutar/CommunionHub-MERN.git
  cd CommunionHub-MERN
2. Install Dependencies
Backend
  cd backend
  npm install
Frontend
  cd ../frontend
  npm install
3. Configure Environment Variables
  Create a .env file in /backend:
  MONGODB_URI=your_mongodb_connection_string
  JWT_SECRET=your_jwt_secret
  PORT=5000
4. Run the App
Backend
  cd backend
  npm start
Frontend
  cd frontend
  npm start
Visit http://localhost:3000 to access the application.

✅ Future Enhancements
Event filtering and search
Calendar view for events
Email notifications
Admin panel with analytics
RSVP functionality

🙋‍♀️ Author
👤 Monal Gajanan Sutar
💼 MERN Developer Intern – Codexlabz Technologies
📧 Email: 2253010@ritindia.edu
