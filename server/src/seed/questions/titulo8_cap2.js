// Título VIII - Compliance
// Capítulo II - Proteção de dados pessoais e privacidade
// Fonte: Guia Por Dentro da B3, páginas ~636-648.

export const chapterRef = { titleNumber: 'VIII', chapterNumber: 'II' };

export const topics = [
  'Aplicação da LGPD',
  'Definições da LGPD',
  'Bases legais para tratamento',
  'Consentimento na LGPD',
  'Direitos do titular e obrigações dos agentes de tratamento',
];

const SRC = (section, page) => ({
  source_title: 'Guia Por Dentro da B3',
  source_chapter: 'Título VIII, Capítulo II — Proteção de dados pessoais e privacidade',
  source_section: section,
  source_page: page,
});

export const questions = [
  // ---------- Aplicação da LGPD ----------
  {
    topic: 'Aplicação da LGPD',
    subtopic: 'Papel do participante na LGPD',
    difficulty: 'medio',
    statement: 'Na linguagem da LGPD, o participante do mercado de capitais que trata dados pessoais de seus clientes é classificado como:',
    options: {
      A: 'titular de dados pessoais.',
      B: 'agente de tratamento de dados pessoais.',
      C: 'Autoridade Nacional de Proteção de Dados.',
      D: 'encarregado exclusivo, sem possibilidade de delegação.',
    },
    correct: 'B',
    explanation:
      'Os participantes, no exercício de suas atividades no mercado de capitais, efetuam tratamento de dados pessoais de seus clientes e, assim, estão sujeitos à LGPD. Na linguagem da LGPD, o participante é um agente de tratamento de dados pessoais, e o investidor ou cliente é o titular de dados pessoais.',
    explanationWrong: {
      A: 'É o INVESTIDOR/cliente quem é o titular dos dados pessoais — o participante é quem trata esses dados, ocupando o papel de agente de tratamento.',
      C: 'A Autoridade Nacional (ANPD) é o órgão público responsável por fiscalizar o cumprimento da lei — não se confunde com o participante do mercado.',
      D: 'O encarregado é uma pessoa específica indicada pelo agente de tratamento (controlador/operador) para servir de canal de comunicação — não é o próprio participante como um todo.',
    },
    examTip: 'Participante = AGENTE DE TRATAMENTO. Investidor/cliente = TITULAR dos dados. Não inverta os papéis.',
    commonTrap: null,
    ...SRC('Apresentação', '636'),
  },
  {
    topic: 'Aplicação da LGPD',
    subtopic: 'Âmbito de aplicação territorial',
    difficulty: 'dificil',
    statement: 'A LGPD se aplica a uma operação de tratamento de dados pessoais quando:',
    options: {
      A: 'exclusivamente quando o controlador tiver sede no Brasil, independentemente de onde os dados forem tratados.',
      B: 'a operação de tratamento ocorra no Brasil, a atividade vise oferta de bens/serviços no Brasil, ou os dados tenham sido coletados no Brasil.',
      C: 'apenas quando os dados pessoais forem de nacionalidade brasileira, independentemente da localização física do titular.',
      D: 'somente para pessoas jurídicas de direito público, excluindo-se pessoas jurídicas de direito privado.',
    },
    correct: 'B',
    explanation:
      'A LGPD se aplica a qualquer operação de tratamento de dados pessoais realizada por pessoa natural ou jurídica, independentemente do meio, país de sede ou localização dos dados, desde que a operação de tratamento ocorra no Brasil, a atividade vise oferta ou fornecimento de bens ou serviços no Brasil, ou os dados tenham sido coletados no Brasil (titular estava no Brasil no momento da coleta).',
    explanationWrong: {
      A: 'A aplicação não depende exclusivamente da sede do controlador — os critérios são mais amplos, incluindo local de tratamento, oferta de bens/serviços e local de coleta dos dados.',
      C: 'O critério não é a "nacionalidade" do dado — é a localização física do titular no momento da coleta, ou o local de tratamento/oferta de bens e serviços.',
      D: 'A LGPD se aplica tanto a pessoas jurídicas de direito público quanto de direito privado, natural ou jurídica.',
    },
    examTip: 'LGPD aplica-se por QUALQUER destes critérios: tratamento no Brasil, oferta de bens/serviços no Brasil, ou dados coletados no Brasil — não é preciso todos simultaneamente.',
    commonTrap: null,
    ...SRC('Apresentação', '636'),
  },

  // ---------- Definições ----------
  {
    topic: 'Definições da LGPD',
    subtopic: 'Dado pessoal sensível',
    difficulty: 'medio',
    statement: 'É considerado dado pessoal SENSÍVEL, nos termos da LGPD:',
    options: {
      A: 'o nome completo e o e-mail de um cliente.',
      B: 'dados sobre origem racial/étnica, religião, opinião política, saúde ou vida sexual, quando vinculados a pessoa natural.',
      C: 'o número de telefone comercial de um cliente pessoa jurídica.',
      D: 'informações públicas disponíveis em cadastros comerciais.',
    },
    correct: 'B',
    explanation:
      'Dado pessoal sensível é o dado pessoal sobre origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização de caráter religioso, filosófico ou político, dado referente à saúde ou à vida sexual, dado genético ou biométrico, quando vinculado a uma pessoa natural.',
    explanationWrong: {
      A: 'Nome e e-mail são dados pessoais COMUNS (identificam a pessoa), mas não se enquadram na categoria de dado pessoal SENSÍVEL, que exige as características específicas listadas na lei.',
      C: 'Dados de pessoa jurídica não são objeto central da proteção de dados pessoais da LGPD, que se volta à pessoa NATURAL — e mesmo que fosse de pessoa física, telefone comercial não é, por si, dado sensível.',
      D: 'Informações públicas em cadastros comerciais podem ser dados pessoais comuns, mas não se qualificam automaticamente como sensíveis, salvo se relacionadas às categorias específicas (saúde, religião etc.).',
    },
    examTip: 'Dado sensível: origem racial/étnica, religião, política, sindicato, saúde, vida sexual, genético ou biométrico — categorias FECHADAS e específicas da lei.',
    commonTrap: null,
    ...SRC('Definições', '637'),
  },
  {
    topic: 'Definições da LGPD',
    subtopic: 'Controlador x Operador',
    difficulty: 'prova',
    statement: 'A pessoa natural ou jurídica que realiza o tratamento de dados pessoais EM NOME do controlador é denominada:',
    options: {
      A: 'encarregado.',
      B: 'controlador.',
      C: 'operador.',
      D: 'Autoridade Nacional.',
    },
    correct: 'C',
    explanation:
      'O operador é a pessoa natural ou jurídica que realiza o tratamento de dados pessoais em nome do controlador. Diferentemente, o controlador é quem toma as decisões referentes ao tratamento de dados — cabe a ele decidir os fins e os meios do tratamento.',
    explanationWrong: {
      A: 'O encarregado é a pessoa indicada pelo controlador e operador para atuar como canal de comunicação com titulares, outros agentes de tratamento e a ANPD — não é quem executa o tratamento em si.',
      B: 'O controlador é justamente quem DECIDE sobre o tratamento (a quem competem as decisões) — o oposto do operador, que apenas EXECUTA em nome do controlador.',
      D: 'A Autoridade Nacional (ANPD) é o órgão público fiscalizador — não realiza tratamento de dados em nome de terceiros.',
    },
    examTip: 'Controlador = DECIDE (dono da decisão sobre o tratamento). Operador = EXECUTA em nome do controlador. Encarregado = CANAL de comunicação (DPO).',
    commonTrap: '⚠️ Trio muito cobrado: controlador (decide), operador (executa), encarregado (comunica) — não confunda os três papéis.',
    ...SRC('Definições', '637-638'),
  },
  {
    topic: 'Definições da LGPD',
    subtopic: 'Anonimização',
    difficulty: 'dificil',
    statement: 'A utilização de meios técnicos razoáveis e disponíveis no momento do tratamento, por meio dos quais um dado perde a possibilidade de associação, direta ou indireta, a um indivíduo, é denominada:',
    options: {
      A: 'consentimento.',
      B: 'anonimização.',
      C: 'incidente de segurança.',
      D: 'uso compartilhado de dados.',
    },
    correct: 'B',
    explanation:
      'Anonimização é a utilização de meios técnicos razoáveis e disponíveis no momento do tratamento, por meio dos quais um dado perde a possibilidade de associação, direta ou indireta, a um indivíduo.',
    explanationWrong: {
      A: 'Consentimento é a manifestação livre, informada e inequívoca do titular concordando com o tratamento — conceito diferente, relacionado à autorização, não à técnica de desidentificação.',
      C: 'Incidente de segurança é qualquer evento adverso relacionado à segurança de dados (acesso não autorizado, vazamento etc.) — conceito totalmente diferente.',
      D: 'Uso compartilhado de dados é a comunicação, difusão ou transferência de dados entre entidades — não se relaciona à técnica de desassociação de um dado a um indivíduo.',
    },
    examTip: 'Anonimização = dado perde a associação com o indivíduo, por técnica razoável disponível no momento do tratamento — é um direito do titular também poder solicitá-la.',
    commonTrap: null,
    ...SRC('Definições', '637-638'),
  },

  // ---------- Bases legais ----------
  {
    topic: 'Bases legais para tratamento',
    subtopic: 'Quantidade de bases legais',
    difficulty: 'prova',
    statement: 'O consentimento do titular é:',
    options: {
      A: 'a única base legal prevista na LGPD para tratamento de dados pessoais.',
      B: 'irrevogável, uma vez concedido.',
      C: 'uma das dez bases legais previstas na LGPD para o tratamento de dados pessoais.',
      D: 'essencial e obrigatório para qualquer tratamento de dados no mercado financeiro e de capitais.',
    },
    correct: 'C',
    explanation:
      'O consentimento é uma das dez bases legais previstas na LGPD, ao lado de outras como cumprimento de obrigação legal ou regulatória, execução de contrato, exercício regular de direitos, legítimo interesse, proteção ao crédito, entre outras. Não é a única base legal disponível.',
    explanationWrong: {
      A: 'Existem outras nove bases legais previstas na LGPD além do consentimento (cumprimento de obrigação legal, execução de contrato, legítimo interesse, proteção ao crédito etc.).',
      B: 'É o oposto: o consentimento PODE ser revogado pelo titular a qualquer momento.',
      D: 'O tratamento de dados no mercado financeiro frequentemente se baseia em OUTRAS bases legais (como cumprimento de obrigação legal/regulatória ou execução de contrato), não exclusivamente no consentimento.',
    },
    examTip: 'LGPD prevê DEZ bases legais — consentimento é apenas uma delas, não a única nem sempre a mais usada no mercado financeiro.',
    commonTrap: '⚠️ Muitos participantes usam "cumprimento de obrigação legal/regulatória" ou "execução de contrato" como base — nem sempre é o consentimento a base aplicável.',
    ...SRC('Bases legais para tratamento', '638-639'),
  },
  {
    topic: 'Bases legais para tratamento',
    subtopic: 'Legítimo interesse',
    difficulty: 'dificil',
    statement: 'A base legal do "legítimo interesse do controlador ou de terceiros" para tratamento de dados pessoais:',
    options: {
      A: 'pode ser usada em qualquer hipótese, mesmo que prevaleça direito e liberdade fundamental do titular.',
      B: 'não pode prevalecer se houver direito e liberdade fundamental do titular em sentido contrário.',
      C: 'é exclusiva para órgãos de pesquisa acadêmica.',
      D: 'é aplicável apenas à administração pública, na execução de políticas públicas.',
    },
    correct: 'B',
    explanation:
      'O legítimo interesse do controlador ou de terceiros é uma das bases legais da LGPD, exceto se prevalecer direito e liberdade fundamental do titular — ou seja, essa base legal tem um limite expresso: não pode se sobrepor a direitos e liberdades fundamentais do titular dos dados.',
    explanationWrong: {
      A: 'É o oposto: a base do legítimo interesse tem uma ressalva explícita — NÃO se aplica quando prevalecer direito/liberdade fundamental do titular.',
      C: 'Órgãos de pesquisa têm sua PRÓPRIA base legal específica ("realização de estudos por órgãos de pesquisa") — diferente do "legítimo interesse do controlador ou de terceiros".',
      D: '"Execução de políticas públicas" é uma base legal distinta, exclusiva da administração pública — não se confunde com "legítimo interesse".',
    },
    examTip: 'Legítimo interesse tem LIMITE: cede espaço se prevalecer direito/liberdade fundamental do titular. É uma base "condicional", não absoluta.',
    commonTrap: null,
    ...SRC('Bases legais para tratamento', '639'),
  },

  // ---------- Consentimento ----------
  {
    topic: 'Consentimento na LGPD',
    subtopic: 'Características do consentimento',
    difficulty: 'medio',
    statement: 'Em relação ao consentimento como base legal na LGPD, é correto afirmar que:',
    options: {
      A: 'autorizações genéricas são válidas, desde que assinadas pelo titular.',
      B: 'o consentimento dado para determinada finalidade é automaticamente extensível a outras finalidades correlatas.',
      C: 'o consentimento é dado para finalidades determinadas, sendo autorizações genéricas nulas.',
      D: 'uma vez concedido, o consentimento não pode mais ser revogado pelo titular.',
    },
    correct: 'C',
    explanation:
      'O consentimento é dado para finalidades determinadas, portanto, autorizações genéricas são NULAS. O consentimento dado para determinada finalidade não é extensível a outros fins — se houver outra finalidade, novo consentimento deve ser obtido. Além disso, o consentimento pode ser revogado.',
    explanationWrong: {
      A: 'É o oposto: autorizações genéricas são expressamente NULAS na LGPD — o consentimento deve ser específico para finalidades determinadas.',
      B: 'O consentimento NÃO é extensível a outras finalidades — cada nova finalidade exige novo consentimento específico.',
      D: 'O consentimento PODE sim ser revogado pelo titular a qualquer momento — não é irrevogável.',
    },
    examTip: 'Consentimento: finalidade DETERMINADA (genérico = nulo), NÃO extensível a outros fins, e SEMPRE revogável.',
    commonTrap: '⚠️ Pegadinha tripla clássica: genérico, extensível e irrevogável são todas características ERRADAS do consentimento na LGPD.',
    ...SRC('Consentimento na LGPD', '639-640'),
  },
  {
    topic: 'Consentimento na LGPD',
    subtopic: 'Uso de dados de acesso público',
    difficulty: 'dificil',
    statement: 'O uso de dados pessoais de acesso público, segundo a LGPD:',
    options: {
      A: 'é sempre vedado, independentemente da finalidade.',
      B: 'é permitido desde que seja de boa-fé e respeite o interesse público e a finalidade que justificam sua disponibilização.',
      C: 'exige sempre novo consentimento expresso do titular, mesmo sendo dado já público.',
      D: 'somente é permitido para fins de marketing direto.',
    },
    correct: 'B',
    explanation:
      'O uso de dados pessoais de acesso público é permitido desde que seja de boa-fé e respeitando o interesse público e a finalidade que justificam sua disponibilização. Exemplo dado pelo guia: buscar e analisar certidões para verificar pendências de uma pessoa é tratamento legítimo e condizente com a finalidade das certidões.',
    explanationWrong: {
      A: 'Não é sempre vedado — a LGPD permite expressamente o uso de dados de acesso público, dentro das condições de boa-fé e respeito à finalidade original.',
      C: 'Não exige necessariamente novo consentimento expresso quando o dado já é de acesso público e o uso respeita a finalidade que justificou sua disponibilização.',
      D: 'Não é restrito a marketing direto — o exemplo do próprio guia é a verificação de pendências via certidões, finalidade bem diferente de marketing.',
    },
    examTip: 'Dado público: uso permitido se BOA-FÉ + respeito à finalidade original da disponibilização (ex.: consultar certidão para verificar pendência).',
    commonTrap: null,
    ...SRC('Consentimento na LGPD', '640'),
  },

  // ---------- Direitos do titular e obrigações ----------
  {
    topic: 'Direitos do titular e obrigações dos agentes de tratamento',
    subtopic: 'Direito de exclusão',
    difficulty: 'prova',
    statement: 'O direito do titular de solicitar a eliminação de seus dados pessoais:',
    options: {
      A: 'é absoluto, devendo ser atendido pela empresa sempre e sem qualquer ressalva.',
      B: 'pode não ser atendido se houver outros interesses ou direitos que prevaleçam, devendo a empresa fundamentar o não atendimento.',
      C: 'não é um direito previsto na LGPD.',
      D: 'só pode ser exercido mediante decisão judicial prévia.',
    },
    correct: 'B',
    explanation:
      'Os direitos do titular não são absolutos — o exercício pode ser recusado ou parcialmente atendido se necessário para preservar direitos de terceiro, segredos de negócio, entre outras situações, sempre com a devida justificativa por parte do agente de tratamento.',
    explanationWrong: {
      A: 'Não é absoluto — pode ser recusado ou parcialmente atendido em determinadas situações, desde que devidamente fundamentado.',
      C: 'A eliminação de dados é sim um direito expressamente previsto na LGPD (eliminação no caso de tratamento sem consentimento, entre outras hipóteses).',
      D: 'Não há exigência de decisão judicial prévia para o exercício desse direito pelo titular — o pedido é feito diretamente ao agente de tratamento.',
    },
    examTip: 'Direitos do titular NÃO são absolutos — podem ser recusados/parcialmente atendidos, MAS sempre com justificativa fundamentada.',
    commonTrap: '⚠️ Pegadinha: achar que todo pedido de exclusão deve ser atendido incondicionalmente — a lei prevê exceções fundamentadas.',
    ...SRC('Direitos do titular', '640-641'),
  },
  {
    topic: 'Direitos do titular e obrigações dos agentes de tratamento',
    subtopic: 'Encarregado (DPO)',
    difficulty: 'facil',
    statement: 'O profissional indicado pelos agentes de tratamento para servir de canal de comunicação com os titulares e com a ANPD em assuntos de proteção de dados é chamado de:',
    options: {
      A: 'compliance officer.',
      B: 'head de comunicação/marketing.',
      C: 'encarregado/DPO.',
      D: 'diretor de RH.',
    },
    correct: 'C',
    explanation:
      'Os agentes de tratamento devem indicar um encarregado pelo tratamento de dados pessoais, também conhecido como Data Protection Officer (DPO), para servir de canal de comunicação com os titulares em questões envolvendo privacidade e proteção de dados pessoais e com a ANPD.',
    explanationWrong: {
      A: 'Compliance officer é um cargo mais amplo, ligado à conformidade regulatória em geral — não é o termo específico usado pela LGPD para essa função.',
      B: 'Head de comunicação/marketing não é o papel previsto na LGPD para esse canal de comunicação sobre dados pessoais.',
      D: 'Diretor de RH cuida de recursos humanos — não é a figura designada pela LGPD como canal de comunicação sobre proteção de dados.',
    },
    examTip: 'Encarregado = DPO (Data Protection Officer) — canal de comunicação com titulares, outros agentes e a ANPD.',
    commonTrap: null,
    ...SRC('Obrigações dos agentes de tratamento', '641'),
  },
  {
    topic: 'Direitos do titular e obrigações dos agentes de tratamento',
    subtopic: 'Sanções administrativas',
    difficulty: 'medio',
    statement: 'Em caso de descumprimento das normas da LGPD, as sanções administrativas podem ser aplicadas:',
    options: {
      A: 'pela CVM, exclusivamente, mediante denúncia do cliente.',
      B: 'pela ANPD, após o decurso de processo administrativo sancionador.',
      C: 'apenas pelo Poder Judiciário, mediante ação civil pública.',
      D: 'diretamente pelo Bacen, sem qualquer processo administrativo prévio.',
    },
    correct: 'B',
    explanation:
      'A LGPD prevê que, em caso de descumprimento de suas normas, podem ser aplicadas sanções administrativas pela ANPD (Autoridade Nacional de Proteção de Dados) após o decurso de processo administrativo sancionador.',
    explanationWrong: {
      A: 'A competência sancionadora administrativa pela LGPD é da ANPD, não da CVM — a CVM tem competência para outras matérias regulatórias do mercado de valores mobiliários.',
      C: 'A aplicação de sanções administrativas pela LGPD não é uma exclusividade do Poder Judiciário — cabe à ANPD, no âmbito administrativo, após processo próprio.',
      D: 'O Bacen não é o órgão responsável por aplicar sanções administrativas por descumprimento da LGPD — essa competência é da ANPD.',
    },
    examTip: 'Sanções administrativas por descumprimento da LGPD: competência da ANPD, após PROCESSO ADMINISTRATIVO SANCIONADOR (não é automático).',
    commonTrap: null,
    ...SRC('Obrigações dos agentes de tratamento', '641'),
  },
];
