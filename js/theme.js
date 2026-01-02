// Theme Switcher - Sistema de tema claro/escuro
// Gerencia a preferência do usuário e aplica o tema corretamente

class ThemeSwitcher {
  constructor() {
    this.themeButton = document.getElementById('theme-toggle');
    this.currentTheme = this.getStoredTheme() || 'dark'; // Default: dark
    this.init();
  }

  init() {
    // Aplica o tema inicial sem animação
    this.applyTheme(this.currentTheme, false);

    // Event listener para o botão
    this.themeButton.addEventListener('click', () => this.toggleTheme());

    // Listener para mudanças na preferência do sistema (opcional)
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!this.getStoredTheme()) {
        this.applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

  toggleTheme() {
    const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';

    // Adiciona animação ao botão
    this.themeButton.classList.add('rotating');
    setTimeout(() => {
      this.themeButton.classList.remove('rotating');
    }, 500);

    this.applyTheme(newTheme, true);
  }

  applyTheme(theme, animate = true) {
    this.currentTheme = theme;

    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }

    // Salva a preferência
    localStorage.setItem('theme', theme);

    // Feedback visual suave
    if (animate) {
      document.body.style.transition = 'background-color 0.3s ease';
    }
  }

  getStoredTheme() {
    return localStorage.getItem('theme');
  }
}

// Inicializa o theme switcher quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  new ThemeSwitcher();
});

// Previne flash de tema incorreto (FOUC - Flash of Unstyled Content)
// Aplica tema imediatamente antes do DOMContentLoaded
(function () {
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  }
})();
