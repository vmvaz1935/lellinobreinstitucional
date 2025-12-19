'use client'

import { useState, FormEvent } from 'react'
import { siteContent } from '@/content/siteContent'

export function ContactForm() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: '',
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Contato de ${formData.nome}`)
    const body = encodeURIComponent(
      `Nome: ${formData.nome}\nE-mail: ${formData.email}\n\nMensagem:\n${formData.mensagem}`
    )
    window.location.href = `mailto:${siteContent.contato.email}?subject=${subject}&body=${body}`
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="nome" className="block text-sm font-medium text-foreground mb-2">
          Nome *
        </label>
        <input
          type="text"
          id="nome"
          name="nome"
          required
          value={formData.nome}
          onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
          className="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          placeholder="Seu nome completo"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
          E-mail *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          placeholder="seu@email.com"
        />
      </div>

      <div>
        <label htmlFor="mensagem" className="block text-sm font-medium text-foreground mb-2">
          Mensagem *
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          required
          rows={6}
          value={formData.mensagem}
          onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
          className="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 resize-none"
          placeholder="Como podemos ajudar?"
        />
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        Enviar
      </button>
    </form>
  )
}

