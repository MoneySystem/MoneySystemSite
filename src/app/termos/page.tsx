import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { webPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Termos de Uso e Política de Privacidade",
  description:
    "Termos de uso do MoneySystem e informações sobre tratamento de dados pessoais.",
  alternates: { canonical: "/termos" },
};

const sections = [
  ["termos", "Termos de Uso"],
  ["servico", "O serviço MoneySystem"],
  ["conta", "Conta e responsabilidades"],
  ["fiscal", "Informações fiscais e financeiras"],
  ["planos", "Planos, cobrança e cancelamento"],
  ["disponibilidade", "Disponibilidade e suporte"],
  ["propriedade", "Propriedade intelectual"],
  ["privacidade", "Política de Privacidade"],
  ["direitos", "Seus direitos"],
  ["seguranca", "Segurança e retenção"],
  ["terceiros", "Serviços de terceiros"],
  ["alteracoes", "Alterações e contato"],
] as const;

export default function TermsPage() {
  const structuredData = webPageSchema({
    path: "/termos",
    name: "Termos de Uso e Política de Privacidade",
    description:
      "Termos de uso do MoneySystem e informações sobre tratamento de dados pessoais.",
    breadcrumbs: [
      { name: "Início", path: "/" },
      { name: "Termos e Privacidade" },
    ],
  });

  return (
    <>
      <SiteHeader />
      <main id="conteudo">
        <header className="legal-hero">
          <div className="container legal-hero__inner">
            <Breadcrumbs
              items={[
                { label: "Início", href: "/" },
                { label: "Termos e Privacidade" },
              ]}
            />
            <p className="eyebrow">Documento institucional</p>
            <h1>Termos de Uso e Política de Privacidade</h1>
            <p>
              Este documento explica as regras de uso do MoneySystem e como
              tratamos dados pessoais em nossos canais e serviços.
            </p>
            <small>Última atualização: 28 de julho de 2026.</small>
          </div>
        </header>

        <div className="container legal-layout">
          <nav className="legal-toc" aria-label="Índice do documento">
            {sections.map(([id, label]) => (
              <a href={`#${id}`} key={id}>
                {label}
              </a>
            ))}
          </nav>

          <article className="legal-content">
            <section id="termos">
              <h2>1. Termos de Uso</h2>
              <p>
                Estes Termos regem o acesso ao site, à Central de Ajuda e à
                plataforma MoneySystem. “MoneySystem” identifica a marca e a
                pessoa jurídica indicada na proposta, contrato ou documento de
                cobrança do cliente.
              </p>
              <p>
                Ao contratar ou utilizar a plataforma, a empresa cliente e seus
                usuários declaram ter lido este documento e concordar com as
                condições aplicáveis. Condições comerciais específicas
                registradas em proposta ou contrato complementam estes Termos.
              </p>
            </section>

            <section id="servico">
              <h2>2. O serviço MoneySystem</h2>
              <p>
                O MoneySystem é uma plataforma de gestão empresarial com
                recursos que podem incluir cadastros, vendas, estoque,
                financeiro, serviços, relatórios, emissão fiscal e integrações,
                conforme o plano contratado e a configuração da empresa.
              </p>
              <p>
                Recursos, limites, integrações e valores podem variar por plano.
                A Mony, IA do MoneySystem pelo WhatsApp, está disponível nos
                planos Diamante e Distribuidoras. Respostas geradas pela Mony
                apoiam a análise, mas não substituem decisões profissionais,
                contábeis, fiscais ou jurídicas.
              </p>
            </section>

            <section id="conta">
              <h2>3. Conta e responsabilidades</h2>
              <p>A empresa cliente é responsável por:</p>
              <ul>
                <li>fornecer informações corretas e manter os dados atualizados;</li>
                <li>
                  criar acessos individuais, proteger credenciais e definir
                  permissões adequadas;
                </li>
                <li>
                  conferir lançamentos, documentos e configurações antes de
                  utilizá-los em sua operação;
                </li>
                <li>
                  comunicar imediatamente suspeitas de acesso indevido ou uso
                  não autorizado;
                </li>
                <li>
                  utilizar a plataforma de acordo com a legislação e sem
                  violar direitos de terceiros.
                </li>
              </ul>
              <p>
                É proibido tentar contornar controles de segurança, explorar
                falhas, interferir no serviço, copiar componentes protegidos ou
                usar o MoneySystem para atividades ilícitas.
              </p>
            </section>

            <section id="fiscal">
              <h2>4. Informações fiscais e financeiras</h2>
              <p>
                A plataforma processa informações inseridas e configuradas pela
                empresa cliente. A autorização técnica de uma nota fiscal não
                garante, por si só, que a classificação tributária utilizada
                esteja correta.
              </p>
              <p>
                A empresa deve validar regime, CFOP, NCM, CST, CSOSN, alíquotas,
                retenções e demais regras com sua contabilidade. Relatórios,
                projeções e respostas da Mony são instrumentos de apoio e não
                constituem auditoria, contabilidade ou aconselhamento
                profissional.
              </p>
            </section>

            <section id="planos">
              <h2>5. Planos, cobrança e cancelamento</h2>
              <p>
                Plano, preço, vencimento, usuários, recursos e eventuais
                condições de permanência constam na proposta ou contratação. O
                não pagamento pode resultar em restrição ou suspensão do acesso
                após as comunicações e prazos aplicáveis.
              </p>
              <p>
                Pedidos de alteração ou cancelamento devem ser feitos pelos
                canais oficiais. Obrigações já vencidas e regras específicas
                registradas no contrato continuam aplicáveis. Quando houver
                relação de consumo, serão preservados os direitos previstos na
                legislação brasileira.
              </p>
            </section>

            <section id="disponibilidade">
              <h2>6. Disponibilidade e suporte</h2>
              <p>
                Trabalhamos para manter a plataforma segura e disponível, mas
                manutenções, atualizações, indisponibilidade de fornecedores,
                internet, SEFAZ, prefeituras, instituições financeiras ou
                eventos fora de controle podem afetar temporariamente o
                serviço.
              </p>
              <p>
                O suporte MoneySystem é 100% humano e responde em até 5 minutos
                nos canais e períodos informados comercialmente. O tempo de
                resposta não representa necessariamente o tempo de solução,
                que depende da natureza e de terceiros envolvidos.
              </p>
            </section>

            <section id="propriedade">
              <h2>7. Propriedade intelectual</h2>
              <p>
                Marca, interface, software, textos, documentação, elementos
                visuais e demais materiais do MoneySystem são protegidos pela
                legislação aplicável. A contratação concede direito limitado,
                revogável e não transferível de uso durante a vigência, sem
                transferir propriedade do software.
              </p>
              <p>
                Os dados empresariais inseridos pelo cliente permanecem sob sua
                titularidade ou responsabilidade. O cliente declara possuir
                base legítima para armazenar e processar os dados que envia à
                plataforma.
              </p>
            </section>

            <section id="privacidade">
              <h2>8. Política de Privacidade</h2>
              <h3>8.1 Dados tratados</h3>
              <p>
                Podemos tratar dados de contato e identificação, dados
                profissionais e da empresa, informações de contratação,
                registros de suporte, dados técnicos de acesso e informações
                enviadas voluntariamente em formulários.
              </p>
              <p>
                No formulário da página de anúncios, solicitamos apenas nome,
                número do WhatsApp, informação sobre filiais e interesse em
                emissão fiscal. Também podemos registrar origem da campanha,
                página de entrada, navegador e identificadores de publicidade,
                quando presentes.
              </p>

              <h3>8.2 Finalidades</h3>
              <ul>
                <li>responder contatos e apresentar o MoneySystem;</li>
                <li>executar a contratação e prestar suporte;</li>
                <li>configurar, proteger e melhorar a plataforma;</li>
                <li>cumprir obrigações legais e prevenir fraude ou abuso;</li>
                <li>
                  medir a origem e a efetividade de campanhas sem enviar nome ou
                  telefone às ferramentas de análise.
                </li>
              </ul>

              <h3>8.3 Bases legais</h3>
              <p>
                O tratamento pode se apoiar na execução de contrato ou de
                procedimentos preliminares, cumprimento de obrigação legal,
                exercício regular de direitos, legítimo interesse com avaliação
                de impacto e consentimento quando exigido.
              </p>
            </section>

            <section id="direitos">
              <h2>9. Seus direitos</h2>
              <p>
                Nos termos da Lei Geral de Proteção de Dados, o titular pode
                solicitar confirmação e acesso, correção, informação sobre
                compartilhamentos, portabilidade quando aplicável, revisão de
                decisões automatizadas e eliminação ou anonimização nas
                hipóteses previstas em lei.
              </p>
              <p>
                A solicitação pode exigir confirmação de identidade e será
                analisada considerando obrigações legais, segurança e direitos
                da empresa cliente. Quando o MoneySystem atuar como operador,
                pedidos relacionados aos dados da empresa poderão ser
                direcionados ao controlador responsável.
              </p>
            </section>

            <section id="seguranca">
              <h2>10. Segurança e retenção</h2>
              <p>
                Adotamos medidas técnicas e organizacionais proporcionais ao
                serviço para reduzir riscos de acesso, alteração, perda ou
                divulgação indevida. Nenhum sistema é completamente imune; por
                isso, usuários também devem proteger senhas, dispositivos e
                permissões.
              </p>
              <p>
                Os dados são mantidos pelo período necessário às finalidades
                informadas, à relação contratual, a obrigações legais, à defesa
                de direitos e à prevenção de fraude. Depois disso, podem ser
                eliminados ou anonimizados de forma segura.
              </p>
            </section>

            <section id="terceiros">
              <h2>11. Serviços de terceiros</h2>
              <p>
                Podemos usar fornecedores de hospedagem, armazenamento,
                comunicação, planilhas, mensageria, emissão fiscal e
                integrações. Esses fornecedores recebem apenas os dados
                necessários às respectivas funções e ficam sujeitos a
                obrigações de proteção.
              </p>
              <p>
                O formulário comercial utiliza infraestrutura da Vercel para o
                site, Google Sheets/Apps Script para registrar o contato e
                WhatsApp para continuar a conversa. Ao seguir para serviços de
                terceiros, também se aplicam os termos e políticas desses
                provedores. Alguns tratamentos podem envolver infraestrutura
                localizada fora do Brasil, com salvaguardas compatíveis com a
                legislação.
              </p>
            </section>

            <section id="alteracoes">
              <h2>12. Alterações, legislação e contato</h2>
              <p>
                Este documento pode ser atualizado para refletir mudanças
                legais, operacionais ou no serviço. A versão vigente ficará
                disponível nesta página com a data de atualização.
              </p>
              <p>
                Aplicam-se as leis da República Federativa do Brasil. Eventuais
                conflitos serão tratados pelo foro competente conforme a
                legislação aplicável, preservados os direitos de consumidores
                quando existentes.
              </p>
              <p>
                Para dúvidas, solicitações de privacidade ou exercício de
                direitos, fale com o atendimento oficial pelo WhatsApp{" "}
                <a
                  className="text-link"
                  href="https://wa.me/5548988745520"
                  target="_blank"
                  rel="noreferrer"
                >
                  +55 48 98874-5520
                </a>
                . A identificação jurídica completa também consta nos documentos
                da contratação.
              </p>
            </section>
          </article>
        </div>
      </main>
      <SiteFooter />
      <JsonLd data={structuredData} />
    </>
  );
}
