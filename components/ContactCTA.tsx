import Link from 'next/link'
import { siteContent } from '@/content/siteContent'

export function ContactCTA() {
  return (
    <div className="bg-primary text-primary-foreground rounded-lg p-8 lg:p-12 text-center">
      <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-4">
        Pronto para estruturar o seu amanhã?
      </h2>
      <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
        Entre em contato conosco e descubra como podemos ajudar você ou sua empresa.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href={siteContent.contato.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-primary-foreground text-primary rounded-md font-medium hover:bg-primary-foreground/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2"
          aria-label="Fale conosco no WhatsApp"
        >
          Fale conosco
        </a>
        <Link
          href="/contato"
          className="px-6 py-3 border-2 border-primary-foreground text-primary-foreground rounded-md font-medium hover:bg-primary-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2"
        >
          Enviar e-mail
        </Link>
      </div>
    </div>
  )
}

