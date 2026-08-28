// Título II - Mercados de Bolsa e de Balcão
// Capítulo I - Mercado de renda variável
// Fonte: Guia Por Dentro da B3, páginas 105-168.

export const chapterRef = { titleNumber: 'II', chapterNumber: 'I' };

export const topics = [
  'Ações e eventos corporativos',
  'Segmentos especiais de listagem',
  'Oferta pública inicial (IPO)',
  'Oferta pública de aquisição (OPA)',
  'Índices de ações',
  'ADR e BDR',
  'Empréstimo de ativos',
  'Formador de mercado',
];

const SRC = (section, page) => ({
  source_title: 'Guia Por Dentro da B3',
  source_chapter: 'Título II, Capítulo I — Mercado de renda variável',
  source_section: section,
  source_page: page,
});

export const questions = [
  // ---------- Ações e eventos corporativos ----------
  {
    topic: 'Ações e eventos corporativos',
    subtopic: 'ON x PN',
    difficulty: 'facil',
    statement: 'A diferença essencial entre uma ação ordinária (ON) e uma ação preferencial (PN) é que a ação ordinária:',
    options: {
      A: 'Confere direito a voto em assembleias gerais, enquanto a preferencial, em regra, não confere.',
      B: 'Sempre garante dividendos maiores que a ação preferencial.',
      C: 'Não pode ser negociada em bolsa de valores.',
      D: 'É emitida exclusivamente por companhias de capital fechado.',
    },
    correct: 'A',
    explanation:
      'As ações ordinárias, além de dar participação nos resultados, conferem direito a voto em assembleias gerais. As preferenciais garantem prioridade no recebimento de dividendos (geralmente em percentual maior) e no reembolso de capital, mas, em geral, não conferem direito a voto.',
    explanationWrong: {
      B: 'A prioridade das PN é no recebimento (não necessariamente no valor) dos dividendos — a lei não garante que sejam sempre maiores em todos os casos, apenas que têm prioridade e, tipicamente, algo em torno de 10% a mais.',
      C: 'Ações ordinárias são normalmente negociadas em bolsa — não há essa restrição.',
      D: 'Ações só podem ser negociadas publicamente se emitidas por companhias abertas (registradas na CVM), independentemente de serem ON ou PN.',
    },
    examTip:
      'ON = Ordinária = "vOto". PN = Preferencial = prioridade em dividendos/reembolso, geralmente sem voto.',
    commonTrap:
      'Se a PN não distribuir dividendos por até 3 exercícios consecutivos seguidos (prazo do estatuto), ela adquire automaticamente direito a voto — pegadinha clássica sobre PN "nunca ter voto".',
    ...SRC('2. Mercado de ações — Ações ordinárias e preferenciais', '106-107'),
  },
  {
    topic: 'Ações e eventos corporativos',
    subtopic: 'Negociação simultânea em bolsa e balcão',
    difficulty: 'medio',
    statement: 'Segundo a Resolução CVM nº 135/2022, uma ação negociada em mercado de bolsa:',
    options: {
      A: 'Pode também ser negociada simultaneamente em mercado de balcão organizado.',
      B: 'Não pode ser negociada em mercado de balcão organizado, e vice-versa.',
      C: 'Deve obrigatoriamente também ser negociada no exterior.',
      D: 'Perde automaticamente o registro de companhia aberta.',
    },
    correct: 'B',
    explanation:
      'As ações podem ser negociadas tanto em mercado de bolsa quanto em mercado organizado de balcão, mas não em ambos simultaneamente — uma ação negociada em bolsa não pode ser negociada em balcão organizado ao mesmo tempo, e vice-versa.',
    explanationWrong: {
      A: 'É exatamente o oposto do que estabelece a norma — a negociação é exclusiva a um dos dois ambientes por vez.',
      C: 'Não há essa obrigatoriedade de negociação simultânea no exterior mencionada no Guia para ações negociadas no Brasil.',
      D: 'A escolha do ambiente de negociação (bolsa ou balcão) não afeta o registro de companhia aberta perante a CVM.',
    },
    examTip:
      'Regra seca e literal, ótima para "verdadeiro ou falso": bolsa OU balcão organizado, nunca os dois ao mesmo tempo para a mesma ação.',
    commonTrap:
      'A prova pode tentar te fazer achar que é uma questão de preferência do investidor — mas é uma regra estrutural do mercado, não uma escolha caso a caso do comprador.',
    ...SRC('2. Mercado de ações — Ações ordinárias e preferenciais', '107'),
  },
  {
    topic: 'Ações e eventos corporativos',
    subtopic: 'Desdobramento x grupamento',
    difficulty: 'medio',
    statement:
      'Uma empresa decide reunir cada 10 ações existentes em 1 nova ação, elevando o preço unitário do papel para facilitar sua negociação em bolsa. Essa operação é chamada de:',
    options: {
      A: 'Desdobramento (split).',
      B: 'Bonificação em ações.',
      C: 'Grupamento (inplit).',
      D: 'Direito de subscrição.',
    },
    correct: 'C',
    explanation:
      'O grupamento (inplit) é a operação contrária ao desdobramento: consiste em reunir várias ações em uma só, ocorrendo quando a companhia decide elevar o preço da ação para facilitar sua negociação. Assim como o desdobramento, não altera o valor total do investimento do acionista.',
    explanationWrong: {
      A: 'O desdobramento (split) é o oposto: divide as ações existentes para aumentar a quantidade em circulação e reduzir o preço unitário, facilitando a negociação de papéis "caros".',
      B: 'A bonificação em ações é uma distribuição gratuita de novas ações por incorporação de reservas/lucros — não envolve reunir ações existentes em uma nova.',
      D: 'O direito de subscrição é a prerrogativa de adquirir novas ações emitidas em aumento de capital, mediante pagamento — sem relação com reunir ações existentes.',
    },
    examTip:
      'Desdobramento = MAIS ações, preço MENOR (split). Grupamento = MENOS ações, preço MAIOR (inplit). Em ambos, o valor total do investimento não muda.',
    commonTrap:
      'Desdobramento e grupamento são opostos e fáceis de trocar na prova — associe "grupamento" a "agrupar/juntar" (reduz quantidade, sobe preço).',
    ...SRC('2. Mercado de ações — Eventos corporativos', '109'),
  },
  {
    topic: 'Ações e eventos corporativos',
    subtopic: 'Eventos financeiros x não financeiros',
    difficulty: 'dificil',
    statement:
      'Bonificações, desdobramentos e grupamentos são classificados, no Guia Por Dentro da B3, como eventos corporativos:',
    options: {
      A: 'Financeiros e voluntários.',
      B: 'Não financeiros e involuntários.',
      C: 'Financeiros e involuntários.',
      D: 'Não financeiros e voluntários.',
    },
    correct: 'B',
    explanation:
      'Eventos corporativos não financeiros, como bonificações, desdobramentos e grupamentos, alteram a quantidade de ações detidas pelos investidores em proporção definida pela empresa, independentemente de qualquer ato do investidor — por isso são classificados como involuntários. Já dividendos e juros sobre capital próprio são eventos financeiros; o direito de subscrição é um evento voluntário.',
    explanationWrong: {
      A: 'Bonificação, desdobramento e grupamento não geram pagamento financeiro direto ao investidor (não financeiros) e não dependem de decisão do investidor (involuntários) — o oposto do afirmado.',
      C: 'Não são eventos financeiros — não há repasse de valor em dinheiro ao acionista nessas operações, apenas alteração na quantidade/proporção de ações.',
      D: 'Não são voluntários — o investidor não escolhe se participa ou não; a alteração ocorre automaticamente para todos os acionistas na proporção definida.',
    },
    examTip:
      'Financeiro x não financeiro = "cai dinheiro no bolso" (dividendos, JCP) x "muda a quantidade de ações" (bonificação, desdobramento, grupamento). Voluntário = só a subscrição, que o investidor pode optar por exercer ou não.',
    commonTrap:
      'O direito de subscrição é o único evento claramente voluntário do capítulo — todos os demais (financeiros ou não) ocorrem automaticamente para o investidor, sem necessidade de ação de sua parte.',
    ...SRC('2. Mercado de ações — Eventos corporativos', '108'),
  },

  // ---------- Segmentos especiais de listagem ----------
  {
    topic: 'Segmentos especiais de listagem',
    subtopic: 'Novo Mercado',
    difficulty: 'medio',
    statement: 'O segmento Novo Mercado, o de maior padrão de governança corporativa da B3, exige que:',
    options: {
      A: 'O capital social seja composto apenas por ações ordinárias, com tag along de 100% em caso de alienação de controle.',
      B: 'A empresa emita exclusivamente ações preferenciais, sem direito a voto.',
      C: 'O free float mínimo seja de 50% do capital social.',
      D: 'Não haja qualquer exigência de percentual mínimo de ações em circulação.',
    },
    correct: 'A',
    explanation:
      'No Novo Mercado, o capital social é composto apenas por ações ordinárias (voto pleno) e, em caso de alienação de controle, todos os acionistas têm direito a vender suas ações pelo mesmo preço pago ao controlador (tag along de 100%). O free float mínimo é de 20% (ou 15% com volume médio diário acima de R$ 20 milhões).',
    explanationWrong: {
      B: 'É o oposto: o Novo Mercado exige capital 100% ordinário (com voto), não permite ações preferenciais.',
      C: 'O free float mínimo no Novo Mercado é de 20% (ou 15% com a regra alternativa de liquidez), não 50%.',
      D: 'Há sim exigência de free float mínimo (20% ou 15% com a regra alternativa) — não é dispensada no Novo Mercado.',
    },
    examTip:
      'Novo Mercado = 100% ações ON + tag along 100% + free float 20% (ou 15% com liquidez > R$20mi/dia). É o "padrão-ouro" de governança da B3.',
    commonTrap:
      'Não confunda o tag along de 100% do Novo Mercado com o de 80% do Nível 1 (reservado só às ON) — o percentual e o segmento são frequentemente trocados na prova.',
    ...SRC('5. Segmentos especiais de listagem — Segmento Novo Mercado', '112'),
  },
  {
    topic: 'Segmentos especiais de listagem',
    subtopic: 'Nível 1 x Nível 2',
    difficulty: 'dificil',
    statement: 'Sobre a diferença entre os segmentos Nível 1 e Nível 2 de listagem da B3, é correto afirmar que:',
    options: {
      A: 'Ambos admitem apenas ações ordinárias, sem qualquer exceção.',
      B: 'O Nível 2 admite ações preferenciais, com tag along de 100% também estendido aos detentores de PN em caso de venda de controle; o Nível 1 foca em maior transparência, sem essa exigência de tag along equivalente.',
      C: 'O Nível 1 tem exigências de governança mais rígidas que o Novo Mercado.',
      D: 'O free float mínimo do Nível 2 é de 50%.',
    },
    correct: 'B',
    explanation:
      'O Nível 2 é similar ao Novo Mercado, mas permite ações preferenciais (PN); em caso de venda de controle, tanto ON quanto PN têm direito ao mesmo tratamento do controlador (tag along de 100%). Já o Nível 1 foca em maior transparência (divulgação de informações adicionais, calendário de eventos corporativos) e aplica tag along de 80% reservado apenas às ON.',
    explanationWrong: {
      A: 'O Nível 1 e o Nível 2 admitem ações preferenciais — apenas o Novo Mercado exige capital 100% ordinário.',
      C: 'O Novo Mercado é o segmento de MAIOR exigência de governança da B3 — mais rígido que o Nível 1.',
      D: 'O free float mínimo do Nível 2 é de 20% (ou 15% com a regra alternativa de liquidez), igual ao do Novo Mercado — não 50%.',
    },
    examTip:
      'Nível 1 = mais transparência, tag along 80% só para ON. Nível 2 = quase igual ao Novo Mercado, mas permite PN, com tag along de 100% para ON e PN.',
    commonTrap:
      'A prova adora testar os percentuais de tag along (80% no Nível 1, 100% no Nível 2 e no Novo Mercado) — decore qual segmento tem qual percentual e para quais classes de ação.',
    ...SRC('5. Segmentos especiais de listagem — Segmento Nível 1; Segmento Nível 2', '112-113'),
  },
  {
    topic: 'Segmentos especiais de listagem',
    subtopic: 'Bovespa Mais',
    difficulty: 'medio',
    statement: 'Uma característica distintiva do segmento Bovespa Mais é que ele:',
    options: {
      A: 'Exige que a empresa realize a oferta pública de ações (IPO) simultaneamente à sua listagem.',
      B: 'Permite que a empresa seja listada sem oferta, com até sete anos para realizar o IPO.',
      C: 'É voltado exclusivamente para empresas estatais.',
      D: 'Não permite a emissão de ações preferenciais em nenhuma hipótese.',
    },
    correct: 'B',
    explanation:
      'O Bovespa Mais permite a listagem sem oferta: a empresa pode ser listada na B3 e tem até sete anos para realizar seu IPO, o que é ideal para empresas que desejam acessar o mercado de capitais aos poucos, trabalhando na profissionalização do negócio antes da oferta pública propriamente dita.',
    explanationWrong: {
      A: 'É o oposto: a principal característica do Bovespa Mais é justamente permitir a listagem SEM oferta simultânea, desvinculando os dois eventos.',
      C: 'Não há essa restrição a empresas estatais — o Bovespa Mais é voltado a empresas em geral que buscam acessar o mercado de forma gradual.',
      D: 'O Bovespa Mais Nível 2 (variação criada em 2014) permite justamente a emissão de ações preferenciais — não há proibição absoluta no segmento.',
    },
    examTip:
      'Bovespa Mais = "listar primeiro, ofertar depois" (até 7 anos de prazo) — ideal para empresas em fase de preparação/profissionalização.',
    commonTrap:
      'Não confunda "listagem" (entrar na lista de negociação da B3) com "oferta pública/IPO" (venda de ações ao mercado) — o Bovespa Mais permite separar esses dois eventos no tempo.',
    ...SRC('5. Segmentos especiais de listagem — Bovespa Mais', '113'),
  },

  // ---------- IPO ----------
  {
    topic: 'Oferta pública inicial (IPO)',
    subtopic: 'Distribuição primária x secundária',
    difficulty: 'facil',
    statement: 'Em uma distribuição primária de ações, os recursos captados na oferta são destinados:',
    options: {
      A: 'Ao caixa da própria empresa emissora, para investimentos e outras necessidades.',
      B: 'Exclusivamente ao acionista controlador que decidiu vender parte de sua posição.',
      C: 'À CVM, como taxa de registro da oferta.',
      D: 'Ao agente estabilizador, como remuneração pelo serviço prestado.',
    },
    correct: 'A',
    explanation:
      'Na distribuição primária, as ações ofertadas são novas ações emitidas, ocorrendo um aumento real do capital social da empresa. O vendedor é a própria empresa, e os recursos são canalizados para seu caixa, destinados a investimentos, financiamento de projetos ou outras necessidades.',
    explanationWrong: {
      B: 'Recursos destinados a um acionista vendedor caracterizam a distribuição SECUNDÁRIA, não a primária — nesse caso não há aumento de capital social.',
      C: 'A CVM não recebe os recursos da oferta como uma espécie de "taxa" sobre o valor captado — os recursos vão para a empresa (primária) ou para o vendedor (secundária).',
      D: 'O agente estabilizador é remunerado por seus serviços, mas não é o destinatário dos recursos da oferta-base.',
    },
    examTip:
      'Primária = dinheiro NOVO entra na empresa (aumenta capital social). Secundária = dinheiro vai para um acionista vendedor (sem alterar o capital social).',
    commonTrap:
      'A prova pode descrever um cenário (ex.: "sócio vende parte de sua participação") e pedir para identificar se é primária ou secundária — releia sempre "quem recebe o dinheiro".',
    ...SRC('6. Oferta pública inicial de ações (IPO)', '115'),
  },
  {
    topic: 'Oferta pública inicial (IPO)',
    subtopic: 'Lote suplementar x lote adicional',
    difficulty: 'prova',
    statement:
      'Sobre os mecanismos de lote suplementar (over allotment / green shoe) e lote adicional (hot issue) em uma oferta pública, é correto afirmar que:',
    options: {
      A: 'O lote suplementar pode chegar a até 25% da oferta-base e tem como objetivo atender ao excesso de demanda.',
      B: 'O lote adicional pode chegar a até 15% da oferta-base e é usado para estabilizar o preço da ação após o início da negociação.',
      C: 'O lote suplementar (até 15% da oferta-base) serve para viabilizar a estabilização de preço pelo agente estabilizador; o lote adicional (até 25% da oferta-base) é usado para atender ao excesso de demanda, decidido no dia da precificação.',
      D: 'Ambos os lotes são obrigatórios em toda oferta pública de ações.',
    },
    correct: 'C',
    explanation:
      'O lote suplementar (over allotment/green shoe) pode ser de até 15% da oferta-base e viabiliza a estabilização de preço pelo agente estabilizador nos dias/semanas seguintes ao início da negociação. Já o lote adicional (hot issue) pode ser de até 25% da oferta-base, atende a uma demanda sensivelmente maior que a oferta-base e é decidido no dia da precificação, aumentando definitivamente o volume da emissão.',
    explanationWrong: {
      A: 'Inverte os limites: quem pode chegar a 25% é o lote ADICIONAL, não o suplementar (limitado a 15%).',
      B: 'Inverte tanto o limite quanto a função: o lote adicional (não o suplementar) atende ao excesso de demanda, e seu limite é 25%, não 15%.',
      D: 'A oferta de lotes suplementar e adicional NÃO é obrigatória — sua previsão apenas precisa constar desde o início da oferta, caso a empresa opte por utilizá-los.',
    },
    examTip:
      'Suplementar (green shoe) = até 15%, estabiliza preço DEPOIS da negociação começar. Adicional (hot issue) = até 25%, atende demanda extra, decidido NO DIA da precificação.',
    commonTrap:
      'É a pegadinha mais clássica do capítulo de IPO: trocar os percentuais (15% x 25%) e as funções (estabilização x demanda extra) entre lote suplementar e lote adicional.',
    ...SRC('6. Oferta pública inicial de ações (IPO) — Quantidade ofertada', '117-118'),
  },
  {
    topic: 'Oferta pública inicial (IPO)',
    subtopic: 'Garantia firme x melhores esforços',
    difficulty: 'dificil',
    statement:
      'Em uma oferta pública com liquidação por "melhores esforços" (best efforts), caso o coordenador não consiga vender o mínimo estipulado no contrato:',
    options: {
      A: 'Os coordenadores são obrigados a subscrever, com recursos próprios, a diferença não colocada no mercado.',
      B: 'A oferta é cancelada, e o dinheiro é devolvido aos investidores que fizeram reservas.',
      C: 'A CVM assume automaticamente a colocação das ações remanescentes.',
      D: 'A empresa é obrigada a recomprar as próprias ações no mercado secundário.',
    },
    correct: 'B',
    explanation:
      'Na liquidação por melhores esforços, a instituição contratada apenas se compromete a fazer o melhor esforço para colocar os títulos, sem garantir a colocação total. Se o banco líder não conseguir vender nem o mínimo estipulado no contrato, a oferta é cancelada e o dinheiro é devolvido aos investidores que fizeram reservas.',
    explanationWrong: {
      A: 'A obrigação de subscrever a diferença não vendida é característica da GARANTIA FIRME, não dos melhores esforços — que, por definição, não garantem a colocação total.',
      C: 'A CVM não assume a colocação de ações não vendidas; seu papel é regulatório/de registro, não de intermediação financeira da oferta.',
      D: 'Não há essa obrigação de recompra pela empresa prevista no mecanismo de melhores esforços descrito no Guia.',
    },
    examTip:
      'Garantia firme = coordenador assume o risco, garante 100% da colocação. Melhores esforços = coordenador só tenta; se não vender o mínimo, a oferta é cancelada e o dinheiro volta para os investidores.',
    commonTrap:
      'Não confunda "melhores esforços" com uma garantia parcial — se o mínimo não for atingido, a oferta inteira é cancelada, não apenas reduzida ao volume vendido.',
    ...SRC('6. Oferta pública inicial de ações (IPO) — Etapas do processo (Liquidação por melhores esforços)', '122-123'),
  },
  {
    topic: 'Oferta pública inicial (IPO)',
    subtopic: 'Rito automático x rito ordinário',
    difficulty: 'medio',
    statement: 'A diferença entre o rito automático e o rito ordinário de registro de distribuição de valores mobiliários é que o rito ordinário:',
    options: {
      A: 'Dispensa qualquer documentação para a CVM.',
      B: 'Sujeita-se à análise prévia da CVM para obtenção do registro, exigindo entrega de uma gama maior de documentos.',
      C: 'É aplicável apenas a ofertas realizadas fora do Brasil.',
      D: 'Elimina a necessidade de contratação de um coordenador líder.',
    },
    correct: 'B',
    explanation:
      'O rito ordinário de registro de distribuição de valores mobiliários se sujeita à análise prévia da CVM para a obtenção do registro, exigindo a entrega de uma gama maior de documentos. Já o rito automático permite que a distribuição seja realizada automaticamente, sem análise prévia da CVM, desde que cumpridos os requisitos e procedimentos da Resolução CVM nº 160/2022.',
    explanationWrong: {
      A: 'É o rito automático que dispensa a análise prévia — mas mesmo nesse rito, ainda há documentação a ser cumprida; o ordinário é quem exige MAIS documentos, não menos.',
      C: 'Ambos os ritos (automático e ordinário) tratam de ofertas no mercado brasileiro, sob a Resolução CVM nº 160/2022 — não há essa distinção geográfica.',
      D: 'A contratação de um coordenador líder é uma etapa do processo de oferta em geral, independentemente do rito escolhido.',
    },
    examTip:
      'Rito automático = sem análise prévia da CVM (mais rápido). Rito ordinário = COM análise prévia da CVM (mais documentos, mais demorado).',
    commonTrap:
      '"Automático" pode soar como "sem controle nenhum" — mas mesmo no rito automático, a oferta deve cumprir todos os requisitos da Resolução CVM nº 160/2022, apenas sem análise prévia caso a caso.',
    ...SRC('6. Oferta pública inicial de ações (IPO)', '115-116'),
  },
  {
    topic: 'Oferta pública inicial (IPO)',
    subtopic: 'Bookbuilding',
    difficulty: 'medio',
    statement: 'O processo pelo qual cada coordenador recebe, processa e armazena as ordens (bids) dos gestores de investidores institucionais, em preparação para a etapa de precificação, é chamado de:',
    options: {
      A: 'Roadshow.',
      B: 'Bookbuilding.',
      C: 'Garantia firme.',
      D: 'Rateio.',
    },
    correct: 'B',
    explanation:
      'Bookbuilding é o procedimento por meio do qual cada coordenador recebe, processa e armazena as ordens (bids) dos gestores de investidores institucionais durante o período de reserva, formando o "book" (livro de ordens) que será usado para definir o preço da ação e a quantidade alocada a cada gestor.',
    explanationWrong: {
      A: 'Roadshow é a apresentação da oferta aos investidores institucionais, etapa anterior ao bookbuilding — não o processamento das ordens em si.',
      C: 'Garantia firme é o compromisso dos coordenadores de assegurar a colocação total da oferta-base — um conceito de liquidação, não de coleta de ordens.',
      D: 'Rateio é o mecanismo usado quando as reservas de varejo excedem o percentual alocado a essa parcela, distribuindo as ações proporcionalmente — distinto do bookbuilding institucional.',
    },
    examTip:
      'Bookbuilding = "construir o livro de ordens" dos institucionais para definir preço. Vem depois do roadshow e antes da precificação.',
    commonTrap:
      'Roadshow (apresentar a oferta) e bookbuilding (coletar e processar as ordens) são etapas sequenciais e distintas — não são sinônimos.',
    ...SRC('6. Oferta pública inicial de ações (IPO) — Etapas do processo', '120'),
  },

  // ---------- OPA ----------
  {
    topic: 'Oferta pública de aquisição (OPA)',
    subtopic: 'Modalidades de OPA',
    difficulty: 'medio',
    statement: 'A OPA realizada obrigatoriamente como condição de eficácia de um negócio jurídico de mudança do controlador de uma companhia aberta é a:',
    options: {
      A: 'OPA voluntária.',
      B: 'OPA para cancelamento de registro.',
      C: 'OPA por alienação de controle.',
      D: 'OPA concorrente.',
    },
    correct: 'C',
    explanation:
      'A OPA por alienação de controle é realizada obrigatoriamente como condição de eficácia de negócio jurídico de alienação de controle de companhia aberta, ou seja, quando há mudança dos controladores — é o instrumento que garante o tag along legal aos acionistas minoritários nessa situação.',
    explanationWrong: {
      A: 'A OPA voluntária não segue os procedimentos obrigatórios das OPAs compulsórias e não exige registro na CVM — não está ligada especificamente à mudança de controle.',
      B: 'A OPA para cancelamento de registro é exigida quando a companhia deixa de ser aberta, situação distinta (embora relacionada) da simples troca de controlador.',
      D: 'A OPA concorrente é formulada por um terceiro que disputa o controle já visado por outra OPA — não é, em si, a OPA que decorre diretamente da alienação de controle original.',
    },
    examTip:
      'OPA por alienação de controle = "trocou o dono" da empresa → obrigatório oferecer aos minoritários. É o principal mecanismo prático de tag along.',
    commonTrap:
      'Não confunda "OPA por alienação de controle" (decorrente da própria venda do controle) com "OPA por aumento de participação" (controlador já existente aumenta sua fatia) — são gatilhos diferentes.',
    ...SRC('7. Oferta pública de aquisição de ações (OPA)', '125-126'),
  },
  {
    topic: 'Oferta pública de aquisição (OPA)',
    subtopic: 'OPA voluntária',
    difficulty: 'medio',
    statement: 'Uma característica que distingue a OPA voluntária das demais modalidades obrigatórias de OPA é que ela:',
    options: {
      A: 'Exige sempre registro prévio na CVM.',
      B: 'Não segue os procedimentos específicos estabelecidos para as OPAs obrigatórias e não exige registro na CVM.',
      C: 'Só pode ser realizada pela própria companhia emissora, nunca por terceiros.',
      D: 'É a única modalidade prevista na Lei das Sociedades por Ações.',
    },
    correct: 'B',
    explanation:
      'A OPA voluntária visa à aquisição de ações de companhia aberta, sem estar sujeita aos procedimentos específicos estabelecidos para as OPAs obrigatórias, não havendo obrigatoriedade de registro na CVM.',
    explanationWrong: {
      A: 'Ao contrário: não há exigência de registro prévio na CVM para a OPA voluntária.',
      C: 'A empresa, um acionista, grupo de acionistas ou terceiros podem realizar uma OPA — não é restrita à própria companhia.',
      D: 'Diversas modalidades de OPA (cancelamento de registro, alienação de controle, aumento de participação, voluntária, concorrente, entre outras) estão previstas na legislação e em instruções da CVM — a voluntária é apenas uma delas.',
    },
    examTip:
      'OPA voluntária = a única modalidade sem procedimento obrigatório e sem exigência de registro na CVM — todas as demais (cancelamento, alienação de controle, aumento de participação) são compulsórias.',
    commonTrap:
      'A prova pode testar se você sabe que "voluntária" não significa "informal demais para existir" — ela é uma modalidade legítima, só que sem os requisitos rígidos das OPAs obrigatórias.',
    ...SRC('7. Oferta pública de aquisição de ações (OPA) — OPA voluntária', '126'),
  },

  // ---------- Índices ----------
  {
    topic: 'Índices de ações',
    subtopic: 'Índice de retorno total',
    difficulty: 'medio',
    statement: 'Sobre os índices administrados pela B3, é correto afirmar que:',
    options: {
      A: 'Nenhum deles considera o impacto da distribuição de proventos no cálculo.',
      B: 'Todos os índices da B3 são índices de retorno total, incorporando dividendos, juros sobre capital e outros proventos.',
      C: 'Apenas o Ibovespa é um índice de retorno total; os demais são de retorno de preço.',
      D: 'Índices de retorno total ignoram completamente as variações de preço dos ativos.',
    },
    correct: 'B',
    explanation:
      'O Guia destaca explicitamente: "todos os índices da B3 são índices de retorno total". Um índice de retorno total procura refletir não apenas as variações de preços, mas também o impacto da distribuição de proventos (dividendos, juros sobre capital, direitos de subscrição etc.) no retorno do índice.',
    explanationWrong: {
      A: 'É o oposto: os índices de retorno total INCORPORAM justamente o impacto dos proventos distribuídos, e essa é a regra geral para todos os índices da B3.',
      C: 'Não é exclusividade do Ibovespa — o Guia afirma que TODOS os índices da B3 seguem a metodologia de retorno total.',
      D: 'O índice de retorno total considera tanto as variações de preço quanto o impacto dos proventos — não ignora as variações de preço.',
    },
    examTip:
      '"Todos os índices da B3 são de retorno total" é uma frase literal do Guia, destacada como "Importante!" — decore-a.',
    commonTrap:
      'A prova pode tentar restringir a regra a "só o Ibovespa" — mas o Guia é categórico: a regra vale para todos os índices administrados pela B3.',
    ...SRC('8. Índice de ações — Índice de retorno total', '129'),
  },
  {
    topic: 'Índices de ações',
    subtopic: 'Ibovespa — ponderação',
    difficulty: 'dificil',
    statement: 'A carteira teórica do Ibovespa é ponderada, principalmente, com base em:',
    options: {
      A: 'Pesos iguais entre todas as ações que atendem aos critérios de inclusão.',
      B: 'Capitalização de mercado fixa, sem considerar o free float.',
      C: 'Valor de mercado do free float, com limite de participação baseado na liquidez (índice de negociabilidade).',
      D: 'Sorteio aleatório entre as ações mais negociadas do mercado.',
    },
    correct: 'C',
    explanation:
      'No Ibovespa, os ativos são ponderados pelo valor de mercado do free float (ações em circulação) da espécie pertencente à carteira, com limite de participação baseado na liquidez, medida pelo índice de negociabilidade (IN) de cada ativo.',
    explanationWrong: {
      A: 'Ponderação por pesos iguais é um método alternativo (usado, por exemplo, no Dow Jones), mas não é o método usado no Ibovespa.',
      B: 'O Ibovespa considera especificamente o free float (ações disponíveis ao público), não a capitalização de mercado fixa (que inclui ações em poder de controladores).',
      D: 'A seleção e a ponderação do Ibovespa seguem critérios técnicos e objetivos (negociabilidade, presença em pregão, volume), não sorteio.',
    },
    examTip:
      'Ibovespa = ponderação por valor de mercado do FREE FLOAT + limite baseado na LIQUIDEZ (índice de negociabilidade). É um índice ponderado por liquidez, na classificação do Guia.',
    commonTrap:
      'A questão-modelo do próprio Guia (seção "Questões") já cobra isso: "O índice Ibovespa é um índice de retorno total ponderado por liquidez" — decore essa classificação exata.',
    ...SRC('9. Índice Bovespa (Ibovespa B3) — Cálculo da quantidade teórica de cada ativo', '132-133'),
  },
  {
    topic: 'Índices de ações',
    subtopic: 'IGC — fator de governança',
    difficulty: 'dificil',
    statement:
      'No cálculo do Índice de Ações com Governança Corporativa Diferenciada (IGC B3), o fator de ponderação por segmento de listagem é maior para:',
    options: {
      A: 'O segmento Nível 1, com fator 2,0.',
      B: 'O segmento Nível 2, com fator 1,5.',
      C: 'O segmento Novo Mercado, com fator 2,0.',
      D: 'Todos os segmentos têm o mesmo fator de ponderação.',
    },
    correct: 'C',
    explanation:
      'No IGC B3, os ativos são ponderados pela multiplicação de seu valor de mercado por um fator de governança: Novo Mercado tem fator 2,0, Nível 1 tem fator 1,5 e Nível 2 tem fator 1,0 — refletindo o maior peso dado ao segmento de mais alta governança.',
    explanationWrong: {
      A: 'O fator do Nível 1 é 1,5, não 2,0 — o fator 2,0 é do Novo Mercado.',
      B: 'O fator do Nível 2 é 1,0 (o menor entre os três), não 1,5 — o fator 1,5 é do Nível 1.',
      D: 'Os fatores são diferentes por segmento (2,0 para Novo Mercado, 1,5 para Nível 1, 1,0 para Nível 2), refletindo exatamente as diferenças de exigência de governança.',
    },
    examTip:
      'IGC: Novo Mercado (fator 2,0) > Nível 1 (fator 1,5) > Nível 2 (fator 1,0) — quanto maior a governança exigida, maior o peso no índice.',
    commonTrap:
      'É fácil trocar os fatores entre os segmentos — associe: quanto "melhor" o segmento em termos de governança pura (Novo Mercado é o mais rígido), maior o fator no IGC.',
    ...SRC('10. Demais índices do mercado brasileiro — IGC B3', '137'),
  },

  // ---------- ADR e BDR ----------
  {
    topic: 'ADR e BDR',
    subtopic: 'ADR — conceito',
    difficulty: 'facil',
    statement: 'Um American Depositary Receipt (ADR) é:',
    options: {
      A: 'Um recibo de depósito emitido por um banco norte-americano, com lastro em ações de empresas não americanas, negociado em dólares nos EUA.',
      B: 'Um certificado emitido no Brasil, com lastro em ações de empresas estrangeiras, negociado em reais na B3.',
      C: 'Uma modalidade de ação preferencial negociada exclusivamente em bolsas americanas.',
      D: 'Um título de dívida emitido pelo Tesouro americano.',
    },
    correct: 'A',
    explanation:
      'ADRs são recibos de depósito emitidos por um banco norte-americano, cotados e negociados em dólares no mercado financeiro dos EUA, com lastro em ações de empresas não americanas custodiadas por um banco custodiante no mercado local (país de origem do ativo).',
    explanationWrong: {
      B: 'A descrição de "certificado emitido no Brasil com lastro em ações estrangeiras" corresponde ao BDR (Brazilian Depositary Receipt), não ao ADR.',
      C: 'ADR não é um tipo de ação preferencial — é um recibo de depósito representativo de ações de uma empresa estrangeira (na perspectiva dos EUA).',
      D: 'ADR não é um título de dívida do Tesouro americano — é lastreado em ações de empresas estrangeiras, um instrumento de renda variável.',
    },
    examTip:
      'ADR = "americano compra ação estrangeira, mas em dólar, nos EUA". BDR = "brasileiro compra ação estrangeira, mas em real, na B3". São espelhos um do outro.',
    commonTrap:
      'ADR e BDR são frequentemente confundidos por serem "recibos de depósito de ações estrangeiras" — a diferença está no país de emissão/negociação e na moeda.',
    ...SRC('11. Listagem internacional — American Depositary Receipts (ADR)', '145'),
  },
  {
    topic: 'ADR e BDR',
    subtopic: 'Níveis de ADR',
    difficulty: 'dificil',
    statement: 'Um ADR de Nível III caracteriza-se por:',
    options: {
      A: 'Ser negociado apenas em mercado de balcão, sem levantar capital novo.',
      B: 'Envolver a emissão de novas ações e permitir que a empresa estrangeira levante capital novo diretamente de investidores americanos, sendo negociado em bolsa.',
      C: 'Ser um lançamento privado, restrito a investidores institucionais qualificados, sem formalidades de registro em bolsa.',
      D: 'Dispensar totalmente a divulgação de informações financeiras nos moldes da SEC.',
    },
    correct: 'B',
    explanation:
      'Os ADRs de Nível III envolvem a emissão de novas ações e são o único nível a permitir que a empresa estrangeira levante capital novo diretamente de investidores americanos, sendo negociados em bolsa e sujeitos a maiores exigências da SEC (incluindo demonstrações financeiras nos padrões americanos).',
    explanationWrong: {
      A: 'A descrição de "balcão, sem levantar capital novo" corresponde ao ADR de Nível I, não ao Nível III.',
      C: 'O lançamento privado restrito a investidores institucionais qualificados, sem formalidades de registro em bolsa, corresponde aos ADRs sob a Regra 144A, não ao Nível III.',
      D: 'É o oposto: os ADRs de Nível III têm as exigências MAIS rigorosas da SEC entre os três níveis, incluindo demonstrações financeiras nos padrões americanos.',
    },
    examTip:
      'Nível I = balcão, sem captar. Nível II = bolsa, mas sobre ações já existentes, sem captar novo capital. Nível III = bolsa + capital NOVO (tipo um IPO nos EUA).',
    commonTrap:
      'A prova pode testar a progressão I→II→III como aumento de exigência regulatória e possibilidade de captação — quanto maior o nível, maior a exigência da SEC e a capacidade de levantar capital.',
    ...SRC('11. Listagem internacional — Modalidades de ADRs', '146-147'),
  },
  {
    topic: 'ADR e BDR',
    subtopic: 'BDR patrocinado x não patrocinado',
    difficulty: 'medio',
    statement: 'A principal diferença entre um programa de BDR patrocinado e um não patrocinado é que, no patrocinado:',
    options: {
      A: 'A companhia emissora das ações-lastro está envolvida no processo e se responsabiliza pela divulgação de informações no Brasil.',
      B: 'Não há qualquer instituição depositária envolvida.',
      C: 'O BDR não pode ser negociado em bolsa, apenas em balcão.',
      D: 'É vedada a qualquer investidor pessoa física a aquisição desses ativos.',
    },
    correct: 'A',
    explanation:
      'No programa patrocinado, a companhia emissora das ações-lastro (empresa patrocinadora) trabalha em conjunto com o banco/instituição depositária e assume a responsabilidade de manter um fluxo de informações adequado sobre a empresa no Brasil. No não patrocinado, o programa é estabelecido por uma instituição depositária sem participação ativa da empresa emissora do lastro.',
    explanationWrong: {
      B: 'Ambos os programas (patrocinado e não patrocinado) envolvem uma instituição depositária — a diferença está no envolvimento (ou não) da empresa emissora do lastro, não na presença da depositária.',
      C: 'BDRs patrocinados de Nível II e III podem ser negociados em bolsa (e balcão organizado); mesmo o Nível I patrocinado pode ser negociado em balcão organizado ou bolsa — não há vedação geral à negociação em bolsa.',
      D: 'Desde a Resolução CVM que flexibilizou o acesso (outubro de 2020), os BDRs Nível I Não Patrocinados são acessíveis ao investidor de varejo (pessoa física em geral), não vedados a ele.',
    },
    examTip:
      'Patrocinado = a empresa estrangeira "participa" e presta informações. Não patrocinado = só a instituição depositária brasileira toca o programa, sem a empresa estrangeira envolvida.',
    commonTrap:
      'Não confunda "não patrocinado" com "irregular" ou "sem supervisão" — é uma modalidade legítima e regulada, só que sem participação ativa da empresa emissora do lastro.',
    ...SRC('11. Listagem internacional — Brazilian Depositary Receipts (BDRs)', '148, 150'),
  },
  {
    topic: 'ADR e BDR',
    subtopic: 'BDR Nível I Não Patrocinado — acesso a varejo',
    difficulty: 'prova',
    statement:
      'Antes da flexibilização promovida em outubro de 2020, quais investidores podiam adquirir BDRs Nível I Não Patrocinados, segundo o Guia Por Dentro da B3?',
    options: {
      A: 'Qualquer pessoa física, sem restrições.',
      B: 'Apenas instituições financeiras, fundos de investimento e investidores qualificados (patrimônio financeiro superior a R$ 1 milhão).',
      C: 'Apenas o próprio banco depositário emissor do certificado.',
      D: 'Apenas investidores não residentes no Brasil.',
    },
    correct: 'B',
    explanation:
      'Antes da flexibilização, por restrição regulatória, só podiam investir em BDR Nível I Não Patrocinado instituições financeiras, fundos de investimento e pessoas físicas ou jurídicas com investimentos financeiros superiores a R$ 1 milhão (investidores qualificados). A partir de outubro de 2020, pessoas físicas em geral passaram a ter acesso ao produto.',
    explanationWrong: {
      A: 'Antes da flexibilização de 2020, o acesso NÃO era livre para qualquer pessoa física — essa é justamente a mudança trazida pela nova regulamentação.',
      C: 'O banco depositário é o emissor do certificado, não o universo de investidores autorizados a comprá-lo.',
      D: 'A restrição histórica não era baseada em residência, mas em qualificação financeira do investidor (valor de investimentos).',
    },
    examTip:
      'Antes de 2020: só "investidor qualificado" (R$ 1 milhão+) podia comprar BDR NP N1. Depois de 2020: qualquer pessoa física com conta em corretora pode.',
    commonTrap:
      'A prova pode testar a data/marco regulatório — não confunda a mudança de 2020 (acesso ao varejo) com os requisitos de registro do próprio programa junto à CVM/B3 (que continuam existindo).',
    ...SRC('11. Listagem internacional — BDRs não patrocinados', '150'),
  },

  // ---------- Empréstimo de ativos ----------
  {
    topic: 'Empréstimo de ativos',
    subtopic: 'B3 como contraparte central',
    difficulty: 'medio',
    statement: 'Uma característica que diferencia o modelo brasileiro de empréstimo de ativos dos principais mercados internacionais é:',
    options: {
      A: 'A ausência total de garantias exigidas do tomador.',
      B: 'A exigência de uma contraparte central, com a B3 atuando nesse papel e garantindo o anonimato entre doador e tomador.',
      C: 'A proibição de intermediação por instituições financeiras.',
      D: 'A limitação do serviço apenas a títulos públicos federais.',
    },
    correct: 'B',
    explanation:
      'Uma característica que diferencia o modelo brasileiro é a exigência de uma contraparte central: a B3 atua como contraparte central de todas as operações, com rígidos critérios de controle de risco, e garante o anonimato entre as pontas participantes — não se estabelece vínculo direto entre doadores e tomadores.',
    explanationWrong: {
      A: 'Ao contrário: a B3 exige garantias do tomador, recalculadas em base diária, exatamente por atuar como contraparte central.',
      C: 'A intermediação por instituições financeiras (participante de negociação pleno ou de liquidação) é obrigatória nas operações de empréstimo de ativos, não proibida.',
      D: 'O empréstimo de ativos da B3 abrange valores mobiliários de companhias abertas admitidos à negociação, não apenas títulos públicos federais (que são tratados no Selic).',
    },
    examTip:
      'B3 = contraparte central do empréstimo de ativos = garante anonimato + exige garantias do tomador + gerencia risco de inadimplência.',
    commonTrap:
      'A exigência de contraparte central no empréstimo de ativos é apresentada no Guia como um diferencial do modelo brasileiro frente a outros mercados — ponto frequentemente cobrado.',
    ...SRC('12. Serviço de empréstimo de ativos da B3', '155-156'),
  },
  {
    topic: 'Empréstimo de ativos',
    subtopic: 'Compensação de proventos ao doador',
    difficulty: 'dificil',
    statement:
      'Durante a vigência de um contrato de empréstimo de ativos, se a companhia emissora distribuir dividendos, o doador dos ativos:',
    options: {
      A: 'Perde definitivamente o direito a qualquer valor referente a esse provento.',
      B: 'Recebe da B3 um pagamento de compensação equivalente ao provento que teria recebido caso ainda detivesse os ativos.',
      C: 'Deve devolver ao tomador qualquer valor que porventura receba da companhia.',
      D: 'Passa automaticamente a ter direito de voto extra na assembleia da companhia.',
    },
    correct: 'B',
    explanation:
      'Embora o doador não figure mais como acionista durante a vigência do empréstimo (perdendo temporariamente prerrogativas como voto em assembleia), a B3, por meio do sistema de empréstimo de ações, garante ao doador o tratamento equivalente — em valores financeiros e datas de pagamento — ao que teria caso estivesse com os ativos em carteira, obrigando o tomador a realizar pagamentos de compensação.',
    explanationWrong: {
      A: 'O doador não perde o valor econômico do provento — a B3 garante o pagamento de compensação equivalente, mesmo sem os ativos estarem fisicamente em sua carteira.',
      C: 'A lógica é inversa: é o tomador quem deve compensar o doador pelo provento distribuído durante a vigência do empréstimo.',
      D: 'O doador perde temporariamente o direito de voto em assembleias enquanto o empréstimo estiver vigente — não ganha voto extra.',
    },
    examTip:
      'O doador de ativos "não perde dinheiro" durante o empréstimo — perde apenas prerrogativas não financeiras (como voto), pois a B3 garante compensação equivalente aos proventos financeiros.',
    commonTrap:
      'Não confunda "perder a posição de acionista temporariamente" com "perder o direito econômico ao provento" — o Guia é claro que o tratamento financeiro é equivalente, mesmo sem os direitos de sócio.',
    ...SRC('12. Serviço de empréstimo de ativos da B3 — O que é o empréstimo de ativos', '155-156'),
  },
  {
    topic: 'Empréstimo de ativos',
    subtopic: 'Falha de entrega e empréstimo compulsório',
    difficulty: 'prova',
    statement:
      'Quando um investidor vendedor não possui os ativos disponíveis em sua conta de custódia para entrega na liquidação, e o sistema aciona automaticamente uma oferta de empréstimo elegível para suprir essa necessidade, esse mecanismo é denominado:',
    options: {
      A: 'OPA voluntária.',
      B: 'Empréstimo automático ou compulsório.',
      C: 'Garantia firme.',
      D: 'Bookbuilding.',
    },
    correct: 'B',
    explanation:
      'Na inexistência de ativos disponíveis para entrega na conta de custódia do vendedor, o sistema disponibiliza ofertas elegíveis para o tratamento de falhas, registrando uma posição tomadora em nome do vendedor, às suas expensas, para garantir a continuidade da liquidação. Essa modalidade é denominada empréstimo automático ou compulsório.',
    explanationWrong: {
      A: 'OPA voluntária é um mecanismo de aquisição de controle acionário, sem relação com falhas de entrega na liquidação.',
      C: 'Garantia firme é o compromisso dos coordenadores de uma oferta pública de colocar a totalidade da oferta-base — conceito de IPO, não de liquidação diária de operações.',
      D: 'Bookbuilding é o processo de coleta de ordens de investidores institucionais em uma oferta pública, sem relação com falhas de entrega.',
    },
    examTip:
      'Empréstimo compulsório/automático = "socorro" da B3 quando o vendedor não tem os ativos na hora de entregar — evita que a liquidação trave por falta de papel.',
    commonTrap:
      'O empréstimo compulsório é feito "às expensas" do vendedor inadimplente (que paga a taxa do empréstimo tomado em seu nome) — não é um benefício gratuito, mas um mecanismo corretivo com custo.',
    ...SRC('12. Serviço de empréstimo de ativos da B3 — Empréstimo automático ou compulsório', '163-164'),
  },

  // ---------- Formador de mercado ----------
  {
    topic: 'Formador de mercado',
    subtopic: 'Função do formador de mercado',
    difficulty: 'medio',
    statement: 'O formador de mercado, regulado pela Resolução CVM nº 133/2022, tem como principal função:',
    options: {
      A: 'Fiscalizar as operações dos demais participantes do mercado, como faz a BSM.',
      B: 'Manter ofertas de compra e venda de forma regular e contínua, fomentando a liquidez e mitigando movimentos artificiais de preço.',
      C: 'Garantir a liquidação das operações como contraparte central.',
      D: 'Definir as diretrizes de política monetária aplicáveis ao mercado de capitais.',
    },
    correct: 'B',
    explanation:
      'O formador de mercado é uma pessoa jurídica cadastrada na B3 que se compromete a manter ofertas de compra e venda de forma regular e contínua durante a sessão de negociação, fomentando a liquidez dos valores mobiliários, facilitando os negócios e mitigando movimentos artificiais nos preços.',
    explanationWrong: {
      A: 'A fiscalização dos participantes e das operações é atribuição da BSM Supervisão de Mercados, não do formador de mercado.',
      C: 'A garantia de liquidação como contraparte central é papel da Câmara B3, não do formador de mercado (que apenas mantém ofertas ativas no livro).',
      D: 'Diretrizes de política monetária são atribuição do CMN — sem qualquer relação com a função operacional do formador de mercado.',
    },
    examTip:
      'Formador de mercado = "dá liquidez", colocando ofertas de compra e venda o tempo todo — não fiscaliza, não garante liquidação, não define política monetária.',
    commonTrap:
      'Não confunda o papel do formador de mercado (prover liquidez via ofertas) com o da contraparte central/câmara (garantir a liquidação) — são funções complementares, mas distintas.',
    ...SRC('13. O formador de mercado', '165'),
  },
  {
    topic: 'Formador de mercado',
    subtopic: 'Regras de negociação',
    difficulty: 'dificil',
    statement: 'Sobre as ofertas inseridas pelo formador de mercado no livro de ofertas, é correto afirmar que:',
    options: {
      A: 'Têm prioridade automática sobre as demais ofertas, independentemente de preço ou horário.',
      B: 'Competem em condições de igualdade com as demais ofertas, segundo critérios de melhor preço e ordem cronológica de registro.',
      C: 'Não podem, em nenhuma hipótese, receber isenção de emolumentos.',
      D: 'São processadas em um sistema de negociação totalmente separado do restante do mercado.',
    },
    correct: 'B',
    explanation:
      'As ofertas do formador de mercado competem em condições de igualdade com as demais ofertas do mercado, com o fechamento de negócios obedecendo aos critérios de melhor preço e ordem cronológica de registro — como qualquer outra oferta do livro.',
    explanationWrong: {
      A: 'Não há prioridade automática — as ofertas do formador de mercado seguem os mesmos critérios de melhor preço e ordem cronológica que as demais.',
      C: 'Ao contrário: como incentivo à atividade, a B3 pode conceder vantagens de custo, como isenção em emolumentos e taxas de negociação, ao formador de mercado.',
      D: 'As ofertas do formador de mercado são inseridas no mesmo sistema/livro de ofertas do mercado, não em um ambiente separado.',
    },
    examTip:
      'O formador de mercado NÃO tem prioridade de execução — compete em igualdade de condições. O que ele PODE ter é incentivo de custo (isenção de emolumentos), não prioridade de preço/tempo.',
    commonTrap:
      'É fácil supor que o formador de mercado tem "vantagem" na fila de execução por seu papel especial — mas a única vantagem prevista no Guia é de custo, não de prioridade de negociação.',
    ...SRC('13. O formador de mercado — Regras de negociação', '166'),
  },
];
