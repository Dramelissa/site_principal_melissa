
import React from 'react';
import FadeIn from './FadeIn';

const steps = [
    {
        number: '01',
        title: 'Acolhimento',
        description: 'Consulta de 60 minutos para entender sua história, expectativas e objetivos. Cada detalhe é ouvido com atenção.',
    },
    {
        number: '02',
        title: 'Diagnóstico Personalizado',
        description: 'Análise profunda da estrutura facial com tecnologia avançada de imagem para um planejamento preciso e individualizado.',
    },
    {
        number: '03',
        title: 'O Tratamento',
        description: 'Execução impecável em ambiente estéril e acolhedor. Técnica refinada com foco em resultados naturais e duradouros.',
    },
    {
        number: '04',
        title: 'Acompanhamento',
        description: 'Suporte contínuo no pós-procedimento, com retornos programados para garantir a evolução ideal do resultado.',
    },
];

const PatientJourney: React.FC = () => {
    return (
        <section className="py-28 px-4 bg-[#FAF7F4]">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <FadeIn direction="none">
                        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C9A84C] block mb-4">
                            A Experiência
                        </span>
                    </FadeIn>
                    <FadeIn delay={150}>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-[#2C2C2C] mb-8">
                            Jornada do<br />Paciente
                        </h2>
                    </FadeIn>
                    <FadeIn delay={300}>
                        <p className="italic text-[#6B6B6B] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                            "Não é sobre mudar quem você é, mas sobre revelar sua melhor versão através de um cuidado extraordinário."
                        </p>
                    </FadeIn>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start mt-16">

                    {/* Left — Image */}
                    <FadeIn direction="left">
                        <div className="relative">
                            <div className="overflow-hidden rounded-sm shadow-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800&q=80"
                                    alt="Clínica Dra. Melissa Tamayo"
                                    className="w-full h-[400px] md:h-[480px] object-cover"
                                />
                            </div>
                            {/* Gold accent */}
                            <div className="absolute -bottom-3 -left-3 w-20 h-20 border-l-2 border-b-2 border-[#C9A84C]/25 hidden md:block"></div>
                        </div>
                    </FadeIn>

                    {/* Right — Steps */}
                    <div className="flex flex-col justify-center gap-10">
                        {steps.map((step, idx) => (
                            <FadeIn key={idx} direction="right" delay={idx * 150}>
                                <div className="flex items-start gap-5 group">
                                    {/* Number */}
                                    <span className="text-2xl font-light text-[#C9A84C]/50 leading-none mt-1 min-w-[36px]">
                                        {step.number}
                                    </span>
                                    {/* Text */}
                                    <div>
                                        <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2C2C2C] mb-2">
                                            {step.title}
                                        </h3>
                                        <p className="text-sm text-[#6B6B6B] leading-relaxed max-w-md">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default PatientJourney;
