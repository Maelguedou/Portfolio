

export function Button({
    children,
    href,
    variant = "primary",
    target= "_blank",
    className = "",
}){
  // Styles selon la variante
  const baseStyles = "inline-flex justify-center items-center py-2 px-4 rounded-full text-xs font-semibold transition-all duration-200"
  
  const variants = {
    primary: "bg-gradient-to-r from-gradient-start to-primary hover:from-cyan-400 hover:to-blue-500 text-white shadow-md shadow-cyan-500/20",
    secondary: "bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700",
    outline: "border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
  }

  return (
    <a
      href={href}
      target={target}
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  )
}
