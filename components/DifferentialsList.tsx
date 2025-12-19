import { siteContent } from '@/content/siteContent'

export function DifferentialsList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {siteContent.diferenciais.map((diferencial, index) => (
        <div
          key={index}
          className="p-6 bg-muted/50 rounded-lg hover:shadow-lg transition-all border border-transparent hover:border-border"
        >
          <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
            {diferencial.titulo}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {diferencial.descricao}
          </p>
        </div>
      ))}
    </div>
  )
}

