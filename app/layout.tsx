import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Lelli Nobre Advogados | Estruturando o seu amanhã',
    template: '%s | Lelli Nobre Advogados',
  },
  description: 'Escritório full service de advocacia com excelência técnica e visão estratégica. Atendimento personalizado em todas as áreas do Direito.',
  keywords: ['advocacia', 'advogados', 'escritório jurídico', 'direito empresarial', 'full service'],
  authors: [{ name: 'Lelli Nobre Advogados' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.lellinobre.com.br',
    siteName: 'Lelli Nobre Advogados',
    title: 'Lelli Nobre Advogados | Estruturando o seu amanhã',
    description: 'Escritório full service de advocacia com excelência técnica e visão estratégica.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

