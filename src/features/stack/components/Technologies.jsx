import {TechCard} from './TechCard';
import html from '../../../assets/html.png';
import css from '../../../assets/css.png';
import js from '../../../assets/js.jpeg';
import flutter from '../../../assets/flutter.jpeg';
import github from '../../../assets/github.png';
import laravel from '../../../assets/laravel.png';
import php from '../../../assets/php.png';
import react from '../../../assets/React.png';
import tailwind from '../../../assets/tailwind.png';
import python from '../../../assets/python.jpeg';
import { useTranslation } from 'react-i18next';

const TECHNOLOGIES = [
  { name: 'HTML5', icon: html },
  { name: 'CSS3', icon: css },
  { name: 'JavaScript', icon: js },
  { name: 'Flutter', icon: flutter },
  { name: 'laravel', icon: laravel },
  { name: 'PHP', icon: php },
  { name: 'React', icon: react },
  { name: 'Tailwind CSS', icon: tailwind },
  { name: 'Github', icon: github },
  { name: 'Python', icon: python },
 
];

export function Technologies(){
    const { t } = useTranslation();
    return(
        <section className="py-12 text-center bg-background-secondary-light">
            <p className="text-xs font-bold tracking-widest text-yellow-400 uppercase mb-1">
                {t('skills.eyebrow')}
            </p>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-8">
                {t('skills.title')}
            </h2>

            <div className="flex flex-wrap justify-center items-center gap-4 max-w-6xl mx-auto px-4">
                {TECHNOLOGIES.map((tech) => (
                    <TechCard key={tech.name} name={tech.name} icon={tech.icon} />
                ))}
            </div>

        </section>
    )
}
