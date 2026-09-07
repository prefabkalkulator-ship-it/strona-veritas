# Specyfikacja Projektowa Landing Page EVA (Easy Voice Assistant)
**Dedykowana podstrona:** `https://veritas-app.com/eva`  
**Podstrona Regulaminu:** `https://veritas-app.com/eva/regulamin`  
**Aplikacja SaaS / Panel Klienta:** `https://beautyvoice-bff.web.app`  
**Oficjalne Centrum Instrukcji:** `https://beautyvoice-bff.web.app/dashboard/guide`  
**Aktywny numer testowy DEMO AI:** `+48343433088`  

---

## 1. System Identyfikacji Wizualnej (Design System & Brand Assets)

Aby strona `https://veritas-app.com/eva` oraz podstrona regulaminu tworzyły w 100% spójną całość z aplikacją, należy ściśle trzymać się poniższej palety barw, typografii i konwencji stylistycznych.

### 1.1. Paleta Kolorów (Design Tokens)

Aplikacja wykorzystuje harmonijną kompozycję ciepłego złota (luksus, precyzja, technologia premium) oraz głębokich, stonowanych grafitów/czerni (zinc/surface).

#### Akcent Złoty (Gold / Amber):
- `gold-50`: `#fbf9f4` – subtelne tła sekcji, podświetlenia badge'y
- `gold-100`: `#f4eee2` – obramowania badge'y, delikatne akcenty
- `gold-200`: `#eadcb9` – aktywne selektory, hover-border
- `gold-300`: `#dec38a` – obramowania kart premium
- `gold-400`: `#d3a45c` – gradienty, ikony świetlne
- `gold-500`: `#ca8a3e` – główny kolor akcentowy złota (główny brand color)
- `gold-600`: `#bb7033` – hover dla linków i przycisków
- `gold-700`: `#9c542c` – teksty akcentowe na jasnym tle (wysoki kontrast)
- `gold-800`: `#814529`
- `gold-900`: `#693923` – ciemny brąz/złoto dla kontrastowych podpisów

#### Kolory Powierzchni i Tekstu (Surface / Neutral Zinc):
- `surface-50`: `#fafafa` – główne tło aplikacji (ciepła biel / alabaster)
- `surface-100`: `#f4f4f5` – tła kart wewnętrznych, pigułek i pól
- `surface-200`: `#e4e4e7` – delikatne linie podziału, obramowania
- `surface-300`: `#d4d4d8` – nieaktywne ikony i obramowania
- `surface-400`: `#a1a1aa` – placeholdery, drugorzędne etykiety
- `surface-500`: `#71717a` – opisy, tekst drugorzędny (subtitles)
- `surface-600`: `#52525b` – czytelny tekst akapitowy
- `surface-700`: `#3f3f46` – etykiety pól, ciemny tekst
- `surface-800`: `#27272a` – ciemne przyciski w stanie hover
- `surface-900`: `#18181b` – główny kolor nagłówków, ciemnych kart i przycisków podstawowych

#### Gradienty Premium:
- **Gold Brand Gradient:** `linear-gradient(135deg, #d3a45c 0%, #ca8a3e 50%, #bb7033 100%)`
- **Dark Luxury Gradient:** `linear-gradient(180deg, #27272a 0%, #18181b 100%)`
- **Soft Ambient Glow:** `radial-gradient(circle, rgba(202,138,62,0.12) 0%, rgba(250,250,250,0) 70%)`

---

### 1.2. Typografia

- **Nagłówki (Headings H1–H4):**  
  `'Playfair Display', ui-serif, Georgia, serif`  
  Nadaje elegancji, prestiżu i skojarzenia z profesjonalną, indywidualną obsługą klienta.  
  *Waga:* Bold (700) lub SemiBold (600).
- **Tekst Główny (Body, UI, Buttons):**  
  `'Inter', ui-sans-serif, system-ui, sans-serif`  
  Doskonała czytelność, precyzja parametrów technicznych i cen.  
  *Wagi:* Regular (400), Medium (500), SemiBold (600).

### 1.3. Zapis Marki i Logotyp
- **Nazwa skrócona:** `EVA`
- **Nazwa rozwinięta:** `EasyVoiceAssistant`
- **Zapis logotypu (HTML/CSS):**  
  `E<span className="text-[0.65em]">asy</span>V<span className="text-[0.65em]">oice</span>A<span className="text-[0.65em]">ssistant</span>`
- **Hasło pozycjonujące:**  
  *„Twój wirtualny pracownik, który odbiera telefony i aktywnie dba o obłożenie Twojego kalendarza 24/7”*

### 1.4. Efekty i Karty (Glassmorphism & Shadows)
- **Glass Card:**  
  `background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(12px); border: 1px solid rgba(228, 228, 231, 0.8); border-radius: 1.5rem (24px); box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.05);`
- **Zaokrąglenia:** `rounded-2xl` (16px) dla przycisków/inputów, `rounded-3xl` (24px) dla głównych kafelków i sekcji.

---

## 2. Architektura i Koncepcja Podstrony `https://veritas-app.com/eva`

Strona powinna być zaprojektowana jako nowoczesny, konwertujący landing page B2B typu One-Page z wyraźną hierarchią sekcji.

### 2.1. Usuwalny / Modułowy Banner Promocyjny (Program Wczesnych Testów)
> [!IMPORTANT]
> **Komponent do łatwego wyłączenia (Feature Flag / toggle)**  
> Umieszczony na samej górze (sticky lub tuż pod nawigacją).

- **Treść:**  
  `🎉 Program Wczesnych Testów: Zapraszamy do testowania asystenta EVA! Pierwsze 3 firmy otrzymują 3 miesiące abonamentu całkowicie bezpłatnie.`
- **CTA:** `Zgłoś się do testów` (kieruje do formularza rejestracji: `https://beautyvoice-bff.web.app/register`).
- **Sterowanie:** Zapewnij w kodzie prostą flagę boolean `const SHOW_BETA_BANNER = true;`, aby po wyczerpaniu 3 darmowych miejsc można było jednym kliknięciem wyłączyć banner, a także ikonę `[X]` do zamknięcia przez użytkownika w bieżącej sesji.

---

### 2.2. Układ Sekcji Landing Page

```
+-------------------------------------------------------------------+
| 1. Top Announcement Bar (Promocja dla pierwszych 3 testerów)      |
+-------------------------------------------------------------------+
| 2. Header / Nawigacja (Logo EVA, Dlaczego EVA, Marketing, Cennik) |
+-------------------------------------------------------------------+
| 3. Hero Section                                                   |
|    - H1: Twój wirtualny pracownik odbiera telefony i zapełnia grafik |
|    - Interaktywne CTA: Zadzwoń do wersji DEMO (+48 34 343 30 88)  |
|    - Drugie CTA: Rozpocznij korzystanie / Załóż konto              |
+-------------------------------------------------------------------+
| 4. Sekcja Demonstracyjna (Interaktywny Test na Żywo)              |
|    - Wyróżniona karta z telefonem do asystentki DEMO              |
|    - Wyjaśnienie, o co możesz zapytać EVA pod numerem testowym    |
+-------------------------------------------------------------------+
| 5. Trzy Filarowe Korzyści dla Biznesu                             |
|    - Dostępność 24/7 (koniec nieodebranych telefonów)             |
|    - Integracja z kalendarzem w czasie rzeczywistym               |
|    - Baza wiedzy AI (uczy się z Twoich materiałów i cenników)     |
+-------------------------------------------------------------------+
| 6. Moduł Wzrostu Przychodów (Automatyczny Marketing & Retention)  |
|    - Wypełnianie pustych slotów (Last Minute)                     |
|    - Badanie zadowolenia klienta (NPS)                            |
|    - Reaktywacja klientów nieaktywnych 90+ dni                    |
|    - Potwierdzanie wizyt (SMS lub telefon AI - koniec No-Show)    |
+-------------------------------------------------------------------+
| 7. Jak to działa w 3 prostych krokach                             |
|    1. Wpisujesz krótki kod GSM na telefonie (*21*...)             |
|    2. Asystentka EVA odbiera, rozmawia i zapisuje termin          |
|    3. Klient otrzymuje automatyczny SMS z potwierdzeniem          |
+-------------------------------------------------------------------+
| 8. Cennik i Pakiety (Standard 199 zł / Premium 399 zł)            |
+-------------------------------------------------------------------+
| 9. Często zadawane pytania (FAQ)                                  |
+-------------------------------------------------------------------+
| 10. Footer (Linki: Regulamin B2B, Instrukcja, Kontakt, Veritas)   |
+-------------------------------------------------------------------+
```

---

### 2.3. Kluczowe Treści Poszczególnych Sekcji

#### Hero Section:
- **Badge:** `⭐ Rewolucja w obsłudze klienta i zarządzaniu kalendarzem`
- **Nagłówek:** *„Nigdy więcej nieodebranych telefonów i pustych okienek w kalendarzu. Asystent głosowy AI, który odbiera, rezerwuje i aktywnie dba o Twój grafik.”*
- **Podtytuł:** *„EVA odbiera połączenia, gdy pracujesz z klientem, masz wolne lub prowadzisz samochód. Odpowiada na pytania o cennik, sprawdza wolne terminy i natychmiast wpisuje rezerwację do kalendarza – a w planie Premium sama dzwoni, by potwierdzić wizyty i zapełnia nagłe luki w grafiku.”*
- **Główny Call to Action (Wyróżniony):**
  - **Przycisk 1 (Telefon bezpośredni do AI):**  
    `📞 Zadzwoń do EVA (DEMO): +48 34 343 30 88`  
    *Etykieta pomocnicza:* „Zadzwoń teraz i przetestuj na żywo! Zapytaj asystentkę: jak działa, ile kosztuje, jakie są pakiety i jak pomaga firmom.”
  - **Przycisk 2 (Aplikacja):**  
    `🚀 Załóż konto w aplikacji` (link do `https://beautyvoice-bff.web.app/register`)
  - **Przycisk 3 (Dokumentacja):**  
    `📖 Zobacz Instrukcję Wdrożenia` (link do `https://beautyvoice-bff.web.app/dashboard/guide`)

#### Karta Wersji Testowej DEMO:
- **Numer telefonu:** `+48 34 343 30 88`
- **Charakterystyka:** To w pełni funkcjonalna wersja demonstracyjna sztucznej inteligencji EVA.
- **O co możesz zapytać EVA podczas testowego połączenia?**
  1. *„Jak działasz i w czym możesz wyręczyć moją firmę?”*
  2. *„Ile kosztuje abonament i czym różni się pakiet Standard od Premium?”*
  3. *„W jaki sposób zapełniasz puste okienka i potwierdzasz wizyty?”*
  4. *„Jak w 10 minut przekierować połączenia z mojego telefonu?”*

---

### 2.4. Wyróżniona Sekcja: Automatyczny Marketing i Maksymalizacja Przychodów (Silnik Planu Premium)

> [!TIP]
> To najważniejsza przewaga biznesowa platformy, która realnie zarabia na siebie już w pierwszym tygodniu działania!

1. **Wypełnianie Pustych Slotów (Funkcja Last Minute):**  
   Gdy klient odwoła rezerwację lub pojawi się niespodziewane okienko w grafiku pracownika, EVA natychmiast proponuje wolny termin klientom oczekującym lub wysyła szybką propozycję terminu. Zamiast straconej godziny i kosztu przestoju – zyskujesz pełne obłożenie.
2. **Badanie Zadowolenia Klienta (NPS & Feedback):**  
   Po zakończonej wizycie system bada opinię klienta. Jeżeli pojawiły się jakiekolwiek uwagi, trafiają one natychmiast do właściciela firmy, zanim klient zdecyduje się na negatywną recenzję w sieci. Zadowoleni klienci są zachęcani do powrotu.
3. **Reaktywacja Klientów „Uśpionych” (Baza 90+ dni):**  
   EVA monitoruje historię wizyt i automatycznie identyfikuje klientów, którzy nie pojawili się w firmie od ponad 3 miesięcy. Wysyła spersonalizowaną wiadomość przypominającą lub propozycję nowego terminu, przywracając dawnych klientów do regularnych wizyt.
4. **Inteligentne Potwierdzanie Rezerwacji (Eliminacja „No-Show”):**  
   Zapominalscy klienci to plaga każdego usługodawcy. EVA wysyła dodatkowy SMS lub **sama wykonuje automatyczny telefon do klienta dzień przed wizytą**, naturalnym głosem pyta o potwierdzenie obecności i natychmiast aktualizuje kalendarz. Właściciel firmy ma 100% aktualną, pewną wiedzę o swoim jutrzejszym dniu pracy.

---

### 2.5. Cennik i Pakiety

1. **Pakiet Standard – 199 zł netto / mc:**
   - **100 darmowych minut** na rozmowy z klientami co miesiąc
   - 1 dedykowany techniczny numer telefonu
   - Naturalny, płynny polski głos AI
   - Automatyczne umawianie terminów w kalendarzu
   - Potwierdzenia SMS do klientów po rezerwacji
   - Samodzielna konfiguracja w 10 minut
   - CTA: `Wybierz Standard` -> `https://beautyvoice-bff.web.app/register`

2. **Pakiet Premium – 399 zł netto / mc (Rekomendowany – Pełna Automatyzacja Biznesu):**
   - **300 darmowych minut** na rozmowy w pakiecie co miesiąc
   - **Wypełnianie okienek w kalendarzu (Last Minute)** – natychmiastowe ratowanie odwołanych terminów
   - **Badanie zadowolenia klienta (NPS)** – automatyczne zbieranie opinii po wizycie
   - **Reaktywacja klientów 90+ dni** – automatyczny powrót klientów, którzy dawno nie korzystali z usług
   - **Telefoniczne lub SMS-owe potwierdzanie wizyt dzień wcześniej** – asystent sam dzwoni do klienta, dając firmie 100% pewny grafik i zero „no-show”
   - **Wielokanałowość** – jednoczesna obsługa wielu dzwoniących klientów (do 5 równoległych rozmów)
   - **Inteligentna Baza Wiedzy AI** – automatyczna nauka ze zdjęć cenników, ulotek i dokumentów PDF
   - **Zarządzanie zespołem i grafikami** – elastyczne godziny pracy pracowników i przypisane usługi
   - **Obsługa świąt i urlopów** – automatyczna blokada rezerwacji w dni wolne
   - CTA: `Wybierz Premium` -> `https://beautyvoice-bff.web.app/register`

---

## 3. Podstrona Regulaminu (`https://veritas-app.com/eva/regulamin`)

Strona regulaminu jest formalnym dokumentem B2B zabezpieczającym Usługodawcę. Zawiera responsywny boczny spis treści (Table of Contents) oraz 7 ponumerowanych paragrafów.

---

## 4. Wdrożone Linki w Aplikacji `beautyvoice-bff.web.app`

W kodzie aplikacji zostały wdrożone następujące odnośniki:
1. **Formularz Rejestracji (`Auth.tsx`):**  
   Obowiązkowy checkbox akceptacji:  
   *„Oświadczam, że zapoznałem(-am) się i akceptuję Regulamin Świadczenia Usług B2B oraz zawartą w nim Umowę Powierzenia Przetwarzania Danych (DPA)”* z bezpośrednim linkiem do `https://veritas-app.com/eva/regulamin`.
2. **Krok Płatności i Prowizjonowania (`Subscription.tsx`):**  
   Zastąpiono dawny lokalny link `/terms` oficjalnym adresem `https://veritas-app.com/eva/regulamin` oraz zaktualizowano listę cech pakietu Premium o moduły marketingowe (Last Minute, Baza 90+, NPS, potwierdzanie telefoniczne).
3. **Centrum Pomocy i Instrukcja (`Guide.tsx`):**  
   Dodano pozycję w sekcji Subskrypcja: *„Gdzie znajdę Regulamin Świadczenia Usług B2B i Umowę Powierzenia Danych (DPA)?”* z przyciskiem otwierającym regulamin w nowej karcie.
4. **Stopka Landing Page (`LandingPage.tsx`):**  
   Dodano bezpośrednie odnośniki do `https://veritas-app.com/eva`, `https://veritas-app.com/eva/regulamin`, Instrukcji i infolinii DEMO.

---

## 5. Gotowy Tekst Regulaminu B2B i DPA (Do publikacji na `/eva/regulamin`)

Poniższy tekst jest gotowy do bezpośredniego wklejenia na podstronie `https://veritas-app.com/eva/regulamin`:

```markdown
# Regulamin Świadczenia Usług Drogą Elektroniczną (B2B) oraz Umowa Powierzenia Przetwarzania Danych (DPA) – Platforma EVA

**Data wejścia w życie:** 1 marca 2026 r.  
**Operator Serwisu:** Veritas App (dalej „Usługodawca”)  
**Adres internetowy:** https://veritas-app.com/eva  
**Aplikacja SaaS:** https://beautyvoice-bff.web.app  

Niniejszy Regulamin określa zasady korzystania z oprogramowania asystenta głosowego sztucznej inteligencji EVA (Easy Voice Assistant) udostępnianego w modelu Software as a Service (SaaS).

---

### § 1. Postanowienia Ogólne i Model Świadczenia Usługi
1. Usługa świadczona przez Usługodawcę polega na udostępnieniu oprogramowania chmurowego (SaaS), w tym algorytmów sztucznej inteligencji (LLM / Voice AI), w celu automatycznego odbierania połączeń telefonicznych, udzielania informacji o usługach, rejestrowania rezerwacji w wirtualnym kalendarzu Usługobiorcy oraz automatyzacji procesów relacyjnych (potwierdzanie wizyt, badanie satysfakcji, obsługa okienek last-minute).
2. Usługa skierowana jest **wyłącznie do przedsiębiorców** w rozumieniu art. 43[1] Kodeksu cywilnego (relacja Business-to-Business, B2B). Do umów zawieranych na podstawie niniejszego Regulaminu nie stosuje się przepisów o prawach konsumenta.
3. **Charakter Usługi:** Usługodawca jest wyłącznie dostawcą oprogramowania i infrastruktury teleinformatycznej. Usługodawca **nie jest operatorem telekomunikacyjnym** w rozumieniu Prawa Telekomunikacyjnego, a numery techniczne udostępniane w ramach platformy stanowią jedynie punkt wejścia ruchu dla algorytmów głosowych.

---

### § 2. Odpowiedzialność za Ruch Telefoniczny i Numery Techniczne
1. **Publiczny Numer Usługobiorcy:** Usługobiorca oświadcza i gwarantuje, że posiada pełne, wyłączne prawa do publicznego numeru telefonu, na którym promuje swoją działalność i z którego ustawia przekierowanie połączeń (warunkowe lub bezwarunkowe) na przydzielony numer techniczny.
2. **Przeznaczenie Numeru Technicznego:** Przydzielony w pakiecie numer techniczny służy **wyłącznie do odbioru połączeń przychodzących przekierowanych z publicznego numeru Usługobiorcy**.
3. **Bezwzględne Zakazy:**
   - Zabrania się podawania numeru technicznego do publicznej wiadomości jako głównego numeru kontaktowego firmy.
   - Bezwzględnie zabrania się wykorzystywania platformy, numeru technicznego lub bramek SMS do prowadzenia niezamówionego telemarketingu (tzw. "cold calling"), spamowania, phishingu lub jakichkolwiek działań naruszających obowiązujące przepisy prawa.
4. **Klauzula Zwolnienia z Odpowiedzialności (Indemnity):** Usługobiorca zobowiązuje się zwolnić Usługodawcę, jego pracowników oraz partnerów technologicznych z wszelkiej odpowiedzialności odszkodowawczej i prawnej w przypadku roszczeń osób trzecich wynikających z bezprawnego lub sprzecznego z Regulaminem wykorzystania połączeń telefonicznych przez Usługobiorcę.

---

### § 3. Komunikacja SMS, Połączenia Wychodzące i Zgody Odbiorców
1. Platforma EVA umożliwia automatyczną wysyłkę powiadomień SMS (potwierdzenie rezerwacji, przypomnienia, badanie opinii NPS, oferty powrotu dla bazy 90+) oraz automatyczne połączenia wychodzące AI w celu weryfikacji i potwierdzenia obecności klienta na zaplanowanej wizycie.
2. Usługobiorca oświadcza i gwarantuje, że dzwoniący klienci, na których numery kierowane są powiadomienia SMS oraz połączenia potwierdzające, wyrazili stosowne zgody na kontakt w celach związanych z obsługą rezerwacji zgodnie z wymogami RODO i Ustawy o świadczeniu usług drogą elektroniczną.
3. Usługodawca nie weryfikuje treści powiadomień wprowadzanych przez Usługobiorcę i nie ponosi odpowiedzialności za brak odpowiednich zgód po stronie odbiorców końcowych.

---

### § 4. Umowa Powierzenia Przetwarzania Danych Osobowych (DPA)
1. **Role Stron:**
   - **Usługobiorca** jest **Administratorem Danych Osobowych (ADO)** swoich klientów, pacjentów i pracowników.
   - **Usługodawca** działa jako **Podmiot Przetwarzający (Procesor)** w rozumieniu art. 28 RODO.
2. **Zakres Powierzonych Danych:**
   Numery telefonów dzwoniących, nagrania rozmów audio i ich transkrypcje tekstowe, imiona, nazwiska, daty i rodzaje zamawianych usług oraz ewentualne notatki powiązane z rezerwacją.
3. **Cel i Charakter Przetwarzania:**
   Przetwarzanie odbywa się wyłącznie w celu technicznej realizacji usługi asystenta głosowego (rozpoznawanie mowy, analiza intencji, zapis do kalendarza, wysyłka SMS transakcyjnego, połączenie weryfikacyjne).
4. **Podprocesorzy (Dalsze Powierzenie):** Usługobiorca wyraża zgodę na korzystanie przez Usługodawcę z zaufanych podwykonawców infrastruktury:
   - *Google LLC / Google Cloud Platform* (infrastruktura serwerowa i modele LLM Gemini),
   - *Zadarma / Twilio* (infrastruktura SIP/VoIP oraz bramki SMS).
5. **Środki Bezpieczeństwa:** Usługodawca stosuje szyfrowanie danych w tranzycie (TLS 1.3) oraz w spoczynku (AES-256), a także izolację baz danych poszczególnych firm (multi-tenancy).

---

### § 5. Cennik, Pakiety i Rozliczenia
1. Korzystanie z platformy wymaga uiszczania opłaty abonamentowej zgodnie z wybranym planem:
   - **Plan Standard:** 199 zł netto / miesiąc (zawiera 100 darmowych minut połączeń, 1 numer techniczny, rezerwacje kalendarzowe).
   - **Plan Premium:** 399 zł netto / miesiąc (zawiera 300 darmowych minut połączeń, moduł Last Minute, badanie NPS, reaktywację klientów 90+, telefoniczne potwierdzanie rezerwacji, wielokanałowość oraz Bazę Wiedzy AI).
2. Minuty w pakiecie odnawiają się co miesiąc i nie przechodzą na kolejny okres rozliczeniowy.
3. Usługobiorca może w dowolnym momencie zawiesić konto na okres do 30 dni lub anulować subskrypcję z zachowaniem skutku na koniec bieżącego okresu rozliczeniowego.

---

### § 6. Dostępność Usługi i Gwarancja Poziomu Świadczenia (SLA)
1. Usługodawca dokłada należytej staranności, aby zapewnić dostępność platformy na poziomie 99% w skali roku.
2. Usługodawca nie ponosi odpowiedzialności za przerwy w działaniu usługi spowodowane awariami publicznych sieci telekomunikacyjnych (GSM/PSTN), operatorów komórkowych Usługobiorcy lub działaniem siły wyższej.
3. Asystent EVA pełni funkcję recepcyjno-organizacyjną i nie może być wykorzystywany do obsługi połączeń alarmowych ani ratownictwa medycznego.

---

### § 7. Postanowienia Końcowe
1. Wszelkie spory powstałe w związku z realizacją niniejszej umowy będą rozstrzygane przez sąd powszechny właściwy dla siedziby Usługodawcy.
2. W sprawach nieuregulowanych niniejszym Regulaminem zastosowanie mają przepisy Kodeksu Cywilnego oraz prawa polskiego.
```

---

## 6. Gotowy Prompt dla Agenta Budującego Podstrony w Projekcie `veritas-app.com`

Poniższy prompt możesz bezpośrednio skopiować i przekazać agentowi AI pracującemu w repozytorium `veritas-app.com`:

```markdown
Zadanie: Stworzenie spójnej wizualnie i koncepcyjnie podstrony produktu EVA (/eva) oraz podstrony regulaminu B2B (/eva/regulamin) w serwisie https://veritas-app.com.

Kontekst i Wymagania Techniczne:
Projekt EVA (Easy Voice Assistant) to asystent głosowy AI odbierający telefony, umawiający wizyty 24/7 oraz aktywnie dbający o obłożenie kalendarza firm (usługi, gabinety lekarskie i beauty, motoryzacja, kancelarie itp.).
- Panel aplikacji / Rejestracja: https://beautyvoice-bff.web.app/register
- Centrum Instrukcji: https://beautyvoice-bff.web.app/dashboard/guide
- Aktywny numer testowy DEMO AI: +48 34 343 30 88 (pod tym numerem klient rozmawia z żywym asystentem EVA, który wyjaśnia działanie systemu, cennik, pakiety i jak umawia wizyty).

1. SYSTEM DESIGNU I STYL WIZUALNY:
- Typografia:
  * Nagłówki (H1–H4): prestiżowy font szeryfowy 'Playfair Display' (luksus, indywidualne podejście).
  * Tekst podstawowy i przyciski: 'Inter' (nowoczesność, precyzja, technologia).
- Kolory Złota (Gold Accent):
  * Akcent główny (brand): #ca8a3e (gold-500)
  * Hover / ciemniejszy: #bb7033 (gold-600)
  * Jasne tła i podświetlenia: #fbf9f4 (gold-50) oraz #f4eee2 (gold-100)
  * Obramowania kart premium: #dec38a (gold-300)
- Kolory Powierzchni i Tekstu (Dark/Zinc):
  * Tło strony: #fafafa (surface-50)
  * Karty, nagłówki, ciemne przyciski: ciemny grafit #18181b (surface-900)
  * Teksty akapitowe: #52525b (surface-600)
- Stylistyka: Styl glassmorphism (półprzezroczyste białe karty rgba(255,255,255,0.85) z efektem backdrop-blur-md, zaokrąglenia 24px / rounded-3xl, subtelne cienie).
- Logotyp w nagłówku: E<span style="font-size:0.65em">asy</span>V<span style="font-size:0.65em">oice</span>A<span style="font-size:0.65em">ssistant</span>.

2. PODSTRONA /eva (GŁÓWNY LANDING PAGE):
Zbuduj nowoczesną, responsywną podstronę /eva z następującymi sekcjami:
A) Usuwalny / wyłączalny banner promocyjny na samej górze:
   - Treść: "🎉 Program Wczesnych Testów: Zapraszamy do testowania asystenta EVA! Pierwsze 3 firmy otrzymują 3 miesiące abonamentu całkowicie bezpłatnie."
   - Przycisk CTA: "Zgłoś się do testów" (link do https://beautyvoice-bff.web.app/register).
   - W kodzie umieść flagę boolean (np. const SHOW_BETA_BANNER = true;), aby jednym przestawieniem na false móc natychmiast ukryć ten banner, gdy 3 miejsca zostaną zapełnione, oraz przycisk [X] do zamknięcia przez użytkownika w przeglądarce.
B) Sekcja Hero:
   - Badge: "⭐ Rewolucja w obsłudze klienta i zarządzaniu kalendarzem"
   - H1: "Nigdy więcej nieodebranych telefonów i pustych okienek w kalendarzu. Twój wirtualny pracownik AI odbiera i dba o Twój grafik 24/7."
   - Podtytuł: "EVA odbiera połączenia, gdy pracujesz z klientem, masz wolne lub prowadzisz samochód. Sprawdza grafik, odpowiada na pytania o cennik i natychmiast wpisuje rezerwację. W planie Premium sama dzwoni, by potwierdzić wizyty i zapełnia nagłe luki w grafiku."
   - Główne przyciski akcji:
     1. [📞 Zadzwoń do EVA DEMO: +48 34 343 30 88] (tel:+48343433088) – z podpisem: "Przetestuj na żywo! Zadzwoń i zapytaj asystentkę o cennik, pakiety i jak działa."
     2. [🚀 Załóż konto w aplikacji] -> https://beautyvoice-bff.web.app/register
     3. [📖 Zobacz Instrukcję Wdrożenia] -> https://beautyvoice-bff.web.app/dashboard/guide
C) Sekcja Demonstracyjna (Wyróżniona Karta z telefonem DEMO +48 34 343 30 88):
   - Wyjaśnienie, o co można zapytać asystentkę podczas testowego połączenia:
     1. „Jak działasz i w czym wyręczasz firmę?”
     2. „Ile kosztuje abonament i co zawierają pakiety Standard i Premium?”
     3. „W jaki sposób zapełniasz puste okienka i potwierdzasz rezerwacje?”
     4. „Jak w 10 minut przekierować połączenia ze smartfona?”
D) Dedykowana Sekcja: Aktywny Marketing i Maksymalizacja Przychodów (Główna Siła Planu Premium):
   Wyróżnij 4 kluczowe funkcje automatyczne:
   1. Wypełnianie pustych slotów (Last Minute) – natychmiastowe ratowanie nagle odwołanych terminów poprzez powiadamianie chętnych klientów.
   2. Badanie zadowolenia klienta (NPS) – automatyczne badanie opinii po wizycie i szybka reakcja na ewentualne uwagi.
   3. Reaktywacja klientów „uśpionych” (Baza 90+ dni) – asystent wyszukuje osoby, które dawno nie odwiedzały firmy, i proponuje nowy termin.
   4. Potwierdzanie rezerwacji dzień wcześniej (Zero No-Show) – dodatkowy SMS lub asystent sam dzwoni do klienta, by potwierdzić obecność. Właściciel ma 100% aktualny grafik.
E) Jak to działa w 3 prostych krokach:
   1. Wpisujesz krótki kod GSM na telefonie (*21*...).
   2. Asystentka EVA odbiera, rozmawia naturalnym głosem i zapisuje rezerwację.
   3. Klient otrzymuje automatyczny SMS z potwierdzeniem terminu.
F) Cennik i Pakiety:
   - Pakiet Standard (199 zł netto / mc): 100 darmowych minut, 1 dedykowany numer techniczny, rezerwacje w kalendarzu, SMS po wizycie, konfiguracja w 10 minut.
   - Pakiet Premium (399 zł netto / mc – Rekomendowany): 300 darmowych minut, pełny pakiet automatycznego marketingu (Last Minute, NPS, baza 90+, telefoniczne potwierdzanie wizyt eliminujące no-show), obsługa do 5 dzwoniących naraz, Baza Wiedzy AI ze zdjęć i plików PDF, grafiki pracowników i obsługa dni wolnych.
G) FAQ oraz Stopka:
   - Odnośniki w stopce: Regulamin B2B (/eva/regulamin), Instrukcja (https://beautyvoice-bff.web.app/dashboard/guide), Infolinia DEMO (+48343433088), Powrót do Veritas App.

3. PODSTRONA /eva/regulamin (REGULAMIN B2B I UMOWA POWIERZENIA DANYCH RODO):
Zbuduj czytelną podstronę z lewym spisem treści i treścią podzieloną na 7 ponumerowanych paragrafów:
- § 1. Postanowienia Ogólne i Model SaaS (relacja wyłącznie B2B, dostawca oprogramowania SaaS, a nie operator telekomunikacyjny).
- § 2. Odpowiedzialność za Ruch Telefoniczny i Numery (obowiązek posiadania praw do numeru publicznego przez klienta, numer techniczny wyłącznie do odbioru przekierowań, zakaz spamu i cold-callingu, klauzula indemnity chroniąca operatora).
- § 3. Komunikacja SMS, Połączenia Wychodzące i Zgody Odbiorców (potwierdzanie rezerwacji, badanie opinii, reaktywacja bazy 90+).
- § 4. Umowa Powierzenia Przetwarzania Danych Osobowych (DPA / RODO – Usługobiorca jako ADO, Usługodawca jako Procesor, dane: nagrania, transkrypcje, numery telefonów; podprocesorzy: Google Cloud, Zadarma/Twilio; szyfrowanie TLS 1.3 i AES-256).
- § 5. Cennik, Pakiety i Rozliczenia (Standard 199 zł netto z 100 min, Premium 399 zł netto z 300 min i modułami marketingowymi, możliwość zawieszenia konta na 30 dni).
- § 6. Dostępność Usługi i SLA (cel 99%, wyłączenie za awarie sieci GSM/PSTN i siłę wyższą, zakaz używania do numerów alarmowych/ratunkowych).
- § 7. Postanowienia Końcowe.

Zadbaj o pełną responsywność (mobile-friendly), semantykę HTML i estetykę zgodną z paletą barw EVA.
```
