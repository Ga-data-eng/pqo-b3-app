// Título VIII - Compliance
// Capítulo VI - Política de responsabilidade social, ambiental e climática (PRSAC)
// Fonte: Guia Por Dentro da B3, páginas ~686-690.

export const chapterRef = { titleNumber: 'VIII', chapterNumber: 'VI' };

export const topics = ['PRSAC'];

const SRC = (section, page) => ({
  source_title: 'Guia Por Dentro da B3',
  source_chapter: 'Título VIII, Capítulo VI — Política de responsabilidade social, ambiental e climática (PRSAC)',
  source_section: section,
  source_page: page,
});

export const questions = [
  {
    topic: 'PRSAC',
    subtopic: 'Natureza dos riscos cobertos',
    difficulty: 'facil',
    statement: 'A PRSAC (Política de Responsabilidade Social, Ambiental e Climática) deve cobrir riscos de natureza:',
    options: {
      A: 'social, ambiental e climática.',
      B: 'socioambiental, socioeconômico e operacional.',
      C: 'social, ambiental e demográfico.',
      D: 'socioambiental, socioeconômico e geopolítico.',
    },
    correct: 'A',
    explanation:
      'A PRSAC consiste no conjunto de princípios e diretrizes de natureza social, de natureza ambiental e de natureza climática a ser observado pela instituição na condução de seus negócios, atividades e processos, bem como em sua relação com as partes interessadas.',
    explanationWrong: {
      B: 'Socioambiental, socioeconômico e operacional não são as três naturezas de risco corretamente previstas para a PRSAC — as corretas são social, ambiental e climática, isoladamente.',
      C: '"Demográfico" não é uma das três naturezas de risco da PRSAC — a correta é "climática", não "demográfica".',
      D: 'Socioambiental, socioeconômico e geopolítico não correspondem às três naturezas corretas (social, ambiental e climática).',
    },
    examTip: 'PRSAC = SOCIAL + AMBIENTAL + CLIMÁTICA — três naturezas de risco distintas e específicas (não "socioambiental" combinado).',
    commonTrap: '⚠️ Pegadinha: juntar "social" e "ambiental" em uma única palavra ("socioambiental") — no guia elas são tratadas como três categorias SEPARADAS.',
    ...SRC('Apresentação', '686'),
  },
  {
    topic: 'PRSAC',
    subtopic: 'Base regulatória e segmentos',
    difficulty: 'dificil',
    statement: 'A Resolução CMN nº 4.945/21 determina que a PRSAC deve ser estabelecida pelas instituições autorizadas a funcionar pelo Bacen enquadradas em quais segmentos, conforme a Resolução nº 4.553/17?',
    options: {
      A: 'Apenas no Segmento 1 (S1), o de maior porte.',
      B: 'Segmentos 1 a 5 (S1, S2, S3, S4 e S5).',
      C: 'Apenas nos Segmentos 4 e 5 (S4 e S5), de menor porte.',
      D: 'Todos os segmentos, exceto o Segmento 1 (S1).',
    },
    correct: 'B',
    explanation:
      'A Resolução CMN nº 4.945/21 determina que as instituições financeiras e demais instituições autorizadas a funcionar pelo Banco Central do Brasil enquadradas no Segmento 1 (S1), no Segmento 2 (S2), no Segmento 3 (S3), no Segmento 4 (S4) e no Segmento 5 (S5) devem estabelecer a PRSAC.',
    explanationWrong: {
      A: 'A exigência não se limita ao S1 — abrange todos os cinco segmentos (S1 a S5).',
      C: 'A exigência não se limita a S4 e S5 — abrange todos os cinco segmentos, incluindo os de maior porte (S1 a S3).',
      D: 'A exigência não exclui o S1 — pelo contrário, abrange todos os segmentos, do S1 ao S5, sem exceção.',
    },
    examTip: 'PRSAC é exigida de TODOS os segmentos (S1 a S5) — não há exceção por porte da instituição.',
    commonTrap: null,
    ...SRC('Apresentação', '686'),
  },
  {
    topic: 'PRSAC',
    subtopic: 'Proporcionalidade da PRSAC',
    difficulty: 'medio',
    statement: 'A PRSAC e as ações para sua efetividade devem ser proporcionais:',
    options: {
      A: 'exclusivamente ao número de funcionários da instituição.',
      B: 'ao modelo de negócio, à natureza das operações e à complexidade dos produtos/serviços/atividades/processos da instituição, e adequadas à dimensão e relevância da exposição aos riscos social, ambiental e climático.',
      C: 'apenas ao valor de mercado da instituição na B3.',
      D: 'exclusivamente à localização geográfica da sede da instituição.',
    },
    correct: 'B',
    explanation:
      'A PRSAC e as ações para sua efetividade devem ser: (i) proporcionais ao modelo de negócio, à natureza das operações e à complexidade dos produtos, dos serviços, das atividades e dos processos da instituição; e (ii) adequadas à dimensão e à relevância da exposição ao risco social, ao risco ambiental e ao risco climático.',
    explanationWrong: {
      A: 'Não se limita ao número de funcionários — os critérios são o modelo de negócio, natureza das operações, complexidade e exposição a riscos social/ambiental/climático.',
      C: 'Não se limita ao valor de mercado na B3 — os critérios de proporcionalidade são operacionais e de exposição a risco, não de valuation.',
      D: 'A localização geográfica da sede não é, isoladamente, o critério de proporcionalidade estabelecido pela norma.',
    },
    examTip: 'PRSAC proporcional a: modelo de negócio + natureza/complexidade das operações + dimensão/relevância da exposição a risco social/ambiental/climático.',
    commonTrap: null,
    ...SRC('Apresentação', '686'),
  },
  {
    topic: 'PRSAC',
    subtopic: 'PRSAC em conglomerados prudenciais',
    difficulty: 'prova',
    statement: 'Com relação a conglomerados prudenciais, a PRSAC:',
    options: {
      A: 'deve ser segregada, cada instituição do conglomerado possuindo a sua própria PRSAC independente.',
      B: 'deve ser única, ou seja, uma única PRSAC para todo o conglomerado, sem qualquer distinção entre as instituições.',
      C: 'pode ser única para o conglomerado, tratando apenas do que for comum a todas as empresas do grupo, ignorando particularidades individuais.',
      D: 'pode ser unificada, mas deve considerar aspectos de cada instituição individualmente, além dos aspectos do conglomerado.',
    },
    correct: 'D',
    explanation:
      'A PRSAC deve ser unificada para as instituições integrantes de um mesmo conglomerado prudencial. Entretanto, a PRSAC unificada e as ações com vistas à sua efetividade devem considerar aspectos de natureza social, ambiental e climática relacionados ao conglomerado E A CADA INSTITUIÇÃO INDIVIDUALMENTE.',
    explanationWrong: {
      A: 'É o oposto: a PRSAC deve ser UNIFICADA para o conglomerado, não segregada em políticas independentes por instituição.',
      B: 'Embora deva ser única (unificada), não pode ignorar as particularidades — precisa considerar também os aspectos específicos de CADA instituição individualmente.',
      C: 'Não pode ignorar particularidades individuais — a unificação deve conviver com a consideração dos aspectos específicos de cada instituição do grupo.',
    },
    examTip: 'PRSAC em conglomerado: UNIFICADA, mas considerando aspectos tanto do CONGLOMERADO quanto de CADA instituição individualmente — os dois níveis coexistem.',
    commonTrap: '⚠️ Pegadinha: "unificada" não significa "genérica/só o que é comum" — precisa captar também as particularidades de cada instituição.',
    ...SRC('Apresentação', '687'),
  },
  {
    topic: 'PRSAC',
    subtopic: 'Diretor responsável pela PRSAC',
    difficulty: 'dificil',
    statement: 'O diretor responsável pela PRSAC e por assuntos referentes à Resolução CMN nº 4.945/21 tem, entre suas atribuições:',
    options: {
      A: 'aprovar sozinho a PRSAC, sem qualquer participação do conselho de administração.',
      B: 'prestar subsídio e participar do processo de tomada de decisões relacionadas ao estabelecimento e revisão da PRSAC, auxiliando o conselho de administração, além de implementar e monitorar as ações de efetividade da PRSAC.',
      C: 'representar exclusivamente a instituição perante o Ministério do Meio Ambiente.',
      D: 'substituir integralmente o papel da auditoria externa em matéria ambiental.',
    },
    correct: 'B',
    explanation:
      'As atribuições do diretor responsável pela PRSAC incluem, entre outras: (i) prestação de subsídio e participação no processo de tomada de decisões relacionadas ao estabelecimento e à revisão da PRSAC, auxiliando o conselho de administração; e (ii) implementação de ações com vistas à efetividade da PRSAC, o correspondente monitoramento e seu aperfeiçoamento.',
    explanationWrong: {
      A: 'O diretor não aprova sozinho — ele AUXILIA o conselho de administração no processo decisório, não substituindo sua competência de aprovação.',
      C: 'Não há essa atribuição de representação exclusiva perante o Ministério do Meio Ambiente — o papel é interno, de subsídio ao conselho e implementação/monitoramento da PRSAC.',
      D: 'O diretor de PRSAC não substitui a auditoria externa — são funções distintas dentro da governança da instituição.',
    },
    examTip: 'Diretor de PRSAC: AUXILIA o conselho (subsídio/decisão) + IMPLEMENTA/MONITORA a efetividade — não decide sozinho nem substitui outros órgãos.',
    commonTrap: null,
    ...SRC('Apresentação', '687'),
  },
  {
    topic: 'PRSAC',
    subtopic: 'Guarda de documentação',
    difficulty: 'prova',
    statement: 'A documentação relativa ao estabelecimento da PRSAC e à implementação de ações com vistas à sua efetividade deve ser mantida à disposição:',
    options: {
      A: 'do Ministério do Meio Ambiente, por 10 anos.',
      B: 'do Banco Central do Brasil, por 5 anos.',
      C: 'da CVM, por 3 anos.',
      D: 'do Banco Central do Brasil, por 10 anos.',
    },
    correct: 'B',
    explanation:
      'Deve ser mantida, à disposição do Banco Central do Brasil, por cinco anos, a documentação relativa ao estabelecimento da PRSAC e à implementação de ações com vistas à sua efetividade.',
    explanationWrong: {
      A: 'Não é o Ministério do Meio Ambiente o destinatário dessa guarda de documentação — é o Banco Central do Brasil, com prazo de 5 anos (não 10).',
      C: 'Não é a CVM o destinatário dessa exigência específica de guarda de documentação da PRSAC — é o Bacen, e o prazo correto é 5 anos, não 3.',
      D: 'O órgão está correto (Bacen), mas o prazo está incorreto — o prazo correto é de 5 anos, não 10.',
    },
    examTip: 'PRSAC: documentação à disposição do BACEN por 5 ANOS — mesmo padrão de prazo de PLD/FTP e segurança cibernética.',
    commonTrap: '⚠️ O prazo de 5 anos é um padrão recorrente em Compliance no guia — memorize-o como referência geral (PLD/FTP, segurança cibernética, PRSAC).',
    ...SRC('Apresentação', '687-688'),
  },
];
