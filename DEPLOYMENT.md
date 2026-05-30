# Portfolio Website Deployment Guide

This guide compares **Vercel** and **Render** for hosting your personal portfolio website and provides step-by-step instructions to take the site live.

---

## 🏆 Recommendation: Vercel vs. Render

For a static React + TypeScript + Vite website, **Vercel is the clear winner**. 

| Feature | Vercel (Recommended) | Render (Free Tier) |
| :--- | :--- | :--- |
| **Aesthetic / Speed** | Extremely fast. Statically cached on a global Edge CDN. | Slower. Runs on a virtualized container instance. |
| **Cold Starts** | **0ms (Instant)**. Always online. | **50+ seconds delay** if the site hasn't been visited in 15 minutes. |
| **Ease of Setup** | 1-click import. Auto-detects Vite and builds it instantly. | Requires configuring build commands (`npm run build`) and publish paths manually. |
| **Previews** | Automatic branch previews on every Git commit. | Available, but slower to build. |
| **Pricing** | Free Tier (generous bandwidth & domain support). | Free Tier (inactive spin-downs apply). |

> [!TIP]
> **Summary**: Use **Vercel** to host this portfolio frontend to ensure visitors get instant page load times (no cold starts). Keep **Render** (or AWS) for your backend APIs (like `Chatnalyxer` FastAPI backend) where containerized running servers and database integrations are required.

---

## 🚀 Step-by-Step Vercel Deployment

Deploying your portfolio to Vercel is free, secure, and takes less than 2 minutes.

### Step 1: Push Code to GitHub
Ensure all your local changes are committed and pushed to your GitHub repository:
```bash
git add .
git commit -m "feat: complete premium portfolio with email CTA and photo"
git branch -M main
git remote add origin https://github.com/Rahul-pamula/portfolio.git  # Replace with your repo link
git push -u origin main
```

### Step 2: Connect to Vercel
1. Go to [Vercel](https://vercel.com) and sign up/login using your **GitHub account**.
2. Click the **"Add New..."** button on your dashboard and select **"Project"**.
3. Select your `portfolio` repository from the list and click **"Import"**.

### Step 3: Configure Settings (Auto-detected)
Vercel will automatically detect that you are using **Vite**. The configuration will look like this:
* **Framework Preset**: `Vite`
* **Build Command**: `npm run build` (or `vite build`)
* **Output Directory**: `dist`

Click **"Deploy"**.

### Step 4: Add Custom Domain (Optional)
Once deployed, Vercel gives you a free subdomain (e.g. `rahul-pamula.vercel.app`). To bind your own custom domain:
1. Go to your project settings in Vercel -> **Domains**.
2. Type your domain (e.g., `rahulpamula.com`) and click **Add**.
3. Configure the `CNAME` or `A` records in your domain registrar (GoDaddy, Namecheap, etc.) as prompted by Vercel.

---

## 🛠️ Local Verification & Development
To make changes locally before pushing:
```bash
# Install dependencies
npm install

# Run the local development server
npm run dev
```
The site will run locally at [http://localhost:5173/](http://localhost:5173/).
