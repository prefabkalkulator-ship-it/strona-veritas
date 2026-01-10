import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowLeft } from 'lucide-react';

export default function KeeptPrivacy() {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans p-6 md:p-12">
            <div className="max-w-3xl mx-auto">
                <Link to="/keept" className="flex items-center gap-2 text-gray-500 hover:text-black mb-8 transition-colors">
                    <ArrowLeft size={18} /> Wróć do strony głównej
                </Link>

                <header className="mb-12 border-b pb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <ShieldCheck className="text-green-600" size={32} />
                        <h1 className="text-3xl font-black tracking-tight">Polityka Prywatności</h1>
                    </div>
                    <p className="text-gray-500">Aplikacja: Veritas Keept (Android/iOS) • Ostatnia aktualizacja: 10 Stycznia 2026</p>
                </header>

                <article className="prose prose-slate max-w-none space-y-8">
                    <section>
                        <h2 className="text-xl font-bold mb-3">1. Wstęp</h2>
                        <p>Twoja prywatność jest dla nas priorytetem. Niniejszy dokument wyjaśnia, w jaki sposób aplikacja Veritas Keept przetwarza, gromadzi i chroni Twoje dane.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3">2. Wykorzystywane Uprawnienia i Dane</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Kamera i Galeria (Google ML Kit):</strong> Aplikacja wykorzystuje aparat wyłącznie do skanowania dokumentów (paragonów, faktur). Przetwarzanie wstępne (wykrywanie krawędzi) odbywa się lokalnie na urządzeniu.</li>
                            <li><strong>Mikrofon:</strong> Używany tylko na wyraźne żądanie użytkownika w celu tworzenia notatek głosowych. Nagrania są przesyłane do transkrypcji i natychmiast usuwane po przetworzeniu.</li>
                            <li><strong>Biometria (Fingerprint/FaceID):</strong> Aplikacja korzysta z systemowego API do weryfikacji tożsamości. Nie mamy dostępu do Twoich wzorców biometrycznych – otrzymujemy jedynie wynik weryfikacji (Pozytywny/Negatywny).</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3">3. Przetwarzanie w Chmurze i AI</h2>
                        <p>W celu zapewnienia funkcjonalności (OCR, analiza wydatków), zanonimizowane dane dokumentów są przetwarzane przez modele AI (Google Gemini). Dane są przechowywane w bezpiecznej infrastrukturze Google Firebase (lokalizacja: Europa/USA).</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3">4. Twoje Prawa</h2>
                        <p>Masz pełne prawo do:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Wglądu w swoje dane.</li>
                            <li>Usunięcia konta i wszystkich danych (funkcja dostępna w aplikacji lub poprzez kontakt).</li>
                            <li>Eksportu danych.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3">5. Kontakt</h2>
                        <p>W sprawach prywatności prosimy o kontakt: <a href="mailto:support@veritas-app.com" className="text-blue-600 underline">support@veritas-app.com</a></p>
                    </section>
                </article>
            </div>
        </div>
    );
}
