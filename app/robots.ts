import { MetadataRoute } from 'next'
import { siteContent } from '@/content/siteContent'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = `https://${siteContent.contato.site}`

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}

