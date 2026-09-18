// import React from 'react'
import { useTranslation } from 'react-i18next';

const EXPERIENCES = [
  {
    id: 'exp-1',
    period: 'April 2026 - July 2026',
    title: 'IT Developer Intern',
    description:
      'ED-SEG (Ecole Doctorale des Sciences Economiques et de Gestion).',
    bgColor: 'bg-primary', // Rouge / Coral
    ringColor: 'border-primary',
    side: 'right', // Affiché à droite
  },
  {
    id: 'exp-2',
    period: 'June 2025 - September 2025',
    title: 'Web Developer Intern',
    description: 'e-gbavou',
    bgColor: 'bg-yellow-400', // Jaune / Ambre
    ringColor: 'border-yellow-400',
    side: 'left', // Affiché à gauche
  },
]

export function EducationExperience() {
  const { t } = useTranslation();
  return (
    <section className="py-16 px-4 bg-[#ffff] text-white">
      <h2 className="text-2xl font-extrabold text-gray-900 mb-8 text-center">
        {t('experience.title')}
      </h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Axe vertical central */}
        <div className="absolute left-1/2 top-4 bottom-4 w-[2px] bg-zinc-600 -translate-x-1/2 hidden md:block" />

        <div className="space-y-8 md:space-y-12">
          {EXPERIENCES.map((item) => {
            const isLeft = item.side === 'left'

            return (
              <div
                key={item.id}
                className={`flex flex-col md:flex-row items-center w-full ${
                  isLeft ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Colonne vide pour équilibrer la grille sur desktop */}
                <div className="hidden md:block w-1/2" />

                {/* Carte d'expérience + Connecteur */}
                <div className="w-full md:w-1/2 flex items-center relative">
                  
                  {/* Ligne horizontale + Anneau (Connecteur vers l'axe central) */}
                  <div
                    className={`hidden md:flex items-center absolute top-1/2 -translate-y-1/2 z-10 ${
                      isLeft
                        ? 'right-0 translate-x-full flex-row'
                        : 'left-0 -translate-x-full flex-row-reverse'
                    }`}
                  >
                    {/* Ligne horizontale */}
                    <div className="w-8 h-[2px] bg-zinc-600" />
                    
                    {/* Anneau avec centre sombre */}
                    <div
                      className={`w-5 h-5 rounded-full bg-[#18181b] border-4 ${item.ringColor} shrink-0`}
                    />
                  </div>

                  {/* Bloc de contenu */}
                  <div
                    className={`w-full p-6 rounded-2xl shadow-xl transition-transform duration-200 hover:scale-[1.02] ${item.bgColor} text-white ${
                      isLeft ? 'md:mr-10' : 'md:ml-10'
                    }`}
                  >
                    <span className="text-xl font-extrabold block mb-2">
                      {t(`experience.${item.id}.period`)}
                    </span>
                    <h3 className="text-lg font-bold mb-2 opacity-95">
                      {t(`experience.${item.id}.title`)}
                    </h3>
                    <p className="text-sm leading-relaxed opacity-90">
                      {t(`experience.${item.id}.description`)}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
