import React from 'react';

interface BotStageProps {
    iframeRef: React.RefObject<HTMLIFrameElement | null>;
}

const BotStage: React.FC<BotStageProps> = ({ iframeRef }) => {
    const botUrl = "https://mdm-new-demo-app-730291121124.europe-central2.run.app";

    return (
        <div className="w-full h-full bg-background-dark flex items-center justify-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20"
                style={{ backgroundImage: 'radial-gradient(#00FFFF 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
            </div>

            {/* Iframe Container - Full Height/Width of this column */}
            <div className="w-full h-full relative z-10">
                <iframe
                    ref={iframeRef}
                    src={botUrl}
                    title="Veritas Bot"
                    className="w-full h-full border-none"
                    allow="microphone; geolocation"
                />
            </div>
        </div>
    );
};

export default BotStage;
