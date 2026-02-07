# CYBER-WEB (BACKEND) 🚀

This is a Node.js project using **TypeScript**, **Express**, and **Prisma ORM**, with **PostgreSQL** as the database. It is part of the CompassUOL Scholarship Program, specifically the Full Stack Journey (Node.js & React) - AWS Cloud Context - Jul/2025.  

In this repository, we have the backend of **cyber-web**, an e-commerce platform focused on electronics.

**The production branch is feature/config-deploy. This main branch was focused on being development-only to make it easier for instructors to run locally without any AWS involvement that could break the application if S3 and EC2 are deactivated. It's worth noting that the step-by-step explanation of how the deployment was done on AWS along with Docker is in the frontend repository.**

## 📋 Prerequisites

Before getting started, make sure you have installed on your machine:

- [Node.js](https://nodejs.org/) (version 18 or higher recommended)  
- [Npm](https://www.npmjs.com/)  
- [PostgreSQL](https://www.postgresql.org/) 

## ⚙️ Project Setup

1. **Clone the repository**

```bash
git clone https://github.com/joaonevescampos/cyber-web-backend.git
```
```bash
cd cyber-web-backend
```

2. **Install depedencies**

```bash
npm install
```

3. **Configure environment variables**

- There already has the Clerk keys, but you must config your DB variables.
- Remember to rename the .env.example to .env
- Check the .env.example file for more information

4. **Setup the database with Prisma**

```bash
npx prisma generate
```
```bash
npx prisma migrate dev
```

5. **Add data in your local db**
```bash
npm run seed
```

6. **Run the server**
```bash
npm run dev
```

## 📂 Project Structure

src/
 ├─ controllers/         
 ├─ database/    
 ├─ interfaces/    
 ├─ repositories/    
 ├─ routes/      
 ├─ usecases/      
 ├─ index.ts    
 ├─ secrets.ts    
prisma/
 ├─ migrations/
 ├─ schema.prisma
.env

## 👥 Sertão Squad Team

- [Guilherme Paes Cavalcanti](https://github.com/Guy1717) 
- [Iury Allan Alves Diógenes](https://github.com/iuryallan)
- [João Victor Neves Campos de Jesus](https://github.com/joaonevescampos)
- [Nicole da Silva Rodrigues](https://github.com/nicolerdgs)
- [Samily Vitoria Bonfim Mendes](https://github.com/samndess)
