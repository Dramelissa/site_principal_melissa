
import React from 'react';
import FadeIn from './FadeIn';

interface TrajectoryPageProps {
    onOpenContact: () => void;
}

const TrajectoryPage: React.FC<TrajectoryPageProps> = ({ onOpenContact }) => {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative py-20 px-4 bg-[#FAF7F4] overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#E0CC89]/5 skew-x-12 transform origin-top-right"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Content Column */}
                        <div className="max-w-3xl">
                            <FadeIn>
                                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C9A84C] block mb-4">
                                    Minha História
                                </span>
                            </FadeIn>
                            <FadeIn delay={200}>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#2C2C2C] mb-6 leading-tight">
                                    Uma Jornada Dedicada à <span className="text-[#C9A84C]">Excelência</span> e à <span className="text-[#C9A84C]">Beleza Natural</span>.
                                </h1>
                            </FadeIn>
                            <FadeIn delay={400}>
                                <p className="text-[#6B6B6B] text-lg leading-relaxed max-w-2xl">
                                    Conheça a trajetória da Dra. Melissa Tamayo, desde sua formação acadêmica até se tornar referência em dermatologia estética e rejuvenescimento natural.
                                </p>
                            </FadeIn>
                        </div>

                        {/* Photo Column */}
                        <FadeIn direction="left" delay={200} className="relative hidden md:block">
                            <div className="relative h-[600px] w-full max-w-md mx-auto">
                                <div className="absolute inset-0 bg-[#C9A84C]/10 transform translate-x-4 translate-y-4 rounded-sm"></div>
                                <img
                                    src="/images/dra.melissa.webp"
                                    alt="Dra. Melissa Tamayo"
                                    className="w-full h-full object-cover rounded-sm shadow-xl relative z-10"
                                />
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Main Content - Timeline/Trajectory */}
            <section className="py-24 px-4">
                <div className="max-w-4xl mx-auto space-y-24">

                    {/* Section 1: Introduction/Philosophy */}
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-start">
                        <FadeIn direction="right">
                            <h2 className="text-2xl font-bold text-[#2C2C2C] relative inline-block">
                                A Visão
                                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#C9A84C]"></span>
                            </h2>
                        </FadeIn>
                        <FadeIn delay={200}>
                            <div className="space-y-6 text-[#6B6B6B] leading-relaxed">
                                <p>
                                    Acredito que a verdadeira beleza reside na harmonia e na autenticidade. Minha abordagem à dermatologia não é sobre transformar quem você é, mas sim revelar a sua melhor versão.
                                </p>
                                <p>
                                    O conceito de <em>Quiet Luxury</em> guia cada procedimento: resultados elegantes, sutis e imperceptíveis, onde a intervenção médica se torna invisível aos olhos, deixando transparecer apenas o frescor e a vitalidade.
                                </p>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Section 2: Education */}
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-start">
                        <FadeIn direction="right">
                            <h2 className="text-2xl font-bold text-[#2C2C2C] relative inline-block">
                                Formação Acadêmica
                                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#C9A84C]"></span>
                            </h2>
                        </FadeIn>
                        <FadeIn delay={200}>
                            <ul className="space-y-8">
                                <li className="relative pl-8 border-l border-[#C9A84C]/30">
                                    <span className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-[#C9A84C]"></span>
                                    <h3 className="text-xl font-bold text-[#2C2C2C] mb-1">Medicina</h3>
                                    <p className="text-sm font-semibold uppercase tracking-wider text-[#C9A84C] mb-3">Universidade de São Paulo (USP)</p>
                                    <p className="text-[#6B6B6B]">
                                        Graduação em uma das instituições mais prestigiadas do país, construindo uma base sólida em medicina clínica e cirúrgica.
                                    </p>
                                </li>
                                <li className="relative pl-8 border-l border-[#C9A84C]/30">
                                    <span className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-[#C9A84C]"></span>
                                    <h3 className="text-xl font-bold text-[#2C2C2C] mb-1">Residência em Dermatologia</h3>
                                    <p className="text-sm font-semibold uppercase tracking-wider text-[#C9A84C] mb-3">Hospital das Clínicas (USP)</p>
                                    <p className="text-[#6B6B6B]">
                                        Especialização focada no diagnóstico e tratamento de doenças da pele, cabelos e unhas, além de treinamento intensivo em cirurgia dermatológica.
                                    </p>
                                </li>
                            </ul>
                        </FadeIn>
                    </div>

                    {/* Section 3: Specialization */}
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-start">
                        <FadeIn direction="right">
                            <h2 className="text-2xl font-bold text-[#2C2C2C] relative inline-block">
                                Especialização e Foco
                                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#C9A84C]"></span>
                            </h2>
                        </FadeIn>
                        <FadeIn delay={200}>
                            <div className="space-y-6 text-[#6B6B6B] leading-relaxed">
                                <p>
                                    Após a residência, dediquei meus estudos ao <strong>Aging Management</strong> (Gerenciamento do Envelhecimento) e Tricologia.
                                </p>
                                <p>
                                    Meu foco é oferecer tratamentos que respeitem a anatomia individual, utilizando tecnologias de ponta como lasers, ultrassom microfocado e injetáveis de alta performance para promover um envelhecimento positivo e saudável.
                                </p>
                            </div>
                        </FadeIn>
                    </div>

                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 bg-[#F5F0EB] text-center">
                <div className="max-w-3xl mx-auto">
                    <FadeIn>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-6">Agende uma Consulta</h2>
                        <p className="text-[#6B6B6B] text-lg mb-10">
                            Venha conhecer pessoalmente nossa clínica e descubra como podemos cuidar da sua pele e autoestima com a excelência que você merece.
                        </p>
                        <button
                            onClick={onOpenContact}
                            className="bg-[#C9A84C] text-white px-10 py-4 rounded-full font-medium text-lg hover:bg-[#A07832] transition-colors"
                        >
                            Entrar em Contato
                        </button>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
};

export default TrajectoryPage;
