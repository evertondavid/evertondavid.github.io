# Everton David - Personal Portfolio

A modern, responsive personal portfolio website built with vanilla HTML, CSS, and JavaScript. Features a clean design with bilingual support (English/Portuguese) and modular architecture.

![Portfolio Preview](https://img.shields.io/badge/status-live-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 🚀 Live Demo

Visit: [evertondavid.github.io](https://evertondavid.github.io)

---

## 📁 Project Structure

```
evertondavid.github.io/
│
├── index.html                 # Main HTML file
│
├── css/                       # Stylesheets (Modular Architecture)
│   ├── reset.css             # CSS reset and base styles
│   ├── variables.css         # CSS custom properties (colors, spacing, fonts)
│   ├── typography.css        # Text styles and font definitions
│   ├── layout.css            # Page layout and grid system
│   ├── components.css        # Reusable UI components
│   ├── responsive.css        # Media queries and mobile styles
│   └── themes-alternative.css # Alternative color schemes
│
├── js/                       # JavaScript modules
│   ├── language.js          # Internationalization logic
│   └── translations.json    # Translation strings (EN/PT)
│
├── img/                      # Images and assets
│
└── README.md                # Project documentation
```

---

## ✨ Features

### Core Functionality
- **Bilingual Support** - Seamless language switching between English and Portuguese
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX** - GitHub Dark-inspired theme with smooth animations
- **Performance Optimized** - Modular CSS, DOM caching, and async loading

### Technical Highlights
- **Modular CSS Architecture** - Separation of concerns with single-responsibility files
- **CSS Variables** - Centralized theme management for easy customization
- **No Framework Dependencies** - Pure vanilla JavaScript for minimal bundle size
- **LocalStorage Integration** - Persists user language preference
- **Semantic HTML** - Accessibility-focused markup structure

---

## 🎨 Design System

### Color Palette
Built on a GitHub Dark Dimmed + Dracula inspired theme:

- **Primary**: `#50fa7b` (Green)
- **Secondary**: `#bd93f9` (Purple)
- **Accent**: `#ff79c6` (Pink)
- **Cyan**: `#8be9fd` (Links)

### Layout
- **Sidebar Navigation** - Bio, social links, contact info
- **Main Content Area** - About, skills, and technology showcase
- **Skills Grid** - Interactive technology cards with hover effects

---

## 🛠️ Technologies Showcased

### Categories
- **AI & Vibe Coding** - GitHub Copilot, OpenAI, TensorFlow, PyTorch
- **Front-end** - HTML5, CSS3, JavaScript, React, Angular
- **Back-end** - C#, .NET Core, Node.js, Java, Spring Boot
- **Databases** - Azure SQL, PostgreSQL, MySQL
- **DevOps & Cloud** - Linux, Docker, Kubernetes, Terraform, Azure, AWS
- **Tools** - Git, VS Code, Postman, PowerShell
- **Agile Management** - Jira, Confluence, Trello

---

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Basic web server (optional, for local development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/evertondavid/evertondavid.github.io.git
   cd evertondavid.github.io
   ```

2. **Open the project**
   - Simply open `index.html` in your browser, or
   - Use a local server (recommended):
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Node.js
     npx http-server
     ```

3. **Access the site**
   - Direct: `file:///path/to/index.html`
   - Local server: `http://localhost:8000`

---

## 📝 Customization Guide

### Changing Colors
Edit `css/variables.css` to modify the color scheme:
```css
:root {
  --primary-color: #50fa7b;
  --secondary-color: #bd93f9;
  /* ... more variables */
}
```

### Adding a New Language
1. Add translations to `js/translations.json`
2. Update language switcher in `index.html`
3. Add corresponding logic in `js/language.js`

### Modifying Skills
Edit the skills sections in `index.html`:
```html
<div class="skills-box">
  <p class="skills-title">Your Category</p>
  <i class="devicon-technology-icon" title="Technology Name"></i>
</div>
```

---

## 📂 File Responsibilities

| File | Purpose |
|------|---------|
| `reset.css` | Normalize browser styles |
| `variables.css` | Theme configuration and CSS custom properties |
| `typography.css` | Font styles, headings, and text formatting |
| `layout.css` | Page structure, grid, and container layouts |
| `components.css` | Buttons, cards, icons, and reusable UI elements |
| `responsive.css` | Mobile breakpoints and adaptive layouts |
| `language.js` | DOM manipulation for language switching |
| `translations.json` | Internationalization data store |

---

## 🔧 Development Conventions

- **CSS Methodology**: BEM-inspired naming conventions
- **JavaScript**: ES6+ with async/await patterns
- **Mobile-First**: Responsive design approach
- **Accessibility**: Semantic HTML and ARIA labels
- **Version Control**: Conventional Commits

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Everton David**

- LinkedIn: [linkedin.com/in/evertondavid](https://linkedin.com/in/evertondavid)
- GitHub: [github.com/evertondavid](https://github.com/evertondavid)
- Email: evertondavid@outlook.com

---

## 🙏 Acknowledgments

- Design inspiration: GitHub Dark Dimmed, Dracula Theme
- Icons: [Devicon](https://devicons.github.io/devicon/), [Ionicons](https://ionic.io/ionicons)
- Fonts: [Google Fonts - Roboto](https://fonts.google.com/specimen/Roboto)

---

**Last Updated**: January 2026
