import {useTranslation} from 'react-i18next'

export function LanguageToggle() {
    const { i18n } = useTranslation();
    const handleToggle = () =>{

        const nextLang = i18n.language?.startsWith('en') ? 'fr' : 'en';
        i18n.changeLanguage(nextLang);
    }

    return (
    <button
      onClick={handleToggle}
      className="px-3 py-1.5 rounded-xl bg-zinc-800/80 border border-zinc-700/80 text-xs font-mono font-bold text-primary  hover:bg-zinc-800 transition-all cursor-pointer flex items-center gap-1.5"
    >
      <span>{i18n.language?.startsWith('fr') ? 'EN' : 'FR'}</span>
      <span className="text-zinc-500">|</span>
      <span className="text-zinc-300">
        {i18n.language?.startsWith('fr') ? '🇬🇧' : '🇫🇷'}
      </span>
    </button>
  )
}
