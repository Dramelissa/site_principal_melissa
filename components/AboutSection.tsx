
import React from 'react';
import FadeIn from './FadeIn';

const AboutSection: React.FC = () => {
  return (
    <section className="relative py-28 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Cabeçalho centralizado acima de tudo */}
        <div className="text-center mb-14">
          <FadeIn direction="none">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#2C2C2C] block mb-4">
              Referência em rejuvenescimento do olhar e facial de alto padrão
            </span>
          </FadeIn>
        </div>

        {/* Grid: imagem + textos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

          {/* Coluna esquerda — Foto P&B */}
          <FadeIn direction="left">
            <div className="relative">
              <div className="relative overflow-hidden rounded-sm shadow-xl">
                <img loading="lazy" decoding="async"
                  src="https://i.ibb.co/zYLpCrT/dd18569d-442c-4bcc-b7da-79bb07edfa4d.png"
                  alt="Dra. Melissa Tamayo"
                  className="w-full h-[500px] md:h-[600px] object-contain object-center bg-[#F5F0EA]"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-[#C9A84C]/30 hidden md:block" />
            </div>
          </FadeIn>

          {/* Coluna direita — Textos */}
          <div className="flex flex-col justify-start">

            {/* Nome */}
            <FadeIn direction="right" delay={100}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-8">
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
                <p className="text-[#2C2C2C] text-xl md:text-2xl font-semibold leading-snug">
                  O tempo passa,
                </p>
                <p className="text-[#6B6B6B] text-xl md:text-2xl font-light leading-snug">
                  e o seu olhar
                </p>
                <p className="text-[#C9A84C] text-xl md:text-2xl font-bold leading-snug">
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
                <p className="text-[#6B6B6B] text-base leading-relaxed max-w-lg">
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
