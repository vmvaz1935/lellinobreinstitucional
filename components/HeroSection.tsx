import Image from 'next/image'
import Link from 'next/link'
import { siteContent } from '@/content/siteContent'

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-48 h-24 sm:w-64 sm:h-32 lg:w-80 lg:h-40">
                <Image
                  src="/images/logo.png"
                  alt={siteContent.marca.nome}
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 640px) 192px, (max-width: 1024px) 256px, 320px"
                />
              </div>
            </div>
            <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground/80">
              {siteContent.marca.tagline}
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              {siteContent.institucional.manifesto[0]}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={siteContent.contato.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 text-center"
                aria-label="Fale conosco no WhatsApp"
              >
                Fale conosco
              </a>
              <Link
                href="/contato"
                className="px-6 py-3 border-2 border-primary text-primary rounded-md font-medium hover:bg-primary hover:text-primary-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 text-center"
              >
                Enviar e-mail
              </Link>
            </div>
          </div>

          {/* Video */}
          <div className="relative w-full h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-2xl bg-black">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              aria-label="Vídeo institucional do Lelli Nobre Advogados"
            >
              <source src="/videos/hero-video.mp4" type="video/mp4" />
              <source src="/videos/hero-video.webm" type="video/webm" />
              Seu navegador não suporta a tag de vídeo.
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}

