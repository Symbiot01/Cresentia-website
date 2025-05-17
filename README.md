# Crescentia Landing Page

A modern, responsive React landing page for **Crescentia**, an immersive 3D event design platform. Built with separate components for each section, smooth scroll-based animations, and a mobile-friendly navbar that collapses into a hamburger menu.

---

## 🚀 Features

* **Hero Section** with background image, headline, subtext, and primary call-to-action.
* **Features Overview** listing key platform capabilities.
* **Call to Action** section prompting users to join the waitlist.
* **About** section describing the company’s origin and mission.
* **FAQ** section with common questions and answers.
* **Footer** with contact info and quick links.
* **Responsive Navbar** that becomes a hamburger menu on mobile.
* **Scroll Animations**: Sections slide in and fade when scrolled into view (IntersectionObserver).

---

## 📁 Project Structure

```
src/
├── App.js          # Main application component
├── App.css         # Global styles
├── index.js        # React entry point
└── components/     # Reusable UI components
    ├── Navbar.js
    ├── Navbar.css
    ├── Hero.js
    ├── Hero.css
    ├── Features.js
    ├── Features.css
    ├── CTA.js
    ├── CTA.css
    ├── About.js
    ├── About.css
    ├── FAQ.js
    ├── FAQ.css
    ├── Footer.js
    ├── Footer.css
    └── ScrollObserver.js  # Custom hook for scroll-triggered animations
```

---

## 🛠️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/crescentia-landing.git
   cd crescentia-landing
   ```

2. **Install dependencies**

   Using npm:

   ```bash
   npm install
   ```

   Or yarn:

   ```bash
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm start
   ```

   The site will open at `http://localhost:3000/`.

4. **Build for production**

   ```bash
   npm run build
   ```

   The optimized files will be in the `build/` directory.

---

## 🎨 Customization

* Replace `src/assets/hero-bg.jpg` with your own hero background image.
* Update theme colors in `App.css` and individual component CSS files.
* Modify text, links, and content directly in each component file.

---

## 💡 Deployment

You can deploy the production build to any static hosting:

* **Netlify**: drag-and-drop the `build/` folder in the UI.
* **Vercel**: `vercel --prod` (requires Vercel CLI).
* **GitHub Pages**: use [`gh-pages`](https://www.npmjs.com/package/gh-pages).

---

## 🤝 Contributing

1. Fork the repo
2. Create a new branch (`git checkout -b feature/my-feature`)
3. Commit your changes (\`git commit -m "Add feature"
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

*Made with ❤️ by Crescentia Team*
