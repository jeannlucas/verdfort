# VERDFORT

## O que é
Landing page de conversão da VERDFORT (hidrosemeadura, terraplanagem e soluções
integradas). Objetivo único: gerar contato por WhatsApp. Slogan da marca:
"Da base ao verde, resultados que ficam."

## Modo
MANUTENÇÃO.

Estado em 25/07/2026: NÃO existe nenhum teste no projeto, e `node_modules` não
está instalado. Montar infraestrutura de teste onde não existe é escolha de
framework, ou seja, decisão de arquitetura: proponha, não decida sozinho.

## Branches
- Principal: `main`
- Integração: `dev`
- Deploy automático na principal: nenhuma configuração de deploy no repositório
  (sem `vercel.json`, sem workflow). Confirme com o Jeann onde está publicado.
- Promoção para a principal e deploy são do Jeann, nunca meus.

## Stack
- Next.js (App Router), React
- `lucide-react` para ícones
- Node, npm (`package-lock.json`)

## Comandos
- Dev: `npm run dev`
- Build: `npm run build`
- Start do build: `npm run start`
- Lint: `npm run lint` (next lint)
- Testes: não existe
- Cobertura: não existe

## Arquitetura real deste projeto
Next.js App Router: `app/` com as rotas, `components/` com a UI, `lib/` com o
que houver de apoio. Landing de página única, sem backend, banco nem
autenticação.

## Desvios conscientes do padrão global
1. **Sem teste algum.** O padrão global exige teste que falha antes e passa
   depois para todo comportamento alterado. Aqui não há nem suíte. Antes de
   mexer em lógica, proponha criar a infraestrutura mínima.
2. **Sem cobertura**, por consequência.

## Vocabulário de domínio
- **Hidrosemeadura** — técnica de plantio por aspersão de mistura com sementes,
  usada em talude e área extensa.
- **Terraplanagem** — preparo e nivelamento de terreno.

## Armadilhas conhecidas
1. A conversão inteira depende do link de WhatsApp. Mexer em CTA sem testar o
   link no celular quebra o único objetivo da página.
