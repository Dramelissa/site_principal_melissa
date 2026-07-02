
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

                <div className="flex flex-col items-center text-center max-w-2xl mx-auto">

                    {/* Divisor dourado */}
                    <FadeIn direction="up" delay={200}>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-px w-16 bg-[#C9A84C]/40" />
                            <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
                            <div className="h-px w-16 bg-[#C9A84C]/40" />
                        </div>
                    </FadeIn>

                    {/* Texto */}
                    <FadeIn direction="up" delay={300}>
                        <p className="text-[#6B6B6B] text-base md:text-lg leading-relaxed mb-10">
                            Nossas consultas são realizadas de forma{' '}
                            <span className="text-[#2C2C2C] font-semibold">presencial e on-line</span>{' '}
                            em Manaus. Para saber mais sobre como podemos te ajudar, clique no botão abaixo e fale conosco.
                        </p>
                    </FadeIn>

                    {/* CTA */}
                    <FadeIn direction="up" delay={420}>
                        <button
                            onClick={onOpenContact}
                            className="bg-[#C9A84C] text-white px-8 py-3 rounded-full text-sm md:text-base font-medium hover:bg-[#A07832] transition-colors"
                        >
                            Agende sua Consulta
                        </button>
                    </FadeIn>

                </div>
            </div>
        </section>
    );
};

export default PatientJourney;
