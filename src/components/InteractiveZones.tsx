import React from 'react';
import { MessageSquare, FileText, Zap, ArrowRight } from 'lucide-react';

interface InteractiveZonesProps {
    onTrigger: (type: string, payload: string) => void;
}

const InteractiveZones: React.FC<InteractiveZonesProps> = ({ onTrigger }) => {
    const zones = [
        {
            id: 'support',
            icon: <MessageSquare className="h-8 w-8 text-blue-600" />,
            title: 'Wsparcie 24/7',
            description: 'Natychmiastowe odpowiedzi na pytania klientów, bez czekania na konsultanta.',
            action: 'Przetestuj Chat',
            triggerType: 'VERITAS_TRIGGER',
            triggerPayload: 'SHOW_SUPPORT_DEMO'
        },
        {
            id: 'knowledge',
            icon: <FileText className="h-8 w-8 text-purple-600" />,
            title: 'Baza Wiedzy',
            description: 'Automatyczne wyszukiwanie informacji w dokumentacji i cennikach.',
            action: 'Zobacz Cennik',
            triggerType: 'VERITAS_TRIGGER',
            triggerPayload: 'SHOW_PRICING'
        },
        {
            id: 'leads',
            icon: <Zap className="h-8 w-8 text-orange-600" />,
            title: 'Generowanie Leadów',
            description: 'Kwalifikacja klientów i umawianie spotkań bezpośrednio w czacie.',
            action: 'Rzut Mieszkania',
            triggerType: 'VERITAS_TRIGGER',
            triggerPayload: 'SHOW_CAROUSEL'
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        Interaktywne Strefy
                    </h2>
                    <p className="mt-4 text-xl text-gray-600">
                        Kliknij w kartę, aby zobaczyć reakcję bota w czasie rzeczywistym.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {zones.map((zone) => (
                        <div
                            key={zone.id}
                            onClick={() => onTrigger(zone.triggerType, zone.triggerPayload)}
                            className="group relative bg-white rounded-xl border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-gray-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="mb-6 p-4 bg-gray-50 rounded-xl inline-block group-hover:bg-gray-100 transition-colors">
                                {zone.icon}
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                {zone.title}
                            </h3>

                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {zone.description}
                            </p>

                            <div className="flex items-center text-sm font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                {zone.action}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InteractiveZones;
