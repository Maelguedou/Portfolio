import {useState,useRef,useEffect, useMemo} from 'react';
import { useTranslation } from 'react-i18next';


export function CommandLine() {
    const { t } = useTranslation();
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([{ type: 'welcome' }]);
    const bottomRef = useRef(null);
    const commands = useMemo(() => ({
        help: t('terminal.help'),
        aide: t('terminal.help'),
        ls: t('terminal.help'),
        status: t('terminal.status'),
        disponibilite: t('terminal.availability'),
        availability: t('terminal.availability'),
        bio: t('terminal.bio'),
        education: t('terminal.education'),
        formation: t('terminal.education'),
        skills: t('terminal.skills'),
        competences: t('terminal.skills'),
        contact: t('terminal.contact'),
    }), [t]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmed = input.trim().toLocaleLowerCase();
        if(!trimmed) return;

        if(trimmed === 'clear'){
            setHistory([]);
            setInput('');
            return;
        }

        const response = commands[trimmed] || t('terminal.notFound', { command: trimmed });

        setHistory((prev) =>[
            ...prev,
            {type: 'cmd', content: input},
            {type: 'output', content: response}
        ]);
        setInput('');
    };
    
    useEffect(()=>{
        bottomRef.current?.scrollIntoView({behavior: 'smooth'});
    },[history]);
   
    return(
        <>
            <div className="w-full h-full max-w-4xl mx-auto rounded-xl bg-[#0d0e15] border border-white/10 shadow-2xl font-mono text-sm overflow-hidden text-gray-300 ">
            {/* Barre de fenêtre macOS */}
                <div className="flex items-center px-4 py-3 bg-[#161722] border-b border-white/5 relative">
                    <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block" />
                    </div>
                    <span className="absolute left-1/2 -translate-x-1/2 text-xs text-gray-400 font-sans">
                    {t('terminal.windowTitle')}
                    </span>
                </div>

            {/* Zone de contenu scrollable */}
            <div className="p-4 h-80 overflow-y-auto flex flex-col gap-2">
                {history.map((item, idx) => (
                    <div key={idx}>
                        {item.type === 'cmd' && (
                        <div className="flex items-center gap-2 text-cyan-400">
                            <span className="text-primary font-bold">&gt;</span>
                            <span>{item.content}</span>
                        </div>
                        )}
                        {item.type === 'welcome' && <div className="text-gray-400">{t('terminal.welcome')}</div>}
                        {item.type === 'output' && (
                        <pre className="text-yellow-400 whitespace-pre-wrap font-mono mt-1 pl-4 border-l-2 border-primary/40 leading-relaxed">
                            {item.content}
                        </pre>
                        )}
                    </div>
                ))}

                {/* Ligne d'invite active */}
                <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-1">
                    <span className="text-cyan-400 font-bold">&gt;</span>
                    <input
                        type="text"
                        className="flex-1 bg-transparent border-none outline-none text-gray-100 p-0 font-mono focus:ring-0"
                        autoFocus
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                </form>
                <div ref={bottomRef} />
            </div>
            </div>
        </>
    );
}
