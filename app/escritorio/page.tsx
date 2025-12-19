import type { Metadata } from 'next'
import { Section } from '@/components/Section'
import { siteContent } from '@/content/siteContent'

export const metadata: Metadata = {
  title: 'Escritório',
  description: siteContent.sobre.texto[0],
}

export default function EscritorioPage() {
  return (
    <Section>
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="font-serif text-4xl lg:text-5xl font-bold text-foreground text-center mb-12">
          Sobre o Escritório
        </h1>
        
        <div className="space-y-6">
          {siteContent.sobre.texto.map((paragraph, index) => (
            <p key={index} className="text-lg text-muted-foreground leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-12 p-8 bg-muted/50 rounded-lg text-center">
          <p className="font-serif text-2xl font-semibold text-foreground">
            {siteContent.sobre.fraseApoio}
          </p>
        </div>

        <div className="mt-12 space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-foreground">
            Informações Adicionais
          </h2>
          <div className="bg-muted/50 p-6 rounded-lg space-y-2 text-muted-foreground">
            <p><strong className="text-foreground">Endereço:</strong> {siteContent.contato.endereco}</p>
            <p><strong className="text-foreground">Horário de atendimento:</strong> {siteContent.contato.horario}</p>
            <p><strong className="text-foreground">CNPJ/OAB:</strong> (A definir)</p>
          </div>
        </div>
      </div>
    </Section>
  )
}

