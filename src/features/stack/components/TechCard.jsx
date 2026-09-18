

export function TechCard({name, icon}){
    return(
        <div className="flex flex-col items-center justify-center w-28 h-28 p-3 bg-slate-50/80 border border-gray-200/80 rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
            <img src={icon} alt={name} className="w-10 h-10 object-contain mb-2" />
            <span className="text-xs font-semibold text-gray-700">{name}</span>
        </div>
    )
}
