# Imagens da landing page

Coloque os arquivos abaixo nesta pasta, mantendo os **nomes exatamente como listados**.
As fotos não devem conter texto embutido — os selos "ANTES" / "DEPOIS" e legendas são
renderizados pela UI.

| Arquivo          | Dimensão sugerida | Onde aparece                                                | Notas                                                                 |
| ---------------- | ----------------- | ----------------------------------------------------------- | --------------------------------------------------------------------- |
| `hero.jpg`       | 1920 x 1080       | Hero full-screen (topo da página) e Open Graph              | Foto larga, ponto focal central. Será coberta por overlay escuro suave. |
| `aplicacao.jpg`  | 1200 x 800        | Seção "Por que escolher a hidrosemeadura?"                  | Mostra o processo / aplicação. Orientação retrato funciona melhor (recorte 4:5). |
| `antes.jpg`      | 1200 x 900        | Seção "Do solo bruto ao verde perfeito" — card "Antes"      | Solo bruto, terreno exposto. Sem texto na foto.                       |
| `depois.jpg`     | 1200 x 900        | Seção "Do solo bruto ao verde perfeito" — card "Depois"     | Mesmo enquadramento de `antes.jpg` quando possível, já com vegetação. |
| `galeria-1.jpg`  | 1200 x 800        | Seção "Resultados em campo"                                 | Obra realizada (talude, encosta, etc).                                |
| `galeria-2.jpg`  | 1200 x 800        | Seção "Resultados em campo"                                 | Outra obra realizada.                                                 |

## Otimização

- Use JPG progressivo, qualidade 75–82%.
- Cada arquivo deve ficar abaixo de ~400 KB para o hero e ~250 KB para as demais.
- Recomenda-se rodar [Squoosh](https://squoosh.app/) ou similar antes de subir.

## Open Graph

`hero.jpg` é também usado como imagem de compartilhamento (OG/Twitter). Garanta que o
enquadramento funcione em 1200x630 — o que importa fica no centro horizontal.
