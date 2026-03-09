# Design System — Dra. Melissa Tamayo
> Rejuvenescimento Facial e Capilar  
> Versão 1.0 — Extraído do Manual de Identidade Visual

---

## 1. Paleta de Cores

### Cores Primárias

| Token                    | Nome Semântico       | Hex       | Uso                                      |
|--------------------------|----------------------|-----------|------------------------------------------|
| `--color-gold-primary`   | Gold Luxury          | `#C9A84C` | Logo principal, destaques premium        |
| `--color-gold-light`     | Gold Champagne       | `#E0CC89` | Hover states, gradientes, brilho         |
| `--color-gold-dark`      | Gold Deep            | `#A07832` | Sombras de dourado, texto sobre claro    |

### Cores Neutras de Fundo

| Token                     | Nome Semântico       | Hex       | Uso                                      |
|---------------------------|----------------------|-----------|------------------------------------------|
| `--color-cream-base`      | Cream Off-White      | `#F5F0EA` | Background principal (off-white quente)  |
| `--color-cream-light`     | Cream Pure           | `#FAF7F4` | Cards, superfícies elevadas              |
| `--color-cream-dark`      | Cream Warm           | `#EDE6DC` | Divisores, backgrounds secundários      |
| `--color-charcoal`        | Charcoal Dark        | `#3A3A3A` | Background escuro, versão dark do logo   |

### Cores da Identidade (Variações de Marca)

| Token                      | Nome Semântico       | Hex       | Uso                                      |
|----------------------------|----------------------|-----------|------------------------------------------|
| `--color-blush-primary`    | Blush Rose           | `#E8B4A8` | Variação rosa do logo, acentos suaves    |
| `--color-blush-light`      | Blush Pale           | `#F2D4CC` | Backgrounds de cartões, banners suaves   |
| `--color-blush-muted`      | Blush Powder         | `#F7E8E4` | Backgrounds de seções, hover suave       |
| `--color-sage-primary`     | Sage Green           | `#7A9E7E` | Variação verde do logo, saúde/natureza   |
| `--color-sage-light`       | Sage Soft            | `#A8C4A8` | Ícones secundários, badges               |
| `--color-sage-muted`       | Sage Pale            | `#D4E4D4` | Backgrounds de seções natureza           |
| `--color-olive-backdrop`   | Olive Backdrop       | `#7A8A6A` | Background mockup da capa               |

### Cores de Texto

| Token                    | Nome Semântico       | Hex       | Uso                                      |
|--------------------------|----------------------|-----------|------------------------------------------|
| `--color-text-primary`   | Text Dark            | `#2C2C2C` | Corpo de texto principal                 |
| `--color-text-secondary` | Text Mid             | `#6B6B6B` | Subtítulos, labels, metadados            |
| `--color-text-muted`     | Text Muted           | `#9E9E9E` | Placeholders, texto desabilitado         |
| `--color-text-inverse`   | Text Light           | `#FFFFFF` | Texto sobre fundos escuros/coloridos     |
| `--color-text-gold`      | Text Gold            | `#C9A84C` | Taglines, destaques de marca             |

### Variáveis CSS (Tokens Prontos para Uso)

```css
:root {
  /* Gold */
  --color-gold-primary: #C9A84C;
  --color-gold-light:   #E0CC89;
  --color-gold-dark:    #A07832;

  /* Cream / Neutrals */
  --color-cream-base:   #F5F0EA;
  --color-cream-light:  #FAF7F4;
  --color-cream-dark:   #EDE6DC;
  --color-charcoal:     #3A3A3A;

  /* Blush */
  --color-blush-primary: #E8B4A8;
  --color-blush-light:   #F2D4CC;
  --color-blush-muted:   #F7E8E4;

  /* Sage */
  --color-sage-primary: #7A9E7E;
  --color-sage-light:   #A8C4A8;
  --color-sage-muted:   #D4E4D4;

  /* Olive */
  --color-olive-backdrop: #7A8A6A;

  /* Text */
  --color-text-primary:   #2C2C2C;
  --color-text-secondary: #6B6B6B;
  --color-text-muted:     #9E9E9E;
  --color-text-inverse:   #FFFFFF;
  --color-text-gold:      #C9A84C;
}
```

---

## 2. Tipografia

### Família Tipográfica Principal

**Coves Bold** — fonte geométrica sem serifa com traços abertos e elegant  
→ Usada em todo o sistema: logo, títulos, taglines, corpo de texto

> **Fallback stack:**  
> `'Coves', 'Futura', 'Century Gothic', 'Gill Sans', sans-serif`

---

### Escala Tipográfica

| Token                  | Tamanho  | Peso       | Letter-spacing | Uso                                      |
|------------------------|----------|------------|----------------|------------------------------------------|
| `--type-display`       | 48px     | 700 (Bold) | 0.08em         | Nome principal do logo (hero)            |
| `--type-heading-xl`    | 36px     | 700 (Bold) | 0.06em         | Títulos de seção grandes                 |
| `--type-heading-lg`    | 28px     | 700 (Bold) | 0.06em         | Subtítulos primários                     |
| `--type-heading-md`    | 22px     | 700 (Bold) | 0.05em         | Títulos de cards, seções                 |
| `--type-heading-sm`    | 18px     | 700 (Bold) | 0.04em         | Rótulos de destaque, cabeçalhos          |
| `--type-tagline`       | 12px     | 400        | 0.16em         | "REJUVENESCIMENTO FACIAL E CAPILAR"      |
| `--type-body`          | 16px     | 400        | 0.02em         | Corpo de texto geral                     |
| `--type-body-sm`       | 14px     | 400        | 0.02em         | Texto auxiliar, descrições               |
| `--type-label`         | 11px     | 700 (Bold) | 0.14em         | Labels, badges, categorias               |
| `--type-stamp-text`    | 9px      | 400        | 0.12em         | Texto circular da submarca (stamp)       |

> **Nota:** Todo o sistema usa **caixa alta (uppercase)** para taglines e labels — `text-transform: uppercase` é fundamental para manter a identidade.

### Variáveis CSS — Tipografia

```css
:root {
  /* Font family */
  --font-primary: 'Coves', 'Futura', 'Century Gothic', 'Gill Sans', sans-serif;

  /* Sizes */
  --type-display:    48px;
  --type-heading-xl: 36px;
  --type-heading-lg: 28px;
  --type-heading-md: 22px;
  --type-heading-sm: 18px;
  --type-tagline:    12px;
  --type-body:       16px;
  --type-body-sm:    14px;
  --type-label:      11px;
  --type-stamp-text:  9px;

  /* Letter spacing */
  --tracking-tight:   0.02em;
  --tracking-normal:  0.05em;
  --tracking-wide:    0.10em;
  --tracking-widest:  0.16em;

  /* Line heights */
  --leading-tight:  1.1;
  --leading-normal: 1.4;
  --leading-loose:  1.7;
}
```

---

## 3. Espaçamento — Grid de 8px

Todos os espaçamentos derivam de múltiplos de **8px**.

| Token            | Valor  | Uso principal                                  |
|------------------|--------|------------------------------------------------|
| `--space-1`      | 4px    | Espaço mínimo, gap entre ícone e texto         |
| `--space-2`      | 8px    | Padding interno pequeno, gap entre labels      |
| `--space-3`      | 12px   | Padding de badges, gap interno de componentes  |
| `--space-4`      | 16px   | Padding padrão de cards, gap de seções         |
| `--space-5`      | 24px   | Padding de botões, espaçamento de listas       |
| `--space-6`      | 32px   | Padding de seções, gap entre componentes       |
| `--space-7`      | 40px   | Margens de seção                               |
| `--space-8`      | 48px   | Gap entre seções grandes                       |
| `--space-10`     | 64px   | Padding hero, separação de blocos              |
| `--space-12`     | 80px   | Espaçamento de layout macro                    |
| `--space-16`     | 96px   | Margens de página                              |

### Variáveis CSS — Espaçamento

```css
:root {
  --space-1:  4px;
  --space-2:  8px;
  --space-3:  12px;
  --space-4:  16px;
  --space-5:  24px;
  --space-6:  32px;
  --space-7:  40px;
  --space-8:  48px;
  --space-10: 64px;
  --space-12: 80px;
  --space-16: 96px;
}
```

### Grid de Layout

```css
/* Grid principal — 12 colunas */
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--space-8);
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--space-6);
}

/* Breakpoints */
/* Mobile:  < 768px  → 4 colunas, padding 16px */
/* Tablet:  768–1024px → 8 colunas, padding 32px */
/* Desktop: > 1024px  → 12 colunas, padding 48px */
```

---

## 4. Bordas e Raios

```css
:root {
  --radius-none:   0px;
  --radius-sm:     4px;
  --radius-md:     8px;
  --radius-lg:     16px;
  --radius-xl:     24px;
  --radius-full:   9999px;  /* círculos, pills */
  --radius-circle: 50%;     /* stamp/submarca circular */

  --border-thin:   1px solid;
  --border-base:   1.5px solid;
  --border-thick:  2px solid;
}
```

---

## 5. Sombras e Elevação

```css
:root {
  /* Sombra suave — cards em cream */
  --shadow-sm:  0 1px 4px rgba(0, 0, 0, 0.06);
  
  /* Sombra padrão — cards elevados */
  --shadow-md:  0 4px 16px rgba(0, 0, 0, 0.08);
  
  /* Sombra profunda — modais, dropdowns */
  --shadow-lg:  0 8px 32px rgba(0, 0, 0, 0.12);

  /* Sombra dourada — elementos premium em hover */
  --shadow-gold: 0 4px 20px rgba(201, 168, 76, 0.25);
}
```

---

## 6. Componentes

### 6.1 Botão Primário (Gold)

```css
.btn-primary {
  font-family: var(--font-primary);
  font-size: var(--type-label);
  font-weight: 700;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;

  background: linear-gradient(
    135deg,
    var(--color-gold-light) 0%,
    var(--color-gold-primary) 50%,
    var(--color-gold-dark) 100%
  );
  color: var(--color-cream-light);
  
  padding: var(--space-3) var(--space-6);
  border: none;
  border-radius: var(--radius-none);  /* estilo reto, sem arredondamento */
  cursor: pointer;

  transition: all 0.3s ease;
}

.btn-primary:hover {
  box-shadow: var(--shadow-gold);
  filter: brightness(1.08);
}
```

### 6.2 Botão Secundário (Outline)

```css
.btn-secondary {
  font-family: var(--font-primary);
  font-size: var(--type-label);
  font-weight: 700;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;

  background: transparent;
  color: var(--color-gold-primary);

  padding: var(--space-3) var(--space-6);
  border: var(--border-base) var(--color-gold-primary);
  border-radius: var(--radius-none);
  cursor: pointer;

  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: var(--color-gold-primary);
  color: var(--color-cream-light);
}
```

### 6.3 Botão Ghost (Variação Blush / Sage)

```css
/* Use a classe modificadora para cor: .btn-ghost--blush ou .btn-ghost--sage */
.btn-ghost {
  font-family: var(--font-primary);
  font-size: var(--type-label);
  font-weight: 700;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;

  background: transparent;
  padding: var(--space-2) var(--space-5);
  border: var(--border-thin) currentColor;
  border-radius: var(--radius-none);
  cursor: pointer;
  transition: all 0.25s ease;
}

.btn-ghost--blush {
  color: var(--color-blush-primary);
}
.btn-ghost--blush:hover {
  background: var(--color-blush-muted);
}

.btn-ghost--sage {
  color: var(--color-sage-primary);
}
.btn-ghost--sage:hover {
  background: var(--color-sage-muted);
}
```

---

### 6.4 Card de Serviço

```css
.card {
  background: var(--color-cream-light);
  border: var(--border-thin) var(--color-cream-dark);
  border-radius: var(--radius-md);
  padding: var(--space-6);
  box-shadow: var(--shadow-sm);
  transition: box-shadow 0.3s ease;
}

.card:hover {
  box-shadow: var(--shadow-md);
}

.card__eyebrow {
  font-family: var(--font-primary);
  font-size: var(--type-label);
  font-weight: 700;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold-primary);
  margin-bottom: var(--space-2);
}

.card__title {
  font-family: var(--font-primary);
  font-size: var(--type-heading-md);
  font-weight: 700;
  letter-spacing: var(--tracking-normal);
  text-transform: uppercase;
  color: var(--color-text-primary);
  margin-bottom: var(--space-3);
}

.card__body {
  font-family: var(--font-primary);
  font-size: var(--type-body-sm);
  color: var(--color-text-secondary);
  line-height: var(--leading-loose);
}
```

---

### 6.5 Input / Campo de Formulário

```css
.input {
  font-family: var(--font-primary);
  font-size: var(--type-body-sm);
  letter-spacing: var(--tracking-normal);
  color: var(--color-text-primary);

  width: 100%;
  padding: var(--space-3) var(--space-4);
  
  background: var(--color-cream-light);
  border: var(--border-thin) var(--color-cream-dark);
  border-radius: var(--radius-none);  /* sem arredondamento — estilo editorial */
  outline: none;

  transition: border-color 0.2s ease;
}

.input::placeholder {
  color: var(--color-text-muted);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  font-size: var(--type-label);
}

.input:focus {
  border-color: var(--color-gold-primary);
  box-shadow: 0 0 0 2px rgba(201, 168, 76, 0.15);
}

.input-label {
  font-family: var(--font-primary);
  font-size: var(--type-label);
  font-weight: 700;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-text-secondary);
  display: block;
  margin-bottom: var(--space-2);
}
```

---

### 6.6 Stamp / Submarca Circular

```css
.stamp {
  position: relative;
  width: 140px;
  height: 140px;
  border-radius: var(--radius-circle);
  border: var(--border-thin) currentColor;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Texto circular via SVG ou CSS arc */
.stamp__text {
  font-family: var(--font-primary);
  font-size: var(--type-stamp-text);
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
}

/* Variações de cor da stamp */
.stamp--blush   { color: var(--color-blush-primary); }
.stamp--sage    { color: var(--color-sage-primary); }
.stamp--gold    { color: var(--color-gold-primary); }
.stamp--white   { color: var(--color-text-inverse); }
.stamp--black   { color: var(--color-text-primary); }
```

---

### 6.7 Tagline / Badge de Especialidade

```css
.tagline {
  font-family: var(--font-primary);
  font-size: var(--type-tagline);
  font-weight: 400;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-text-secondary);
}

.badge {
  display: inline-block;
  font-family: var(--font-primary);
  font-size: var(--type-label);
  font-weight: 700;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-sm);
}

.badge--gold {
  background: var(--color-gold-primary);
  color: var(--color-cream-light);
}
.badge--blush {
  background: var(--color-blush-muted);
  color: var(--color-blush-primary);
}
.badge--sage {
  background: var(--color-sage-muted);
  color: var(--color-sage-primary);
}
```

---

### 6.8 Divider / Separador

```css
.divider {
  border: none;
  border-top: var(--border-thin) var(--color-cream-dark);
  margin: var(--space-6) 0;
}

.divider--gold {
  border-top-color: var(--color-gold-primary);
  opacity: 0.4;
}
```

---

## 7. Logo & Identidade Visual

### Uso Correto do Logo

O logo "MT" é formado por duas letras geométricas estilizadas com traço aberto e fino.

**Versões aprovadas:**

| Versão                  | Fundo Indicado         | Cores do Logo                         |
|-------------------------|------------------------|---------------------------------------|
| Gold Metálico (principal)| Cream / Branco         | Gradiente dourado (#C9A84C → #E0CC89) |
| Gold Light               | Cream puro             | Gold claro chapado                    |
| Blush                    | Branco / Cream         | `--color-blush-primary`               |
| Sage                     | Branco / Cream         | `--color-sage-primary`                |
| Branco                   | Blush background       | `#FFFFFF`                             |
| Preto                    | Branco / Blush claro   | `#2C2C2C`                             |

**Zona de exclusão do logo:** `padding: var(--space-6)` mínimo ao redor do logo em todos os lados.

---

## 8. Gradiente Dourado (Metálico)

```css
/* Gradiente dourado — efeito metálico para logo e elementos premium */
.gradient-gold {
  background: linear-gradient(
    135deg,
    #F0DFA0 0%,
    #C9A84C 25%,
    #E8D080 50%,
    #A07832 75%,
    #D4B860 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Versão para ícones SVG / bordas */
.border-gold-gradient {
  border-image: linear-gradient(
    135deg,
    #F0DFA0,
    #C9A84C,
    #A07832
  ) 1;
}
```

---

## 9. Modos de Cor (Temas)

### Tema Padrão — Cream & Gold

```css
[data-theme="default"] {
  --surface-bg:       var(--color-cream-base);
  --surface-card:     var(--color-cream-light);
  --surface-divider:  var(--color-cream-dark);
  --accent-primary:   var(--color-gold-primary);
  --text-main:        var(--color-text-primary);
  --text-sub:         var(--color-text-secondary);
}
```

### Tema Blush — Rosa Suave

```css
[data-theme="blush"] {
  --surface-bg:       var(--color-blush-muted);
  --surface-card:     #FFFFFF;
  --surface-divider:  var(--color-blush-light);
  --accent-primary:   var(--color-blush-primary);
  --text-main:        var(--color-text-primary);
  --text-sub:         var(--color-blush-primary);
}
```

### Tema Sage — Verde Natural

```css
[data-theme="sage"] {
  --surface-bg:       var(--color-sage-muted);
  --surface-card:     #FFFFFF;
  --surface-divider:  var(--color-sage-light);
  --accent-primary:   var(--color-sage-primary);
  --text-main:        var(--color-text-primary);
  --text-sub:         var(--color-sage-primary);
}
```

### Tema Dark — Charcoal Escuro

```css
[data-theme="dark"] {
  --surface-bg:       var(--color-charcoal);
  --surface-card:     #4A4A4A;
  --surface-divider:  #555555;
  --accent-primary:   var(--color-gold-primary);
  --text-main:        var(--color-text-inverse);
  --text-sub:         #CCCCCC;
}
```

---

## 10. Animações e Transições

```css
:root {
  /* Durations */
  --duration-fast:   150ms;
  --duration-normal: 300ms;
  --duration-slow:   500ms;

  /* Easings */
  --ease-default:  ease;
  --ease-in-out:   cubic-bezier(0.4, 0, 0.2, 1);
  --ease-elegant:  cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Padrão de transição para elementos interativos */
.interactive {
  transition:
    background-color var(--duration-normal) var(--ease-elegant),
    box-shadow       var(--duration-normal) var(--ease-elegant),
    color            var(--duration-normal) var(--ease-elegant),
    border-color     var(--duration-normal) var(--ease-elegant);
}
```

---

## 11. Marca D'Água

```css
/* Marca d'água — submarca circular em opacidade baixa */
.watermark {
  opacity: 0.12;
  pointer-events: none;
  user-select: none;
}

.watermark--light { color: #CCCCCC; }  /* sobre fundo escuro */
.watermark--dark  { color: #888888; }  /* sobre fundo claro */
```

---

## 12. Resumo para IA — Como Usar Este Design System

> Cole este bloco no início de qualquer prompt de geração de UI:

```
Implemente os componentes usando o design system da Dra. Melissa Tamayo.

REGRAS FUNDAMENTAIS:
1. Paleta: cream (#F5F0EA) como base, dourado (#C9A84C) como acento principal
2. Tipografia: font-family 'Coves', 'Futura', 'Century Gothic', sans-serif — sempre uppercase para títulos e labels
3. Letter-spacing generoso: mínimo 0.08em em títulos, 0.14–0.16em em labels/taglines
4. Bordas: sem border-radius nos botões e inputs (estilo editorial reto)
5. Grid: múltiplos de 8px para todos os espaçamentos
6. Tom visual: luxo soft, feminino e sofisticado — nunca clínico ou frio
7. Variações aceitas: gold (primária), blush rose, sage green, dark charcoal

HIERARQUIA DE CORES:
- Background → cream (#F5F0EA)
- Superfícies/cards → cream claro (#FAF7F4)
- Acento/CTAs → gold (#C9A84C)
- Texto → charcoal (#2C2C2C)
- Detalhe/eyebrow → gold ou sage

PROIBIDO:
- Cores saturadas (azul vivo, vermelho, laranja)
- Font-weight abaixo de 400
- Border-radius > 8px em elementos principais
- Sombras escuras pesadas
```
