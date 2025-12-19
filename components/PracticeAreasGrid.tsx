'use client'

import { useState } from 'react'
import { siteContent } from '@/content/siteContent'

export function PracticeAreasGrid() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredAreas = siteContent.areasAtuacao.filter((area) =>
    area.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-8">
      {/* Search */}
      <div className="max-w-md mx-auto">
        <input
          type="text"
          placeholder="Buscar área de atuação..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          aria-label="Buscar área de atuação"
        />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredAreas.map((area, index) => (
          <div
            key={index}
            className="p-6 bg-muted/50 rounded-lg hover:bg-muted hover:shadow-md transition-all cursor-default border border-transparent hover:border-border"
          >
            <p className="text-foreground font-medium">{area}</p>
          </div>
        ))}
      </div>

      {filteredAreas.length === 0 && (
        <p className="text-center text-muted-foreground py-8">
          Nenhuma área encontrada com o termo "{searchTerm}".
        </p>
      )}
    </div>
  )
}

