
import React from 'react';
import FadeIn from './FadeIn';
import BeforeAfterGallery from './BeforeAfterGallery';

interface ServicesHeroProps {
  onOpenContact: () => void;
}

const ServicesHero: React.FC<ServicesHeroProps> = ({ onOpenContact }) => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-none mb-10">
              Procedimentos <br /> Especializados
            </h2>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenContact}
                className="bg-[#C9A84C] text-white px-8 py-3 rounded-full font-medium hover:bg-[#A07832] transition-colors"
              >
                Agende sua Consulta
              </button>
              <button className="bg-transparent border border-[#2C2C2C]/20 text-[#2C2C2C] px-8 py-3 rounded-full font-medium hover:bg-[#2C2C2C]/5 transition-colors">
                Sobre a Dra. Melissa
              </button>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={300}>
          <div className="rounded-[3rem] overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600&q=80"
              alt="Procedimento dermatológico"
              className="w-full h-[600px] object-cover"
            />
          </div>
        </FadeIn>

        {/* Galeria Antes & Depois */}
        <BeforeAfterGallery />
      </div>
    </section>
  );
};

export default ServicesHero;
