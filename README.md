# Site Dra. Melissa Tamayo

> Desenvolvido por [KV Group](https://www.kvgroupbr.com.br/)

Site institucional da **Dra. Melissa Tamayo**, médica referência em Blefaroplastia e Rejuvenescimento do Olhar de Alto Padrão em Manaus (AM) e São Paulo (SP).

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Uso |
|---|---|
| **React 18** | Framework principal (SPA) |
| **TypeScript** | Tipagem estática |
| **Vite** | Bundler e dev server |
| **Tailwind CSS v3** | Estilização utility-first |
| **Google Fonts (Raleway)** | Tipografia do navbar |

---

## 📁 Estrutura do Projeto

```
├── public/
│   └── images/
│       ├── photos/          # Fotos da Dra. Melissa e clínica
│       ├── procedimentos/   # Imagens dos procedimentos
│       └── icons/           # Ícones e logo
├── components/
│   ├── Header.tsx           # Navbar com roteamento hash
│   ├── Hero.tsx             # Seção principal (banner)
│   ├── InfoCards.tsx        # Cards de procedimentos em destaque
│   ├── AboutSection.tsx     # Apresentação da Dra. Melissa
│   ├── PatientJourney.tsx   # Seção de Consultas
│   ├── ServicesHero.tsx     # Dobra "Procedimentos Especializados"
│   ├── ServicesPage.tsx     # Página completa de procedimentos
│   ├── BeforeAfterGallery.tsx # Galeria Antes & Depois interativa
│   ├── ContactModal.tsx     # Modal de agendamento
│   ├── Footer.tsx           # Rodapé
│   └── FadeIn.tsx           # Componente de animação scroll
├── App.tsx                  # Roteamento hash-based
└── lib/
    └── utm.ts               # Captura e persistência de UTM params
```

---

## 🔀 Roteamento

O site usa **roteamento baseado em hash** (`window.location.hash`), sem necessidade de servidor:

| Hash | Página carregada |
|---|---|
| `/` ou `/#inicio` | Home |
| `/#procedimentos` | Página de Procedimentos |
| `/#procedimentos/blefaroplastia` | Procedimento específico (scroll) |

---

## ✨ Principais Funcionalidades

- **Galeria Antes & Depois** com slider interativo drag-and-drop (mouse e touch)
- **Animações de entrada** via `IntersectionObserver` (componente `FadeIn`)
- **Modal de contato** com captura automática de UTM parameters
- **Cards de procedimentos** com hover dourado e imagens locais
- **Design responsivo** otimizado para mobile e desktop
- **Navbar flutuante** arredondada com blur e links hash

---

## ▶️ Como Rodar Localmente

**Pré-requisitos:** Node.js 18+

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

O site estará disponível em `http://localhost:5173`

---

## 🎨 Paleta de Cores

| Cor | Hex | Uso |
|---|---|---|
| Dourado principal | `#C9A84C` | CTAs, destaques, acentos |
| Dourado claro | `#E0CC89` | Divisores, bordas sutis |
| Escuro | `#2C2C2C` | Textos principais |
| Cinza médio | `#6B6B6B` | Textos secundários |
| Fundo creme | `#FAF7F4` | Seções alternadas |

---

## 📸 Imagens

- Fotos da clínica e da médica: `public/images/photos/`
- Fotos dos procedimentos: `public/images/procedimentos/`
- Formato: `.webp` para performance otimizada

---

## 🏢 Desenvolvido por

**[KV Group](https://www.kvgroupbr.com.br/)** — Agência especializada em presença digital e desenvolvimento web.
