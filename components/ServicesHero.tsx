
import React from 'react';
import FadeIn from './FadeIn';
import BeforeAfterGallery from './BeforeAfterGallery';

interface ServicesHeroProps {
  onOpenContact: () => void;
}

const procedures = [
  {
    title: 'Rejuvenescimento Facial',
    subtitle: 'Recupere a vitalidade e juventude do seu rosto',
    href: '#procedimentos/rejuvenescimento-facial',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=700&q=80',
  },
  {
    title: 'Blefaroplastia',
    subtitle: 'Rejuvenescimento cirúrgico do olhar',
    href: '#procedimentos/blefaroplastia',
    image: 'https://i.ibb.co/pjh7g007/Blefaroplastia.webp',
  },
  {
    title: 'Lifting Temporal Definitivo / Fox Eyes',
    subtitle: 'Elevação elegante da cauda da sobrancelha',
    href: '#procedimentos/lifting-temporal',
    image: 'https://i.ibb.co/qq1cNNt/Lifting-Temporal-Fox-Eyes.webp',
  },
  {
    title: 'Transplante de Sobrancelhas',
    subtitle: 'Sobrancelhas naturais e definidas, fio a fio',
    href: '#procedimentos/transplante-sobrancelhas',
    image: 'https://i.ibb.co/Zzv4y7yt/TRANSPLANTE-DE-SOBRANCELHA.webp',
  },
  {
    title: 'Transplante Capilar',
    subtitle: 'Recuperação natural e definitiva dos fios',
    href: '#procedimentos/transplante-capilar',
    image: 'https://i.ibb.co/0pzjTb8M/TRANSPLANTE-CAPILAR.webp',
  },
  {
    title: 'Botox',
    subtitle: 'Suavização precisa das linhas de expressão',
    href: '#procedimentos/botox',
    image: 'https://i.ibb.co/YnRcdfy/BOTOX.webp',
  },
  {
    title: 'Ultraformer',
    subtitle: 'Lifting não cirúrgico com ultrassom microfocado',
    href: '#procedimentos/ultraformer',
    image: 'https://i.ibb.co/pD1CqXt/ULTRAFORMER.webp',
  },
];

const ServicesHero: React.FC<ServicesHeroProps> = ({ onOpenContact }) => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Título */}
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-medium tracking-tight leading-none mb-10">
              Procedimentos <br /> Especializados
            </h2>
          </FadeIn>
        </div>

        {/* Grid de procedimentos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
          {procedures.map((proc, idx) => (
            <FadeIn key={idx} direction="up" delay={idx * 80}>
              <a
                href={proc.href}
                className="group flex flex-col bg-[#FAF7F4] hover:bg-[#C9A84C] rounded-2xl overflow-hidden transition-colors duration-300 cursor-pointer shadow-sm hover:shadow-lg"
              >
                {/* Imagem */}
                <div className="overflow-hidden h-48">
                  <img loading="lazy" decoding="async"
                    src={proc.image}
                    alt={proc.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{
                      imageRendering: 'auto',
                      filter: 'contrast(1.08) saturate(1.1) brightness(1.02)',
                      transform: 'translateZ(0)',
                      backfaceVisibility: 'hidden',
                    }}
                  />
                </div>

                {/* Informações */}
                <div className="flex flex-col gap-2 px-5 py-4">
                  <h3 className="text-[#2C2C2C] group-hover:text-white font-semibold text-sm md:text-base leading-snug transition-colors">
                    {proc.title}
                  </h3>
                  <p className="text-[#6B6B6B] group-hover:text-white/80 text-xs leading-relaxed transition-colors">
                    {proc.subtitle}
                  </p>
                  <span className="mt-2 text-xs font-semibold uppercase tracking-widest text-[#C9A84C] group-hover:text-white transition-colors">
                    Saiba mais →
                  </span>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>

        {/* Galeria Antes & Depois */}
        <BeforeAfterGallery />
      </div>
    </section>
  );
};

export default ServicesHero;
