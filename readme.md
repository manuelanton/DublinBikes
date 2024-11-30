Noloco Project
Overview

This project is split into two parts:

    Backend - A Node.js + Express API that allows filtering data based on user input.
    Frontend - A React application for applying filters and displaying the filtered data in a table.

Backend (Noloco/backend)
Description

The backend exposes two endpoints:

    GET /schema: Fetches the transformed schema data.
    POST /data: Accepts filters in the request body and returns filtered data.

Key Technologies:

    Node.js and Express for the API.
    CORS for enabling cross-origin requests from the frontend.

How to Run:

    Navigate to the backend directory:

cd Noloco/backend

Install dependencies:

npm install

Start the backend server:

    npm run dev

    The server will be running on http://localhost:3001.

Frontend (Noloco/frontend/)
Description

The frontend provides a form to apply filters and displays the filtered data in a table. It allows dynamic filter addition and removal.
Key Technologies:

    React and TypeScript for building the UI.
    CSS for basic styling.

How to Run:

    Navigate to the frontend/my-app directory:

cd Noloco/frontend/

Install dependencies:

npm install

Start the frontend application:

    npm start

    The frontend will be running on http://localhost:3000.

How the Solution Works

The backend is built with Express and exposes two endpoints: one to fetch schema data and another to filter and return data based on user-provided filters.

The frontend is built using React and provides a form to select fields, operators, and values. The user can add multiple filters, and when the form is submitted, the frontend sends a properly formatted request to the backend.
Filter Format Example:

When submitting filters, the frontend formats the request as follows:

{
"where": {
"status": { "eq": "OPEN" },
"availableBikes": { "gt": 5 }
}
}

Key Choices:

    Backend: Used Express for simplicity and ease of handling HTTP requests. CORS was enabled to allow frontend and backend to communicate on different ports during development.
    Frontend: React was chosen for its component-based structure, which makes managing state and rendering dynamic UI easier. TypeScript was used for type safety.

What I Would Have Done with More Time:

    Add more comprehensive error handling on both frontend and backend.
    Implement tests for both frontend and backend.
    Improve styling for better UI/UX.
    Consider separating frontend components into smaller reusable components.
