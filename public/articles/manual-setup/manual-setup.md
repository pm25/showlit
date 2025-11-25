---
title: "Manual Setup Guide – Showlit"
summary: "Step-by-step guide for local development and manual deployment of the Showlit template."
tags: ["setup", "manual", "showlit"]
---

# 🧑‍💻 Local Development & Manual Deployment

This option is recommended if you want to **customize components**, **styles**, or **add new features**.

For a quick setup without local development, see the [Quick Setup guide](https://pm25.github.io/showlit/articles/quick-setup).

---

## 📌 Requirements

- [Node.js](https://nodejs.org/) - version 20 or above
- npm (latest)

Update npm to the latest version if needed:

```sh
npm install npm@latest -g
```

> 💡 Tip: Use node -v and npm -v to verify your versions.

---

## 🛠️ Local Setup

### 1️⃣ Create your repository

1. Fork or click "Use this template" to create your own repository
2. then clone it locally:

```sh
git clone https://github.com/<your-github-username>/<your-repo-name>.git
cd <your-repo-name>
```

---

### 2️⃣ Enable GitHub Pages

Go to your **Repository Settings** → **Pages**
Select:

- **Branch:** gh-pages
- **Folder:** /(root)

Then click **Save**.

---

### 3️⃣ Install dependencies

From the project folder, install all required packages:

```sh
npm install
```

---

### 4️⃣ Start the development server

Run:

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) (or the URL shown in your terminal) in your browser.
Your site should now be running locally.

**💡Notes:** Changes to configs or new articles may require a fresh build to appear in the local preview. Run:

```sh
npm run build
npm run dev
```

---

## 📦 Manual Deployment

To publish the site to GitHub Pages:

```sh
npm run deploy
```

This will:

- Build your website for production
- Push static assets to the `gh-pages` branch
- Deploy your site on GitHub Pages 🎉

After a few minutes, your website will be available at:

```sh
https://<your-github-username>.github.io/<your-repo-name>
```

---

## 🔁 Switch Anytime

You can freely switch between:

- Updating config files only (Quick Setup)
- Full local development and customization

Your workflow stays flexible. 💪
