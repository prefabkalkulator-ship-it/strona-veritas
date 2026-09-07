import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    ShieldCheck, ImagePlay, CalendarClock, Lock, Calculator, Rocket, PlayCircle, BookOpen, FileCheck, Snowflake,
    Zap, LayoutTemplate, Folder, ArrowRight
} from 'lucide-react';

declare global {
    interface Window {
        gtag: any;
    }
}

interface ControlPanelProps {
    onTrigger: (type: string, payload: string) => void;
}



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
            icon: <Zap className="w-5 h-5 md:w-8 md:h-8 text-[#00C853]" />,
            label: 'Ekspert OZE',
            subLabel: 'Wirtualny Asystent',
            action: 'NAVIGATE_OZE',
            isGold: false
        },
        {
            id: 'keept',
            icon: (
                <div className="relative flex items-center justify-center w-8 h-8">
                    <Folder className="w-full h-full text-yellow-500 fill-yellow-500/20" />
                    <span className="absolute text-[10px] font-black text-white italic pt-1">K</span>
                </div>
            ),
            label: 'Veritas Keept',
            subLabel: 'Finanse & AI',
            action: 'NAVIGATE_KEEPT',
            disabled: false
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

        if (tile.action === 'NAVIGATE_KEEPT') {
            navigate('/keept');
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

            </div>

            {/* SEKCJA 2: Content (Scrollable) */}
            <div className="flex-1 min-h-0 relative z-10">
                <div className="h-full w-full overflow-y-auto p-3 scrollbar-hide md:p-6 md:flex md:flex-col">



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

                            {/* Wide EVA tile mobile */}
                            <button
                                onClick={() => navigate('/eva')}
                                className="w-full p-3 rounded-xl bg-gradient-to-r from-[#171b2b] via-[#241f17] to-[#171b2b] border border-[#ca8a3e]/60 hover:border-[#ca8a3e] hover:shadow-[0_0_15px_rgba(202,138,62,0.3)] flex items-center justify-between transition-all group cursor-pointer"
                            >
                                <div className="flex items-center gap-2.5">
                                    <div className="w-9 h-9 rounded-lg bg-[#ca8a3e]/15 border border-[#ca8a3e]/30 flex items-center justify-center p-1 shrink-0">
                                        <img src="/eva-headset-gold.png" alt="EVA" className="w-full h-full object-contain" />
                                    </div>
                                    <div className="text-left">
                                        <div className="flex items-center gap-1.5">
                                            <span className="text-xs font-bold text-amber-100">EasyVoiceAssistant</span>
                                            <span className="text-[8px] font-bold uppercase tracking-wider px-1 py-0.5 rounded bg-[#ca8a3e]/25 text-[#ca8a3e] border border-[#ca8a3e]/40">AI Voice</span>
                                        </div>
                                        <span className="text-[9px] font-mono text-slate-400 block">Wirtualna Recepcja i Kalendarz 24/7</span>
                                    </div>
                                </div>
                                <ArrowRight size={16} className="text-[#ca8a3e] shrink-0" />
                            </button>
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

                            {/* Wide EVA tile desktop */}
                            <button
                                onClick={() => navigate('/eva')}
                                className="w-full mt-2.5 p-3 rounded-xl bg-gradient-to-r from-[#171b2b] via-[#241f17] to-[#171b2b] border border-[#ca8a3e]/60 hover:border-[#ca8a3e] hover:shadow-[0_0_20px_rgba(202,138,62,0.3)] flex items-center justify-between transition-all group cursor-pointer"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-lg bg-[#ca8a3e]/15 border border-[#ca8a3e]/30 flex items-center justify-center p-1 group-hover:scale-110 transition-transform shrink-0">
                                        <img src="/eva-headset-gold.png" alt="EVA" className="w-full h-full object-contain" />
                                    </div>
                                    <div className="text-left">
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs font-bold text-amber-100 group-hover:text-amber-300 transition-colors">EasyVoiceAssistant</span>
                                            <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#ca8a3e]/25 text-[#ca8a3e] border border-[#ca8a3e]/40">Głos AI 24/7</span>
                                        </div>
                                        <span className="text-[10px] font-mono text-slate-400 block mt-0.5">Wirtualna Recepcja i Rezerwacje • Bez Zmiany Numeru</span>
                                    </div>
                                </div>
                                <div className="text-[#ca8a3e] group-hover:translate-x-1 transition-transform ml-2 shrink-0">
                                    <ArrowRight size={16} />
                                </div>
                            </button>
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
