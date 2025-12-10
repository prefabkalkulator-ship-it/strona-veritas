import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ControlPanel from './ControlPanel';
import ChatArea from './ChatArea';

const Dashboard = () => {
    // Start: Otwarty
    const [isPanelOpen, setIsPanelOpen] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();

    // Gesty
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    // Auto-otwieranie na desktopie
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setIsPanelOpen(true);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // --- NOWA LOGIKA: OBSŁUGA LINKÓW ZEWNĘTRZNYCH ---
    useEffect(() => {
        const action = searchParams.get('action');
        if (action === 'demo') {
            console.log("Deep link detected: Demo Request");

            // 1. Uruchom bota (małe opóźnienie dla pewności załadowania)
            setTimeout(() => {
                const event = new CustomEvent('bot-trigger', {
                    detail: { type: 'VERITAS_TRIGGER', payload: 'SHOW_ORDER_DEMO' }
                });
                window.dispatchEvent(event);
            }, 500);

            // 2. Na mobile zwiń panel, żeby pokazać czat
            if (window.innerWidth < 768) setIsPanelOpen(false);

            // 3. Wyczyść URL
            setSearchParams({});
        }
    }, [searchParams, setSearchParams]);

    // --- LOGIKA GESTÓW ---
    const minSwipeDistance = 50;

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientY);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientY);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isSwipeUp = distance > minSwipeDistance;
        const isSwipeDown = distance < -minSwipeDistance;

        if (window.innerWidth < 768) {
            if (isSwipeUp) setIsPanelOpen(false);
            if (isSwipeDown) setIsPanelOpen(true);
        }
    };

    const handleTrigger = (type: string, payload: string) => {
        // Na mobile po kliknięciu zwiń panel
        if (window.innerWidth < 768) setIsPanelOpen(false);
        const event = new CustomEvent('bot-trigger', { detail: { type, payload } });
        window.dispatchEvent(event);
    };

    return (
        <div className="flex flex-col md:flex-row h-[100dvh] bg-[#1a233b] text-white overflow-hidden relative">

            {/* --- LEWY PANEL --- */}
            <div
                className={`
                    relative w-full md:w-1/3 flex-none overflow-hidden
                    transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) shadow-2xl z-20
                    ${isPanelOpen ? 'h-[45vh] md:h-full' : 'h-[60px] md:h-full'}
                `}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >
                <ControlPanel onTrigger={handleTrigger} />

                {/* UCHWYT (HANDLE BAR) */}
                <div
                    className="md:hidden absolute bottom-0 left-0 w-full h-8 bg-[#24304a] border-t border-white/5 flex items-center justify-center cursor-pointer z-50"
                    onClick={() => setIsPanelOpen(!isPanelOpen)}
                >
                    <div className={`w-12 h-1 rounded-full transition-colors ${isPanelOpen ? 'bg-white/20' : 'bg-cyan-400 shadow-glow'}`} />
                </div>
            </div>

            {/* --- PRAWY OBSZAR (BOT) --- */}
            <div className="flex-1 h-full relative z-10 bg-gray-50">
                <ChatArea />
            </div>
        </div>
    );
};

export default Dashboard;
