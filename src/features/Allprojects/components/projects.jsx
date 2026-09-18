import {ProjectCard} from './ProjectCard'
import { PROJECTS} from '../projectsdata'
import { useTranslation } from 'react-i18next';

export function Projects() {
  const { t } = useTranslation();
  return (
    <section className="py-16 px-4 bg-slate-950 text-white text-center">
      <h2 className="text-2xl font-black tracking-widest uppercase mb-12 text-slate-100">
        {t('projects.title')}
      </h2>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] justify-center gap-8 max-w-6xl mx-auto w-full px-4">
        {PROJECTS.map((project) => (
            <div key={project.id} className="w-full max-w-sm justify-self-center">
            <ProjectCard project={project} title={t(`projects.items.${project.id}.title`)} description={t(`projects.items.${project.id}.description`)} />
            </div>
        ))}
        </div>
    </section>
  )
}
