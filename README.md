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

<p align="center">
  🚧 This project is still under construction! 🚧
</p>

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

**✨Showlit** is a React-based website template that makes building a personal website easy. It offers modern UI components, useful built-in features, and flexible customization options. Showlit strikes a balance between simplicity and flexibility, letting you get started quickly while still tailoring your site to your style.

**Why Showlit?**

- ⚡ **Quick Setup** – Get your site running in minutes.
- 🎨 **Customizable** – Easily adjust the design (basic react skills required).
- 🔧 **Built-in Features** – Includes a blog, automatic project fetching, and more.
- 👥 **Beginner-Friendly** – No advanced coding needed to get started.

✨ **Found this project useful?** Give it a ⭐ to support the project!

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

### ☀️ Light Mode

![Light Mode][screenshot-light]

### 🌙 Dark Mode

![Dark Mode][screenshot-dark]

<p align="right"><a href="#readme-top">⬆️ Back to top</a></p>

<!-- GETTING STARTED -->

## Getting Started

Follow these steps to set up the project locally and deploy it to GitHub Pages.

### ✅ Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and npm installed. You can update npm to the latest version using:

```sh
npm install npm@latest -g
```

### 🛠️ Installation

1. **Clone the repository**

```sh
git clone https://github.com/pm25/showlit.git
cd showlit
```

2. **Install dependencies**

```sh
npm install
```

3. **Start the development server**

```sh
npm run dev
```

This will start the Vite development server. Open [http://localhost:5173](http://localhost:5173) (or the URL shown in your terminal) to view it in the browser.

### 🚀 Deployment

To publish the site to GitHub Pages:

```sh
npm run deploy
```

### 💡 Notes

- If you’re forking or cloning this repo as a template, it’s recommended to update the git remote:

```sh
git remote set-url origin https://github.com/<your-username>/<your-repo>.git
git remote -v # Confirm the changes
```

<p align="right"><a href="#readme-top">⬆️ Back to top</a></p>

<!-- USAGE EXAMPLES -->

## Usage

### ✏️ Customize Content

You can personalize the website by updating the configuration files located in the [config](config) folder. Any changes will be automatically applied when the site is built or deployed.

For example, in [config/profile.yaml](config/profile.yaml), you can update the information with your owns:

```yaml
profile:
  name: "Pin-Yen Huang"
  headline: "Student @ National Taiwan University"
  email: "pyhuang97@gmail.com"
  profile_image: "https://github.com/pm25.png"
  # ...other fields
```

Other configurable files include:

- Website Information: [config/site.yaml](config/site.yaml)
- Profile Information: [config/profile.yaml](config/profile.yaml)
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

[screenshot-light]: preview/light-mode.webp
[screenshot-dark]: preview/dark-mode.webp
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
