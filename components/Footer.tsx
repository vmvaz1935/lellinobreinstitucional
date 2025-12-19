import Link from 'next/link'
import Image from 'next/image'
import { siteContent } from '@/content/siteContent'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Marca */}
          <div>
            <div className="relative w-32 h-16 mb-4">
              <Image
                src="/images/logo.png"
                alt={siteContent.marca.nome}
                fill
                className="object-contain"
                sizes="128px"
              />
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              {siteContent.marca.tagline}
            </p>
            <p className="text-xs text-muted-foreground">
              {siteContent.legal.disclaimer}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/escritorio"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
                >
                  Escritório
                </Link>
              </li>
              <li>
                <Link
                  href="/equipe"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
                >
                  Equipe
                </Link>
              </li>
              <li>
                <Link
                  href="/atuacao"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
                >
                  Atuação
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href={siteContent.contato.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
                >
                  WhatsApp: {siteContent.contato.telefone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteContent.contato.email}`}
                  className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
                >
                  {siteContent.contato.email}
                </a>
              </li>
              <li>
                <a
                  href={siteContent.contato.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © {currentYear} {siteContent.marca.nome}. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <Link
                href="/politica-de-privacidade"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
              >
                Política de Privacidade
              </Link>
              <Link
                href="/termos"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
              >
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

