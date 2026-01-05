## Gym React App

Landing page for a fitness club built with React 18 (Create React App). Animations use Framer Motion, scroll snapping is handled with `react-scroll`, and the contact form uses EmailJS. The project is deployed as a static bundle (e.g., Vercel).

### Tech stack
- React 18 (Create React App)
- Framer Motion (animations)
- react-scroll (smooth anchor navigation)
- number-counter (animated stats)
- EmailJS browser SDK (Join form)
- Plain CSS modules per component

### Features
- Hero section with animated counters, heart-rate/calorie callouts, and CTA buttons.
- Sticky header with responsive mobile menu (hamburger on narrow viewports).
- Program, reasons, and pricing cards driven by data files in `src/data`.
- Testimonials carousel with animated transitions.
- Join form wired to EmailJS for lead capture.
- Footer with social links and logo.

### Project structure
- `src/App.js` wires all sections in order.
- `src/components/**` contains section components with matching CSS files.
- `src/data/**` holds content and inline SVGs for programs, plans, and testimonials.
- `src/assets/**` holds images/icons used across the site.

### Getting started
1) Install: `npm install`
2) Development server: `npm start` (http://localhost:3000)
3) Production build: `npm run build` (outputs to `build/`)
4) Tests (CRA defaults): `npm test`

### EmailJS configuration
- Update the service ID, template ID, and public key in `src/components/join/Join.jsx` to your EmailJS account values.
- You can move these values into environment variables (`REACT_APP_EMAILJS_SERVICE_ID`, etc.) if you prefer not to hardcode them.

### Available scripts
- `npm start` — run the dev server with hot reload.
- `npm run build` — create an optimized production bundle.
- `npm test` — run CRA test runner.
- `npm run eject` — eject CRA (irreversible).

### Design source
Inspired by “React Responsive Gym Website Tutorial Using ReactJs” on YouTube.
