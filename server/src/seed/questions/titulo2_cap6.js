// Título II - Mercados de Bolsa e de Balcão
// Capítulo VI - Clubes de investimento
// Fonte: Guia Por Dentro da B3, páginas 335-343.

export const chapterRef = { titleNumber: 'II', chapterNumber: 'VI' };

export const topics = [
  'Conceito e regulação dos clubes',
  'Agentes, cotas e patrimônio',
  'Vedações e registro na B3',
];

const SRC = (section, page) => ({
  source_title: 'Guia Por Dentro da B3',
  source_chapter: 'Título II, Capítulo VI — Clubes de investimento',
  source_section: section,
  source_page: page,
});

export const questions = [
  // ---------- Conceito e regulação ----------
  {
    topic: 'Conceito e regulação dos clubes',
    subtopic: 'Número de participantes',
    difficulty: 'facil',
    statement: 'Um clube de investimento deve ter, segundo o Guia Por Dentro da B3:',
    options: {
      A: 'No mínimo 3 e no máximo 50 participantes.',
      B: 'No mínimo 10 e no máximo 100 participantes.',
      C: 'Exatamente 20 participantes, sem exceção.',
      D: 'Participantes ilimitados, desde que pessoas físicas.',
    },
    correct: 'A',
    explanation:
      'O clube de investimento é um condomínio constituído por pessoas físicas, com no mínimo três e no máximo 50 participantes, que reúnem recursos comuns para investir em títulos e valores mobiliários.',
    explanationWrong: {
      B: 'Os limites reais são 3 (mínimo) e 50 (máximo), não 10 e 100.',
      C: 'Não há uma exigência de número fixo exato de participantes — apenas os limites mínimo (3) e máximo (50).',
      D: 'Há sim um limite máximo definido (50 participantes) — não é ilimitado.',
    },
    examTip:
      'Clube de investimento: mínimo 3, máximo 50 participantes — todos pessoas físicas.',
    commonTrap:
      'Não confunda os limites do clube de investimento (3 a 50 pessoas físicas) com os de outros veículos coletivos, como fundos, que não têm esse teto de participantes.',
    ...SRC('2. Visão geral dos clubes de investimento', '336'),
  },
  {
    topic: 'Conceito e regulação dos clubes',
    subtopic: 'Condomínio aberto',
    difficulty: 'medio',
    statement: 'O clube de investimento somente pode ser constituído sob a forma de:',
    options: {
      A: 'Condomínio fechado, sem possibilidade de resgate de cotas.',
      B: 'Condomínio aberto, em que os cotistas podem requerer o resgate de suas cotas conforme o estatuto.',
      C: 'Sociedade anônima de capital aberto.',
      D: 'Associação civil sem fins lucrativos.',
    },
    correct: 'B',
    explanation:
      'O clube somente pode ser constituído sob a forma de condomínio aberto, no qual os cotistas podem requerer o resgate de suas cotas, de acordo com as condições estabelecidas no estatuto do clube.',
    explanationWrong: {
      A: 'É o oposto: o clube é obrigatoriamente ABERTO (com possibilidade de resgate), nunca fechado.',
      C: 'O clube de investimento é um condomínio, não uma sociedade anônima — sua estrutura jurídica é distinta da de uma empresa listada.',
      D: 'O clube não é uma associação civil — é um condomínio regulado especificamente pela CVM e pelo Regulamento de Clubes da B3.',
    },
    examTip:
      'Clube de investimento = SEMPRE condomínio aberto (diferente de fundos, que podem ser abertos OU fechados, conforme o tipo).',
    commonTrap:
      'Ao contrário de alguns fundos (como FII e FIP, que são fechados), o clube de investimento NUNCA pode ser fechado — é uma regra sem exceção.',
    ...SRC('2. Visão geral dos clubes de investimento — Regulação', '336'),
  },
  {
    topic: 'Conceito e regulação dos clubes',
    subtopic: 'Limite de participação por cotista',
    difficulty: 'dificil',
    statement: 'Segundo as normas de regulação dos clubes de investimento, nenhum cotista pode ser titular de mais de:',
    options: {
      A: '20% do total das cotas do clube.',
      B: '40% do total das cotas do clube.',
      C: '67% do total das cotas do clube.',
      D: '95% do total das cotas do clube.',
    },
    correct: 'B',
    explanation:
      'Nenhum cotista pode ser titular de mais de 40% do total das cotas do clube de investimento. O clube pode, ainda, determinar o número mínimo de cotas que poderão ser compradas por cada membro.',
    explanationWrong: {
      A: '20% é o limite de participação máxima de uma companhia em índices como o Ibovespa ou ITAG — não o limite de cotista em clube de investimento.',
      C: '67% é o percentual mínimo que a carteira do clube deve ter em ações e demais valores mobiliários — não o limite de participação individual de um cotista.',
      D: '95% é o percentual mínimo de distribuição de lucro de um FII — sem relação com o limite de participação de cotista em clube.',
    },
    examTip:
      'Limite de concentração por cotista no clube: 40%. Não confunda com o mínimo de 67% em ações na carteira do clube — são regras diferentes, com números parecidos mas propósitos distintos.',
    commonTrap:
      'O Guia usa vários percentuais parecidos nesse capítulo (40% de concentração por cotista, 67% mínimo em ações) — a prova pode trocar um pelo outro propositalmente.',
    ...SRC('2. Visão geral dos clubes de investimento — Regulação', '336'),
  },

  // ---------- Agentes, cotas e patrimônio ----------
  {
    topic: 'Agentes, cotas e patrimônio',
    subtopic: 'Administração',
    difficulty: 'medio',
    statement: 'Um clube de investimento deve ser administrado por:',
    options: {
      A: 'Qualquer pessoa física cotista, independentemente de autorização da CVM.',
      B: 'Sociedade corretora, sociedade distribuidora, banco de investimento ou banco múltiplo com carteira de investimento.',
      C: 'Exclusivamente pela B3, como entidade registradora.',
      D: 'Exclusivamente por uma seguradora autorizada pela Susep.',
    },
    correct: 'B',
    explanation:
      'O clube deve ser administrado por sociedade corretora, sociedade distribuidora, banco de investimento ou banco múltiplo com carteira de investimento — instituições responsáveis pelo conjunto de atividades e serviços relacionados ao funcionamento e à manutenção do clube.',
    explanationWrong: {
      A: 'A administração não pode ser exercida por qualquer pessoa física sem qualificação — deve ser uma das instituições específicas listadas (corretora, distribuidora, banco de investimento ou múltiplo com carteira de investimento).',
      C: 'A B3 registra e fiscaliza os clubes, mas não é ela quem administra cada clube individualmente — essa função é das instituições financeiras habilitadas.',
      D: 'Seguradoras não fazem parte da lista de instituições habilitadas a administrar clubes de investimento, segundo o Guia.',
    },
    examTip:
      'Administrador do clube = corretora, distribuidora, banco de investimento ou banco múltiplo com carteira de investimento — nunca uma pessoa física isolada ou uma seguradora.',
    commonTrap:
      'A GESTÃO da carteira pode até ser feita por um cotista (eleito em assembleia) — mas a ADMINISTRAÇÃO do clube em si precisa ser de uma das instituições financeiras habilitadas.',
    ...SRC('2. Visão geral dos clubes de investimento — Principais agentes e atribuições', '337'),
  },
  {
    topic: 'Agentes, cotas e patrimônio',
    subtopic: 'Gestão por cotista',
    difficulty: 'dificil',
    statement: 'A gestão da carteira de um clube de investimento pode ser realizada por um ou mais cotistas eleitos pela assembleia geral, desde que:',
    options: {
      A: 'Não sejam assessores de investimento, nem façam a gestão de mais de um clube.',
      B: 'Sejam, obrigatoriamente, sócios fundadores do clube.',
      C: 'Tenham, no mínimo, 10 anos de experiência no mercado financeiro.',
      D: 'Detenham mais de 40% das cotas do clube.',
    },
    correct: 'A',
    explanation:
      'A gestão da carteira do clube pode ser realizada por um ou mais cotistas, eleitos pela assembleia geral, desde que não sejam assessores de investimento, nem façam a gestão de mais de um clube — regra que busca preservar a natureza educativa e o envolvimento direto dos participantes.',
    explanationWrong: {
      B: 'Não há exigência de que o cotista-gestor seja "sócio fundador" — a única condição é não ser assessor de investimento e não gerir mais de um clube.',
      C: 'Não há exigência de tempo mínimo de experiência de mercado para o cotista que assume a gestão da carteira do clube.',
      D: 'Não há relação entre a função de gestor-cotista e deter mais de 40% das cotas — aliás, esse percentual seria vedado pela regra de concentração máxima por cotista.',
    },
    examTip:
      'Cotista pode virar gestor do clube, MAS: não pode ser assessor de investimento, e não pode gerir mais de um clube ao mesmo tempo.',
    commonTrap:
      'A ideia central dos clubes é o "aprendizado" do pequeno investidor — por isso a regra permite que um cotista comum assuma a gestão, desde que sem conflitos de interesse (ser assessor ou gerir vários clubes).',
    ...SRC('2. Visão geral dos clubes de investimento — Principais agentes e atribuições', '337'),
  },
  {
    topic: 'Agentes, cotas e patrimônio',
    subtopic: 'Composição mínima da carteira',
    difficulty: 'medio',
    statement: 'A carteira de um clube de investimento deve ser composta por, no mínimo:',
    options: {
      A: '40% em ações e demais valores mobiliários.',
      B: '50% em títulos públicos federais.',
      C: '67% em ações e demais valores mobiliários.',
      D: '95% em cotas de fundos de renda fixa.',
    },
    correct: 'C',
    explanation:
      'A carteira dos clubes de investimento deve ser composta por, no mínimo, 67% em ações e demais valores mobiliários, respeitadas as regras da CVM e das entidades administradoras de mercados organizados. O montante excedente pode ser aplicado em outros ativos, como títulos públicos federais e cotas de fundos de renda fixa.',
    explanationWrong: {
      A: '40% é o limite de concentração MÁXIMA de um único cotista no clube — não o mínimo de ações na carteira.',
      B: 'Não há exigência mínima de 50% em títulos públicos federais — esses títulos entram apenas na parcela que excede os 67% obrigatórios em ações.',
      D: '95% em fundos de renda fixa não é a regra do clube — que exige, ao contrário, um MÍNIMO de 67% em ações (renda variável), não em renda fixa.',
    },
    examTip:
      'Clube de investimento = veículo de RENDA VARIÁVEL por natureza: mínimo de 67% em ações e valores mobiliários.',
    commonTrap:
      'Não confunda o mínimo de 67% em ações do clube com o limite de 40% de concentração por cotista — são dois números-chave distintos desse capítulo.',
    ...SRC('2. Visão geral dos clubes de investimento — Patrimônio', '338'),
  },
  {
    topic: 'Agentes, cotas e patrimônio',
    subtopic: 'Cessão de cotas',
    difficulty: 'medio',
    statement: 'As cotas de um clube de investimento podem ser objeto de cessão ou transferência:',
    options: {
      A: 'Livremente, a qualquer momento e por qualquer motivo.',
      B: 'Somente por decisão judicial, execução de garantia ou sucessão universal.',
      C: 'Nunca, sob nenhuma hipótese, mesmo por decisão judicial.',
      D: 'Somente mediante autorização prévia da CVM para cada operação.',
    },
    correct: 'B',
    explanation:
      'As cotas de clube de investimento não podem ser objeto de cessão ou transferência, salvo por decisão judicial, execução de garantia ou sucessão universal — hipóteses excepcionais e específicas.',
    explanationWrong: {
      A: 'Não há livre cessão a qualquer momento — a regra geral é a vedação, com exceções pontuais bem definidas.',
      C: 'Há sim exceções específicas (decisão judicial, execução de garantia, sucessão universal) em que a cessão é permitida — não é uma vedação absoluta.',
      D: 'Não há esse mecanismo de autorização prévia da CVM caso a caso descrito pelo Guia — as exceções são as três hipóteses específicas mencionadas.',
    },
    examTip:
      'Cotas de clube: regra geral é NÃO transferir, com só 3 exceções — decisão judicial, execução de garantia, sucessão universal.',
    commonTrap:
      'Não confunda a regra de cotas de clube (vedação com poucas exceções) com a de cotas de fundos abertos (regra similar) ou fechados (negociáveis em bolsa/balcão) — cada veículo tem sua própria lógica de transferência.',
    ...SRC('2. Visão geral dos clubes de investimento — Cotas', '339'),
  },
  {
    topic: 'Agentes, cotas e patrimônio',
    subtopic: 'Auditoria facultativa',
    difficulty: 'dificil',
    statement: 'Sobre a auditoria das demonstrações financeiras de um clube de investimento, o Guia afirma que ela:',
    options: {
      A: 'É sempre obrigatória, sem exceções, para todo clube registrado na B3.',
      B: 'Se mantém, em princípio, facultativa, podendo a entidade administradora de mercado organizado estabelecer sua obrigatoriedade conforme critérios próprios.',
      C: 'É proibida para clubes de investimento, por não serem companhias abertas.',
      D: 'Deve ser realizada exclusivamente pela BSM.',
    },
    correct: 'B',
    explanation:
      'A auditoria das demonstrações financeiras dos clubes se mantém, em princípio, facultativa, tendo em vista que sua contratação pode ser incompatível com o volume de recursos de certos clubes. No entanto, a entidade administradora de mercado organizado pode estabelecer sua obrigatoriedade, com base em critérios próprios (como o perfil do clube).',
    explanationWrong: {
      A: 'Não é obrigatória em todos os casos — a regra geral é facultativa, podendo se tornar obrigatória apenas conforme critérios da entidade administradora.',
      C: 'Não há proibição de auditoria — pelo contrário, ela é permitida e pode até ser exigida em certos casos, apesar de ser facultativa como regra geral.',
      D: 'A auditoria não é atribuição exclusiva da BSM — trata-se de um serviço de auditoria independente, contratado conforme a necessidade/exigência aplicável ao clube.',
    },
    examTip:
      'Auditoria de clube = facultativa por padrão, mas a entidade administradora (B3) pode torná-la obrigatória para certos perfis de clube.',
    commonTrap:
      'A ausência de auditoria obrigatória não significa "sem risco" — o próprio Guia destaca que a falta de auditoria independente é um risco do qual o cotista deve estar ciente.',
    ...SRC('2. Visão geral dos clubes de investimento — Prestação de informações', '339-340'),
  },

  // ---------- Vedações e registro ----------
  {
    topic: 'Vedações e registro na B3',
    subtopic: 'Vedações ao gestor',
    difficulty: 'prova',
    statement: 'NÃO é uma vedação imposta ao gestor de um clube de investimento, segundo as normas da CVM:',
    options: {
      A: 'Prometer rendimentos predeterminados aos cotistas.',
      B: 'Aplicar recursos diretamente no exterior.',
      C: 'Realizar operações de compra e venda de ações admitidas à negociação em bolsa, dentro da política de investimento do clube.',
      D: 'Adquirir cotas do próprio clube.',
    },
    correct: 'C',
    explanation:
      'Realizar operações de compra e venda de ações, dentro da política de investimento estabelecida no estatuto, é justamente a atividade CENTRAL e permitida do gestor de um clube de investimento — não uma vedação. As vedações reais incluem prometer rendimentos predeterminados, aplicar diretamente no exterior e adquirir cotas do próprio clube, entre outras.',
    explanationWrong: {
      A: 'É, de fato, uma vedação real: o gestor não pode prometer rendimentos predeterminados aos cotistas.',
      B: 'É, de fato, uma vedação real: é vedado ao gestor aplicar recursos diretamente no exterior.',
      D: 'É, de fato, uma vedação real: é vedado ao gestor adquirir cotas do próprio clube que administra.',
    },
    examTip:
      'A atividade-fim do clube (comprar/vender ações conforme a política de investimento) NUNCA é uma vedação — é o próprio propósito do veículo. As vedações mirar comportamentos de risco/conflito de interesse.',
    commonTrap:
      'Questões de "assinale a que NÃO é vedação" testam se você reconhece a atividade normal e esperada do gestor no meio de uma lista de proibições — não caia na armadilha de marcar a operação legítima como se fosse vedada.',
    ...SRC('2. Visão geral dos clubes de investimento — Vedações', '340'),
  },
  {
    topic: 'Vedações e registro na B3',
    subtopic: 'Distribuição de cotas',
    difficulty: 'medio',
    statement: 'A distribuição de cotas de um clube de investimento por meio de serviços públicos de comunicação (imprensa, rádio, TV, páginas abertas na internet) é:',
    options: {
      A: 'Permitida livremente, desde que autorizada previamente pela B3.',
      B: 'Vedada, assim como o envio de malas diretas, inclusive por correio eletrônico.',
      C: 'Permitida apenas para clubes com mais de 30 participantes.',
      D: 'Permitida exclusivamente em canais oficiais do administrador.',
    },
    correct: 'B',
    explanation:
      'É vedada a distribuição de cotas de clube de investimento por meio de serviços públicos de comunicação, como imprensa, rádio, televisão e páginas abertas ao público na internet, bem como por meio de envio de malas diretas (inclusive por correio eletrônico).',
    explanationWrong: {
      A: 'Não há essa permissão mediante autorização da B3 — a distribuição por esses meios é expressamente vedada, sem exceção por autorização.',
      C: 'O número de participantes do clube (entre 3 e 50) não altera essa vedação — ela se aplica a todos os clubes, independentemente do tamanho.',
      D: 'Mesmo canais oficiais do administrador, se caracterizados como "serviços públicos de comunicação" (páginas abertas ao público, por exemplo), estariam sujeitos à mesma vedação.',
    },
    examTip:
      'Regra literal do Guia (e do exemplo de questão do próprio capítulo): distribuição de cotas por mídia pública = SEMPRE vedada.',
    commonTrap:
      'Esta é uma das três questões-exemplo que o próprio Guia usa no capítulo — sinal de que é um ponto frequentemente cobrado em prova.',
    ...SRC('2. Visão geral dos clubes de investimento — Vedações', '340'),
  },
  {
    topic: 'Vedações e registro na B3',
    subtopic: 'Registro do clube',
    difficulty: 'medio',
    statement: 'O registro de um clube de investimento é realizado por meio do Sistema de Registro de Clube de Investimento, sendo o pedido de registro de responsabilidade:',
    options: {
      A: 'Do próprio administrador do clube.',
      B: 'Exclusivamente da CVM.',
      C: 'De cada cotista individualmente.',
      D: 'Do Banco Central do Brasil.',
    },
    correct: 'A',
    explanation:
      'O pedido de registro de clube de investimento deve ser realizado pelo administrador, por meio do Sistema de Registro de Clube de Investimento. A B3 registra o clube e o fiscaliza em conjunto com a CVM, após analisar a documentação fornecida pela corretora de valores escolhida.',
    explanationWrong: {
      B: 'A CVM fiscaliza em conjunto com a B3, mas quem efetivamente realiza o pedido de registro é o administrador do clube, não a CVM diretamente.',
      C: 'O pedido de registro não é feito por cada cotista individualmente — é uma responsabilidade centralizada do administrador do clube.',
      D: 'O Bacen não tem papel no registro de clubes de investimento — essa é uma atribuição do administrador, com registro e fiscalização pela B3 e CVM.',
    },
    examTip:
      'Quem PEDE o registro do clube = o administrador. Quem REGISTRA e FISCALIZA = a B3, em conjunto com a CVM.',
    commonTrap:
      'Não confunda "quem solicita" (administrador) com "quem registra/fiscaliza" (B3 e CVM) — são papéis complementares, mas distintos, no processo.',
    ...SRC('3. Clubes de investimento registrados na B3', '341'),
  },
  {
    topic: 'Vedações e registro na B3',
    subtopic: 'Custódia das cotas',
    difficulty: 'dificil',
    statement: 'As cotas de um clube de investimento registrado na B3 são mantidas:',
    options: {
      A: 'Em contas de depósito individualizadas na central depositária da B3, sob responsabilidade do custodiante.',
      B: 'Fisicamente, em papel, na sede do administrador.',
      C: 'Em contas conjuntas e indivisíveis, sem individualização por clube.',
      D: 'Diretamente no Bacen, como se fossem títulos públicos.',
    },
    correct: 'A',
    explanation:
      'As cotas de clube de investimento são mantidas em contas de depósito individualizadas na central depositária da B3, em nome do clube de investimento, sob a responsabilidade do custodiante.',
    explanationWrong: {
      B: 'As cotas não são mantidas fisicamente em papel — a central depositária da B3 opera com registro eletrônico (desmaterializado), como visto no Título I.',
      C: 'As contas são individualizadas por clube, não conjuntas e indivisíveis — cada clube tem sua própria conta de depósito na central depositária.',
      D: 'A custódia das cotas de clube de investimento é feita na central depositária da B3, não diretamente no Bacen (que trata de títulos públicos federais via Selic).',
    },
    examTip:
      'Cotas de clube = desmaterializadas, em conta individualizada na central depositária da B3, sob responsabilidade do custodiante — conecta diretamente com os conceitos do Título I sobre central depositária.',
    commonTrap:
      'Esse ponto conecta capítulos: a central depositária da B3 (vista no Título I) é a mesma estrutura usada para custodiar as cotas de clubes de investimento.',
    ...SRC('3. Clubes de investimento registrados na B3', '341'),
  },
];
