export function Card({ children, className = '' }) {
  return (
    <div className={`flex flex-col bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden shadow-xl hover:border-primary transition-all duration-300 ${className}`}>
      {children}
    </div>
  )
}
