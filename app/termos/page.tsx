import type { Metadata } from 'next'
import { Section } from '@/components/Section'
import { siteContent } from '@/content/siteContent'

export const metadata: Metadata = {
  title: 'Termos de Uso',
  description: 'Termos de uso do site do Lelli Nobre Advogados.',
}

export default function TermosPage() {
  return (
    <Section>
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="font-serif text-4xl lg:text-5xl font-bold text-foreground">
          Termos de Uso
        </h1>
        
        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          <p className="text-sm text-muted-foreground">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
              1. Aceitação dos Termos
            </h2>
            <p>
              Ao acessar e utilizar o site do {siteContent.marca.nome}, você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concorda com qualquer parte destes termos, não deve utilizar nosso site.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
              2. Uso do Site
            </h2>
            <p>
              O conteúdo deste site é fornecido apenas para fins informativos. As informações apresentadas não constituem aconselhamento jurídico e não devem ser utilizadas como substituto para consulta com um advogado qualificado.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
              3. Propriedade Intelectual
            </h2>
            <p>
              Todo o conteúdo deste site, incluindo textos, imagens, logotipos e design, é propriedade do {siteContent.marca.nome} e está protegido por leis de direitos autorais. É proibida a reprodução, distribuição ou uso não autorizado de qualquer conteúdo deste site.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
              4. Limitação de Responsabilidade
            </h2>
            <p>
              O {siteContent.marca.nome} não se responsabiliza por danos diretos, indiretos, incidentais ou consequenciais resultantes do uso ou incapacidade de usar este site ou seu conteúdo.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
              5. Links para Sites de Terceiros
            </h2>
            <p>
              Nosso site pode conter links para sites de terceiros. Não temos controle sobre o conteúdo ou práticas desses sites e não assumimos responsabilidade por eles.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
              6. Modificações dos Termos
            </h2>
            <p>
              Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. As alterações entrarão em vigor imediatamente após sua publicação no site.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
              7. Lei Aplicável
            </h2>
            <p>
              Estes Termos de Uso são regidos pelas leis brasileiras. Qualquer disputa relacionada a estes termos será resolvida nos tribunais competentes do Brasil.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
              8. Contato
            </h2>
            <p>
              Para questões sobre estes Termos de Uso, entre em contato conosco:
            </p>
            <ul className="list-none space-y-2">
              <li>E-mail: <a href={`mailto:${siteContent.contato.email}`} className="text-primary hover:text-primary/80">{siteContent.contato.email}</a></li>
              <li>Telefone: <a href={siteContent.contato.whatsapp} className="text-primary hover:text-primary/80">{siteContent.contato.telefone}</a></li>
            </ul>
          </section>
        </div>
      </div>
    </Section>
  )
}

