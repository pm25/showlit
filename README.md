<!--
origin repo: https://github.com/pm25/Showlit
author: Pin-Yen Huang
-->

<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/pm25/showlit">
    <img src="/public/images/full_logo.png" alt="Logo" width="640">
  </a>

  <h3 align="center">Showlit – A Modern and Clean Personal Website Template</h3>

  <p align="center">
    Build your personal website effortlessly with <strong>✨Showlit</strong>!  <br>
    This fully customizable React-based template is perfect for showcasing your portfolio with ease.
    <br />
    <br />
    <a href="https://pm25.github.io/showlit">🌐 Live Demo</a>
    ·
    <a href="https://github.com/pm25/showlit/issues/new?labels=bug&template=bug-report---.md">🐞 Report Bug</a>
    ·
    <a href="./CHANGELOG.md">📄 Update Log</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-template">About The Template</a></li>
    <li><a href="#preview">Preview</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Template

**✨Showlit** is a React-based personal website template designed for quick setup and easy customization. It offers modern UI components, useful built-in features, and flexible customization options. Showlit strikes a balance between simplicity and flexibility, letting you get started quickly while still tailoring your site to your style.

**Why Showlit?**

- ⚡ **Quick Setup** – Get your site running in minutes.
- 🎨 **Customizable** – Easily adjust the design (basic react skills required).
- 🔧 **Built-in Features** – Includes a blog, automatic project fetching, and more.
- 👥 **Beginner-Friendly** – No advanced coding needed to get started.

**Found this project useful?** Give it a ⭐ to support the project!

### 🛠️ Built With

This project is primarily built using the following frameworks and libraries:

- [![React][React.js]][React-url]
- [![Vite][Vite]][Vite-url]
- [![Tailwind CSS][Tailwind.css]][Tailwind-url]
- [![Typescript][Typescript]][Typescript-url]
- [![shadcn/ui][shadcn.ui]][shadcn-url]

<p align="right"><a href="#readme-top">⬆️ Back to top</a></p>

## Preview

See how ✨Showlit looks in both light and dark themes:

### 🌞 Light Mode

![Light Mode][screenshot-light]

### 🌚 Dark Mode

![Dark Mode][screenshot-dark]

<p align="right"><a href="#readme-top">⬆️ Back to top</a></p>

<!-- GETTING STARTED -->

## Getting Started

There are two ways to use this template:

1. 🚀 [Quick Setup](https://pm25.github.io/showlit/#/articles/quick-setup) - no local development required
2. 🧑‍💻 [Local Development & Manual Deployment](https://pm25.github.io/showlit/#/articles/manual-setup)

### 🚀 Quick Setup (Simplified)

This option **does not require local development**. Simply update the configuration files → commit → push. GitHub Actions will handle the build and deployment automatically.

Below is a **simplified guide**. For **detailed instructions with screenshots**, see the [Quick Setup guide](https://pm25.github.io/showlit/#/articles/quick-setup).

---

**1️⃣ Create Your Repository**

Click **"Use this template"** → **"Create a new repository"**.

On the **Create a new repository** page:

- Enable **"Include all branches"**
- Enter a repository name
- Set the visibility to **Public** (default is Public already)
- Click **"Create repository"**

---

**2️⃣ Enable GitHub Pages**

Go to your **Repository Settings** → **Pages**, then configure:

- **Branch:** `gh-pages`
- **Folder:** `/(root)`

Click **Save**.

---

**3️⃣ Update Configuration Files**

- [`site.yaml`](/config/site.yaml) — website title, metadata, etc.
- [`profile.yaml`](/config/profile.yaml) — your name, email, profile image, etc.
- [`sidebar.yaml`](/config/sidebar.yaml) — sidebar layout
- [`giscus.yaml`](/config/giscus.yaml) — Giscus (article comments) configuration
- [`publications.yaml`](/config/publications.yaml) — (optional) research publications list

---

**4️⃣ Commit and Push Changes**

Once your changes are pushed (or merged) to `main` branch, GitHub Actions will automatically:

- Build the project
- Deploy to GitHub Pages
- Publish your website 🎉

After a few minutes, your website will be available at:

```sh
https://<your-github-username>.github.io/<your-repo-name>
```

<p align="right"><a href="#readme-top">⬆️ Back to top</a></p>

<!-- USAGE -->

## Usage

### ✏️ Customize Content

You can personalize the website by updating the configuration files located in the [config](config) folder. Any changes will be automatically applied when the site is built or deployed.

For example, in [config/profile.yaml](config/profile.yaml), you can update the information with your owns:

```yaml
profile:
  name: "Pin-Yen Huang"
  headline: "Student @ National Taiwan University"
  email: "pyhuang97@gmail.com"
  profileImage: "https://github.com/pm25.png"
  # ...other fields
```

Other configurable files include:

- Website Information: [config/site.yaml](config/site.yaml)
- Profile Information: [config/profile.yaml](config/profile.yaml)
- Sidebar Layout: [config/sidebar.yaml](config/sidebar.yaml)
- Giscus Comments: [config/giscus.yaml](config/giscus.yaml)
- Publications: [config/publications.yaml](config/publications.yaml)

### 📝 Add Articles

To add a article, create a folder and Markdown file inside [public/articles](public/articles) following this structure:

```sh
# 💡 the folder name and Markdown filename must be the same
/public/articles/{slug}/{slug}.md
```

You can use [public/articles/template/template.md](public/articles/template/template.md) as a reference.

When the site is built or deployed, any properly structured articles will be automatically included and indexed.

<p align="right"><a href="#readme-top">⬆️ Back to top</a></p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See [`LICENSE`](./LICENSE) for more information.

<p align="right"><a href="#readme-top">⬆️ Back to top</a></p>

<!-- CONTACT -->

## Contact

Pin-Yen Huang - [pyhuang97@gmail.com](mailto:pyhuang97@gmail.com)

<p align="right"><a href="#readme-top">⬆️ Back to top</a></p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

I am deeply grateful for the following tools and resources that contributed to the development of this project:

- [giscus](https://giscus.app)
- [React Icons](https://react-icons.github.io/react-icons)
- [Best README Template](https://github.com/othneildrew/Best-README-Template)

<p align="right"><a href="#readme-top">⬆️ Back to top</a></p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[screenshot-light]: preview/showlit-light.png
[screenshot-dark]: preview/showlit-dark.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://react.dev
[shadcn.ui]: https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=shadcn/ui&logoColor=white
[shadcn-url]: https://ui.shadcn.com
[Tailwind.css]: https://img.shields.io/badge/Tailwind_CSS-grey?style=for-the-badge&logo=tailwind-css&logoColor=38B2AC
[Tailwind-url]: https://tailwindcss.com
[Typescript]: https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[Typescript-url]: https://www.typescriptlang.org
[Vite]: https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white
[Vite-url]: https://vite.dev
