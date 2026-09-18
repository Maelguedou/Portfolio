import { useState } from 'react'
import { Send } from 'lucide-react'
import { useTranslation } from 'react-i18next';

export function ContactForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Logique d'envoi du formulaire (ex: API call)
  }

  return (
    <div className="w-full bg-[#0d0e15] border border-zinc-800/80 rounded-2xl p-6 md:p-8 text-white shadow-xl">
      <h2 className="text-xl font-bold mb-6 text-zinc-100">
        {t('contact.formTitle')}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Prénom & Nom */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-zinc-300 mb-1.5 font-medium">
              {t('contact.firstName')}
            </label>
            <input
              type="text"
              name="prenom"
              placeholder="Jean"
              value={formData.prenom}
              onChange={handleChange}
              className="w-full bg-[#121214] border border-zinc-800/90 rounded-xl px-4 py-2.5 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-yellow-400 transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs text-zinc-300 mb-1.5 font-medium">
              {t('contact.lastName')}
            </label>
            <input
              type="text"
              name="nom"
              placeholder="Dupont"
              value={formData.nom}
              onChange={handleChange}
              className="w-full bg-[#121214] border border-zinc-800/90 rounded-xl px-4 py-2.5 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-yellow-400 transition-colors"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs text-zinc-300 mb-1.5 font-medium">
            {t('contact.email')}
          </label>
          <input
            type="email"
            name="email"
            placeholder="jean@example.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-[#121214] border border-zinc-800/90 rounded-xl px-4 py-2.5 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-yellow-400 transition-colors"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs text-zinc-300 mb-1.5 font-medium">
            {t('contact.message')}
          </label>
          <textarea
            name="message"
            rows="5"
            placeholder={t('contact.messagePlaceholder')}
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-[#121214] border border-zinc-800/90 rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-yellow-400 transition-colors resize-none"
          />
        </div>

        {/* Bouton d'envoi */}
        <button
          type="submit"
          className="w-full bg-yellow-50 hover:bg-yellow-500  text-zinc-950 font-medium py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 mt-2 shadow-lg shadow-emerald-900/20"
        >
          <Send className="w-4 h-4" />
          <span className="text-sm font-semibold">{t('contact.send')}</span>
        </button>
      </form>
    </div>
  )
}
