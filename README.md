# Lelli Nobre Advogados - Site Institucional

Site institucional do escritório Lelli Nobre Advogados, desenvolvido com Next.js 14+, TypeScript e TailwindCSS.

## 🚀 Tecnologias

- **Next.js 14+** (App Router)
- **TypeScript**
- **TailwindCSS**
- **React 18**

## 📋 Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

## 🛠️ Instalação

1. Clone o repositório ou navegue até a pasta do projeto

2. Instale as dependências:

```bash
npm install
```

ou

```bash
yarn install
```

## 🏃 Executando o Projeto

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

ou

```bash
yarn dev
```

O site estará disponível em [http://localhost:3000](http://localhost:3000)

## 📦 Build para Produção

Para criar uma build de produção:

```bash
npm run build
```

Para iniciar o servidor de produção:

```bash
npm start
```

## 📁 Estrutura do Projeto

```
├── app/                    # Páginas e rotas (App Router)
│   ├── page.tsx           # Página inicial
│   ├── escritorio/       # Página sobre o escritório
│   ├── equipe/           # Página da equipe
│   ├── atuacao/          # Página de áreas de atuação
│   ├── contato/          # Página de contato
│   ├── politica-de-privacidade/  # Política de privacidade
│   ├── termos/           # Termos de uso
│   ├── layout.tsx        # Layout principal
│   ├── globals.css       # Estilos globais
│   ├── sitemap.ts       # Sitemap dinâmico
│   └── robots.ts        # Robots.txt
├── components/           # Componentes reutilizáveis
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── Section.tsx
│   ├── TeamCards.tsx
│   ├── PracticeAreasGrid.tsx
│   ├── DifferentialsList.tsx
│   ├── ContactCTA.tsx
│   ├── ContactForm.tsx
│   └── LegalDisclaimer.tsx
├── content/              # Conteúdo centralizado
│   └── siteContent.ts   # Todo o conteúdo textual do site
└── public/              # Arquivos estáticos
    └── images/         # Imagens do site
```

## ✏️ Editando Conteúdo

Todo o conteúdo textual do site está centralizado no arquivo `content/siteContent.ts`. Para editar textos, basta modificar este arquivo.

## 🎨 Personalização

- **Cores**: Edite as variáveis CSS em `app/globals.css`
- **Tipografia**: Configure as fontes em `app/layout.tsx`
- **Tema Tailwind**: Ajuste `tailwind.config.ts`

## 📱 Responsividade

O site é totalmente responsivo e foi testado em:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)

## ♿ Acessibilidade

O site segue boas práticas de acessibilidade:
- Navegação por teclado
- Foco visível
- Contraste adequado
- Labels ARIA
- HTML semântico

## 🔍 SEO

- Metadata em todas as páginas
- Sitemap dinâmico
- Robots.txt configurado
- OpenGraph tags

## 📝 Licença

Este projeto é propriedade do Lelli Nobre Advogados.

## 📞 Contato

Para dúvidas ou suporte, entre em contato:
- E-mail: contato@lellinobre.com.br
- WhatsApp: +55 11 91055-5566

