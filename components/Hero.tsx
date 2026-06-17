
import React from 'react';
import FadeIn from './FadeIn';


interface HeroProps {
  onOpenContact: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-end pb-40 md:items-center md:pb-0 overflow-hidden">
      {/* Background Image */}
      {/* Background Image - Optimized for LCP */}
      <div className="absolute inset-0 overflow-hidden">
        <img decoding="async"
          src="https://i.ibb.co/VYZwRTnt/Chat-GPT-Image-4-de-jun-de-2026-16-02-10.png"
          alt="Dra. Melissa Tamayo - Dermatologista"
          className="w-full h-full object-cover object-bottom scale-[1.25] origin-bottom md:scale-100"
          loading="eager"
          // @ts-ignore
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-[#3A3A3A]/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 md:px-8 mt-20 md:mt-0">
        <div className="max-w-md lg:max-w-lg text-justify md:text-left">
          <FadeIn direction="none" delay={200}>
            <p className="text-[#E0CC89] text-sm md:text-base uppercase tracking-[0.16em] font-medium mb-6"></p>
          </FadeIn>
          <FadeIn delay={400}>
            <h1 className="text-white text-xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.2] mb-10">
              <span className="-ml-1 md:-ml-[6px]">T</span>ransformamos vidas com o poder do rejuvenescimento facial e do olhar.
            </h1>
          </FadeIn>

          <FadeIn delay={600}>
            <div className="flex flex-col gap-4 w-max mx-auto md:mx-0">
              <button
                onClick={onOpenContact}
                className="group w-full bg-[#C9A84C] text-white px-4 py-2 md:px-8 md:py-3 rounded-full font-medium text-sm md:text-lg hover:bg-[#A07832] transition-all flex items-center justify-center gap-0 hover:gap-2 whitespace-nowrap"
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
              <button
                onClick={onOpenContact}
                className="group w-full bg-transparent border border-white text-white px-4 py-2 md:px-8 md:py-3 rounded-full font-medium text-sm md:text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
              >
                {/* Ícone WhatsApp */}
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 md:w-[18px] md:h-[18px] shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.096.537 4.066 1.482 5.783L.057 23.625a.75.75 0 0 0 .918.918l5.843-1.425A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.663-.52-5.178-1.428l-.37-.225-3.827.933.952-3.74-.243-.386A9.952 9.952 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                <span>Quero Rejuvenecer Meu Olhar</span>
              </button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;
