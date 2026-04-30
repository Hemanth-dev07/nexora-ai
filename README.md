# Nexora AI

Nexora AI is a modern digital agency landing page built with React, Vite, and Tailwind CSS.

## Features

- Responsive design
- Light and dark mode
- Hero section
- Services section
- Portfolio / work showcase
- Team section
- Contact form using Web3Forms
- Toast notifications

## Tech Stack

- React
- Vite
- Tailwind CSS
- React Hot Toast
- Web3Forms

## Installation

Clone the project and install dependencies:

```bash
git clone <repository-url>
cd nexora-ai
npm install
```

## Environment Variables

Create a `.env.local` file in the root folder and add your Web3Forms access key:

```env
VITE_WEB3FORMS_ACCESS_KEY_LIVE=your_web3forms_access_key_here
```

## Run Locally

Start the development server:

```bash
npm run dev
```

Open the local URL shown in the terminal.

## Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```text
src/
├── assets/
├── components/
├── utils/
├── App.jsx
├── index.css
└── main.jsx
```

## Main Components

- `Navbar.jsx`
- `Hero.jsx`
- `Services.jsx`
- `OurWork.jsx`
- `Teams.jsx`
- `ContactUs.jsx`
- `Footer.jsx`
- `ThemeToggleBtn.jsx`

## Notes

- Keep `.env.local` private.
- Do not commit `node_modules`.
- Update assets from the `src/assets` folder.
- Update page sections from the `src/components` folder.