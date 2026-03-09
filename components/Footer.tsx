
import React from 'react';
import FadeIn from './FadeIn';

interface FooterProps {
  onOpenContact: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  return (
    <footer className="bg-[#656958] text-[#F5F0EA] py-20 px-4 md:px-12 rounded-t-[3rem] relative overflow-hidden">
      {/* Decorative Background Icons - Removed */}

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <FadeIn direction="left">
            <div className="space-y-6">
              <div className="flex items-center">
                <img src="/images/icons/logo dourada.webp" alt="Dra. Melissa Tamayo" className="h-24 w-auto object-contain" />
              </div>
            </div>
          </FadeIn>

          {/* Menu */}
          <FadeIn delay={100}>
            <div>
              <h4 className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-6">Menu</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><a href="#" className="hover:text-[#C9A84C] transition-colors">Sobre</a></li>
                <li><a href="#procedimentos" className="hover:text-[#C9A84C] transition-colors">Procedimentos</a></li>
                <li><a href="#" className="hover:text-[#C9A84C] transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-[#C9A84C] transition-colors">Contato</a></li>
              </ul>
            </div>
          </FadeIn>

          {/* Redes Sociais */}
          <FadeIn delay={200}>
            <div>
              <h4 className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-6">Redes Sociais</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><a href="#" className="hover:text-[#C9A84C] transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-[#C9A84C] transition-colors">WhatsApp</a></li>
                <li><a href="#" className="hover:text-[#C9A84C] transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-[#C9A84C] transition-colors">YouTube</a></li>
              </ul>
            </div>
          </FadeIn>

          {/* Procedimentos */}
          <FadeIn delay={300}>
            <div>
              <h4 className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-6">Procedimentos</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><a href="#procedimentos" className="hover:text-[#C9A84C] transition-colors">Blefaroplastia</a></li>
                <li><a href="#procedimentos" className="hover:text-[#C9A84C] transition-colors">Lifting Temporal</a></li>
                <li><a href="#procedimentos" className="hover:text-[#C9A84C] transition-colors">Transplante Capilar</a></li>
                <li><a href="#procedimentos" className="hover:text-[#C9A84C] transition-colors">Botox & Ultraformer</a></li>
              </ul>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={400}>
          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col items-center md:items-start">
              <p className="text-white/60 text-sm mb-4">Transforme seu olhar com quem é referência em blefaroplastia. Agende sua avaliação!</p>
              <button
                onClick={onOpenContact}
                className="bg-[#C9A84C] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#A07832] transition-all"
              >
                Agende sua Consulta
              </button>
            </div>
            <div className="text-white/40 text-xs text-center md:text-right">
              <p>© 2025 Dra. Melissa Tamayo. Todos os direitos reservados.</p>
              <p className="text-white/50 text-xs mt-2">
                Desenvolvido por{' '}
                <a
                  href="https://www.kvgroupbr.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-200 transition-colors duration-300 font-semibold"
                >
                  KV <span className="text-yellow-400 font-bold">Group</span>
                </a>
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
};

export default Footer;
