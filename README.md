<div align="center">
  <br />
  <a href="https://codeayna.vercel.app" target="_blank">
    <img src="public/phone.png" alt="CodeAYNA Banner">
  </a>
  <br />
  <div>
    <img alt="Static Badge" src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white">
    <img alt="Static Badge" src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black">
    <img alt="Static Badge" src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
    <img alt="Static Badge" src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white">
    <img alt="Static Badge" src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white">
    <img alt="Static Badge" src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black">
    <img alt="Static Badge" src="https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white">
  </div>
  <h1>CodeAYNA</h1>
  <h3>AI-Powered Code Converter</h3>
  <p><a href="https://codeayna.vercel.app" target="_blank"><b>🚀 Check Live</b></a></p>
</div>

---

## 📋 Table of Contents
1. 🤖 [Introduction](#introduction)  
2. ⚙️ [Tech Stack](#tech-stack)  
3. 🔋 [Features](#features)  
4. 🏗️ [System Architecture](#system-architecture)  
5. ⚡ [API Design](#api-design)  
6. 👨‍💻 [Team Members](#team-members)  
7. 🤝 [How to Contribute](#how-to-contribute)  
8. ❤️ [Contributors](#️-contributors)  

---

## 🤖 Introduction  

**CodeAYNA** is an **AI-powered code converter** that lets developers convert code between **40+ programming languages** instantly.  
It features a modern dual-panel editor, file uploads, utilities, and AI integration for fast, accurate conversions.  

👉 Try it here: [CodeAYNA Live](https://codeayna.vercel.app)  

---

## ⚙️ Tech Stack  

| Category | Technology | Description |
|----------|------------|-------------|
| **Frontend** | ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white) <br> ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black) <br> ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) <br> ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) <br> ![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=shadcnui&logoColor=white) <br> ![Framer Motion](https://img.shields.io/badge/FramerMotion-EF0087?style=for-the-badge&logo=framer&logoColor=white) | Next.js for SSR and routing, React for UI, TypeScript for type safety, Tailwind for styling, shadcn/ui for components, and Framer Motion for smooth animations. |
| **Backend** | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white) <br> ![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white) <br> ![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black) | Node.js with Express for API routes, Firebase for authentication & storage. |
| **AI** | ![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white) | OpenAI GPT models for accurate code conversions. |
| **Deployment & Tools** | ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white) <br> ![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white) | Vercel for deployment, GitHub for version control. |

---
## 📸 Screenshots  

![Homepage](public/readme/home.png)  
![Code Converter](public/readme/converter.png)  

---

## 🔋 Features  

### ✨ Core Features  
- 🔄 Convert code across **40+ programming languages**  
- 📂 File upload support for quick conversions  
- 🎨 Dual-panel editor with syntax highlighting  
- 📋 Copy, download, clear, and reconvert utilities  
- 🔐 Authentication with Firebase Auth  
- 📊 Language dropdown with icons  
- 📱 Fully responsive UI  

---

## 🏗️ System Architecture  

```mermaid
graph TD
    User[User Browser] --> FE[Next.js + React App]
    FE --> BE[Node.js + Express Server]
    BE --> AI[OpenAI API]
    BE --> Firebase[Firebase Auth & Storage]
```
---
## 📌 Roadmap  

- [ ] Add AI-powered debugging & code explanations  
- [ ] VSCode extension for in-editor code conversion  
- [ ] Mobile app version  
- [ ] Expand language support (SQL, Kotlin, Swift, etc.)
---

## ⚡ API Design

### CodeAYNA provides RESTful APIs to handle conversion, uploads, and authentication.

🔷 Base Routes

- /api/convert – AI-powered code conversion

- /api/upload – File upload and processing

- /api/auth – User authentication (login/signup)

- /api/instructions – Handle optional user instructions

Example Request
```http
POST /api/convert
Content-Type: application/json

{
  "sourceLanguage": "python",
  "targetLanguage": "javascript",
  "code": "print('Hello, World!')"
}
```
Example Response
```json
{
  "success": true,
  "convertedCode": "console.log('Hello, World!');"
}
```
---
## 🤝 How to Contribute

### We ❤️ contributions!

#### 📝 Steps
1. Clone your fork
```bash
git clone https://github.com/your-username/CodeAYNA.git
cd CodeAYNA
```
2. Install dependencies
```bash
npm install
```
3. Create a feature branch
```bash
git checkout -b feature/YourFeatureName
```
4. Commit your changes
```bash
git commit -m "Added YourFeatureName"
```
5. Push and open a Pull Request 🚀
---
# ❤️ Contributors
<a href="https://github.com/aviisharma238/CodeAYNA/graphs/contributors"> <img src="https://contrib.rocks/image?repo=aviisharma238/CodeAYNA" /> </a>
<a href="https://github.com/Manas-gupta-04/CodeAYNA/graphs/contributors"> <img src="https://contrib.rocks/image?repo=Manas-gupta-04/CodeAYNA" /> </a>
![GitHub stars](https://img.shields.io/github/stars/aviisharma238/CodeAYNA?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/aviisharma238/CodeAYNA?style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues/aviisharma238/CodeAYNA?style=for-the-badge)

<p align="center">Built with ❤️ by <b>Team CodeAYNA</b></p>


