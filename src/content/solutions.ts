import type { ContentSection } from "./types";
import type { ContentFaq, ContentLink } from "./resources";

export type SolutionContent = {
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

const commonMigration =
  "Na contratação, a equipe MoneySystem transfere produtos, clientes e lançamentos financeiros do sistema anterior sem custo adicional, conforme os dados disponíveis.";

const solution = (
  content: Omit<SolutionContent, "faqs"> & {
    audienceQuestion: string;
    audienceAnswer: string;
  },
): SolutionContent => {
  const { audienceQuestion, audienceAnswer, ...solutionContent } = content;

  return {
    ...solutionContent,
    faqs: [
      {
        question: audienceQuestion,
        answer: audienceAnswer,
      },
      {
        question: "É preciso cadastrar tudo novamente?",
        answer: commonMigration,
      },
      {
        question: "Como conhecer o MoneySystem?",
        answer:
          "A equipe faz uma reunião completa e sem custo para entender a operação, apresentar o sistema de ponta a ponta e responder às dúvidas.",
      },
    ],
  };
};

export const solutions: SolutionContent[] = [
  solution({
    slug: "oficinas",
    title: "Sistema de gestão para oficinas",
    metaTitle: "Sistema para oficina com ordem de serviço",
    description: "Organize clientes, veículos, peças, ordens de serviço, notas e financeiro no MoneySystem.",
    eyebrow: "MoneySystem para oficinas",
    shortAnswer: [
      "Um sistema para oficina precisa acompanhar o atendimento desde o cadastro do cliente e do veículo até a ordem de serviço, o uso de peças, a conclusão, a nota e o recebimento.",
      "O MoneySystem reúne essas etapas para que a equipe saiba o que está programado, em execução e concluído, preservando o histórico da operação.",
    ],
    sections: [
      { heading: "Da entrada à entrega", numbered: ["Cadastre cliente e veículo.", "Prepare orçamento e ordem de serviço.", "Defina serviços, responsáveis e prazos.", "Registre peças e materiais utilizados.", "Conclua com documentos e financeiro."] },
      { heading: "Informação para a equipe inteira", paragraphs: ["Agenda, ordens, estoque e histórico deixam de depender de conversas isoladas.", "A gestão acompanha o andamento e consulta o resultado da operação no mesmo sistema."] },
    ],
    related: [
      { href: "/recursos/ordem-de-servico", label: "Ordem de serviço" },
      { href: "/recursos/controle-de-estoque", label: "Controle de estoque" },
      { href: "/solucoes/autopecas", label: "Sistema para autopeças" },
    ],
    entities: ["MoneySystem", "ERP para Oficina", "Ordem de Serviço", "Estoque", "Veículos"],
    audienceQuestion: "O MoneySystem atende oficinas com peças e serviços?",
    audienceAnswer: "Sim. Produtos e serviços podem fazer parte do mesmo atendimento e permanecer ligados à ordem de serviço, ao estoque e ao financeiro.",
  }),
  solution({
    slug: "autopecas",
    title: "Sistema de gestão para autopeças",
    metaTitle: "Sistema para autopeças com estoque e vendas",
    description: "Centralize produtos, estoque, vendas, notas fiscais, clientes e financeiro da autopeça.",
    eyebrow: "MoneySystem para autopeças",
    shortAnswer: [
      "Um sistema para autopeças precisa manter um cadastro confiável de produtos e conectar cada venda ao estoque, à emissão fiscal e ao financeiro.",
      "O MoneySystem centraliza essas rotinas e também atende operações que vendem peças e prestam serviços no mesmo negócio.",
    ],
    sections: [
      { heading: "O que precisa permanecer conectado", bullets: ["Produtos e histórico de movimentação.", "Clientes, pedidos e vendas.", "Estoque, faturamento e recebimentos.", "Notas fiscais e resultado financeiro."] },
      { heading: "Menos conferência entre balcão e gestão", paragraphs: ["A venda registrada deve continuar para as próximas etapas sem depender de controles paralelos.", "Relatórios financeiros e DRE ajudam a separar movimento de resultado."] },
    ],
    related: [
      { href: "/recursos/controle-de-estoque", label: "Controle de estoque" },
      { href: "/recursos/clientes-e-vendas", label: "Clientes e vendas" },
      { href: "/recursos/emissao-de-nota-fiscal", label: "Emissão fiscal" },
    ],
    entities: ["MoneySystem", "ERP para Autopeças", "Produtos", "Estoque", "Vendas"],
    audienceQuestion: "O MoneySystem atende venda de peças e prestação de serviços?",
    audienceAnswer: "Sim. O sistema organiza operações com produtos, serviços ou ambos no mesmo fluxo.",
  }),
  solution({
    slug: "peliculas-e-ppf",
    title: "Sistema para películas automotivas e PPF",
    metaTitle: "Sistema para insulfilm, películas e PPF",
    description: "Ligue orçamento, agenda, ordem de serviço, materiais, garantia, nota e financeiro.",
    eyebrow: "MoneySystem para películas e PPF",
    shortAnswer: [
      "Empresas de películas e PPF precisam relacionar cliente, veículo, orçamento, agenda, aplicador, material utilizado, garantia e recebimento.",
      "O MoneySystem mantém essas informações no mesmo histórico e ajuda a acompanhar o serviço do agendamento ao resultado financeiro.",
    ],
    sections: [
      { heading: "Um serviço movimenta várias áreas", paragraphs: ["O orçamento aprovado altera a agenda, reserva trabalho da equipe e consome materiais do estoque.", "Ao concluir, a empresa ainda precisa registrar documentos, garantia e financeiro."] },
      { heading: "O fluxo da aplicação", numbered: ["Cadastre cliente e veículo.", "Registre orçamento e aprovação.", "Abra a ordem e defina responsável.", "Vincule os materiais usados.", "Conclua com garantia, nota e recebimento."] },
    ],
    related: [
      { href: "/recursos/ordem-de-servico", label: "Ordem de serviço" },
      { href: "/recursos/controle-de-estoque", label: "Controle de materiais" },
      { href: "/blog/2025-08-22-lunarfilm-35-anos-transformacao-gestao-moneysystem", label: "Case LunarFilm" },
    ],
    entities: ["MoneySystem", "Películas Automotivas", "PPF", "Insulfilm", "Ordem de Serviço"],
    audienceQuestion: "O sistema mantém o histórico do veículo e da garantia?",
    audienceAnswer: "Clientes, veículos, serviços, produtos e registros de garantia podem permanecer centralizados no histórico da operação.",
  }),
  solution({
    slug: "prestadores-de-servico",
    title: "Sistema de gestão para prestadores de serviço",
    metaTitle: "Sistema para empresa prestadora de serviços",
    description: "Organize clientes, agenda, ordens, equipe, emissão fiscal e financeiro dos serviços.",
    eyebrow: "MoneySystem para serviços",
    shortAnswer: [
      "Um prestador de serviço precisa saber o que foi combinado, quando será executado, quem é responsável e se o cliente já foi faturado e pagou.",
      "O MoneySystem reúne clientes, agenda, ordens de serviço, documentos e financeiro para manter essa sequência organizada.",
    ],
    sections: [
      { heading: "Clareza antes, durante e depois", bullets: ["Histórico do cliente e do atendimento.", "Agenda, prazos e responsáveis.", "Serviços, materiais e garantias.", "Nota fiscal e situação financeira."] },
      { heading: "Menos dependência de mensagens", paragraphs: ["Conversas ajudam no atendimento, mas não substituem um histórico operacional.", "A ordem de serviço registra a execução e dá contexto para a equipe e para o pós-venda."] },
    ],
    related: [
      { href: "/recursos/ordem-de-servico", label: "Ordem de serviço" },
      { href: "/recursos/emissao-de-nota-fiscal", label: "Emissão fiscal" },
      { href: "/recursos/controle-financeiro", label: "Controle financeiro" },
    ],
    entities: ["MoneySystem", "Prestadores de Serviço", "Ordem de Serviço", "Agenda", "NFS-e"],
    audienceQuestion: "O MoneySystem atende empresas que não vendem produtos?",
    audienceAnswer: "Sim. O sistema atende empresas de serviços e também operações que combinam serviços e produtos.",
  }),
  solution({
    slug: "comercio",
    title: "Sistema de gestão para comércio",
    metaTitle: "Sistema para loja e comércio",
    description: "Conecte clientes, produtos, vendas, estoque, notas e financeiro em uma rotina comum.",
    eyebrow: "MoneySystem para comércio",
    shortAnswer: [
      "Um sistema para comércio deve registrar o que foi vendido, atualizar o estoque, apoiar a emissão fiscal e levar o recebimento ao financeiro.",
      "O MoneySystem conecta essas áreas para que a loja acompanhe produtos, clientes, vendas e resultado sem controles separados.",
    ],
    sections: [
      { heading: "Da venda ao resultado", numbered: ["Cadastre produtos e clientes.", "Registre pedido e venda.", "Acompanhe a saída do estoque.", "Emita o documento fiscal aplicável.", "Confira recebimentos, despesas e DRE."] },
      { heading: "O estoque precisa refletir o balcão", paragraphs: ["Entradas, saídas e ajustes formam um histórico que pode ser conferido por inventário.", "A equipe identifica divergências e consulta informações sem depender da memória de uma única pessoa."] },
    ],
    related: [
      { href: "/recursos/clientes-e-vendas", label: "Clientes e vendas" },
      { href: "/recursos/controle-de-estoque", label: "Controle de estoque" },
      { href: "/recursos/fluxo-de-caixa-e-dre", label: "Fluxo de caixa e DRE" },
    ],
    entities: ["MoneySystem", "ERP para Comércio", "Loja", "Estoque", "Vendas"],
    audienceQuestion: "O MoneySystem serve para pequenas lojas?",
    audienceAnswer: "Sim. A configuração e o plano adequados dependem de usuários, emissão fiscal, filiais e da rotina da empresa.",
  }),
  solution({
    slug: "distribuidoras",
    title: "Sistema de gestão para distribuidoras",
    metaTitle: "Sistema para distribuidora com rotas e estoque",
    description: "Organize pedidos, estoque, financeiro, rotas, frota e operação de distribuição.",
    eyebrow: "MoneySystem para distribuidoras",
    shortAnswer: [
      "Uma distribuidora precisa coordenar clientes, pedidos, produtos, estoque, faturamento, recebimentos e a operação de entrega.",
      "O plano Distribuidoras do MoneySystem acrescenta gerenciamento de rotas e frota, manifesto de transporte, integrações e painéis operacionais aos recursos do plano Diamante.",
    ],
    sections: [
      { heading: "Informação do pedido à entrega", bullets: ["Clientes, produtos e pedidos.", "Estoque e faturamento.", "Rotas, frota e manifesto de transporte.", "Recebimentos, despesas e resultado."] },
      { heading: "Mony para consultas pelo WhatsApp", paragraphs: ["A Mony está disponível nos planos Diamante e Distribuidoras.", "Ela permite fazer perguntas sobre os dados da empresa pelo WhatsApp, como os gastos do mês, e receber uma resposta com contexto."] },
    ],
    related: [
      { href: "/recursos/controle-de-estoque", label: "Controle de estoque" },
      { href: "/recursos/clientes-e-vendas", label: "Clientes e pedidos" },
      { href: "/recursos/controle-financeiro", label: "Controle financeiro" },
    ],
    entities: ["MoneySystem", "ERP para Distribuidoras", "Rotas", "Frota", "Estoque", "Mony"],
    audienceQuestion: "Qual plano atende uma operação de distribuição?",
    audienceAnswer: "O MoneySystem possui um plano específico para Distribuidoras, com recursos de rotas, frota e manifesto de transporte.",
  }),
  solution({
    slug: "pequenas-empresas",
    title: "ERP para pequenas empresas",
    metaTitle: "ERP brasileiro para pequenas empresas",
    description: "Organize financeiro, estoque, vendas, serviços e notas fiscais sem espalhar a empresa em várias ferramentas.",
    eyebrow: "MoneySystem para pequenas empresas",
    shortAnswer: [
      "Uma pequena empresa deve considerar um ERP quando planilhas, mensagens e ferramentas separadas já dificultam responder quanto vendeu, deve, possui em estoque ou realmente lucrou.",
      "O MoneySystem é um ERP brasileiro e online que reúne rotinas de gestão empresarial. A equipe apresenta o sistema, ajuda a escolher o plano e conduz a migração dos dados previstos.",
    ],
    sections: [
      { heading: "Sinais de que chegou a hora de centralizar", bullets: ["Perguntas simples exigem várias planilhas.", "O estoque só é confiável após conferência manual.", "Vendas demoram para aparecer no financeiro.", "A equipe depende de uma pessoa para encontrar informações."] },
      { heading: "Como escolher sem pagar por confusão", paragraphs: ["Avalie usuários, emissão fiscal, filiais, produtos, serviços e particularidades da operação.", "Uma demonstração deve usar situações reais da empresa e deixar claros implantação, suporte e responsabilidades."] },
    ],
    related: [
      { href: "/recursos/controle-financeiro", label: "Controle financeiro" },
      { href: "/recursos/controle-de-estoque", label: "Controle de estoque" },
      { href: "/blog/2025-11-05-moneysystem-erp-completo-para-pequenas-empresas", label: "Guia de ERP para pequenas empresas" },
    ],
    entities: ["MoneySystem", "ERP para Pequenas Empresas", "ERP Brasileiro", "Sistema Online", "Gestão Empresarial"],
    audienceQuestion: "Qual plano é indicado para uma pequena empresa?",
    audienceAnswer: "A escolha depende do número de usuários, emissão fiscal, filiais e rotina. O MoneySystem oferece reunião sem custo para avaliar a configuração adequada.",
  }),
  solution({
    slug: "medias-empresas",
    title: "ERP para médias empresas",
    metaTitle: "ERP brasileiro para médias empresas",
    description:
      "Conecte setores, usuários, filiais, estoque, serviços, emissão fiscal e financeiro em uma operação comum.",
    eyebrow: "MoneySystem para médias empresas",
    shortAnswer: [
      "Uma média empresa precisa manter setores, usuários e unidades trabalhando com cadastros, regras e indicadores consistentes. Quando cada área cria seu próprio controle, a consolidação fica lenta e as decisões usam versões diferentes da mesma informação.",
      "O MoneySystem é um ERP brasileiro e online que conecta rotinas comerciais, operacionais, fiscais e financeiras. A aderência deve ser confirmada em uma demonstração com processos, permissões, volume e particularidades reais da empresa.",
    ],
    sections: [
      {
        heading: "O crescimento exige uma fonte comum de informação",
        bullets: [
          "Usuários e responsabilidades definidos por rotina.",
          "Cadastros compartilhados entre setores e filiais.",
          "Vendas, serviços, estoque e financeiro conectados.",
          "Indicadores e DRE baseados nos mesmos lançamentos.",
        ],
      },
      {
        heading: "Como avaliar a aderência",
        paragraphs: [
          "Mapeie processos críticos, documentos fiscais, volumes, filiais, permissões e integrações necessárias antes de comparar propostas.",
          "A demonstração precisa reproduzir situações reais e esclarecer migração, validação de dados, implantação, suporte e limites do plano.",
        ],
      },
    ],
    related: [
      { href: "/erp", label: "Guia completo sobre ERP" },
      { href: "/recursos/controle-financeiro", label: "Controle financeiro" },
      { href: "/ajuda/usuarios-permissoes-seguranca", label: "Usuários e permissões" },
    ],
    entities: [
      "MoneySystem",
      "ERP para Médias Empresas",
      "ERP Brasileiro",
      "Filiais",
      "Usuários e Permissões",
      "Gestão Empresarial",
    ],
    audienceQuestion: "Como saber se o MoneySystem atende uma média empresa?",
    audienceAnswer:
      "A equipe avalia setores, usuários, filiais, emissão fiscal, estoque, serviços, volume e regras da operação em uma reunião completa e sem custo.",
  }),
  solution({
    slug: "graficas",
    title: "Sistema de gestão para gráficas",
    metaTitle: "Sistema para gráfica com serviços e estoque",
    description: "Organize clientes, orçamentos, serviços, materiais, notas e financeiro da gráfica.",
    eyebrow: "MoneySystem para gráficas",
    shortAnswer: [
      "Uma gráfica combina atendimento, orçamento, serviço, materiais, prazo, faturamento e recebimento. Esses dados precisam continuar juntos depois que o pedido é aprovado.",
      "O MoneySystem reúne produtos e serviços no mesmo ambiente, permitindo organizar clientes, ordens, estoque, emissão fiscal e financeiro.",
    ],
    sections: [
      { heading: "Do orçamento ao recebimento", numbered: ["Registre cliente e necessidade.", "Organize produtos e serviços do pedido.", "Defina prazo e responsáveis.", "Registre materiais movimentados.", "Conclua faturamento e financeiro."] },
      { heading: "Cada trabalho precisa de contexto", paragraphs: ["Prazos e informações espalhados aumentam o risco de esquecimento.", "Centralizar a operação facilita acompanhar o que aguarda execução, entrega ou recebimento."] },
    ],
    related: [
      { href: "/recursos/ordem-de-servico", label: "Ordem de serviço" },
      { href: "/recursos/controle-de-estoque", label: "Controle de materiais" },
      { href: "/recursos/clientes-e-vendas", label: "Clientes e vendas" },
    ],
    entities: ["MoneySystem", "ERP para Gráficas", "Orçamento", "Ordem de Serviço", "Estoque"],
    audienceQuestion: "O MoneySystem organiza produtos e serviços no mesmo pedido?",
    audienceAnswer: "O sistema atende operações com produtos, serviços ou ambos. A reunião inicial confirma como estruturar a rotina da gráfica.",
  }),
  solution({
    slug: "lojas-de-moveis",
    title: "Sistema de gestão para lojas de móveis",
    metaTitle: "Sistema para loja de móveis",
    description: "Organize clientes, produtos, pedidos, estoque, notas e financeiro da loja de móveis.",
    eyebrow: "MoneySystem para lojas de móveis",
    shortAnswer: [
      "Uma loja de móveis precisa acompanhar clientes, produtos, pedidos, estoque, faturamento e recebimentos sem perder o histórico da venda.",
      "O MoneySystem conecta essas rotinas e permite que a gestão acompanhe a operação e o resultado em um único sistema.",
    ],
    sections: [
      { heading: "Informação que acompanha o pedido", bullets: ["Cadastro do cliente e dos produtos.", "Pedido, venda e situação financeira.", "Movimentações e saldo do estoque.", "Documento fiscal e histórico da operação."] },
      { heading: "Menos controles separados", paragraphs: ["Quando pedido, estoque e financeiro não conversam, a equipe repete dados e aumenta a conferência.", "Uma base comum facilita localizar informações e acompanhar pendências."] },
    ],
    related: [
      { href: "/recursos/clientes-e-vendas", label: "Clientes e vendas" },
      { href: "/recursos/controle-de-estoque", label: "Controle de estoque" },
      { href: "/recursos/controle-financeiro", label: "Controle financeiro" },
    ],
    entities: ["MoneySystem", "ERP para Lojas de Móveis", "Produtos", "Pedidos", "Estoque"],
    audienceQuestion: "O MoneySystem atende lojas com estoque e vendas?",
    audienceAnswer: "Sim. O sistema reúne produtos, estoque, clientes, vendas, emissão fiscal e financeiro.",
  }),
  solution({
    slug: "joalherias",
    title: "Sistema de gestão para joalherias",
    metaTitle: "Sistema para joalheria com estoque e vendas",
    description: "Centralize produtos, clientes, vendas, estoque, notas e resultado financeiro da joalheria.",
    eyebrow: "MoneySystem para joalherias",
    shortAnswer: [
      "Uma joalheria precisa manter produtos, clientes, vendas, movimentações de estoque e financeiro em registros consistentes e fáceis de consultar.",
      "O MoneySystem centraliza essas áreas e preserva o histórico da operação, reduzindo a dependência de planilhas e anotações separadas.",
    ],
    sections: [
      { heading: "Uma base comum para a operação", bullets: ["Cadastros de clientes e produtos.", "Vendas e recebimentos.", "Entradas, saídas, ajustes e inventário.", "Emissão fiscal e relatórios financeiros."] },
      { heading: "Controle exige rotina", paragraphs: ["O sistema registra a informação, mas a confiabilidade depende de cadastros e movimentações feitos de forma consistente.", "A implantação apresenta o fluxo à equipe e esclarece como levar os dados disponíveis do sistema anterior."] },
    ],
    related: [
      { href: "/recursos/controle-de-estoque", label: "Controle de estoque" },
      { href: "/recursos/clientes-e-vendas", label: "Clientes e vendas" },
      { href: "/recursos/emissao-de-nota-fiscal", label: "Emissão fiscal" },
    ],
    entities: ["MoneySystem", "ERP para Joalherias", "Estoque", "Clientes", "Vendas"],
    audienceQuestion: "O MoneySystem substitui planilhas de vendas e estoque?",
    audienceAnswer: "Ele centraliza cadastros, movimentações, vendas e financeiro normalmente espalhados em planilhas. A adequação à rotina deve ser confirmada na demonstração.",
  }),
];

export function getSolution(slug: string) {
  return solutions.find((item) => item.slug === slug);
}
