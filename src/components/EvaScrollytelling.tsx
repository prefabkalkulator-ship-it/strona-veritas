import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  PhoneCall,
  Sparkles,
  Globe,
  Mic,
  CheckCircle2,
  ChevronDown,
  CalendarCheck,
  ShieldCheck,
  Lock,
  Clock,
  Shield,
  Loader2,
  AlertCircle
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 193;

const getFrameUrl = (index: number) => {
  const frameNumber = index + 1;
  const padded = String(frameNumber).padStart(4, '0');
  return `/frames/frame_${padded}.webp`;
};

export default function EvaScrollytelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const currentFrameRef = useRef<number>(0);
  const [firstFrameLoaded, setFirstFrameLoaded] = useState(false);

  // Stan dla natywnego widżetu Live Callback w 30 sekund
  const [callbackPhone, setCallbackPhone] = useState('');
  const [callbackLoading, setCallbackLoading] = useState(false);
  const [callbackError, setCallbackError] = useState('');
  const [callbackCountdown, setCallbackCountdown] = useState<number | null>(null);
  const [callbackStatus, setCallbackStatus] = useState<string>('');

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (callbackCountdown !== null && callbackCountdown > 0) {
      timer = setTimeout(() => {
        setCallbackCountdown((prev) => (prev !== null && prev > 0 ? prev - 1 : 0));
        if (callbackCountdown > 20) {
          setCallbackStatus('Łączenie z cyfrową centralą...');
        } else if (callbackCountdown > 10) {
          setCallbackStatus('Asystentka EVA wybiera Twój numer...');
        } else {
          setCallbackStatus('Twój telefon za moment zadzwoni – odbierz połączenie!');
        }
      }, 1000);
    } else if (callbackCountdown === 0) {
      setCallbackStatus('Połączenie zainicjowane. Jeśli telefon nie zadzwonił, upewnij się, że podałeś prawidłowy numer.');
    }
    return () => clearTimeout(timer);
  }, [callbackCountdown]);

  const handleCallbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setCallbackError('');

    const clean = callbackPhone.replace(/[\s\-()]/g, '');
    if (!clean || clean.length < 9) {
      setCallbackError('Podaj poprawny 9-cyfrowy numer telefonu.');
      return;
    }

    setCallbackLoading(true);
    try {
      const res = await fetch('https://beautyvoice-bff.web.app/api/callback/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phoneNumber: clean,
          source: 'veritas_eva_scrollytelling'
        })
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Nie udało się zamówić szybkiego kontaktu.');
      }

      setCallbackCountdown(30);
      setCallbackStatus('Inicjowanie bezpiecznego połączenia...');
    } catch (err: any) {
      setCallbackError(err.message || 'Wystąpił błąd podczas zamawiania połączenia.');
    } finally {
      setCallbackLoading(false);
    }
  };

  // Funkcja rysująca klatkę z zachowaniem proporcji i wyśrodkowaniem na czystym białym tle
  const drawFrame = (frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Pobierz obraz lub najbliższą załadowaną klatkę, aby zapobiec miganiu
    let img = imagesRef.current[frameIndex];
    if (!img || !img.complete || img.naturalWidth === 0) {
      for (let offset = 1; offset < FRAME_COUNT; offset++) {
        const prev = frameIndex - offset;
        if (prev >= 0 && imagesRef.current[prev]?.complete && imagesRef.current[prev]!.naturalWidth > 0) {
          img = imagesRef.current[prev];
          break;
        }
        const next = frameIndex + offset;
        if (next < FRAME_COUNT && imagesRef.current[next]?.complete && imagesRef.current[next]!.naturalWidth > 0) {
          img = imagesRef.current[next];
          break;
        }
      }
    }

    const cw = canvas.width;
    const ch = canvas.height;

    // Czyste białe tło
    ctx.clearRect(0, 0, cw, ch);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, cw, ch);

    if (!img || !img.complete || img.naturalWidth === 0) {
      return;
    }

    const nw = img.naturalWidth;
    const nh = img.naturalHeight;

    const hRatio = cw / nw;
    const vRatio = ch / nh;

    let ratio: number;
    if (cw >= ch) {
      // Ekran poziomy (desktop / tablet poziomo) - styl cover z wyśrodkowaniem
      ratio = Math.max(hRatio, vRatio);
    } else {
      // Ekran pionowy (smartfony / tablet pionowo) - dopasowanie słuchawki z bezpiecznym marginesem
      const mobileTargetRatio = (cw * 0.82) / 700;
      ratio = Math.min(mobileTargetRatio, vRatio * 0.85);
    }

    const rw = nw * ratio;
    const rh = nh * ratio;
    const rx = (cw - rw) / 2;
    const ry = (ch - rh) / 2;

    ctx.drawImage(img, 0, 0, nw, nh, rx, ry, rw, rh);
  };

  useEffect(() => {
    // Inicjalizacja bufora w pamięci
    imagesRef.current = new Array(FRAME_COUNT).fill(null);

    // Dynamiczne dopasowanie wymiarów canvasa do okna (z obsługą Retina / High-DPI)
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      drawFrame(currentFrameRef.current);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // 1. NATYCHMIASTOWE ZAŁADOWANIE PIERWSZEJ KLATKI (ochrona przed FOUC)
    const firstImg = new Image();
    firstImg.src = getFrameUrl(0);
    firstImg.onload = () => {
      imagesRef.current[0] = firstImg;
      setFirstFrameLoaded(true);
      drawFrame(0);
      ScrollTrigger.refresh();
    };

    // 2. ASYNCHRONICZNY PRELOADING POZOSTAŁYCH KLATEK
    // Najpierw ładujemy klatki kluczowe (co 4 klatki) dla błyskawicznego działania scrolla
    const loadKeyframes = () => {
      for (let i = 4; i < FRAME_COUNT; i += 4) {
        const keyImg = new Image();
        keyImg.src = getFrameUrl(i);
        const frameIdx = i;
        keyImg.onload = () => {
          imagesRef.current[frameIdx] = keyImg;
          if (currentFrameRef.current === frameIdx) {
            drawFrame(frameIdx);
          }
        };
      }

      // Następnie ładujemy resztę klatek
      for (let i = 1; i < FRAME_COUNT; i++) {
        if (i % 4 === 0) continue;
        const img = new Image();
        img.src = getFrameUrl(i);
        const frameIdx = i;
        img.onload = () => {
          imagesRef.current[frameIdx] = img;
          if (currentFrameRef.current === frameIdx) {
            drawFrame(frameIdx);
          }
        };
      }
    };

    loadKeyframes();

    // 3. SYNCHRONIZACJA ZE SCROLLEM (GSAP ScrollTrigger)
    const frameObj = { frame: 0 };
    const tween = gsap.to(frameObj, {
      frame: FRAME_COUNT - 1,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1, // Płynne wygładzenie ruchu scrub
      },
      onUpdate: () => {
        const target = Math.round(frameObj.frame);
        if (target !== currentFrameRef.current) {
          currentFrameRef.current = target;
          drawFrame(target);
        }
      },
    });

    // Czyszczenie listenerów i instancji ScrollTrigger przy odmontowaniu
    return () => {
      window.removeEventListener('resize', handleResize);
      tween.kill();
      if (tween.scrollTrigger) {
        tween.scrollTrigger.kill();
      }
    };
  }, []);

  return (
    <section
      id="hero-scrollytelling"
      ref={containerRef}
      className="relative w-full min-h-[400vh] bg-white overflow-x-clip"
    >
      {/* STICKY CANVAS CONTAINER */}
      <div
        className="sticky top-0 w-[100vw] h-[100vh] max-w-full overflow-hidden z-0 flex items-center justify-center pointer-events-none bg-white"
        style={{ position: 'sticky', top: 0, width: '100vw', height: '100vh', overflow: 'hidden', zIndex: 0 }}
      >
        <canvas
          ref={canvasRef}
          id="scroll-hero-canvas"
          className="w-full h-full block"
        />

        {/* Subtelny spinner początkowy dopóki pierwsza klatka się nie narysuje */}
        {!firstFrameLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
            <div className="flex flex-col items-center gap-3">
              <div className="w-9 h-9 border-3 border-gold-400 border-t-transparent rounded-full animate-spin" />
              <span className="text-xs font-semibold text-surface-500 uppercase tracking-wider">
                Inicjalizacja 3D EVA...
              </span>
            </div>
          </div>
        )}
      </div>

      {/* OVERLAY CONTENT - WARSTWA TEKSTÓW I ELEMENTÓW CTA (z-index: 10, pointer-events: none) */}
      <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-between">
        
        {/* ================= STAGE 1: GŁÓWNY HERO (0vh - 100vh) ================= */}
        {/* Podniesiono o ok. 50px na mobile (pt-11 zamiast pt-24), aby chipsy nie nachodziły na Filary */}
        <div className="min-h-screen flex flex-col items-center justify-start sm:justify-center text-center px-4 sm:px-6 lg:px-8 pt-11 sm:pt-24 md:pt-32 pb-4 relative">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            
            {/* BADGE */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-gold-100/90 border border-gold-300 text-gold-900 text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-2 sm:mb-4 shadow-sm">
              <Sparkles size={13} className="text-gold-600" />
              <span>Rewolucja w obsłudze klienta i kalendarzu</span>
            </div>

            {/* H1 PLAYFAIR DISPLAY */}
            <h1 className="font-playfair text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-surface-900 leading-snug sm:leading-tight md:leading-[1.18] tracking-tight max-w-4xl mx-auto mb-2 sm:mb-4">
              Nigdy więcej nieodebranych telefonów i pustych okienek w kalendarzu.
              <span className="block mt-1 sm:mt-2 pb-1.5 text-gold-700 sm:text-transparent sm:bg-clip-text sm:bg-gradient-to-r sm:from-gold-700 sm:via-gold-600 sm:to-gold-500">
                Twój wirtualny pracownik AI odbiera i dba o grafik 24/7.
              </span>
            </h1>

            {/* PODTYTUŁ - CIEMNIEJSZY KOLOR CZCIONKI DLA WYŻSZEGO KONTRASTU (text-surface-800) */}
            <p className="font-inter text-xs sm:text-base md:text-lg text-surface-800 font-medium max-w-2xl mx-auto mb-2.5 sm:mb-5 leading-relaxed">
              EVA odbiera połączenia, gdy pracujesz z klientem, masz wolne lub prowadzisz samochód. Rozmawia w ponad 140 językach, odpowiada na pytania o cennik i natychmiast wpisuje rezerwację. W planie Premium sama dzwoni, by potwierdzić wizyty i zapełnia nagłe luki w grafiku.
            </p>

            {/* GŁÓWNE PRZYCISKI AKCJI - DOPASOWANE DLA MOBILE (NUMER W NOWYM WIERSZU, BRAK UCIĘĆ) */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-2.5 sm:mb-5 w-full max-w-md sm:max-w-none">
              <a
                href="tel:+48343433088"
                className="pointer-events-auto w-full sm:w-auto inline-flex flex-col items-center justify-center px-4 py-2 sm:px-6 sm:py-3.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-semibold transition-all shadow-md hover:shadow-lg group"
              >
                <div className="flex items-center gap-1.5 text-xs sm:text-sm">
                  <PhoneCall size={15} className="group-hover:rotate-12 transition-transform" />
                  <span>Zadzwoń do EVA DEMO:</span>
                </div>
                <span className="text-sm sm:text-base md:text-lg font-bold tracking-wider text-white whitespace-nowrap mt-0.5">
                  +48 343 433 088
                </span>
                <span className="hidden sm:block text-[10px] sm:text-[11px] font-normal text-gold-100 mt-0.5 opacity-90">
                  Przetestuj na żywo! Zapytaj o cennik i jak działa
                </span>
              </a>

              <a
                href="https://beautyvoice-bff.web.app/register"
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-xl sm:rounded-2xl bg-surface-900 hover:bg-surface-800 text-white font-semibold text-xs sm:text-base transition-all shadow-sm hover:shadow-md"
              >
                <span>🚀 Załóż konto w aplikacji</span>
              </a>
            </div>

            {/* ATUTY / PILLS - KOMPAKTOWE */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 text-[10px] sm:text-xs text-surface-700 font-medium">
              <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full border border-surface-200 shadow-sm">
                <Globe size={13} className="text-gold-600" />
                <span>Ponad 140 języków</span>
              </div>
              <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full border border-surface-200 shadow-sm">
                <Mic size={13} className="text-gold-600" />
                <span>4 głosy AI (2K / 2M)</span>
              </div>
              <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full border border-surface-200 shadow-sm">
                <CheckCircle2 size={13} className="text-gold-600" />
                <span>Gotowa w 10 minut</span>
              </div>
              <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full border border-surface-200 shadow-sm">
                <ShieldCheck size={13} className="text-gold-600" />
                <span>Zgodność RODO</span>
              </div>
            </div>

            {/* WSKAŹNIK SCROLLA */}
            <div className="mt-2.5 sm:mt-5 flex flex-col items-center gap-1 text-[11px] sm:text-xs text-surface-500 font-medium animate-pulse">
              <span>Przewiń w dół, aby odkryć filary EVA</span>
              <ChevronDown size={16} className="text-gold-600 animate-bounce" />
            </div>
          </div>
        </div>

        {/* ================= STAGE 2: FILARY 1 & 2 (100vh - 200vh) ================= */}
        {/* Wyświetlane po 2 na raz: po lewej i po prawej */}
        <div id="korzysci" className="min-h-screen flex flex-col justify-center px-4 sm:px-8 lg:px-12 py-12">
          <div className="max-w-6xl mx-auto w-full">
            <div className="text-center mb-6 sm:mb-8 pointer-events-auto">
              <span className="text-gold-700 font-bold text-xs uppercase tracking-widest block mb-1">
                Filary Spokoju i Większych Zysków Twojej Firmy
              </span>
              <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-surface-900">
                Dostępność 24/7 i Pełna Automatyzacja Grafiku
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 pointer-events-auto">
              {/* KAFELEK 1: LEWA STRONA */}
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-gold-200/80 shadow-xl hover:shadow-2xl transition-all space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-gold-50 border border-gold-200 flex items-center justify-center text-gold-600">
                  <Clock size={24} />
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gold-100 text-gold-900 text-[11px] font-bold uppercase tracking-wider">
                  <span>Filar 1: Dostępność 24/7</span>
                </div>
                <h3 className="font-playfair text-xl sm:text-2xl font-bold text-surface-900 leading-snug">
                  Zero nieodebranych telefonów
                </h3>
                <p className="text-surface-700 text-xs sm:text-sm leading-relaxed">
                  Aż 68% klientów, którzy nie dodzwonią się za pierwszym razem, natychmiast wybiera Twoją konkurencję. EVA odbiera telefon w ułamku sekundy 24/7 – po godzinach pracy, w niedziele, w nocy lub gdy masz zajęte ręce pracą z klientem.
                </p>
                <ul className="space-y-1.5 pt-1 text-xs text-surface-800 font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-gold-600 shrink-0" />
                    <span>Odbiór w ułamku sekundy bez sygnału zajętości</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-gold-600 shrink-0" />
                    <span>Obsługa do 5 dzwoniących osób równolegle (Premium)</span>
                  </li>
                </ul>
              </div>

              {/* KAFELEK 2: PRAWA STRONA */}
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-gold-200/80 shadow-xl hover:shadow-2xl transition-all space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-gold-50 border border-gold-200 flex items-center justify-center text-gold-600">
                  <CalendarCheck size={24} />
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gold-100 text-gold-900 text-[11px] font-bold uppercase tracking-wider">
                  <span>Filar 2: Rezerwacje Live</span>
                </div>
                <h3 className="font-playfair text-xl sm:text-2xl font-bold text-surface-900 leading-snug">
                  Zapis w kalendarzu w czasie rzeczywistym
                </h3>
                <p className="text-surface-700 text-xs sm:text-sm leading-relaxed">
                  Asystentka na bieżąco sprawdza wolne terminy w grafiku, uwzględnia czas trwania konkretnej usługi oraz preferencje klienta, wpisując rezerwację bezpośrednio do terminarza (Google, Booksy, kalendarz EVA).
                </p>
                <ul className="space-y-1.5 pt-1 text-xs text-surface-800 font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-gold-600 shrink-0" />
                    <span>Zero ryzyka nałożenia się wizyt i pomyłek w grafiku</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-gold-600 shrink-0" />
                    <span>Automatyczne SMS-y potwierdzające do klienta</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ================= STAGE 3: FILARY 3 & 4 (200vh - 300vh) ================= */}
        {/* Wyświetlane po 2 na raz: po lewej i po prawej */}
        <div className="min-h-screen flex flex-col justify-center px-4 sm:px-8 lg:px-12 py-12">
          <div className="max-w-6xl mx-auto w-full">
            <div className="text-center mb-6 sm:mb-8 pointer-events-auto">
              <span className="text-gold-700 font-bold text-xs uppercase tracking-widest block mb-1">
                Wiedza Ekspercka i Bezwzględna Dyskrecja
              </span>
              <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-surface-900">
                Baza Wiedzy AI, 140+ Języków i Ochrona Deep Work
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 pointer-events-auto">
              {/* KAFELEK 3: LEWA STRONA */}
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-gold-200/80 shadow-xl hover:shadow-2xl transition-all space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-gold-50 border border-gold-200 flex items-center justify-center text-gold-600">
                  <Globe size={24} />
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gold-100 text-gold-900 text-[11px] font-bold uppercase tracking-wider">
                  <span>Filar 3: Baza Wiedzy & Języki</span>
                </div>
                <h3 className="font-playfair text-xl sm:text-2xl font-bold text-surface-900 leading-snug">
                  Baza wiedzy z PDF i ponad 140 języków
                </h3>
                <p className="text-surface-700 text-xs sm:text-sm leading-relaxed">
                  Wystarczy wgrać zdjęcia ulotek, cennik PDF czy opis procedur. EVA uczy się specyfiki Twojego biznesu i odpowiada na pytania klientów. Automatycznie rozpoznaje język rozmówcy i prowadzi płynny dialog w 1 z 4 naturalnych głosów AI.
                </p>
                <ul className="space-y-1.5 pt-1 text-xs text-surface-800 font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-gold-600 shrink-0" />
                    <span>Autodetekcja 140+ języków bez sztucznego akcentu</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-gold-600 shrink-0" />
                    <span>4 naturalne głosy studyjne (2 kobiece, 2 męskie)</span>
                  </li>
                </ul>
              </div>

              {/* KAFELEK 4: PRAWA STRONA */}
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-gold-200/80 shadow-xl hover:shadow-2xl transition-all space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-gold-50 border border-gold-200 flex items-center justify-center text-gold-600">
                  <Shield size={24} />
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gold-100 text-gold-900 text-[11px] font-bold uppercase tracking-wider">
                  <span>Filar 4: Tarcza Prywatności</span>
                </div>
                <h3 className="font-playfair text-xl sm:text-2xl font-bold text-surface-900 leading-snug">
                  Ochrona Deep Work & Filtrowanie VIP
                </h3>
                <p className="text-surface-700 text-xs sm:text-sm leading-relaxed">
                  Dyskretna sekretarka osobista. Dwuetapowe inteligentne powitanie filtruje telemarketerów i natrętów, wpuszcza wyłącznie kontakty VIP (rodzina, wspólnik), a dostęp do wrażliwych danych zabezpiecza kodem PIN.
                </p>
                <ul className="space-y-1.5 pt-1 text-xs text-surface-800 font-medium">
                  <li className="flex items-center gap-2">
                    <Lock size={15} className="text-gold-600 shrink-0" />
                    <span>Autoryzacja kodem PIN z telefonu właściciela</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-gold-600 shrink-0" />
                    <span>Raport poranny Push, podsumowanie e-mail & alerty</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ================= STAGE 4: WIDŻET LIVE CALLBACK W 30 SEKUND (300vh - 400vh) ================= */}
        {/* Bezpośredni natywny komponent bez iframe i bez podwójnych pasków przewijania */}
        <div id="widzet" className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="pointer-events-auto max-w-md sm:max-w-lg w-full bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-gold-300/80 shadow-2xl space-y-4">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-100 text-gold-900 text-xs font-bold uppercase tracking-wider shadow-sm">
              <Sparkles size={14} className="text-gold-600" />
              <span>Live Callback 30 sek.</span>
            </div>

            <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-surface-900 leading-tight">
              Widżet „Live Callback w 30 sekund”
            </h2>

            <p className="text-surface-700 text-xs sm:text-sm leading-relaxed max-w-md mx-auto">
              Wpisz swój numer telefonu – asystent EVA zadzwoni do Ciebie automatycznie w 30 sekund, aby zaprezentować możliwości rozmowy na żywo.
            </p>

            {callbackError && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-2xl text-xs flex items-center justify-center gap-2 text-left">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                <span>{callbackError}</span>
              </div>
            )}

            {callbackCountdown === null ? (
              <form onSubmit={handleCallbackSubmit} className="space-y-4 max-w-sm mx-auto w-full pt-1">
                <div className="text-left">
                  <label className="block text-[11px] font-bold text-surface-700 uppercase tracking-wider mb-1.5">
                    Twój numer telefonu
                  </label>
                  <div className="relative">
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-surface-400 select-none">
                      +48
                    </div>
                    <input
                      type="tel"
                      required
                      placeholder="np. 500 123 456"
                      value={callbackPhone}
                      onChange={(e) => setCallbackPhone(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-surface-50 border border-surface-200 rounded-2xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gold-500/20 focus:border-gold-500 transition"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={callbackLoading}
                  className="w-full py-3.5 px-4 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white rounded-2xl text-sm font-bold shadow-lg shadow-gold-500/25 flex items-center justify-center gap-2 transition cursor-pointer active:scale-[0.99] disabled:opacity-50"
                >
                  {callbackLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Zamawianie połączenia...</span>
                    </>
                  ) : (
                    <>
                      <PhoneCall className="w-4 h-4" />
                      <span>Zadzwoń do mnie teraz (30 sek.)</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              /* Ekran Odliczania na Żywo */
              <div className="py-3 space-y-3.5 max-w-sm mx-auto w-full animate-in fade-in zoom-in-95 duration-200">
                <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-gold-400/20 animate-ping" />
                  <div className="absolute inset-2 rounded-full bg-gold-400/30 animate-pulse" />
                  <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-gold-500 to-gold-600 text-white flex items-center justify-center shadow-lg shadow-gold-500/30 z-10">
                    <span className="text-xl font-bold font-mono">{callbackCountdown}s</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-surface-900">
                    Oddzwaniamy na Twój numer
                  </h3>
                  <p className="text-xs text-gold-800 font-semibold mt-1">
                    {callbackStatus}
                  </p>
                </div>

                <div className="p-2.5 bg-gold-50 border border-gold-200 rounded-2xl text-xs text-gold-900 flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Trzymaj telefon w pogotowiu!</span>
                </div>

                <button
                  type="button"
                  onClick={() => { setCallbackCountdown(null); setCallbackPhone(''); }}
                  className="text-xs text-surface-500 hover:text-gold-700 underline transition cursor-pointer pt-1"
                >
                  Zamów połączenie na inny numer
                </button>
              </div>
            )}

            <p className="text-[11px] sm:text-xs text-gold-800 font-semibold bg-gold-50 border border-gold-200 py-1.5 px-3 rounded-xl inline-block">
              🎉 <strong>Program Wczesnych Testów:</strong> Pierwsze 5 firm otrzymuje miesiąc abonamentu całkowicie bezpłatnie!
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
