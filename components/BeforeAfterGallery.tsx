
import React, { useState, useRef, useCallback, useEffect } from 'react';
import FadeIn from './FadeIn';

interface BeforeAfterPair {
    id: string;
    label: string;
    before: string;
    after: string;
    landscape?: boolean;
}

// Cada par: before = "IMAGEM_01.webp", after = "IMAGEM_01_1.webp"
const pairs: BeforeAfterPair[] = [
    { id: '1', label: 'Procedimento 01', before: '/images/photos/IMAGEM_01.webp', after: '/images/photos/IMAGEM_01_1.webp' },
    { id: '2', label: 'Procedimento 02', before: '/images/photos/IMAGEM_02.webp', after: '/images/photos/IMAGEM_02_1.webp' },
    { id: '3', label: 'Procedimento 03', before: '/images/photos/IMAGEM_03.webp', after: '/images/photos/IMAGEM_03_1.webp' },
    { id: '4', label: 'Procedimento 04', before: '/images/photos/IMAGEM_04.webp', after: '/images/photos/IMAGEM_04_1.webp' },

];


// ——————————————————————————————————————————————
// Componente do slider de uma imagem
// ——————————————————————————————————————————————
interface SliderProps {
    before: string;
    after: string;
    landscape?: boolean;
}

const BeforeAfterSlider: React.FC<SliderProps> = ({ before, after, landscape }) => {
    const [position, setPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const getNewPosition = useCallback((clientX: number) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;
        const newPos = ((clientX - rect.left) / rect.width) * 100;
        setPosition(Math.max(0, Math.min(100, newPos)));
    }, []);

    // Mouse
    const onMouseDown = () => setIsDragging(true);
    const onMouseMove = useCallback((e: MouseEvent) => {
        if (!isDragging) return;
        getNewPosition(e.clientX);
    }, [isDragging, getNewPosition]);
    const onMouseUp = useCallback(() => setIsDragging(false), []);

    // Touch
    const onTouchStart = () => setIsDragging(true);
    const onTouchMove = useCallback((e: TouchEvent) => {
        if (!isDragging) return;
        getNewPosition(e.touches[0].clientX);
    }, [isDragging, getNewPosition]);
    const onTouchEnd = useCallback(() => setIsDragging(false), []);

    useEffect(() => {
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
        window.addEventListener('touchmove', onTouchMove, { passive: true });
        window.addEventListener('touchend', onTouchEnd);
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
            window.removeEventListener('touchmove', onTouchMove);
            window.removeEventListener('touchend', onTouchEnd);
        };
    }, [onMouseMove, onMouseUp, onTouchMove, onTouchEnd]);

    return (
        <div
            ref={containerRef}
            className={`relative w-full ${landscape ? 'aspect-video' : 'aspect-[4/5] md:aspect-[3/4]'} overflow-hidden rounded-2xl select-none cursor-col-resize shadow-lg`}
            onMouseDown={onMouseDown}
            onTouchStart={onTouchStart}
        >
            {/* Imagem DEPOIS (camada de baixo — 100% visível) */}
            <img
                src={after}
                alt="Depois"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                draggable={false}
            />

            {/* Imagem ANTES (camada de cima — cortada via clip-path, sem reflow) */}
            <img
                src={before}
                alt="Antes"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
                draggable={false}
            />

            {/* Divisor */}
            <div
                className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_8px_rgba(0,0,0,0.4)]"
                style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
            >
                {/* Handle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 bg-white rounded-full shadow-xl flex items-center justify-center gap-0.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[#2C2C2C]">
                        <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[#2C2C2C]">
                        <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>

            {/* Labels ANTES / DEPOIS */}
            <span className="absolute bottom-3 left-3 text-xs font-semibold uppercase tracking-widest text-white bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full pointer-events-none">
                Antes
            </span>
            <span className="absolute bottom-3 right-3 text-xs font-semibold uppercase tracking-widest text-white bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full pointer-events-none">
                Depois
            </span>
        </div>
    );
};

// ——————————————————————————————————————————————
// Galeria principal
// ——————————————————————————————————————————————
const BeforeAfterGallery: React.FC = () => {
    const [active, setActive] = useState(0);

    return (
        <div className="mt-20">
            <FadeIn direction="none">
                <div className="text-center mb-12">
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C9A84C] block mb-3">
                        Resultados Reais
                    </span>
                    <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-[#2C2C2C]">
                        Antes &amp; Depois
                    </h3>
                    <p className="text-[#6B6B6B] text-sm mt-3 max-w-md mx-auto">
                        Arraste o divisor para comparar os resultados de cada procedimento.
                    </p>
                </div>
            </FadeIn>

            <FadeIn delay={150}>
                {/* Slider ativo */}
                <div className={`${pairs[active].landscape ? 'max-w-2xl' : 'max-w-sm'} mx-auto mb-6`}>
                    <BeforeAfterSlider
                        key={active}
                        before={pairs[active].before}
                        after={pairs[active].after}
                        landscape={pairs[active].landscape}
                    />
                </div>

                {/* Miniaturas para selecionar o par */}
                <div className="flex items-center justify-center gap-3 flex-wrap mt-4">
                    {pairs.map((pair, idx) => (
                        <button
                            key={pair.id}
                            onClick={() => setActive(idx)}
                            className={`relative w-14 h-14 md:w-16 md:h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${active === idx
                                ? 'border-[#C9A84C] scale-110 shadow-md'
                                : 'border-transparent opacity-60 hover:opacity-90'
                                }`}
                        >
                            <img
                                src={pair.before}
                                alt={`Miniatura ${pair.label}`}
                                className="w-full h-full object-cover"
                            />
                            <span className="absolute inset-0 flex items-end justify-center pb-1">
                                <span className="text-[9px] font-bold text-white bg-black/50 px-1 rounded">
                                    {String(idx + 1).padStart(2, '0')}
                                </span>
                            </span>
                        </button>
                    ))}
                </div>
            </FadeIn>
        </div>
    );
};

export default BeforeAfterGallery;
