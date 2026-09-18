import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";
import { useTranslation } from 'react-i18next';

export function Contact(){
    const { t } = useTranslation();
    return (
        <section className="py-16 px-4 bg-[#0d0e15]  ">

            <div className="text-2xl font-black tracking-widest uppercase mb-12 text-slate-100 text-center">{t('contact.title')}</div>
            <div className="flex justify-center items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl w-full mx-auto">
                    <ContactInfo />
                    <ContactForm />
                </div>
            </div>

        </section>
    )
}
