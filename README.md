# Sharad Chandel — Portfolio

Dual-mode personal portfolio built with Astro + React islands, CSS
Modules, and centralized design tokens, themed in Tokyo Night.

- **Executive View** — a scannable, card-based resume for recruiters.
- **Terminal Mode** — an interactive CLI (`help`, `about`, `experience`,
  `projects`, `skills`, `education`, `contact`, `neofetch`, `clear`)
  for developers.

### Getting started

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview
```

### Project structure

```text
src/
├── data/               → profileData.js, terminalCommands.js (all content lives here)
├── components/
│   ├── common/Badge/
│   ├── Navbar/
│   ├── ExecutiveView/  → ExecutiveView, ExperienceCard, ProjectCard
│   ├── TerminalView/
│   └── App.jsx         → root island, owns the executive/terminal mode switch
├── layouts/BaseLayout.astro
├── pages/index.astro
└── styles/tokens.css, global.css
```

To update content (a new job, a new project, a new skill), edit
`src/data/profileData.js` only — every component reads from there, and
the terminal's commands are generated from the same data automatically.
