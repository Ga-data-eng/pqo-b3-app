// Título VII - Central depositária
// Capítulo I - Central depositária da B3
// Fonte: Guia Por Dentro da B3, páginas ~582-598.

export const chapterRef = { titleNumber: 'VII', chapterNumber: 'I' };

export const topics = [
  'A central depositária da B3',
  'Ativos passíveis de depósito',
  'Participantes da central depositária',
  'Infraestrutura tecnológica e medidas de emergência',
  'Custos, encargos e sanções',
];

const SRC = (section, page) => ({
  source_title: 'Guia Por Dentro da B3',
  source_chapter: 'Título VII, Capítulo I — Central depositária da B3',
  source_section: section,
  source_page: page,
});

export const questions = [
  // ---------- A central depositária ----------
  {
    topic: 'A central depositária da B3',
    subtopic: 'Desmaterialização dos ativos',
    difficulty: 'medio',
    statement: 'No Segmento Listado B3, os ativos guardados na central depositária são inteiramente desmaterializados, o que significa que:',
    options: {
      A: 'os ativos são impressos fisicamente e mantidos em cofre físico da B3.',
      B: 'o registro das posições é feito em formato eletrônico (book entry), assim como suas movimentações e eventos corporativos.',
      C: 'apenas parte dos ativos possui registro eletrônico, sendo o restante mantido em papel.',
      D: 'os ativos deixam de existir juridicamente até serem resgatados pelo comitente.',
    },
    correct: 'B',
    explanation:
      'A desmaterialização significa que o registro das posições é feito em formato eletrônico (book entry), assim como o registro de todas as movimentações de custódia e de todas as atualizações de eventos corporativos incidentes sobre esses ativos — não há suporte físico (cautelas/certificados em papel).',
    explanationWrong: {
      A: 'É exatamente o oposto do conceito de desmaterialização — não há suporte físico impresso mantido em cofre.',
      C: 'A desmaterialização é INTEIRA no Segmento Listado B3, não parcial — todo o registro é eletrônico.',
      D: 'Os ativos continuam existindo juridicamente de forma plena — a desmaterialização é apenas sobre a FORMA de registro (eletrônica), não sobre a existência do direito.',
    },
    examTip: 'Desmaterializado = SEM papel, tudo em registro eletrônico (book entry) — inclui posições, movimentações e eventos corporativos.',
    commonTrap: null,
    ...SRC('A central depositária da B3', '583'),
  },
  {
    topic: 'A central depositária da B3',
    subtopic: 'Principais atividades',
    difficulty: 'facil',
    statement: 'São atividades principais da central depositária da B3, EXCETO:',
    options: {
      A: 'guarda centralizada de valores mobiliários e ativos financeiros.',
      B: 'controle da titularidade dos ativos em estrutura de contas de depósito.',
      C: 'tratamento dos eventos corporativos que acompanham o ciclo de vida do ativo.',
      D: 'concessão de crédito para aquisição de valores mobiliários pelos comitentes.',
    },
    correct: 'D',
    explanation:
      'As principais atividades da central depositária são: guarda centralizada de valores mobiliários e ativos financeiros; controle da titularidade dos ativos em estrutura de contas de depósito; processamento das movimentações de custódia; e tratamento dos eventos corporativos. Concessão de crédito não é atividade da central depositária.',
    explanationWrong: {
      A: 'A guarda centralizada é justamente uma das atividades principais e centrais da central depositária.',
      B: 'O controle de titularidade em estrutura de contas de depósito é uma das atividades expressamente listadas.',
      C: 'O tratamento de eventos corporativos também é uma das atividades principais listadas para a central depositária.',
    },
    examTip: 'Central depositária: guarda + controle de titularidade + movimentação de custódia + eventos corporativos. NÃO concede crédito.',
    commonTrap: null,
    ...SRC('A central depositária da B3', '582-583'),
  },

  // ---------- Ativos passíveis de depósito ----------
  {
    topic: 'Ativos passíveis de depósito',
    subtopic: 'Ativos não integram patrimônio da B3',
    difficulty: 'prova',
    statement: 'Os ativos depositados na central depositária da B3:',
    options: {
      A: 'integram o patrimônio da B3, podendo ser utilizados livremente por ela.',
      B: 'não integram o patrimônio da B3, permanecendo registrados em conta de depósito em nome do comitente.',
      C: 'passam à titularidade do agente de custódia contratado pelo comitente.',
      D: 'tornam-se propriedade conjunta da B3 e do emissor.',
    },
    correct: 'B',
    explanation:
      'Os ativos depositados não integram o patrimônio da B3, permanecendo registrados em conta de depósito em nome do comitente — ponto expressamente destacado no guia ("Importante!"), essencial para a proteção do investidor.',
    explanationWrong: {
      A: 'É o oposto: os ativos NÃO integram o patrimônio da B3 — ela apenas presta o serviço de guarda centralizada e controle de titularidade.',
      C: 'O agente de custódia presta o serviço de custódia, mas não se torna titular dos ativos — a titularidade permanece do comitente.',
      D: 'Não há copropriedade entre B3 e emissor — os ativos são registrados em nome do próprio comitente.',
    },
    examTip: 'Ativos depositados NUNCA integram o patrimônio da B3 — permanecem sempre em nome do COMITENTE. Isso protege o investidor mesmo em eventual crise da B3.',
    commonTrap: '⚠️ Ponto de destaque explícito no guia — muito cobrado literalmente em prova.',
    ...SRC('Ativos passíveis de depósito', '584'),
  },
  {
    topic: 'Ativos passíveis de depósito',
    subtopic: 'Elegibilidade ao depósito',
    difficulty: 'dificil',
    statement: 'São elegíveis ao depósito na central depositária da B3:',
    options: {
      A: 'apenas ativos admitidos à negociação, emitidos por emissores listados.',
      B: 'ativos admitidos à negociação (emissores listados ou dispensados de listagem), ativos não admitidos à negociação (emissores cadastrados) e ouro ativo financeiro.',
      C: 'exclusivamente ouro ativo financeiro e derivativos agropecuários.',
      D: 'apenas títulos públicos federais registrados no SELIC.',
    },
    correct: 'B',
    explanation:
      'São elegíveis ao depósito na central depositária da B3: (I) ativos admitidos à negociação, emitidos por emissores listados ou dispensados de listagem; (II) ativos não admitidos à negociação, emitidos por emissores cadastrados; e (III) ouro ativo financeiro.',
    explanationWrong: {
      A: 'A elegibilidade é mais ampla — inclui também emissores dispensados de listagem, ativos não admitidos à negociação (emissores cadastrados) e ouro ativo financeiro.',
      C: 'A elegibilidade não se restringe a ouro e derivativos agropecuários — abrange uma gama muito mais ampla de ativos e valores mobiliários.',
      D: 'Títulos públicos federais no SELIC não são o objeto central de elegibilidade da central depositária da B3, que trata de valores mobiliários e ativos financeiros em geral, incluindo ouro.',
    },
    examTip: 'Elegibilidade: (1) admitidos à negociação — listados ou dispensados, (2) não admitidos — só cadastrados, (3) ouro ativo financeiro.',
    commonTrap: null,
    ...SRC('Ativos passíveis de depósito', '584-585'),
  },
  {
    topic: 'Ativos passíveis de depósito',
    subtopic: 'Limites de responsabilidade da B3',
    difficulty: 'dificil',
    statement: 'Em relação à responsabilidade da B3 quanto aos ativos depositados na central depositária, é correto afirmar que a B3 NÃO responde:',
    options: {
      A: 'pela guarda centralizada dos ativos.',
      B: 'pelo controle de titularidade dos ativos.',
      C: 'pelo cumprimento das obrigações originárias do emissor de resgatar o principal e os acessórios dos ativos.',
      D: 'pelo tratamento dos eventos corporativos incidentes sobre os ativos.',
    },
    correct: 'C',
    explanation:
      'A B3 não responde pelo cumprimento das obrigações originárias do emissor (e, conforme o caso, do escriturador por ele contratado) de resgatar o principal e os acessórios dos ativos mantidos em sua central depositária, nem pela obrigação do fundidor de ouro de garantir o teor de pureza do ouro.',
    explanationWrong: {
      A: 'A guarda centralizada é justamente uma responsabilidade e atividade central da B3 como central depositária.',
      B: 'O controle de titularidade também é uma responsabilidade central da B3 nessa função — não está entre as exceções.',
      D: 'O tratamento de eventos corporativos é atividade central desempenhada pela B3, não uma exceção de responsabilidade.',
    },
    examTip: 'A B3 é responsável pela GUARDA/controle/eventos, mas NÃO pelo cumprimento das obrigações do EMISSOR de honrar o ativo (resgatar principal/acessórios) — risco de crédito do emissor não é da B3.',
    commonTrap: '⚠️ Pegadinha importante: a B3 é depositária, não garantidora do crédito do emissor.',
    ...SRC('Ativos passíveis de depósito', '585-586'),
  },

  // ---------- Participantes ----------
  {
    topic: 'Participantes da central depositária',
    subtopic: 'Sistema externo',
    difficulty: 'medio',
    statement: 'O participante detentor de autorização de acesso para uso da central depositária da B3, classificado como uma infraestrutura de mercado, é denominado:',
    options: {
      A: 'agente de custódia.',
      B: 'sistema externo.',
      C: 'escriturador.',
      D: 'liquidante.',
    },
    correct: 'B',
    explanation:
      'O sistema externo é a infraestrutura de mercado detentora de autorização de acesso para uso da central depositária da B3, responsável por cumprir e fazer cumprir os normativos da B3 e a legislação em vigor, bem como prazos, termos e condições determinados pela central depositária.',
    explanationWrong: {
      A: 'O agente de custódia é o participante autorizado para custódia PERANTE a central depositária, exercendo atividade voltada aos interesses dos comitentes — não é uma infraestrutura de mercado externa.',
      C: 'O escriturador é a instituição contratada pelo EMISSOR para prestar serviço de escrituração — papel diferente do sistema externo.',
      D: 'O liquidante utiliza sua conta reservas bancárias para efetuar pagamentos relativos à liquidação de eventos corporativos — não é uma infraestrutura de mercado.',
    },
    examTip: 'Sistema externo = OUTRA infraestrutura de mercado que acessa a central depositária da B3 — não confundir com agente de custódia (que atende diretamente comitentes).',
    commonTrap: null,
    ...SRC('Participantes da central depositária', '587'),
  },
  {
    topic: 'Participantes da central depositária',
    subtopic: 'Fundidor de ouro',
    difficulty: 'dificil',
    statement: 'A instituição credenciada pela B3, responsável pela produção dos lingotes de ouro objeto do ouro ativo financeiro, que deve emitir certificado de teor de pureza e peso e manter controles de qualidade, é denominada:',
    options: {
      A: 'depositário de ouro.',
      B: 'fundidor de ouro.',
      C: 'liquidante.',
      D: 'emissor.',
    },
    correct: 'B',
    explanation:
      'O fundidor de ouro é a instituição credenciada pela B3, responsável pela produção dos lingotes de ouro em conformidade com os padrões de peso e teor de pureza estabelecidos pela central depositária, devendo identificar os lingotes produzidos, emitir certificado de teor de pureza e peso e manter controles de qualidade.',
    explanationWrong: {
      A: 'O depositário de ouro é responsável pelo RECEBIMENTO, GUARDA e CONSERVAÇÃO dos lingotes já produzidos — não pela sua produção/fundição.',
      C: 'O liquidante utiliza conta reservas bancárias para pagamentos relativos à liquidação de eventos corporativos — não tem relação com a produção de lingotes.',
      D: 'O emissor é o responsável pela existência, integridade e obrigações do ativo emitido de forma geral — papel diferente e mais amplo do que a produção física de lingotes de ouro.',
    },
    examTip: 'Fundidor de ouro = PRODUZ os lingotes (emite certificado de pureza/peso). Depositário de ouro = GUARDA os lingotes já prontos.',
    commonTrap: '⚠️ Não confunda "fundidor" (produz) com "depositário" (guarda) — são papéis sequenciais e distintos na cadeia do ouro ativo financeiro.',
    ...SRC('Participantes da central depositária', '588-589'),
  },
  {
    topic: 'Participantes da central depositária',
    subtopic: 'Direitos do comitente',
    difficulty: 'medio',
    statement: 'São direitos do comitente perante a central depositária da B3, EXCETO:',
    options: {
      A: 'receber informações atualizadas sobre seus ativos depositados.',
      B: 'ter o sigilo mantido sobre as informações relacionadas a seus ativos depositados.',
      C: 'exigir a revelação de informações de sigilo de outros comitentes para fins de comparação de rentabilidade.',
      D: 'ter suas informações reveladas apenas nas hipóteses previstas em lei ou por determinação de órgãos reguladores/judiciais.',
    },
    correct: 'C',
    explanation:
      'São direitos do comitente: receber informações atualizadas sobre seus ativos e ter o sigilo mantido pela central depositária e pelo agente de custódia sobre suas próprias informações, reveladas apenas nas hipóteses legais ou por determinação de órgãos reguladores/judiciais. Não há direito de exigir a quebra de sigilo de OUTROS comitentes.',
    explanationWrong: {
      A: 'Esse é, sim, um direito expresso do comitente — receber informações atualizadas sobre os próprios ativos depositados.',
      B: 'Também é um direito expresso — manutenção do sigilo sobre as próprias informações do comitente.',
      D: 'Essa é justamente a regra correta sobre quando o sigilo pode ser quebrado — reflete o direito ao sigilo, com as exceções legais previstas.',
    },
    examTip: 'Direitos do comitente: informação atualizada + sigilo (com exceções legais/regulatórias/judiciais) — sempre sobre os PRÓPRIOS ativos, nunca de terceiros.',
    commonTrap: null,
    ...SRC('Participantes da central depositária', '590'),
  },

  // ---------- Infraestrutura tecnológica e medidas de emergência ----------
  {
    topic: 'Infraestrutura tecnológica e medidas de emergência',
    subtopic: 'Unidade de contingência externa',
    difficulty: 'medio',
    statement: 'A B3 garante a continuidade de suas atividades como central depositária, em caso de desastre no centro de processamento de dados principal, por meio de:',
    options: {
      A: 'contrato de seguro específico com seguradoras internacionais.',
      B: 'unidade de contingência externa, aparelhada com os mesmos sistemas, nobreaks e geradores do centro principal.',
      C: 'suspensão total das atividades até restabelecimento do centro principal, sem alternativa técnica.',
      D: 'transferência definitiva da custódia dos ativos para outra jurisdição.',
    },
    correct: 'B',
    explanation:
      'A B3 possui unidade de contingência externa, aparelhada com os mesmos sistemas do centro de processamento de dados principal, nobreaks e geradores de energia, com interligação que permite a produção de cópia dos dados em tempo real entre os centros — garantindo a continuidade das atividades da central depositária.',
    explanationWrong: {
      A: 'Não se trata de um seguro contratado — é uma solução técnica de infraestrutura redundante (unidade de contingência espelhada).',
      C: 'A B3 busca justamente EVITAR a suspensão total, retomando as atividades por meio da unidade de contingência externa.',
      D: 'Não há previsão de transferência definitiva da custódia para outra jurisdição — a continuidade é assegurada pela própria estrutura redundante da B3.',
    },
    examTip: 'Mesmo padrão de continuidade visto em outros capítulos: infraestrutura espelhada (mesmos sistemas/nobreaks/geradores), com cópia de dados em tempo real.',
    commonTrap: null,
    ...SRC('Infraestrutura tecnológica', '590-591'),
  },
  {
    topic: 'Infraestrutura tecnológica e medidas de emergência',
    subtopic: 'Efeitos das medidas de emergência',
    difficulty: 'dificil',
    statement: 'A aplicação de medidas de emergência pela B3, na qualidade de central depositária:',
    options: {
      A: 'dispensa integralmente os participantes do cumprimento de suas obrigações enquanto durar a emergência.',
      B: 'não dispensa ou exonera os participantes do cumprimento de obrigações, especialmente as referentes à cadeia de responsabilidades.',
      C: 'transfere automaticamente todas as responsabilidades para a CVM.',
      D: 'somente pode ser aplicada mediante prévia autorização do Poder Judiciário.',
    },
    correct: 'B',
    explanation:
      'A aplicação de qualquer medida de emergência não dispensa ou exonera os participantes do cumprimento de obrigações, especialmente aqueles referentes à cadeia de responsabilidades, conforme previsto nos regulamentos da B3.',
    explanationWrong: {
      A: 'É o oposto: as obrigações dos participantes permanecem, mesmo com a medida de emergência em vigor.',
      C: 'Não há transferência de responsabilidades para a CVM — a cadeia de responsabilidades dos participantes permanece intacta, apenas com ajustes operacionais (horário, interrupção etc.).',
      D: 'A instauração do regime de contingência é decidida pelo diretor-presidente da B3, com prévio aviso aos órgãos reguladores — não depende de autorização judicial prévia.',
    },
    examTip: 'Medida de emergência ajusta a OPERAÇÃO (horário, interrupção), mas NÃO isenta ninguém das obrigações da cadeia de responsabilidades.',
    commonTrap: '⚠️ Pegadinha: achar que "emergência" significa suspensão de responsabilidades — na verdade é o oposto, as obrigações continuam valendo.',
    ...SRC('Medidas de emergência', '592'),
  },

  // ---------- Custos, encargos e sanções ----------
  {
    topic: 'Custos, encargos e sanções',
    subtopic: 'Responsabilidade pelo pagamento de custos e encargos',
    difficulty: 'prova',
    statement: 'Em relação ao pagamento de custos e encargos cobrados pela central depositária da B3, é correto afirmar que:',
    options: {
      A: 'os custos são sempre pagos pela B3, e os encargos, pelo comitente final.',
      B: 'os custos são de responsabilidade do participante que utilizou os serviços da central depositária, e os encargos, do participante que deu causa à sua incidência.',
      C: 'custos e encargos são sempre pagos, em partes iguais, por todos os participantes cadastrados.',
      D: 'apenas o emissor do ativo é responsável pelo pagamento de custos e encargos.',
    },
    correct: 'B',
    explanation:
      'No caso dos custos, o pagamento é de responsabilidade do participante que tiver utilizado os serviços da central depositária da B3, observados os critérios de repartição por ela estabelecidos; no caso dos encargos, do participante que tiver dado causa à sua incidência.',
    explanationWrong: {
      A: 'Não é a B3 quem paga os custos — é o participante que utilizou o serviço; e os encargos recaem sobre quem deu causa, não necessariamente o comitente final.',
      C: 'Não há rateio igualitário entre todos os participantes — a responsabilidade é individualizada, conforme o uso do serviço (custos) ou a causa (encargos).',
      D: 'A responsabilidade não é exclusiva do emissor — depende de quem utilizou o serviço (custos) ou deu causa à incidência (encargos).',
    },
    examTip: 'Custos = quem USOU o serviço. Encargos = quem DEU CAUSA à incidência. Critérios diferentes para cada um.',
    commonTrap: null,
    ...SRC('Custos e encargos', '593-594'),
  },
  {
    topic: 'Custos, encargos e sanções',
    subtopic: 'Sanções — poderes da B3',
    difficulty: 'medio',
    statement: 'Sem prejuízo da competência da BSM para apurar e punir infrações ao regulamento da central depositária da B3, a própria B3 pode:',
    options: {
      A: 'aplicar advertências, multas e restrições, além de suspender ou cancelar autorização de acesso, comunicando o fato ao Bacen e à CVM.',
      B: 'apenas emitir recomendações não vinculantes, sem qualquer poder sancionatório próprio.',
      C: 'aplicar exclusivamente sanções penais, mediante denúncia ao Ministério Público.',
      D: 'delegar toda e qualquer sanção obrigatoriamente à CVM, sem competência própria.',
    },
    correct: 'A',
    explanation:
      'Sem prejuízo da competência da BSM, a B3 poderá punir as infrações, por exemplo, aplicando advertências, multas e restrições. A B3 pode ainda suspender ou cancelar a autorização de acesso do participante, comunicando o fato ao Bacen e à CVM.',
    explanationWrong: {
      B: 'A B3 tem sim poder sancionatório próprio (advertências, multas, restrições, suspensão/cancelamento de acesso) — não se limita a recomendações não vinculantes.',
      C: 'A B3 não aplica sanções penais — atua no âmbito administrativo/regulatório de sua autorregulação, complementarmente à BSM.',
      D: 'A B3 tem competência sancionatória própria, que coexiste (sem prejuízo) com a competência da BSM — não há delegação obrigatória e exclusiva à CVM.',
    },
    examTip: 'B3 (central depositária) pode: advertência, multa, restrição, suspensão/cancelamento de acesso — sempre comunicando Bacen e CVM, e sem prejuízo da competência da BSM.',
    commonTrap: null,
    ...SRC('Sanções', '594-595'),
  },
];
