
import React from 'react';
import FadeIn from './FadeIn';

const AboutSection: React.FC = () => {
  return (
    <section className="relative py-40 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Cabeçalho centralizado acima de tudo */}
        <div className="text-center mb-14">
          <FadeIn direction="none">
            <span className="font-serif italic text-[#656958] text-lg md:text-2xl tracking-wide block mb-4">
              Referência em rejuvenescimento do olhar e facial de alto padrão
            </span>
          </FadeIn>
        </div>

        {/* Grid: imagem + textos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

          {/* Coluna esquerda — Foto P&B */}
          <FadeIn direction="left" className="self-start">
            <div className="relative">
              <div className="relative">
                <img loading="lazy" decoding="async"
                  src="https://i.ibb.co/MkpFFSxp/Chat-GPT-Image-22-de-mai-de-2026-10-37-07.png"
                  alt="Dra. Melissa Tamayo"
                  className="w-full h-[650px] md:h-[800px] object-cover object-top rounded-sm"
                />
              </div>
            </div>
          </FadeIn>

          {/* Coluna direita — Textos */}
          <div className="flex flex-col justify-start pt-10">

            {/* Nome */}
            <FadeIn direction="right" delay={100}>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
                <span className="text-[#2C2C2C]">Dra. Melissa</span>
                <br />
                <span className="text-[#C9A84C]">Tamayo</span>
              </h2>
            </FadeIn>

            {/* Divisor dourado */}
            <FadeIn direction="right" delay={200}>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-16 bg-[#C9A84C]/40" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
              </div>
            </FadeIn>

            {/* Frase de impacto */}
            <FadeIn direction="right" delay={300}>
              <div className="mb-8">
                <p className="text-[#2C2C2C] text-2xl md:text-3xl font-semibold leading-snug">
                  O tempo passa,
                </p>
                <p className="text-[#6B6B6B] text-2xl md:text-3xl font-light leading-snug">
                  e o seu olhar
                </p>
                <p className="text-[#C9A84C] text-2xl md:text-3xl font-bold leading-snug">
                  revela isso.
                </p>
                <p className="text-[#9B9B9B] text-sm mt-3 italic font-light">
                  Adiar não muda, apenas intensifica.
                </p>
              </div>
            </FadeIn>

            {/* Missão */}
            <FadeIn direction="right" delay={400}>
              <div className="border-t border-[#E0CC89]/40 pt-8">
                <p className="text-[#6B6B6B] text-lg leading-relaxed max-w-lg">
                  Nossa missão é realizar sonhos com resultados de{' '}
                  <span className="text-[#2C2C2C] font-semibold">excelência</span>, promovendo{' '}
                  <span className="text-[#2C2C2C] font-semibold">autoestima</span>, felicidade e encantamento aos nossos pacientes.
                </p>
              </div>
            </FadeIn>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
