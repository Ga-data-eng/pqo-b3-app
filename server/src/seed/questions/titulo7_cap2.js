// Título VII - Central depositária
// Capítulo II - Processos da central depositária da B3
// Fonte: Guia Por Dentro da B3, páginas ~599-615.

export const chapterRef = { titleNumber: 'VII', chapterNumber: 'II' };

export const topics = [
  'Estrutura de contas da central depositária',
  'Guarda centralizada de ativos',
  'Registro de ônus e gravames',
  'Tratamento de eventos corporativos',
  'Voto a distância e informações',
];

const SRC = (section, page) => ({
  source_title: 'Guia Por Dentro da B3',
  source_chapter: 'Título VII, Capítulo II — Processos da central depositária da B3',
  source_section: section,
  source_page: page,
});

export const questions = [
  // ---------- Estrutura de contas ----------
  {
    topic: 'Estrutura de contas da central depositária',
    subtopic: 'Identificação das contas de depósito',
    difficulty: 'facil',
    statement: 'As contas de depósito na central depositária da B3 são identificadas e numeradas:',
    options: {
      A: 'apenas por agente de custódia.',
      B: 'apenas por comitente.',
      C: 'por agente de custódia e por comitente.',
      D: 'por agente de custódia, por comitente e por conta de ativos.',
    },
    correct: 'C',
    explanation:
      'As contas de depósito são identificadas e numeradas por agente de custódia e por comitente, sendo divididas em carteiras com características e finalidades específicas.',
    explanationWrong: {
      A: 'A identificação não se limita apenas ao agente de custódia — é necessária também a identificação do comitente titular.',
      B: 'A identificação não se limita apenas ao comitente — também é vinculada ao agente de custódia responsável.',
      D: '"Conta de ativos" não é um terceiro elemento de identificação nesse contexto — a identificação combina agente de custódia e comitente, dentro dos quais existem carteiras.',
    },
    examTip: 'Identificação da conta de depósito = Agente de Custódia + Comitente. Cada conta se divide em CARTEIRAS específicas.',
    commonTrap: null,
    ...SRC('Estrutura de contas da central depositária da B3', '599-600'),
  },
  {
    topic: 'Estrutura de contas da central depositária',
    subtopic: 'Múltiplas contas por comitente',
    difficulty: 'medio',
    statement: 'Em relação à titularidade de contas de depósito na central depositária da B3, é correto afirmar que:',
    options: {
      A: 'um comitente somente pode ser titular de uma única conta de depósito, independentemente do agente de custódia.',
      B: 'a critério do comitente e de seu agente de custódia, um mesmo comitente pode ser titular de mais de uma conta de depósito mantida por um mesmo agente de custódia, cada uma considerada independente.',
      C: 'apenas investidores institucionais podem ter mais de uma conta de depósito.',
      D: 'a abertura de uma segunda conta de depósito exige aprovação prévia da CVM.',
    },
    correct: 'B',
    explanation:
      'A critério do comitente e de seu respectivo agente de custódia, um mesmo comitente pode ser titular de uma ou mais contas de depósito mantidas por um mesmo agente de custódia e, nesse caso, cada conta de depósito será, para todos os fins, considerada como uma conta de depósito independente.',
    explanationWrong: {
      A: 'É o oposto: o comitente PODE ter mais de uma conta de depósito, a critério dele e do agente de custódia.',
      C: 'Não há restrição a investidores institucionais — qualquer comitente pode, a critério próprio e do agente de custódia, ter mais de uma conta.',
      D: 'A abertura de contas adicionais é uma decisão entre comitente e agente de custódia, sem exigência de aprovação prévia da CVM caso a caso.',
    },
    examTip: 'Um comitente PODE ter várias contas com o mesmo agente de custódia — cada uma tratada como independente "para todos os fins".',
    commonTrap: null,
    ...SRC('Estrutura de contas da central depositária da B3', '599-600'),
  },

  // ---------- Guarda centralizada de ativos ----------
  {
    topic: 'Guarda centralizada de ativos',
    subtopic: 'Atividades da guarda centralizada',
    difficulty: 'medio',
    statement: 'São atividades envolvidas no serviço de guarda centralizada de ativos prestado pela central depositária da B3, EXCETO:',
    options: {
      A: 'registro e controle dos saldos de ativos depositados.',
      B: 'movimentações de ativos.',
      C: 'registro de ônus, gravames, garantias e bloqueios incidentes sobre os ativos.',
      D: 'concessão de crédito lastreado nos ativos em custódia.',
    },
    correct: 'D',
    explanation:
      'As atividades da guarda centralizada são: registro e controle dos saldos de ativos; controle da titularidade; movimentações de ativos; tratamento de eventos corporativos; registro de ônus, gravames, garantias e bloqueios; e conciliação entre os saldos da central depositária e os saldos mantidos pelos emissores/escrituradores. Concessão de crédito não é uma dessas atividades.',
    explanationWrong: {
      A: 'É uma das atividades expressamente listadas para a guarda centralizada.',
      B: 'As movimentações de ativos também são uma das atividades centrais da guarda centralizada.',
      C: 'O registro de ônus, gravames, garantias e bloqueios é uma das atividades expressamente listadas.',
    },
    examTip: 'Guarda centralizada: registro/controle de saldo + titularidade + movimentação + eventos corporativos + ônus/gravames + conciliação. NÃO inclui concessão de crédito.',
    commonTrap: null,
    ...SRC('Guarda centralizada de ativos', '600-601'),
  },
  {
    topic: 'Guarda centralizada de ativos',
    subtopic: 'Controle sintético x analítico',
    difficulty: 'dificil',
    statement: 'O controle de saldos que guarda as informações de data e custo de aquisição do ativo, utilizado para fins de cálculo tributário e recolhimento de Imposto de Renda, é denominado controle:',
    options: {
      A: 'sintético.',
      B: 'analítico.',
      C: 'fiduciário.',
      D: 'consolidado.',
    },
    correct: 'B',
    explanation:
      'O controle analítico de saldos é utilizado para ativos que necessitem guardar as informações de data e custo de aquisição, auxiliares para que o emissor, o escriturador ou o agente de custódia possam realizar o cálculo tributário e recolhimento de Imposto de Renda.',
    explanationWrong: {
      A: 'O controle sintético é realizado para TODOS os ativos e apresenta a quantidade de forma CONSOLIDADA, independentemente da data e do custo de aquisição — o oposto do controle analítico.',
      C: '"Fiduciário" não é uma modalidade de controle de saldos — é o REGIME de titularidade sob o qual os ativos ficam registrados em nome da B3 perante o emissor.',
      D: '"Consolidado" descreve melhor a característica do controle SINTÉTICO, não do analítico.',
    },
    examTip: 'Sintético = quantidade total, sem data/custo (todos os ativos). Analítico = guarda data e custo de aquisição (para fins de IR).',
    commonTrap: '⚠️ Pegadinha clássica: trocar sintético por analítico — lembre "Analítico = Analisa data/custo (para Imposto de Renda)".',
    ...SRC('Registro e controle dos saldos de ativos', '602'),
  },
  {
    topic: 'Guarda centralizada de ativos',
    subtopic: 'Depósito de ativos',
    difficulty: 'dificil',
    statement: 'A finalização do processo de depósito de ativos na central depositária da B3 está condicionada:',
    options: {
      A: 'à transferência dos ativos da titularidade do comitente para a titularidade fiduciária da B3 nos registros mantidos pelo emissor ou escriturador.',
      B: 'ao pagamento de uma taxa de ingresso pelo comitente diretamente à CVM.',
      C: 'à aprovação prévia do Bacen para cada depósito individual.',
      D: 'à conversão do ativo em título ao portador.',
    },
    correct: 'A',
    explanation:
      'A finalização do processo de depósito está condicionada à transferência dos ativos da titularidade do comitente para a titularidade FIDUCIÁRIA da B3 nos registros mantidos pelo emissor, ou por escriturador por ele contratado. A efetivação do depósito implica registro da titularidade dos ativos em conta de depósito, mantida pelo agente de custódia, em nome do comitente.',
    explanationWrong: {
      B: 'Não há exigência de pagamento de taxa diretamente à CVM para a finalização do depósito — o processo é técnico/registral, via emissor/escriturador.',
      C: 'Não há exigência de aprovação prévia do Bacen para cada depósito individual de ativos.',
      D: 'Não há conversão do ativo em título ao portador — pelo contrário, os ativos permanecem desmaterializados e escriturais, identificados nominalmente.',
    },
    examTip: 'Depósito de ativos = transferência para titularidade FIDUCIÁRIA da B3 (nos registros do emissor/escriturador) — mas o ativo continua registrado em NOME do comitente na conta de depósito.',
    commonTrap: '⚠️ Não confunda: a titularidade fiduciária é perante o EMISSOR/escriturador; perante o comitente, o ativo continua sendo dele, registrado na conta de depósito mantida pelo agente de custódia.',
    ...SRC('Movimentações de ativos', '603-604'),
  },
  {
    topic: 'Guarda centralizada de ativos',
    subtopic: 'Liquidação de ETFs',
    difficulty: 'prova',
    statement: 'A emissão e o cancelamento de cotas de ETFs, operacionalizados pela central depositária da B3, podem ser liquidados:',
    options: {
      A: 'apenas pela liquidação bruta, sem qualquer garantia da B3.',
      B: 'apenas pela liquidação pelo saldo líquido multilateral, sempre com garantia da B3.',
      C: 'tanto pela liquidação bruta (sem garantia) quanto pela liquidação pelo saldo líquido multilateral (com garantia da B3 como contraparte central).',
      D: 'exclusivamente em moeda estrangeira, dado seu caráter de fundo indexado.',
    },
    correct: 'C',
    explanation:
      'As operações de ETFs podem ser liquidadas por meio da liquidação bruta (sem a garantia de liquidação por parte da B3) ou por meio da liquidação pelo saldo líquido multilateral (com a garantia de liquidação da operação pela B3, atuando como contraparte central), dependendo do modelo de emissão/cancelamento de cotas.',
    explanationWrong: {
      A: 'Não é exclusivo à liquidação bruta — há também a modalidade com garantia (saldo líquido multilateral).',
      B: 'Não é exclusivo à modalidade com garantia — a liquidação bruta também é uma opção prevista para ETFs.',
      D: 'Não há exigência de liquidação em moeda estrangeira para ETFs — a liquidação segue as regras normais da câmara, em moeda nacional.',
    },
    examTip: 'ETFs podem usar AMBOS os modelos de liquidação (bruta ou saldo líquido multilateral) — depende do modelo de emissão/cancelamento de cotas oferecido.',
    commonTrap: null,
    ...SRC('Fundos de índice e certificados de depósito', '604-605'),
  },

  // ---------- Registro de ônus e gravames ----------
  {
    topic: 'Registro de ônus e gravames',
    subtopic: 'Indisponibilidade de bens',
    difficulty: 'dificil',
    statement: 'A estrutura destinada a atender determinação de autoridade judicial ou administrativa competente, implicando a vedação da alienação, transferência e constituição de ônus e gravame sobre o ativo depositado, é denominada:',
    options: {
      A: 'bloqueio de lastro de operações compromissadas.',
      B: 'indisponibilidade de bens, direitos e obrigações.',
      C: 'alienação fiduciária.',
      D: 'reserva técnica.',
    },
    correct: 'B',
    explanation:
      'A indisponibilidade de bens, direitos e obrigações é a estrutura destinada a atender determinação de autoridade judicial ou administrativa competente, implicando a vedação da alienação, transferência e constituição de ônus e gravame sobre o ativo depositado na central depositária da B3.',
    explanationWrong: {
      A: 'O bloqueio de lastro de operações compromissadas serve para bloquear ativos que sirvam de lastro de operações compromissadas — finalidade diferente e específica.',
      C: 'A alienação fiduciária é destinada a receber ativos alienados fiduciariamente por instrumento firmado entre comitentes — não decorre diretamente de determinação judicial/administrativa como a indisponibilidade.',
      D: 'A reserva técnica é destinada a manter ativos objeto de provisões técnicas para visibilidade e controle de autarquias competentes — finalidade diferente (ex.: seguradoras/EFPC), não vedação por decisão judicial.',
    },
    examTip: 'Indisponibilidade = determinação JUDICIAL/ADMINISTRATIVA que veda alienação/transferência/ônus sobre o ativo.',
    commonTrap: null,
    ...SRC('Registro de ônus e gravames', '605-608'),
  },
  {
    topic: 'Registro de ônus e gravames',
    subtopic: 'Gravame universal',
    difficulty: 'dificil',
    statement: 'A estrutura de gravame que permite ao comitente devedor ou credor incluir ou excluir ativos na conta de depósito, por duplo comando em sistema, sem necessidade de alteração ao instrumento contratual registrado, é denominada:',
    options: {
      A: 'penhor.',
      B: 'usufruto.',
      C: 'gravame universal.',
      D: 'cessão fiduciária.',
    },
    correct: 'C',
    explanation:
      'O gravame universal é a estrutura destinada a receber, de forma universal, ativos objeto de gravame constituído como alienação fiduciária, usufruto ou penhor, permitindo que o comitente devedor ou credor, conforme acordado, inclua ou exclua ativos na conta de depósito, a qualquer tempo, por duplo comando em sistema, sem necessidade de alterações ao instrumento contratual registrado.',
    explanationWrong: {
      A: 'O penhor é a estrutura destinada a receber ativos que tenham sido objeto de penhor formalizado por instrumento específico — não tem a característica de flexibilidade de inclusão/exclusão sem alteração contratual.',
      B: 'O usufruto recebe ativos dados em usufruto por instrumento específico — não é a estrutura com a flexibilidade descrita na questão.',
      D: 'A cessão fiduciária recebe direitos creditórios relativos a resultado positivo de derivativos cedidos fiduciariamente — finalidade específica e diferente.',
    },
    examTip: 'Gravame universal = a característica marcante é a FLEXIBILIDADE de incluir/excluir ativos por duplo comando, sem mexer no contrato registrado.',
    commonTrap: null,
    ...SRC('Registro de ônus e gravames', '605-608'),
  },

  // ---------- Tratamento de eventos corporativos ----------
  {
    topic: 'Tratamento de eventos corporativos',
    subtopic: 'Titularidade dos ativos da câmara/sistema externo',
    difficulty: 'prova',
    statement: 'Em relação ao tratamento de eventos corporativos de ativos mantidos em contas específicas da câmara ou de sistemas externos, é correto afirmar que:',
    options: {
      A: 'esses ativos não recebem qualquer tratamento de eventos corporativos, por não pertencerem a um comitente identificado.',
      B: 'recebem o mesmo tratamento de eventos corporativos dos ativos mantidos nas contas de depósito dos comitentes, sendo a câmara ou a infraestrutura de mercado considerada titular dos ativos.',
      C: 'só recebem tratamento de eventos corporativos mediante autorização expressa e individual da CVM.',
      D: 'têm tratamento de eventos corporativos exclusivo, sempre mais vantajoso do que o dos comitentes comuns.',
    },
    correct: 'B',
    explanation:
      'Os ativos mantidos em contas específicas da câmara ou de sistemas externos têm o mesmo tratamento de eventos corporativos dos ativos mantidos nas contas de depósito dos comitentes, sendo que, nesse caso, a câmara ou a infraestrutura de mercado é considerada titular dos ativos.',
    explanationWrong: {
      A: 'É o oposto: esses ativos recebem tratamento normal de eventos corporativos, apenas com a câmara/infraestrutura de mercado no papel de titular.',
      C: 'Não há exigência de autorização individual da CVM para cada evento — o tratamento segue o fluxo normal, equiparando a câmara/sistema externo a um titular comum.',
      D: 'Não há tratamento privilegiado ou "mais vantajoso" — o tratamento é o MESMO dado aos ativos de comitentes comuns.',
    },
    examTip: 'Ativos em contas da câmara/sistema externo: MESMO tratamento de eventos corporativos, só muda quem é considerado "titular" (a câmara/sistema, não um comitente).',
    commonTrap: null,
    ...SRC('Tratamento de eventos corporativos', '609'),
  },
  {
    topic: 'Tratamento de eventos corporativos',
    subtopic: 'Eventos corporativos voluntários',
    difficulty: 'medio',
    statement: 'São exemplos de eventos corporativos voluntários, entre outros:',
    options: {
      A: 'dividendos e juros sobre capital próprio.',
      B: 'grupamentos e desdobramentos.',
      C: 'subscrições, dissidências ou recessos e conversões voluntárias.',
      D: 'fusões e incorporações.',
    },
    correct: 'C',
    explanation:
      'São exemplos de eventos corporativos voluntários: subscrições, dissidências ou recessos e conversões voluntárias — eventos em que o comitente titular do ativo tem a OPÇÃO de escolher se deseja exercer o evento corporativo.',
    explanationWrong: {
      A: 'Dividendos e JCP são exemplos de eventos corporativos EM RECURSOS FINANCEIROS — resultam em pagamento, não em uma escolha do comitente sobre exercer ou não.',
      B: 'Grupamentos e desdobramentos são exemplos de eventos corporativos EM ATIVOS (sem opção do comitente) — ocorrem automaticamente por deliberação do emissor.',
      D: 'Fusões e incorporações também são exemplos de eventos corporativos EM ATIVOS — não dão opção ao comitente, ocorrem por deliberação do emissor.',
    },
    examTip: 'Voluntário = o comitente ESCOLHE se exerce (subscrição, recesso, conversão voluntária). Os demais (recursos financeiros / ativos) ocorrem automaticamente.',
    commonTrap: '⚠️ Muito cobrado — memorize pelo menos um exemplo-âncora de cada categoria de evento corporativo.',
    ...SRC('Eventos corporativos voluntários', '610'),
  },

  // ---------- Voto a distância e informações ----------
  {
    topic: 'Voto a distância e informações',
    subtopic: 'Voto a distância — obrigatoriedade',
    difficulty: 'dificil',
    statement: 'A prestação do serviço de voto a distância pela central depositária da B3, em relação aos agentes de custódia, é:',
    options: {
      A: 'obrigatória para todos os agentes de custódia, sem exceção.',
      B: 'facultativa aos agentes de custódia, conforme legislação vigente.',
      C: 'obrigatória apenas para agentes de custódia de instituições financeiras de grande porte.',
      D: 'vedada pela legislação em vigor.',
    },
    correct: 'B',
    explanation:
      'A prestação do serviço de voto a distância é facultativa aos agentes de custódia, conforme legislação vigente — cada agente de custódia decide se disponibiliza ou não esse serviço aos seus comitentes.',
    explanationWrong: {
      A: 'Não é obrigatória para todos, sem exceção — a legislação estabelece a facultatividade.',
      C: 'Não há distinção por porte da instituição para tornar a prestação obrigatória — a regra geral é a facultatividade.',
      D: 'O serviço não é vedado — pelo contrário, é expressamente permitido e disponibilizado pela central depositária, apenas de forma facultativa para o agente de custódia.',
    },
    examTip: 'Voto a distância: central depositária DISPONIBILIZA a infraestrutura, mas o agente de custódia decide se OFERECE ao comitente (facultativo).',
    commonTrap: null,
    ...SRC('Voto a distância', '611'),
  },
  {
    topic: 'Voto a distância e informações',
    subtopic: 'Notificações (alertas)',
    difficulty: 'medio',
    statement: 'As notificações ("alertas") geradas pela B3 em relação a eventos ocorridos nos ativos depositados são enviadas:',
    options: {
      A: 'em D+0, exclusivamente por correio eletrônico.',
      B: 'em D+1 da ocorrência do evento, por SMS, correio eletrônico ou informativo impresso.',
      C: 'em D+5, apenas por informativo impresso.',
      D: 'somente mediante solicitação expressa e individual do comitente para cada evento.',
    },
    correct: 'B',
    explanation:
      'As notificações são geradas pela B3 em D+1 da ocorrência do evento, por meio de mensagens eletrônicas SMS, correio eletrônico ou informativo impresso. Todas as contas com telefone celular cadastrado pelo agente de custódia são habilitadas a receber esses informativos por SMS, salvo se o comitente desabilitar essa opção na Área do Investidor B3.',
    explanationWrong: {
      A: 'O prazo não é D+0, e o canal não é exclusivamente correio eletrônico — o prazo é D+1, com múltiplos canais possíveis.',
      C: 'O prazo correto é D+1, não D+5, e o canal não se limita a informativo impresso.',
      D: 'Não há exigência de solicitação individual para cada evento — o envio é automático (por padrão via SMS, se houver telefone cadastrado), podendo o comitente apenas desabilitar essa opção.',
    },
    examTip: 'Notificações: D+1 do evento, via SMS/e-mail/impresso — SMS é padrão automático (se houver celular cadastrado), desabilitável pelo comitente na Área do Investidor.',
    commonTrap: null,
    ...SRC('Notificações ("alertas")', '612'),
  },
];
