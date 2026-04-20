# Guia de Animações do Site

Este documento descreve como as animações do site foram implementadas para que possam ser replicadas em outros projetos.

## 1. Animação de Scroll (Fade In)

A principal animação do site é o efeito de "aparecer" (fade in) quando o elemento entra na tela. Isso é gerenciado por um componente reutilizável chamado `FadeIn`.

### Código do Componente (`components/FadeIn.tsx`)

Este componente utiliza a API nativa `IntersectionObserver` para detectar quando o elemento está visível.

```tsx
import React, { useEffect, useRef, useState } from 'react';

interface FadeInProps {
    children: React.ReactNode;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    className?: string;
}

const FadeIn: React.FC<FadeInProps> = ({
    children,
    delay = 0,
    direction = 'up',
    className = ''
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            });
        }, { threshold: 0.1 });

        const currentRef = domRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    const getTransform = () => {
        if (!isVisible) {
            switch (direction) {
                case 'up': return 'translateY(40px)';
                case 'down': return 'translateY(-40px)';
                case 'left': return 'translateX(40px)';
                case 'right': return 'translateX(-40px)';
                default: return 'none';
            }
        }
        return 'translate(0, 0)';
    };

    return (
        <div
            ref={domRef}
            className={className}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: getTransform(),
                transition: \`opacity 1200ms cubic-bezier(0.16, 1, 0.3, 1) \${delay}ms, transform 1200ms cubic-bezier(0.16, 1, 0.3, 1) \${delay}ms\`,
            }}
        >
            {children}
        </div>
    );
};

export default FadeIn;
```

### Como Usar

Envolva qualquer conteúdo que você deseja animar com o componente `<FadeIn>`.

```tsx
// Exemplo básico (sobe de baixo para cima)
<FadeIn>
  <h1>Seu Título</h1>
</FadeIn>

// Com delay e direção específica
<FadeIn delay={200} direction="left">
  <p>Texto vindo da esquerda</p>
</FadeIn>
```

---

## 2. Efeitos de Hover (Interações)

As interações de mouse utilizam classes utilitárias do Tailwind CSS, principalmente `transition`, `duration` e `group-hover`.

### Botão com Seta que Aparece

No Hero, o botão "Agende sua Consulta" revela uma seta ao passar o mouse.

**Técnica:**
1.  Classe `group` no contêiner pai (botão).
2.  Classe `w-0 opacity-0` (invisível) no ícone por padrão.
3.  Classe `group-hover:w-5 group-hover:opacity-100` para mostrar ao passar o mouse.
4.  Transition suave: `transition-all duration-300`.

```tsx
<button className="group ... hover:gap-2">
  <span>Texto</span>
  <svg className="w-0 opacity-0 group-hover:w-5 group-hover:opacity-100 transition-all duration-300">
    {/* Ícone */}
  </svg>
</button>
```

### Zoom em Imagens

Na lista de serviços, as imagens têm um zoom suave.

**Técnica:**
*   `hover:scale-105`: Aumenta a escala para 105%.
*   `transition-transform`: Anima apenas a propriedade transform.
*   `duration-700`: Duração longa (700ms) para suavidade.

```tsx
<img 
  className="... hover:scale-105 transition-transform duration-700" 
/>
```

---

## 3. Configuração Tailwind (Animações Personalizadas)

O arquivo `tailwind.config.js` contém a definição de uma animação de brilho (`shine`), embora seu uso direto possa variar.

```js
// tailwind.config.js
module.exports = {
    theme: {
        extend: {
            animation: {
                // Define a classe 'animate-shine'
                shine: "shine 3s ease-out infinite",
            },
            keyframes: {
                shine: {
                    "0%": { backgroundPosition: "200% 0" },
                    "25%": { backgroundPosition: "-200% 0" },
                    "100%": { backgroundPosition: "-200% 0" },
                },
            },
        },
    },
}
```

---

## 4. Scroll Suave entre Seções

A navegação suave (Smooth Scroll) ao clicar em links (ex: `#procedimentos`) é gerenciada via JavaScript no componente principal (`App.tsx`) para garantir que funcione bem com o roteamento e posicionamento.

**Trecho da Lógica:**
```tsx
const el = document.getElementById(scrollTarget);
if (el) {
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
```

Isso garante que, ao clicar no menu, a página deslize suavemente até a seção em vez de pular instantaneamente.
