import profilePhoto from '../../../assets/photo.png';
import facebook from '../../../assets/facebook.png';
import whatsApp from '../../../assets/whatsApp.png';
import linkedin from '../../../assets/linkedin.png';
import {Typewriter} from '../../../components/Typewriter';
import {FaviconButton} from '../../../components/faviconbutton';
import { useTranslation } from 'react-i18next';
export function Hero() {
    const { t } = useTranslation();

    const buttonLink=[
        {href: '#', icon:<img src={facebook} alt="Facebook" />, label: 'facebook'},
        {href: 'https://wa.me/2290196420797', icon: <img src={whatsApp} alt="WhatsApp" />, label: 'whatsApp'},
        {href: 'https://www.linkedin.com/in/ma%C3%ABl-abdias/', icon: <img src={linkedin} alt="LinkedIn" />, label: 'linkedin'},
    ]
  return (
    <section className="bg-primary/10 text-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-15 items-center ">
        
        {/* Colonne Gauche : Texte */}
        <div className="text-center lg:text-left">
           <h2 className="text-text-secondary-light font-bold text-2xl">{t('hero.greeting')}</h2> <br/>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 text-text-secondary-light">
            Maël GUEDOU
          </h1>
          <h2 className="text-text-secondary-light font-bold text-2xl">{t('hero.roleIntro')} {' '} <span className="text-yellow-400"><Typewriter words={[t('hero.role')]} speed={80} delay={2000}/></span></h2><br/>
          <p className="text-lg text-purple-100 mb-8">
             {t('hero.description')}
          </p>
            <div className="flex justify-center lg:justify-start gap-4 mb-8">
                {buttonLink.map((link) => (
                    <FaviconButton
                        key={link.href}
                        href={link.href}
                        icon={link.icon}
                        label={link.label}
                    />
                ))}
            </div>
          <a href="#projects" className="inline-block bg-primary hover:bg-yellow-400 px-6 py-3 rounded-lg font-semibold transition-colors">
            {t('hero.cta')}
          </a>
        </div>

        {/* Colonne Droite : Photo Intégrale */}
        <div className="flex justify-center">
          <img 
            src={profilePhoto} 
            alt={t('hero.portraitAlt')} 
            className="w-90 h-99 max-w-md  shadow-2xl object-cover border-2 border-primary/20 rounded-full shadow-[0_0_50px_var(--color-primary)]"
          />
        </div>

        <div 
        className="
          absolute 
          top-[30%] right-[18%] -translate-y-1/2 -translate-y-1/2 /* Centre la lumière */
          w-[350px] sm:w-[500px] h-[70vh]   /* Taille de la zone lumineuse */
          bg-primary/25                                     /* Couleur primaire avec opacité */
          rounded-full                                      /* Forme circulaire (ou omit pour un carré) */
          blur-[100px]                                      /* Effet d'étalement de la lumière */
          pointer-events-none 
          -z-0
        "
      />

      </div>
    </section>
  );
}
