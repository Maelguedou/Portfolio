import { CommandLine } from "./cline";
import { useTranslation } from 'react-i18next';

export function AboutMe() {
    const { t } = useTranslation();
    return (
        <><div className="bg-primary/10">
            <div className="flex justify-center">
                <span className="text-2xl font-bold text-white  text-2xl font-black tracking-widest uppercase mb-12 text-slate-100" >{t('about.title')}</span>
            </div><br />
            <div className="p-5">
                <CommandLine/>
            </div><br/><br/><br/>
        </div>
            
          
        </>
    );
}
