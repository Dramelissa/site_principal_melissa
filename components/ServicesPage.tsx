
import React from 'react';
import FadeIn from './FadeIn';

const services = [
    {
        id: 'rejuvenescimento-facial',
        title: 'Rejuvenescimento Facial',
        subtitle: 'Recupere a vitalidade e juventude do seu rosto',
        description: 'O rejuvenescimento facial combina técnicas avançadas para restaurar a firmeza, luminosidade e elasticidade da pele. Utilizando protocolos personalizados, cada tratamento é planejado para valorizar os traços naturais do paciente, promovendo resultados harmoniosos e duradouros.',
        highlights: ['Resultados naturais e progressivos', 'Protocolos individualizados', 'Tecnologia de ponta'],
        image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=700&q=80',
    },
    {
        id: 'blefaroplastia',
        title: 'Blefaroplastia',
        subtitle: 'Rejuvenescimento do olhar',
        description: 'A blefaroplastia é o procedimento referência da Dra. Melissa Tamayo. Trata o excesso de pele e bolsas de gordura nas pálpebras superiores e inferiores, devolvendo frescor e leveza ao olhar. O resultado é um aspecto descansado e rejuvenescido, sem perder a naturalidade da expressão.',
        highlights: ['Procedimento minimamente invasivo', 'Recuperação rápida', 'Olhar descansado e natural'],
        image: 'https://i.ibb.co/pjh7g007/Blefaroplastia.webp',
    },
    {
        id: 'lifting-temporal',
        title: 'Lifting Temporal Definitivo / Fox Eyes',
        subtitle: 'Elevação da cauda da sobrancelha',
        description: 'O Lifting Temporal, também conhecido como Fox Eyes, é uma técnica sofisticada que eleva a cauda da sobrancelha, criando um olhar mais aberto, elegante e expressivo. Ideal para quem busca um efeito natural de "olho de raposa", com sutileza e sofisticação.',
        highlights: ['Efeito lifting cirúrgico ', 'Resultados elegantes'],
        image: 'https://i.ibb.co/qq1cNNt/Lifting-Temporal-Fox-Eyes.webp',
    },
    {
        id: 'transplante-sobrancelhas',
        title: 'Transplante de Sobrancelhas',
        subtitle: 'Sobrancelhas naturais e definidas',
        description: 'O transplante de sobrancelhas é indicado para pacientes com falhas, cicatrizes ou sobrancelhas ralas. Utilizando técnica fio a fio, a Dra. Melissa reconstrói a sobrancelha respeitando o desenho natural do rosto, garantindo um resultado harmonioso e permanente.',
        highlights: ['Técnica fio a fio', 'Resultado permanente', 'Design personalizado para cada rosto'],
        image: 'https://i.ibb.co/Zzv4y7yt/TRANSPLANTE-DE-SOBRANCELHA.webp',
    },
    {
        id: 'transplante-capilar',
        title: 'Transplante Capilar',
        subtitle: 'Recuperação natural dos fios',
        description: 'O transplante capilar é realizado com técnicas avançadas de extração e implantação folicular, garantindo resultados naturais e definitivos. Cada procedimento é minuciosamente planejado para respeitar a linha capilar original e a densidade ideal para cada paciente.',
        highlights: ['Técnica FUE avançada', 'Resultado definitivo', 'Planejamento computadorizado'],
        image: 'https://i.ibb.co/0pzjTb8M/TRANSPLANTE-CAPILAR.webp',
    },
    {
        id: 'botox',
        title: 'Botox',
        subtitle: 'Suavização de linhas de expressão',
        description: 'A aplicação de toxina botulínica é um dos procedimentos mais procurados para suavizar rugas dinâmicas e linhas de expressão. Com aplicação precisa e dosagem individualizada, a Dra. Melissa garante um resultado que preserva os movimentos faciais naturais, sem aspecto artificial.',
        highlights: ['Aplicação precisa e indolor', 'Resultado em até 7 dias', 'Aspecto natural preservado'],
        image: 'https://i.ibb.co/YnRcdfy/BOTOX.webp',
    },
    {
        id: 'ultraformer',
        title: 'Ultraformer',
        subtitle: 'Lifting não cirúrgico com ultrassom microfocado',
        description: 'O Ultraformer utiliza ultrassom microfocado para estimular a produção de colágeno em camadas profundas da pele, promovendo firmeza e lifting facial sem cirurgia. É o tratamento ideal para quem busca prevenção e tratamento da flacidez com resultados progressivos e naturais.',
        highlights: ['Sem cortes ou agulhas', 'Estimula colágeno natural', 'Resultados progressivos por até 6 meses'],
        image: 'https://i.ibb.co/pD1CqXt/ULTRAFORMER.webp',
    },
];

interface ServicesPageProps {
    onOpenContact: () => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenContact }) => {
    return (
        <div>
            {/* Hero Banner */}
            <section className="relative pt-40 pb-24 px-4 bg-[#3A3A3A] overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-20 w-40 h-40 rounded-full border border-[#C9A84C]/30"></div>
                    <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full border border-[#C9A84C]/20"></div>
                </div>
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <FadeIn direction="none" delay={200}>
                        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C9A84C] block mb-4">
                        </span>
                    </FadeIn>
                    <FadeIn delay={400}>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white mb-6">
                            Nossos Procedimentos
                        </h1>
                    </FadeIn>
                    <FadeIn delay={600}>
                        <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                            Conheça todos os procedimentos realizados pela Dra. Melissa Tamayo, com técnica refinada e foco em resultados transformadores.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Services List */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    {services.map((service, idx) => (
                        <div
                            key={service.id}
                            id={service.id}
                            className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center mb-28 last:mb-0 scroll-mt-24 ${idx % 2 !== 0 ? 'md:direction-rtl' : ''
                                }`}
                        >
                            {/* Image — alternates sides */}
                            <div className={`relative ${idx % 2 !== 0 ? 'md:order-2' : ''}`}>
                                <FadeIn direction={idx % 2 !== 0 ? 'right' : 'left'}>
                                    <div className="overflow-hidden rounded-sm shadow-lg">
                                        <img loading="lazy" decoding="async"
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-[350px] md:h-[420px] object-cover hover:scale-105 transition-transform duration-700"
                                            style={{
                                              imageRendering: 'auto',
                                              filter: 'contrast(1.08) saturate(1.1) brightness(1.02)',
                                              transform: 'translateZ(0)',
                                              backfaceVisibility: 'hidden',
                                            }}
                                        />
                                    </div>
                                    {/* Gold accent */}
                                    <div className={`absolute -bottom-3 ${idx % 2 !== 0 ? '-right-3 border-r-2 border-b-2' : '-left-3 border-l-2 border-b-2'} w-16 h-16 border-[#C9A84C]/25 hidden md:block`}></div>
                                </FadeIn>
                            </div>

                            {/* Content */}
                            <div className={`flex flex-col justify-center ${idx % 2 !== 0 ? 'md:order-1' : ''}`}>
                                <FadeIn direction={idx % 2 !== 0 ? 'left' : 'right'} delay={150}>
                                    {/* Number */}
                                    <span className="text-6xl font-light text-[#C9A84C]/15 leading-none mb-4">
                                        {String(idx + 1).padStart(2, '0')}
                                    </span>

                                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#2C2C2C] mb-3">
                                        {service.title}
                                    </h2>
                                    <p className="text-sm uppercase tracking-[0.12em] text-[#C9A84C] font-medium mb-6">
                                        {service.subtitle}
                                    </p>
                                    <p className="text-[#6B6B6B] text-base leading-relaxed mb-8">
                                        {service.description}
                                    </p>

                                    {/* Highlights */}
                                    <ul className="space-y-3 mb-8">
                                        {service.highlights.map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-sm text-[#2C2C2C]">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] flex-shrink-0"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    <button
                                        onClick={onOpenContact}
                                        className="bg-[#C9A84C] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#A07832] transition-colors"
                                    >
                                        Agende sua Consulta
                                    </button>
                                </FadeIn>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-20 px-4 bg-[#FAF7F4]">
                <div className="max-w-3xl mx-auto text-center">
                    <FadeIn direction="none">
                        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C9A84C] block mb-4">
                            Próximo Passo
                        </span>
                    </FadeIn>
                    <FadeIn delay={150}>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#2C2C2C] mb-6">
                            Agende sua Avaliação
                        </h2>
                    </FadeIn>
                    <FadeIn delay={300}>
                        <p className="text-[#6B6B6B] text-base leading-relaxed mb-10">
                            Cada paciente é único. Agende uma consulta para que a Dra. Melissa avalie seu caso e planeje o melhor tratamento para você.
                        </p>
                        <button
                            onClick={onOpenContact}
                            className="bg-[#C9A84C] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#A07832] transition-colors"
                        >
                            Agende sua Consulta
                        </button>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;
