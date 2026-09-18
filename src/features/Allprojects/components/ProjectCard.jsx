import {Card} from '../../../components/Card';
import {Button} from '../../../components/Button';

import { useTranslation } from 'react-i18next';

export function ProjectCard({ project, title, description }) {
  const { t } = useTranslation();
  const { image, techs = [], githubUrl, demoUrl } = project

  return (
    <Card>
      {/* Image */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Contenu */}
      <div className="flex flex-col flex-1 p-6 text-left">
        <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>

        <p className="text-sm text-slate-300 leading-relaxed mb-4 flex-1">
          {description}
        </p>

        {/* Badges */}
        {techs.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {techs.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-slate-800/80 text-primary border border-slate-700/60"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Action via le composant Button */}
        <div className="flex items-center gap-3 mt-auto">
          {githubUrl && (
            <Button href={githubUrl} variant="secondary" className="flex-1">
              {t('projects.sourceCode')}
            </Button>
          )}

          {demoUrl && (
            <Button href={demoUrl} variant="primary" className="flex-1">
              {t('projects.viewDemo')}
            </Button>
          )}
        </div>
      </div>
    </Card>
  )
}
