// DOM Elements Cache - evita múltiplas queries
const elements = {
  welcomeText: document.getElementById('welcome-text'),
  title: document.getElementById('title'),
  descriptions: document.querySelectorAll('.description'),
  btnProjectsSpan: document.querySelector('#btn-projects span'),
  skillsTitle: document.getElementById('skills-section-title'),
  langButtons: document.querySelectorAll('.lang-btn')
};

// Estado da aplicação
let currentLang = localStorage.getItem('preferredLanguage') || 'en';
let translations = {};

// Carrega traduções do arquivo JSON
async function loadTranslations() {
  try {
    const response = await fetch('js/translations.json');
    translations = await response.json();
    translatePage(currentLang);
  } catch (error) {
    console.error('Erro ao carregar traduções:', error);
  }
}

// Atualiza a página com o idioma selecionado
function translatePage(lang) {
  if (!translations[lang]) return;

  currentLang = lang;
  const t = translations[lang];

  // Atualiza textos
  elements.welcomeText.textContent = t.welcome;
  elements.title.textContent = t.about;
  elements.descriptions[0].innerHTML = t.aboutText1;
  elements.descriptions[1].innerHTML = t.aboutText2;
  elements.descriptions[2].innerHTML = t.aboutText3;
  elements.btnProjectsSpan.textContent = t.projects;
  elements.skillsTitle.textContent = t.skills;
  elements.descriptions[3].textContent = t.technologies;

  // Atualiza botões ativos
  updateActiveButton(lang);

  // Salva preferência
  localStorage.setItem('preferredLanguage', lang);
}

// Atualiza o botão ativo
function updateActiveButton(lang) {
  elements.langButtons.forEach(btn => btn.classList.remove('active'));
  document.getElementById(`lang-${lang}`).classList.add('active');
}

// Event listeners
document.getElementById('lang-en').addEventListener('click', () => translatePage('en'));
document.getElementById('lang-pt').addEventListener('click', () => translatePage('pt'));

// Inicializa a aplicação
loadTranslations();