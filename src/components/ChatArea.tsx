import React, { useEffect, useRef } from 'react';

const ChatArea: React.FC = () => {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const botUrl = "https://mdm-new-demo-app-730291121124.europe-central2.run.app";

    useEffect(() => {
        const handleBotTrigger = (event: Event) => {
            const customEvent = event as CustomEvent;
            const { type, payload } = customEvent.detail;

            if (iframeRef.current && iframeRef.current.contentWindow) {
                console.log("🚀 ChatArea forwarding signal to bot:", { type, payload });
                iframeRef.current.contentWindow.postMessage({ type, payload }, '*');
            }
        };

        window.addEventListener('bot-trigger', handleBotTrigger);

        return () => {
            window.removeEventListener('bot-trigger', handleBotTrigger);
        };
    }, []);

    return (
        <div className="w-full h-full bg-gray-900 flex items-center justify-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20"
                style={{ backgroundImage: 'radial-gradient(#00FFFF 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
            </div>

            {/* Iframe Container */}
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

export default ChatArea;
