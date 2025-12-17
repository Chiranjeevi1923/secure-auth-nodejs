# 🔐 Node.js Authentication & Authorization

A complete learning and reference project for building **secure authentication and authorization systems** using:

- **Node.js**
- **Express.js**
- **PostgreSQL**
- **Drizzle ORM**
- **Docker & Docker Compose**

This repository focuses on **real-world backend patterns** rather than just basic login/signup examples.

---

## 🚀 Features

- User Registration & Login
- Secure Password Hashing (bcrypt)
- JWT-based Authentication
- Refresh Token Strategy
- Role-Based Access Control (RBAC)
- Protected Routes & Middleware
- PostgreSQL with Drizzle ORM
- Database Migrations
- Dockerized Development Environment
- Environment Variable Best Practices
- Clean Project Structure

---

## 🛠 Tech Stack

| Layer            | Technology |
|------------------|------------|
| Runtime          | Node.js |
| Framework        | Express.js |
| Database         | PostgreSQL |
| ORM              | Drizzle ORM |
| Authentication   | JWT |
| Password Security| bcrypt |
| Containerization | Docker |
| Config           | dotenv |

---



---

## 🔑 Authentication Flow

1. User registers with email & password
2. Password is hashed using bcrypt
3. JWT access token is issued on login
4. Protected routes validate JWT
5. Role middleware enforces authorization
6. Refresh tokens allow secure re-authentication

---

## 🧑‍💻 API Endpoints

### Auth Routes

| Method | Endpoint        | Description |
|------|-----------------|-------------|
| POST | `/auth/signup`  | Register new user |
| POST | `/auth/login`   | Login user |
| POST | `/auth/refresh` | Refresh access token |
| POST | `/auth/logout`  | Logout user |

### Protected Routes

| Method | Endpoint      | Role Required |
|------|---------------|---------------|
| GET  | `/profile`     | User |
| GET  | `/admin/users` | Admin |

---

## 🧱 Database Schema (Simplified)

### Users
- `id`
- `name`
- `password`
- `salt`
- `createdAt`

---

### User Sessions
- `id`
- `userId` (references Users.id - Foreign Key)
- `createdAt`

## 🐳 Running with Docker
Start PostgreSQL using Docker Compose:
```
docker compose up -d
```

Stop PostgreSQL:
```
docker compose down
```

To Push Schema Changes:
```
npx drizzle-kit push
```

To Open Drizzle Studio:
```
npx drizzle-kit studio
```

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Chiranjeevi1923/secure-node-auth.git
cd secure-node-auth

### 2️⃣ Install dependencies
```bash
npm install

### 3️⃣ Set up environment variables
Create a `.env` file in the root directory and add the following:
PORT=3000
DATABASE_URL=postgres://<USERNAME>:<PASSWORD>@<DB_HOST>:<PORT>/<DB_NAME>
```

### 4️⃣ Start the server
```bash
npm start
The server will be running at `http://localhost:3000`

### 📚 Learning Resources
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Express.js Documentation](https://expressjs.com/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Drizzle ORM Documentation](https://orm.drizzle.team/)
- [Docker Documentation](https://docs.docker.com/)

---
 - Thanks for checking out this project! Feel free to open issues or contribute.