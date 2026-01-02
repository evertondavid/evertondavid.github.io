# Portfolio - Everton David

## 📁 Estrutura do Projeto

```
├── css/
│   ├── reset.css          # Reset global e configurações base
│   ├── variables.css      # Variáveis CSS (cores, espaçamentos, fontes)
│   ├── typography.css     # Estilos de tipografia
│   ├── layout.css         # Layout principal e grid
│   ├── components.css     # Componentes reutilizáveis
│   └── responsive.css     # Media queries e responsividade
├── js/
│   ├── language.js        # Lógica de internacionalização
│   └── translations.json  # Arquivo de traduções (PT/EN)
├── img/                   # Imagens e assets
├── index.html            # Página principal
└── README.md             # Documentação
```

## 🎯 Melhorias Implementadas

### CSS Modular
- **Separação por responsabilidade**: Cada arquivo CSS tem uma função específica
- **Variáveis CSS**: Cores, espaçamentos e transições centralizados
- **Redução de duplicação**: Removido código CSS redundante
- **Performance**: Carregamento otimizado com camadas organizadas

### JavaScript Otimizado
- **Cache de elementos DOM**: Evita queries repetitivas
- **Traduções em JSON**: Separação de dados e lógica
- **Código assíncrono**: Carregamento eficiente de traduções
- **Melhor organização**: Funções com responsabilidades únicas

### HTML Limpo
- **Ordem lógica**: CSS no head, scripts no fim do body
- **Comentários organizados**: Seções bem identificadas
- **Remoção de duplicações**: Link CSS do Ionicons movido para head

## 🚀 Como Usar

1. Clone o repositório
2. Abra `index.html` em um navegador
3. O site carrega automaticamente o idioma salvo (ou inglês por padrão)

## 📝 Convenções

- **CSS**: Mobile-first approach
- **JS**: ES6+ com async/await
- **Naming**: BEM-inspired para componentes
- **Commits**: Conventional Commits

## 🔧 Manutenção

- **Adicionar novo idioma**: Edite `js/translations.json`
- **Alterar cores**: Modifique `css/variables.css`
- **Ajustar layout**: Veja `css/layout.css`
- **Novos componentes**: Adicione em `css/components.css`
