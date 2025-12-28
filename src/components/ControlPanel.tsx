import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    ShieldCheck, ImagePlay, CalendarClock, Lock, Calculator, Rocket, PlayCircle, BookOpen, FileCheck, Snowflake,
    Zap, FlaskConical, LayoutTemplate
} from 'lucide-react';

declare global {
    interface Window {
        gtag: any;
    }
}

interface ControlPanelProps {
    onTrigger: (type: string, payload: string) => void;
}

const CountdownWidget: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    useEffect(() => {
        const targetDate = new Date(new Date().getFullYear(), 11, 24, 16, 0, 0);
        const calculate = () => {
            const diff = targetDate.getTime() - new Date().getTime();
            if (diff > 0) setTimeLeft({
                days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((diff / 1000 / 60) % 60),
                seconds: Math.floor((diff / 1000) % 60)
            });
        };
        const t = setInterval(calculate, 1000); calculate(); return () => clearInterval(t);
    }, []);

    return (
        <div className="w-full p-2 bg-[#151b2e] border border-cyan-500/20 rounded-lg relative overflow-hidden group flex flex-col items-center justify-center shadow-lg mb-2">
            <p className="text-[9px] sm:text-[10px] text-cyan-200/70 text-center mb-1 uppercase tracking-tighter whitespace-nowrap font-mono w-full overflow-hidden text-ellipsis">
                Do świątecznego paraliżu obsługi klienta zostało:
            </p>
            <div className="flex justify-center items-center space-x-3 font-mono text-cyan-400 text-sm font-bold tracking-widest drop-shadow-[0_0_5px_rgba(34,211,238,0.3)]">
                <div className="flex flex-col items-center"><span>{String(timeLeft.days).padStart(2, '0')}</span><span className="text-[8px] text-cyan-600/80 font-sans">DNI</span></div>
                <span className="text-cyan-700/50 -mt-2">:</span>
                <div className="flex flex-col items-center"><span>{String(timeLeft.hours).padStart(2, '0')}</span><span className="text-[8px] text-cyan-600/80 font-sans">GODZ</span></div>
                <span className="text-cyan-700/50 -mt-2">:</span>
                <div className="flex flex-col items-center"><span>{String(timeLeft.minutes).padStart(2, '0')}</span><span className="text-[8px] text-cyan-600/80 font-sans">MIN</span></div>
            </div>
        </div>
    );
};

const SnowEffect: React.FC = () => {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-20">
            {[...Array(10)].map((_, i) => (
                <div key={i} className="absolute text-white animate-pulse" style={{
                    top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`,
                    animationDuration: `${Math.random() * 3 + 2}s`, opacity: Math.random() * 0.5 + 0.2, transform: `scale(${Math.random() * 0.5 + 0.5})`
                }}><Snowflake size={Math.random() * 10 + 10} /></div>
            ))}
        </div>
    );
};

const ControlPanel: React.FC<ControlPanelProps> = ({ onTrigger }) => {
    const navigate = useNavigate();

    const mainTiles = [
        { id: 'security', icon: <Lock className="w-5 h-5 md:w-8 md:h-8 text-cyan-400" />, label: 'Bezpieczeństwo', subLabel: 'Biznesowe', payload: 'SHOW_SECURITY' },
        { id: 'conversion', icon: <CalendarClock className="w-5 h-5 md:w-8 md:h-8 text-cyan-400" />, label: 'Natychmiastowa', subLabel: 'Konwersja', payload: 'SHOW_CONVERSION' },
        { id: 'visuals', icon: <ImagePlay className="w-5 h-5 md:w-8 md:h-8 text-cyan-400" />, label: 'Wizualna', subLabel: 'Prezentacja', payload: 'SHOW_VISUALS' },
        { id: 'pricing', icon: <ShieldCheck className="w-5 h-5 md:w-8 md:h-8 text-cyan-400" />, label: 'Cennik', subLabel: 'Pakietów', payload: 'SHOW_PRICING' },
        { id: 'roi', icon: <Calculator className="w-5 h-5 md:w-8 md:h-8 text-cyan-400" />, label: 'Policz', subLabel: 'Korzyści', payload: 'SHOW_ROI' },
        { id: 'demo', icon: <Rocket className="w-5 h-5 md:w-8 md:h-8 text-yellow-400" />, label: 'Zamów', subLabel: 'Demo', payload: 'SHOW_ORDER_DEMO', isGold: true }
    ];

    const labTiles = [
        {
            id: 'nextstep',
            icon: <LayoutTemplate className="w-5 h-5 md:w-8 md:h-8 text-blue-400" />,
            label: 'NextStep Web',
            subLabel: 'Eksperyment AI',
            action: 'NAVIGATE_NEXTSTEP',
            isGold: false
        },
        {
            id: 'oze-bot',
            icon: <Zap className="w-5 h-5 md:w-8 md:h-8 text-yellow-400" />,
            label: 'Ekspert OZE',
            subLabel: 'Wirtualny Asystent',
            action: 'NAVIGATE_OZE',
            isGold: false
        },
        {
            id: 'rnd-2',
            icon: <FlaskConical className="w-5 h-5 md:w-8 md:h-8 text-slate-600" />,
            label: 'R&D',
            subLabel: 'Wkrótce...',
            disabled: true
        }
    ];

    const materials = [
        { icon: <PlayCircle className="h-3 w-3" />, label: 'Wideo', path: 'https://youtu.be/FCmDm5Kvv8I', isExternal: true },
        { icon: <BookOpen className="h-3 w-3" />, label: 'Blueprint', path: '/wiedza#blueprint', isExternal: false },
        { icon: <FileCheck className="h-3 w-3" />, label: 'Checklist', path: '/wiedza#checklist', isExternal: false },
    ];

    const handleTileClick = (tile: any, e: React.MouseEvent) => {
        e.stopPropagation();

        if (tile.disabled) return;

        if (tile.action === 'NAVIGATE_OZE') {
            navigate('/ekspert-oze');
            return;
        }

        if (tile.action === 'NAVIGATE_NEXTSTEP') {
            window.location.href = '/nextstep-web/index.html';
            return;
        }

        // Google Ads Conversion Tracking (Existing Logic)
        const isDemoAction = tile.id === 'demo' || tile.payload === 'SHOW_ORDER_DEMO' || tile.label?.toLowerCase().includes('demo');

        if (isDemoAction) {
            if (typeof window.gtag === 'function') {
                window.gtag('event', 'conversion', {
                    'send_to': 'AW-17786098127/uZw-CISjtc0bEM-jiaFC'
                });
                console.log('✅ Google Ads pixel fired');
            } else {
                console.warn('⚠️ Google Ads script not loaded');
            }
        }

        if (tile.payload) {
            onTrigger('VERITAS_TRIGGER', tile.payload);
        }
    };

    return (
        <div className="flex flex-col h-full w-full bg-[#0B1021] relative overflow-hidden pb-8 md:pb-0">
            <SnowEffect />

            {/* SEKCJA 1: Header */}
            <div className="flex-none p-3 flex flex-col items-center gap-1 z-10">
                <h1 className="text-3xl md:text-5xl font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-slate-400 drop-shadow-lg text-center w-full">
                    Veritas AI
                </h1>
                <CountdownWidget />
            </div>

            {/* SEKCJA 2: Content (Scrollable) */}
            <div className="flex-1 min-h-0 relative z-10">
                <div className="h-full w-full overflow-y-auto p-3 scrollbar-hide md:p-6 md:flex md:flex-col">

                    {/* --- DESKTOP ONLY: Świąteczna Promocja --- */}
                    <div className="hidden md:flex flex-col items-center justify-center bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border border-cyan-500/30 p-3 rounded-xl mb-4 text-center shadow-[0_0_15px_rgba(34,211,238,0.1)] w-full flex-none">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-xl">🎄</span>
                            <h3 className="text-cyan-400 font-bold uppercase tracking-wider text-sm">
                                Świąteczna promocja: PAKIET 2: PRO GROWTH (Rekomendowany)
                            </h3>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <span className="text-slate-400">Cena:</span>
                            <span className="text-slate-500 line-through decoration-red-500/50 decoration-2 text-xs">499 PLN</span>
                            <div className="flex flex-col leading-none">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-green-400 font-bold text-lg">399 PLN</span>
                                    <span className="text-slate-400 text-xs">netto / mies.</span>
                                </div>
                                <span className="text-green-400/80 text-[10px] uppercase tracking-wide font-semibold text-right">
                                    (na 6 miesięcy)
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* --- MOBILE VIEW: SECTIONS --- */}
                    <div className="md:hidden flex flex-col gap-6 pb-8">
                        {/* 1. Main Tiles - Horizontal Scroll */}
                        <div className="flex overflow-x-auto gap-3 w-full pb-2 snap-x scrollbar-hide px-1">
                            {mainTiles.map((tile) => (
                                <button
                                    key={tile.id}
                                    onClick={(e) => handleTileClick(tile, e)}
                                    className={`flex-none w-[140px] h-24 flex flex-col items-center justify-center text-center 
                                    rounded-xl snap-center p-1 transition-all duration-300 relative overflow-hidden cursor-pointer group
                                    ${tile.isGold
                                            ? 'bg-[#151b2e] border border-yellow-500/60 shadow-[0_0_15px_rgba(234,179,8,0.2)]'
                                            : 'bg-[#151b2e] border border-white/5 hover:bg-[#1e293b] hover:border-cyan-500/30'
                                        }
                                `}
                                >
                                    <div className="mb-1 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-md">{tile.icon}</div>
                                    <div className="flex flex-col justify-center items-center">
                                        <span className={`text-xs font-bold leading-tight ${tile.isGold ? 'text-yellow-100' : 'text-slate-100'}`}>{tile.label}</span>
                                        <span className={`text-[10px] font-mono mt-0.5 font-medium block ${tile.isGold ? 'text-yellow-400' : 'text-cyan-400/80'}`}>{tile.subLabel}</span>
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* 2. Veritas AI Lab Header & Grid */}
                        <div className="flex flex-col gap-4 px-1">
                            <div className="text-xl font-black uppercase tracking-widest text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] text-center w-full border-t border-cyan-500/30 pt-4">
                                Veritas AI Lab
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                {labTiles.filter(t => !t.disabled).map((tile) => (
                                    <button
                                        key={tile.id}
                                        onClick={(e) => handleTileClick(tile, e)}
                                        className={`h-24 flex flex-col items-center justify-center text-center 
                                        rounded-xl transition-all duration-300 relative overflow-hidden group
                                        bg-[#151b2e] border border-white/5 hover:bg-[#1e293b] hover:border-cyan-500/30 cursor-pointer
                                    `}
                                    >
                                        <div className="mb-1 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-md">{tile.icon}</div>
                                        <div className="flex flex-col justify-center items-center">
                                            <span className="text-xs font-bold leading-tight text-slate-100">{tile.label}</span>
                                            <span className="text-[10px] font-mono mt-0.5 font-medium block text-cyan-400/60">{tile.subLabel}</span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* --- DESKTOP VIEW: SEPARATED SECTIONS --- */}
                    <div className="hidden md:flex flex-col gap-6 w-full">
                        {/* Main Grid */}
                        <div className="grid grid-cols-2 gap-2 w-full">
                            {mainTiles.map((tile) => (
                                <button
                                    key={tile.id}
                                    onClick={(e) => handleTileClick(tile, e)}
                                    className={`flex-none h-28 flex flex-col items-center justify-center text-center 
                                    rounded-xl transition-all duration-300 relative overflow-hidden cursor-pointer group
                                    ${tile.isGold
                                            ? 'bg-[#151b2e] border border-yellow-500/60 shadow-[0_0_15px_rgba(234,179,8,0.2)]'
                                            : 'bg-[#151b2e] border border-white/5 hover:bg-[#1e293b] hover:border-cyan-500/30'
                                        }
                                `}
                                >
                                    <div className="mb-1 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-md">{tile.icon}</div>
                                    <div className="flex flex-col justify-center items-center">
                                        <span className={`text-sm font-bold leading-tight ${tile.isGold ? 'text-yellow-100' : 'text-slate-100'}`}>{tile.label}</span>
                                        <span className={`text-xs font-mono mt-0.5 font-medium block ${tile.isGold ? 'text-yellow-400' : 'text-cyan-400/80'}`}>{tile.subLabel}</span>
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* Veritas AI Lab Section */}
                        <div className="w-full mt-8 mb-4">
                            <div className="text-3xl font-black uppercase tracking-widest text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] text-center w-full border-t border-cyan-500/30 pt-4">
                                Veritas AI Lab
                            </div>
                            <div className="grid grid-cols-3 gap-2 w-full mt-4">
                                {labTiles.map((tile) => (
                                    <button
                                        key={tile.id}
                                        onClick={(e) => handleTileClick(tile, e)}
                                        disabled={tile.disabled}
                                        className={`flex-none h-24 flex flex-col items-center justify-center text-center 
                                        rounded-xl transition-all duration-300 relative overflow-hidden group
                                        ${tile.disabled
                                                ? 'bg-[#151b2e]/50 border border-white/5 opacity-50 cursor-not-allowed'
                                                : 'bg-[#151b2e] border border-white/5 hover:bg-[#1e293b] hover:border-cyan-500/30 cursor-pointer'
                                            }
                                    `}
                                    >
                                        <div className="mb-1 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-md">{tile.icon}</div>
                                        <div className="flex flex-col justify-center items-center">
                                            <span className="text-xs font-bold leading-tight text-slate-100">{tile.label}</span>
                                            <span className="text-[10px] font-mono mt-0.5 font-medium block text-cyan-400/60">{tile.subLabel}</span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SEKCJA 3: Footer (Wyśrodkowana) */}
            <div className="flex-none p-3 flex justify-center items-center gap-4 z-10 bg-[#0B1021] border-t border-gray-800/50">
                {materials.map((item, idx) => (
                    item.isExternal ? (
                        <a key={idx} href={item.path} target="_blank" rel="noopener noreferrer" className="flex items-center text-[10px] md:text-xs text-slate-400 hover:text-cyan-300 transition-colors uppercase tracking-wider font-mono">
                            <span className="mr-1.5 opacity-70">{item.icon}</span>{item.label}
                        </a>
                    ) : (
                        <Link key={idx} to={item.path} className="flex items-center text-[10px] md:text-xs text-slate-400 hover:text-cyan-300 transition-colors uppercase tracking-wider font-mono">
                            <span className="mr-1.5 opacity-70">{item.icon}</span>{item.label}
                        </Link>
                    )
                ))}
                <span className="text-gray-700">|</span>
                <a href="mailto:support@veritas-app.com" className="flex items-center text-[10px] md:text-xs text-slate-400 hover:text-cyan-300 transition-colors uppercase tracking-wider font-mono">
                    support@veritas-app.com
                </a>
            </div>
        </div>
    );
};

export default ControlPanel;
