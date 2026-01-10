import { Link } from 'react-router-dom';
import { Cpu, Camera, Mic, ChevronLeft, Download, Play } from 'lucide-react';

export default function KeeptLanding() {
    return (
        <div className="min-h-screen bg-[#0A0C10] text-white font-sans selection:bg-[#00C853] selection:text-black">

            {/* NAV */}
            <nav className="p-6 flex justify-between items-center max-w-7xl mx-auto">
                <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                    <ChevronLeft size={20} /> Wróć do Labu
                </Link>
                <div className="font-black text-xl tracking-tighter">VERITAS <span className="text-[#00C853]">KEEPT</span></div>
            </nav>

            {/* HERO SECTION */}
            <main className="max-w-6xl mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row items-center gap-12">

                {/* LEWA: TEKST */}
                <div className="flex-1 space-y-8">
                    <div className="inline-block px-3 py-1 rounded-full border border-[#00C853]/30 bg-[#00C853]/10 text-[#00C853] text-xs font-bold tracking-widest uppercase mb-4">
                        Wersja 3.5 Dostępna
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
                        Twój Drugi Mózg <br />
                        <span className="bg-gradient-to-r from-blue-400 via-green-400 to-yellow-400 bg-clip-text text-transparent">
                            do Finansów.
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
                        Skończ z chaosem w paragonach. Skanuj dokumenty, używaj głosu i pozwól AI analizować Twoje wydatki, gwarancje i terminy.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button className="flex items-center gap-3 px-8 py-4 bg-white text-black rounded-2xl font-bold hover:bg-gray-200 transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
                            <Download size={20} />
                            Google Play (Wkrótce)
                        </button>
                        <a href="#video" className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-bold hover:bg-white/10 transition-all">
                            <Play size={20} />
                            Zobacz Demo
                        </a>
                    </div>
                </div>

                {/* PRAWA: MIEJSCE NA TELEFON / WIDEO */}
                <div className="flex-1 relative w-full flex justify-center">
                    <div className="relative w-[300px] h-[600px] bg-black border-4 border-gray-800 rounded-[3rem] shadow-2xl overflow-hidden flex items-center justify-center">
                        {/* PLACEHOLDER NA FILM PIONOWY */}
                        <div id="video" className="absolute inset-0 bg-gray-900 flex flex-col items-center justify-center text-center p-6">
                            <div className="p-4 bg-white/10 rounded-full mb-4 animate-pulse">
                                <Play size={32} className="text-white ml-1" />
                            </div>
                            <p className="text-sm font-bold text-gray-500 uppercase">Miejsce na Twój Film Reklamowy</p>
                            <p className="text-xs text-gray-600 mt-2">(Format 9:16)</p>
                        </div>

                        {/* ODBLASK EKRANU (AFEKT) */}
                        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/10 to-transparent pointer-events-none rounded-[3rem]"></div>
                    </div>
                    {/* GLOW POD TELEFONEM */}
                    <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#00C853]/20 blur-[100px] rounded-full"></div>
                </div>
            </main>

            {/* FEATURES GRID */}
            <section className="bg-[#111] py-20 border-t border-white/5">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
                    <div className="p-8 rounded-3xl bg-[#151720] border border-white/5 hover:border-[#00C853]/30 transition-colors">
                        <Camera className="text-blue-400 mb-4" size={32} />
                        <h3 className="text-xl font-bold mb-2">Skaner ML Kit</h3>
                        <p className="text-gray-400 text-sm">Profesjonalny skaner dokumentów. Automatycznie prostuje zdjęcia, usuwa cienie i poprawia czytelność.</p>
                    </div>
                    <div className="p-8 rounded-3xl bg-[#151720] border border-white/5 hover:border-[#00C853]/30 transition-colors">
                        <Mic className="text-red-400 mb-4" size={32} />
                        <h3 className="text-xl font-bold mb-2">Voice-to-JSON</h3>
                        <p className="text-gray-400 text-sm">Powiedz: "Kupiłem buty za 200 zł". AI zrozumie intencję, przypisze kategorię i doda wpis za Ciebie.</p>
                    </div>
                    <div className="p-8 rounded-3xl bg-[#151720] border border-white/5 hover:border-[#00C853]/30 transition-colors">
                        <Cpu className="text-yellow-400 mb-4" size={32} />
                        <h3 className="text-xl font-bold mb-2">Gemini AI Brain</h3>
                        <p className="text-gray-400 text-sm">Rozumie matematykę rabatów, pilnuje terminów gwarancji i odpowiada na pytania o Twoje wydatki.</p>
                    </div>
                </div>
            </section>

            {/* FOOTER & LINKS */}
            <footer className="py-12 text-center text-gray-500 text-sm border-t border-white/5">
                <p className="mb-4">&copy; 2026 Veritas AI Lab. Wszystkie prawa zastrzeżone.</p>
                <div className="flex justify-center gap-6">
                    <Link to="/keept-privacy" className="hover:text-white transition-colors">Polityka Prywatności</Link>
                    <a href="mailto:support@veritas-app.com" className="hover:text-white transition-colors">Kontakt</a>
                </div>
            </footer>
        </div>
    );
}
