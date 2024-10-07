# Todo App

A full-featured to-do app with a modern tech stack, structured in a monorepo. This app allows you to manage tasks efficiently with a sleek UI and robust backend. The frontend is built with Vue, Vite, Pinia, Shadcn UI, and Tailwind CSS for a fast and responsive user experience. The backend uses NestJS, GraphQL, TypeORM, and PostgreSQL for powerful data management.

## Features

- **Monorepo**: Unified structure for both frontend and backend, allowing for seamless integration and shared utilities.
- **Responsive Frontend**:
  - Built with **Vue.js** and **Vite** for fast development.
  - **Pinia** for intuitive state management.
  - Beautiful UI components styled with **Shadcn UI** and **Tailwind CSS** for highly customizable and responsive design.
- **Scalable Backend**:
  - **NestJS** for a modular, maintainable backend.
  - **GraphQL** for flexible and efficient data querying.
  - **TypeORM** with **PostgreSQL** for robust and performant database operations.
  
## Tech Stack

### Frontend
- **Vue.js**: A progressive JavaScript framework for building dynamic user interfaces.
- **Vite**: Next-generation frontend tooling with fast build and HMR (Hot Module Replacement).
- **Pinia**: A store library for managing global state.
- **Shadcn UI**: Pre-built UI components that are customizable with **Tailwind CSS**.
- **Tailwind CSS**: A utility-first CSS framework for building modern, responsive designs.

### Backend
- **NestJS**: A Node.js framework for scalable server-side applications.
- **GraphQL**: Enables efficient and flexible data querying.
- **TypeORM**: A robust ORM supporting PostgreSQL.
- **PostgreSQL**: An advanced, open-source database system.

## Project Structure

```bash
todo/
├── web/       # Frontend
├── srv/       # Backend
└── README.md
```

## Getting Started

### Prerequisites

- **Node.js** (version >= 16.x)
- **PostgreSQL** (version >= 13.x)

### Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/irvanherz/todo.git
   cd todo
   ```

2. **Install dependencies**:

   Navigate to the root folder and install dependencies for both frontend and backend:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   For both frontend and backend, create an `.env` file based on the provided templates:

   - **Frontend**:  
     Copy `.env.template` to `.env` in the `web` directory:

     ```bash
     cd apps/web
     cp .env.template .env
     ```

   - **Backend**:  
     Copy `.env.template` to `.env` in the `srv` directory:

     ```bash
     cd apps/srv
     cp .env.template .env
     ```

   Edit the `.env` files with the correct environment variables such as database credentials, API keys, etc.

4. **Run the app**:

   - **Frontend**:

     Start the development server and run GraphQL code generation:

     ```bash
     cd apps/web
     npm run graphql-codegen
     npm run dev
     ```

   - **Backend**:

     Start the NestJS server:

     ```bash
     cd apps/srv
     npm run start:dev
     ```

5. Access the app:
   - **Frontend**: `http://localhost:3000`
   - **Backend**: `http://localhost:4000/graphql` (GraphQL playground)

## Running Tests

- **Frontend**:  
  Run unit tests:

  ```bash
  cd apps/web
  npm run test
  ```

- **Backend**:  
  Run unit tests:

  ```bash
  cd apps/srv
  npm run test
  ```

## Contributing

Contributions are welcome! Feel free to open issues, fork the repository, and submit pull requests.

## License

This project is licensed under the MIT License.
