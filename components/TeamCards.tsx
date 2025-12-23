import { siteContent } from '@/content/siteContent'

export function TeamCards() {
  const { mateus, christine } = siteContent.equipe

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
      {/* Mateus */}
      <div className="bg-muted/50 rounded-lg p-8 hover:shadow-lg transition-shadow">
        <div className="flex flex-col items-center text-center space-y-6">
          <div>
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
              {mateus.nome}
            </h3>
            <div className="space-y-3 text-muted-foreground">
              {mateus.descricao.map((paragraph, index) => (
                <p key={index} className="text-sm leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Christine */}
      <div className="bg-muted/50 rounded-lg p-8 hover:shadow-lg transition-shadow">
        <div className="flex flex-col items-center text-center space-y-6">
          <div>
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
              {christine.nome}
            </h3>
            <div className="space-y-3 text-muted-foreground">
              {christine.descricao.map((paragraph, index) => (
                <p key={index} className="text-sm leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

