import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  ChevronLeft,
  Shield,
  FileText,
  Lock,
  PhoneCall,
  ExternalLink,
  ArrowUp,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

export default function EvaTerms() {
  const [activeSection, setActiveSection] = useState('p1');

  const sections = [
    { id: 'p1', title: '§ 1. Postanowienia Ogólne i Model SaaS' },
    { id: 'p2', title: '§ 2. Odpowiedzialność za Ruch i Numery' },
    { id: 'p3', title: '§ 3. Komunikacja SMS i Zgody Odbiorców' },
    { id: 'p4', title: '§ 4. Umowa Powierzenia Danych (DPA / RODO)' },
    { id: 'p5', title: '§ 5. Cennik, Pakiety i Rozliczenia' },
    { id: 'p6', title: '§ 6. Dostępność Usługi i SLA' },
    { id: 'p7', title: '§ 7. Postanowienia Końcowe' },
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-surface-50 text-surface-900 font-inter selection:bg-gold-500 selection:text-white antialiased">
      <Helmet>
        <title>Regulamin B2B i Umowa Powierzenia Danych (DPA) | Platforma EVA</title>
        <meta
          name="description"
          content="Oficjalny Regulamin świadczenia usług drogą elektroniczną (B2B) oraz Umowa Powierzenia Przetwarzania Danych Osobowych (DPA / RODO) dla platformy asystenta głosowego EVA."
        />
        <link rel="icon" type="image/png" href="/eva-headset-gold.png" />
      </Helmet>

      {/* NAGŁÓWEK NAWIGACYJNY */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-surface-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              to="/eva"
              className="inline-flex items-center gap-2 text-sm font-semibold text-surface-600 hover:text-gold-600 transition-colors group"
            >
              <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              <span>Powrót do strony EVA</span>
            </Link>
            <div className="hidden sm:block h-5 w-[1px] bg-surface-200" />
            <div className="hidden sm:flex items-center gap-2">
              <span className="font-playfair font-bold text-lg text-surface-900">
                E<span className="text-[0.65em] font-sans font-semibold text-surface-600">asy</span>
                V<span className="text-[0.65em] font-sans font-semibold text-surface-600">oice</span>
                A<span className="text-[0.65em] font-sans font-semibold text-surface-600">ssistant</span>
              </span>
              <span className="text-xs text-gold-700 bg-gold-50 border border-gold-200 px-2 py-0.5 rounded-full font-medium">
                Regulamin B2B & DPA
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:+48343433088"
              className="hidden md:inline-flex items-center gap-1.5 text-xs font-bold text-surface-700 hover:text-gold-600 px-3 py-1.5 rounded-lg bg-surface-100 transition-colors"
            >
              <PhoneCall size={14} className="text-gold-600" />
              <span>Infolinia DEMO: +48 343 433 088</span>
            </a>
            <a
              href="https://beautyvoice-bff.web.app/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-surface-900 hover:bg-surface-800 text-white text-xs font-semibold transition-all shadow-sm"
            >
              <span>Panel Aplikacji</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </header>

      {/* BANNER TYTUŁOWY */}
      <div className="bg-gradient-to-b from-gold-50/70 to-surface-50 border-b border-surface-200/80 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-100 text-gold-800 text-xs font-bold uppercase tracking-wider mb-4 border border-gold-200">
              <Shield size={14} className="text-gold-600" />
              <span>Dokument Prawny B2B & RODO</span>
            </div>
            <h1 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-surface-900 tracking-tight leading-snug mb-4">
              Regulamin Świadczenia Usług Drogą Elektroniczną (B2B) oraz Umowa Powierzenia Przetwarzania Danych (DPA)
            </h1>
            <p className="text-surface-600 text-sm md:text-base leading-relaxed">
              Dokument reguluje relację biznesową pomiędzy Usługodawcą platformy EVA a przedsiębiorcą (Usługobiorcą), w tym zasady korzystania z infrastruktury głosowej, rozliczeń oraz powierzenia danych osobowych zgodnie z art. 28 RODO.
            </p>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-surface-500 font-medium">
              <div><strong>Data wejścia w życie:</strong> 1 marca 2026 r.</div>
              <div><strong>Operator Serwisu:</strong> Veritas App (dalej „Usługodawca”)</div>
              <div><strong>Adres URL:</strong> https://veritas-app.com/eva</div>
              <div><strong>Aplikacja SaaS:</strong> https://beautyvoice-bff.web.app</div>
            </div>
          </div>
        </div>
      </div>

      {/* GŁÓWNA STRUKTURA: SPIS TREŚCI + TREŚĆ PARAGRAFÓW */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEWY STICKY SPIS TREŚCI (DESKTOP) */}
          <aside className="lg:col-span-4 sticky top-28 hidden lg:block bg-white/90 backdrop-blur-md rounded-3xl p-6 border border-surface-200 shadow-card-soft">
            <h2 className="font-playfair text-lg font-bold text-surface-900 mb-4 pb-3 border-b border-surface-200 flex items-center gap-2">
              <FileText size={18} className="text-gold-600" />
              <span>Spis Paragrafów</span>
            </h2>
            <nav className="space-y-1.5 text-sm">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollTo(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-xl transition-all font-medium text-xs md:text-sm ${
                    activeSection === section.id
                      ? 'bg-gold-50 text-gold-800 font-bold border-l-4 border-gold-500 shadow-sm'
                      : 'text-surface-600 hover:text-surface-900 hover:bg-surface-100'
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </nav>

            <div className="mt-8 pt-6 border-t border-surface-200 space-y-3 text-xs text-surface-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-gold-600" />
                <span>Wyłącznie relacja B2B</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-gold-600" />
                <span>Klauzula Indemnity (§ 2 ust. 4)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-gold-600" />
                <span>Standard SLA 99% (§ 6)</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock size={14} className="text-gold-600" />
                <span>Szyfrowanie TLS 1.3 / AES-256</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-surface-200">
              <a
                href="mailto:support@veritas-app.com"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-surface-100 hover:bg-surface-200 text-surface-700 text-xs font-semibold transition-colors"
              >
                <span>Kontakt: support@veritas-app.com</span>
              </a>
            </div>
          </aside>

          {/* PRAWA GŁÓWNA TREŚĆ REGULAMINU */}
          <article className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 border border-surface-200 shadow-card-soft space-y-12 leading-relaxed text-sm md:text-base text-surface-700">
            <p className="text-xs text-surface-500 italic bg-surface-50 p-4 rounded-xl border border-surface-200">
              Niniejszy Regulamin określa zasady korzystania z oprogramowania asystenta głosowego sztucznej inteligencji EVA (Easy Voice Assistant) udostępnianego w modelu Software as a Service (SaaS).
            </p>

            {/* § 1 */}
            <section id="p1" className="scroll-mt-28 space-y-4">
              <h2 className="font-playfair text-xl sm:text-2xl font-bold text-surface-900 border-b border-surface-200 pb-3">
                § 1. Postanowienia Ogólne i Model Świadczenia Usługi
              </h2>
              <ol className="list-decimal pl-5 space-y-3">
                <li>
                  Usługa świadczona przez Usługodawcę polega na udostępnieniu oprogramowania chmurowego (SaaS), w tym algorytmów sztucznej inteligencji (LLM / Voice AI), w celu automatycznego odbierania połączeń telefonicznych, udzielania informacji o usługach, rejestrowania rezerwacji w wirtualnym kalendarzu Usługobiorcy oraz automatyzacji procesów relacyjnych (potwierdzanie wizyt, badanie satysfakcji, obsługa okienek last-minute).
                </li>
                <li>
                  Usługa skierowana jest <strong>wyłącznie do przedsiębiorców</strong> w rozumieniu art. 43[1] Kodeksu cywilnego (relacja Business-to-Business, B2B). Do umów zawieranych na podstawie niniejszego Regulaminu nie stosuje się przepisów o prawach konsumenta.
                </li>
                <li>
                  <strong>Charakter Usługi:</strong> Usługodawca jest wyłącznie dostawcą oprogramowania i infrastruktury teleinformatycznej. Usługodawca <strong>nie jest operatorem telekomunikacyjnym</strong> w rozumieniu Prawa Telekomunikacyjnego, a numery techniczne udostępniane w ramach platformy stanowią jedynie punkt wejścia ruchu dla algorytmów głosowych.
                </li>
              </ol>
            </section>

            {/* § 2 */}
            <section id="p2" className="scroll-mt-28 space-y-4">
              <h2 className="font-playfair text-xl sm:text-2xl font-bold text-surface-900 border-b border-surface-200 pb-3">
                § 2. Odpowiedzialność za Ruch Telefoniczny i Numery Techniczne
              </h2>
              <ol className="list-decimal pl-5 space-y-3">
                <li>
                  <strong>Publiczny Numer Usługobiorcy:</strong> Usługobiorca oświadcza i gwarantuje, że posiada pełne, wyłączne prawa do publicznego numeru telefonu, na którym promuje swoją działalność i z którego ustawia przekierowanie połączeń (warunkowe lub bezwarunkowe) na przydzielony numer techniczny.
                </li>
                <li>
                  <strong>Przeznaczenie Numeru Technicznego:</strong> Przydzielony w pakiecie numer techniczny służy <strong>wyłącznie do odbioru połączeń przychodzących przekierowanych z publicznego numeru Usługobiorcy</strong>.
                </li>
                <li>
                  <strong>Bezwzględne Zakazy:</strong>
                  <ul className="list-disc pl-5 mt-2 space-y-1.5 text-surface-600">
                    <li>Zabrania się podawania numeru technicznego do publicznej wiadomości jako głównego numeru kontaktowego firmy.</li>
                    <li>Bezwzględnie zabrania się wykorzystywania platformy, numeru technicznego lub bramek SMS do prowadzenia niezamówionego telemarketingu (tzw. "cold calling"), spamowania, phishingu lub jakichkolwiek działań naruszających obowiązujące przepisy prawa.</li>
                  </ul>
                </li>
              </ol>

              {/* KLAUZULA INDEMNITY */}
              <div className="bg-gold-50/80 rounded-2xl p-5 border border-gold-300 text-gold-950 text-sm mt-4">
                <div className="flex items-center gap-2 font-bold mb-2 text-gold-900">
                  <AlertTriangle size={18} className="text-gold-600" />
                  <span>4. Klauzula Zwolnienia z Odpowiedzialności (Indemnity)</span>
                </div>
                <p className="leading-relaxed text-surface-800">
                  Usługobiorca zobowiązuje się zwolnić Usługodawcę, jego pracowników oraz partnerów technologicznych z wszelkiej odpowiedzialności odszkodowawczej i prawnej w przypadku roszczeń osób trzecich wynikających z bezprawnego lub sprzecznego z Regulaminem wykorzystania połączeń telefonicznych przez Usługobiorcę.
                </p>
              </div>
            </section>

            {/* § 3 */}
            <section id="p3" className="scroll-mt-28 space-y-4">
              <h2 className="font-playfair text-xl sm:text-2xl font-bold text-surface-900 border-b border-surface-200 pb-3">
                § 3. Komunikacja SMS, Połączenia Wychodzące i Zgody Odbiorców
              </h2>
              <ol className="list-decimal pl-5 space-y-3">
                <li>
                  Platforma EVA umożliwia automatyczną wysyłkę powiadomień SMS (potwierdzenie rezerwacji, przypomnienia, badanie opinii NPS, oferty powrotu dla bazy 90+) oraz automatyczne połączenia wychodzące AI w celu weryfikacji i potwierdzenia obecności klienta na zaplanowanej wizycie.
                </li>
                <li>
                  Usługobiorca oświadcza i gwarantuje, że dzwoniący klienci, na których numery kierowane są powiadomienia SMS oraz połączenia potwierdzające, wyrazili stosowne zgody na kontakt w celach związanych z obsługą rezerwacji zgodnie z wymogami RODO i Ustawy o świadczeniu usług drogą elektroniczną.
                </li>
                <li>
                  Usługodawca nie weryfikuje treści powiadomień wprowadzanych przez Usługobiorcę i nie ponosi odpowiedzialności za brak odpowiednich zgód po stronie odbiorców końcowych.
                </li>
              </ol>
            </section>

            {/* § 4 */}
            <section id="p4" className="scroll-mt-28 space-y-4">
              <h2 className="font-playfair text-xl sm:text-2xl font-bold text-surface-900 border-b border-surface-200 pb-3 flex items-center justify-between">
                <span>§ 4. Umowa Powierzenia Przetwarzania Danych Osobowych (DPA)</span>
                <span className="text-xs font-sans font-bold uppercase px-2.5 py-1 rounded-full bg-surface-100 text-surface-700">
                  Art. 28 RODO
                </span>
              </h2>
              <p className="text-xs text-surface-500">
                Niniejszy paragraf stanowi prawnie wiążącą Umowę Powierzenia Przetwarzania Danych Osobowych w rozumieniu art. 28 Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 (RODO).
              </p>
              <ol className="list-decimal pl-5 space-y-3">
                <li>
                  <strong>Role Stron:</strong>
                  <ul className="list-disc pl-5 mt-1 space-y-1 text-surface-600">
                    <li><strong>Usługobiorca</strong> jest <strong>Administratorem Danych Osobowych (ADO)</strong> swoich klientów, pacjentów i pracowników.</li>
                    <li><strong>Usługodawca</strong> działa jako <strong>Podmiot Przetwarzający (Procesor)</strong> w rozumieniu art. 28 RODO.</li>
                  </ul>
                </li>
                <li>
                  <strong>Zakres Powierzonych Danych:</strong> Numery telefonów dzwoniących, nagrania rozmów audio i ich transkrypcje tekstowe, imiona, nazwiska, daty i rodzaje zamawianych usług oraz ewentualne notatki powiązane z rezerwacją.
                </li>
                <li>
                  <strong>Cel i Charakter Przetwarzania:</strong> Przetwarzanie odbywa się wyłącznie w celu technicznej realizacji usługi asystenta głosowego (rozpoznawanie mowy, analiza intencji, zapis do kalendarza, wysyłka SMS transakcyjnego, połączenie weryfikacyjne).
                </li>
                <li>
                  <strong>Podprocesorzy (Dalsze Powierzenie):</strong> Usługobiorca wyraża ogólną zgodę na korzystanie przez Usługodawcę ze sprawdzonych podwykonawców infrastruktury:
                  <ul className="list-disc pl-5 mt-1.5 space-y-1 text-surface-600">
                    <li><em>Google LLC / Google Cloud Platform</em> (infrastruktura serwerowa i modele LLM Gemini),</li>
                    <li><em>Zadarma / Twilio</em> (infrastruktura SIP/VoIP oraz bramki SMS).</li>
                  </ul>
                </li>
                <li>
                  <strong>Środki Bezpieczeństwa:</strong> Usługodawca stosuje szyfrowanie danych w tranzycie (TLS 1.3) oraz w spoczynku (AES-256), a także logiczną i fizyczną izolację baz danych poszczególnych firm (multi-tenancy).
                </li>
              </ol>
            </section>

            {/* § 5 */}
            <section id="p5" className="scroll-mt-28 space-y-4">
              <h2 className="font-playfair text-xl sm:text-2xl font-bold text-surface-900 border-b border-surface-200 pb-3">
                § 5. Cennik, Pakiety i Rozliczenia
              </h2>
              <ol className="list-decimal pl-5 space-y-3">
                <li>
                  Korzystanie z platformy wymaga uiszczania opłaty abonamentowej zgodnie z wybranym planem:
                  <ul className="list-disc pl-5 mt-2 space-y-2 text-surface-700">
                    <li>
                      <strong>Plan Osobisty AI (Executive):</strong> 149 zł netto / miesiąc (zawiera 100 darmowych minut połączeń, 1 dedykowany numer GSM, ochronę prywatności i dwuetapowe powitanie z tarczą przed telemarketerami, bazę kontaktów VIP z priorytetowymi alertami Push i E-mail, weryfikację kodem PIN do Panelu Właściciela i wiedzy poufnej, poranne raporty dnia oraz harmonogram blokad skupienia Deep Work).
                    </li>
                    <li>
                      <strong>Plan Standard:</strong> 199 zł netto / miesiąc (zawiera 100 darmowych minut połączeń, 1 numer techniczny, 4 naturalne głosy AI, obsługę ponad 140 języków, rezerwacje kalendarzowe, powiadomienia SMS, Bazę Wiedzy AI ze zdjęć i plików PDF oraz obsługę grafików pracowników i dni wolnych).
                    </li>
                    <li>
                      <strong>Plan Premium:</strong> 399 zł netto / miesiąc (zawiera 300 darmowych minut połączeń, wszystkie funkcje planu Standard oraz moduł Last Minute, badanie satysfakcji NPS, reaktywację klientów 90+, telefoniczne potwierdzanie rezerwacji eliminujące no-show oraz wielokanałowość do 5 połączeń jednocześnie).
                    </li>
                  </ul>
                </li>
                <li>
                  Minuty w pakiecie odnawiają się co miesiąc w dniu rozpoczęcia cyklu rozliczeniowego i nie przechodzą na kolejny okres.
                </li>
                <li>
                  Usługobiorca może w dowolnym momencie zawiesić konto na okres do 30 dni lub anulować subskrypcję z zachowaniem skutku na koniec bieżącego okresu rozliczeniowego.
                </li>
              </ol>
            </section>

            {/* § 6 */}
            <section id="p6" className="scroll-mt-28 space-y-4">
              <h2 className="font-playfair text-xl sm:text-2xl font-bold text-surface-900 border-b border-surface-200 pb-3">
                § 6. Dostępność Usługi i Gwarancja Poziomu Świadczenia (SLA)
              </h2>
              <ol className="list-decimal pl-5 space-y-3">
                <li>
                  Usługodawca dokłada należytej staranności, aby zapewnić dostępność platformy na poziomie 99% w skali roku (SLA).
                </li>
                <li>
                  Usługodawca nie ponosi odpowiedzialności za przerwy w działaniu usługi spowodowane awariami publicznych sieci telekomunikacyjnych (GSM/PSTN), operatorów komórkowych Usługobiorcy lub działaniem siły wyższej.
                </li>
                <li>
                  <strong>Wyłączenie zastosowań krytycznych:</strong> Asystent EVA pełni funkcję recepcyjno-organizacyjną i nie może być wykorzystywany do obsługi połączeń alarmowych ani ratownictwa medycznego.
                </li>
              </ol>
            </section>

            {/* § 7 */}
            <section id="p7" className="scroll-mt-28 space-y-4">
              <h2 className="font-playfair text-xl sm:text-2xl font-bold text-surface-900 border-b border-surface-200 pb-3">
                § 7. Postanowienia Końcowe
              </h2>
              <ol className="list-decimal pl-5 space-y-3">
                <li>
                  Wszelkie spory powstałe w związku z realizacją niniejszej umowy będą rozstrzygane przez sąd powszechny właściwy dla siedziby Usługodawcy.
                </li>
                <li>
                  W sprawach nieuregulowanych niniejszym Regulaminem zastosowanie mają przepisy Kodeksu Cywilnego oraz prawa polskiego.
                </li>
                <li>
                  Regulamin wchodzi w życie z dniem 1 marca 2026 roku.
                </li>
              </ol>
            </section>

            {/* PRZYCISKI KOŃCOWE */}
            <div className="pt-8 border-t border-surface-200 flex flex-wrap items-center justify-between gap-4">
              <Link
                to="/eva"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gold-700 hover:text-gold-800"
              >
                <ChevronLeft size={16} />
                <span>Wróć do prezentacji produktu EVA</span>
              </Link>

              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex items-center gap-1.5 text-xs text-surface-500 hover:text-surface-800 transition-colors"
              >
                <ArrowUp size={14} />
                <span>Wróć na górę strony</span>
              </button>
            </div>
          </article>
        </div>
      </main>

      {/* STOPKA */}
      <footer className="bg-surface-900 text-surface-400 py-12 border-t border-surface-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Veritas App / EVA. Wszystkie prawa zastrzeżone.</p>
          <div className="flex items-center gap-6">
            <Link to="/eva" className="hover:text-white transition-colors">Strona Główna EVA</Link>
            <a href="mailto:support@veritas-app.com" className="hover:text-white transition-colors">
              Pomoc: support@veritas-app.com
            </a>
            <Link to="/keept-privacy" className="hover:text-white transition-colors">Polityka Prywatności</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
