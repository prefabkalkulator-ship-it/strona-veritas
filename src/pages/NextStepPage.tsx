import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    LayoutTemplate, FileQuestion, Bot, Sparkles, Volume2, Square,
    ChevronLeft, FileText, Database, ShieldCheck, ShoppingBag
} from 'lucide-react';

const NextStepPage = () => {
    const [playingIndex, setPlayingIndex] = useState<number | null>(null);

    const speakText = (text: string, index: number) => {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            if (playingIndex === index) {
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

    // Stop speaking when leaving component
    useEffect(() => {
        return () => {
            if ('speechSynthesis' in window) {
                window.speechSynthesis.cancel();
            }
        };
    }, []);

    return (
        <div className="min-h-screen bg-[#050510] font-sans text-gray-100 relative selection:bg-purple-500/30">

            {/* Top Left Back Link */}
            <div className="absolute top-6 left-6 z-50">
                <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors bg-black/40 px-4 py-2 rounded-full backdrop-blur-md border border-white/10 hover:border-blue-500/50">
                    <ChevronLeft size={16} />
                    <span className="text-sm font-medium">Dashboard</span>
                </Link>
            </div>

            {/* SEKCJA A: HERO (Split Screen) */}
            <section className="relative min-h-[90vh] flex flex-col pt-24 pb-12">
                <div className="container mx-auto px-4 text-center mb-12 relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-xs mb-6 backdrop-blur-sm uppercase tracking-widest font-mono">
                        <LayoutTemplate size={14} />
                        <span>Veritas AI Lab Experiment</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight max-w-5xl mx-auto bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-white">
                        Twoja strona www to ślepa uliczka? <br className="hidden md:block" />
                        Zmień ją w <span className="text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]">NextStep Web</span>.
                    </h1>
                    <h2 className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        Pierwsza w Polsce platforma Agentic AI. Widoczna dla Google AI, pracuje z klientem 24/7.
                        Zamiast formularza – rozmowa. Zamiast czekania – gotowa oferta.
                    </h2>
                </div>

                <div className="container mx-auto px-4 flex-1 flex flex-col md:flex-row gap-4 md:gap-8 max-w-6xl">
                    {/* LEWA STRONA (OLD) */}
                    <div className="flex-1 bg-gray-900/50 rounded-2xl border border-gray-800 p-8 flex flex-col items-center justify-center text-center opacity-70 hover:opacity-100 transition-opacity group grayscale hover:grayscale-0">
                        <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-900/30 transition-colors">
                            <FileQuestion size={40} className="text-gray-500 group-hover:text-red-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-400 mb-2 group-hover:text-red-300">Twoja obecna strona</h3>
                        <p className="text-gray-600 text-sm uppercase tracking-widest font-mono mb-4">Ślepa Uliczka</p>
                        <ul className="text-gray-500 text-sm space-y-2 text-left">
                            <li>❌ Klient wchodzi i wychodzi</li>
                            <li>❌ Formularz kontaktowy = czarna dziura</li>
                            <li>❌ Google AI widzi tylko "tekst"</li>
                        </ul>
                    </div>

                    {/* PRAWA STRONA (NEW) */}
                    <div className="flex-1 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl border border-blue-500/50 p-8 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-[0_0_30px_rgba(59,130,246,0.15)] group">
                        <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="w-20 h-20 bg-blue-900/50 rounded-full flex items-center justify-center mb-6 border border-blue-400/30 shadow-lg shadow-blue-500/20">
                            <Bot size={40} className="text-blue-300" />
                            <Sparkles size={20} className="text-purple-400 absolute ml-8 -mt-8 animate-pulse" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">NextStep Web</h3>
                        <p className="text-blue-400 text-sm uppercase tracking-widest font-mono mb-4">Aktywna Sprzedaż</p>
                        <ul className="text-slate-300 text-sm space-y-2 text-left relative z-10">
                            <li className="flex items-center gap-2"><span className="text-green-400">✔</span> Przejmuje inicjatywę w rozmowie</li>
                            <li className="flex items-center gap-2"><span className="text-green-400">✔</span> Karmi roboty Google danymi</li>
                            <li className="flex items-center gap-2"><span className="text-green-400">✔</span> Sprzedaje, gdy Ty śpisz</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* SEKCJA B: FILARY TRANSFORMACJI */}
            <section className="py-24 bg-black/30">
                <div className="container mx-auto px-4 max-w-7xl">
                    <h2 className="text-3xl font-bold text-center mb-16 uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-600">
                        Trzy Filary Architektury 2.0
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Filar 1 */}
                        <div className="p-8 rounded-2xl bg-[#0F111A] border border-blue-900/30 hover:border-blue-500/50 transition-colors group relative">
                            <button
                                onClick={() => speakText("Google się zmieniło. Nowe algorytmy SearchGPT i AI Overviews ignorują stare strony. NextStep Web to semantyczny szkielet, który 'karmi' roboty Google danymi, a nie tylko tekstem. Dzięki Schema.org AI widzi Twoje ceny i usługi jako twarde dane, a nie zlepek słów. To fundament widoczności w 2025 roku.", 1)}
                                className="absolute top-4 right-4 p-2 text-slate-600 hover:text-blue-400 hover:bg-blue-900/20 rounded-full transition-all"
                                title="Odsłuchaj"
                            >
                                {playingIndex === 1 ? <Square size={20} fill="currentColor" /> : <Volume2 size={20} />}
                            </button>
                            <div className="mb-6 text-blue-500"><Database size={32} /></div>
                            <h3 className="text-xl font-bold mb-4 text-white">Architektura AI-First</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                Google się zmieniło. Nowe algorytmy SearchGPT i AI Overviews ignorują stare strony.
                                NextStep Web to semantyczny szkielet, który "karmi" roboty Google danymi.
                                Dzięki Schema.org AI widzi Twoje ceny i usługi jako twarde dane.
                            </p>
                        </div>

                        {/* Filar 2 */}
                        <div className="p-8 rounded-2xl bg-[#0F111A] border border-purple-900/30 hover:border-purple-500/50 transition-colors group relative">
                            <button
                                onClick={() => speakText("Koniec z laniem wody. Chatboty i klienci skanują stronę w poszukiwaniu konkretów. Stosujemy zasadę 'Odwróconej Piramidy' – odpowiedź jest w nagłówku. Budujemy zaufanie przez 'E-E-A-T' – zaciągamy prawdziwe opinie z Google i Allegro, bo statycznym cytatom nikt już nie wierzy.", 2)}
                                className="absolute top-4 right-4 p-2 text-slate-600 hover:text-purple-400 hover:bg-purple-900/20 rounded-full transition-all"
                                title="Odsłuchaj"
                            >
                                {playingIndex === 2 ? <Square size={20} fill="currentColor" /> : <Volume2 size={20} />}
                            </button>
                            <div className="mb-6 text-purple-500"><ShieldCheck size={32} /></div>
                            <h3 className="text-xl font-bold mb-4 text-white">Treść pod RAG i Zaufanie</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                Koniec z laniem wody. Stosujemy zasadę "Odwróconej Piramidy" – odpowiedź jest w nagłówku.
                                Budujemy zaufanie przez "E-E-A-T" – zaciągamy prawdziwe opinie z Google i Allegro,
                                bo statycznym cytatom nikt już nie wierzy.
                            </p>
                        </div>

                        {/* Filar 3 */}
                        <div className="p-8 rounded-2xl bg-[#0F111A] border border-cyan-900/30 hover:border-cyan-500/50 transition-colors group relative">
                            <button
                                onClick={() => speakText("Polski klient jest specyficzny – nie ufa i się spieszy. Usuwamy każdą przeszkodę. Wdrażamy standardy 'Smart Shopping': Paczkomaty jako domyślna dostawa, BLIK widoczny od razu na mobilu i zakup bez rejestracji. Łatamy dziury, przez które uciekają Twoje pieniądze.", 3)}
                                className="absolute top-4 right-4 p-2 text-slate-600 hover:text-cyan-400 hover:bg-cyan-900/20 rounded-full transition-all"
                                title="Odsłuchaj"
                            >
                                {playingIndex === 3 ? <Square size={20} fill="currentColor" /> : <Volume2 size={20} />}
                            </button>
                            <div className="mb-6 text-cyan-500"><ShoppingBag size={32} /></div>
                            <h3 className="text-xl font-bold mb-4 text-white">Konwersja bez Tarcia</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                Polski klient jest specyficzny. Usuwamy każdą przeszkodę.
                                Wdrażamy standardy "Smart Shopping": Paczkomaty, BLIK widoczny od razu.
                                Łatamy dziury, przez które uciekają Twoje pieniądze.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SEKCJA C: DOWNLOAD */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-900/10 pointer-events-none"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600">
                        <div className="bg-gray-900 rounded-xl p-8 md:p-12">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">Chcesz poznać szczegóły tej technologii?</h2>
                            <p className="text-slate-400 mb-8">Wiedza z tego dokumentu posłużyła do stworzenia NextStep Web.</p>

                            <a
                                href="/demo-assets/raport-szczelny-lejek-2025.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors shadow-lg hover:shadow-blue-500/50"
                            >
                                <FileText size={20} />
                                Pobierz Pełny Raport Strategiczny
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* SEKCJA D: STOPKA */}
            <footer className="py-8 bg-black border-t border-gray-900 text-center font-mono text-xs text-green-500/50 flex flex-col items-center gap-4">
                <p className="animate-pulse text-xl text-cyan-300 drop-shadow-md">
                    STATUS: EKSPERYMENT W TOKU [Veritas Lab]. WYNIKI WKRÓTCE.<span className="animate-blink">_</span>
                </p>
                <a href="mailto:support@veritas-app.com" className="text-slate-500 hover:text-white transition-colors">
                    support@veritas-app.com
                </a>
            </footer>
        </div>
    );
};

export default NextStepPage;
