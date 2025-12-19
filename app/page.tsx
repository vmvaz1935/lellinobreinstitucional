import type { Metadata } from 'next'
import { HeroSection } from '@/components/HeroSection'
import { Section } from '@/components/Section'
import { PracticeAreasGrid } from '@/components/PracticeAreasGrid'
import { DifferentialsList } from '@/components/DifferentialsList'
import { TeamCards } from '@/components/TeamCards'
import { ContactCTA } from '@/components/ContactCTA'
import { siteContent } from '@/content/siteContent'

export const metadata: Metadata = {
  title: 'Início',
  description: siteContent.institucional.manifesto[1],
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      
      {/* Manifesto */}
      <Section id="manifesto">
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-8">
            Nossa Visão
          </h2>
          {siteContent.institucional.manifesto.slice(1).map((paragraph, index) => (
            <p key={index} className="text-lg text-muted-foreground leading-relaxed">
              {paragraph}
            </p>
          ))}
          <div className="mt-8 p-6 bg-muted/50 rounded-lg">
            <p className="font-serif text-xl font-semibold text-foreground">
              {siteContent.institucional.missao}
            </p>
          </div>
        </div>
      </Section>

      {/* Áreas de Atuação (Preview) */}
      <Section id="areas" className="bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground text-center mb-12">
            Áreas de Atuação
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {siteContent.areasAtuacao.slice(0, 6).map((area, index) => (
              <div
                key={index}
                className="p-6 bg-background rounded-lg hover:shadow-md transition-all border border-border"
              >
                <p className="text-foreground font-medium">{area}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="/atuacao"
              className="text-primary hover:text-primary/80 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
            >
              Ver todas as áreas →
            </a>
          </div>
        </div>
      </Section>

      {/* Diferenciais */}
      <Section id="diferenciais">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground text-center mb-12">
            Nossos Diferenciais
          </h2>
          <DifferentialsList />
        </div>
      </Section>

      {/* Equipe (Preview) */}
      <Section id="equipe" className="bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground text-center mb-12">
            Nossa Equipe
          </h2>
          <TeamCards />
          <div className="text-center mt-8">
            <a
              href="/equipe"
              className="text-primary hover:text-primary/80 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
            >
              Conheça mais sobre nossa equipe →
            </a>
          </div>
        </div>
      </Section>

      {/* CTA de Contato */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <ContactCTA />
        </div>
      </Section>
    </>
  )
}

