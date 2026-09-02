# Lançamento do OpenAI Ads — MoneySystem

## Conversão escolhida

O objetivo atual é gerar um lead comercial em `https://moneysystem.com.br/ad`.
A conversão ocorre somente quando a pessoa preenche o formulário, clica em
**Quero ver como funciona** e o Google Sheets confirma que o contato foi salvo.

- Evento padrão: `lead_created`
- Dados do evento: `{ "type": "customer_action" }`
- Pixel ID: `Ui4FFWmostPwksH32uC8BF`
- Deduplicação: `submissionId` no Pixel = `events[].id` na CAPI
- Evento futuro de assinatura: fora do escopo deste lançamento

Não use `registration_completed` para este formulário: a ação representa um
lead comercial, não a criação de uma conta.

## Configuração na Vercel

Cadastre em Production e Preview:

```text
OPENAI_ADS_PIXEL_ID=Ui4FFWmostPwksH32uC8BF
OPENAI_ADS_CONVERSIONS_API_KEY=<chave criada no Ads Manager>
OPENAI_ADS_VALIDATE_ONLY=false
```

A chave da CAPI é secreta e nunca deve usar o prefixo `NEXT_PUBLIC_`. Para um
teste inicial da estrutura, use temporariamente `OPENAI_ADS_VALIDATE_ONLY=true`
em Preview; volte para `false` antes de promover para produção.

No Ads Manager, mantenha a correspondência avançada automática desativada
neste primeiro lançamento. A CAPI já envia telefone e primeiro/último nome
normalizados e protegidos com SHA-256, enquanto o Pixel não recebe esses dados
manualmente.

## Checklist do Ads Manager

1. Confirme que o data source usa o Pixel ID acima.
2. Abra o teste de eventos e visite `/ad` para verificar `page_viewed`.
3. Envie um lead canário e verifique apenas um `lead_created`, recebido pelo
   navegador e pelo servidor com deduplicação.
4. Configure `lead_created` como a única meta de conversão ativa da campanha.
5. Se a campanha oCPC existente foi criada com `registration_completed`, pause
   essa campanha e crie outra com `lead_created`: a meta de uma campanha oCPC
   não pode ser trocada depois da criação.
6. Use a URL final com UTMs, por exemplo:

   ```text
   https://moneysystem.com.br/ad?utm_source=openai&utm_medium=paid&utm_campaign=automotivo_sul_leads&utm_content=<criativo>
   ```

## Estrutura inicial para R$ 40/dia

- Uma campanha de conversão otimizada para `lead_created`.
- Um grupo de anúncios para PR, SC e RS, evitando fragmentar o orçamento.
- Público e textos voltados a oficinas, centros automotivos, autopeças,
  películas, PPF e estética automotiva.
- Dois anúncios por vez: um focado em ordem de serviço/estoque e outro em
  financeiro/visão do caixa.
- Não altere orçamento, público e criativo ao mesmo tempo. Aguarde dados
  suficientes para identificar o que causou a mudança.

## Rotina dos primeiros 30 dias

- Diariamente: verificar gasto, entrega, erros e se os leads chegaram à
  planilha.
- Duas vezes por semana: conferir quantidade de leads válidos e velocidade do
  primeiro contato comercial.
- Semanalmente: calcular custo por lead válido e comparar os dois criativos.
- Após 30 dias: manter o vencedor, substituir apenas o anúncio mais fraco e
  definir a primeira meta de CAC com base em leads que avançaram nas vendas.

O volume do anúncio só vira oportunidade se o vendedor responder rápido. Use o
horário de recebimento da planilha para acompanhar tempo até o primeiro contato
e marque separadamente leads inválidos, sem resposta, qualificados e fechados.
