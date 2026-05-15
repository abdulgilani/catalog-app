# BrewNotes

## Table of Contents

- [BrewNotes](#brewnotes)
  - [Table of Contents](#table-of-contents)
  - [About the Project](#about-the-project)
  - [Tech Stacks](#tech-stacks)
  - [Setup](#setup)
    - [Prequisites](#prequisites)
    - [Installation](#installation)
  - [Repository Structures](#repository-structures)

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

1. Clone the Repository

```
git clone https://github.com/abdulgilani/catalog-app
```

2. Install Dependencies

```
cd backend && npm i
cd ../frontend && npm i
```

3. Environmnent Setup

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

## Repository Structures

```
/brewnotes
├── .gitignore
├── README.md
├── /backend
│   ├── .env.example
│   └── src
│       ├── /config                                    # Upstash and DBconfigs
│       ├── /controller                                # Endpoint controllers (getAllNotes, getNotes, postNote, updateNote, deleteNote)
│       ├── index.js                                   # Main express server entry
│       ├── /middleware                                # Rate limiting middleware
│       ├── /model                                     # Model to create the database in the MongoDB project cluster
│       └── /routes                                    # Endpoints routes to get to controllers
├── /frontend
│   ├── README.md
│   ├── coffee.svg
│   ├── eslint.config.js
│   ├── index.html
│   ├── src
│   │   ├── App.jsx                                    # Main routing setup
│   │   ├── /components                                # UI Components (Navbar, NoteCard, NotesNotFound, RateLimit)
│   │   ├── index.css                                  # Tailwind configuration page
│   │   ├── /lib                                       # Config files (axios, utils)
│   │   ├── main.jsx                                   # React entry point
│   │   └── /pages                                     # App Pages (CreateHomePage, HomePage, NoteDetailPage)
│   ├── tailwind.config.js
│   └── vite.config.js
└── package.json
```
