
import React from 'react';
import FadeIn from './FadeIn';


interface HeroProps {
  onOpenContact: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-end pb-40 md:items-center md:pb-0 justify-center overflow-hidden">
      {/* Background Image */}
      {/* Background Image - Optimized for LCP */}
      <div className="absolute inset-0">
        <img decoding="async"
          src="https://i.ibb.co/ynmCTRj0/recep-o-melissa.webp"
          alt="Dra. Melissa Tamayo - Dermatologista"
          className="w-full h-full object-cover object-bottom"
          loading="eager"
          // @ts-ignore
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-[#3A3A3A]/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <FadeIn direction="none" delay={200}>
          <p className="text-[#E0CC89] text-sm md:text-base uppercase tracking-[0.16em] font-medium mb-6"></p>
        </FadeIn>
        <FadeIn delay={400}>
          <h1 className="text-white text-2xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] mb-10">
            Transformamos vidas com o poder do rejuvenescimento facial e do olhar.
          </h1>
        </FadeIn>

        <FadeIn delay={600}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">

            <button
              onClick={onOpenContact}
              className="group w-full md:w-auto bg-[#C9A84C] text-white px-6 py-2.5 md:px-8 md:py-3 rounded-full font-medium text-base md:text-lg hover:bg-[#A07832] transition-all flex items-center justify-center gap-0 hover:gap-2"
            >
              <span>Agende sua Consulta</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-0 opacity-0 group-hover:w-5 group-hover:opacity-100 transition-all duration-300"
              >
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <a href="#procedimentos" className="w-full md:w-auto bg-transparent border border-white text-white px-6 py-2.5 md:px-8 md:py-3 rounded-full font-medium text-base md:text-lg hover:bg-white/10 transition-all text-center">
              Conheça os Procedimentos
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;
