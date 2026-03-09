
import React, { useState } from 'react';

interface HeaderProps {
  onOpenContact: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenContact }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-4 md:top-6 inset-x-0 mx-auto w-[95%] max-w-7xl z-50">
      <div className="bg-white/90 backdrop-blur-md rounded-full px-4 md:px-6 py-3 flex items-center justify-between shadow-sm border border-white/20">
        {/* Logo */}
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img src="/images/icons/27.1.webp" alt="Logo Dra. Melissa" className="w-10 h-10 object-contain" />
          <div className="flex flex-col items-start gap-0.5">
            <div className="font-[Raleway] font-medium text-sm md:text-base tracking-[0.15em] text-[#111111] uppercase leading-none whitespace-nowrap">
              Dra. Melissa Tamayo
            </div>
            <div className="font-[Raleway] font-medium text-[0.4rem] md:text-[0.55rem] tracking-[0.05em] text-[#111111] uppercase leading-none whitespace-nowrap ml-0.5">
              Rejuvenescimento &nbsp; Facial &nbsp; e &nbsp; Capilar
            </div>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#" className="hover:opacity-60 transition-opacity">Sobre</a>
          <a href="#procedimentos" className="hover:opacity-60 transition-opacity">Procedimentos</a>

          <a href="#" className="hover:opacity-60 transition-opacity">Contato</a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button
            onClick={onOpenContact}
            className="bg-[#C9A84C] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#A07832] transition-colors"
          >
            Agende sua Consulta
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden bg-[#C9A84C] p-2 rounded-full text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isMenuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white rounded-3xl p-6 shadow-xl md:hidden flex flex-col gap-4 text-center">
          <a href="#" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium py-2 border-b border-gray-100">Sobre</a>
          <a href="#procedimentos" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium py-2 border-b border-gray-100">Procedimentos</a>

          <a href="#" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium py-2 border-b border-gray-100">Contato</a>
          <button
            onClick={() => { setIsMenuOpen(false); onOpenContact(); }}
            className="bg-[#C9A84C] text-white px-6 py-3 rounded-full text-base font-medium mt-4"
          >
            Agende sua Consulta
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
