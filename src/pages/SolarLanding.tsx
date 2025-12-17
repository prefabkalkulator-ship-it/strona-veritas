import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    FileText, Zap,
    X, Play, MessageSquare, Download, ChevronLeft,
    Filter, MonitorPlay, CalendarCheck, Volume2, Square
} from 'lucide-react';

const SolarLanding = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsChatOpen(false);
                setIsVideoOpen(false);
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const [playingIndex, setPlayingIndex] = useState<number | null>(null);

    const speakText = (text: string, index: number) => {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel(); // Always stop previous

            if (playingIndex === index) {
                // If clicking same, just stop
                setPlayingIndex(null);
                return;
            }

            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'pl-PL';
            utterance.onend = () => setPlayingIndex(null);

            setPlayingIndex(index);
            window.speechSynthesis.speak(utterance);
        }
    };

    const knowledgeBaseItems = [
        {
            title: "Finanse i Dotacje 2025",
            desc: "Wykaz Aktów Prawnych i Norm Technicznych",
            link: "/demo-assets/OZE Finanse, Dotacje i Opłacalność Wykaz Aktów Prawnych i Norm Technicznych.pdf"
        },
        {
            title: "Standardy Techniczne",
            desc: "Urządzenia i Standardy Techniczne",
            link: "/demo-assets/OZE Urządzenia i Standardy Techniczne.pdf"
        },
        {
            title: "Katalog i Cennik",
            desc: "Syntetyczny Cennik Usług i Komponentów",
            link: "/demo-assets/OZE Syntetyczny Cennik.pdf"
        },
        {
            title: "Baza FAQ",
            desc: "Najczęściej Zadawane Pytania Inwestorów",
            link: "/demo-assets/OZE FAQ.pdf"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-900 relative">

            {/* Top Left Back Link */}
            <div className="absolute top-6 left-6 z-50">
                <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-black/30">
                    <ChevronLeft size={16} />
                    <span className="text-sm font-medium">Wróć do Strony Głównej</span>
                </Link>
            </div>

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-emerald-900 to-emerald-700 text-white py-24 sm:py-32">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 right-0 w-64 h-64 bg-green-300 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/50 border border-emerald-500/30 text-emerald-100 text-sm mb-6 backdrop-blur-sm">
                            <Zap size={16} className="text-yellow-400" />
                            <span>Nowa generacja doradztwa OZE</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            Twój Wirtualny <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-200">Ekspert OZE</span>
                        </h1>
                        <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
                            Wykorzystaj sztuczną inteligencję do optymalizacji sprzedaży Twoich usług OZE. Analiza, dobór, i wsparcie 24/7.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => setIsChatOpen(true)}
                                className="px-8 py-4 bg-white text-emerald-800 font-bold rounded-xl hover:bg-emerald-50 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
                            >
                                Zobacz Demo
                                <MessageSquare size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button
                                onClick={() => setIsVideoOpen(true)}
                                className="px-8 py-4 bg-emerald-800/50 text-white font-semibold rounded-xl hover:bg-emerald-800/70 border border-emerald-600 transition-all backdrop-blur-sm flex items-center justify-center gap-2"
                            >
                                <Play size={18} />
                                Odkryj Architekturę Systemu
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Możliwości (Capabilities) Section - B2B Focus */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Dlaczego Twój biznes tego potrzebuje?</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Kompleksowe narzędzie wspierające Cię na każdym etapie inwestycji w odnawialne źródła energii.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Feature 1 */}
                        <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-all group relative">
                            <button
                                onClick={() => speakText("Uszczelnienie Lejka Sprzedaży. Tradycyjna strona to pasywna wizytówka – 98% klientów wchodzi i wychodzi bez kontaktu. To strata Twojego budżetu. Nasz Asystent aktywnie zaczepia, bada potrzeby i nie pozwala klientowi odejść bez odpowiedzi. Zamieniamy ruch na stronie w realne leady.", 1)}
                                className="absolute top-4 right-4 p-2 text-emerald-400 hover:text-emerald-600 hover:bg-emerald-100 rounded-full transition-colors"
                                title={playingIndex === 1 ? "Zatrzymaj" : "Odsłuchaj tekst"}
                            >
                                {playingIndex === 1 ? <Square size={20} fill="currentColor" /> : <Volume2 size={20} />}
                            </button>
                            <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 text-emerald-600 group-hover:scale-110 transition-transform">
                                <Filter size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Uszczelnienie Lejka Sprzedaży</h3>
                            <p className="text-gray-600">
                                Tradycyjna strona to pasywna wizytówka – 98% klientów wchodzi i wychodzi bez kontaktu. To strata Twojego budżetu. Nasz Asystent aktywnie zaczepia, bada potrzeby i nie pozwala klientowi odejść bez odpowiedzi. Zamieniamy ruch na stronie w realne leady.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-all group relative">
                            <button
                                onClick={() => speakText("Showroom w Oknie Czatu. Klienci kupują oczami. Zamiast nudnych tabel, Asystent prezentuje Twoje produkty w interaktywnych karuzelach i wideo. Buduje to natychmiastowe zaufanie i pozycjonuje Cię jako lidera. Odpowiedzi oparte o Twoje cenniki PDF gwarantują bezpieczeństwo i precyzję.", 2)}
                                className="absolute top-4 right-4 p-2 text-emerald-400 hover:text-emerald-600 hover:bg-emerald-100 rounded-full transition-colors"
                                title={playingIndex === 2 ? "Zatrzymaj" : "Odsłuchaj tekst"}
                            >
                                {playingIndex === 2 ? <Square size={20} fill="currentColor" /> : <Volume2 size={20} />}
                            </button>
                            <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 text-emerald-600 group-hover:scale-110 transition-transform">
                                <MonitorPlay size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Showroom w Oknie Czatu</h3>
                            <p className="text-gray-600">
                                Klienci kupują oczami. Zamiast nudnych tabel, Asystent prezentuje Twoje produkty w interaktywnych karuzelach i wideo. Buduje to natychmiastowe zaufanie i pozycjonuje Cię jako lidera. Odpowiedzi oparte o Twoje cenniki PDF gwarantują bezpieczeństwo i precyzję.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-all group relative">
                            <button
                                onClick={() => speakText("Audyty Umawiane na Pilocie. Usuwamy bariery kontaktu. Dzięki obsłudze głosowej klient może rozmawiać z botem jak z człowiekiem. System wstępnie kwalifikuje klienta, sprawdza lokalizację i automatycznie umawia audyt w Twoim kalendarzu. Dostajesz gotowy temat, a nie zimny telefon.", 3)}
                                className="absolute top-4 right-4 p-2 text-emerald-400 hover:text-emerald-600 hover:bg-emerald-100 rounded-full transition-colors"
                                title={playingIndex === 3 ? "Zatrzymaj" : "Odsłuchaj tekst"}
                            >
                                {playingIndex === 3 ? <Square size={20} fill="currentColor" /> : <Volume2 size={20} />}
                            </button>
                            <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 text-emerald-600 group-hover:scale-110 transition-transform">
                                <CalendarCheck size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Audyty Umawiane na Pilocie</h3>
                            <p className="text-gray-600">
                                Usuwamy bariery kontaktu. Dzięki obsłudze głosowej klient może rozmawiać z botem jak z człowiekiem. System wstępnie kwalifikuje klienta, sprawdza lokalizację i automatycznie umawia audyt w Twoim kalendarzu. Dostajesz gotowy temat, a nie zimny telefon.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Baza Wiedzy (Updated Grid) Section */}
            <section className="py-20 bg-emerald-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="mb-16 text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 text-emerald-600 font-semibold mb-4 bg-emerald-100/50 px-4 py-1 rounded-full">
                            <FileText size={20} />
                            <span>Baza Wiedzy</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Potęga Twoich Danych</h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Ten Wirtualny Ekspert działa w oparciu o zaledwie 4 poniższe pliki PDF. Wyobraź sobie, jak potężne narzędzie sprzedażowe stworzymy, gdy zintegrujemy ten silnik z Twoją stroną i zasilimy go pełną ofertą, cennikami oraz wiedzą Twoich najlepszych handlowców.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {knowledgeBaseItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-emerald-100 flex flex-col group"
                            >
                                <div className="w-10 h-10 bg-emerald-100/50 rounded-lg flex items-center justify-center text-emerald-600 mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                    <FileText size={20} />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-500 mb-4 flex-grow">{item.desc}</p>
                                <div className="flex items-center text-emerald-600 text-sm font-medium mt-auto group-hover:underline">
                                    <Download size={16} className="mr-2" />
                                    Pobierz PDF
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer Simple */}
            <footer className="bg-gray-900 text-gray-400 py-12 text-center text-sm">
                <p>&copy; {new Date().getFullYear()} Veritas OZE. Wszelkie prawa zastrzeżone.</p>
            </footer>

            {/* Floating Action Button */}
            <button
                onClick={() => setIsChatOpen(true)}
                className="fixed bottom-8 right-8 w-16 h-16 bg-emerald-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-emerald-500 hover:scale-105 transition-all z-40"
            >
                <MessageSquare size={28} />
            </button>

            {/* Chat Modal Overlay */}
            {isChatOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8 animate-in fade-in duration-200">
                    {/* 1. Wrapper Relatywny dla pozycjonowania przycisku X */}
                    <div className="relative w-full h-full max-w-7xl max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200">

                        {/* 2. Przycisk Zamknięcia (X) - WYCIĄGNIĘTY POZA IFRAME */}
                        {/* Jest absolutnie pozycjonowany względem wrappera, ale z ujemnym marginesem, żeby nie zasłaniał treści */}
                        <button
                            onClick={() => setIsChatOpen(false)}
                            className="absolute -top-10 right-0 md:-right-10 md:top-0 text-white hover:text-cyan-400 transition-colors p-2"
                            aria-label="Zamknij"
                        >
                            <X size={32} />
                        </button>

                        {/* 3. Kontener Iframe - BEZ PADDINGU, BEZ TŁA */}
                        {/* overflow-hidden i rounded-2xl przycinają rogi iframe'a */}
                        <div className="w-full h-full bg-transparent rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                            <iframe
                                src="https://veritas-oze-solar-1027267934206.europe-central2.run.app/"
                                title="Wirtualny Ekspert OZE"
                                className="w-full h-full border-none bg-white" // bg-white w iframe zapobiega mignięciu
                                allow="microphone; geolocation; camera"
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* Video Modal Overlay */}
            {isVideoOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
                    <div className="w-full max-w-5xl aspect-video bg-black rounded-2xl shadow-2xl relative overflow-hidden ring-1 ring-white/20">
                        <button
                            onClick={() => setIsVideoOpen(false)}
                            className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-white/20 backdrop-blur-sm transition-colors"
                        >
                            <X size={24} />
                        </button>
                        <div className="w-full h-full flex items-center justify-center flex-col text-white">
                            <Play size={64} className="mb-4 opacity-50" />
                            <p className="text-xl font-medium">Video Demo Placeholder</p>
                            <p className="text-white/50 text-sm mt-2">YouTube / Vimeo Embed</p>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default SolarLanding;
