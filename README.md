# Sniggle 🐌❤️

A highly engaging, friendly, and colorful "neo-brutalist cartoon" landing page for **Sniggle** — a screen-free cellular tracker and communication device designed for kids. It gives parents peace of mind by enabling location tracking and essential communication, without the distractions, blue light, or online risks of a full smartphone.

## Features

- **Interactive Sniggle Simulator**: Test out the mock Sniggle device. Click the navigation keys (`◀` / `▶`) to cycle through status icons (`🐌`, `🔋`, `💬`, `❤️`), and trigger a simulated cellular alarm signal with the SOS Heart button!
- **CSS Vector Map & Safe-Zones**: A custom styled geofence map dashboard displaying safe-zone boundaries and a real-time pulsing radar tracking dot representing the child's locator signal.
- **Interactive Theme Customizer**: Hover over options in the Co-Design Hub to dynamically update the simulator device's shell colors in real-time.
- **Timeline & Searchable WBS Grid**: An interactive progress explorer containing a detailed 38-task Work Breakdown Structure (WBS) with built-in search and category filtering.
- **Build in Public Waitlist**: A fully interactive sign-up page storing submissions locally for mock testing.

---

## Local Development

The project is configured with a lightweight [Vite](https://vitejs.dev/) development structure.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed.

### Setup and Running

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open the localhost URL (usually `http://localhost:5173`) in your web browser.

---

## Deployment to Vercel

Since the project uses a standard Vite static build, you can deploy it to Vercel with zero configuration:

1. Connect your GitHub account to [Vercel](https://vercel.com).
2. Click **New Project** and import the `sniggle-landing` repository.
3. Keep default settings and click **Deploy**.
4. Enjoy your live production site! Continuous deployment is enabled out-of-the-box (any pushes to the `master` branch will trigger a redeploy).
