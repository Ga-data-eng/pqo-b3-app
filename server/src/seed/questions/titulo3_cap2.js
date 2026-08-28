// Título III - Estrutura de contas e cadastro
// Capítulo II - Cadastro de investidores não residentes
// Fonte: Guia Por Dentro da B3, páginas 420-427.

export const chapterRef = { titleNumber: 'III', chapterNumber: 'II' };

export const topics = [
  'Conceitos e regras gerais',
  'Representante legal, fiscal e custodiante',
  'Cadastro simplificado e obrigações contratuais',
];

const SRC = (section, page) => ({
  source_title: 'Guia Por Dentro da B3',
  source_chapter: 'Título III, Capítulo II — Cadastro de investidores não residentes',
  source_section: section,
  source_page: page,
});

export const questions = [
  // ---------- Conceitos e regras gerais ----------
  {
    topic: 'Conceitos e regras gerais',
    subtopic: 'Definição de INR',
    difficulty: 'facil',
    statement: 'Segundo a CVM, investidores não residentes (INRs) são:',
    options: {
      A: 'Apenas pessoas físicas brasileiras que residem temporariamente no exterior.',
      B: 'Pessoas físicas ou jurídicas, inclusive fundos ou outras entidades de investimento coletivo, com residência, sede ou domicílio no exterior, que investem no Brasil.',
      C: 'Exclusivamente bancos estrangeiros autorizados pelo Bacen.',
      D: 'Pessoas físicas ou jurídicas brasileiras que investem no exterior.',
    },
    correct: 'B',
    explanation:
      'Investidores não residentes (INRs) são pessoas físicas ou jurídicas, inclusive fundos ou outras entidades de investimento coletivo, com residência, sede ou domicílio no exterior, que investem no Brasil.',
    explanationWrong: {
      A: 'Não é restrito a brasileiros residindo temporariamente fora — o conceito abrange qualquer pessoa física ou jurídica domiciliada no exterior.',
      C: 'Não é exclusivo de bancos estrangeiros — abrange qualquer pessoa física, jurídica, fundo ou entidade de investimento coletivo domiciliada fora do Brasil.',
      D: 'É o oposto: o INR investe NO Brasil, vindo de fora — não se trata de brasileiros investindo no exterior.',
    },
    examTip:
      'INR = quem mora/tem sede fora do Brasil e investe AQUI — o fluxo de capital é de fora para dentro.',
    commonTrap:
      'Não inverta a direção do fluxo — INR não é "brasileiro investindo lá fora", é "estrangeiro investindo aqui".',
    ...SRC('1. Apresentação', '421'),
  },
  {
    topic: 'Conceitos e regras gerais',
    subtopic: 'Acesso aos mercados',
    difficulty: 'medio',
    statement: 'Em linhas gerais, a Resolução Conjunta BACEN/CVM nº 13/2024 dá acesso ao investidor não residente:',
    options: {
      A: 'Aos mesmos mercados disponíveis ao investidor residente.',
      B: 'Apenas ao mercado de câmbio.',
      C: 'Apenas ao mercado de ações, com exclusão de renda fixa e derivativos.',
      D: 'A mercados específicos e distintos dos disponíveis ao investidor local.',
    },
    correct: 'A',
    explanation:
      'A Resolução Conjunta BACEN/CVM nº 13/2024 dá acesso ao investidor não residente aos mesmos mercados disponíveis ao investidor residente, havendo a necessidade de registro no Brasil (dispensado, atualmente, para PF INR em aplicações qualificadas) e internalização de recursos via operação de câmbio.',
    explanationWrong: {
      B: 'O acesso não se limita ao mercado de câmbio — o investidor não residente pode acessar os mesmos mercados do investidor residente, incluindo renda fixa, renda variável e derivativos.',
      C: 'Não há essa exclusão de renda fixa e derivativos — o acesso é amplo, equivalente ao do investidor residente.',
      D: 'É o oposto do afirmado pelo Guia: os mercados acessíveis são os MESMOS disponíveis ao residente, não mercados distintos e específicos.',
    },
    examTip:
      'Uma das três questões-modelo do próprio capítulo: acesso do INR = "mesmos mercados" do investidor residente — regra ampla, não restritiva.',
    commonTrap:
      'Não pense que o investidor estrangeiro tem acesso limitado por padrão — a regra geral é de equivalência de acesso aos mercados brasileiros.',
    ...SRC('2. Conceitos e base legal — Regras gerais', '422, 426'),
  },
  {
    topic: 'Conceitos e regras gerais',
    subtopic: 'Registro na CVM — exceção agropecuária',
    difficulty: 'dificil',
    statement: 'Caso o investidor não residente negocie exclusivamente contratos agropecuários, para fins da Resolução Conjunta BACEN/CVM nº 13/2024:',
    options: {
      A: 'É exigido o registro do investidor na CVM, sem exceções.',
      B: 'Não é requerido o registro do investidor na CVM.',
      C: 'É exigido registro adicional no Bacen além do registro na CVM.',
      D: 'É vedada qualquer negociação de derivativos agropecuários por não residentes.',
    },
    correct: 'B',
    explanation:
      'Caso o investidor não residente negocie exclusivamente contratos agropecuários, para fins da Resolução Conjunta BACEN/CVM nº 13/2024, não é requerido o registro do investidor na CVM — uma exceção específica à regra geral de registro.',
    explanationWrong: {
      A: 'É justamente o oposto: nessa hipótese específica (só contratos agropecuários), o registro na CVM é DISPENSADO, não exigido.',
      C: 'Não há essa exigência de registro adicional no Bacen mencionada para esse caso específico — a exceção é justamente a dispensa do registro na CVM.',
      D: 'Não há vedação à negociação de derivativos agropecuários por não residentes — pelo contrário, essa é justamente a hipótese em que se dispensa o registro na CVM.',
    },
    examTip:
      'Exceção específica: INR que só opera contratos AGROPECUÁRIOS não precisa de registro na CVM — uma dispensa pontual dentro da regra geral de registro obrigatório.',
    commonTrap:
      'É uma exceção estreita (só contratos agropecuários) — não generalize para "todo INR de commodities está dispensado de registro".',
    ...SRC('2. Conceitos e base legal — Regras gerais', '422'),
  },
  {
    topic: 'Conceitos e regras gerais',
    subtopic: 'Modalidades de registro do INR',
    difficulty: 'dificil',
    statement: 'Segundo a Resolução CVM nº 13/2020, o investidor não residente pode registrar-se, EXCETO como:',
    options: {
      A: 'Titular de conta própria.',
      B: 'Titular de conta coletiva.',
      C: 'Participante de conta coletiva.',
      D: 'Correspondente cambial autorizado.',
    },
    correct: 'D',
    explanation:
      'O investidor não residente pode registrar-se como: titular de conta própria (operando em seu próprio nome), titular de conta coletiva (operando por conta de outros investidores não residentes admitidos como participantes) ou participante de conta coletiva. "Correspondente cambial autorizado" não é uma dessas três modalidades de registro.',
    explanationWrong: {
      A: 'Titular de conta própria é, de fato, uma das três modalidades reais de registro do INR.',
      B: 'Titular de conta coletiva é, de fato, uma das três modalidades reais de registro do INR.',
      C: 'Participante de conta coletiva é, de fato, uma das três modalidades reais de registro do INR.',
    },
    examTip:
      'As 3 modalidades de registro do INR: titular de conta própria, titular de conta coletiva, participante de conta coletiva. Decore essa lista fechada.',
    commonTrap:
      'Questões de "assinale a exceção/o que NÃO é" testam se você memorizou a lista fechada e completa — "correspondente cambial" soa plausível, mas não está entre as três modalidades reais.',
    ...SRC('2. Conceitos e base legal — Regras gerais', '422'),
  },
  {
    topic: 'Conceitos e regras gerais',
    subtopic: 'Classificação como investidor profissional',
    difficulty: 'medio',
    statement: 'O investidor não residente, segundo o Guia Por Dentro da B3, é considerado:',
    options: {
      A: 'Um investidor de varejo, sem qualquer classificação especial.',
      B: 'Um investidor profissional.',
      C: 'Um investidor qualificado apenas, nunca profissional.',
      D: 'Um investidor institucional exclusivamente.',
    },
    correct: 'B',
    explanation:
      'O Guia afirma explicitamente que o investidor não residente é considerado um investidor profissional — categoria mais elevada de sofisticação dentro da classificação regulatória de investidores.',
    explanationWrong: {
      A: 'Não é tratado como investidor de varejo comum — a classificação especial de investidor profissional é atribuída automaticamente ao INR.',
      C: 'A classificação é de investidor PROFISSIONAL, categoria mais elevada que a de "qualificado" — não fica restrito apenas à qualificação.',
      D: 'O termo "institucional" não é a classificação usada pelo Guia nesse contexto — é "investidor profissional" a categoria explicitamente atribuída.',
    },
    examTip:
      'INR = automaticamente classificado como investidor PROFISSIONAL — fato pontual e específico do Guia, fácil de memorizar como afirmação direta.',
    commonTrap:
      'Não confunda os níveis de classificação de investidor (varejo → qualificado → profissional) — o INR já entra automaticamente no nível mais alto (profissional).',
    ...SRC('2. Conceitos e base legal — Regras gerais', '422'),
  },

  // ---------- Representante legal, fiscal e custodiante ----------
  {
    topic: 'Representante legal, fiscal e custodiante',
    subtopic: 'Papéis distintos',
    difficulty: 'medio',
    statement: 'Para investir no Brasil, o investidor estrangeiro deve contratar instituições para atuar como representante legal, representante fiscal e custodiante. O responsável pelos assuntos tributáveis e fiscais perante as autoridades brasileiras é o:',
    options: {
      A: 'Representante legal.',
      B: 'Representante fiscal.',
      C: 'Custodiante.',
      D: 'Corretora executora das ordens.',
    },
    correct: 'B',
    explanation:
      'O representante fiscal é responsável pelos assuntos tributáveis e fiscais em nome do investidor perante as autoridades brasileiras. O representante legal cuida do registro/informações às autoridades, e o custodiante mantém documentos atualizados e controla os ativos em contas segregadas.',
    explanationWrong: {
      A: 'O representante legal é responsável por apresentar as informações de registro às autoridades brasileiras — não é ele quem cuida especificamente dos assuntos tributários/fiscais.',
      C: 'O custodiante cuida da guarda de documentos e ativos em contas segregadas, fornecendo informações quando solicitado — não é o responsável pelos assuntos fiscais.',
      D: 'A corretora executa as ordens do investidor na B3 — não tem, por definição, a atribuição fiscal específica descrita no enunciado.',
    },
    examTip:
      'Representante legal = registro/informações às autoridades. Representante fiscal = questões tributárias. Custodiante = guarda de ativos/documentos em conta segregada.',
    commonTrap:
      'Os três papéis (legal, fiscal, custodiante) podem, na prática, ser exercidos pela mesma instituição financeira — mas suas ATRIBUIÇÕES são conceitualmente distintas, e a prova testa se você sabe separá-las.',
    ...SRC('2. Conceitos e base legal — Representante legal; Representante fiscal; Custodiante', '423'),
  },
  {
    topic: 'Representante legal, fiscal e custodiante',
    subtopic: 'Registro na CVM — prazo',
    difficulty: 'dificil',
    statement: 'O representante legal do investidor não residente é responsável por realizar o registro na CVM, que disponibiliza o código operacional do investidor em até:',
    options: {
      A: '24 horas.',
      B: '5 dias úteis.',
      C: '15 dias corridos.',
      D: '30 dias corridos.',
    },
    correct: 'A',
    explanation:
      'O representante legal é responsável por realizar o registro na CVM, que, em até 24 horas, disponibiliza o código operacional do investidor. Simultaneamente, a CVM requisita à Secretaria da Receita Federal um CNPJ para o investidor, para efeito de tributação.',
    explanationWrong: {
      B: '5 dias úteis não corresponde ao prazo real — o Guia especifica um prazo bem mais curto, de 24 horas.',
      C: '15 dias corridos não é o prazo do registro na CVM — esse número não aparece associado a essa etapa específica no Guia.',
      D: '30 dias corridos também não corresponde ao prazo real de disponibilização do código operacional — que é de apenas 24 horas.',
    },
    examTip:
      'CVM disponibiliza o código operacional do INR em até 24 HORAS — prazo curto e específico, fácil de decorar como fato isolado.',
    commonTrap:
      'Um dos três exemplos de questão do próprio capítulo já testa "quem faz o registro" (resposta: representante legal) — o prazo de 24h é o complemento natural dessa mesma pergunta.',
    ...SRC('2. Conceitos e base legal — Representante legal; Passo a passo', '423, 425-426'),
  },
  {
    topic: 'Representante legal, fiscal e custodiante',
    subtopic: 'RDE',
    difficulty: 'prova',
    statement: 'Os recursos investidos no Brasil por investidor não residente estão sujeitos a registro eletrônico no Banco Central, feito por meio do:',
    options: {
      A: 'Sistema Integrado de Cadastro (Sincad).',
      B: 'Registro Declaratório Eletrônico (RDE).',
      C: 'Sistema de Informações Banco Central (Sisbacen), exclusivamente para fins cambiais.',
      D: 'Cadastro Nacional da Pessoa Jurídica (CNPJ).',
    },
    correct: 'B',
    explanation:
      'Os recursos investidos no Brasil estão sujeitos ao registro eletrônico no Banco Central, feito por meio do Registro Declaratório Eletrônico (RDE). O registro inicial e suas atualizações são requisito obrigatório para quaisquer movimentações com o exterior, devendo ser providenciados antes do início dessas movimentações — o representante é responsável por esse registro.',
    explanationWrong: {
      A: 'O Sincad é o sistema de cadastro de contas/vínculos/profissionais da B3, distinto do registro específico de capital estrangeiro no Bacen (RDE).',
      C: 'O Sisbacen é o sistema eletrônico geral do Bacen, mas o registro específico dos recursos de investidor estrangeiro é feito pelo RDE, um módulo/mecanismo específico.',
      D: 'O CNPJ é o cadastro fiscal do investidor (requisitado pela CVM à Receita Federal), distinto do registro dos RECURSOS investidos, que é feito no RDE.',
    },
    examTip:
      'RDE = registro obrigatório dos RECURSOS do INR no Bacen, prévio a qualquer movimentação com o exterior — responsabilidade do representante.',
    commonTrap:
      'Não confunda o CNPJ do investidor (identificação fiscal, requisitada pela CVM) com o RDE (registro dos recursos/capital, no Bacen) — são registros complementares, mas distintos.',
    ...SRC('2. Conceitos e base legal — Passo a passo', '425-426'),
  },

  // ---------- Cadastro simplificado e obrigações contratuais ----------
  {
    topic: 'Cadastro simplificado e obrigações contratuais',
    subtopic: 'Pré-requisitos do cadastro simplificado',
    difficulty: 'dificil',
    statement: 'Para que intermediários e custodiantes locais possam efetuar o cadastro simplificado de investidores não residentes, é necessário, entre outros requisitos, que:',
    options: {
      A: 'O investidor seja cliente de instituição intermediária estrangeira devidamente cadastrada no país de origem, cujo órgão regulador seja signatário do MoU da IOSCO.',
      B: 'O investidor renuncie a qualquer representação legal ou fiscal no Brasil.',
      C: 'O país de origem da instituição intermediária estrangeira seja considerado de alto risco para lavagem de dinheiro.',
      D: 'O cadastro seja realizado exclusivamente pelo próprio investidor, sem intermediários.',
    },
    correct: 'A',
    explanation:
      'Entre os pré-requisitos do cadastro simplificado estão: o investidor ser cliente de instituição intermediária estrangeira devidamente cadastrada no país de origem; a instituição estrangeira assumir a obrigação de informar a CVM quando solicitado; o órgão regulador do país de origem da instituição ser signatário do MoU da IOSCO; e o país não ser considerado de alto risco/não cooperante em relação à lavagem de dinheiro e financiamento ao terrorismo.',
    explanationWrong: {
      B: 'Não há essa exigência de renúncia — pelo contrário, a estrutura de representação legal/fiscal/custodiante continua sendo necessária mesmo no cadastro simplificado.',
      C: 'É o oposto de um requisito: o país da instituição estrangeira NÃO PODE ser considerado de alto risco em lavagem de dinheiro — essa é uma condição impeditiva, não um pré-requisito positivo.',
      D: 'O cadastro simplificado não dispensa intermediários — ele é justamente realizado POR intermediários e custodiantes locais, com base na relação do investidor com uma instituição estrangeira.',
    },
    examTip:
      'Cadastro simplificado exige 4 pré-requisitos: (1) cliente de intermediário estrangeiro cadastrado, (2) obrigação de informar a CVM, (3) país signatário do MoU IOSCO, (4) país sem alto risco de lavagem de dinheiro.',
    commonTrap:
      'A ausência de qualquer um dos quatro pré-requisitos inviabiliza o cadastro simplificado — sendo necessário, nesse caso, recorrer ao cadastro completo.',
    ...SRC('2. Conceitos e base legal — Cadastro simplificado de investidores não residentes', '423-424'),
  },
  {
    topic: 'Cadastro simplificado e obrigações contratuais',
    subtopic: 'Cláusulas contratuais mínimas',
    difficulty: 'dificil',
    statement: 'O contrato entre o intermediário local e o intermediário estrangeiro deve conter, entre as cláusulas mínimas exigidas pela B3:',
    options: {
      A: 'Sujeição exclusiva à legislação do país de origem do intermediário estrangeiro, afastando a lei brasileira.',
      B: 'Constituição de mandatário no Brasil para receber citações, intimações e notificações judiciais e/ou extrajudiciais.',
      C: 'Dispensa de submissão de controvérsias ao Judiciário brasileiro ou à Câmara de Arbitragem do Mercado.',
      D: 'Vedação a qualquer rescisão contratual, mesmo em caso de descumprimento das obrigações.',
    },
    correct: 'B',
    explanation:
      'Entre as cláusulas contratuais mínimas está a constituição de mandatário no Brasil para receber citações, intimações e notificações judiciais e/ou extrajudiciais, expedidas pelo Judiciário ou por autoridades administrativas e entidades autorreguladoras brasileiras.',
    explanationWrong: {
      A: 'É o oposto: uma das cláusulas mínimas exige justamente a sujeição às normas e à legislação brasileira, não o afastamento dela.',
      C: 'É o oposto: uma cláusula mínima exige justamente a submissão de controvérsias ao Judiciário brasileiro ou à Câmara de Arbitragem do Mercado, não a dispensa dessa submissão.',
      D: 'É o oposto: uma das cláusulas mínimas prevê a RESCISÃO do contrato em caso de descumprimento de obrigações — não uma vedação a essa rescisão.',
    },
    examTip:
      'Cláusulas mínimas do contrato local↔estrangeiro: informar normas brasileiras + rescisão por descumprimento + sujeição às normas do Brasil + sujeição ao Judiciário brasileiro + mandatário no Brasil.',
    commonTrap:
      'Todas as cláusulas mínimas reforçam a soberania e o controle regulatório brasileiro sobre a operação — qualquer alternativa que sugira "afastar" a lei brasileira ou "dispensar" mecanismos de controle está incorreta.',
    ...SRC('2. Conceitos e base legal — Cláusulas contratuais mínimas', '424'),
  },
  {
    topic: 'Cadastro simplificado e obrigações contratuais',
    subtopic: 'Consequência do descumprimento',
    difficulty: 'prova',
    statement: 'Caso o órgão regulador comunique à B3 que o intermediário estrangeiro descumpriu, de forma injustificada, suas obrigações de disponibilizar informações, o contrato entre o intermediário local e o estrangeiro:',
    options: {
      A: 'Permanece válido, sem qualquer efeito sobre a relação com a B3.',
      B: 'É considerado automaticamente rescindido e não produzirá efeitos perante a B3.',
      C: 'Deve ser renegociado em até 180 dias, mantendo-se válido até lá.',
      D: 'Precisa de nova aprovação da CVM para continuar vigente, mas segue operando normalmente até essa decisão.',
    },
    correct: 'B',
    explanation:
      'Os contratos celebrados entre os intermediários locais e o intermediário estrangeiro serão considerados automaticamente rescindidos e não produzirão efeitos perante a B3, caso o órgão regulador comunique o descumprimento injustificado das obrigações de disponibilizar informações.',
    explanationWrong: {
      A: 'Não permanece válido sem efeito — a consequência é justamente a rescisão automática do contrato perante a B3.',
      C: 'Não há esse prazo de renegociação de 180 dias com validade mantida — a rescisão é automática, sem esse período de tolerância.',
      D: 'Não há essa continuidade operacional condicionada a nova aprovação — a rescisão ocorre automaticamente, sem necessidade de decisão adicional para produzir efeito.',
    },
    examTip:
      'Descumprimento injustificado pelo intermediário estrangeiro (comunicado por regulador à B3) = rescisão AUTOMÁTICA do contrato perante a B3, sem prazo de tolerância.',
    commonTrap:
      'A automaticidade da rescisão é o ponto central — não há um processo de negociação ou prazo de adequação antes da perda de efeito perante a B3.',
    ...SRC('2. Conceitos e base legal — Obrigações entre custodiante local e custodiante global', '424-425'),
  },
];
