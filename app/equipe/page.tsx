import type { Metadata } from 'next'
import { Section } from '@/components/Section'
import { TeamCards } from '@/components/TeamCards'
import { siteContent } from '@/content/siteContent'

export const metadata: Metadata = {
  title: 'Equipe',
  description: `Conheça ${siteContent.equipe.mateus.nome} e ${siteContent.equipe.christine.nome}, os profissionais que formam o Lelli Nobre Advogados.`,
}

export default function EquipePage() {
  return (
    <Section>
      <div className="max-w-6xl mx-auto">
        <h1 className="font-serif text-4xl lg:text-5xl font-bold text-foreground text-center mb-4">
          Nossa Equipe
        </h1>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Profissionais com formações complementares e uma mesma visão: entregar excelência jurídica com atendimento humanizado.
        </p>
        <TeamCards />
      </div>
    </Section>
  )
}

