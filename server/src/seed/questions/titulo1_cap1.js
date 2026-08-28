// Título I - Aspectos institucionais
// Capítulo I - Sistema Financeiro Nacional
// Fonte: Guia Por Dentro da B3, páginas 16-46.

export const chapterRef = { titleNumber: 'I', chapterNumber: 'I' };

export const topics = [
  'Conceito e mercados do SFN',
  'Órgãos normativos',
  'Entidades supervisoras',
  'Operadores do sistema — instituições bancárias',
  'Demais instituições não bancárias',
  'Instituições auxiliares',
  'Entidades de seguros e previdência',
];

const SRC = (section, page) => ({
  source_title: 'Guia Por Dentro da B3',
  source_chapter: 'Título I, Capítulo I — Sistema Financeiro Nacional',
  source_section: section,
  source_page: page,
});

export const questions = [
  // ---------- Conceito e mercados do SFN ----------
  {
    topic: 'Conceito e mercados do SFN',
    subtopic: 'Definição de SFN',
    difficulty: 'facil',
    statement:
      'De acordo com o Guia Por Dentro da B3, o Sistema Financeiro Nacional (SFN) pode ser definido como:',
    options: {
      A: 'O conjunto de instrumentos, mecanismos e instituições que asseguram a canalização da poupança para investimento.',
      B: 'O conjunto exclusivo de bancos comerciais autorizados a captar depósitos à vista no país.',
      C: 'A estrutura de fiscalização exercida unicamente pelo Banco Central sobre o mercado de capitais.',
      D: 'O conjunto de bolsas de valores, mercadorias e futuros em atividade no Brasil.',
    },
    correct: 'A',
    explanation:
      'O SFN é definido como o conjunto de instrumentos, mecanismos e instituições que asseguram a canalização da poupança (recursos de agentes superavitários) para investimento (agentes deficitários). Essa canalização é a função econômica central do sistema.',
    explanationWrong: {
      B: 'Restringe o SFN a apenas um tipo de operador (bancos comerciais), ignorando os demais mercados, órgãos normativos e supervisores que também compõem o sistema.',
      C: 'Confunde o SFN inteiro com a atuação de apenas uma entidade supervisora (Bacen), quando na verdade CVM, Susep e Previc também supervisionam parte do sistema.',
      D: 'Reduz o SFN a apenas parte das instituições auxiliares, deixando de fora órgãos normativos, supervisores e demais operadores.',
    },
    examTip:
      'Questões sobre "o que é o SFN" cobram a definição de canalização de poupança para investimento — decore essa frase-chave.',
    commonTrap:
      'A banca costuma trocar "canalização da poupança para investimento" por definições que descrevem apenas uma parte do sistema (só bancos, só bolsa, só um órgão).',
    ...SRC('2. Sistema Financeiro Nacional (SFN)', '19'),
  },
  {
    topic: 'Conceito e mercados do SFN',
    subtopic: 'Marco legal',
    difficulty: 'medio',
    statement:
      'Os pilares da estrutura atual do Sistema Financeiro Nacional foram estabelecidos por duas leis. Assinale a alternativa que identifica corretamente essas leis e o que cada uma criou.',
    options: {
      A: 'Lei nº 4.595/1964, que criou o CMN e o Bacen; e Lei nº 6.385/1976, que criou o Mercado de Capitais.',
      B: 'Lei nº 6.404/1976, que criou a CVM; e Lei nº 4.728/1965, que criou o Bacen.',
      C: 'Lei nº 4.595/1964, que criou a CVM; e Lei nº 6.385/1976, que criou o CMN.',
      D: 'Lei nº 4.728/1965, que criou o SFN; e Lei nº 6.385/1976, que criou o Bacen.',
    },
    correct: 'A',
    explanation:
      'A Lei nº 4.595/1964 (Lei da Reforma Bancária) criou o CMN e o Bacen; a Lei nº 6.385/1976 criou o Mercado de Capitais e, com ela, a CVM. Juntas, essas leis fixaram a base institucional do SFN.',
    explanationWrong: {
      B: 'Inverte as leis: a Lei nº 6.404/1976 é a Lei das Sociedades por Ações, não a que criou a CVM; a Lei nº 4.728/1965 é a Lei do Mercado de Capitais anterior à reforma de 1976, e não criou o Bacen.',
      C: 'Troca os papéis das duas leis: é a Lei nº 4.595/1964 que está ligada ao CMN/Bacen, e a Lei nº 6.385/1976 ao mercado de capitais/CVM — o inverso do afirmado.',
      D: 'A Lei nº 4.728/1965 não criou o SFN como um todo, e a Lei nº 6.385/1976 não criou o Bacen (ela deu origem à CVM).',
    },
    examTip:
      'Associe: 4.595/1964 → CMN + Bacen (Reforma Bancária). 6.385/1976 → CVM (Mercado de Capitais).',
    commonTrap:
      'A prova gosta de embaralhar os números das leis com as instituições que elas criaram — decore o par lei-instituição, não apenas os números soltos.',
    ...SRC('2. Sistema Financeiro Nacional (SFN)', '19'),
  },
  {
    topic: 'Conceito e mercados do SFN',
    subtopic: 'Mercados do SFN',
    difficulty: 'medio',
    statement:
      'O mercado em que o Bacen atua principalmente por meio da compra e venda de títulos públicos, com o objetivo de controlar a oferta de moeda e as taxas de juros de curto e curtíssimo prazos, é o:',
    options: {
      A: 'Mercado de crédito.',
      B: 'Mercado de capitais.',
      C: 'Mercado monetário.',
      D: 'Mercado de câmbio.',
    },
    correct: 'C',
    explanation:
      'O mercado monetário concentra as operações de controle da oferta de moeda e das taxas de juro de curto e curtíssimo prazos, garantindo a liquidez da economia. O Bacen atua nesse mercado praticando a política monetária, principalmente com compra e venda de títulos públicos.',
    explanationWrong: {
      A: 'O mercado de crédito trata da intermediação de recursos de curto e médio prazos para consumo ou capital de giro, e não do controle direto da oferta de moeda via títulos públicos.',
      B: 'O mercado de capitais canaliza recursos para a capitalização de empresas via valores mobiliários, sob supervisão da CVM — não é o mercado de política monetária de curtíssimo prazo.',
      D: 'O mercado de câmbio trata da troca de moedas estrangeiras por reais, e não do controle da oferta de moeda doméstica.',
    },
    examTip:
      'Palavra-chave "curtíssimo prazo" + "compra e venda de títulos públicos pelo Bacen" = mercado monetário.',
    commonTrap:
      'Fácil confundir mercado monetário (controle de liquidez/juros de curtíssimo prazo pelo Bacen) com mercado de crédito (intermediação de recursos entre agentes).',
    ...SRC('2. Sistema Financeiro Nacional (SFN)', '19'),
  },
  {
    topic: 'Conceito e mercados do SFN',
    subtopic: 'Mercado de capitais x mercado monetário',
    difficulty: 'dificil',
    statement:
      'Uma empresa de capital aberto capta recursos junto a investidores emitindo ações negociadas em bolsa, com o objetivo de financiar sua expansão de longo prazo. Essa operação está inserida em qual mercado do SFN, e qual órgão é o principal responsável por controlá-lo?',
    options: {
      A: 'Mercado monetário; Banco Central do Brasil.',
      B: 'Mercado de capitais; Comissão de Valores Mobiliários.',
      C: 'Mercado de crédito; Banco Central do Brasil.',
      D: 'Mercado de câmbio; Comissão de Valores Mobiliários.',
    },
    correct: 'B',
    explanation:
      'A canalização de recursos para a capitalização de empresas de capital aberto, por meio de títulos e valores mobiliários negociados em mercado de bolsa ou balcão, caracteriza o mercado de capitais. A CVM é o principal órgão responsável por controlar, normatizar e fiscalizar esse mercado.',
    explanationWrong: {
      A: 'O mercado monetário trata de liquidez e juros de curtíssimo prazo controlados pelo Bacen, não de capitalização de empresas via emissão de ações.',
      C: 'O mercado de crédito envolve intermediação de recursos para consumo ou capital de giro por instituições financeiras, não emissão de valores mobiliários em bolsa.',
      D: 'O mercado de câmbio trata da troca de moedas estrangeiras por reais, sem relação direta com emissão de ações para captação de capital.',
    },
    examTip:
      'Sempre que a questão mencionar "ações", "valores mobiliários" e "bolsa ou balcão", pense em mercado de capitais + CVM.',
    commonTrap:
      'A prova pode testar se você troca CVM por Bacen quando o cenário envolve claramente valores mobiliários — o Bacen cuida de moeda/crédito/câmbio, a CVM cuida do mercado de capitais.',
    ...SRC('2. Sistema Financeiro Nacional (SFN)', '20'),
  },

  // ---------- Órgãos normativos ----------
  {
    topic: 'Órgãos normativos',
    subtopic: 'CMN',
    difficulty: 'facil',
    statement: 'O Conselho Monetário Nacional (CMN) é o órgão responsável por:',
    options: {
      A: 'Fixar as diretrizes das políticas monetária, creditícia e cambial do país.',
      B: 'Executar diretamente a política monetária por meio de compra e venda de títulos públicos.',
      C: 'Fiscalizar e regulamentar o mercado de valores mobiliários.',
      D: 'Supervisionar o mercado de seguros privados e capitalização.',
    },
    correct: 'A',
    explanation:
      'O CMN é o órgão normativo responsável por fixar as diretrizes das políticas monetária, creditícia e cambial do país, além de regular a constituição e o funcionamento das instituições financeiras.',
    explanationWrong: {
      B: 'A execução das operações de política monetária cabe ao Bacen, não ao CMN — o CMN define diretrizes, o Bacen executa.',
      C: 'A fiscalização do mercado de valores mobiliários é atribuição da CVM, e não do CMN.',
      D: 'A supervisão do mercado de seguros privados é da Susep, sob orientação normativa do CNSP — não do CMN.',
    },
    examTip:
      'Mnemônico: CMN define diretrizes → Bacen executa/supervisiona → CVM cuida do mercado de valores mobiliários.',
    commonTrap:
      'A prova adora trocar "fixar diretrizes" (CMN) por "executar" (Bacen) — releia o verbo da alternativa com atenção.',
    ...SRC('3. Órgãos normativos — Conselho Monetário Nacional (CMN)', '22'),
  },
  {
    topic: 'Órgãos normativos',
    subtopic: 'Composição do CMN',
    difficulty: 'medio',
    statement: 'Segundo o Guia Por Dentro da B3, a composição do CMN inclui:',
    options: {
      A: 'Ministro da Fazenda (presidente), Ministro do Planejamento e Orçamento e Presidente do Banco Central do Brasil.',
      B: 'Presidente do Banco Central, Presidente da CVM e Ministro da Justiça.',
      C: 'Ministro da Fazenda, Superintendente da Susep e representante da CVM.',
      D: 'Ministro da Previdência Social, Presidente da Previc e Presidente do Bacen.',
    },
    correct: 'A',
    explanation:
      'A composição do CMN apresentada no Guia é: Ministro da Fazenda (presidente do Conselho), Ministro do Planejamento e Orçamento e Presidente do Banco Central do Brasil.',
    explanationWrong: {
      B: 'Essa composição não corresponde à do CMN — mistura cargos que não fazem parte do Conselho, como Ministro da Justiça.',
      C: 'Essa é, na verdade, uma composição próxima à do CNSP (Ministro da Fazenda, representantes de ministérios, Susep e CVM), não do CMN.',
      D: 'Essa composição se aproxima da do CNPC (previdência complementar fechada), não do CMN.',
    },
    examTip:
      'Não confunda a composição do CMN com a do CNSP e do CNPC — cada colegiado tem membros específicos ligados à sua área (moeda/crédito/câmbio, seguros, previdência fechada).',
    commonTrap:
      'A banca gosta de misturar membros de um conselho normativo com os de outro (CMN, CNSP, CNPC) para testar se você realmente sabe qual é qual.',
    ...SRC('3. Órgãos normativos — Conselho Monetário Nacional (CMN)', '22'),
  },
  {
    topic: 'Órgãos normativos',
    subtopic: 'CNSP',
    difficulty: 'medio',
    statement: 'O órgão responsável por fixar as diretrizes e normas da política de seguros privados é o:',
    options: {
      A: 'Conselho Monetário Nacional (CMN).',
      B: 'Conselho Nacional de Seguros Privados (CNSP).',
      C: 'Conselho Nacional de Previdência Complementar (CNPC).',
      D: 'Conselho de Recursos do Sistema Financeiro Nacional (CRSFN).',
    },
    correct: 'B',
    explanation:
      'O CNSP é o órgão normativo responsável por fixar as diretrizes e normas da política de seguros privados. É composto pelo Ministro da Fazenda (presidente), representantes de ministérios e do Banco Central, além do Superintendente da Susep e um representante da CVM.',
    explanationWrong: {
      A: 'O CMN cuida das políticas monetária, creditícia e cambial — não é o órgão normativo específico de seguros privados.',
      C: 'O CNPC regula o regime de previdência complementar operado pelas entidades fechadas (fundos de pensão), não o mercado de seguros privados.',
      D: 'O CRSFN é um órgão colegiado de julgamento de recursos administrativos, e não um órgão normativo de seguros.',
    },
    examTip:
      'Sufixo "seguros privados" no nome do órgão (CNSP) já entrega a resposta — associe nome do conselho ao mercado que ele normatiza.',
    commonTrap:
      'CNSP (normativo de seguros) é frequentemente confundido com Susep (supervisora de seguros) — o CNSP define regras, a Susep fiscaliza o cumprimento.',
    ...SRC('3. Órgãos normativos — Conselho Nacional de Seguros Privados (CNSP)', '22'),
  },
  {
    topic: 'Órgãos normativos',
    subtopic: 'CRSFN',
    difficulty: 'dificil',
    statement:
      'Um participante de mercado deseja recorrer, em última instância administrativa, de uma sanção aplicada pela CVM. A esse recurso compete ser julgado por qual órgão?',
    options: {
      A: 'Conselho Monetário Nacional (CMN).',
      B: 'Comissão de Valores Mobiliários (CVM), em nova análise interna.',
      C: 'Conselho de Recursos do Sistema Financeiro Nacional (CRSFN).',
      D: 'Banco Central do Brasil (Bacen).',
    },
    correct: 'C',
    explanation:
      'O CRSFN é um órgão colegiado de segundo grau, integrante da estrutura do Ministério da Fazenda, cuja atribuição é julgar, em última instância administrativa, os recursos contra sanções aplicadas pelo Bacen e pela CVM, e, em processos de lavagem de dinheiro, também as sanções do Coaf, Susep e demais autoridades competentes.',
    explanationWrong: {
      A: 'O CMN define diretrizes de política monetária, creditícia e cambial; não tem a função de julgar recursos administrativos de sanções.',
      B: 'A própria CVM aplicou a sanção; o julgamento do recurso em última instância administrativa cabe a um órgão colegiado distinto, o CRSFN.',
      D: 'O Bacen é entidade supervisora, mas o julgamento de recursos contra sanções do Bacen e da CVM é atribuição específica do CRSFN, não do próprio Bacen.',
    },
    examTip:
      'Sempre que a questão citar "recurso em última instância administrativa" contra Bacen ou CVM, a resposta é CRSFN.',
    commonTrap:
      'É tentador achar que a própria autarquia (CVM ou Bacen) reanalisa seu próprio recurso — mas o julgamento final é de um colegiado externo, o CRSFN.',
    ...SRC('3. Órgãos normativos — Conselho de Recursos do Sistema Financeiro Nacional (CRSFN)', '23'),
  },

  // ---------- Entidades supervisoras ----------
  {
    topic: 'Entidades supervisoras',
    subtopic: 'Bacen',
    difficulty: 'facil',
    statement: 'Sobre o Banco Central do Brasil (Bacen), é correto afirmar que:',
    options: {
      A: 'É uma autarquia de natureza especial, com autonomia estabelecida pela Lei Complementar nº 179/2021.',
      B: 'É uma sociedade anônima de capital aberto, negociada em bolsa de valores.',
      C: 'É um órgão diretamente vinculado ao Ministério da Fazenda, sem autonomia própria.',
      D: 'É o órgão responsável por fixar as diretrizes gerais da política monetária, cabendo ao CMN apenas executá-las.',
    },
    correct: 'A',
    explanation:
      'O Bacen é uma autarquia de natureza especial, criada pela Lei nº 4.595/1964, com autonomia estabelecida pela Lei Complementar nº 179/2021. Essa lei o desvinculou de ministério, embora seus dirigentes continuem nomeados pelo Poder Executivo e suas contas sejam submetidas ao Tribunal de Contas.',
    explanationWrong: {
      B: 'O Bacen não é uma sociedade anônima nem tem ações negociadas em bolsa — é uma autarquia federal de natureza especial.',
      C: 'Desde a Lei Complementar nº 179/2021, o Bacen deixou de ser vinculado a um ministério, obtendo autonomia — o contrário do afirmado.',
      D: 'A relação é inversa: o CMN fixa as diretrizes gerais e o Bacen as executa (por exemplo, a política monetária).',
    },
    examTip:
      'Grave: Lei 4.595/1964 criou o Bacen; Lei Complementar 179/2021 deu autonomia ao Bacen (desvinculação de ministério).',
    commonTrap:
      'A prova pode inverter os papéis de CMN (define) e Bacen (executa) numa mesma alternativa para parecer plausível — leia com atenção quem "fixa diretrizes" e quem "executa".',
    ...SRC('4. Entidades supervisoras — Banco Central do Brasil (Bacen)', '23'),
  },
  {
    topic: 'Entidades supervisoras',
    subtopic: 'Funções do Bacen',
    difficulty: 'medio',
    statement: 'NÃO é uma função desempenhada pelo Banco Central do Brasil, segundo o Guia Por Dentro da B3:',
    options: {
      A: 'Administrar as reservas internacionais do país.',
      B: 'Atuar como emprestador de última instância das instituições financeiras.',
      C: 'Regulamentar, desenvolver, controlar e fiscalizar o mercado de títulos e valores mobiliários.',
      D: 'Colocar moeda em circulação e gerir o meio circulante.',
    },
    correct: 'C',
    explanation:
      'Regulamentar, desenvolver, controlar e fiscalizar o mercado de títulos e valores mobiliários é atribuição da CVM, não do Bacen. O Bacen administra reservas internacionais, atua como emprestador de última instância e gerencia o meio circulante, entre outras funções.',
    explanationWrong: {
      A: 'É uma função real do Bacen: administrar as reservas internacionais do país.',
      B: 'É uma função real do Bacen: atuar como "emprestador de última instância" para mitigar risco sistêmico.',
      D: 'É uma função real do Bacen: colocação de moeda em circulação e gestão do meio circulante.',
    },
    examTip:
      'Questões de "assinale a incorreta" sobre o Bacen costumam esconder uma função da CVM no meio de funções verdadeiras do Bacen.',
    commonTrap:
      'A alternativa sobre valores mobiliários soa parecida com atribuições financeiras do Bacen, mas pertence exclusivamente à CVM.',
    ...SRC('4. Entidades supervisoras — Banco Central do Brasil (Bacen)', '23-24'),
  },
  {
    topic: 'Entidades supervisoras',
    subtopic: 'CVM',
    difficulty: 'facil',
    statement: 'A Comissão de Valores Mobiliários (CVM) foi instituída pela:',
    options: {
      A: 'Lei nº 4.595/1964.',
      B: 'Lei nº 6.385/1976.',
      C: 'Lei Complementar nº 179/2021.',
      D: 'Lei nº 9.613/1998.',
    },
    correct: 'B',
    explanation:
      'A CVM é uma autarquia em regime especial, vinculada ao Ministério da Fazenda, instituída pela Lei nº 6.385/1976 — a mesma lei que criou o mercado de capitais no Brasil.',
    explanationWrong: {
      A: 'A Lei nº 4.595/1964 criou o CMN e o Bacen, não a CVM.',
      C: 'A Lei Complementar nº 179/2021 deu autonomia ao Bacen, e não trata da criação da CVM.',
      D: 'A Lei nº 9.613/1998 criou o Coaf, no contexto de prevenção à lavagem de dinheiro — não é a lei de criação da CVM.',
    },
    examTip: 'CVM = Lei nº 6.385/1976 (a mesma lei do "Mercado de Capitais" citada para a estrutura do SFN).',
    commonTrap:
      'É comum a prova trocar o número da lei da CVM pelo da lei do CMN/Bacen (4.595/1964) — decore os dois números separadamente.',
    ...SRC('4. Entidades supervisoras — Comissão de Valores Mobiliários (CVM)', '24'),
  },
  {
    topic: 'Entidades supervisoras',
    subtopic: 'Susep x Previc',
    difficulty: 'dificil',
    statement:
      'Um investidor deseja saber qual entidade fiscaliza a operação de uma entidade fechada de previdência complementar (fundo de pensão) e qual fiscaliza uma entidade aberta de previdência complementar. Assinale a alternativa correta.',
    options: {
      A: 'Entidade fechada: Susep. Entidade aberta: Previc.',
      B: 'Entidade fechada: Previc. Entidade aberta: Susep.',
      C: 'Ambas são fiscalizadas exclusivamente pelo Bacen.',
      D: 'Entidade fechada: CVM. Entidade aberta: Susep.',
    },
    correct: 'B',
    explanation:
      'A Previc fiscaliza e supervisiona as entidades fechadas de previdência complementar (fundos de pensão). A Susep fiscaliza o mercado de seguro, previdência privada aberta e capitalização — portanto, as entidades abertas de previdência complementar.',
    explanationWrong: {
      A: 'Inverte as competências: quem fiscaliza a entidade fechada é a Previc, não a Susep, e vice-versa.',
      C: 'O Bacen não é o supervisor desse segmento — a fiscalização de previdência complementar é dividida entre Previc (fechada) e Susep (aberta).',
      D: 'A CVM não fiscaliza entidades de previdência complementar fechada; essa é atribuição da Previc.',
    },
    examTip:
      'Mnemônico: "P" de Previc com "P" de fechada (Pensão/fundos de pensão); Susep cuida do que é "aberto" ao público em geral (seguros, previdência aberta, capitalização).',
    commonTrap:
      'Susep e Previc são frequentemente trocadas entre si porque ambas tratam de "previdência" — a diferença está em aberta (Susep) x fechada (Previc).',
    ...SRC('4. Entidades supervisoras — Previc; 8. Entidades de seguros e previdência', '25, 42-44'),
  },
  {
    topic: 'Entidades supervisoras',
    subtopic: 'Coaf',
    difficulty: 'medio',
    statement: 'Sobre o Conselho de Controle de Atividades Financeiras (Coaf), é correto afirmar que:',
    options: {
      A: 'É a unidade de inteligência financeira (UIF) brasileira, criada pela Lei nº 9.613/1998.',
      B: 'É o órgão normativo responsável por fixar diretrizes da política cambial do país.',
      C: 'Fiscaliza exclusivamente o mercado de seguros privados e capitalização.',
      D: 'Foi criado pela Lei nº 6.385/1976, junto com a CVM.',
    },
    correct: 'A',
    explanation:
      'O Coaf foi criado pela Lei nº 9.613/1998 com o objetivo de identificar e analisar operações financeiras suspeitas no Brasil. Ele responde à recomendação do Gafi para a existência de uma unidade de inteligência financeira (UIF) com jurisdição nacional — portanto, o Coaf é a UIF brasileira.',
    explanationWrong: {
      B: 'A fixação de diretrizes da política cambial é atribuição do CMN, não do Coaf, cujo foco é a prevenção à lavagem de dinheiro.',
      C: 'A fiscalização do mercado de seguros e capitalização é da Susep; o Coaf trata da identificação e análise de operações financeiras suspeitas em qualquer setor.',
      D: 'O Coaf foi criado pela Lei nº 9.613/1998, e não pela Lei nº 6.385/1976 (que criou a CVM).',
    },
    examTip: 'Coaf = Lei nº 9.613/1998 = UIF brasileira = recomendação do Gafi.',
    commonTrap:
      'Cuidado ao ligar o Coaf apenas a "lavagem de dinheiro" sem saber que ele é formalmente a Unidade de Inteligência Financeira (UIF) do Brasil, exigida pelo Gafi.',
    ...SRC('4. Entidades supervisoras — Conselho de Controle de Atividades Financeiras (Coaf)', '26'),
  },

  // ---------- Operadores do sistema — instituições bancárias ----------
  {
    topic: 'Operadores do sistema — instituições bancárias',
    subtopic: 'Banco comercial x banco múltiplo',
    difficulty: 'medio',
    statement:
      'A principal característica que diferencia um banco múltiplo de um banco comercial "puro" é que o banco múltiplo:',
    options: {
      A: 'Não pode captar depósitos à vista em nenhuma hipótese.',
      B: 'Deve operar por meio de, no mínimo, duas carteiras, sendo uma delas obrigatoriamente comercial ou de investimento.',
      C: 'É constituído exclusivamente como empresa pública federal.',
      D: 'Não pode utilizar a palavra "banco" em sua denominação social.',
    },
    correct: 'B',
    explanation:
      'Segundo a Resolução CMN nº 5.060/2023, o banco múltiplo deve ser constituído com, no mínimo, duas carteiras — comercial, de investimento ou de desenvolvimento, de crédito imobiliário, de arrendamento mercantil e de crédito/financiamento/investimento —, sendo uma delas obrigatoriamente comercial ou de investimento.',
    explanationWrong: {
      A: 'O banco múltiplo pode, sim, captar depósitos à vista — essa é justamente uma característica de sua carteira comercial.',
      C: 'O banco múltiplo pode ser instituição privada ou pública; não é exclusivamente empresa pública federal (isso lembraria mais o BNDES ou a CEF).',
      D: 'Ao contrário: em sua denominação social, o banco múltiplo deve constar a palavra "banco".',
    },
    examTip:
      'Banco múltiplo = pelo menos 2 carteiras, sendo 1 obrigatoriamente comercial ou investimento. É essa a "múltipla" atuação do nome.',
    commonTrap:
      'Não confunda "banco múltiplo" (várias carteiras dentro da mesma instituição) com "banco comercial" (foco em uma carteira, captação de depósitos à vista).',
    ...SRC('5. Operadores do sistema — Bancos múltiplos', '30'),
  },
  {
    topic: 'Operadores do sistema — instituições bancárias',
    subtopic: 'Caixas econômicas',
    difficulty: 'facil',
    statement: 'A única instituição do segmento de caixas econômicas em atividade no Brasil atualmente é:',
    options: {
      A: 'O Banco do Brasil (BB).',
      B: 'A Caixa Econômica Federal (CEF).',
      C: 'O BNDES.',
      D: 'O Banco da Amazônia (Basa).',
    },
    correct: 'B',
    explanation:
      'A Caixa Econômica Federal (CEF) é, atualmente, a única instituição do segmento de caixas econômicas em atividade no Brasil. Integra o SBPE, é gestora do FGTS e de outros fundos do SFH, além de administrar o PIS e o seguro-desemprego.',
    explanationWrong: {
      A: 'O Banco do Brasil é um banco múltiplo, não uma caixa econômica.',
      C: 'O BNDES é um banco de desenvolvimento federal, categoria distinta de caixa econômica.',
      D: 'O Banco da Amazônia é um banco de desenvolvimento regional, não uma caixa econômica.',
    },
    examTip: 'Caixa econômica ≠ banco. CEF é a única representante dessa categoria hoje em atividade no país.',
    commonTrap: 'A prova pode testar se você sabe que "caixa econômica" é uma categoria distinta de "banco público".',
    ...SRC('5. Operadores do sistema — Caixas econômicas', '27-28'),
  },
  {
    topic: 'Operadores do sistema — instituições bancárias',
    subtopic: 'Cooperativas de crédito',
    difficulty: 'medio',
    statement: 'Sobre as cooperativas de crédito, é correto afirmar que:',
    options: {
      A: 'Visam prioritariamente à obtenção de lucro para distribuição entre os cooperados de maior participação no capital social.',
      B: 'São autorizadas e supervisionadas pelo Banco Central, diferentemente de outros ramos do cooperativismo.',
      C: 'Os cooperados têm poder de voto proporcional à sua cota de participação no capital social.',
      D: 'Não podem oferecer produtos como conta-corrente, cartão de crédito ou empréstimos.',
    },
    correct: 'B',
    explanation:
      'As cooperativas de crédito são autorizadas e supervisionadas pelo Banco Central, ao contrário de outros ramos do cooperativismo (como transporte, educação e agropecuária), que não estão sob essa supervisão.',
    explanationWrong: {
      A: 'O cooperativismo não visa a obtenção de lucros; os direitos e deveres dos cooperados são iguais, independentemente da cota de capital.',
      C: 'Os cooperados têm poder de voto igual entre si, independentemente de sua cota de participação no capital social — não proporcional.',
      D: 'As cooperativas de crédito oferecem produtos semelhantes aos dos bancos, como conta-corrente, aplicações financeiras, cartão de crédito, empréstimos e financiamentos.',
    },
    examTip:
      'Cooperativa de crédito: voto igualitário (1 associado = 1 voto) + sem fins lucrativos + supervisionada pelo Bacen (diferente de outros ramos do cooperativismo).',
    commonTrap:
      'A prova costuma testar o "poder de voto igual" das cooperativas — não confunda com sociedades anônimas, em que o poder de voto é proporcional à participação acionária.',
    ...SRC('5. Operadores do sistema — Cooperativas de crédito', '28-29'),
  },
  {
    topic: 'Operadores do sistema — instituições bancárias',
    subtopic: 'BNDES',
    difficulty: 'medio',
    statement: 'O BNDES é, segundo o Guia Por Dentro da B3:',
    options: {
      A: 'Uma autarquia federal vinculada ao Ministério da Fazenda.',
      B: 'Uma empresa pública federal, com personalidade jurídica de direito privado, vinculada ao Ministério do Desenvolvimento, Indústria, Comércio e Serviços.',
      C: 'Um banco múltiplo privado com carteira de investimento.',
      D: 'Uma sociedade de crédito, financiamento e investimento (financeira).',
    },
    correct: 'B',
    explanation:
      'O BNDES é uma empresa pública federal, com personalidade jurídica de direito privado e patrimônio próprio, vinculada ao Ministério do Desenvolvimento, Indústria, Comércio e Serviços, com o objetivo de apoiar empreendimentos que contribuam para o desenvolvimento do país.',
    explanationWrong: {
      A: 'O BNDES não é uma autarquia — tem personalidade jurídica de direito privado, apesar de ser uma empresa pública federal.',
      C: 'O BNDES não é um banco múltiplo privado; é uma empresa pública federal com finalidade específica de fomento ao desenvolvimento.',
      D: 'O BNDES não se enquadra como "financeira" (SCFI); é uma instituição de fomento com regime jurídico próprio.',
    },
    examTip:
      'BNDES: empresa pública federal, personalidade jurídica de DIREITO PRIVADO — pegadinha clássica é chamá-lo de autarquia.',
    commonTrap:
      'A prova gosta de testar "personalidade jurídica de direito privado" do BNDES versus a natureza de autarquia do Bacen/CVM/Susep/Previc.',
    ...SRC('5. Operadores do sistema — BNDES', '31'),
  },

  // ---------- Demais instituições não bancárias ----------
  {
    topic: 'Demais instituições não bancárias',
    subtopic: 'CTVM e DTVM',
    difficulty: 'medio',
    statement:
      'Atualmente, no que diz respeito à atuação de corretoras (CTVM) e distribuidoras (DTVM) de títulos e valores mobiliários no Brasil, é correto afirmar que:',
    options: {
      A: 'CTVMs e DTVMs têm atuações totalmente distintas e não podem exercer as mesmas atividades.',
      B: 'O Bacen e a CVM concedem a ambas autorização para atuar amplamente em todos os mercados, mantendo apenas a distinção histórica de nome.',
      C: 'Somente as CTVMs podem prestar serviços de custódia; as DTVMs são proibidas de fazê-lo.',
      D: 'Somente as DTVMs podem operar em bolsas de mercadorias e futuros por conta própria.',
    },
    correct: 'B',
    explanation:
      'Inicialmente CTVMs e DTVMs tinham atuações diferentes, mas atualmente o Bacen e a CVM concedem a ambas autorização para atuar amplamente em todos os mercados, mantendo apenas a nomenclatura original das instituições.',
    explanationWrong: {
      A: 'É o oposto do que ocorre hoje: as atuações se equipararam, apesar de os nomes distintos permanecerem por razões históricas.',
      C: 'A prestação de serviços de custódia está entre as atividades que tanto CTVMs quanto DTVMs podem exercer.',
      D: 'A operação em bolsas de mercadorias e futuros por conta própria e de terceiros é uma atividade que ambos os tipos de instituição podem exercer.',
    },
    examTip:
      'Hoje, na prática, CTVM e DTVM fazem quase a mesma coisa — a diferença é só histórica/de nome. Cuidado com alternativas que criam diferenças funcionais que não existem mais.',
    commonTrap:
      'A prova explora o nome diferente ("corretora" x "distribuidora") para sugerir que as atividades também são diferentes — mas o Guia afirma que a atuação é equiparada.',
    ...SRC('6. Demais instituições não bancárias — CTVM e DTVM', '34-35'),
  },
  {
    topic: 'Demais instituições não bancárias',
    subtopic: 'Fintechs de crédito',
    difficulty: 'dificil',
    statement:
      'Uma fintech realiza operações de empréstimo entre pessoas físicas exclusivamente por meio de plataforma eletrônica, sem originar os recursos com capital próprio. Essa fintech é classificada como:',
    options: {
      A: 'Sociedade de crédito direto (SCD).',
      B: 'Sociedade de empréstimo entre pessoas (SEP).',
      C: 'Instituição de pagamento (IP).',
      D: 'Sociedade de crédito, financiamento e investimento (SCFI).',
    },
    correct: 'B',
    explanation:
      'A SEP tem como objeto a realização de operações de empréstimo e financiamento entre pessoas (peer-to-peer), exclusivamente por meio de plataforma eletrônica. Já a SCD realiza operações de empréstimo, financiamento e aquisição de direitos creditórios com recursos financeiros que têm como única origem capital próprio.',
    explanationWrong: {
      A: 'A SCD usa exclusivamente capital próprio como origem dos recursos emprestados — o cenário descreve empréstimo entre pessoas, característica da SEP, não da SCD.',
      C: 'A instituição de pagamento executa serviços de pagamento (pagadores/recebedores), não operações de empréstimo entre pessoas.',
      D: 'A SCFI ("financeira" tradicional) não é uma fintech de crédito regulada nesse formato de plataforma eletrônica peer-to-peer.',
    },
    examTip:
      'SCD = empresta com capital PRÓPRIO. SEP = conecta pessoa a pessoa (peer-to-peer), sem originar o crédito com capital próprio da fintech.',
    commonTrap:
      'SCD e SEP são frequentemente confundidas por ambas serem "fintechs de crédito" via plataforma eletrônica — a diferença está na origem dos recursos emprestados.',
    ...SRC('6. Demais instituições não bancárias — Fintech', '36-37'),
  },
  {
    topic: 'Demais instituições não bancárias',
    subtopic: 'Sociedade corretora de câmbio',
    difficulty: 'medio',
    statement: 'A sociedade corretora de câmbio tem como objeto social exclusivo:',
    options: {
      A: 'A administração de carteiras de valores mobiliários e fundos de investimento.',
      B: 'A intermediação em operações de câmbio e a prática de operações no mercado de câmbio de taxas flutuantes.',
      C: 'A concessão de financiamentos habitacionais de longo prazo.',
      D: 'A realização de operações de seguro e resseguro.',
    },
    correct: 'B',
    explanation:
      'A sociedade corretora de câmbio tem como objetos sociais exclusivos a intermediação em operações de câmbio e a prática de operações no mercado de câmbio de taxas flutuantes, com limite de operações de até US$ 300.000 (ou equivalente em outra moeda).',
    explanationWrong: {
      A: 'Administração de carteiras e fundos é atividade típica de CTVMs/DTVMs, não da corretora de câmbio, cujo objeto é exclusivo para câmbio.',
      C: 'Financiamento habitacional é atividade de companhias hipotecárias e sociedades de crédito imobiliário, não da corretora de câmbio.',
      D: 'Operações de seguro e resseguro são atividades de seguradoras e resseguradoras, reguladas pela Susep — sem relação com a corretora de câmbio.',
    },
    examTip: 'Corretora de câmbio: objeto social EXCLUSIVO de câmbio, com teto de US$ 300.000 por operação.',
    commonTrap:
      'A palavra "exclusivo" no enunciado do Guia é proposital — a prova pode oferecer alternativas com atividades adicionais plausíveis, mas que extrapolam o objeto exclusivo da corretora de câmbio.',
    ...SRC('6. Demais instituições não bancárias — Sociedade corretora de câmbio', '35'),
  },

  // ---------- Instituições auxiliares ----------
  {
    topic: 'Instituições auxiliares',
    subtopic: 'Papéis da B3',
    difficulty: 'medio',
    statement: 'A B3, dentro da infraestrutura do mercado financeiro, atua simultaneamente como:',
    options: {
      A: 'Apenas bolsa de valores, mercadorias e futuros.',
      B: 'Bolsa de valores, mercadorias e futuros; entidade registradora de ativos financeiros; câmara de compensação e liquidação; e central depositária.',
      C: 'Exclusivamente câmara de compensação e liquidação e central depositária.',
      D: 'Órgão normativo do Sistema Financeiro Nacional, substituindo o CMN nas suas competências.',
    },
    correct: 'B',
    explanation:
      'O Guia destaca explicitamente que a B3 atua como: (1) bolsa de valores, mercadorias e futuros; (2) entidade registradora de ativos financeiros; (3) câmara de compensação e liquidação; e (4) central depositária — reunindo, em uma única estrutura verticalizada, funções que em outros mercados podem estar espalhadas por instituições distintas.',
    explanationWrong: {
      A: 'Restringe a atuação da B3 a apenas uma de suas quatro funções, ignorando o registro, a compensação/liquidação e a depositária central.',
      C: 'Omite o papel de bolsa e de entidade registradora, que também são exercidos pela B3.',
      D: 'A B3 é uma instituição auxiliar/operadora do sistema, não um órgão normativo — ela não substitui o CMN.',
    },
    examTip:
      'A B3 acumula 4 papéis: bolsa + registradora + câmara de compensação/liquidação + central depositária. Essa lista "fecha questão" é cobrada literalmente na prova.',
    commonTrap:
      'Questões podem tentar reduzir a B3 a "só bolsa de valores" — mas o modelo de negócio verticalizado da B3 vai muito além disso.',
    ...SRC('7. Instituições auxiliares', '39'),
  },
  {
    topic: 'Instituições auxiliares',
    subtopic: 'Contraparte central',
    difficulty: 'dificil',
    statement:
      'Uma câmara de compensação e liquidação garante a conclusão de uma operação mesmo que uma das partes originais não cumpra com sua obrigação. Esse papel, descrito no Guia Por Dentro da B3, caracteriza a câmara atuando como:',
    options: {
      A: 'Entidade registradora de ativos financeiros.',
      B: 'Contraparte central.',
      C: 'Central depositária.',
      D: 'Corretora de valores mobiliários.',
    },
    correct: 'B',
    explanation:
      'Ao se interpor entre todas as contrapartes e liquidar as operações pelo saldo multilateral, garantindo a liquidação mesmo que uma parte não cumpra sua obrigação, a câmara está atuando como contraparte central — para isso, deve manter mecanismos e salvaguardas adequados e suficientes.',
    explanationWrong: {
      A: 'A entidade registradora armazena informações sobre ativos e transações, mas não assume o risco de inadimplência de uma das partes.',
      C: 'A central depositária cuida da guarda centralizada e do controle de titularidade dos valores mobiliários, função distinta de garantir a liquidação em caso de inadimplência.',
      D: 'A corretora intermedia a execução de ordens de compra e venda para seus clientes; não é ela quem garante a liquidação da operação como contraparte central.',
    },
    examTip:
      'Contraparte central (CCP) = garante a liquidação mesmo com inadimplência de uma das partes, por meio de salvaguardas. É o conceito mais cobrado sobre câmaras de compensação.',
    commonTrap:
      'Não confunda "central depositária" (guarda e titularidade dos ativos) com "contraparte central" (garantia da liquidação frente a inadimplência) — são papéis diferentes que a B3 também acumula.',
    ...SRC('7. Instituições auxiliares — Câmaras de compensação e liquidação', '38'),
  },
  {
    topic: 'Instituições auxiliares',
    subtopic: 'FGC',
    difficulty: 'medio',
    statement: 'O valor máximo de garantia ordinária proporcionada pelo FGC contra a mesma instituição associada é:',
    options: {
      A: 'R$ 70.000,00.',
      B: 'R$ 250.000,00.',
      C: 'R$ 1.000.000,00.',
      D: 'R$ 400.000.000,00.',
    },
    correct: 'B',
    explanation:
      'O valor máximo de garantia ordinária proporcionada pelo FGC é de R$ 250.000,00 contra a mesma instituição associada, ou contra todas as instituições associadas do mesmo conglomerado financeiro. Desde 2017, vigora ainda um teto de R$ 1 milhão para a garantia paga a um mesmo titular no período de 4 anos.',
    explanationWrong: {
      A: 'R$ 70.000,00 foi um valor histórico da garantia (dezembro de 2010), já superado pelas atualizações posteriores.',
      C: 'R$ 1.000.000,00 é o teto da garantia paga a um mesmo titular no período de 4 anos, não o valor de garantia ordinária contra uma única instituição.',
      D: 'R$ 400 milhões é o limite diferenciado do DPGE (Depósito a Prazo com Garantia Especial) para operações cujo titular seja instituição associada, não o valor padrão de garantia ao investidor comum.',
    },
    examTip:
      'Decore o valor atual: R$ 250.000,00 por instituição/conglomerado, com teto adicional de R$ 1 milhão por titular em 4 anos.',
    commonTrap:
      'O Guia cita uma linha do tempo com vários valores históricos (R$ 20 mil, R$ 60 mil, R$ 70 mil, R$ 250 mil) — a prova pode usar um valor antigo como distrator.',
    ...SRC('7. Instituições auxiliares — Fundo Garantidor de Créditos (FGC)', '40-41'),
  },
  {
    topic: 'Instituições auxiliares',
    subtopic: 'Créditos cobertos pelo FGC',
    difficulty: 'dificil',
    statement: 'Está CORRETO afirmar que o FGC garante, entre outros, os seguintes créditos:',
    options: {
      A: 'Depósitos judiciais e recursos captados no exterior.',
      B: 'Depósitos de poupança e Certificado de Depósito Bancário (CDB).',
      C: 'Cotas de fundos de investimento e Letra Imobiliária (LI).',
      D: 'Créditos de titularidade de instituições financeiras e de entidades de previdência complementar.',
    },
    correct: 'B',
    explanation:
      'Entre os créditos garantidos pelo FGC estão os depósitos de poupança e o CDB (Certificado de Depósito Bancário), além de depósitos à vista, letras de câmbio, LH, LCI, LCA e outros instrumentos listados no Guia.',
    explanationWrong: {
      A: 'Depósitos judiciais e recursos captados no exterior estão expressamente excluídos da garantia ordinária do FGC.',
      C: 'Cotas de fundos de investimento e a Letra Imobiliária (LI) também estão entre os créditos não cobertos pela garantia ordinária.',
      D: 'Créditos de titularidade de instituições financeiras e de entidades de previdência complementar estão explicitamente excluídos da cobertura do FGC.',
    },
    examTip:
      'Regra prática: o FGC cobre produtos de captação bancária tradicional voltados à pessoa física/jurídica comum (poupança, CDB, LC, LH, LCI, LCA). Fundos de investimento, LI e créditos entre instituições ficam de fora.',
    commonTrap:
      'A prova mistura, na mesma alternativa, um item coberto e um não coberto para testar se você sabe distinguir precisamente a lista de exclusões do Guia.',
    ...SRC('7. Instituições auxiliares — FGC (créditos garantidos e não cobertos)', '40, 42'),
  },

  // ---------- Entidades de seguros e previdência ----------
  {
    topic: 'Entidades de seguros e previdência',
    subtopic: 'EAPC x EFPC',
    difficulty: 'dificil',
    statement:
      'Uma empresa deseja instituir, para seus próprios empregados, um plano de benefícios previdenciários, atuando sob a forma de fundação de direito privado sem fins lucrativos. Essa entidade é classificada como:',
    options: {
      A: 'Entidade aberta de previdência complementar (EAPC).',
      B: 'Entidade fechada de previdência complementar (EFPC).',
      C: 'Empresa de capitalização.',
      D: 'Corretora de seguros.',
    },
    correct: 'B',
    explanation:
      'As EFPCs (fundos de pensão) atuam sob a forma de fundações de direito privado ou de sociedade civil, sem fins lucrativos, administrando planos de benefícios previdenciários criados por empresas patrocinadoras para seus empregados ou por instituidores para seus associados.',
    explanationWrong: {
      A: 'A EAPC é constituída sob a forma de sociedade anônima e é acessível a quaisquer pessoas físicas, não restrita a empregados de uma única empresa patrocinadora.',
      C: 'Empresas de capitalização vendem títulos de capitalização (produto de poupança com sorteios), sem relação com planos de previdência para empregados.',
      D: 'Corretoras de seguros intermediam a venda de produtos de seguradoras; não administram planos de previdência fechada.',
    },
    examTip:
      'EFPC = "fechada" para os empregados/associados de UM patrocinador/instituidor específico, sem fins lucrativos. EAPC = "aberta" a qualquer pessoa física, sociedade anônima, com fins lucrativos.',
    commonTrap:
      'O termo "fechada" não significa que a entidade está inativa — significa que o acesso ao plano é restrito a um grupo vinculado a um patrocinador ou instituidor específico.',
    ...SRC('8. Entidades de seguros e previdência — EAPCs e EFPCs', '43-44'),
  },
  {
    topic: 'Entidades de seguros e previdência',
    subtopic: 'Empresas de capitalização',
    difficulty: 'medio',
    statement: 'As empresas de capitalização, autorizadas pela Susep, têm como característica principal:',
    options: {
      A: 'Vender títulos em que parte dos pagamentos forma um capital a ser resgatado, e outra parte custeia sorteios e despesas administrativas.',
      B: 'Administrar exclusivamente planos de previdência complementar fechada para grandes empresas.',
      C: 'Assumir riscos e indenizar clientes por prejuízos cobertos em apólice.',
      D: 'Intermediar a venda de produtos entre segurado e seguradora.',
    },
    correct: 'A',
    explanation:
      'As empresas de capitalização vendem títulos de capitalização: parte dos pagamentos do subscritor forma um capital, devolvido segundo as condições gerais do título, e o restante custeia sorteios (frequentes nesse tipo de produto) e despesas administrativas da sociedade.',
    explanationWrong: {
      B: 'A administração de planos de previdência fechada é atribuição das EFPCs, não das empresas de capitalização.',
      C: 'Assumir riscos e indenizar por prejuízos é a atividade das entidades seguradoras, não das empresas de capitalização.',
      D: 'Intermediar a venda entre segurado e seguradora é o papel das corretoras de seguros, distinto da capitalização.',
    },
    examTip:
      'Título de capitalização = "poupança com sorteio", sem cobertura de risco — não confundir com seguro, que indeniza um risco coberto.',
    commonTrap:
      'É comum a prova tentar fazer parecer que capitalização é um tipo de seguro — mas capitalização não indeniza riscos, apenas forma capital e sorteia prêmios.',
    ...SRC('8. Entidades de seguros e previdência — Empresas de capitalização', '43'),
  },
  {
    topic: 'Entidades de seguros e previdência',
    subtopic: 'Resseguro',
    difficulty: 'medio',
    statement: 'A operação de resseguro pode ser definida como:',
    options: {
      A: 'A venda direta de apólices de seguro ao consumidor final pela seguradora.',
      B: 'A transferência de riscos de uma seguradora (cedente) para um ou mais resseguradores, com vistas à sua própria proteção.',
      C: 'A administração de planos de previdência complementar aberta.',
      D: 'A intermediação entre segurado e seguradora feita por corretoras.',
    },
    correct: 'B',
    explanation:
      'Resseguro é a operação de transferência de riscos de uma cedente (seguradora), com vistas à sua própria proteção, para um ou mais resseguradores, por meio de contratos automáticos ou facultativos. As entidades resseguradoras têm por objeto exclusivo a realização de operações de resseguro e retrocessão.',
    explanationWrong: {
      A: 'Venda direta de apólices é atividade da seguradora perante o segurado, não a relação seguradora-ressegurador.',
      C: 'Administração de previdência aberta é atividade das EAPCs, sem relação com o conceito de resseguro.',
      D: 'A intermediação entre segurado e seguradora é papel da corretora de seguros, não do ressegurador (que atua entre a seguradora e o mercado de resseguro).',
    },
    examTip:
      'Resseguro é o "seguro do seguro": protege a própria seguradora, não o cliente final diretamente.',
    commonTrap:
      'Não confunda a cadeia: segurado → seguradora (seguro); seguradora → resseguradora (resseguro). São relações em camadas diferentes.',
    ...SRC('8. Entidades de seguros e previdência — Entidades resseguradoras', '43'),
  },

  // ---------- Pegadinha consolidada CMN x Bacen x CVM ----------
  {
    topic: 'Órgãos normativos',
    subtopic: 'CMN x Bacen x CVM (revisão comparativa)',
    difficulty: 'prova',
    statement:
      'Assinale a alternativa que associa corretamente cada órgão à sua principal natureza de atuação no SFN.',
    options: {
      A: 'CMN normatiza; Bacen executa e supervisiona instituições financeiras; CVM regula o mercado de valores mobiliários.',
      B: 'CMN executa; Bacen normatiza; CVM fiscaliza seguros privados.',
      C: 'CVM normatiza políticas monetária e cambial; Bacen fiscaliza valores mobiliários; CMN supervisiona bancos.',
      D: 'Bacen normatiza políticas monetária, creditícia e cambial; CMN executa essas políticas; CVM fiscaliza previdência complementar.',
    },
    correct: 'A',
    explanation:
      'A lógica hierárquica do SFN é: o CMN normatiza (fixa diretrizes de política monetária, creditícia e cambial); o Bacen executa essas diretrizes e supervisiona as instituições financeiras; a CVM regula, desenvolve, controla e fiscaliza o mercado de títulos e valores mobiliários. É a síntese mais cobrada em prova sobre os três órgãos centrais do SFN.',
    explanationWrong: {
      B: 'Inverte os papéis de CMN e Bacen (o CMN normatiza, não executa; o Bacen executa, não normatiza) e atribui à CVM uma função (seguros) que é da Susep.',
      C: 'Troca completamente as atribuições: quem normatiza política monetária/cambial é o CMN, não a CVM; quem fiscaliza valores mobiliários é a CVM, não o Bacen.',
      D: 'Inverte CMN e Bacen novamente, e atribui à CVM a fiscalização de previdência complementar, que pertence à Previc (fechada) e à Susep (aberta).',
    },
    examTip:
      'Mnemônico da apresentação: CMN → define diretrizes. Bacen → executa/supervisiona instituições financeiras. CVM → mercado de valores mobiliários.',
    commonTrap:
      'Esta é a pegadinha mais clássica do capítulo: embaralhar quem "normatiza" e quem "executa" entre CMN e Bacen, e atribuir a um órgão uma função de outro (seguros, previdência).',
    ...SRC('3. Órgãos normativos; 4. Entidades supervisoras (síntese)', '22-26'),
  },
];
