
import React from 'react';
import FadeIn from './FadeIn';

const AboutSection: React.FC = () => {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Left Column — Photo */}
          <FadeIn direction="left">
            <div className="relative">
              <div className="relative overflow-hidden rounded-sm shadow-xl">
                <img
                  src="/images/dra.melissa.webp"
                  alt="Dra. Melissa Tamayo"
                  className="w-full h-[500px] md:h-[600px] object-cover"
                />
              </div>
              {/* Decorative gold accent line */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-[#C9A84C]/30 hidden md:block"></div>
            </div>
          </FadeIn>

          {/* Right Column — Content */}
          <div className="flex flex-col justify-center">
            <FadeIn direction="right" delay={100}>
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6B6B6B] mb-4 block">
                Autoridade Médica
              </span>
            </FadeIn>

            <FadeIn direction="right" delay={200}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-8">
                <span className="text-[#2C2C2C]">Dra. Melissa</span>
                <br />
                <span className="text-[#C9A84C]">Tamayo</span>
              </h2>
            </FadeIn>

            <FadeIn direction="right" delay={300}>
              <p className="text-[#6B6B6B] text-base md:text-lg leading-relaxed mb-10 max-w-lg">
                Médica referência em <em className="not-italic font-semibold text-[#2C2C2C]">Blefaroplastia e Rejuvenescimento do Olhar de Alto Padrão</em> em Manaus (AM) e São Paulo (SP). Com técnicas avançadas e atendimento profundamente individualizado, a Dra. Melissa Tamayo proporciona resultados transformadores para casos de pálpebras caídas, olhar cansado, flacidez palpebral e envelhecimento da região periorbital — sempre preservando a naturalidade e a harmonia da expressão de cada paciente.
              </p>
            </FadeIn>

            <FadeIn direction="right" delay={400}>
              <div className="flex flex-col sm:flex-row gap-8 mb-10 pt-8 border-t border-[#E0CC89]/40">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#C9A84C] block mb-2">
                    Formação
                  </span>
                  <p className="text-sm font-semibold uppercase tracking-wider text-[#2C2C2C]">
                    Universidade de Medicina (USP)
                  </p>
                </div>
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#C9A84C] block mb-2">
                    Especialidade
                  </span>
                  <p className="text-sm font-semibold uppercase tracking-wider text-[#2C2C2C]">
                    Aging Management & Hair Care
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={500}>
              <div className="pt-8 border-t border-[#E0CC89]/40">
                <a
                  href="#trajetoria"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#2C2C2C] hover:text-[#C9A84C] transition-colors group"
                >
                  Conheça a Trajetória Completa
                  <svg
                    width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="transform group-hover:translate-x-1 transition-transform"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
