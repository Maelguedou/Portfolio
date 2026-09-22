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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const closeFeedback = () => setFeedback(null);

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (isSubmitting) return;
    setIsSubmitting(true);
    
    try{
      const response = await fetch('https://formspree.io/f/xppwdoyd',{
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      

      if (response.ok) {
       setFeedback({
          type: 'success',
          message: 'Message envoyé avec succès !',
        });

       setFormData({
        prenom: '',
        nom: '',
        email: '',
        message: '',
       });
      } else {
       setFeedback({
          type: 'error',
          message: "Une erreur s'est produite.",
        });
      }
    } catch{
      setFeedback({
        type: 'error',
        message: 'Impossible de contacter le service.',
      });
    }finally{
      setIsSubmitting(false);
    }
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
              required
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
              required
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
            required
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
            required
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
          disabled={isSubmitting}
          className="w-full bg-yellow-50 hover:bg-yellow-500  text-zinc-950 font-medium py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 mt-2 shadow-lg shadow-emerald-900/20 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send className="w-4 h-4" />
          <span className="text-sm font-semibold">{t('contact.send')}</span>
        </button>
      </form>

      {feedback && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4  "
          role="presentation"
          onClick={closeFeedback}
        >
          <div
            className="w-full max-w-sm rounded-2xl border border-yellow-400 bg-black p-6 text-center text-white shadow-2xl"
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="feedback-title"
            onClick={(e) => e.stopPropagation()}
          >
            <h3
              id="feedback-title"
              className={`mb-3 text-lg font-bold ${feedback.type === 'success' ? 'text-green-400' : 'text-red-400'}`}
            >
              {feedback.type === 'success' ? 'Envoi réussi' : 'Échec de l’envoi'}
            </h3>
            <p className="mb-6 text-sm text-zinc-300">{feedback.message}</p>
            <button
              type="button"
              onClick={closeFeedback}
              className="rounded-xl bg-yellow-50 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-yellow-500"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
