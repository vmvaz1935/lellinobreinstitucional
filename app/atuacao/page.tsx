import type { Metadata } from 'next'
import { Section } from '@/components/Section'
import { PracticeAreasGrid } from '@/components/PracticeAreasGrid'
import { siteContent } from '@/content/siteContent'

export const metadata: Metadata = {
  title: 'Áreas de Atuação',
  description: `Conheça as ${siteContent.areasAtuacao.length} áreas de atuação do Lelli Nobre Advogados, escritório full service com expertise em diversas áreas do Direito.`,
}

export default function AtuacaoPage() {
  return (
    <Section>
      <div className="max-w-6xl mx-auto">
        <h1 className="font-serif text-4xl lg:text-5xl font-bold text-foreground text-center mb-4">
          Áreas de Atuação
        </h1>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Oferecemos soluções jurídicas completas em diversas áreas do Direito, com equipes especializadas operando de forma coordenada e transversal.
        </p>
        <PracticeAreasGrid />
      </div>
    </Section>
  )
}

