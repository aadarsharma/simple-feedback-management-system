# Simple Feedback Management System

This project is a Simple Feedback Management System built using Node.js, Express, and TypeScript for the backend, and React with TypeScript for the frontend. The system allows users to submit feedback and view all feedback entries.

## Project Structure

### Backend
- **Framework:** Node.js with Express and TypeScript
- **Endpoints:**
  - `GET /feedbacks`: Retrieve all feedback entries.
  - `POST /feedbacks`: Submit new feedback. The request body should contain `{ name: string, feedback: string }`.

### Frontend
- **Framework:** React with TypeScript
- **Features:**
  - A form to submit new feedback with fields for name and feedback.
  - A list to display all feedback entries.
  - Communication with the backend using fetch.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher) or yarn
- Git

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/simple-feedback-management-system.git
   cd simple-feedback-management-system
2. **Backend Setup:**
   ```sh
   cd backend
   npm install
   npm run start
3. **Frontend Setup:**
   ```sh
   cd frontend
   npm install
   npm run start
### Running the Project

1. **Start the backend server:**
   ```sh
   cd backend
   npm run start
2. **Start the frontend server:**
   ```sh
   cd frontend
   npm run start
3. Open your browser and navigate to http://localhost:5173 to view the application.

## Usage

### Submitting Feedback

- Enter your name and feedback in the form fields.
- Click the "Give Feedback" button to submit.

### Viewing Feedback

- All submitted feedback will be displayed in a list below the form.

## Project Screenshot

![Project Screenshot](./path-to-your-screenshot-file/Screenshot_2024-06-13_at_5.38.33_PM.png)

## API Documentation

### GET /feedbacks

- **Description:** Retrieve all feedback entries.
- **Response:** 
  - Status: `200 OK`
  - Body: `[{ name: string, feedback: string }]`

### POST /feedbacks

- **Description:** Submit new feedback.
- **Request Body:**
  ```json
  {
    "name": "string",
    "feedback": "string"
  }
  
- **Response:**
  - Status: `201 Created`
  - Body: `[{ name: string, feedback: string }]`
