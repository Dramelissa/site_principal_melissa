
import React from 'react';
import FadeIn from './FadeIn';

const Card: React.FC<{ title: string; label: string; image: string; index: number; href: string }> = ({ title, label, image, index, href }) => (
  <FadeIn delay={index * 150} direction="up">
    <a href={href} className="group cursor-pointer flex flex-col bg-white rounded-[2rem] overflow-hidden shadow-lg h-full block">
      <div className="p-8 flex justify-between items-start">
        <div className="space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">{label}</span>
          <h3 className="text-2xl md:text-xl lg:text-2xl font-medium leading-tight max-w-[200px]">{title}</h3>
        </div>
        <div className="p-2 border border-gray-100 rounded-full group-hover:bg-[#C9A84C] group-hover:text-white transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17l10-10M7 7h10v10" />
          </svg>
        </div>
      </div>
      <div className="flex-1 min-h-[250px] md:min-h-[200px] lg:min-h-[280px]">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      </div>
    </a>
  </FadeIn>
);

const InfoCards: React.FC = () => {
  const cards = [
    {
      label: "Procedimento",
      title: "Blefaroplastia: Rejuvenescimento do Olhar",
      image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80",
      href: "#procedimentos/blefaroplastia"
    },
    {
      label: "Especialidade",
      title: "Rejuvenescimento Facial Avançado",
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80",
      href: "#procedimentos/rejuvenescimento-facial"
    },
    {
      label: "Inovação",
      title: "Lifting Temporal & Fox Eyes",
      image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80",
      href: "#procedimentos/lifting-temporal"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((card, idx) => (
        <Card key={idx} index={idx} {...card} />
      ))}
    </div>
  );
};

export default InfoCards;
