# VERDFORT — Landing Page

Landing page de conversão para a **VERDFORT** — hidrosemeadura, terraplanagem
e soluções integradas. Objetivo único: gerar contatos via WhatsApp.

> **Slogan:** Da base ao verde, resultados que ficam.

## Stack

- [Next.js 14](https://nextjs.org/) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) (animações suaves)
- [Barlow](https://fonts.google.com/specimen/Barlow) via `next/font/google`
- [lucide-react](https://lucide.dev/) (ícones)

Sem dependências extras, sem analytics, sem chat widget de terceiros — fica leve
e pronto para `vercel deploy` sem configuração adicional.

## Rodar localmente

```bash
npm install
npm run dev
```

A aplicação sobe em [http://localhost:3000](http://localhost:3000).

Build de produção:

```bash
npm run build
npm start
```

## Deploy na Vercel

1. Faça push do repositório para o GitHub/GitLab/Bitbucket.
2. Em [vercel.com/new](https://vercel.com/new), importe o repositório.
3. A Vercel detecta automaticamente Next.js — **não é necessária nenhuma
   variável de ambiente nem configuração extra**.
4. Clique em **Deploy**. Pronto.

Para domínio próprio (`verdfort.com.br`), aponte o registro no painel da Vercel
em _Project → Settings → Domains_.

## Onde editar

### Número e mensagem do WhatsApp

Arquivo único: **`lib/content.ts`**

```ts
export const WHATSAPP_NUMBER = '5544999999999';   // <-- troque aqui
export const WHATSAPP_DISPLAY = '(44) 99999-9999'; // <-- exibido no footer
export const WHATSAPP_DEFAULT_MESSAGE =
  'Olá! Vim pelo site e gostaria de um orçamento...';
```

Formato: internacional, **sem `+` e sem espaços** (ex.: `5544999999999`).
Todos os CTAs (hero, header, FAB, cards de serviço e CTA final) consomem essa
mesma fonte.

### Imagens

Coloque os arquivos abaixo em **`public/images/`** com os nomes exatos.
Consulte `public/images/README.md` para dimensões recomendadas e onde cada uma
aparece:

| Arquivo         | Onde aparece                                |
| --------------- | ------------------------------------------- |
| `hero.jpg`      | Hero + Open Graph                           |
| `aplicacao.jpg` | Seção "Por que escolher a hidrosemeadura?"  |
| `antes.jpg`     | Seção "Do solo bruto ao verde" (card Antes) |
| `depois.jpg`    | Seção "Do solo bruto ao verde" (card Depois) |
| `galeria-1.jpg` | Seção "Resultados em campo"                 |
| `galeria-2.jpg` | Seção "Resultados em campo"                 |

Recomenda-se JPG progressivo, qualidade 75–82%, otimizado em
[Squoosh](https://squoosh.app/) antes de subir. **Os selos "ANTES" / "DEPOIS"
são desenhados em CSS — as fotos não devem ter texto embutido.**

### Cores e tipografia

`tailwind.config.ts` → seção `theme.extend.colors`:

```ts
verde: { dark: '#1F3D2B', vibrant: '#5BA130' },
terra: '#5C3A21',
areia: '#C19A6B',
cinza: '#7A7A7A',
creme: '#F4F4EF',
```

### Textos das seções

Cada seção mora em `components/`. Copy está inline em cada componente — o brief
é prescritivo, então não centralizei em JSON para evitar over-engineering.
Buscar pelo texto direto no editor é o caminho mais rápido.

## Estrutura

```
app/
  layout.tsx          # Barlow, SEO/OG metadata
  page.tsx            # composição linear das seções
  globals.css         # tailwind base + smooth scroll + reduced motion
components/
  Header.tsx          # fixo, transparente -> creme on-scroll
  Hero.tsx            # full-screen
  WhyHidrosemeadura.tsx
  Advantages.tsx
  SoloAoVerde.tsx     # antes/depois lado a lado com selos CSS
  Benefits.tsx
  Services.tsx        # 4 cards com mini-CTA WhatsApp
  Gallery.tsx         # resultados em campo
  FinalCTA.tsx
  Footer.tsx
  WhatsAppFAB.tsx     # botão flutuante com pulse
  WaveDivider.tsx
  Logo.tsx
lib/
  content.ts          # FONTE ÚNICA de WhatsApp + dados do site
  motion.ts           # variants reutilizáveis (fadeUp, stagger)
public/
  images/             # ver public/images/README.md
```

## Performance e acessibilidade

- `next/image` em todas as fotos, `priority` no hero, lazy nas demais.
- Smooth scroll nativo, com fallback para `prefers-reduced-motion`.
- Headings hierárquicos (H1 único, H2 por seção).
- Foco visível em todos os interativos (`ring-2 ring-verde-vibrant`).
- Mobile-first; o botão WhatsApp flutuante segue visível em toda a navegação.
