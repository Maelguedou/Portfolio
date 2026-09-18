import { Mail, Phone, MapPin } from 'lucide-react'
import { useTranslation } from 'react-i18next';

// Composants SVG pour les réseaux
const GithubIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const LinkedinIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
)

const CONTACT_DETAILS = [
  {
    id: 'email',
    label: 'Email',
    value: 'maelguedou9@gmail.com',
    icon: Mail,
    href: 'mailto:maelguedou9@gmail.com',
  },
  {
    id: 'phone',
    label: 'Phone',
    value: '+229 01 96 42 07 97',
    icon: Phone,
    href: 'tel:+2290196420797',
  },
  {
    id: 'location',
    label: 'Location',
    value: 'Cité la Victoire, Abomey-Calavi, Bénin',
    icon: MapPin,
    href: null,
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/Maelguedou',
    icon: GithubIcon,
    href: 'https://github.com/Maelguedou',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/maël-abdias',
    icon: LinkedinIcon,
    href: 'https://www.linkedin.com/in/ma%C3%ABl-abdias/',
  },
]
    
export function ContactInfo() {
  const { t } = useTranslation();
  return (
    <div className="w-full bg-[#0d0e15] border border-zinc-800/80 rounded-2xl p-6 md:p-8 text-white shadow-xl">
      <h2 className="text-xl font-bold mb-6 text-zinc-100">
        {t('contact.infoTitle')}
      </h2>

      <div className="space-y-5">
        {CONTACT_DETAILS.map((item) => {
          const Icon = item.icon
          return (
            <div key={item.id} className="flex items-center gap-4">
              {/* Badge Icône */}
              <div className="w-12 h-12 rounded-xl bg-[#2b2e1e] border border-[#3f3823] flex items-center justify-center shrink-0 text-yellow-400">
                <Icon className="w-5 h-5" />
              </div>

              {/* Contenu Texte */}
              <div className="flex flex-col">
                <span className="text-xs text-zinc-400 font-medium">
                  {t(`contact.details.${item.id}`)}
                </span>

                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="text-sm md:text-base font-bold text-zinc-100 hover:text-yellow-400 transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="text-sm md:text-base font-bold text-zinc-100">
                    {item.value}
                  </span>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
