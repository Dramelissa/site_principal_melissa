import React, { useEffect } from 'react';

const RedirectPage: React.FC = () => {
  // Se o usuário acessar /redirect diretamente (sem ter enviado o formulário), manda pra home
  useEffect(() => {
    if (!sessionStorage.getItem('leadSubmitted')) {
      window.location.replace('/');
    }
  }, []);

  if (!sessionStorage.getItem('leadSubmitted')) {
    return null;
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-[#FAF7F4] px-6 text-center"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Ícone de check animado */}
      <div
        className="w-24 h-24 rounded-full flex items-center justify-center mb-8"
        style={{ background: 'linear-gradient(135deg, #C9A84C22, #C9A84C44)' }}
      >
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#C9A84C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ animation: 'checkPop 0.5s cubic-bezier(0.16,1,0.3,1) both' }}
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>

      {/* Título */}
      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C9A84C] block mb-3">
        Solicitação Recebida
      </span>
      <h1 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4 tracking-tight">
        Obrigado pelo seu contato!
      </h1>
      <p className="text-[#6B6B6B] max-w-md leading-relaxed mb-10">
        Recebemos suas informações. Em breve nossa equipe entrará em contato pelo WhatsApp para confirmar sua consulta com a Dra. Melissa Tamayo.
      </p>

      {/* Divider decorativo */}
      <div className="w-16 h-px bg-[#C9A84C]/40 mb-10" />

      {/* Botões */}
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
        <a
          href="/"
          className="flex-1 py-3 px-6 rounded-full border border-[#C9A84C] text-[#C9A84C] font-semibold text-sm hover:bg-[#C9A84C] hover:text-white transition-colors text-center"
        >
          Voltar ao site
        </a>
        <a
          href="https://www.instagram.com/dramelissatamayo/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 px-6 rounded-full bg-[#C9A84C] text-white font-semibold text-sm hover:bg-[#A07832] transition-colors flex items-center justify-center gap-2"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
          Ver Instagram
        </a>
      </div>

      {/* Logo / assinatura */}
      <p className="mt-16 text-xs text-[#6B6B6B]/60 tracking-widest uppercase">
        Dra. Melissa Tamayo · Blefaroplastia &amp; Dermatologia
      </p>

      <style>{`
        @keyframes checkPop {
          from { opacity: 0; transform: scale(0.5); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default RedirectPage;
