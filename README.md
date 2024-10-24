
# Metajob- Job Board App with Nextjs & Strapi

<a href="https://metajob.vercel.app/" target="_blank">
    <img src="https://github.com/user-attachments/assets/bddc9e5b-7f94-4950-b5bc-44c73fccf534" alt="thumbspng" />
</a>

### Get the production license from [Metajob- Job Board App with Nextjs & Strapi](https://jstemplate.net/item/job-board-app-with-nextjs-strapi?utm_source=github&utm_medium=social&utm_campaign=job_board_app)

## **Getting Started:**

Here’s the complete documentation in markdown format for easy copying and pasting:


## Prerequisites
Before starting, ensure you have the following installed on your machine:

- **Node.js** (v14 or higher)
- **PostgreSQL** (Ensure PostgreSQL is running and accessible)
- **pnpm** (Recommended for managing dependencies)


To install `pnpm`, you can run the following command:
```bash
npm install -g pnpm
```

---

## Step-by-Step Guide

### Step 1: Fork the Repository
1. 1. **[Fork the repository](https://github.com/your-repo-url/fork)** to your GitHub account.
2. **Open the project** in your preferred code editor (e.g., [VS Code](https://code.visualstudio.com/))

### Step 2: Configure Environment Variables
1. Inside both `apps/backend` and `apps/site`, you will find `.env.example` files.
2. **Rename these files** to `.env`:
   - `apps/backend/.env.example` → `apps/backend/.env`
   - `apps/site/.env.example` → `apps/site/.env`
3. **Update the environment variables** with your specific configuration. Ensure you provide the correct values for PostgreSQL and other necessary services.

   Example `.env` file structure:
   ```plaintext
   DATABASE_URL=postgres://user:password@localhost:5432/mydatabase
   NEXT_PUBLIC_API_URL=http://localhost:1337
   ```

4. **Ensure your PostgreSQL database** is set up and running before proceeding.

```bash
export LICENSE_TOKEN='You will recive license on confirmation email'
```
```bash
 @padma:registry=https://api.keygen.sh/v1/accounts/88de7a21-b541-48e5-8727-f992ebeb43fa/artifacts/
 //api.keygen.sh/v1/accounts/88de7a21-b541-48e5-8727-f992ebeb43fa/artifacts/:_authToken=$LICENSE_TOKEN
```

### Step 3: Install Dependencies
From the root of your project directory, run the following command to install all dependencies:
```bash
pnpm install
```

### Step 4: Run the Backend
1. Navigate to the root directory and run the backend using the following command:
   ```bash
   pnpm -F @padma/backend dev
   ```
2. **Strapi backend** will now be running at `http://localhost:1337`.

### Step 5: Run the Frontend
1. In a new terminal, run the frontend application:
   ```bash
   pnpm -F @padma/frontend dev
   ```
2. **Next.js frontend** will be running at `http://localhost:3000`.

---

## How to Customize
*To be added later.*

---

## How to Deploy
*To be added later.*

## **Tech Stack:**

- **Backend:**  Powered by a headless Strapi CMS with PostgreSQL as the database. [Learn more about Strapi](https://strapi.io/documentation).
   
- **Frontend:**  Built with Next.js for fast rendering and MUI for a modern, responsive user interface.

### **Core Structure:**

- **`apps/backend:`**  
  └── The backend is built with Strapi, providing APIs to power the frontend.

- **`apps/site:`**  
  └── This is the frontend of the project, built using Next.js and MUI.

- **`apps/packages:`**  
  └── Contains reusable components, such as themes.

    - **`@padma/metajob-ui:`**  
      └── This package includes the theme for the job listing solution.

---
