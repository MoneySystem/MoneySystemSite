# MoneySystem Site

Site institucional, solução automotiva, landing `/ad`, blog e Central de Ajuda
do MoneySystem. Construído com Next.js App Router e preparado para a Vercel.

## Requisitos

- Node.js 22 ou superior
- npm 10 ou superior

## Rodar localmente

```bash
npm install
cp .env.example .env.local
npm run dev
```

Abra `http://localhost:3000`.

## Variáveis de ambiente

| Variável | Escopo | Uso |
| --- | --- | --- |
| `GOOGLE_APPS_SCRIPT_LEAD_URL` | servidor | Web App do Apps Script que grava o lead |
| `WHATSAPP_NUMBER` | servidor | destino comercial, no formato `5548988745520` |
| `GOOGLE_APPS_SCRIPT_SECRET` | servidor, opcional | segredo compartilhado com o Apps Script aprimorado |
| `NEXT_PUBLIC_SITE_URL` | público | domínio canônico, sitemap e validação de origem |

Nunca prefixe a URL do Apps Script ou o segredo com `NEXT_PUBLIC_`.

## Fluxo da landing `/ad`

1. O visitante preenche apenas nome, WhatsApp, filiais e emissão fiscal.
2. O navegador envia os dados para `POST /api/leads`.
3. A rota valida origem, tamanho, tipos, telefone, honeypot e tempo de
   preenchimento.
4. O servidor envia o lead ao Google Apps Script.
5. Somente após `{ "ok": true }` da planilha, a API devolve a URL do WhatsApp.
6. A mesma aba segue automaticamente para a conversa. Não existe `/obrigado`.

O contrato das oito primeiras colunas da planilha foi preservado. O arquivo
[`integrations/google-apps-script/Code.gs`](integrations/google-apps-script/Code.gs)
adiciona deduplicação por `submission_id`, proteção opcional por segredo e
atribuição de campanhas nas colunas seguintes.

## Qualidade

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

Ou execute tudo com:

```bash
npm run check
```

## Rotas canônicas e legadas

- `/terms` → `/termos` (308)
- `/anuncios` → `/ad` (308, preserva query string)
- `/automotivo` → `/solucoes/automotivo` (308)
- `/obrigado` não existe e retorna 404
- `/ad` usa `noindex, follow` e não entra no sitemap

## Publicação na Vercel

1. Importe este repositório como projeto Next.js.
2. Configure as quatro variáveis na Vercel.
3. Rode um deployment de Preview.
4. Teste o fluxo com um lead canário claramente identificado.
5. Confirme que apenas uma linha foi criada na planilha e que o WhatsApp abriu.
6. Promova exatamente o mesmo deployment para produção.

No Firewall da Vercel, configure também um limite de `5` requisições `POST` a
`/api/leads` a cada `10 minutos` por IP. O limite em memória da aplicação é uma
segunda camada, mas não substitui a regra distribuída da plataforma.

## Conteúdo e marca

- O logo em `public/logo.svg` é o arquivo oficial fornecido.
- A imagem do produto em `public/images/dashboard-devices.png` é uma tela real
  fornecida pelo MoneySystem.
- A Mony aparece somente associada aos planos Diamante e Distribuidoras.
- O site não usa métricas, avaliações ou depoimentos genéricos sem comprovação.
- Textos fiscais e jurídicos devem passar pela validação dos responsáveis da
  empresa antes de uma mudança material em produção.
