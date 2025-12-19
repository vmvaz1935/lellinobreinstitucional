import { siteContent } from '@/content/siteContent'

export function LegalDisclaimer() {
  return (
    <div className="bg-muted/50 border-l-4 border-primary p-4 rounded">
      <p className="text-sm text-muted-foreground">
        {siteContent.legal.disclaimer}
      </p>
    </div>
  )
}

