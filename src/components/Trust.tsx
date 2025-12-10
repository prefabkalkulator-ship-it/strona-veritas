import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Trust: React.FC = () => {
    const companies = [
        "TechCorp", "GlobalSolutions", "InnovateAI", "FutureSystems", "DataFlow"
    ];

    return (
        <section className="py-12 bg-gray-50 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                        Zaufali nam liderzy branży
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {companies.map((company, index) => (
                        <div key={index} className="text-xl font-bold text-gray-400 hover:text-gray-800 transition-colors cursor-default">
                            {company}
                        </div>
                    ))}
                </div>

                <div className="mt-12 flex items-center justify-center text-sm text-gray-500">
                    <ShieldCheck className="h-5 w-5 mr-2 text-green-500" />
                    <span>Twoje dane są bezpieczne. Zgodność z RODO i standardami UE.</span>
                </div>
            </div>
        </section>
    );
};

export default Trust;
