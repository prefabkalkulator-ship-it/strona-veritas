import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
    iframeRef: React.RefObject<HTMLIFrameElement | null>;
}

const Hero: React.FC<HeroProps> = ({ iframeRef }) => {
    const botUrl = "https://mdm-new-demo-app-730291121124.europe-central2.run.app";

    return (
        <section className="relative w-full min-h-screen flex flex-col lg:flex-row overflow-hidden bg-gradient-to-br from-slate-50 to-slate-200">
            {/* Left Side: Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 lg:px-16 py-12 lg:py-0 z-10">
                <div className="max-w-xl">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-6">
                        <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
                        Nowy Standard Obsługi
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
                        Zatrudnij Veritasa. <br />
                        <span className="text-blue-600">Asystenta, który nie śpi.</span>
                    </h1>

                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Zwiększ konwersję i zautomatyzuj obsługę klienta dzięki inteligentnemu botowi,
                        który rozumie kontekst, prezentuje oferty i umawia spotkania.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-emerald-600 border border-transparent rounded-full hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                            Poznaj Cennik
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </button>
                        <button className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                            Zobacz Demo
                        </button>
                    </div>
                </div>
            </div>

            {/* Right Side: Bot Stage */}
            <div className="w-full lg:w-1/2 bg-gray-100 flex items-center justify-center p-4 lg:p-12 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-200 opacity-50"></div>

                {/* Window Container */}
                <div className="relative w-full max-w-md h-[600px] bg-white rounded-2xl shadow-2xl ring-1 ring-slate-900/5 overflow-hidden flex flex-col transform transition-all hover:scale-[1.01] duration-500">
                    {/* Window Header */}
                    <div className="h-10 bg-slate-100 border-b border-slate-200 flex items-center px-4 justify-between shrink-0">
                        <div className="flex space-x-2">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                        <div className="text-xs font-medium text-gray-500">Veritas AI</div>
                        <div className="w-8"></div> {/* Spacer for centering */}
                    </div>

                    {/* Iframe Container */}
                    <div className="flex-1 bg-white relative">
                        <iframe
                            ref={iframeRef}
                            src={botUrl}
                            title="Veritas Bot"
                            className="w-full h-full border-none"
                            allow="microphone; geolocation"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
