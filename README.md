# BrewNotes

## Table of Contents

- [BrewNotes](#brewnotes)
  - [Table of Contents](#table-of-contents)
  - [About the Project](#about-the-project)
  - [Tech Stacks](#tech-stacks)
  - [Setup](#setup)
    - [Prequisites](#prequisites)
    - [Installation](#installation)

---

## About the Project

BrewNotes is a coffee-themed note taking app created with MERN stack. The idea came from developers loving coffee and spending time working at cafes. The app is meant to feel like being in a cafe while taking notes.

---

## Tech Stacks

- Frontend: Vite + TailwindCSS
- Language: JavaScript
- Backend: Node + Express
- Database: MongoDB
- Rate Limit Feature: Upstash
- Hosting: Render

---

## Setup

### Prequisites

- Node 22+
- MongoDB Project (Database)
- Upstash Workflow (Redis)

### Installation

1. Clone the repository

```
git clone https://github.com/abdulgilani/catalog-app
```

2. Install dependencies

```
    cd backend && npm i
    cd ../frontend && npm i
```

3. Environmnent setup

```
cp backend/.env.example backend/.env
```

Update `.env` with your configurations

- MongoDB URI
- Upstash Redis REST URL
- Upstash Redis REST Token

4. Development

```
    # Run the backend
    cd backend && npm run dev

    # Run the frontend
    cd frontend && npm run dev
```

5. Production Build

```
npm run build
npm run start
```

Visit http://localhost:5001/api
