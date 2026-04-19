
import React from 'react';
import FadeIn from './FadeIn';

interface PatientJourneyProps {
    onOpenContact: () => void;
}

const PatientJourney: React.FC<PatientJourneyProps> = ({ onOpenContact }) => {
    return (
        <section className="py-28 px-4 bg-[#FAF7F4]">
            <div className="max-w-7xl mx-auto">

                {/* Cabeçalho centralizado acima de tudo */}
                <div className="text-center mb-14">
                    <FadeIn direction="none">
                        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C9A84C] block mb-4">
                            Atendimento
                        </span>
                    </FadeIn>
                    <FadeIn direction="none" delay={150}>
                        <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-[#2C2C2C]">
                            Consultas
                        </h2>
                    </FadeIn>
                </div>

                {/* Grid: imagem + texto */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

                    {/* Coluna esquerda — Foto */}
                    <FadeIn direction="left">
                        <div className="relative">
                            <div className="overflow-hidden rounded-sm shadow-lg">
                                <img
                                    src="/images/photos/melissa esc.webp"
                                    alt="Consultas Dra. Melissa Tamayo"
                                    className="w-full h-[420px] md:h-[520px] object-cover object-center"
                                />
                            </div>
                            <div className="absolute -bottom-4 -left-4 w-20 h-20 border-l-2 border-b-2 border-[#C9A84C]/30 hidden md:block" />
                        </div>
                    </FadeIn>

                    {/* Coluna direita — Texto */}
                    <div className="flex flex-col justify-start">

                        {/* Divisor dourado */}
                        <FadeIn direction="right" delay={200}>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-px w-16 bg-[#C9A84C]/40" />
                                <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
                            </div>
                        </FadeIn>

                        {/* Texto */}
                        <FadeIn direction="right" delay={300}>
                            <p className="text-[#6B6B6B] text-base md:text-lg leading-relaxed mb-10 max-w-md">
                                Nossas consultas são realizadas de forma{' '}
                                <span className="text-[#2C2C2C] font-semibold">presencial e on-line</span>{' '}
                                em Manaus. Para saber mais sobre como podemos te ajudar, clique no botão abaixo e fale conosco.
                            </p>
                        </FadeIn>

                        {/* CTA */}
                        <FadeIn direction="right" delay={420}>
                            <button
                                onClick={onOpenContact}
                                className="bg-[#C9A84C] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#A07832] transition-colors self-start"
                            >
                                Agende sua Consulta
                            </button>
                        </FadeIn>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default PatientJourney;
