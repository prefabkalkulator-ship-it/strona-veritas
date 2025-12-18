import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, FileText, CheckSquare } from 'lucide-react';

const ResourcesPage = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            setTimeout(() => {
                const element = document.querySelector(hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        } else {
            window.scrollTo(0, 0);
        }
    }, [hash]);

    return (
        <div className="min-h-screen bg-[#0B1021] text-slate-300 p-6 md:p-12 font-sans selection:bg-cyan-500/30">

            {/* Header z przyciskiem powrotu */}
            <div className="max-w-4xl mx-auto mb-12">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1a233b]/50 border border-cyan-500/30 text-cyan-400 text-sm font-bold tracking-wide hover:bg-cyan-500/10 transition-all mb-8 group"
                >
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    Wróć do Strony Głównej
                </Link>

                <h1 className="text-3xl md:text-5xl font-bold text-slate-100 mb-4 tracking-tight">
                    Baza Wiedzy Veritas
                </h1>
                <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
                    Pobierz materiały operacyjne, checklisty wdrożeniowe i schematy procesów, które pomogą Ci szybciej zintegrować AI w Twojej firmie.
                </p>
            </div>

            {/* Sekcja Blueprint */}
            <div id="blueprint" className="max-w-4xl mx-auto mb-16">
                <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                    <FileText className="w-6 h-6 text-cyan-400" />
                    <h2 className="text-2xl font-semibold text-slate-100">Blueprint Wdrożeniowy</h2>
                </div>
                <div className="bg-[#151b2e] rounded-xl p-8 border border-white/5 space-y-8">

                    {/* Intro */}
                    <div className="space-y-4 border-b border-white/5 pb-6">
                        <h3 className="text-xl font-bold text-white">📘 Veritas: The Blueprint. Jak zamienić dokumentację w Autonomiczny Silnik Sprzedaży.</h3>

                        <div className="space-y-3">
                            <p className="font-semibold text-red-400">🛑 Czy brzmi to znajomo?</p>
                            <ul className="space-y-2 list-disc pl-5 text-slate-300">
                                <li><strong className="text-slate-100">"Masz coraz więcej klientów, ale toniesz w tłumaczeniu podstaw?"</strong> – Twój zespół handlowy marnuje 60% czasu na odpowiadanie na te same pytania o cennik i specyfikację, zamiast domykać kontrakty.</li>
                                <li><strong className="text-slate-100">"Twój formularz kontaktowy to cmentarzysko leadów?"</strong> – Klient pyta w piątek wieczorem, a Ty odpisujesz w poniedziałek rano. W świecie "Instant Gratification" ten klient jest już u konkurencji.</li>
                                <li><strong className="text-slate-100">"Boisz się wdrożyć AI, bo 'zmyśla'?"</strong> – Przeraża Cię wizja bota, który obiecuje klientowi rabat, którego nie ma, albo myli specyfikację techniczną, narażając Cię na pozew.</li>
                            </ul>
                            <p className="pt-2"><strong className="text-cyan-400">Rozwiązanie: Veritas.</strong> To nie jest chatbot. To Inteligentny Wirtualny Asystent Sprzedaży klasy Agentic AI, oparty na architekturze RAG i Secure BFF.</p>
                            <p className="italic text-slate-400">Poniższy tutorial przeprowadzi Cię przez proces transformacji Twoich statycznych plików PDF w aktywnego handlowca działającego 24/7.</p>
                        </div>
                    </div>

                    {/* Część 1 */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-cyan-400 flex items-center gap-2">⚙️ CZĘŚĆ 1: Tutorial Techniczno-Wdrożeniowy</h4>

                        <div className="grid gap-4 md:grid-cols-1">
                            <div className="bg-[#0B1021] p-4 rounded-lg border border-white/5">
                                <strong className="block text-slate-100 mb-1">Krok 1: Iniekcja Wiedzy (The RAG Protocol)</strong>
                                <p className="text-sm text-slate-400 mb-2">Zapomnij o długim trenowaniu modelu (Fine-tuning). Veritas wykorzystuje RAG (Retrieval-Augmented Generation).</p>
                                <ul className="text-sm space-y-1 list-disc pl-4">
                                    <li><strong>Działanie:</strong> Wgrywasz surową dokumentację techniczną (PDF, DOCX, TXT) – cenniki, regulaminy, specyfikacje inwerterów czy rzuty mieszkań.</li>
                                    <li><strong>Efekt:</strong> Silnik wektoruje te dane. Od teraz Veritas nie posiada wiedzy ogólnej na temat Twojej oferty – posiada wyłącznie wiedzę z Twoich plików. Jeśli informacji nie ma w dokumencie, asystent odpowie: "Nie znalazłem tej informacji w specyfikacji", eliminując ryzyko halucynacji.</li>
                                </ul>
                            </div>

                            <div className="bg-[#0B1021] p-4 rounded-lg border border-white/5">
                                <strong className="block text-slate-100 mb-1">Krok 2: Konfiguracja "Secure BFF" (Bezpieczeństwo Enterprise)</strong>
                                <p className="text-sm text-slate-400 mb-2">Twoje dane i prompty systemowe to Twoja przewaga konkurencyjna. Nie mogą wyciec.</p>
                                <ul className="text-sm space-y-1 list-disc pl-4">
                                    <li><strong>Architektura:</strong> Wdrażamy model Secure Backend-for-Frontend. Cała logika komunikacji z LLM (Google Gemini) odbywa się na serwerze Node.js.</li>
                                    <li><strong>Korzyść IT:</strong> Klucze API są ukryte w zmiennych środowiskowych Google Cloud Run. Do przeglądarki klienta trafia tylko wyczyszczona odpowiedź, nigdy logika biznesowa.</li>
                                </ul>
                            </div>

                            <div className="bg-[#0B1021] p-4 rounded-lg border border-white/5">
                                <strong className="block text-slate-100 mb-1">Krok 3: Implementacja Rich Media (Wyjdź poza Tekst)</strong>
                                <p className="text-sm text-slate-400 mb-2">Tekst nie sprzedaje w 2025 roku. Skonfiguruj triggery JSON w odpowiedziach bota.</p>
                                <ul className="text-sm space-y-1 list-disc pl-4">
                                    <li><strong>Karuzela Produktowa:</strong> Zamiast linków, bot renderuje przesuwalny pasek ze zdjęciami (np. rzuty mieszkań 3D) bezpośrednio w oknie czatu.</li>
                                    <li><strong>Smart Video Tiles:</strong> Bot generuje kafelki wideo (np. "Wirtualny Spacer"), które odtwarzają się w aplikacji, utrzymując atencję użytkownika (Attention Economy).</li>
                                </ul>
                            </div>

                            <div className="bg-[#0B1021] p-4 rounded-lg border border-white/5">
                                <strong className="block text-slate-100 mb-1">Krok 4: Logika Porównawcza i Compliance</strong>
                                <p className="text-sm text-slate-400 mb-2">Klienci B2B kochają tabelki. Prawnicy kochają disclaimery.</p>
                                <ul className="text-sm space-y-1 list-disc pl-4">
                                    <li><strong>Tabele Dynamiczne:</strong> Skonfiguruj asystenta, aby na pytanie "Porównaj X i Y" generował tabelę Markdown (Cena | Wymiary | Moc).</li>
                                    <li><strong>Omnibus Shield:</strong> Aktywuj funkcję "Disclaimer Cenowy". Przy każdej kwocie system automatycznie doklei stopkę prawną ("Cena szacunkowa..."), chroniąc Cię przed roszczeniami.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Część 2 */}
                    <div className="space-y-4 pt-4 border-t border-white/5">
                        <h4 className="text-lg font-bold text-cyan-400 flex items-center gap-2">🎯 CZĘŚĆ 2: Scenariusze Zastosowania (Use Cases)</h4>
                        <p className="text-slate-400">Veritas jest systemem agnostycznym branżowo, ale najlepiej skaluje się tam, gdzie produkt jest złożony (High Involvement Product).</p>

                        <div className="space-y-4">
                            <div>
                                <strong className="text-white block">1. Nieruchomości (Real Estate Development)</strong>
                                <p className="text-xs text-slate-500 mb-1">Problem: Klient dzwoni o 22:00 z pytaniem o nasłonecznienie salonu.</p>
                                <ul className="list-disc pl-5 text-sm text-slate-300">
                                    <li><strong>Wizualizacja:</strong> Na hasło "pokaż mieszkania od południa", bot wyświetla Karuzelę z rzutami lokali.</li>
                                    <li><strong>Geolokalizacja:</strong> Klient pyta "Daleko do szkoły?". Bot pobiera lokalizację i odpowiada precyzyjnie.</li>
                                    <li><strong>Konwersja:</strong> Bezpośrednie umówienie wizyty przez integrację z Kalendarzem Google.</li>
                                </ul>
                            </div>
                            <div>
                                <strong className="text-white block">2. Odnawialne Źródła Energii (OZE)</strong>
                                <p className="text-xs text-slate-500 mb-1">Problem: Klienci gubią się w zmianach prawnych i specyfikacjach.</p>
                                <ul className="list-disc pl-5 text-sm text-slate-300">
                                    <li><strong>Edukacja:</strong> Bot tłumaczy zawiłości ustawy na podstawie wgranego PDF.</li>
                                    <li><strong>Kalkulacja:</strong> Generuje tabelę porównawczą pomp ciepła (COP, cena).</li>
                                    <li><strong>Wideo-Instrukcja:</strong> Wyświetla film "Jak przygotować kotłownię" w czacie.</li>
                                </ul>
                            </div>
                            <div>
                                <strong className="text-white block">3. Motoryzacja (Automotive)</strong>
                                <p className="text-xs text-slate-500 mb-1">Problem: Klienci szukają informacji w biegu.</p>
                                <ul className="list-disc pl-5 text-sm text-slate-300">
                                    <li><strong>Voice UI:</strong> Obsługa "hands-free" (Speech-to-Text + Lektor).</li>
                                    <li><strong>Silent Logging:</strong> Analiza w BigQuery, o jakie modele pytają klienci (Demand Intelligence).</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Footer Section */}
                    <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 p-6 rounded-lg border border-cyan-500/30 text-center">
                        <h4 className="text-xl font-bold text-white mb-2">🚀 Wdrożenie w 24h</h4>
                        <p className="text-slate-300 mb-4">Nie kupujesz "kota w worku". Dzięki architekturze RAG, możemy uruchomić Veritas Pilot na Twoich danych w jedną dobę.</p>
                        <ul className="text-sm text-slate-400 mb-6 space-y-1">
                            <li>1. Prześlij nam jeden plik PDF (cennik lub ofertę).</li>
                            <li>2. My przepuścimy go przez silnik iniekcji Gemini.</li>
                            <li>3. Otrzymasz link do PWA, gdzie Twój własny Asystent będzie gotowy do pracy.</li>
                        </ul>
                        <Link
                            to="/?action=demo"
                            className="inline-block px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-lg transition-colors shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                        >
                            Przestań tracić leady. Zacznij konwertować.
                        </Link>
                    </div>
                </div>
            </div>

            {/* Sekcja Checklist */}
            <div id="checklist" className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                    <CheckSquare className="w-6 h-6 text-cyan-400" />
                    <h2 className="text-2xl font-semibold text-slate-100">Checklista Startowa</h2>
                </div>
                <div className="bg-[#151b2e] rounded-xl p-8 border border-white/5 space-y-8">

                    {/* Header Checklisty */}
                    <div className="border-b border-white/5 pb-6">
                        <h3 className="text-xl font-bold text-white mb-2">🚀 Checklist: Przygotowanie do wdrożenia Asystenta Sprzedaży (24h Sprint)</h3>
                    </div>

                    {/* CZĘŚĆ A */}
                    <div className="space-y-6">
                        <div>
                            <h4 className="text-lg font-bold text-cyan-400 mb-1">CZĘŚĆ A: DZIAŁ MARKETINGU I SPRZEDAŻY ("Karmienie Mózgu")</h4>
                            <p className="text-slate-400 text-sm">Celem jest przygotowanie "wsadu" merytorycznego dla silnika RAG oraz zasobów wizualnych dla interfejsu.</p>
                        </div>

                        <div className="grid gap-4 md:grid-cols-1">
                            {/* 1. Audyt */}
                            <div className="bg-[#0B1021] p-5 rounded-lg border border-white/5">
                                <strong className="block text-slate-100 mb-3 text-lg">1. Audyt Źródeł Wiedzy (RAG Data Prep)</strong>
                                <ul className="space-y-4">
                                    <li className="flex gap-3">
                                        <div className="mt-1 w-5 h-5 rounded border border-slate-600 flex items-center justify-center flex-none"><div className="w-3 h-3 bg-cyan-500/20 rounded-sm"></div></div>
                                        <div className="text-slate-300 text-sm">
                                            <strong className="text-slate-100">Selekcja "Złotego Źródła":</strong> Wybierz 1-3 kluczowe dokumenty PDF (np. Cennik 2025, Specyfikacja Techniczna Produktu, FAQ Sprzedażowe). System nie "zmyśla", więc te pliki muszą być aktualne i bezbłędne.
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <div className="mt-1 w-5 h-5 rounded border border-slate-600 flex items-center justify-center flex-none"><div className="w-3 h-3 bg-cyan-500/20 rounded-sm"></div></div>
                                        <div className="text-slate-300 text-sm">
                                            <strong className="text-slate-100">Czyszczenie Danych:</strong> Upewnij się, że pliki są czytelnym tekstem (nie skanami obrazkowymi), aby silnik Gemini mógł je poprawnie zwektoryzować.
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <div className="mt-1 w-5 h-5 rounded border border-slate-600 flex items-center justify-center flex-none"><div className="w-3 h-3 bg-cyan-500/20 rounded-sm"></div></div>
                                        <div className="text-slate-300 text-sm">
                                            <strong className="text-slate-100">Definicja "Persony":</strong> Określ styl komunikacji (np. "Empatyczny Doradca" vs "Techniczny Ekspert"). To wpłynie na systemowy prompt sterujący tonem wypowiedzi.
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* 2. Zasoby */}
                            <div className="bg-[#0B1021] p-5 rounded-lg border border-white/5">
                                <strong className="block text-slate-100 mb-3 text-lg">2. Zasoby Multimedialne (Rich Media Assets)</strong>
                                <ul className="space-y-4">
                                    <li className="flex gap-3">
                                        <div className="mt-1 w-5 h-5 rounded border border-slate-600 flex items-center justify-center flex-none"><div className="w-3 h-3 bg-cyan-500/20 rounded-sm"></div></div>
                                        <div className="text-slate-300 text-sm">
                                            <strong className="text-slate-100">Baza Zdjęć do Karuzeli:</strong> Przygotuj linki publiczne (np. z Google Drive) do 5-10 kluczowych zdjęć produktów/rzutów mieszkań. Asystent użyje ich do generowania przesuwalnych galerii w czacie.
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <div className="mt-1 w-5 h-5 rounded border border-slate-600 flex items-center justify-center flex-none"><div className="w-3 h-3 bg-cyan-500/20 rounded-sm"></div></div>
                                        <div className="text-slate-300 text-sm">
                                            <strong className="text-slate-100">Wideo Content:</strong> Wybierz 1-2 filmy instruktażowe lub spacery wirtualne (linki YouTube). System zamieni je w "inteligentne kafelki wideo" z miniaturami.
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* 3. Konwersja */}
                            <div className="bg-[#0B1021] p-5 rounded-lg border border-white/5">
                                <strong className="block text-slate-100 mb-3 text-lg">3. Narzędzia Konwersji (Conversion Points)</strong>
                                <ul className="space-y-4">
                                    <li className="flex gap-3">
                                        <div className="mt-1 w-5 h-5 rounded border border-slate-600 flex items-center justify-center flex-none"><div className="w-3 h-3 bg-cyan-500/20 rounded-sm"></div></div>
                                        <div className="text-slate-300 text-sm">
                                            <strong className="text-slate-100">Link do Kalendarza:</strong> Przygotuj link do kalendarza handlowca (Google Calendar lub Calendly), który zostanie zintegrowany z botem do umawiania spotkań.
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <div className="mt-1 w-5 h-5 rounded border border-slate-600 flex items-center justify-center flex-none"><div className="w-3 h-3 bg-cyan-500/20 rounded-sm"></div></div>
                                        <div className="text-slate-300 text-sm">
                                            <strong className="text-slate-100">Polityka Cenowa:</strong> Zdefiniuj formułkę prawną (disclaimer), która ma się pojawiać przy każdej podanej cenie (np. "Cena netto, nie zawiera montażu").
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* CZĘŚĆ B */}
                    <div className="space-y-6 pt-6 border-t border-white/5">
                        <div>
                            <h4 className="text-lg font-bold text-cyan-400 mb-1">CZĘŚĆ B: INTEGRACJA KOŃCOWA (Quality Assurance)</h4>
                            <p className="text-slate-400 text-sm">Wspólna weryfikacja przed wysyłką do klienta.</p>
                        </div>

                        <div className="bg-[#0B1021] p-5 rounded-lg border border-white/5">
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <div className="mt-1 w-5 h-5 rounded border border-slate-600 flex items-center justify-center flex-none"><div className="w-3 h-3 bg-yellow-500/20 rounded-sm"></div></div>
                                    <div className="text-slate-300 text-sm">
                                        <strong className="text-slate-100">Test Halucynacji:</strong> Zadaj botowi pytanie spoza dostarczonych PDF-ów. Prawidłowa reakcja to: "Nie posiadam informacji na ten temat w mojej bazie wiedzy".
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <div className="mt-1 w-5 h-5 rounded border border-slate-600 flex items-center justify-center flex-none"><div className="w-3 h-3 bg-yellow-500/20 rounded-sm"></div></div>
                                    <div className="text-slate-300 text-sm">
                                        <strong className="text-slate-100">Test Voice UI:</strong> Sprawdź działanie dyktowania (Speech-to-Text) i lektora na urządzeniu mobilnym – czy interfejs jest responsywny?
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <div className="mt-1 w-5 h-5 rounded border border-slate-600 flex items-center justify-center flex-none"><div className="w-3 h-3 bg-yellow-500/20 rounded-sm"></div></div>
                                    <div className="text-slate-300 text-sm">
                                        <strong className="text-slate-100">Weryfikacja Tabel:</strong> Poproś o porównanie dwóch produktów z cennika – sprawdź czy tabela Markdown wyświetla się poprawnie.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto mt-20 pt-8 border-t border-white/5 text-center text-slate-500 text-sm">
                &copy; 2025 Veritas AI Core. Wszelkie prawa zastrzeżone.
            </div>
        </div>
    );
};

export default ResourcesPage;
