import type { HelpArticle, HelpCategory } from "./types";

export const helpCategories: HelpCategory[] = [
  {
    slug: "duvidas-comerciais",
    title: "Dúvidas Comerciais",
    description: "Planos, contratação, cobrança e escolha da configuração.",
  },
  {
    slug: "primeiros-passos",
    title: "Primeiros Passos",
    description: "Comece a usar o sistema com uma base bem organizada.",
  },
  {
    slug: "implantacao",
    title: "Implantação",
    description: "Migração de dados, preparação da equipe e entrada em operação.",
  },
  {
    slug: "cadastros",
    title: "Cadastros",
    description: "Clientes, fornecedores, produtos e tabelas auxiliares.",
  },
  {
    slug: "estoque",
    title: "Estoque",
    description: "Entradas, saídas, saldos, ajustes e inventário.",
  },
  {
    slug: "vendas",
    title: "Vendas",
    description: "Pedidos, atendimento, faturamento e recebimento.",
  },
  {
    slug: "notas-fiscais-e-tributacoes",
    title: "Notas Fiscais e Tributações",
    description: "NF-e, NFC-e, NFS-e, certificados e regras fiscais.",
  },
  {
    slug: "financeiro",
    title: "Financeiro",
    description: "Caixa, contas, conciliação e acompanhamento de resultados.",
  },
  {
    slug: "integracoes",
    title: "Integrações",
    description: "Marketplaces, serviços externos e troca de informações.",
  },
  {
    slug: "logistica",
    title: "Logística",
    description: "Separação, expedição, rastreio e romaneios.",
  },
  {
    slug: "dashboard",
    title: "Dashboard",
    description: "Indicadores e visão geral da operação.",
  },
  {
    slug: "configuracoes-do-sistema",
    title: "Configurações do Sistema",
    description: "Parâmetros, usuários, permissões e alertas.",
  },
  {
    slug: "servicos",
    title: "Serviços",
    description: "Ordens de serviço, agenda, responsáveis e garantias.",
  },
  {
    slug: "api-para-desenvolvedores",
    title: "API para Desenvolvedores",
    description: "Autenticação, recursos, webhooks e boas práticas.",
  },
  {
    slug: "programa-de-parceiros",
    title: "Programa de Parceiros",
    description: "Revenda, indicação, comissionamento e materiais.",
  },
  {
    slug: "contabilidade",
    title: "Contabilidade",
    description: "Exportações e rotinas de apoio ao fechamento contábil.",
  },
  {
    slug: "atualizacoes",
    title: "Atualizações",
    description: "Novidades, melhorias e comunicados do MoneySystem.",
  },
];

const updatedAt = "2026-07-28";

export const helpArticles: HelpArticle[] = [
  {
    slug: "planos-contratos-cobranca",
    title: "Planos, contratação e cobrança",
    summary:
      "Entenda como escolher o plano e o que confirmar antes da contratação.",
    category: "duvidas-comerciais",
    updatedAt,
    keywords: ["plano", "preço", "contrato", "cobrança", "mensalidade"],
    sections: [
      {
        heading: "Antes de escolher",
        paragraphs: [
          "A escolha considera número de usuários, emissão fiscal, filiais e particularidades da operação. Os planos Diamante e Distribuidoras também incluem a Mony, a IA do MoneySystem no WhatsApp.",
        ],
      },
      {
        heading: "O que está incluído na entrada",
        bullets: [
          "Reunião completa e sem custo para apresentar o sistema.",
          "Migração sem custo adicional de produtos, clientes e lançamentos financeiros na contratação.",
          "Suporte 100% humano sempre que precisar.",
        ],
      },
      {
        heading: "Confirme com o atendimento",
        paragraphs: [
          "Valores, módulos, usuários e condições ficam registrados na proposta e no instrumento de contratação. Fale com o atendimento antes de pagar para confirmar a configuração correta.",
        ],
      },
    ],
  },
  {
    slug: "configuracao-inicial-erp",
    title: "Configuração inicial do MoneySystem",
    summary:
      "Uma sequência segura para preparar empresa, usuários e rotinas principais.",
    category: "primeiros-passos",
    updatedAt,
    keywords: ["configuração", "início", "empresa", "primeiro acesso"],
    sections: [
      {
        heading: "1. Revise os dados da empresa",
        numbered: [
          "Confira razão social, nome fantasia e contatos.",
          "Valide endereços e informações usadas nos documentos.",
          "Confirme regime e parâmetros fiscais com a contabilidade.",
        ],
      },
      {
        heading: "2. Organize usuários e permissões",
        paragraphs: [
          "Crie um acesso individual para cada pessoa e libere somente os módulos necessários. Evite compartilhar senhas entre a equipe.",
        ],
      },
      {
        heading: "3. Valide a operação com exemplos",
        bullets: [
          "Cadastre ou importe um cliente.",
          "Confira um produto e seu saldo.",
          "Registre uma venda de teste controlada.",
          "Revise o reflexo no financeiro antes da entrada oficial.",
        ],
        note:
          "A equipe MoneySystem faz uma reunião completa para percorrer o sistema e tirar dúvidas antes do início.",
      },
    ],
  },
  {
    slug: "erp-pequena-empresa-primeiro-mes",
    title: "O primeiro mês com um ERP na pequena empresa",
    summary:
      "Como estabelecer uma rotina simples de uso e conferência no começo.",
    category: "primeiros-passos",
    updatedAt,
    keywords: ["primeiro mês", "rotina", "implantação", "ERP"],
    sections: [
      {
        heading: "Comece pelas rotinas que sustentam o restante",
        bullets: [
          "Clientes, produtos e serviços.",
          "Vendas e recebimentos.",
          "Contas a pagar e despesas.",
          "Movimentações de estoque.",
        ],
      },
      {
        heading: "Defina responsáveis",
        paragraphs: [
          "Cada etapa deve ter uma pessoa responsável e um momento de conferência. Isso reduz lançamentos duplicados e informações deixadas para depois.",
        ],
      },
      {
        heading: "Feche ciclos curtos",
        paragraphs: [
          "Nos primeiros dias, confira diariamente vendas, caixa e estoque. Depois que a rotina estiver estável, ajuste a frequência sem perder o fechamento mensal.",
        ],
      },
    ],
  },
  {
    slug: "migracao-dados-implantacao",
    title: "Migração de dados e implantação",
    summary:
      "O que separar para levar produtos, clientes e lançamentos financeiros ao MoneySystem.",
    category: "implantacao",
    updatedAt,
    keywords: ["migração", "importação", "clientes", "produtos", "financeiro"],
    sections: [
      {
        heading: "O que o MoneySystem transfere",
        paragraphs: [
          "Na contratação, a equipe transfere sem custo adicional os produtos, clientes e lançamentos financeiros disponíveis no sistema anterior.",
        ],
      },
      {
        heading: "Como preparar os dados",
        numbered: [
          "Exporte os arquivos do sistema anterior sem alterar colunas ou formatos.",
          "Separe uma cópia de segurança.",
          "Informe campos obrigatórios e regras específicas da operação.",
          "Valide uma amostra junto com a equipe MoneySystem.",
        ],
      },
      {
        heading: "Depois da importação",
        bullets: [
          "Compare quantidades totais de cadastros.",
          "Confira saldos e datas de alguns lançamentos.",
          "Revise duplicidades e campos incompletos.",
          "Libere o uso para a equipe somente após a validação.",
        ],
      },
    ],
  },
  {
    slug: "cadastrar-clientes-fornecedores",
    title: "Cadastrar clientes e fornecedores",
    summary:
      "Boas práticas para manter contatos, documentos e histórico organizados.",
    category: "cadastros",
    updatedAt,
    keywords: ["cliente", "fornecedor", "CPF", "CNPJ", "cadastro"],
    sections: [
      {
        heading: "Dados essenciais",
        bullets: [
          "Nome ou razão social.",
          "CPF ou CNPJ, quando necessário.",
          "Telefone, e-mail e endereço atualizados.",
          "Condição comercial e observações relevantes.",
        ],
      },
      {
        heading: "Evite duplicidades",
        paragraphs: [
          "Pesquise pelo documento e pelo telefone antes de criar um cadastro. Um histórico dividido em dois clientes prejudica relatórios e atendimento.",
        ],
      },
      {
        heading: "Revise antes de emitir documentos",
        paragraphs: [
          "Dados fiscais incorretos podem impedir a emissão. Confirme com o cliente e valide regras específicas com a contabilidade.",
        ],
      },
    ],
  },
  {
    slug: "cadastrar-produtos",
    title: "Cadastrar produtos e serviços",
    summary:
      "Monte cadastros consistentes para vender, controlar estoque e emitir notas.",
    category: "cadastros",
    updatedAt,
    keywords: ["produto", "serviço", "SKU", "cadastro", "preço"],
    sections: [
      {
        heading: "Identificação",
        bullets: [
          "Use uma descrição clara e padronizada.",
          "Defina código interno ou SKU único.",
          "Separe produto de serviço corretamente.",
          "Informe unidade e categoria.",
        ],
      },
      {
        heading: "Preço, custo e estoque",
        paragraphs: [
          "Registre custo e preço de venda nos campos próprios. Ative controle de estoque apenas para itens que realmente precisam de saldo.",
        ],
      },
      {
        heading: "Informações fiscais",
        paragraphs: [
          "NCM, origem, CFOP e tributação dependem do produto e da empresa. Utilize a orientação da contabilidade antes de emitir documentos fiscais.",
        ],
      },
    ],
  },
  {
    slug: "gerenciar-estoque",
    title: "Gerenciar estoque: entradas, saídas e inventário",
    summary:
      "Como manter o saldo confiável e corrigir diferenças com histórico.",
    category: "estoque",
    updatedAt,
    keywords: ["estoque", "entrada", "saída", "inventário", "saldo"],
    sections: [
      {
        heading: "O saldo nasce da movimentação",
        paragraphs: [
          "Compras, vendas, devoluções, consumo em serviços e ajustes precisam ser registrados pelo fluxo correto. Alterar apenas o número final esconde a origem da diferença.",
        ],
      },
      {
        heading: "Faça inventários controlados",
        numbered: [
          "Defina data e local da contagem.",
          "Evite movimentações durante a conferência.",
          "Conte fisicamente e compare com o sistema.",
          "Registre ajustes com motivo e responsável.",
        ],
      },
      {
        heading: "Acompanhe exceções",
        bullets: [
          "Saldo negativo.",
          "Produtos sem movimentação.",
          "Diferenças recorrentes.",
          "Itens abaixo do mínimo.",
        ],
      },
    ],
  },
  {
    slug: "fluxo-vendas-pedido-faturamento",
    title: "Fluxo de vendas: do pedido ao faturamento",
    summary:
      "Entenda a sequência para registrar venda, entrega, nota e recebimento.",
    category: "vendas",
    updatedAt,
    keywords: ["venda", "pedido", "faturamento", "recebimento"],
    sections: [
      {
        heading: "Uma etapa alimenta a próxima",
        numbered: [
          "Selecione cliente, itens e condição comercial.",
          "Revise quantidade, preço e desconto.",
          "Confirme separação ou execução do serviço.",
          "Emita o documento fiscal quando aplicável.",
          "Registre a forma e a previsão de recebimento.",
        ],
      },
      {
        heading: "Antes de concluir",
        bullets: [
          "Confira disponibilidade de estoque.",
          "Valide dados do destinatário.",
          "Revise regras fiscais.",
          "Confirme vencimentos e parcelas.",
        ],
      },
      {
        heading: "Evite lançamento duplo",
        paragraphs: [
          "Use a continuidade do próprio pedido para faturar e receber. Criar uma nova venda para cada etapa pode duplicar estoque e financeiro.",
        ],
      },
    ],
  },
  {
    slug: "emitir-nfe",
    title: "Como emitir uma NF-e",
    summary:
      "Checklist antes de transmitir uma Nota Fiscal eletrônica de produtos.",
    category: "notas-fiscais-e-tributacoes",
    updatedAt,
    keywords: ["NF-e", "nota fiscal", "SEFAZ", "emitir"],
    sections: [
      {
        heading: "Pré-requisitos",
        bullets: [
          "Dados da empresa e inscrição estadual conferidos.",
          "Certificado digital válido e configurado.",
          "Cliente e endereço completos.",
          "Produtos com NCM e tributação revisados.",
          "Série, ambiente e numeração corretos.",
        ],
      },
      {
        heading: "Emissão",
        numbered: [
          "Abra a venda ou o faturamento correspondente.",
          "Revise itens, valores, frete e pagamentos.",
          "Gere a NF-e e valide as informações.",
          "Transmita para a SEFAZ.",
          "Depois da autorização, armazene XML e DANFE.",
        ],
      },
      {
        heading: "Se houver rejeição",
        paragraphs: [
          "Leia o código e a mensagem completa. Corrija a causa no cadastro ou documento e transmita novamente; não gere outra numeração sem necessidade.",
        ],
        note:
          "Regras fiscais variam. Confirme a configuração com sua contabilidade.",
      },
    ],
  },
  {
    slug: "configurar-tributacoes",
    title: "Configurar tributações",
    summary:
      "Organize regras fiscais com segurança e apoio da contabilidade.",
    category: "notas-fiscais-e-tributacoes",
    updatedAt,
    keywords: ["tributação", "CFOP", "CSOSN", "CST", "NCM"],
    sections: [
      {
        heading: "Reúna as definições",
        bullets: [
          "Regime tributário da empresa.",
          "CST ou CSOSN aplicável.",
          "CFOP por tipo de operação.",
          "NCM, origem e alíquotas dos produtos.",
          "Regras por estado e tipo de cliente.",
        ],
      },
      {
        heading: "Crie regras específicas",
        paragraphs: [
          "Evite uma configuração genérica para todas as vendas. Operações internas, interestaduais, devoluções e consumidor final podem exigir tratamento diferente.",
        ],
      },
      {
        heading: "Teste antes de usar em produção",
        paragraphs: [
          "Emita documentos controlados e peça à contabilidade para revisar os resultados. Uma autorização da SEFAZ não garante, sozinha, que o enquadramento tributário esteja correto.",
        ],
      },
    ],
  },
  {
    slug: "certificado-digital-nfe",
    title: "Configurar certificado digital para NF-e",
    summary:
      "Como preparar o certificado e evitar interrupções na emissão.",
    category: "notas-fiscais-e-tributacoes",
    updatedAt,
    keywords: ["certificado", "A1", "A3", "senha", "validade"],
    sections: [
      {
        heading: "Antes de configurar",
        bullets: [
          "Confirme o tipo de certificado aceito na operação.",
          "Verifique CNPJ, validade e cadeia certificadora.",
          "Tenha a senha correta e uma cópia segura do arquivo.",
        ],
      },
      {
        heading: "Cuidados de segurança",
        paragraphs: [
          "Não envie certificado e senha por canais abertos. Restrinja o acesso às pessoas responsáveis e registre a data de renovação.",
        ],
      },
      {
        heading: "Teste",
        paragraphs: [
          "Depois da configuração, valide a comunicação no ambiente adequado. Se ocorrer falha, consulte o artigo de erro de certificado na área de Erros frequentes.",
        ],
      },
    ],
  },
  {
    slug: "nfc-e-guia-completo",
    title: "NFC-e: guia de preparação",
    summary:
      "Pré-requisitos e conferências para emitir nota ao consumidor.",
    category: "notas-fiscais-e-tributacoes",
    updatedAt,
    keywords: ["NFC-e", "consumidor", "CSC", "QR Code"],
    sections: [
      {
        heading: "O que precisa estar configurado",
        bullets: [
          "Credenciamento na SEFAZ do estado.",
          "Certificado digital válido.",
          "CSC e identificador do CSC, quando exigidos.",
          "Série, ambiente e tributação.",
          "Forma de pagamento e troco informados corretamente.",
        ],
      },
      {
        heading: "Antes de autorizar",
        paragraphs: [
          "Revise itens, consumidor quando identificado, total, pagamentos e troco. Divergências nesses valores são causas comuns de rejeição.",
        ],
      },
      {
        heading: "Depois da autorização",
        paragraphs: [
          "Disponibilize o documento ao consumidor e mantenha o XML armazenado conforme a orientação fiscal da empresa.",
        ],
      },
    ],
  },
  {
    slug: "nfs-e-prestador-servico",
    title: "NFS-e para prestadores de serviço",
    summary:
      "O que confirmar no município antes de emitir uma nota de serviço.",
    category: "notas-fiscais-e-tributacoes",
    updatedAt,
    keywords: ["NFS-e", "serviço", "prefeitura", "ISS"],
    sections: [
      {
        heading: "A emissão depende do município",
        paragraphs: [
          "NFS-e segue regras e integrações municipais. Confirme credenciamento, usuário, certificado, códigos de serviço e regime antes de configurar.",
        ],
      },
      {
        heading: "Dados que merecem revisão",
        bullets: [
          "Tomador e município de incidência.",
          "Código e descrição do serviço.",
          "Alíquota e retenção de ISS.",
          "Outras retenções aplicáveis.",
          "Valor, deduções e observações.",
        ],
      },
      {
        heading: "Em caso de dúvida",
        paragraphs: [
          "Peça à contabilidade os parâmetros por escrito e envie ao suporte MoneySystem. Isso reduz interpretações diferentes durante a configuração.",
        ],
      },
    ],
  },
  {
    slug: "rejeicao-866-troco-guia",
    title: "Rejeição 866: guia sobre o valor do troco",
    summary:
      "Entenda por que pagamento e troco podem impedir a autorização da NFC-e.",
    category: "notas-fiscais-e-tributacoes",
    updatedAt,
    keywords: ["866", "rejeição", "troco", "NFC-e"],
    sections: [
      {
        heading: "O que a rejeição indica",
        paragraphs: [
          "A SEFAZ identificou incompatibilidade entre total da nota, valores pagos e troco informado.",
        ],
      },
      {
        heading: "Como conferir",
        numbered: [
          "Some todas as formas de pagamento.",
          "Compare o total com o valor da NFC-e.",
          "Se o pagamento for maior, informe a diferença como troco.",
          "Se não houver troco, corrija os valores de pagamento.",
          "Transmita novamente o mesmo documento corrigido.",
        ],
      },
      {
        heading: "Exemplo",
        paragraphs: [
          "Em uma venda de R$ 90,00 com pagamento de R$ 100,00, o troco deve ser R$ 10,00. Se o pagamento for exatamente R$ 90,00, não deve existir troco positivo.",
        ],
      },
    ],
  },
  {
    slug: "financeiro-fluxo-caixa-basico",
    title: "Fluxo de caixa: configuração básica",
    summary:
      "Organize contas, datas e categorias para enxergar o caixa previsto e realizado.",
    category: "financeiro",
    updatedAt,
    keywords: ["fluxo de caixa", "receita", "despesa", "contas"],
    sections: [
      {
        heading: "Registre compromissos, não só pagamentos",
        paragraphs: [
          "Contas a pagar e receber devem entrar com vencimento antes da quitação. Assim, o fluxo mostra o que ainda afetará o caixa.",
        ],
      },
      {
        heading: "Padronize",
        bullets: [
          "Contas e bancos.",
          "Categorias de receita e despesa.",
          "Centros de custo quando necessários.",
          "Formas de pagamento.",
          "Regras para recorrências.",
        ],
      },
      {
        heading: "Faça uma conferência curta",
        paragraphs: [
          "Compare diariamente movimentações relevantes e faça um fechamento mensal com extratos, pendências e DRE.",
        ],
      },
    ],
  },
  {
    slug: "conciliacao-bancaria",
    title: "Conciliação bancária",
    summary:
      "Compare o sistema com o extrato e trate diferenças sem apagar o histórico.",
    category: "financeiro",
    updatedAt,
    keywords: ["conciliação", "banco", "extrato", "OFX"],
    sections: [
      {
        heading: "Prepare o período",
        paragraphs: [
          "Selecione a conta e use o mesmo intervalo de datas no MoneySystem e no extrato. Evite conciliar enquanto lançamentos antigos ainda estão sendo importados.",
        ],
      },
      {
        heading: "Associe movimentações",
        numbered: [
          "Localize valor e data correspondentes.",
          "Confirme cliente, fornecedor ou categoria.",
          "Vincule o movimento bancário ao lançamento existente.",
          "Crie um novo lançamento apenas quando ele realmente não existir.",
        ],
      },
      {
        heading: "Trate diferenças",
        bullets: [
          "Tarifas e juros não registrados.",
          "Parcelas liquidadas em lote.",
          "Datas de compensação diferentes.",
          "Lançamentos duplicados.",
        ],
      },
    ],
  },
  {
    slug: "integrar-marketplaces",
    title: "Integrar marketplaces",
    summary:
      "Checklist para conectar canais de venda sem duplicar pedidos e estoque.",
    category: "integracoes",
    updatedAt,
    keywords: ["marketplace", "integração", "pedido", "estoque"],
    sections: [
      {
        heading: "Mapeie antes de ativar",
        bullets: [
          "Produtos e variações.",
          "SKU e identificadores do canal.",
          "Depósitos e regras de estoque.",
          "Status de pedido.",
          "Frete, taxas e condições de pagamento.",
        ],
      },
      {
        heading: "Teste com poucos itens",
        paragraphs: [
          "Valide a entrada de um pedido, a baixa de estoque e o financeiro antes de ampliar o catálogo.",
        ],
      },
      {
        heading: "Evite duas origens para a mesma ação",
        paragraphs: [
          "Defina qual sistema será responsável por preço, estoque e faturamento. Atualizações concorrentes podem sobrescrever dados.",
        ],
      },
    ],
  },
  {
    slug: "logistica-expedicao-rastreio",
    title: "Logística: expedição e rastreio",
    summary:
      "Organize separação, conferência, despacho e acompanhamento da entrega.",
    category: "logistica",
    updatedAt,
    keywords: ["expedição", "rastreio", "separação", "romaneio"],
    sections: [
      {
        heading: "Fluxo recomendado",
        numbered: [
          "Liberar pedidos aprovados para separação.",
          "Conferir itens e quantidades.",
          "Gerar documentos e etiquetas necessários.",
          "Registrar transportadora, volumes e despacho.",
          "Disponibilizar rastreio e tratar ocorrências.",
        ],
      },
      {
        heading: "Registre responsáveis",
        paragraphs: [
          "Separação e conferência por pessoas diferentes ajudam a reduzir erros. Mantenha data e usuário no histórico.",
        ],
      },
      {
        heading: "Feche a entrega",
        paragraphs: [
          "Acompanhe pedidos parados e registre devoluções ou reentregas no fluxo original para preservar estoque e financeiro.",
        ],
      },
    ],
  },
  {
    slug: "dashboard-relatorios-gestao",
    title: "Dashboard e relatórios de gestão",
    summary:
      "Como ler indicadores sem confundir movimento com resultado.",
    category: "dashboard",
    updatedAt,
    keywords: ["dashboard", "relatório", "indicador", "DRE"],
    sections: [
      {
        heading: "Comece pela pergunta",
        paragraphs: [
          "Escolha o indicador conforme a decisão: caixa para compromissos, vendas para atividade comercial, estoque para disponibilidade e DRE para resultado.",
        ],
      },
      {
        heading: "Compare períodos equivalentes",
        bullets: [
          "Use o mesmo número de dias.",
          "Separe realizado de previsto.",
          "Considere sazonalidade e eventos pontuais.",
          "Abra o detalhe antes de concluir.",
        ],
      },
      {
        heading: "Transforme leitura em rotina",
        paragraphs: [
          "Defina poucos indicadores para a reunião semanal e uma análise mais completa no fechamento mensal.",
        ],
      },
    ],
  },
  {
    slug: "usuarios-permissoes-seguranca",
    title: "Usuários, permissões e segurança",
    summary:
      "Como organizar acessos individuais e reduzir exposição desnecessária.",
    category: "configuracoes-do-sistema",
    updatedAt,
    keywords: ["usuário", "permissão", "senha", "segurança"],
    sections: [
      {
        heading: "Um acesso por pessoa",
        paragraphs: [
          "Nunca use o mesmo usuário para toda a equipe. A identificação individual melhora segurança, histórico e responsabilização.",
        ],
      },
      {
        heading: "Princípio do menor acesso",
        bullets: [
          "Libere somente os módulos necessários.",
          "Restrinja exclusões e alterações sensíveis.",
          "Revise permissões ao mudar funções.",
          "Desative imediatamente acessos de quem saiu.",
        ],
      },
      {
        heading: "Hábitos básicos",
        paragraphs: [
          "Use senhas exclusivas, proteja dispositivos e não compartilhe credenciais por mensagens. Procure o suporte humano ao perceber atividade incomum.",
        ],
      },
    ],
  },
  {
    slug: "automacoes-alertas-erp",
    title: "Automações e alertas no ERP",
    summary:
      "Configure avisos úteis sem transformar a rotina em uma sequência de notificações.",
    category: "configuracoes-do-sistema",
    updatedAt,
    keywords: ["automação", "alerta", "notificação", "rotina"],
    sections: [
      {
        heading: "Automatize uma regra conhecida",
        paragraphs: [
          "Antes de automatizar, defina gatilho, responsável e ação esperada. Uma rotina confusa continuará confusa em maior velocidade.",
        ],
      },
      {
        heading: "Bons candidatos",
        bullets: [
          "Contas próximas do vencimento.",
          "Estoque abaixo do mínimo.",
          "Ordens de serviço atrasadas.",
          "Pendências de faturamento.",
        ],
      },
      {
        heading: "Revise os resultados",
        paragraphs: [
          "Acompanhe alertas ignorados e duplicados. Ajuste frequência e destinatários para manter somente o que orienta uma ação.",
        ],
      },
    ],
  },
  {
    slug: "ordens-de-servico-agenda",
    title: "Ordens de serviço e agenda",
    summary:
      "Ligue atendimento, responsáveis, materiais, entrega e garantia.",
    category: "servicos",
    updatedAt,
    keywords: ["ordem de serviço", "agenda", "garantia", "serviço"],
    sections: [
      {
        heading: "Abra a ordem com contexto",
        bullets: [
          "Cliente e item atendido.",
          "Serviços solicitados.",
          "Data, prazo e responsável.",
          "Materiais previstos.",
          "Observações e condições aprovadas.",
        ],
      },
      {
        heading: "Atualize o andamento",
        paragraphs: [
          "Use status objetivos e registre mudanças relevantes. A agenda deve refletir o trabalho real da equipe.",
        ],
      },
      {
        heading: "Conclua o ciclo",
        paragraphs: [
          "Confirme materiais usados, valor final, documento fiscal, recebimento e garantia antes de encerrar.",
        ],
      },
    ],
  },
  {
    slug: "api-introducao-desenvolvedores",
    title: "Introdução à API do MoneySystem",
    summary:
      "Orientações iniciais para planejar uma integração com segurança.",
    category: "api-para-desenvolvedores",
    updatedAt,
    keywords: ["API", "desenvolvedor", "autenticação", "webhook"],
    sections: [
      {
        heading: "Defina o caso de uso",
        paragraphs: [
          "Documente quais dados entram e saem, quem é a origem de cada informação e como tratar repetição ou falha.",
        ],
      },
      {
        heading: "Segurança",
        bullets: [
          "Mantenha credenciais apenas no servidor.",
          "Use HTTPS e valide assinaturas quando disponíveis.",
          "Aplique menor permissão possível.",
          "Não registre dados pessoais em logs desnecessários.",
        ],
      },
      {
        heading: "Confiabilidade",
        paragraphs: [
          "Utilize identificadores únicos, idempotência e tentativas com intervalo. Peça ao suporte a documentação e as permissões adequadas ao seu plano.",
        ],
      },
    ],
  },
  {
    slug: "programa-de-parceiros",
    title: "Programa de Parceiros MoneySystem",
    summary:
      "Como iniciar uma conversa sobre indicação, revenda e atendimento conjunto.",
    category: "programa-de-parceiros",
    updatedAt,
    keywords: ["parceiro", "revenda", "indicação", "comissão"],
    sections: [
      {
        heading: "Quem pode participar",
        paragraphs: [
          "Profissionais e empresas que atendem negócios compatíveis com o MoneySystem podem conversar com a equipe sobre o formato de parceria.",
        ],
      },
      {
        heading: "O que alinhar",
        bullets: [
          "Perfil dos clientes atendidos.",
          "Responsabilidades comerciais e de suporte.",
          "Uso da marca e materiais.",
          "Critérios de indicação e comissionamento.",
        ],
      },
      {
        heading: "Próximo passo",
        paragraphs: [
          "Fale com o atendimento humano para conhecer as condições vigentes. Nenhuma parceria é considerada ativa sem formalização.",
        ],
      },
    ],
  },
  {
    slug: "exportacoes-contabeis",
    title: "Exportações e rotina com a contabilidade",
    summary:
      "Prepare informações consistentes para o fechamento contábil e fiscal.",
    category: "contabilidade",
    updatedAt,
    keywords: ["contabilidade", "exportação", "fechamento", "XML"],
    sections: [
      {
        heading: "Combine formato e período",
        paragraphs: [
          "Pergunte à contabilidade quais arquivos, leiautes e datas são necessários. Use o mesmo período em todas as exportações.",
        ],
      },
      {
        heading: "Antes de enviar",
        bullets: [
          "Concilie contas bancárias.",
          "Revise lançamentos sem categoria.",
          "Confira cancelamentos e devoluções.",
          "Valide sequência e status das notas.",
          "Separe XMLs e relatórios solicitados.",
        ],
      },
      {
        heading: "Proteja os arquivos",
        paragraphs: [
          "Compartilhe dados fiscais e financeiros por canal acordado com a contabilidade e mantenha uma cópia organizada por competência.",
        ],
      },
    ],
  },
  {
    slug: "acompanhar-atualizacoes",
    title: "Como acompanhar atualizações do MoneySystem",
    summary:
      "Onde revisar mudanças e como preparar a equipe para novos recursos.",
    category: "atualizacoes",
    updatedAt,
    keywords: ["atualização", "novidade", "melhoria", "comunicado"],
    sections: [
      {
        heading: "Leia o impacto, não só o título",
        paragraphs: [
          "Verifique quais módulos, perfis e rotinas foram alterados. Nem toda melhoria exige uma mudança imediata na empresa.",
        ],
      },
      {
        heading: "Antes de adotar",
        bullets: [
          "Revise permissões.",
          "Teste com um cenário conhecido.",
          "Oriente os responsáveis.",
          "Atualize procedimentos internos.",
        ],
      },
      {
        heading: "Em caso de dúvida",
        paragraphs: [
          "O suporte é 100% humano. Envie o contexto e a tela em que a dúvida apareceu para receber uma orientação mais objetiva.",
        ],
      },
    ],
  },
];

export const helpErrors: HelpArticle[] = [
  {
    slug: "rejeicao-866-troco-incorreto",
    title: "Rejeição 866: troco incorreto",
    summary:
      "Corrija a diferença entre o total da NFC-e, os pagamentos e o troco.",
    category: "erros",
    updatedAt,
    keywords: ["866", "troco", "NFC-e", "rejeição"],
    sections: [
      {
        heading: "Causa provável",
        paragraphs: [
          "A soma dos pagamentos é maior que o total da NFC-e, mas o troco está ausente ou diferente da diferença calculada.",
        ],
      },
      {
        heading: "Como corrigir",
        numbered: [
          "Abra o documento rejeitado.",
          "Compare o total com todas as formas de pagamento.",
          "Informe como troco apenas a diferença positiva.",
          "Se não houver troco, ajuste o pagamento ao total.",
          "Salve e transmita novamente.",
        ],
      },
      {
        heading: "Se continuar",
        paragraphs: [
          "Envie ao suporte o código, a mensagem completa e os valores exibidos. Não compartilhe certificado ou senha.",
        ],
      },
    ],
  },
  {
    slug: "erro-certificado-digital",
    title: "Erro no certificado digital",
    summary:
      "Verifique validade, senha, titularidade e configuração do certificado.",
    category: "erros",
    updatedAt,
    keywords: ["certificado", "senha", "validade", "A1", "A3"],
    sections: [
      {
        heading: "Verificações rápidas",
        bullets: [
          "O certificado está dentro da validade.",
          "O CNPJ corresponde à empresa emissora.",
          "A senha foi informada corretamente.",
          "O arquivo não foi substituído ou corrompido.",
          "Data e hora do dispositivo estão corretas.",
        ],
      },
      {
        heading: "Como agir",
        paragraphs: [
          "Reconfigure o certificado conforme o procedimento da empresa e faça um teste controlado. Se ele foi renovado, remova a referência antiga somente depois de confirmar o novo.",
        ],
      },
      {
        heading: "Segurança",
        note:
          "Nunca envie o arquivo e a senha juntos por mensagem. O suporte não precisa conhecer sua senha para analisar a maioria dos erros.",
      },
    ],
  },
  {
    slug: "falha-ao-emitir-nfe",
    title: "Falha ao emitir NF-e",
    summary:
      "Uma ordem de diagnóstico para falhas de cadastro, configuração ou comunicação.",
    category: "erros",
    updatedAt,
    keywords: ["NF-e", "falha", "rejeição", "SEFAZ"],
    sections: [
      {
        heading: "Identifique a etapa",
        bullets: [
          "Validação antes do envio.",
          "Comunicação com a SEFAZ.",
          "Rejeição após transmissão.",
          "Autorização sem impressão ou download.",
        ],
      },
      {
        heading: "Confira",
        numbered: [
          "Leia o código e a mensagem completos.",
          "Revise emitente, destinatário e produtos.",
          "Valide certificado, série e ambiente.",
          "Consulte disponibilidade da SEFAZ.",
          "Corrija a causa e retransmita o documento.",
        ],
      },
      {
        heading: "Peça ajuda com contexto",
        paragraphs: [
          "Informe número da nota, horário e mensagem recebida. Não envie senhas ou dados pessoais além do necessário.",
        ],
      },
    ],
  },
  {
    slug: "produto-sem-estoque",
    title: "Produto aparece sem estoque",
    summary:
      "Descubra se a diferença vem de depósito, movimentação, data ou cadastro.",
    category: "erros",
    updatedAt,
    keywords: ["produto", "saldo", "estoque", "depósito"],
    sections: [
      {
        heading: "Confira primeiro",
        bullets: [
          "Produto e variação corretos.",
          "Empresa, filial e depósito selecionados.",
          "Data usada na consulta.",
          "Vendas, entradas e devoluções recentes.",
        ],
      },
      {
        heading: "Abra o histórico",
        paragraphs: [
          "Procure a última movimentação que alterou o saldo. Cancelamentos e ajustes devem aparecer com motivo e usuário.",
        ],
      },
      {
        heading: "Não corrija sem entender",
        paragraphs: [
          "Faça um inventário controlado antes de lançar ajuste. Alterar o saldo diretamente pode esconder o problema e fazê-lo voltar.",
        ],
      },
    ],
  },
  {
    slug: "tributacao-invalida",
    title: "Tributação inválida na nota fiscal",
    summary:
      "Revise regra fiscal, produto, operação e destinatário antes de retransmitir.",
    category: "erros",
    updatedAt,
    keywords: ["tributação", "CFOP", "NCM", "CST", "CSOSN"],
    sections: [
      {
        heading: "Possíveis origens",
        bullets: [
          "Regra incompatível com o regime da empresa.",
          "CFOP diferente da operação.",
          "NCM ou origem ausentes.",
          "CST ou CSOSN incorreto.",
          "Alíquota ou benefício fiscal sem os dados exigidos.",
        ],
      },
      {
        heading: "Como corrigir",
        numbered: [
          "Leia a mensagem da SEFAZ.",
          "Identifique o item e a regra aplicada.",
          "Compare com a orientação da contabilidade.",
          "Ajuste o cadastro ou a exceção da operação.",
          "Gere novamente e transmita.",
        ],
      },
      {
        heading: "Importante",
        note:
          "A autorização técnica não substitui a validação tributária. Confirme a regra com o contador responsável.",
      },
    ],
  },
];

export function getHelpCategory(slug: string) {
  return helpCategories.find((category) => category.slug === slug);
}

export function getHelpArticle(slug: string) {
  return helpArticles.find((article) => article.slug === slug);
}

export function getHelpError(slug: string) {
  return helpErrors.find((article) => article.slug === slug);
}

export function getArticlesByCategory(category: string) {
  return helpArticles.filter((article) => article.category === category);
}
