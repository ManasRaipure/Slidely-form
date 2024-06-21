# Slidely-form
# Form Application Project

 This project is a full-stack application with a frontend for creating and viewing form submissions and a backend server built with Express and TypeScript to handle the form data. 


## Project Structure

├── Backend/
│ ├── routes/
│ │ └── submissions.ts
│ ├── app.ts
│ ├── index.ts
│ ├── tsconfig.json
├── Frontend/
│ ├── index.html
│ ├── styles.css
│ └── scripts.js



## Prerequisites

- Node.js and npm installed on your machine.
- TypeScript installed globally (`npm install -g typescript`).
- A modern web browser.

## Required Packages

### Backend

- express
- body-parser
- cors
- typescript (dev)
- @types/node (dev)
- @types/express (dev)
- @types/body-parser (dev)
- @types/cors (dev)
- ts-node (dev)

### Frontend

- http-server (for serving the static files)

## Setup and Run the Backend

1. **Navigate to the Backend directory and initialize the project:**

   ```sh
   cd project/Backend
   npm init -y


2. **Install Required Packages**
npm install express body-parser cors
npm install typescript @types/node @types/express @types/body-parser @types/cors ts-node --save-dev


3.**Create the server files**:

app.ts for setting up the Express app and routes.
index.ts for starting the server.
routes/submissions.ts for handling form submission routes.


 4.**Navigate to the Frontend directory and create the necessary files:**

index.html for the main HTML structure.
styles.css for the CSS styles.
scripts.js for the JavaScript logic.

5.**Serve the frontend using http-server:**

cd path/to/Frontend
npx http-server

6.**Backend Endpoints**
GET /ping - Check if the server is running.
POST /submissions/submit - Submit a new form entry.
GET /submissions/read - Retrieve all form submissions.




**
This `README.md` provides a clear and detailed guide for setting up and running both the backend and frontend parts of your project, including the required packages, project structure, and usage instructions.
**

