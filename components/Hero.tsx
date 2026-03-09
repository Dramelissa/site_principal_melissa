
import React from 'react';
import FadeIn from './FadeIn';


interface HeroProps {
  onOpenContact: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      {/* Background Image - Optimized for LCP */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&q=80"
          alt="Dra. Melissa Tamayo - Dermatologista"
          className="w-full h-full object-cover"
          loading="eager"
          // @ts-ignore
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-[#3A3A3A]/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <FadeIn direction="none" delay={200}>
          <p className="text-[#E0CC89] text-sm md:text-base uppercase tracking-[0.16em] font-medium mb-6">Rejuvenescimento Facial e Capilar</p>
        </FadeIn>
        <FadeIn delay={400}>
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.1] mb-10">
            Realce a Beleza <br /> Natural do Seu Olhar
          </h1>
        </FadeIn>

        <FadeIn delay={600}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">

            <button
              onClick={onOpenContact}
              className="group w-full md:w-auto bg-[#C9A84C] text-white px-8 py-3 rounded-full font-medium text-lg hover:bg-[#A07832] transition-all flex items-center justify-center gap-0 hover:gap-2"
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
            <a href="#procedimentos" className="w-full md:w-auto bg-transparent border border-white text-white px-8 py-3 rounded-full font-medium text-lg hover:bg-white/10 transition-all text-center">
              Conheça os Procedimentos
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;
