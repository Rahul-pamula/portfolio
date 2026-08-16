# Rahul Pamula — Developer Portfolio

A premium, macOS-inspired developer portfolio built with React + TypeScript. Features a cinematic background, floating translucent panels, live GitHub data, and full dark/light theme switching.

![Portfolio Preview](public/background.png)

---

## ✨ Features

- **macOS Workspace Design** — top menu bar, floating dock, and three-panel layout
- **Live GitHub Integration** — contribution heatmap, activity feed, and stats auto-fetched at build time
- **Dark / Light Theme** — smooth toggle via Edit menu with full UI theming
- **Card Hover Effect** — cards dissolve to reveal the cinematic background image on hover
- **Responsive Layout** — adapts gracefully from mobile to large desktop
- **Zero Runtime API Calls** — GitHub data is pre-fetched during build and shipped as static JSON

---

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Styling | Tailwind CSS v4 + Vanilla CSS |
| Build | Vite 8 |
| Icons | Lucide React |
| Data Fetching | Node.js + Cheerio (build-time script) |
| Deployment | GitHub Pages / Vercel / Netlify |

---

## 🗂️ Project Structure

```
portfolio/
├── public/
│   └── background.png          # Cinematic background image
├── scripts/
│   └── fetch-github-data.ts    # Build-time GitHub data fetcher
├── src/
│   ├── components/
│   │   ├── about/              # Engineering identity / skills section
│   │   ├── activity/           # Contribution heatmap, stats, live feed
│   │   ├── mac/                # MenuBar, Dock, MenuDropdown
│   │   ├── opensource/         # Open source projects section
│   │   ├── profile/            # Sidebar with profile info
│   │   ├── projects/           # Featured projects + project cards
│   │   └── support/            # Support / contact card
│   ├── context/
│   │   └── ThemeProvider.tsx   # Dark/light theme context
│   ├── data/
│   │   ├── generated/          # Auto-generated at build time (gitignored)
│   │   ├── profile.ts          # Personal info, links, social
│   │   ├── projects.ts         # Featured & more projects
│   │   └── opensource.ts       # Open source contributions
│   ├── layout/
│   │   └── MacLayout.tsx       # Root macOS shell layout
│   ├── App.tsx                 # Main 3-panel grid
│   ├── index.css               # Global styles + theme system
│   └── main.tsx                # React entry point
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start dev server (auto-fetches GitHub data)
npm run dev

# Build for production
npm run build
```

> **Note:** GitHub data is fetched at build time via the `scripts/fetch-github-data.ts` script. No API token is required for public data, but you can optionally set `GITHUB_TOKEN` in a `.env` file to avoid rate limiting.

---

## 🌐 Deployment

### Vercel / Netlify
1. Connect your GitHub repo
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy — it just works!

### GitHub Pages
```bash
npm run build
# Then deploy the dist/ folder to your gh-pages branch
```

---

## 🎨 Customization

Update your personal info in `src/data/`:

| File | What to update |
|---|---|
| `profile.ts` | Name, bio, links (GitHub, LinkedIn, email, resume) |
| `projects.ts` | Featured projects and more projects list |
| `opensource.ts` | Open source contributions |

Replace `public/background.png` with your own cinematic photograph.

---

## 📄 License

MIT — feel free to fork and customize for your own portfolio.

---

Built with ❤️ by [Rahul Pamula](https://github.com/Rahul-pamula)
