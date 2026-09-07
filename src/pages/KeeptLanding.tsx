import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import {
    ChevronLeft, Globe, Folder, Volume2, VolumeX,
    Smartphone, Play, Shield, Camera,
    MessageSquare, Lock, FileDown, Maximize2,
    Zap, Facebook
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function KeeptLanding() {
    const [isMuted, setIsMuted] = useState(true);
    const iframeRef = useRef<HTMLIFrameElement>(null);

    const { i18n } = useTranslation();

    // 🌍 Dynamic Assets Config (PL/EN)
    const ASSETS_CONFIG = {
        pl: {
            pdf: "/assets/Veritas_Keept_Instrukcja.pdf",
            slidesEmbed: "https://docs.google.com/presentation/d/1MVYzNXO4mCaakfQUFvf72VbA9c2U4t0EgBvhcdOPW0I/embed?start=false&loop=false&delayms=3000&rm=minimal",
            slidesFull: "https://docs.google.com/presentation/d/1MVYzNXO4mCaakfQUFvf72VbA9c2U4t0EgBvhcdOPW0I/present",
            videoId: "4Tmmd8uLyD4"
        },
        en: {
            pdf: "/assets/Veritas_Keept_Instruction.pdf",
            slidesEmbed: "https://docs.google.com/presentation/d/1BYZZ3oXt0Q1yU9s6cb_6_wpve70-Yeo77yX9Ejieqgw/embed?start=false&loop=false&delayms=3000&rm=minimal",
            slidesFull: "https://docs.google.com/presentation/d/1BYZZ3oXt0Q1yU9s6cb_6_wpve70-Yeo77yX9Ejieqgw/present",
            videoId: "wWfLzzK2rIw"
        }
    };

    const isPL = i18n.language?.startsWith('pl');

    const TEXT = {
        back: isPL ? "Wróć do Laboratorium" : "Back to Lab",
        badge_status: isPL ? "WERSJA 2.0" : "VERSION 2.0",
        badge_new: isPL ? "NOWOŚĆ" : "NEW",
        hero_title_1: isPL ? "Twój osobisty asystent finansowy. " : "Your personal financial assistant. ",
        hero_title_accent: isPL ? "Bez wysiłku." : "Zero effort.",
        hero_subtitle: isPL
            ? "Skanowanie paragonów, kontrola subskrypcji i pamięć o gwarancjach. Wszystko wspierane przez zaawansowaną sztuczną inteligencję."
            : "Scan receipts, control subscriptions, and remember warranties. All powered by advanced AI.",

        btn_app_store: "App Store",
        btn_google_play: "Google Play",
        download_soon: isPL ? "Wkrótce" : "Coming soon",
        download_now: isPL ? "Pobierz z" : "Download from",

        features_title: isPL ? "Wszystko, czego potrzebujesz" : "Everything you need",
        f1_title: isPL ? "Strażnik Subskrypcji" : "Subscription Guardian",
        f1_desc: isPL ? "AI znajduje ukryte opłaty i sugeruje tańsze rynkowe alternatywy." : "AI finds hidden fees and suggests cheaper market alternatives.",
        f2_title: isPL ? "Skaner i Głos" : "Scanner & Voice",
        f2_desc: isPL ? "Zrób zdjęcie paragonu lub podyktuj wydatek - my zajmiemy się resztą." : "Take a photo of a receipt or dictate an expense - we'll handle the rest.",
        f3_title: isPL ? "Czat z AI" : "Chat with AI",
        f3_desc: isPL ? "Generuj wykresy i zadawaj pytania o swoje finanse w naturalnym języku." : "Generate charts and ask questions about your finances in natural language.",
        f4_title: isPL ? "Prywatny Sejf" : "Private Vault",
        f4_desc: isPL ? "Całkowicie offline, lokalne szyfrowanie dla wrażliwych dokumentów medycznych/prawnych." : "Completely offline, local encryption for sensitive medical/legal documents.",

        pricing_title: isPL ? "Uczciwy Model Cenowy" : "Fair Pricing Model",
        pricing_main: isPL ? "Zawsze 20 akcji AI co miesiąc za darmo." : "Always 20 free AI actions every month.",
        pricing_sub: isPL ? "Kup pakiety po 50 akcji, które NIGDY nie wygasają. Brak sztywnych abonamentów PRO." : "Buy packs of 50 actions that NEVER expire. No strict PRO subscriptions.",

        download_center_title: isPL ? "Centrum Pobierania" : "Download Center",
        download_manual: isPL ? "Pobierz Instrukcję (PDF)" : "Download Manual (PDF)",
        download_hint: isPL ? "Wgraj tę instrukcję do aplikacji i zapytaj asystenta, jak z niej korzystać!" : "Upload this manual to the app and ask the assistant how to use it!",
        slides_zoom: isPL ? "Otwórz Pełny Ekran" : "Open Fullscreen",

        footer_privacy: isPL ? "Polityka Prywatności" : "Privacy Policy",
        footer_contact: isPL ? "Kontakt" : "Contact",
        footer_disclaimer: isPL ? "Sztuczna inteligencja może popełniać błędy." : "AI can make mistakes.",
        footer_rights: isPL ? "Wszelkie prawa zastrzeżone." : "All rights reserved.",
        cert_pegi: isPL ? "Certyfikat PEGI 3" : "PEGI 3 Certified",
        cert_google: isPL ? "Zweryfikowano przez Google" : "Google Play Approved",
        seo_title: isPL ? "Veritas Keept - Asystent Finansowy AI" : "Veritas Keept - AI Finance Assistant",
        seo_desc: isPL 
            ? "Veritas Keept to Twój inteligentny asystent finansowy AI. Skanuj paragony, zarządzaj subskrypcjami i kontroluj wydatki bez wysiłku. Pobierz teraz!" 
            : "Veritas Keept is your intelligent AI finance assistant. Scan receipts, manage subscriptions, and control expenses effortlessly. Download now!",
        video_title: isPL ? "Instrukcja wideo Keept" : "Keept Video Guide",
        slides_title: isPL ? "Prezentacja funkcji Keept" : "Keept Features Presentation",
    };

    const currentAssets = isPL ? ASSETS_CONFIG.pl : ASSETS_CONFIG.en;

    const toggleLanguage = () => {
        i18n.changeLanguage(isPL ? 'en' : 'pl');
    };

    const toggleMute = () => {
        if (iframeRef.current) {
            const action = isMuted ? 'unMute' : 'mute';
            iframeRef.current.contentWindow?.postMessage(JSON.stringify({
                event: 'command',
                func: action,
                args: []
            }), '*');
            setIsMuted(!isMuted);
        }
    };

    return (
        <div className="min-h-screen bg-[#0A0C10] text-white font-sans selection:bg-[#00C853] selection:text-black overflow-x-hidden">
            <Helmet>
                <html lang={isPL ? "pl" : "en"} />
                <title>{TEXT.seo_title}</title>
                <meta name="description" content={TEXT.seo_desc} />
                <meta property="og:title" content={TEXT.seo_title} />
                <meta property="og:description" content={TEXT.seo_desc} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://veritas-keept.com/ścieżka-do-ładnego-obrazka-promocyjnego.jpg" />
            </Helmet>
            {/* NAV */}
            <div className="w-full border-b border-white/5 bg-[#0A0C10]/80 backdrop-blur-md sticky top-0 z-50">
                <nav className="p-6 flex justify-between items-center max-w-7xl mx-auto">
                    <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-bold group">
                        <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                        {TEXT.back}
                    </Link>

                    {/* LANGUAGE SWITCHER */}
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-xs font-bold text-gray-400 hover:text-[#00C853]"
                    >
                        <Globe size={14} />
                        {i18n.language === 'pl' ? 'EN' : 'PL'}
                    </button>

                    {/* LOGO */}
                    <div className="text-xl tracking-tighter flex items-center gap-3">
                        <div className="relative flex items-center justify-center w-8 h-8">
                            <Folder className="w-full h-full text-yellow-500 fill-yellow-500/20" />
                            <span className="absolute text-[10px] font-black text-white italic pt-1">K</span>
                        </div>
                        <div>
                            <span className="font-normal text-white">VERITAS</span>
                            <span className="font-black ml-1.5 bg-gradient-to-r from-blue-400 via-[#00C853] to-yellow-400 text-transparent bg-clip-text">
                                KEEPT
                            </span>
                        </div>
                    </div>
                </nav>
            </div>

            {/* HERO SECTION */}
            <main className="max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20 relative">
                {/* LEFT: TEXT & BUTTONS */}
                <div className="flex-1 space-y-8 relative z-10 w-full">
                    
                    {/* BADGES */}
                    <div className="flex flex-col items-start gap-3">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00C853]/30 bg-[#00C853]/10 text-[#00C853] text-xs font-bold tracking-widest uppercase">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00C853] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00C853]"></span>
                            </span>
                            {TEXT.badge_status}
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl md:leading-tight lg:text-7xl font-black leading-tight tracking-tight">
                        {TEXT.hero_title_1} <span className="text-[#00C853] drop-shadow-[0_0_15px_rgba(0,200,83,0.6)]">{TEXT.hero_title_accent}</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl font-medium">
                        {TEXT.hero_subtitle}
                    </p>
                    
                    {/* CTA BUTTONS - USING SAFE ICONS */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <a href="#download" className="flex items-center gap-4 px-6 py-4 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 rounded-2xl transition-all hover:scale-105 group">
                            <Smartphone size={32} className="text-white group-hover:text-blue-400 transition-colors" />
                            <div className="text-left">
                                <div className="text-[10px] leading-none text-gray-400 uppercase font-bold tracking-wider mb-1">{TEXT.download_soon}</div>
                                <div className="text-xl font-bold leading-none text-white">{TEXT.btn_app_store}</div>
                            </div>
                        </a>
                        
                        <a href={isPL ? "https://play.google.com/store/apps/details?id=com.veritas.keept&hl=pl" : "https://play.google.com/store/apps/details?id=com.veritas.keept&hl=en"} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 px-6 py-4 bg-[#00C853] hover:bg-[#00E676] border border-[#00C853]/50 rounded-2xl transition-all hover:scale-105 shadow-[0_0_20px_rgba(0,200,83,0.3)] group">
                            <Play size={32} className="text-white fill-white group-hover:scale-110 transition-transform" />
                            <div className="text-left">
                                <div className="text-[10px] leading-none text-green-100 uppercase font-bold tracking-wider mb-1">{TEXT.download_now}</div>
                                <div className="text-xl font-bold leading-none text-white">{TEXT.btn_google_play}</div>
                            </div>
                        </a>
                    </div>

                    {/* TRUST BADGES */}
                    <div className="flex items-center gap-4 pt-4 text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest opacity-80">
                        <span className="flex items-center gap-1.5">
                            <Shield size={14} className="text-[#00C853]" /> 
                            {TEXT.cert_pegi}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Shield size={14} className="text-blue-400" /> 
                            {TEXT.cert_google}
                        </span>
                    </div>
                </div>
                
                {/* RIGHT: PHONE VIDEO MOCKUP */}
                <div className="w-full lg:w-[400px] flex justify-center lg:justify-end relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[500px] bg-[#00C853]/20 blur-[120px] rounded-full -z-10"></div>

                    <div className="relative w-[300px] h-[540px] bg-black rounded-[40px] border-8 border-[#1A1A1A] shadow-2xl overflow-hidden ring-1 ring-white/10 group transform rotate-1 md:rotate-3 hover:rotate-0 transition-transform duration-500">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#1A1A1A] rounded-b-xl z-20"></div>

                        <iframe
                            ref={iframeRef}
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${currentAssets.videoId}?autoplay=1&loop=1&playlist=${currentAssets.videoId}&controls=0&rel=0&modestbranding=1&playsinline=1&mute=1&enablejsapi=1`}
                            title={TEXT.video_title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full object-cover"
                        ></iframe>

                        <button
                            onClick={toggleMute}
                            className="absolute bottom-6 right-6 z-30 bg-black/50 hover:bg-black/80 backdrop-blur-sm text-white p-3 rounded-full transition-all transform hover:scale-110 border border-white/20"
                            title={isMuted ? "Włącz dźwięk" : "Wycisz"}
                        >
                            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                        </button>
                        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
                    </div>
                </div>
            </main>
            
            {/* PRICING SECTION - GREEN GLOW */}
            <section className="relative py-24 border-t border-white/5 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[300px] bg-[#00C853]/15 blur-[120px] rounded-full pointer-events-none"></div>
                
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-[#00C853]/30 bg-[#00C853]/10 text-[#00C853] text-xs font-bold tracking-widest uppercase">
                        <Zap size={14} className="fill-[#00C853]" /> {TEXT.pricing_title}
                    </div>
                    
                    <h2 className="text-3xl md:text-5xl font-black mb-6 text-white drop-shadow-[0_0_15px_rgba(0,200,83,0.3)]">
                        {TEXT.pricing_main}
                    </h2>
                    
                    <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-medium">
                        {TEXT.pricing_sub}
                    </p>
                </div>
            </section>

            {/* BENTO BOX FEATURES GRID */}
            <section className="bg-[#111] py-24 border-t border-white/5 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{TEXT.features_title}</h2>
                    
                    {/* Grid wrapper: 1 col on mobile, 2 cols on md, 3 cols on lg. Auto-rows for consistent height */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]">
                        
                        {/* FEATURE 1: Guardian (Spans 2 cols on large, 1 on mobile) */}
                        <div className="lg:col-span-2 p-8 rounded-[32px] bg-gradient-to-br from-[#1A1C23] to-[#12141A] border border-white/5 hover:border-[#00C853]/30 transition-all group overflow-hidden relative">
                            <div className="relative z-10 h-full flex flex-col justify-end">
                                <div className="w-14 h-14 bg-[#00C853]/10 rounded-2xl flex items-center justify-center mb-6 text-[#00C853] group-hover:scale-110 transition-transform">
                                    <Shield size={28} />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">{TEXT.f1_title}</h3>
                                <p className="text-gray-400 text-lg leading-relaxed max-w-md">{TEXT.f1_desc}</p>
                            </div>
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00C853]/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
                        </div>

                        {/* FEATURE 2: Scanner (Spans 1 col) */}
                        <div className="p-8 rounded-[32px] bg-gradient-to-bl from-[#1A1C23] to-[#12141A] border border-white/5 hover:border-blue-500/30 transition-all group overflow-hidden relative">
                            <div className="relative z-10 h-full flex flex-col justify-end">
                                <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform">
                                    <Camera size={28} />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">{TEXT.f2_title}</h3>
                                <p className="text-gray-400 leading-relaxed">{TEXT.f2_desc}</p>
                            </div>
                        </div>

                        {/* FEATURE 3: Chat with AI (Spans 1 col) */}
                        <div className="p-8 rounded-[32px] bg-gradient-to-tr from-[#1A1C23] to-[#12141A] border border-white/5 hover:border-purple-500/30 transition-all group overflow-hidden relative">
                            <div className="relative z-10 h-full flex flex-col justify-end">
                                <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform">
                                    <MessageSquare size={28} />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">{TEXT.f3_title}</h3>
                                <p className="text-gray-400 leading-relaxed">{TEXT.f3_desc}</p>
                            </div>
                        </div>

                        {/* FEATURE 4: Private Vault (Spans 2 cols on md/lg, 1 on mobile) */}
                        <div className="md:col-span-2 p-8 rounded-[32px] bg-gradient-to-tl from-[#1A1C23] to-[#12141A] border border-white/5 hover:border-orange-500/30 transition-all group overflow-hidden relative">
                            <div className="relative z-10 h-full flex flex-col justify-end">
                                <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6 text-orange-400 group-hover:scale-110 transition-transform">
                                    <Lock size={28} />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">{TEXT.f4_title}</h3>
                                <p className="text-gray-400 text-lg leading-relaxed max-w-md">{TEXT.f4_desc}</p>
                            </div>
                            <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-[80px] translate-y-1/2 translate-x-1/2"></div>
                        </div>

                    </div>
                </div>
            </section>

            {/* DOWNLOAD CENTER */}
            <section id="download" className="py-24 max-w-6xl mx-auto px-6 border-t border-white/5">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] mb-4">{TEXT.download_center_title}</h2>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-center text-center lg:text-left">
                    {/* LEWA - PREZENTACJA */}
                    <div className="lg:col-span-7">
                        <div className="w-full bg-[#151720] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col transform transition hover:scale-[1.01]">
                            <div className="relative w-full aspect-video bg-black overflow-hidden group">
                                <iframe
                                    src={currentAssets.slidesEmbed}
                                    frameBorder="0"
                                    allowFullScreen={true}
                                    title={TEXT.slides_title}
                                    className="absolute top-0 left-0 w-full h-[120%] -mt-[8%]"
                                ></iframe>
                            </div>
                            <div className="bg-[#0A0C10] p-4 flex justify-end items-center border-t border-white/5">
                                <a
                                    href={currentAssets.slidesFull}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 text-sm text-[#00C853] font-bold hover:text-white transition-colors bg-[#00C853]/10 px-4 py-2 rounded-xl border border-[#00C853]/20"
                                >
                                    <Maximize2 size={16} />
                                    {TEXT.slides_zoom}
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* PRAWA - PDF i INSTUKCJA */}
                    <div className="lg:col-span-5 flex flex-col items-center lg:items-start justify-center space-y-8">
                        
                        <div className="bg-[#151720]/80 p-8 rounded-[32px] border border-[#00C853]/20 shadow-[0_0_30px_rgba(0,200,83,0.05)] text-center w-full">
                            <div className="w-16 h-16 bg-[#00C853]/10 rounded-2xl flex items-center justify-center text-[#00C853] mx-auto mb-6">
                                <FileDown size={32} />
                            </div>
                            
                            <a 
                                href={currentAssets.pdf}
                                download
                                className="inline-flex items-center justify-center gap-3 w-full bg-[#00C853] hover:bg-[#00E676] text-white font-bold text-lg py-5 px-6 rounded-2xl shadow-[0_0_20px_rgba(0,200,83,0.4)] transition-all transform hover:scale-[1.02] border border-[#00C853]/50"
                            >
                                <FileDown size={24} className="animate-bounce" />
                                {TEXT.download_manual}
                            </a>

                            <div className="mt-6 p-5 bg-[#00C853]/10 border border-[#00C853]/20 rounded-2xl">
                                <p className="text-[#00C853] text-[15px] font-bold leading-relaxed">
                                    💡 {TEXT.download_hint}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="py-12 border-t border-white/5 bg-[#0A0C10]">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex flex-col items-center md:items-start gap-1">
                        <div className="flex items-center gap-2 text-gray-400 font-bold">
                            <Folder className="w-4 h-4 text-[#00C853] fill-[#00C853]/20" />
                            <span>KEEPT</span>
                        </div>
                        <span className="text-gray-600 text-xs text-center md:text-left">
                           &copy; 2026 Veritas AI. {TEXT.footer_rights}
                        </span>
                    </div>
                    
                    <div className="text-gray-400 text-xs italic tracking-wide text-center">
                        {TEXT.footer_disclaimer}
                    </div>

                    <div className="flex items-center gap-6 text-sm font-medium">
                        <a href="https://www.facebook.com/profile.php?id=61586445988383" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00C853] transition-colors" aria-label="Facebook Profil">
                            <Facebook size={20} />
                        </a>
                        <Link to="/keept-privacy" className="text-gray-400 hover:text-white transition-colors">{TEXT.footer_privacy}</Link>
                        <a href="mailto:support@veritas-app.com" className="text-gray-400 hover:text-[#00C853] transition-colors">{TEXT.footer_contact}</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}