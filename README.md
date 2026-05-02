# Nexora AI

A responsive and animated digital agency website built with React, Vite, and Tailwind CSS.

## Features

- Responsive landing page
- Light and dark mode
- Animated page sections
- Custom cursor effect
- Services showcase
- Work / portfolio section
- Team section
- Contact form with Web3Forms
- Toast notifications

## Tech Stack

- React
- Vite
- Tailwind CSS
- Motion
- React Hot Toast
- Web3Forms

## Installation

Clone the repository:

```bash
git clone https://github.com/Hemanth-dev07/nexora-ai.git
cd nexora-ai
```

Install dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env.local` file in the root folder and add your Web3Forms access key:

```env
VITE_WEB3FORMS_ACCESS_KEY_LIVE=your_web3forms_access_key_here
```

## Run Locally

```bash
npm run dev
```

Open the local URL shown in the terminal.

## Build

```bash
npm run build
```

## Preview Build

```bash
npm run preview
```

## Project Structure

```text
src/
├── assets/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── TrustedBy.jsx
│   ├── Services.jsx
│   ├── ServiceCard.jsx
│   ├── OurWork.jsx
│   ├── Teams.jsx
│   ├── ContactUs.jsx
│   ├── Footer.jsx
│   ├── ThemeToggleBtn.jsx
│   └── Title.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the development server |
| `npm run build` | Creates a production build |
| `npm run preview` | Previews the production build |
| `npm run lint` | Runs ESLint |

## Notes

- Keep `.env.local` private.
- Do not commit `node_modules`.
- Update images and icons from the `src/assets` folder.
- Update page sections from the `src/components` folder.