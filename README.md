# Productivity Dashboard

A production-ready MERN stack application for managing tasks with a clean MVC architecture and modern UI.

## Features

- **Authentication**: User registration and login using JWT and bcrypt.
- **Task Management**: Create, Read, Update, and Delete (CRUD) tasks.
- **Data Visualization**: Pie chart showing Completed vs. Pending tasks.
- **Filtering**: Filter tasks by status (All, Pending, Completed).
- **Responsive Design**: Built with Tailwind CSS for a modern and sleek look.

## Tech Stack

- **Frontend**: React, Vite, Tailwind CSS, Recharts, Axios, React Router DOM.
- **Backend**: Node.js, Express, MongoDB, Mongoose, JWT, BcryptJS.

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (Local or Atlas)

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/yavishsahrawat40/Personal-Task-Manager.git
cd productivity-dashboard
```

### 2. Backend Setup

Navigate to the `backend` directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the `backend` directory and add your MongoDB URI and JWT Secret:

```env
MONGO_URI=mongodb://localhost:27017/productivity-dashboard
JWT_SECRET=your_super_secret_key
PORT=5000
```

Start the backend server:

```bash
npm run dev
```

The server will run on `http://localhost:5000`.

### 3. Frontend Setup

Navigate to the `frontend` directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the frontend development server:

```bash
npm run dev
```

The application will run on `http://localhost:5173`.

## Usage

1.  Register a new account.
2.  Login with your credentials.
3.  Add tasks from the dashboard.
4.  Mark tasks as completed or edit/delete them.
5.  View your progress on the pie chart.
