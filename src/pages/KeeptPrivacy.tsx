import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Shield, ChevronLeft } from 'lucide-react';

export default function KeeptPrivacy() {
    const { t } = useTranslation();
    return (
        <div className="min-h-screen bg-[#0A0C10] text-gray-300 font-sans p-6 md:p-12 selection:bg-[#00C853] selection:text-black">
            <div className="max-w-3xl mx-auto">
                <nav className="mb-8">
                    <Link to="/keept" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm font-bold group">
                        <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                        {t('privacy.nav_back')}
                    </Link>
                </nav>

                <header className="mb-12 border-b border-white/10 pb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <Shield className="text-[#00C853]" size={32} />
                        <h1 className="text-3xl font-black text-white tracking-tight">{t('privacy.title')}</h1>
                    </div>
                    <p className="text-sm text-gray-500">{t('privacy.subtitle')}</p>
                </header>

                <article className="space-y-10 text-sm md:text-base leading-relaxed">
                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">{t('privacy.intro_title')}</h2>
                        <p>{t('privacy.intro_text')}</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">{t('privacy.perms_title')}</h2>
                        <ul className="list-disc pl-5 space-y-2 marker:text-[#00C853]">
                            <li><strong>{t('privacy.perm_camera').split(':')[0]}:</strong> {t('privacy.perm_camera').split(':')[1]}</li>
                            <li><strong>{t('privacy.perm_mic').split(':')[0]}:</strong> {t('privacy.perm_mic').split(':')[1]}</li>
                            <li><strong>{t('privacy.perm_bio').split(':')[0]}:</strong> {t('privacy.perm_bio').split(':')[1]}</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">{t('privacy.cloud_title')}</h2>
                        <p>{t('privacy.cloud_text')}</p>
                    </section>

                    {/* --- KLUCZOWA SEKCJA DLA GOOGLE PLAY --- */}
                    <section className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                        <h2 className="text-xl font-bold text-[#00C853] mb-4">{t('privacy.delete_title')}</h2>
                        <p className="mb-4 text-white">
                            {t('privacy.delete_intro')}
                        </p>
                        <ul className="list-disc pl-5 space-y-3 marker:text-[#00C853]">
                            <li>
                                <strong className="text-white">{t('privacy.delete_m1_title')}</strong><br />
                                {t('privacy.delete_m1_desc').split('>').map((part, i, arr) => (
                                    <span key={i}>
                                        {i === 1 ? <em>{part}</em> : part}
                                        {i < arr.length - 1 ? '>' : ''}
                                    </span>
                                ))}
                            </li>
                            <li>
                                <strong className="text-white">{t('privacy.delete_m2_title')}</strong><br />
                                {t('privacy.delete_m2_desc')} <br />
                                <a href="mailto:support@veritas-app.com" className="text-[#00C853] font-bold hover:underline">support@veritas-app.com</a> <br />
                                <em>{t('privacy.delete_subject')}</em>.
                            </li>
                        </ul>
                        <p className="mt-4 text-xs text-gray-500 border-t border-white/10 pt-3">
                            {t('privacy.delete_footer')}
                        </p>
                    </section>
                    {/* --------------------------------------- */}

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">{t('privacy.contact_title')}</h2>
                        <p>{t('privacy.contact_text')} <a href="mailto:support@veritas-app.com" className="text-[#00C853] hover:underline">support@veritas-app.com</a></p>
                    </section>
                </article>
            </div>
        </div>
    );
}