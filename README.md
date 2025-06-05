# NexaWorks
**Live Demo:** [https://nexaworks.netlify.app](https://nexaworksproject.netlify.app/)

NexaWorks is a modern web landing page for a digital agency, built with Vite, vanilla JavaScript, and Three.js. It features a custom animated background, a responsive design, animated UI elements, and a contact modal with email sending via EmailJS.

## Features

- **Animated 3D Background:** Uses Three.js for interactive and visually appealing starfield and torus animations.
- **Responsive Design:** Works on desktop and mobile devices.
- **Animated UI:** About section and client cards animate into view.
- **Contact Modal:** Users can send messages directly via EmailJS integration.
- **Modern CSS:** Uses custom fonts, gradients, and shadows for a polished look.

## Project Structure

```
index.html
assets/
  img/
public/
src/
  burger-menu.js
  circle.png
  email.js
  main.js
  style.css
  three-animate.js
  three-setup.js
  ui-animations.js
```

## How to Run the Project

1. **Install dependencies:**

   ```sh
   npm install
   ```

2. **Start the development server:**

   ```sh
   npm run dev
   ```

   This will start the Vite development server. Open the URL shown in your terminal (usually [http://localhost:5173](http://localhost:5173)) in your browser.

3. **Build for production:**

   ```sh
   npm run build
   ```

   The production-ready files will be in the `dist/` folder.

## Email Sending

The contact form uses [EmailJS](https://www.emailjs.com/) to send emails directly from the browser. You need to configure your own EmailJS service and template if you want to use this in production.

## Credits

- [Three.js](https://threejs.org/)
- [EmailJS](https://www.emailjs.com/)
- [Vite](https://vitejs.dev/)
- [uiverse.io](https://uiverse.io/Yaseen549/chilly-dragon-64)
- [w3schools](https://www.w3schools.com/howto/howto_css_glowing_text.asp)

---

Made by Eugen Ostafi.
