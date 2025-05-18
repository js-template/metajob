# Metajob – Job Board App with Next.js & Strapi

![banner](https://github.com/user-attachments/assets/ddf05dcf-2b7e-417c-9562-2bd42290f3ff)

**🔗 Get the Production License:**  
[Job Board App with Next.js & Strapi](https://jstemplate.net/item/job-board-app-with-nextjs-strapi?utm_source=github&utm_medium=repo&utm_campaign=metajob_launch)

---

## 🚀 Getting Started

### Prerequisites

Make sure the following are installed:

- **Node.js** (v20 or higher)  
- **pnpm** (recommended for managing dependencies)

Install `pnpm` if you haven't already:

```bash
npm install -g pnpm
````

---

## 🛠 Setup Instructions

### 1. Clone or Fork the Repo

Once you purchase the license, you’ll receive the codebase and a license token via email.
If you didn’t get the token, contact **[info@jstemplate.net](mailto:info@jstemplate.net)**.

```bash
git clone https://github.com/your-username/metajob.git
cd metajob
```

### 2. Configure Environment Variables

Rename the following file:

```
apps/backend/.env.example → apps/backend/.env
```

Then add your license token to the `.env`:

```bash
LICENSE_TOKEN=your-token-from-email
```

In `.npmrc`, include:

```bash
@jstemplate:registry=https://api.keygen.sh/v1/accounts/88de7a21-b541-48e5-8727-f992ebeb43fa/artifacts/
//api.keygen.sh/v1/accounts/88de7a21-b541-48e5-8727-f992ebeb43fa/artifacts/:_authToken=$LICENSE_TOKEN
```

---

### 3. Install Dependencies

Run this from the root:

```bash
pnpm install
```


### 4. Start the Backend (Strapi)

```bash
pnpm -F backend dev
```

Strapi will be running at:
`http://localhost:1337`

### 5. Start the Frontend (Next.js)

Open a new terminal and run:

```bash
pnpm -F core dev
```

Frontend will be live at:
`http://localhost:3000`

---

## 📖 Documentation

Read the full guide here:
[MetaJob Documentation](https://docs.jstemplate.net/metajob/get-started/intro/)


## 📩 Support

For help, reach out to:
📧 [info@jstemplate.net](mailto:info@jstemplate.net)

---

## 🔗 Product Page

[👉 Visit the Product Page](https://jstemplate.net/item/job-board-app-with-nextjs-strapi?utm_source=github&utm_medium=repo&utm_campaign=metajob_launch)
