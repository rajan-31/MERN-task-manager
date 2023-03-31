# Task Manager

This is a simple "Task Manager" web application developed using the technology stack mentioned below. This app consists of frontend and backend modules. The frontend utilises REST API routes from the backend to interact with the database. It demonstrates CRUD operations on a database.

## Tech Stack

(MERN + Redux + TailwindCSS)

| Backend       | Frontend      |
| ---           | ---           |
| Node.js       | React.js      |
| Express.js    | Redux         |
| MongoDB       | TailwindCSS   |

## Setting up environment variables

For both frontend and backend (independently)

- Rename `.env.sample` file to `.env`
- Set appropriate values in `.env`

## Installing dependencies

In both `frontend` and `backend` folders (independently),

execute `npm install`

## Production

In root folder

- execute `npm run start`
- go to http://localhost:3000

## Development

1. Developing the frontend and backend together
    - Change directory to project root folder
    - Execute `npm run dev`
    - Frontend available at http://localhost:3000
    - Backend API available at http://localhost:8080

2. Developing the frontend only
    - `cd frontend`
    - Execute `npm start`
    - Visit http://localhost:3000 in browser

3. Developing the backend only
    - `cd backend`
    - `npm run dev`
    - Check http://localhost:8080/status and other endpoints in tools like Insomnia, Postman, etc.