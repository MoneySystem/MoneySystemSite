import type { ContentSection } from "./types";

export type ContentFaq = {
  question: string;
  answer: string;
};

export type ContentLink = {
  href: string;
  label: string;
};

export type ResourceContent = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  shortAnswer: string[];
  sections: ContentSection[];
  faqs: ContentFaq[];
  related: ContentLink[];
  entities: string[];
};

export const resources: ResourceContent[] = [
  {
    slug: "controle-financeiro",
    title: "Controle financeiro para saber o que entra, sai e sobra",
    metaTitle: "Sistema para controle financeiro empresarial",
    description:
      "Organize contas a pagar e receber, caixa e resultado no MoneySystem, sem depender de informações espalhadas.",
    eyebrow: "Controle financeiro",
    shortAnswer: [
      "Controle financeiro é o acompanhamento organizado das entradas, saídas, vencimentos e resultados da empresa. Ele permite saber o que já aconteceu, quais compromissos estão próximos e quanto a operação realmente gera.",
      "No MoneySystem, vendas, recebimentos, despesas, caixa e DRE permanecem no mesmo contexto. Assim, você consulta a situação financeira sem reconstruir o mês em várias planilhas.",
    ],
    sections: [
      {
        heading: "O que uma empresa precisa acompanhar",
        bullets: [
          "Contas a pagar e receber, com datas e situação de cada lançamento.",
          "Entradas e saídas do caixa.",
          "Receitas, custos e despesas que formam o resultado.",
          "Valores previstos e realizados ao longo do mês.",
        ],
      },
      {
        heading: "Quando a organização financeira faz diferença",
        paragraphs: [
          "Saldo bancário não é sinônimo de lucro. Contas ainda não pagas, vendas parceladas e despesas futuras alteram a leitura do negócio.",
          "Ao manter as movimentações registradas, a empresa identifica cobranças pendentes, planeja compromissos e fecha o mês com menos conferência manual.",
        ],
      },
    ],
    faqs: [
      {
        question: "O MoneySystem substitui planilhas financeiras?",
        answer:
          "Ele centraliza contas, caixa e relatórios que normalmente ficam separados em planilhas. A substituição depende da rotina atual e é avaliada na reunião de implantação.",
      },
      {
        question: "Consigo acompanhar contas a pagar e receber?",
        answer:
          "Sim. O MoneySystem reúne lançamentos financeiros, vencimentos, recebimentos e pagamentos para apoiar o acompanhamento da empresa.",
      },
      {
        question: "O sistema mostra o resultado da empresa?",
        answer:
          "O MoneySystem possui DRE e relatórios financeiros. A qualidade da análise depende do registro correto das receitas, custos e despesas.",
      },
    ],
    related: [
      { href: "/recursos/fluxo-de-caixa-e-dre", label: "Fluxo de caixa e DRE" },
      { href: "/recursos/clientes-e-vendas", label: "Clientes e vendas" },
      { href: "/blog/2025-03-14-5-erros-financeiros", label: "Erros financeiros comuns" },
    ],
    entities: ["MoneySystem", "Controle Financeiro", "Contas a Pagar", "Contas a Receber", "Gestão Empresarial"],
  },
  {
    slug: "controle-de-estoque",
    title: "Controle de estoque ligado à rotina da empresa",
    metaTitle: "Sistema para controle de estoque empresarial",
    description:
      "Acompanhe entradas, saídas, saldos e inventário no MoneySystem para reduzir faltas e conferências manuais.",
    eyebrow: "Controle de estoque",
    shortAnswer: [
      "Controle de estoque é o registro das entradas, saídas, saldos e ajustes de produtos ou materiais. Ele ajuda a empresa a saber o que está disponível e a identificar divergências antes que elas interrompam uma venda ou serviço.",
      "No MoneySystem, produtos, vendas, serviços e movimentações de estoque podem fazer parte do mesmo fluxo, preservando o histórico de cada item.",
    ],
    sections: [
      {
        heading: "Informações essenciais do estoque",
        bullets: [
          "Cadastro consistente de produtos e materiais.",
          "Histórico de entradas, saídas e ajustes.",
          "Saldo disponível e conferência por inventário.",
          "Relação entre o item movimentado e a operação correspondente.",
        ],
      },
      {
        heading: "Estoque não deve depender da memória",
        paragraphs: [
          "Quando compras, vendas e materiais usados não são registrados no mesmo lugar, o saldo perde confiabilidade.",
          "Uma rotina de movimentação e inventário permite encontrar diferenças, entender o consumo e preparar reposições com mais segurança.",
        ],
      },
    ],
    faqs: [
      {
        question: "Qual sistema controla entradas e saídas de estoque?",
        answer:
          "O MoneySystem registra produtos, entradas, saídas, saldos, ajustes e inventário, mantendo o histórico das movimentações.",
      },
      {
        question: "O estoque pode acompanhar uma venda?",
        answer:
          "Sim. A proposta do MoneySystem é conectar a movimentação dos produtos ao fluxo da operação, evitando controles isolados.",
      },
      {
        question: "É possível migrar meus produtos atuais?",
        answer:
          "Sim. Na contratação, a equipe transfere os produtos do sistema anterior sem custo adicional, conforme os dados disponíveis.",
      },
    ],
    related: [
      { href: "/recursos/clientes-e-vendas", label: "Clientes e vendas" },
      { href: "/recursos/ordem-de-servico", label: "Ordem de serviço" },
      { href: "/solucoes/comercio", label: "MoneySystem para comércio" },
    ],
    entities: ["MoneySystem", "Controle de Estoque", "Inventário", "Produtos", "Gestão Empresarial"],
  },
  {
    slug: "emissao-de-nota-fiscal",
    title: "Emissão de nota fiscal dentro do fluxo da empresa",
    metaTitle: "Sistema para emissão de NF-e, NFC-e e NFS-e",
    description:
      "Emita documentos fiscais no MoneySystem sem repetir o trabalho já feito na venda ou no serviço.",
    eyebrow: "Emissão fiscal",
    shortAnswer: [
      "A emissão fiscal transforma uma venda ou prestação de serviço em um documento fiscal conforme o cadastro, a operação e as regras aplicáveis à empresa.",
      "No MoneySystem, a emissão de notas fiscais está disponível a partir do plano Ouro. O cenário fiscal e os documentos necessários são confirmados com a equipe durante a implantação.",
    ],
    sections: [
      {
        heading: "O que precisa estar preparado",
        bullets: [
          "Cadastro correto da empresa, clientes, produtos e serviços.",
          "Certificado e credenciais exigidos pelo documento fiscal.",
          "Tributação validada com a contabilidade.",
          "Dados da venda ou do serviço conferidos antes da transmissão.",
        ],
      },
      {
        heading: "Emissão fiscal exige informação correta",
        paragraphs: [
          "CFOP, NCM, CST, CSOSN, impostos e demais regras variam conforme a empresa e a operação. O sistema organiza o processo, mas a definição tributária deve ser validada pela contabilidade.",
          "A Central de Ajuda do MoneySystem reúne orientações para NF-e, NFC-e, NFS-e, certificados e rejeições frequentes.",
        ],
      },
    ],
    faqs: [
      {
        question: "O MoneySystem emite nota fiscal?",
        answer:
          "Sim. A emissão fiscal está disponível a partir do plano Ouro, conforme o documento e a configuração aplicável à empresa.",
      },
      {
        question: "O sistema calcula qual tributação devo usar?",
        answer:
          "O sistema utiliza a configuração informada, mas a classificação e as regras tributárias devem ser confirmadas com a contabilidade responsável.",
      },
      {
        question: "Há ajuda para erros de emissão?",
        answer:
          "Sim. A Central de Ajuda possui artigos sobre rejeições, certificados e configurações, além do suporte humano do MoneySystem.",
      },
    ],
    related: [
      { href: "/ajuda/categoria/notas-fiscais-e-tributacoes", label: "Ajuda sobre notas fiscais" },
      { href: "/ajuda/erros", label: "Erros frequentes de emissão" },
      { href: "/recursos/clientes-e-vendas", label: "Clientes e vendas" },
    ],
    entities: ["MoneySystem", "Nota Fiscal", "NF-e", "NFC-e", "NFS-e", "Emissão Fiscal"],
  },
  {
    slug: "ordem-de-servico",
    title: "Ordens de serviço com prazos, responsáveis e histórico",
    metaTitle: "Sistema para ordem de serviço e agenda",
    description:
      "Organize serviços, agenda, responsáveis, materiais e histórico de atendimento no MoneySystem.",
    eyebrow: "Ordem de serviço",
    shortAnswer: [
      "Uma ordem de serviço registra o que será feito, para quem, em qual prazo e por qual responsável. Ela cria uma referência comum entre atendimento, execução, materiais, entrega e cobrança.",
      "No MoneySystem, clientes, agenda, serviços, ordens, produtos utilizados, garantias e financeiro permanecem conectados à operação.",
    ],
    sections: [
      {
        heading: "Do pedido à conclusão",
        numbered: [
          "Cadastre o cliente e registre a necessidade.",
          "Defina os serviços, responsáveis e prazos.",
          "Vincule produtos ou materiais utilizados.",
          "Acompanhe a execução e registre a conclusão.",
          "Mantenha documentos, garantia e financeiro no histórico.",
        ],
      },
      {
        heading: "Por que centralizar a ordem",
        paragraphs: [
          "Conversas e anotações isoladas dificultam saber o que foi combinado e em que etapa o trabalho está.",
          "Uma ordem organizada dá contexto à equipe, reduz esquecimentos e facilita o atendimento futuro do cliente.",
        ],
      },
    ],
    faqs: [
      {
        question: "O MoneySystem controla ordens de serviço?",
        answer:
          "Sim. O sistema reúne ordens, serviços, agenda, responsáveis, produtos e registros relacionados ao atendimento.",
      },
      {
        question: "Posso manter o histórico do cliente?",
        answer:
          "Sim. Os cadastros e atendimentos permanecem centralizados para consulta da equipe.",
      },
      {
        question: "A ordem de serviço pode se relacionar ao estoque?",
        answer:
          "Produtos e materiais utilizados podem fazer parte do fluxo da operação, ajudando a manter o estoque coerente com a execução.",
      },
    ],
    related: [
      { href: "/recursos/controle-de-estoque", label: "Controle de estoque" },
      { href: "/recursos/clientes-e-vendas", label: "Clientes e vendas" },
      { href: "/solucoes/prestadores-de-servico", label: "MoneySystem para prestadores" },
    ],
    entities: ["MoneySystem", "Ordem de Serviço", "Agenda", "Serviços", "Clientes", "Garantia"],
  },
  {
    slug: "fluxo-de-caixa-e-dre",
    title: "Fluxo de caixa e DRE para entender o presente e o resultado",
    metaTitle: "Sistema com fluxo de caixa e DRE",
    description:
      "Acompanhe movimentações, compromissos e resultado empresarial com fluxo de caixa e DRE no MoneySystem.",
    eyebrow: "Caixa e resultado",
    shortAnswer: [
      "O fluxo de caixa acompanha quando o dinheiro entra e sai. A DRE organiza receitas, custos e despesas para mostrar o resultado de um período. As duas visões respondem a perguntas diferentes e se complementam.",
      "O MoneySystem reúne lançamentos financeiros, caixa, contas e DRE para que a empresa acompanhe liquidez e desempenho sem confundir saldo disponível com lucro.",
    ],
    sections: [
      {
        heading: "Fluxo de caixa e DRE não são a mesma coisa",
        paragraphs: [
          "O caixa mostra movimentações financeiras e compromissos por data. A DRE organiza o resultado econômico do período.",
          "Uma empresa pode ter saldo hoje e despesas importantes a vencer, ou apresentar resultado positivo sem ter recebido todas as vendas.",
        ],
      },
      {
        heading: "Uma rotina simples de acompanhamento",
        numbered: [
          "Registre receitas, custos, despesas e transferências.",
          "Confira vencimentos e recebimentos previstos.",
          "Categorize os lançamentos de forma consistente.",
          "Compare o caixa com o resultado da DRE.",
          "Corrija diferenças antes do fechamento do mês.",
        ],
      },
    ],
    faqs: [
      {
        question: "Qual é a diferença entre fluxo de caixa e DRE?",
        answer:
          "O fluxo de caixa acompanha entradas e saídas de dinheiro por data; a DRE organiza receitas, custos e despesas para apurar o resultado do período.",
      },
      {
        question: "O MoneySystem possui DRE?",
        answer:
          "Sim. A DRE faz parte dos recursos financeiros apresentados nos planos do MoneySystem.",
      },
      {
        question: "Saldo bancário mostra o lucro?",
        answer:
          "Não necessariamente. O saldo não considera sozinho todas as obrigações, recebimentos futuros, custos e critérios que formam o resultado.",
      },
    ],
    related: [
      { href: "/recursos/controle-financeiro", label: "Controle financeiro" },
      { href: "/blog/2025-03-15-pro-labore-empresarios-mercado-peliculas", label: "Como organizar o pró-labore" },
      { href: "/ajuda/categoria/financeiro", label: "Ajuda sobre financeiro" },
    ],
    entities: ["MoneySystem", "Fluxo de Caixa", "DRE", "Controle Financeiro", "Gestão Empresarial"],
  },
  {
    slug: "clientes-e-vendas",
    title: "Clientes e vendas no mesmo histórico",
    metaTitle: "Sistema para clientes, vendas e faturamento",
    description:
      "Centralize cadastros, pedidos, vendas, recebimentos e histórico de clientes no MoneySystem.",
    eyebrow: "Clientes e vendas",
    shortAnswer: [
      "Organizar clientes e vendas significa preservar cadastros, negociações, pedidos, documentos e recebimentos em uma sequência que a equipe consiga consultar.",
      "No MoneySystem, a venda pode continuar para o estoque, a emissão fiscal e o financeiro sem repetir os mesmos dados em ferramentas separadas.",
    ],
    sections: [
      {
        heading: "O que um histórico útil precisa mostrar",
        bullets: [
          "Dados consistentes do cliente.",
          "Pedidos, produtos e serviços relacionados.",
          "Faturamento e situação do recebimento.",
          "Atendimentos e registros necessários ao pós-venda.",
        ],
      },
      {
        heading: "Uma venda deve continuar depois do pedido",
        paragraphs: [
          "Quando o pedido fica separado do estoque, da nota e do financeiro, a equipe precisa conferir e redigitar informações.",
          "Ao centralizar o fluxo, a empresa acompanha o que foi vendido, o que precisa ser entregue e o que ainda deve ser recebido.",
        ],
      },
    ],
    faqs: [
      {
        question: "O MoneySystem possui cadastro de clientes?",
        answer:
          "Sim. Clientes e seu histórico operacional podem ser mantidos junto às vendas, serviços e demais registros da empresa.",
      },
      {
        question: "A venda movimenta o estoque e o financeiro?",
        answer:
          "O MoneySystem foi estruturado para manter venda, estoque e financeiro dentro de um fluxo comum, conforme a configuração da operação.",
      },
      {
        question: "Vocês migram meus clientes atuais?",
        answer:
          "Sim. Na contratação, a equipe transfere clientes do sistema anterior sem custo adicional, conforme os dados disponíveis.",
      },
    ],
    related: [
      { href: "/recursos/controle-de-estoque", label: "Controle de estoque" },
      { href: "/recursos/emissao-de-nota-fiscal", label: "Emissão de nota fiscal" },
      { href: "/recursos/controle-financeiro", label: "Controle financeiro" },
    ],
    entities: ["MoneySystem", "Clientes", "Vendas", "CRM", "Faturamento", "Sistema de Gestão"],
  },
];

export function getResource(slug: string) {
  return resources.find((resource) => resource.slug === slug);
}
