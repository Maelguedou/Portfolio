export function FaviconButton({ href, icon: Icon, label, className = '' }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className={`
        relative inline-flex items-center justify-center
        w-11 h-11 rounded-full
        bg-primary hover:bg-yellow-400
        text-white/80 
        border border-white/10 hover:border-yellow-400
        shadow-sm hover:shadow-[0_0_15px_var(--color-primary)]
        transition-all duration-300 ease-out
        hover:scale-110 hover:-translate-y-0.5
        focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-background
        ${className}
      `}
    >
      {/* Si `Icon` est une fonction/composant, on l'appelle <Icon />.
          Si c'est déjà du JSX (<img /> ou <svg>), on l'affiche directement {Icon} */}
      {typeof Icon === 'function' ? (
        <Icon className="w-5 h-5"  />
      ) : (
        Icon
      )}
    </a>
  );
}