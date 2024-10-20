
# Metajob- Job Board App with Nextjs & Strapi

![thumbspng](https://github.com/user-attachments/assets/bddc9e5b-7f94-4950-b5bc-44c73fccf534)

## **What is Metajob?**
#### Introduction:
Full Stack Job Portal Solution.


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

## **Getting Started:**

If you’re new to development, don’t worry! This guide will help you set up the project with ease.

### Step 1: Fork the Repository
Click the "Fork" button at the top right of this GitHub repository to copy it to your account.

### Step 2: Set Up Environment Variables
For both the `apps/backend` and `apps/site` folders, create an `.env` file and add the required environment variables. The `.env.example` files will guide you on what’s needed.

### Step 3: Run the Backend
To start the backend (Strapi CMS), navigate to the `apps/backend` directory and run the following commands:

```bash
pnpm install
pnpm run dev
```

Step 4: Run the Frontend
In another terminal, navigate to the apps/site directory and run:

```bash
pnpm install
pnpm dev
```
This will launch the front end, and the site will be accessible at http://localhost:3000.

Step 5: Explore and Customize
Once everything is up and running, you can begin exploring the code, customizing themes, and adding your own content through the Strapi admin panel at http://localhost:1337/admin.

For more details on setting up and customizing the project, please refer to the full documentation linked below.



