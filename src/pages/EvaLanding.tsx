import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Phone,
  CalendarCheck,
  Sparkles,
  ShieldCheck,
  Clock,
  MessageSquare,
  Users,
  CheckCircle2,
  ChevronDown,
  X,
  ArrowRight,
  ExternalLink,
  PhoneCall,
  Flame,
  Award,
  Lock,
  Mail,
  Menu,
  Globe,
  Mic,
  Shield
} from 'lucide-react';

export default function EvaLanding() {
  // Flag to easily toggle the early-adopter beta banner
  const SHOW_BETA_BANNER = true;
  const [isBannerOpen, setIsBannerOpen] = useState(SHOW_BETA_BANNER);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Czy asystentka EVA brzmi naturalnie jak prawdziwy człowiek?",
      a: "Tak. EVA wykorzystuje najnowocześniejsze modele syntezy mowy i rozumienia języka naturalnego. Masz do wyboru 4 naturalne głosy AI (2 żeńskie i 2 męskie). Asystentka prowadzi płynny dialog, reaguje na wtrącenia, rozumie kontekst i nie brzmi jak monotonny automat."
    },
    {
      q: "W ilu językach potrafi rozmawiać EVA z dzwoniącymi klientami?",
      a: "EVA obsługuje ponad 140 języków z automatycznym rozpoznawaniem mowy. Jeżeli dzwoniący klient zacznie rozmowę po angielsku, ukraińsku, niemiecku czy hiszpańsku, EVA natychmiast płynnie odpowie w jego języku ojczystym."
    },
    {
      q: "Czym różni się Pakiet Osobisty AI (Executive) od pakietów firmowych Standard i Premium?",
      a: "Pakiet Osobisty (149 zł/mc) to Twoja prywatna, dyskretna sekretarka AI stworzona dla przedsiębiorców, menedżerów, prawników i lekarzy. Zamiast masowej recepcji cennikowej, chroni Twój czas skupienia (Deep Work) i bezwzględną prywatność. Stosuje dwuetapowe powitanie filtrujące telemarketerów i natrętów, wpuszcza wyłącznie kontakty VIP (rodzinę, wspólników), wysyła poranny raport dnia (Push + E-mail), pamięta o ważnych rocznicach i zabezpiecza dostęp do Twojego kalendarza kodem PIN."
    },
    {
      q: "Jak działa zabezpieczenie kodem PIN i Baza Wiedzy Poufnej w Pakiecie Osobistym?",
      a: "Dzwoniąc na numer asystenta ze swojego telefonu, wchodzisz do Panelu Właściciela chronionego kodem PIN – bez niego asystent ma absolutny zakaz ujawniania Twoich wiadomości i terminów. Co więcej, w Bazie Wiedzy możesz oznaczyć wybrane informacje (np. stawki projektowe lub wewnętrzne procedury) jako poufne – asystent przekaże je dzwoniącemu wyłącznie po podaniu właściwego hasła dostępu."
    },
    {
      q: "Jak w 10 minut przekierować połączenia z mojego smartfona?",
      a: "Wystarczy wpisać na klawiaturze telefonu prosty kod operatora GSM (np. *21*numer_techniczny# dla przekierowania wszystkich połączeń lub *67*... gdy linia jest zajęta). Proste i bezproblemowe."
    },
    {
      q: "Co jeśli w tym samym momencie zadzwoni kilku klientów?",
      a: "W planie Premium EVA obsługuje do 5 dzwoniących osób równolegle! Żaden klient nie usłyszy sygnału zajętości, a każda rozmowa prowadzona jest w pełni indywidualnie."
    },
    {
      q: "W jaki sposób EVA uczy się cennika i oferty mojej firmy?",
      a: "Zarówno w pakiecie Standard, jak i Premium wystarczy wgrać zdjęcia ulotki, dokument PDF z cennikiem lub wpisać odpowiedzi na najczęstsze pytania. Inteligentna Baza Wiedzy AI przetwarza materiały i natychmiast precyzyjnie odpowiada dzwoniącym."
    },
    {
      q: "Czy muszę podpisywać długoterminową umowę?",
      a: "Nie. Usługa działa w elastycznym modelu subskrypcyjnym B2B z miesięcznym okresem rozliczeniowym. Możesz w każdej chwili zmienić pakiet, zawiesić konto na 30 dni lub zrezygnować bez żadnych kar umownych."
    },
    {
      q: "Jak wygląda kwestia RODO i bezpieczeństwa danych klientów?",
      a: "Platforma spełnia rygorystyczne normy bezpieczeństwa (szyfrowanie TLS 1.3 i AES-256). W ramach regulaminu automatycznie zawierana jest Umowa Powierzenia Przetwarzania Danych Osobowych (DPA), zabezpieczająca Cię od strony prawnej."
    }
  ];

  return (
    <div className="min-h-screen bg-surface-50 text-surface-900 font-inter selection:bg-gold-500 selection:text-white antialiased">
      <Helmet>
        <title>EVA - Asystent Głosowy AI | Odbieranie Telefonów i Rezerwacje 24/7</title>
        <meta
          name="description"
          content="Inteligentny asystent głosowy AI dla salonów, gabinetów i firm usługowych. Odbiera telefony 24/7 w ponad 140 językach, wpisuje rezerwacje i aktywnie dba o grafik."
        />
        <meta property="og:title" content="EVA - Asystent Głosowy AI dla Twojego Biznesu" />
        <meta
          property="og:description"
          content="Nigdy więcej nieodebranych telefonów i pustych okienek w kalendarzu. Ponad 140 języków i 4 naturalne głosy AI. Przetestuj na żywo pod numerem +48 343 433 088!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/eva-headset-gold.png" />
        <link rel="icon" type="image/png" href="/eva-headset-gold.png" />
      </Helmet>

      {/* 1. TOP ANNOUNCEMENT BAR */}
      {isBannerOpen && (
        <aside
          aria-label="Promocja wczesnych testów"
          className="bg-gradient-to-r from-surface-900 via-surface-800 to-surface-900 text-white py-2 px-4 text-xs md:text-sm border-b border-gold-500/30 sticky top-0 z-50 shadow-md backdrop-blur-md"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-gold-500 text-surface-900 uppercase tracking-wider">
                Oferta Limitowana
              </span>
              <p className="font-medium text-surface-100 text-xs md:text-sm">
                🎉 <strong className="text-gold-300">Program Wczesnych Testów:</strong> Pierwsze 5 użytkowników otrzymują miesiąc abonamentu całkowicie bezpłatnie!
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="mailto:support@veritas-app.com?subject=Zg%C5%82oszenie%20do%20Programu%20Wczesnych%20Test%C3%B3w%20EVA&body=Dzie%C5%84%20dobry,%0A%0AChcieliby%C5%9Bmy%20zg%C5%82osi%C4%87%20si%C4%99%20do%20bezp%C5%82atnego%20testowania%20asystenta%20EVA%20(miesi%C4%85c%20gratis).%0A%0AImi%C4%99%20i%20Nazwisko%20/%20Firma:%20%0AWybrany%20pakiet%20(Osobisty%20/%20Standard%20/%20Premium):%20%0ANumer%20telefonu:%20"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500 hover:bg-gold-600 text-surface-900 font-semibold text-xs transition-all shadow-sm"
              >
                <Mail size={13} />
                <span>Zgłoś się do testów</span>
              </a>
              <button
                onClick={() => setIsBannerOpen(false)}
                className="text-surface-400 hover:text-white p-1 rounded-md transition-colors"
                title="Zamknij powiadomienie"
                aria-label="Zamknij baner promocyjny"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* 2. NAWIGACJA GŁÓWNA - WYRÓWNANA ŚRODKIEM W PIONIE I POZIOMIE */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-surface-200 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-2">
          
          {/* LOGOTYP LEWA STRONA */}
          <Link to="/eva" className="flex items-center gap-2.5 shrink-0 group w-[200px] xl:w-[220px]">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-gold-100 to-gold-200 border border-gold-300/80 flex items-center justify-center p-1 shadow-sm group-hover:scale-105 transition-transform">
              <img src="/eva-headset-gold.png" alt="EVA Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-playfair text-xl md:text-2xl font-bold tracking-tight text-surface-900 leading-tight">
                E<span className="text-[0.65em] font-sans font-semibold text-surface-600">asy</span>
                V<span className="text-[0.65em] font-sans font-semibold text-surface-600">oice</span>
                A<span className="text-[0.65em] font-sans font-semibold text-surface-600">ssistant</span>
              </span>
              <span className="text-[9px] uppercase font-bold tracking-widest text-gold-700 font-inter">
                Inteligentny Asystent AI
              </span>
            </div>
          </Link>

          {/* LINKI DESKTOP - 7 KOLUMN, WYŚRODKOWANIE GÓRNEGO I DOLNEGO SŁOWA ORAZ PRZESTRZENI */}
          <nav className="hidden lg:grid grid-cols-7 flex-1 max-w-[620px] xl:max-w-[680px] mx-auto items-center h-14">
            <a
              href="#demo"
              className="flex flex-col items-center justify-center text-center h-full px-1 py-1 rounded-xl text-xs xl:text-[13px] font-semibold text-surface-700 hover:text-gold-700 hover:bg-gold-50/80 transition-all leading-tight"
            >
              <span>Test</span>
              <span>DEMO</span>
            </a>
            <a
              href="#korzysci"
              className="flex flex-col items-center justify-center text-center h-full px-1 py-1 rounded-xl text-xs xl:text-[13px] font-semibold text-surface-700 hover:text-gold-700 hover:bg-gold-50/80 transition-all leading-tight"
            >
              <span>Korzyści</span>
            </a>
            <a
              href="#marketing"
              className="flex flex-col items-center justify-center text-center h-full px-1 py-1 rounded-xl text-xs xl:text-[13px] font-semibold text-surface-700 hover:text-gold-700 hover:bg-gold-50/80 transition-all leading-tight"
            >
              <span>Aktywny</span>
              <span>Marketing</span>
            </a>
            <a
              href="#kroki"
              className="flex flex-col items-center justify-center text-center h-full px-1 py-1 rounded-xl text-xs xl:text-[13px] font-semibold text-surface-700 hover:text-gold-700 hover:bg-gold-50/80 transition-all leading-tight"
            >
              <span>Jak to</span>
              <span>działa</span>
            </a>
            <a
              href="#cennik"
              className="flex flex-col items-center justify-center text-center h-full px-1 py-1 rounded-xl text-xs xl:text-[13px] font-semibold text-surface-700 hover:text-gold-700 hover:bg-gold-50/80 transition-all leading-tight"
            >
              <span>Cennik</span>
            </a>
            <a
              href="#faq"
              className="flex flex-col items-center justify-center text-center h-full px-1 py-1 rounded-xl text-xs xl:text-[13px] font-semibold text-surface-700 hover:text-gold-700 hover:bg-gold-50/80 transition-all leading-tight"
            >
              <span>FAQ</span>
            </a>
            <Link
              to="/eva/regulamin"
              className="flex flex-col items-center justify-center text-center h-full px-1 py-1 rounded-xl text-xs xl:text-[13px] font-semibold text-surface-600 hover:text-gold-700 hover:bg-gold-50/80 transition-all leading-tight"
            >
              <span>Regulamin</span>
              <span>B2B</span>
            </Link>
          </nav>

          {/* PRAWA STRONA: PRZYCISKI AKCJI */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href="tel:+48343433088"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-gold-50 border border-gold-300 text-gold-800 text-xs font-bold hover:bg-gold-100 transition-all shadow-sm whitespace-nowrap"
              title="Zadzwoń pod numer testowy DEMO"
            >
              <PhoneCall size={14} className="text-gold-600" />
              <span>DEMO: +48 343 433 088</span>
            </a>

            <a
              href="https://beautyvoice-bff.web.app/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl bg-surface-900 hover:bg-surface-800 text-white text-xs md:text-sm font-semibold transition-all shadow-sm hover:shadow-md whitespace-nowrap"
            >
              <span>Załóż konto</span>
              <ArrowRight size={14} />
            </a>

            {/* HAMBURGER MENU DLA MNIEJSZYCH EKRANÓW */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-surface-700 hover:text-gold-600 rounded-lg transition-colors"
              aria-label="Menu nawigacyjne"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* ROZWIJANE MENU MOBILNE */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-surface-200 px-6 py-5 shadow-xl space-y-3 font-medium text-sm text-surface-700">
            <a
              href="#demo"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-gold-600 border-b border-surface-100"
            >
              Test DEMO
            </a>
            <a
              href="#korzysci"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-gold-600 border-b border-surface-100"
            >
              Korzyści
            </a>
            <a
              href="#marketing"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-gold-600 border-b border-surface-100"
            >
              Aktywny Marketing
            </a>
            <a
              href="#kroki"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-gold-600 border-b border-surface-100"
            >
              Jak to działa
            </a>
            <a
              href="#cennik"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-gold-600 border-b border-surface-100"
            >
              Cennik
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-gold-600 border-b border-surface-100"
            >
              FAQ
            </a>
            <Link
              to="/eva/regulamin"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-gold-600 border-b border-surface-100 text-gold-700 font-semibold"
            >
              Regulamin B2B & RODO
            </Link>
            <div className="pt-2">
              <a
                href="tel:+48343433088"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gold-50 border border-gold-300 text-gold-800 font-bold text-sm"
              >
                <PhoneCall size={16} className="text-gold-600" />
                <span>Zadzwoń DEMO: +48 343 433 088</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 3. HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-gradient-to-b from-gold-50/40 via-surface-50 to-surface-50">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-br from-gold-200/30 to-gold-400/10 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* BADGE */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-100/80 border border-gold-300/80 text-gold-900 text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
            <Sparkles size={14} className="text-gold-600" />
            <span>Rewolucja w obsłudze klienta i zarządzaniu kalendarzem</span>
          </div>

          {/* H1 PLAYFAIR DISPLAY - BEZ UCIĘCIA LITERY 'g' */}
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-surface-900 leading-snug sm:leading-tight md:leading-[1.2] tracking-tight max-w-4xl mx-auto mb-6 relative z-20">
            Nigdy więcej nieodebranych telefonów i pustych okienek w kalendarzu.
            <span className="block mt-2 sm:mt-3 pb-3 pt-1 text-gold-700 sm:text-transparent sm:bg-clip-text sm:bg-gradient-to-r sm:from-gold-700 sm:via-gold-600 sm:to-gold-500 overflow-visible">
              Twój wirtualny pracownik AI odbiera i dba o grafik 24/7.
            </span>
          </h1>

          {/* PODTYTUŁ */}
          <p className="font-inter text-base sm:text-lg md:text-xl text-surface-600 max-w-3xl mx-auto mb-10 leading-relaxed relative z-10">
            EVA odbiera połączenia, gdy pracujesz z klientem, masz wolne lub prowadzisz samochód. Rozmawia w ponad 140 językach, odpowiada na pytania o cennik i natychmiast wpisuje rezerwację. W planie Premium sama dzwoni, by potwierdzić wizyty i zapełnia nagłe luki w grafiku.
          </p>

          {/* GŁÓWNE PRZYCISKI AKCJI (2 CTA) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            {/* CTA 1: ZADZWOŃ DEMO */}
            <a
              href="tel:+48343433088"
              className="w-full sm:w-auto inline-flex flex-col items-center justify-center px-7 py-4 rounded-2xl bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-semibold text-base transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] group"
            >
              <div className="flex items-center gap-2.5">
                <PhoneCall size={20} className="group-hover:rotate-12 transition-transform" />
                <span>Zadzwoń do EVA DEMO: +48 343 433 088</span>
              </div>
              <span className="text-[11px] font-normal text-gold-100 mt-1 opacity-90">
                Przetestuj na żywo! Zapytaj o cennik, pakiety i jak działa
              </span>
            </a>

            {/* CTA 2: ZAŁÓŻ KONTO */}
            <a
              href="https://beautyvoice-bff.web.app/register"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-surface-900 hover:bg-surface-800 text-white font-semibold text-base transition-all shadow-md hover:shadow-lg hover:scale-[1.02]"
            >
              <span>🚀 Załóż konto w aplikacji</span>
            </a>
          </div>

          {/* SOCIAL PROOF & KLUCZOWE ATUTY */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-5 text-xs text-surface-600 font-medium">
            <div className="flex items-center gap-1.5 bg-white/70 px-3 py-1.5 rounded-full border border-surface-200">
              <Globe size={15} className="text-gold-600" />
              <span>Ponad 140 języków (automatyczna detekcja)</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/70 px-3 py-1.5 rounded-full border border-surface-200">
              <Mic size={15} className="text-gold-600" />
              <span>4 głosy AI (2 żeńskie i 2 męskie)</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/70 px-3 py-1.5 rounded-full border border-surface-200">
              <CheckCircle2 size={15} className="text-gold-600" />
              <span>Konfiguracja w 10 minut</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/70 px-3 py-1.5 rounded-full border border-surface-200">
              <CheckCircle2 size={15} className="text-gold-600" />
              <span>Bez zmiany numeru telefonu</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/70 px-3 py-1.5 rounded-full border border-surface-200">
              <CheckCircle2 size={15} className="text-gold-600" />
              <span>Zgodność z RODO (DPA)</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SEKCJA DEMONSTRACYJNA Z WIDEO SHORTS (9:16) ORAZ TESTEM TELEFONICZNYM */}
      <section id="demo" className="py-16 md:py-24 bg-white border-y border-surface-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* LEWA KOLUMNA: KARTA INTERAKTYWNA Z NUMEREM DEMO */}
            <div className="lg:col-span-7 bg-gradient-to-br from-surface-900 via-surface-800 to-surface-900 rounded-3xl text-white p-8 sm:p-10 shadow-2xl relative overflow-hidden border border-gold-500/20">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/20 border border-gold-500/40 text-gold-300 text-xs font-bold uppercase tracking-wider mb-4">
                <Flame size={14} className="text-gold-400 animate-pulse" />
                <span>Interaktywny Test Na Żywo</span>
              </div>

              <h2 className="font-playfair text-2xl sm:text-3xl font-bold mb-4 leading-tight">
                Zadzwoń teraz pod numer <span className="text-gold-400 font-mono">+48 343 433 088</span> i przekonaj się sam!
              </h2>

              <p className="text-surface-300 text-sm sm:text-base leading-relaxed mb-6">
                Pod tym numerem czeka na Ciebie aktywna asystentka EVA. Odbierze połączenie, przedstawi się i odpowie na Twoje pytania dokładnie tak, jak będzie obsługiwać klientów Twojej firmy. Możesz mówić po polsku, angielsku, ukraińsku lub w dowolnym innym języku!
              </p>

              <div className="bg-surface-800/80 rounded-2xl p-5 border border-surface-700/80 mb-6 backdrop-blur-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-3 flex items-center gap-2">
                  <MessageSquare size={15} />
                  <span>O co możesz zapytać EVA podczas testowego połączenia?</span>
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-surface-200">
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
                    <span>„Jak działasz i w czym możesz wyręczyć moją firmę?”</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
                    <span>„Ile kosztuje abonament i co zawierają pakiety Standard i Premium?”</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>
                    <span>„W jaki sposób zapełniasz puste okienka i potwierdzasz rezerwacje?”</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">4</span>
                    <span>„Jak w 10 minut przekierować połączenia ze smartfona?”</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="tel:+48343433088"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gold-500 hover:bg-gold-600 text-surface-900 font-bold text-sm transition-all shadow-lg hover:scale-105"
                >
                  <Phone size={18} />
                  <span>Wybierz numer: +48 343 433 088</span>
                </a>
                <a
                  href="mailto:support@veritas-app.com"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface-800 hover:bg-surface-700 text-gold-400 text-xs font-semibold border border-gold-500/30 transition-colors"
                >
                  <Mail size={15} />
                  <span>Napisz: support@veritas-app.com</span>
                </a>
              </div>
            </div>

            {/* PRAWA KOLUMNA: MOCKUP SMARTFONA Z WIDEO PROMO (SHORTS 9:16) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="w-full max-w-[290px] sm:max-w-[310px] bg-gradient-to-b from-[#242424] to-[#121212] p-3 rounded-[40px] shadow-2xl border-4 border-surface-700/80 ring-1 ring-gold-500/30 relative">
                {/* NOTCH / GŁOŚNICZEK SMARTFONA */}
                <div className="w-24 h-4 bg-[#181818] rounded-full mx-auto mb-2 flex items-center justify-center">
                  <div className="w-8 h-1 bg-surface-700 rounded-full" />
                </div>

                {/* IFRAME WIDEO YOUTUBE SHORTS (9:16) */}
                <div className="relative w-full aspect-[9/16] rounded-[30px] overflow-hidden bg-black shadow-inner">
                  <iframe
                    src="https://www.youtube.com/embed/0t1vlngvJeo?rel=0&modestbranding=1&playsinline=1"
                    title="Prezentacja Wideo EVA Asystent Głosowy AI"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <p className="mt-4 text-xs font-medium text-surface-500 flex items-center gap-1.5 text-center">
                <span>📱 Zobacz oficjalną prezentację wideo (Shorts 9:16)</span>
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. FILAROWE KORZYŚCI DLA BIZNESU (ROZBUDOWANE O JĘZYKI I GŁOSY) */}
      <section id="korzysci" className="py-20 md:py-28 bg-surface-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold-700 font-bold text-xs uppercase tracking-widest block mb-2 font-inter">
              Dlaczego EVA to inwestycja, która natychmiast się zwraca
            </span>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-surface-900 tracking-tight">
              Filary spokoju i większych zysków Twojej firmy
            </h2>
            <p className="text-surface-600 text-base mt-4">
              Zamiast rozpraszać się dzwonkiem telefonu w trakcie pracy z klientem, zyskujesz dedykowaną wirtualną recepcję, która nie bierze urlopów i nigdy nie ma gorszego dnia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* FILAR 1 */}
            <div className="bg-white/85 backdrop-blur-md rounded-3xl p-8 border border-surface-200/80 shadow-card-soft hover:shadow-card-hover transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-gold-50 border border-gold-200 flex items-center justify-center text-gold-600 mb-6 group-hover:scale-110 transition-transform">
                <Clock size={28} />
              </div>
              <h3 className="font-playfair text-xl font-bold text-surface-900 mb-3">
                Dostępność 24/7 – Zero nieodebranych telefonów
              </h3>
              <p className="text-surface-600 text-sm leading-relaxed">
                Aż 68% klientów, którzy nie dodzwonią się za pierwszym razem, natychmiast dzwoni do Twojej konkurencji. EVA odbiera telefon w ułamku sekundy, nawet w niedziele, w nocy lub gdy masz zajęte ręce.
              </p>
            </div>

            {/* FILAR 2 */}
            <div className="bg-white/85 backdrop-blur-md rounded-3xl p-8 border border-surface-200/80 shadow-card-soft hover:shadow-card-hover transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-gold-50 border border-gold-200 flex items-center justify-center text-gold-600 mb-6 group-hover:scale-110 transition-transform">
                <CalendarCheck size={28} />
              </div>
              <h3 className="font-playfair text-xl font-bold text-surface-900 mb-3">
                Rezerwacje w czasie rzeczywistym
              </h3>
              <p className="text-surface-600 text-sm leading-relaxed">
                Asystentka na bieżąco sprawdza wolne terminy w grafiku, uwzględnia czas trwania konkretnej usługi oraz preferencje klienta, wpisując wizytę do kalendarza bez ryzyka nałożenia się rezerwacji.
              </p>
            </div>

            {/* FILAR 3 */}
            <div className="bg-white/85 backdrop-blur-md rounded-3xl p-8 border border-surface-200/80 shadow-card-soft hover:shadow-card-hover transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-gold-50 border border-gold-200 flex items-center justify-center text-gold-600 mb-6 group-hover:scale-110 transition-transform">
                <Sparkles size={28} />
              </div>
              <h3 className="font-playfair text-xl font-bold text-surface-900 mb-3">
                Baza Wiedzy AI ze zdjęć i plików PDF
              </h3>
              <p className="text-surface-600 text-sm leading-relaxed">
                Wystarczy wgrać zdjęcia ulotek, cennik PDF czy opis procedur. EVA uczy się specyfiki Twojego biznesu i odpowiada na pytania o cennik, przeciwwskazania czy dojazd równie profesjonalnie jak doświadczony pracownik.
              </p>
            </div>

            {/* FILAR 4: JĘZYKI */}
            <div className="bg-white/85 backdrop-blur-md rounded-3xl p-8 border border-surface-200/80 shadow-card-soft hover:shadow-card-hover transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-gold-50 border border-gold-200 flex items-center justify-center text-gold-600 mb-6 group-hover:scale-110 transition-transform">
                <Globe size={28} />
              </div>
              <h3 className="font-playfair text-xl font-bold text-surface-900 mb-3">
                Obsługa ponad 140 języków
              </h3>
              <p className="text-surface-600 text-sm leading-relaxed">
                Twój klient mówi po angielsku, ukraińsku, niemiecku czy hiszpańsku? EVA automatycznie rozpoznaje język dzwoniącego i prowadzi płynną konwersację w jego ojczystym języku bez żadnych barier.
              </p>
            </div>

            {/* FILAR 5: GŁOSY */}
            <div className="bg-white/85 backdrop-blur-md rounded-3xl p-8 border border-surface-200/80 shadow-card-soft hover:shadow-card-hover transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-gold-50 border border-gold-200 flex items-center justify-center text-gold-600 mb-6 group-hover:scale-110 transition-transform">
                <Mic size={28} />
              </div>
              <h3 className="font-playfair text-xl font-bold text-surface-900 mb-3">
                4 naturalne głosy AI (2 żeńskie i 2 męskie)
              </h3>
              <p className="text-surface-600 text-sm leading-relaxed">
                Dopasuj barwę, tempo i styl asystenta do wizerunku Twojej marki – od ciepłego, kojącego tonu recepcji beauty i medycyny, po pewny i precyzyjny głos serwisu technicznego lub kancelarii. Pełna personalizacja dostępna w każdym pakiecie.
              </p>
            </div>

            {/* FILAR 6: PAKIET OSOBISTY (EXECUTIVE) */}
            <div className="bg-gradient-to-br from-white to-gold-50/70 backdrop-blur-md rounded-3xl p-8 border border-gold-300 shadow-card-soft hover:shadow-card-hover transition-all group relative overflow-hidden">
              <div className="w-14 h-14 rounded-2xl bg-gold-100 border border-gold-300 flex items-center justify-center text-gold-700 mb-6 group-hover:scale-110 transition-transform">
                <Shield size={28} />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-gold-500 text-surface-900 uppercase tracking-wide">Nowość</span>
                <span className="text-xs font-semibold text-gold-800 uppercase tracking-wider">Tryb Executive</span>
              </div>
              <h3 className="font-playfair text-xl font-bold text-surface-900 mb-3">
                Tarcza Prywatności & Sekretarka Osobista
              </h3>
              <p className="text-surface-600 text-sm leading-relaxed">
                Dla osób ceniących czas i dyskrecję: ochrona Deep Work, dwuetapowe powitanie filtrujące telemarketerów, natychmiastowe alerty VIP, kurtyna danych kodem PIN oraz poranny raport na telefon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. DEDYKOWANA SEKCJA: AKTYWNY MARKETING I MAKSYMALIZACJA PRZYCHODÓW (PLAN PREMIUM) */}
      <section id="marketing" className="py-20 md:py-28 bg-gradient-to-b from-surface-900 to-surface-800 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/20 border border-gold-400/40 text-gold-300 text-xs font-bold uppercase tracking-wider mb-4">
              <Award size={14} className="text-gold-400" />
              <span>Główna Siła Planu Premium</span>
            </span>
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Aktywny Marketing i Maksymalizacja Przychodów
            </h2>
            <p className="text-surface-300 text-base md:text-lg mt-4 leading-relaxed">
              Większość systemów jedynie biernie czeka na telefon. Plan Premium EVA to aktywny silnik sprzedażowy, który sam dba o 100% obłożenie Twojego grafiku i lojalność klientów.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* KARTA 1: LAST MINUTE */}
            <div className="bg-surface-800/80 rounded-3xl p-8 border border-gold-500/30 hover:border-gold-400 transition-all shadow-xl backdrop-blur-md relative overflow-hidden group">
              <div className="w-12 h-12 rounded-2xl bg-gold-500/20 text-gold-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Flame size={24} />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-white mb-3 flex items-center justify-between">
                <span>Wypełnianie pustych slotów (Last Minute)</span>
                <span className="text-xs font-sans font-bold uppercase px-2.5 py-1 rounded-full bg-gold-500/20 text-gold-300">
                  Zero strat
                </span>
              </h3>
              <p className="text-surface-300 text-sm leading-relaxed">
                Gdy klient nagle odwoła rezerwację w danym dniu, EVA natychmiast wyszukuje chętne osoby z listy oczekujących i automatycznie proponuje zwolniony termin. Zamiast straconej godziny i kosztu przestoju salonu – zyskujesz pełne obłożenie i zadowolonego klienta.
              </p>
            </div>

            {/* KARTA 2: NPS & FEEDBACK */}
            <div className="bg-surface-800/80 rounded-3xl p-8 border border-gold-500/30 hover:border-gold-400 transition-all shadow-xl backdrop-blur-md relative overflow-hidden group">
              <div className="w-12 h-12 rounded-2xl bg-gold-500/20 text-gold-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MessageSquare size={24} />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-white mb-3 flex items-center justify-between">
                <span>Badanie zadowolenia klienta (NPS)</span>
                <span className="text-xs font-sans font-bold uppercase px-2.5 py-1 rounded-full bg-gold-500/20 text-gold-300">
                  Opinie i oceny
                </span>
              </h3>
              <p className="text-surface-300 text-sm leading-relaxed">
                Po zakończonej wizycie system bada opinię klienta za pomocą krótkiej, taktownej wiadomości. Jeżeli pojawiły się jakiekolwiek uwagi, trafiają one natychmiast do właściciela, zanim klient napisze negatywną recenzję w sieci. Zadowoleni klienci są kierowani do wystawienia gwiazdek.
              </p>
            </div>

            {/* KARTA 3: REAKTYWACJA 90+ */}
            <div className="bg-surface-800/80 rounded-3xl p-8 border border-gold-500/30 hover:border-gold-400 transition-all shadow-xl backdrop-blur-md relative overflow-hidden group">
              <div className="w-12 h-12 rounded-2xl bg-gold-500/20 text-gold-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users size={24} />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-white mb-3 flex items-center justify-between">
                <span>Reaktywacja klientów „uśpionych” (Baza 90+ dni)</span>
                <span className="text-xs font-sans font-bold uppercase px-2.5 py-1 rounded-full bg-gold-500/20 text-gold-300">
                  Powracający klienci
                </span>
              </h3>
              <p className="text-surface-300 text-sm leading-relaxed">
                Pozyskanie nowego klienta jest 5-krotnie droższe niż utrzymanie obecnego. EVA automatycznie analizuje historię wizyt i przypomina się osobom, które nie pojawiły się w firmie od ponad 3 miesięcy, proponując im nowy dogodny termin i przywracając regularne wizyty.
              </p>
            </div>

            {/* KARTA 4: POTWIERDZANIE WIZYT / ZERO NO-SHOW */}
            <div className="bg-surface-800/80 rounded-3xl p-8 border border-gold-500/30 hover:border-gold-400 transition-all shadow-xl backdrop-blur-md relative overflow-hidden group">
              <div className="w-12 h-12 rounded-2xl bg-gold-500/20 text-gold-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck size={24} />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-white mb-3 flex items-center justify-between">
                <span>Potwierdzanie rezerwacji dzień wcześniej (Zero No-Show)</span>
                <span className="text-xs font-sans font-bold uppercase px-2.5 py-1 rounded-full bg-gold-500/20 text-gold-300">
                  Koniec No-Show
                </span>
              </h3>
              <p className="text-surface-300 text-sm leading-relaxed">
                Klienci, którzy zapominają o wizycie, to zmora każdego usługodawcy. EVA wysyła SMS lub sama wykonuje automatyczny, kulturalny telefon dzień przed terminem, upewnia się co do obecności i aktualizuje kalendarz. Właściciel zaczyna dzień z pewnym, w 100% potwierdzonym grafikiem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. JAK TO DZIAŁA W 3 PROSTYCH KROKACH */}
      <section id="kroki" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold-700 font-bold text-xs uppercase tracking-widest block mb-2 font-inter">
              Prostota wdrożenia
            </span>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-surface-900 tracking-tight">
              Uruchomienie asystenta w 3 prostych krokach
            </h2>
            <p className="text-surface-600 text-base mt-4">
              Nie musisz kupować drogich central telefonicznych ani zmieniać operatora komórkowego. Wszystko konfigurujesz samodzielnie w 10 minut.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* KROK 1 */}
            <div className="bg-surface-50 rounded-3xl p-8 border border-surface-200 text-center relative">
              <div className="w-12 h-12 rounded-full bg-gold-500 text-surface-900 font-playfair font-bold text-xl flex items-center justify-center mx-auto mb-6 shadow-md">
                1
              </div>
              <h3 className="font-playfair text-xl font-bold text-surface-900 mb-3">
                Wpisujesz krótki kod GSM na telefonie
              </h3>
              <p className="text-surface-600 text-sm leading-relaxed">
                Po rejestracji otrzymujesz dedykowany numer techniczny. Wpisujesz na telefonie krótki kod operatora (np. *21*numer#), by przekierować połączenia na asystentkę, kiedy tylko chcesz.
              </p>
            </div>

            {/* KROK 2 */}
            <div className="bg-surface-50 rounded-3xl p-8 border border-surface-200 text-center relative">
              <div className="w-12 h-12 rounded-full bg-gold-500 text-surface-900 font-playfair font-bold text-xl flex items-center justify-center mx-auto mb-6 shadow-md">
                2
              </div>
              <h3 className="font-playfair text-xl font-bold text-surface-900 mb-3">
                EVA odbiera i rozmawia z klientem
              </h3>
              <p className="text-surface-600 text-sm leading-relaxed">
                Asystentka wita klienta naturalnym głosem w jego języku, odpowiada na pytania o cennik i wolne terminy, a następnie natychmiast zapisuje rezerwację bezpośrednio do Twojego kalendarza.
              </p>
            </div>

            {/* KROK 3 */}
            <div className="bg-surface-50 rounded-3xl p-8 border border-surface-200 text-center relative">
              <div className="w-12 h-12 rounded-full bg-gold-500 text-surface-900 font-playfair font-bold text-xl flex items-center justify-center mx-auto mb-6 shadow-md">
                3
              </div>
              <h3 className="font-playfair text-xl font-bold text-surface-900 mb-3">
                Automatyczny SMS z potwierdzeniem
              </h3>
              <p className="text-surface-600 text-sm leading-relaxed">
                Zaraz po zakończeniu rozmowy klient otrzymuje czytelny SMS z datą, godziną i adresem wizyty. Rezerwacja jest pewna, a klient czuje się obsłużony na najwyższym poziomie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CENNIK I PAKIETY - POPRAWIONA LOGIKA CECH WG DYSPOZYCJI */}
      <section id="cennik" className="py-20 md:py-28 bg-gold-50/50 border-t border-gold-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold-700 font-bold text-xs uppercase tracking-widest block mb-2 font-inter">
              Przejrzyste zasady rozliczeń B2B
            </span>
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-surface-900 tracking-tight">
              Wybierz pakiet dopasowany do Twoich potrzeb i stylu pracy
            </h2>
            <p className="text-surface-600 text-base mt-4">
              Bez ukrytych opłat, bez długich zobowiązań. Możesz zmienić pakiet lub zrezygnować w dowolnym miesiącu.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
            {/* PAKIET OSOBISTY AI (EXECUTIVE) */}
            <div className="bg-white rounded-3xl p-8 sm:p-9 border border-surface-200 shadow-card-soft flex flex-col justify-between hover:border-gold-300 transition-all">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-playfair text-2xl font-bold text-surface-900">Pakiet Osobisty</h3>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-gold-100 text-gold-800">
                    Sekretarka Executive
                  </span>
                </div>
                <p className="text-surface-500 text-sm mb-6 min-h-[40px]">
                  Dla przedsiębiorców, menedżerów, prawników i lekarzy. Chroni Twój czas skupienia (Deep Work) i bezwzględną prywatność.
                </p>
                <div className="mb-6">
                  <span className="font-playfair text-4xl sm:text-5xl font-bold text-surface-900">149 zł</span>
                  <span className="text-surface-500 text-sm ml-2">netto / miesiąc</span>
                  <div className="text-[11px] text-surface-400 mt-1">kolejne minuty: 0,60 zł / min (naliczane sekundowo)</div>
                </div>

                <div className="space-y-3 text-sm text-surface-700 mb-8">
                  <div className="flex items-start gap-3 font-semibold text-surface-900">
                    <CheckCircle2 size={18} className="text-gold-600 shrink-0 mt-0.5" />
                    <span>1 dedykowany techniczny numer telefonu komórkowego</span>
                  </div>
                  <div className="flex items-start gap-3 font-medium text-surface-900">
                    <CheckCircle2 size={18} className="text-gold-600 shrink-0 mt-0.5" />
                    <span><strong>Dwuetapowe inteligentne powitanie</strong> (ochrona tożsamości)</span>
                  </div>
                  <div className="flex items-start gap-3 font-medium text-surface-900">
                    <CheckCircle2 size={18} className="text-gold-600 shrink-0 mt-0.5" />
                    <span><strong>Rozpoznawanie kontaktów VIP</strong> (Rodzina, Wspólnik, Klient)</span>
                  </div>
                  <div className="flex items-start gap-3 font-medium text-surface-900">
                    <CheckCircle2 size={18} className="text-gold-600 shrink-0 mt-0.5" />
                    <span><strong>Autoryzacja kodem PIN</strong> z telefonu właściciela (sprawy poufne)</span>
                  </div>
                  <div className="flex items-start gap-3 font-medium text-surface-900">
                    <CheckCircle2 size={18} className="text-gold-600 shrink-0 mt-0.5" />
                    <span><strong>Baza wiedzy ogólnej oraz poufnej</strong> (chronionej PIN-em)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-gold-600 shrink-0 mt-0.5" />
                    <span><strong>Raporty dnia:</strong> poranny push oraz podsumowanie głosowe i e-mail</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-gold-600 shrink-0 mt-0.5" />
                    <span><strong>Czas skupienia (Deep Work)</strong> z automatycznym filtrowaniem połączeń</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-gold-600 shrink-0 mt-0.5" />
                    <span><strong>Rejestr ważnych dat</strong> (urodziny, rocznice, polisy)</span>
                  </div>
                </div>
              </div>

              <a
                href="https://beautyvoice-bff.web.app/register"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-surface-900 hover:bg-surface-800 text-white font-semibold text-sm transition-all shadow-sm hover:shadow-md"
              >
                <span>Wybierz Osobisty</span>
                <ArrowRight size={16} />
              </a>
            </div>

            {/* PAKIET STANDARD */}
            <div className="bg-white rounded-3xl p-8 sm:p-9 border border-surface-200 shadow-card-soft flex flex-col justify-between hover:border-gold-300 transition-all">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-playfair text-2xl font-bold text-surface-900">Pakiet Standard</h3>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-surface-100 text-surface-700">
                    Podstawowa Recepcja
                  </span>
                </div>
                <p className="text-surface-500 text-sm mb-6 min-h-[40px]">
                  Idealne rozwiązanie dla jednoosobowych działalności i gabinetów chcących profesjonalnie zabezpieczyć nieodebrane telefony i rezerwacje.
                </p>
                <div className="mb-6">
                  <span className="font-playfair text-4xl sm:text-5xl font-bold text-surface-900">199 zł</span>
                  <span className="text-surface-500 text-sm ml-2">netto / miesiąc</span>
                  <div className="text-[11px] text-surface-400 mt-1">kolejne minuty: 0,60 zł / min (naliczane sekundowo)</div>
                </div>

                <div className="space-y-3 text-sm text-surface-700 mb-8">
                  <div className="flex items-start gap-3 font-semibold text-surface-900">
                    <CheckCircle2 size={18} className="text-gold-600 shrink-0 mt-0.5" />
                    <span><strong>100 darmowych minut</strong> na rozmowy z klientami co miesiąc</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-gold-600 shrink-0 mt-0.5" />
                    <span>1 dedykowany techniczny numer telefonu</span>
                  </div>
                  <div className="flex items-start gap-3 font-medium text-surface-900">
                    <CheckCircle2 size={18} className="text-gold-600 shrink-0 mt-0.5" />
                    <span><strong>4 naturalne głosy AI</strong> do wyboru (2 żeńskie i 2 męskie)</span>
                  </div>
                  <div className="flex items-start gap-3 font-medium text-surface-900">
                    <CheckCircle2 size={18} className="text-gold-600 shrink-0 mt-0.5" />
                    <span><strong>Obsługa ponad 140 języków</strong> (automatyczna detekcja)</span>
                  </div>
                  <div className="flex items-start gap-3 font-medium text-surface-900">
                    <CheckCircle2 size={18} className="text-gold-600 shrink-0 mt-0.5" />
                    <span><strong>Baza Wiedzy AI</strong> ze zdjęć cenników i plików PDF</span>
                  </div>
                  <div className="flex items-start gap-3 font-medium text-surface-900">
                    <CheckCircle2 size={18} className="text-gold-600 shrink-0 mt-0.5" />
                    <span><strong>Grafiki pracowników</strong> i obsługa świąt / dni wolnych</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-gold-600 shrink-0 mt-0.5" />
                    <span>Automatyczne umawianie terminów w kalendarzu</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-gold-600 shrink-0 mt-0.5" />
                    <span>Potwierdzenia SMS do klientów po rezerwacji</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-gold-600 shrink-0 mt-0.5" />
                    <span>Samodzielna konfiguracja w 10 minut</span>
                  </div>
                </div>
              </div>

              <a
                href="https://beautyvoice-bff.web.app/register"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-surface-900 hover:bg-surface-800 text-white font-semibold text-sm transition-all shadow-sm hover:shadow-md"
              >
                <span>Wybierz Standard</span>
                <ArrowRight size={16} />
              </a>
            </div>

            {/* PAKIET PREMIUM (REKOMENDOWANY) */}
            <div className="bg-gradient-to-b from-white to-gold-50/40 rounded-3xl p-8 sm:p-9 border-2 border-gold-400 shadow-xl flex flex-col justify-between relative">
              <div className="absolute -top-3.5 right-6 sm:right-8 bg-gradient-to-r from-gold-500 to-gold-600 text-white px-3 sm:px-4 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-md">
                Rekomendowany – Pełna Automatyzacja
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-playfair text-2xl font-bold text-surface-900">Pakiet Premium</h3>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-gold-100 text-gold-800">
                    Maksymalizacja Przychodów
                  </span>
                </div>
                <p className="text-surface-600 text-sm mb-6 min-h-[40px]">
                  Dla firm, które chcą aktywnie zapełniać kalendarz, badać opinie i wyeliminować zapominalskich klientów (No-Show).
                </p>
                <div className="mb-6">
                  <span className="font-playfair text-4xl sm:text-5xl font-bold text-surface-900">399 zł</span>
                  <span className="text-surface-500 text-sm ml-2">netto / miesiąc</span>
                  <div className="text-[11px] text-surface-400 mt-1">kolejne minuty: 0,60 zł / min (naliczane sekundowo)</div>
                </div>

                <div className="space-y-3 text-sm text-surface-800 mb-8">
                  <div className="flex items-start gap-3 font-semibold text-gold-900">
                    <CheckCircle2 size={18} className="text-gold-600 shrink-0 mt-0.5" />
                    <span><strong>300 darmowych minut</strong> na rozmowy w pakiecie co miesiąc</span>
                  </div>

                  {/* WYRÓŻNIONY BANER "WSZYSTKO W STANDARD I DODATKOWO" */}
                  <div className="py-2 px-3 rounded-xl bg-gold-100/80 border border-gold-300 text-gold-900 text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 my-2">
                    <Sparkles size={14} className="text-gold-600 shrink-0" />
                    <span>Wszystko z pakietu Standard, oraz:</span>
                  </div>

                  <div className="flex items-start gap-3 font-medium text-surface-900">
                    <CheckCircle2 size={18} className="text-gold-600 shrink-0 mt-0.5" />
                    <span><strong>Wypełnianie okienek (Last Minute)</strong> – natychmiastowe ratowanie odwołanych terminów</span>
                  </div>
                  <div className="flex items-start gap-3 font-medium text-surface-900">
                    <CheckCircle2 size={18} className="text-gold-600 shrink-0 mt-0.5" />
                    <span><strong>Badanie satysfakcji (NPS)</strong> – automatyczne zbieranie opinii po wizycie</span>
                  </div>
                  <div className="flex items-start gap-3 font-medium text-surface-900">
                    <CheckCircle2 size={18} className="text-gold-600 shrink-0 mt-0.5" />
                    <span><strong>Reaktywacja bazy 90+ dni</strong> – powrót dawnych klientów do firmy</span>
                  </div>
                  <div className="flex items-start gap-3 font-medium text-surface-900">
                    <CheckCircle2 size={18} className="text-gold-600 shrink-0 mt-0.5" />
                    <span><strong>Telefoniczne potwierdzanie wizyt dzień wcześniej</strong> – asystent sam dzwoni (zero „no-show”)</span>
                  </div>
                  <div className="flex items-start gap-3 font-medium text-surface-900">
                    <CheckCircle2 size={18} className="text-gold-600 shrink-0 mt-0.5" />
                    <span><strong>Wielokanałowość</strong> – do 5 jednoczesnych rozmów naraz bez sygnału zajętości</span>
                  </div>
                </div>
              </div>

              <a
                href="https://beautyvoice-bff.web.app/register"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-bold text-sm transition-all shadow-lg hover:shadow-xl hover:scale-[1.01]"
              >
                <span>Wybierz Premium</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section id="faq" className="py-20 md:py-28 bg-white border-t border-surface-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold-700 font-bold text-xs uppercase tracking-widest block mb-2 font-inter">
              Wszystko jasne od pierwszego dnia
            </span>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-surface-900 tracking-tight">
              Często zadawane pytania (FAQ)
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-surface-200 bg-surface-50/50 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-semibold text-surface-900 hover:text-gold-700 transition-colors"
                  aria-expanded={openFaq === idx}
                >
                  <span className="text-base sm:text-lg">{faq.q}</span>
                  <ChevronDown
                    size={20}
                    className={`text-gold-600 transition-transform shrink-0 ${openFaq === idx ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-sm sm:text-base text-surface-600 leading-relaxed border-t border-surface-200/60 pt-4 bg-white/80">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. STOPKA (FOOTER) */}
      <footer className="bg-surface-900 text-surface-300 py-16 border-t border-surface-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            {/* KOLUMNA 1: LOGO I OPIS */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold-500/20 border border-gold-500/40 flex items-center justify-center p-1">
                  <img src="/eva-headset-gold.png" alt="EVA Logo" className="w-full h-full object-contain" />
                </div>
                <span className="font-playfair text-2xl font-bold text-white tracking-tight">
                  E<span className="text-[0.65em] font-sans font-semibold text-surface-400">asy</span>
                  V<span className="text-[0.65em] font-sans font-semibold text-surface-400">oice</span>
                  A<span className="text-[0.65em] font-sans font-semibold text-surface-400">ssistant</span>
                </span>
              </div>
              <p className="text-sm text-surface-400 max-w-md leading-relaxed">
                Twój wirtualny pracownik AI, który odbiera telefony, rozmawia w ponad 140 językach, umawia wizyty 24/7 i aktywnie dba o obłożenie Twojego kalendarza.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="tel:+48343433088"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-800 hover:bg-surface-700 text-gold-400 text-xs font-bold border border-gold-500/20 transition-colors"
                >
                  <PhoneCall size={14} />
                  <span>DEMO AI: +48 343 433 088</span>
                </a>
                <a
                  href="mailto:support@veritas-app.com"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-800 hover:bg-surface-700 text-gold-400 text-xs font-bold border border-gold-500/20 transition-colors"
                >
                  <Mail size={14} />
                  <span>support@veritas-app.com</span>
                </a>
              </div>
            </div>

            {/* KOLUMNA 2: PRODUKT */}
            <div>
              <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">Platforma</h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a
                    href="https://beautyvoice-bff.web.app/register"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold-400 transition-colors flex items-center gap-1.5"
                  >
                    <span>Rejestracja i Logowanie</span>
                    <ExternalLink size={12} className="opacity-60" />
                  </a>
                </li>
                <li>
                  <a href="#cennik" className="hover:text-gold-400 transition-colors">Cennik i Pakiety</a>
                </li>
                <li>
                  <a href="#demo" className="hover:text-gold-400 transition-colors">Test telefoniczny DEMO</a>
                </li>
                <li>
                  <a href="#marketing" className="hover:text-gold-400 transition-colors">Aktywny Marketing</a>
                </li>
              </ul>
            </div>

            {/* KOLUMNA 3: PRAWO & KONTAKT */}
            <div>
              <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">Kontakt i Informacje</h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a
                    href="mailto:support@veritas-app.com"
                    className="hover:text-gold-400 transition-colors font-medium text-gold-300 flex items-center gap-1.5"
                  >
                    <Mail size={13} />
                    <span>support@veritas-app.com</span>
                  </a>
                </li>
                <li>
                  <Link to="/eva/regulamin" className="hover:text-gold-400 transition-colors">
                    Regulamin B2B i Umowa DPA
                  </Link>
                </li>
                <li>
                  <Link to="/keept-privacy" className="hover:text-gold-400 transition-colors">
                    Polityka Prywatności
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-gold-400 transition-colors">
                    Główny Serwis Veritas App
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-surface-800 text-xs text-surface-500 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} Veritas App / EVA. Wszelkie prawa zastrzeżone.</p>
            <p className="flex items-center gap-1.5">
              <Lock size={12} className="text-gold-500" />
              <span>Bezpieczna platforma chmurowa klasy SaaS (TLS 1.3 / AES-256)</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
