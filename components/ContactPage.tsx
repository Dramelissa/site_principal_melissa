import React, { useState } from 'react';
import FadeIn from './FadeIn';

const procedures = [
  'Rejuvenescimento Facial',
  'Blefaroplastia',
  'Lifting Temporal / Fox Eyes',
  'Transplante de Sobrancelhas',
  'Transplante Capilar',
  'Botox',
  'Ultraformer',
];

const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [procedure, setProcedure] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const now = new Date();
    const dateStr = now.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
    const timeStr = now.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
    });

    const whatsappMessage = 
`📋 Novo contato via site
> Nome: ${name}
> E-mail: ${email}
> Procedimento: ${procedure}
> Mensagem: ${message || '—'}
> Quando: ${dateStr} - ${timeStr}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/5592984685391?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');

    setName('');
    setEmail('');
    setProcedure('');
    setMessage('');
  };

  return (
    <div className="pt-32 pb-20 px-4 md:px-8 bg-[#FAF7F4] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C9A84C] block mb-4">
              Atendimento Exclusivo
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-[#2C2C2C]">
              Entre em Contato
            </h1>
            <p className="text-[#6B6B6B] mt-4 max-w-2xl mx-auto leading-relaxed">
              Estamos prontos para atender você com toda a exclusividade e conforto. Deixe sua mensagem ou visite nossa clínica em Manaus.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Lado Esquerdo: Info & Mapa */}
          <FadeIn direction="left" delay={150}>
            <div className="space-y-10">
              {/* Contatos e Redes */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-[#2C2C2C] mb-4 flex items-center gap-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    Telefone & WhatsApp
                  </h3>
                  <p className="text-[#6B6B6B]">(92) 98468-5391</p>
                </div>

                <div className="h-px bg-gray-100 w-full"></div>

                <div>
                  <h3 className="text-lg font-semibold text-[#2C2C2C] mb-4 flex items-center gap-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    Redes Sociais
                  </h3>
                  <div className="flex flex-col gap-3">
                    <a href="https://www.instagram.com/dramelissatamayo/" target="_blank" rel="noopener noreferrer" className="text-[#6B6B6B] hover:text-[#C9A84C] transition-colors inline-flex items-center gap-2">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                      @dramelissatamayo
                    </a>
                    <a href="https://www.facebook.com/melissa.tamayo.54" target="_blank" rel="noopener noreferrer" className="text-[#6B6B6B] hover:text-[#C9A84C] transition-colors inline-flex items-center gap-2">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                      /melissa.tamayo.54
                    </a>
                  </div>
                </div>

                <div className="h-px bg-gray-100 w-full"></div>

                <div>
                  <h3 className="text-lg font-semibold text-[#2C2C2C] mb-4 flex items-center gap-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    Localização Exclusiva
                  </h3>
                  <p className="text-[#6B6B6B] leading-relaxed">
                    Edifício Skye Platinum - Av. Dr. Theomário Pinto da Costa, 811 - Chapada, Manaus - AM, 69050-055<br/>
                    <span className="text-sm mt-2 block">Atendimento Presencial e On-line</span>
                  </p>
                </div>
              </div>

              {/* Mapa do Google embedding */}
              <div className="w-full h-[300px] rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-white">
                <iframe 
                  src="https://maps.google.com/maps?q=Cl%C3%ADnica+Dra+Melissa+Tamayo+-+Blefaroplastia&t=&z=17&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Clínica"
                ></iframe>
              </div>
            </div>
          </FadeIn>

          {/* Lado Direito: Formulário */}
          <FadeIn direction="right" delay={300}>
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl shadow-[#C9A84C]/5 border border-[#C9A84C]/10">
              <h2 className="text-2xl font-bold text-[#2C2C2C] mb-2">Fale com a Especialista</h2>
              <p className="text-[#6B6B6B] text-sm mb-8">Preencha seus dados para agendar sua avaliação.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nome */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-[#6B6B6B] mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Como gostaria de ser chamado(a)?"
                    className="w-full bg-[#FAF7F4] border border-transparent rounded-xl px-5 py-3.5 text-[#2C2C2C] placeholder:text-[#6B6B6B]/40 focus:outline-none focus:border-[#C9A84C] focus:bg-white transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-[#6B6B6B] mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu@melhoremail.com"
                    className="w-full bg-[#FAF7F4] border border-transparent rounded-xl px-5 py-3.5 text-[#2C2C2C] placeholder:text-[#6B6B6B]/40 focus:outline-none focus:border-[#C9A84C] focus:bg-white transition-all"
                  />
                </div>

                {/* Procedimento */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-[#6B6B6B] mb-2">
                    Procedimento de Interesse *
                  </label>
                  <select
                    required
                    value={procedure}
                    onChange={(e) => setProcedure(e.target.value)}
                    className="w-full bg-[#FAF7F4] border border-transparent rounded-xl px-5 py-3.5 text-[#2C2C2C] focus:outline-none focus:border-[#C9A84C] focus:bg-white transition-all appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236B6B6B' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 20px center',
                    }}
                  >
                    <option value="" disabled>Selecione uma opção</option>
                    {procedures.map((proc) => (
                      <option key={proc} value={proc}>{proc}</option>
                    ))}
                  </select>
                </div>

                {/* Mensagem */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-[#6B6B6B] mb-2">
                    Mensagem <span className="text-[#6B6B6B]/40 font-normal normal-case tracking-normal">(Opcional)</span>
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Conte-nos o que você busca melhorar..."
                    rows={4}
                    className="w-full bg-[#FAF7F4] border border-transparent rounded-xl px-5 py-3.5 text-[#2C2C2C] placeholder:text-[#6B6B6B]/40 focus:outline-none focus:border-[#C9A84C] focus:bg-white transition-all resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-[#C9A84C] text-white py-4 rounded-full font-semibold text-base hover:bg-[#A07832] transition-colors shadow-lg shadow-[#C9A84C]/20 hover:shadow-[#C9A84C]/40 transform hover:-translate-y-0.5 mt-2 flex justify-center items-center gap-2"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Enviar via WhatsApp
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
