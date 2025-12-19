import type { Metadata } from 'next'
import { Section } from '@/components/Section'
import { ContactForm } from '@/components/ContactForm'
import { LegalDisclaimer } from '@/components/LegalDisclaimer'
import { siteContent } from '@/content/siteContent'

export const metadata: Metadata = {
  title: 'Contato',
  description: `Entre em contato com o Lelli Nobre Advogados. WhatsApp: ${siteContent.contato.telefone} | E-mail: ${siteContent.contato.email}`,
}

export default function ContatoPage() {
  return (
    <Section>
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Entre em Contato
          </h1>
          <p className="text-lg text-muted-foreground">
            Estamos prontos para ajudar você ou sua empresa. Entre em contato através dos canais abaixo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulário */}
          <div>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
              Envie sua mensagem
            </h2>
            <ContactForm />
          </div>

          {/* Informações de Contato */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                Informações de Contato
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">WhatsApp</h3>
                  <a
                    href={siteContent.contato.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
                  >
                    {siteContent.contato.telefone}
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">E-mail</h3>
                  <a
                    href={`mailto:${siteContent.contato.email}`}
                    className="text-primary hover:text-primary/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
                  >
                    {siteContent.contato.email}
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">LinkedIn</h3>
                  <a
                    href={siteContent.contato.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
                  >
                    Perfil da empresa
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Endereço</h3>
                  <p className="text-muted-foreground whitespace-pre-line">{siteContent.contato.endereco}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Horário de Atendimento</h3>
                  <p className="text-muted-foreground">{siteContent.contato.horario}</p>
                </div>
              </div>
            </div>

            <LegalDisclaimer />
          </div>
        </div>

        {/* Onde estamos */}
        <div className="mt-16">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
            Onde estamos
          </h2>
          <div className="space-y-4 mb-6">
            <p className="text-foreground font-medium">
              Av. Angélica, 672 - 14º andar, Cj. 141
            </p>
            <p className="text-muted-foreground">
              Higienópolis, São Paulo - SP, 01228-000
            </p>
          </div>
          <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1234567890123!2d-46.654321!3d-23.543210!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd56f9c0e0b0b0b0b!2sAv.%20Ang%C3%A9lica%2C%20672%20-%20Higien%C3%B3polis%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001228-000!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do escritório Lelli Nobre Advogados"
              className="w-full h-full"
            />
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Av.+Angélica,+672+-+Higienópolis,+São+Paulo+-+SP,+01228-000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
            >
              Ver mapa ampliado
            </a>
          </p>
        </div>
      </div>
    </Section>
  )
}

