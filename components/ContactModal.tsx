
import React, { useState, useEffect } from 'react';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const procedures = [
    'Rejuvenescimento Facial e do Olhar',
    'Blefaroplastia',
    'Lifting Temporal / Fox Eyes',
    'Transplante de Sobrancelhas',
    'Transplante Capilar',
    'Botox',
    'Ultraformer',
    'Laser Co2',
    'Outro Procedimento',
];

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [procedure, setProcedure] = useState('');
    const [message, setMessage] = useState('');

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            // Dispara evento customizado quando o formulário é aberto
            if (typeof (window as any).fbq === 'function') {
                (window as any).fbq('trackCustom', 'lead_form');
            }
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    // Utilitários para cookies e UTMs
    const getCookie = (name: string): string => {
        const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        return match ? decodeURIComponent(match[2]) : '';
    };

    const getUrlParam = (param: string): string => {
        return new URLSearchParams(window.location.search).get(param) || '';
    };

    // Função de hash SHA-256 para normalização de dados do usuário (CAPI)
    const sha256 = async (str: string): Promise<string> => {
        if (!str) return '';
        const normalized = str.trim().toLowerCase();
        const buffer = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(normalized));
        return Array.from(new Uint8Array(buffer)).map(b => b.toString(16).padStart(2, '0')).join('');
    };

    const handleSubmit = async (e: React.FormEvent) => {
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
> Telefone: ${phone}
> Procedimento: ${procedure}
> Mensagem: ${message || '—'}
> Quando: ${dateStr} - ${timeStr}`;

        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappUrl = `https://wa.me/5592984685391?text=${encodedMessage}`;


        // ── Envio para o Webhook em background (evita bloqueio de pop-up no Safari) ──
        const sendTrackingData = async () => {
            try {
                // Separar primeiro e último nome
                const nameParts = name.trim().split(' ');
                const firstName = nameParts[0] || '';
                const lastName = nameParts.slice(1).join(' ') || '';

                // Normalizar telefone (somente dígitos, adicionar 55 se necessário)
                const rawPhone = phone.replace(/\D/g, '');
                const normalizedPhone = rawPhone.startsWith('55') ? rawPhone : `55${rawPhone}`;

                // Hash dos dados do usuário (requisito CAPI do Facebook)
                const [hashedEmail, hashedPhone, hashedFn, hashedLn] = await Promise.all([
                    sha256(email),
                    sha256(normalizedPhone),
                    sha256(firstName),
                    sha256(lastName),
                ]);

                // Cookies do Facebook
                const fbp = getCookie('_fbp');
                const fbc = getCookie('_fbc') || getUrlParam('fbclid')
                    ? `fb.1.${Date.now()}.${getUrlParam('fbclid')}`
                    : '';

                // UTMs da URL atual
                const utmSource = getUrlParam('utm_source');
                const utmMedium = getUrlParam('utm_medium');
                const utmCampaign = getUrlParam('utm_campaign');
                const utmContent = getUrlParam('utm_content');
                const utmTerm = getUrlParam('utm_term');
                const utmId = getUrlParam('utm_id');

                // Identificadores de evento
                const eventTime = Math.floor(Date.now() / 1000);
                const eventId = `lead_${eventTime}_${Math.random().toString(36).slice(2, 9)}`;
                const externalId = await sha256(`${email}_${normalizedPhone}`);

                // IP do cliente via serviço externo (best-effort)
                let clientIp = '';
                try {
                    const ipRes = await fetch('https://api.ipify.org?format=json', { signal: AbortSignal.timeout(3000) });
                    const ipData = await ipRes.json();
                    clientIp = ipData.ip || '';
                } catch { /* silencia timeout */ }

                const payload = {
                    data: [
                        {
                            event_name: 'Lead',
                            event_time: eventTime,
                            event_id: eventId,
                            action_source: 'website',
                            event_source_url: window.location.href,
                            user_data: {
                                em: hashedEmail,
                                ph: hashedPhone,
                                fn: hashedFn,
                                ln: hashedLn,
                                country: await sha256('br'),
                                external_id: externalId,
                                client_ip_address: clientIp,
                                client_user_agent: navigator.userAgent,
                                fbc: fbc,
                                fbp: fbp,
                                raw_em: email.trim().toLowerCase(),
                                raw_ph: normalizedPhone,
                                raw_fn: firstName.trim().toLowerCase(),
                                raw_ln: lastName.trim().toLowerCase(),
                                raw_country: 'br',
                            },
                            custom_data: {
                                procedure: procedure,
                                utm_source: utmSource,
                                utm_medium: utmMedium,
                                utm_campaign: utmCampaign,
                                utm_content: utmContent,
                                utm_term: utmTerm,
                                utm_id: utmId,
                            },
                            raw_lead: {
                                full_name: name.trim(),
                                first_name: firstName,
                                last_name: lastName,
                                email: email.trim(),
                                phone: phone.trim(),
                                phone_normalized: normalizedPhone,
                                procedure: procedure,
                                message: message.trim() || '',
                                ip: clientIp,
                                user_agent: navigator.userAgent,
                                page_url: window.location.href,
                                referrer: document.referrer || '',
                                submitted_at: new Date().toISOString(),
                            },
                        },
                    ],
                };

                fetch('https://webhook.kvgroupbr.com.br/webhook/site_melissa', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload),
                    keepalive: true,
                }).catch(() => { /* silencia erros de rede */ });

            } catch (err) {
                console.warn('[Webhook] Falha ao enviar dados do lead:', err);
            }
        };

        sendTrackingData();

        // Dispara os eventos do Meta Pixel em sequência
        if (typeof (window as any).fbq === 'function') {
            (window as any).fbq('track', 'CompleteRegistration', { content_name: procedure });
            (window as any).fbq('track', 'Lead', { content_name: procedure });
        }

        // Aguarda 400 ms para garantir que o pixel enviou os requests
        // antes de o navegador possivelmente suspender a aba atual
        await new Promise(r => setTimeout(r, 400));

        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

        // Reset form
        setName('');
        setEmail('');
        setPhone('');
        setProcedure('');
        setMessage('');
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center sm:px-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            {/* Modal */}
            <div
                className="relative bg-[#FAF7F4] rounded-t-2xl sm:rounded-2xl shadow-2xl w-full sm:max-w-lg flex flex-col"
                style={{
                    maxHeight: '92dvh',
                    animation: 'modalSlideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
            >
                {/* Handle bar - mobile only */}
                <div className="sm:hidden flex justify-center pt-3 pb-1 shrink-0">
                    <div className="w-10 h-1 rounded-full bg-[#2C2C2C]/20" />
                </div>

                {/* Header */}
                <div className="px-5 sm:px-8 pt-3 sm:pt-8 pb-2 sm:pb-4 shrink-0">
                    <div className="flex items-center justify-between mb-1 sm:mb-2">
                        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C9A84C]">
                            Agendamento
                        </span>
                        <button
                            onClick={onClose}
                            className="p-1 rounded-full hover:bg-black/5 transition-colors"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2C2C2C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <h2 className="text-lg sm:text-2xl md:text-3xl font-bold tracking-tight text-[#2C2C2C]">
                        Agende sua Consulta
                    </h2>
                    <p className="text-xs sm:text-sm text-[#6B6B6B] mt-1 sm:mt-2">
                        Preencha os dados abaixo e entraremos em contato pelo WhatsApp.
                    </p>
                </div>

                {/* Form — flex-col para separar campos do botão */}
                <form onSubmit={handleSubmit} className="flex flex-col flex-1 min-h-0">

                    {/* Campos com scroll */}
                    <div className="px-5 sm:px-8 pt-2 sm:pt-4 space-y-3 sm:space-y-4 overflow-y-auto flex-1 pb-2">

                        {/* Nome */}
                        <div>
                            <label className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-[#6B6B6B] mb-1 sm:mb-2">
                                Nome *
                            </label>
                            <input
                                type="text"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Seu nome completo"
                                className="w-full bg-white border border-[#E0CC89]/30 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm text-[#2C2C2C] placeholder:text-[#6B6B6B]/40 focus:outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C]/30 transition-colors"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-[#6B6B6B] mb-1 sm:mb-2">
                                E-mail *
                            </label>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="seu@email.com"
                                className="w-full bg-white border border-[#E0CC89]/30 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm text-[#2C2C2C] placeholder:text-[#6B6B6B]/40 focus:outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C]/30 transition-colors"
                            />
                        </div>

                        {/* Telefone */}
                        <div>
                            <label className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-[#6B6B6B] mb-1 sm:mb-2">
                                Telefone / WhatsApp *
                            </label>
                            <input
                                type="tel"
                                required
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="(DD) 99999-9999"
                                className="w-full bg-white border border-[#E0CC89]/30 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm text-[#2C2C2C] placeholder:text-[#6B6B6B]/40 focus:outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C]/30 transition-colors"
                            />
                        </div>

                        {/* Procedimento */}
                        <div>
                            <label className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-[#6B6B6B] mb-1 sm:mb-2">
                                Procedimento Desejado *
                            </label>
                            <select
                                required
                                value={procedure}
                                onChange={(e) => setProcedure(e.target.value)}
                                className="w-full bg-white border border-[#E0CC89]/30 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm text-[#2C2C2C] focus:outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C]/30 transition-colors appearance-none"
                                style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236B6B6B' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'right 12px center',
                                }}
                            >
                                <option value="" disabled hidden>Selecione o procedimento</option>
                                {procedures.map((proc) => (
                                    <option key={proc} value={proc}>{proc}</option>
                                ))}
                            </select>
                        </div>

                        {/* Mensagem */}
                        <div>
                            <label className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-[#6B6B6B] mb-1 sm:mb-2">
                                Mensagem <span className="text-[#6B6B6B]/50">(Opcional)</span>
                            </label>
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Conte-nos mais sobre o que deseja..."
                                rows={2}
                                className="w-full bg-white border border-[#E0CC89]/30 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm text-[#2C2C2C] placeholder:text-[#6B6B6B]/40 focus:outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C]/30 transition-colors resize-none"
                            />
                        </div>
                    </div>

                    {/* Submit — fora do scroll, sempre visível */}
                    <div className="px-5 sm:px-8 py-4 shrink-0 border-t border-[#E0CC89]/20 bg-[#FAF7F4]">
                        <button
                            type="submit"
                            className="w-full bg-[#C9A84C] text-white py-3 rounded-full font-medium text-sm sm:text-base hover:bg-[#A07832] transition-colors flex items-center justify-center gap-2"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Iniciar Conversa no WhatsApp
                        </button>
                    </div>
                </form>
            </div>

            <style>{`
        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
        </div>
    );
};

export default ContactModal;
