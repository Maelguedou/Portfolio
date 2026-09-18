import { useTranslation } from 'react-i18next';

export function Footer() {
    const { t } = useTranslation();
    return (
        <footer className="bg-primary/10 border-t border-zinc-800/80 py-8 px-4">
            <div className="max-w-6xl mx-auto">
                <p className="text-center text-zinc-400">
                    &copy; {new Date().getFullYear()} Mael Guedou. {t('footer.rights')}
                </p>
            </div>
        </footer>
    )
}
