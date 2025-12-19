import type { Metadata } from 'next'
import { Section } from '@/components/Section'
import { siteContent } from '@/content/siteContent'

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description: 'Política de privacidade do Lelli Nobre Advogados.',
}

export default function PoliticaPrivacidadePage() {
  return (
    <Section>
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="font-serif text-4xl lg:text-5xl font-bold text-foreground">
          Política de Privacidade
        </h1>
        
        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          <p className="text-sm text-muted-foreground">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
              1. Informações Gerais
            </h2>
            <p>
              O {siteContent.marca.nome} respeita a privacidade dos usuários de seu site e está comprometido com a proteção dos dados pessoais coletados, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
              2. Dados Coletados
            </h2>
            <p>
              Podemos coletar as seguintes informações quando você utiliza nosso site ou entra em contato conosco:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nome completo</li>
              <li>Endereço de e-mail</li>
              <li>Número de telefone (quando fornecido)</li>
              <li>Informações fornecidas em formulários de contato</li>
              <li>Dados de navegação (cookies, logs de acesso)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
              3. Finalidade do Uso dos Dados
            </h2>
            <p>
              Os dados coletados são utilizados para:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Responder a solicitações e contatos</li>
              <li>Prestar serviços jurídicos</li>
              <li>Melhorar a experiência do usuário no site</li>
              <li>Cumprir obrigações legais</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
              4. Compartilhamento de Dados
            </h2>
            <p>
              Não compartilhamos seus dados pessoais com terceiros, exceto quando necessário para cumprir obrigações legais ou com seu consentimento expresso.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
              5. Segurança dos Dados
            </h2>
            <p>
              Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
              6. Seus Direitos
            </h2>
            <p>
              Você tem direito a:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Confirmar a existência de tratamento de dados</li>
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
              <li>Solicitar a eliminação de dados desnecessários</li>
              <li>Revogar seu consentimento</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
              7. Contato
            </h2>
            <p>
              Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato conosco:
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

