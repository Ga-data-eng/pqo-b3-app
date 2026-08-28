// Título VIII - Compliance
// Capítulo III - Adequação ao perfil do cliente (Suitability)
// Fonte: Guia Por Dentro da B3, páginas ~649-660.

export const chapterRef = { titleNumber: 'VIII', chapterNumber: 'III' };

export const topics = [
  'Fundamentos do suitability',
  'Perfil do cliente e categorias de produtos',
  'Operação fora do perfil',
  'Dispensa do dever de verificação',
  'Categorias de investidores',
];

const SRC = (section, page) => ({
  source_title: 'Guia Por Dentro da B3',
  source_chapter: 'Título VIII, Capítulo III — Adequação ao perfil do cliente (Suitability)',
  source_section: section,
  source_page: page,
});

export const questions = [
  // ---------- Fundamentos ----------
  {
    topic: 'Fundamentos do suitability',
    subtopic: 'Base regulatória',
    difficulty: 'medio',
    statement: 'A obrigação de verificar a adequação de produtos, serviços ou operações ao perfil do cliente (suitability) está disciplinada na:',
    options: {
      A: 'Resolução CVM nº 30/21.',
      B: 'Resolução CVM nº 50/21.',
      C: 'Resolução CVM nº 62/2022.',
      D: 'Lei nº 13.709/2018.',
    },
    correct: 'A',
    explanation:
      'As pessoas habilitadas a atuar como integrantes do sistema de distribuição e os consultores de valores mobiliários devem, antes de recomendar produtos, realizar operações ou prestar serviços, verificar sua adequação ao perfil do cliente. Essa obrigação está disciplinada na Resolução CVM nº 30, de 11 de maio de 2021.',
    explanationWrong: {
      B: 'A Resolução CVM nº 50/21 trata de PLD/FTP (prevenção à lavagem de dinheiro), não de suitability — embora seus prazos de atualização cadastral sejam usados como referência para o perfil do cliente.',
      C: 'A Resolução CVM nº 62/2022 trata de práticas abusivas e operações ilícitas (spoofing, layering, churning etc.), não de suitability.',
      D: 'A Lei nº 13.709/2018 é a LGPD, sobre proteção de dados pessoais — matéria diferente de suitability.',
    },
    examTip: 'Suitability = Resolução CVM 30/21. Não confunda com CVM 50/21 (PLD/FTP) ou CVM 62/2022 (operações ilícitas).',
    commonTrap: null,
    ...SRC('Apresentação', '649'),
  },

  // ---------- Perfil do cliente ----------
  {
    topic: 'Perfil do cliente e categorias de produtos',
    subtopic: 'Os 3 elementos de verificação',
    difficulty: 'prova',
    statement: 'Na verificação de adequação ao perfil do cliente (suitability), o participante deve verificar se o produto, serviço ou operação é adequado:',
    options: {
      A: 'apenas aos objetivos de investimento do cliente, sendo os demais aspectos irrelevantes.',
      B: 'aos objetivos de investimento, à situação financeira do cliente e ao seu conhecimento para compreender os riscos envolvidos.',
      C: 'exclusivamente à situação financeira do cliente, sendo objetivos e conhecimento dispensáveis.',
      D: 'apenas ao histórico de operações anteriores do cliente na B3.',
    },
    correct: 'B',
    explanation:
      'O participante deve verificar se: (i) o produto, serviço ou operação é adequado aos objetivos de investimento do cliente; (ii) a situação financeira do cliente é compatível com o produto, serviço ou operação; e (iii) o cliente possui conhecimento necessário para compreender os riscos relacionados ao produto, serviço ou operação.',
    explanationWrong: {
      A: 'Não é apenas o objetivo de investimento — a situação financeira e o conhecimento do cliente também são elementos obrigatórios da verificação.',
      C: 'Não é apenas a situação financeira — os objetivos de investimento e o conhecimento/compreensão dos riscos também são elementos essenciais.',
      D: 'O histórico de operações é apenas UM dos critérios usados para avaliar o conhecimento do cliente — não é o único elemento da verificação de suitability.',
    },
    examTip: 'Os 3 pilares do suitability: (1) objetivo de investimento, (2) situação financeira, (3) conhecimento/compreensão dos riscos.',
    commonTrap: null,
    ...SRC('Perfil do cliente', '649-650'),
  },
  {
    topic: 'Perfil do cliente e categorias de produtos',
    subtopic: 'Conhecimento e compreensão de riscos — exceção',
    difficulty: 'dificil',
    statement: 'O critério de "conhecimento e compreensão dos riscos" na verificação de suitability:',
    options: {
      A: 'aplica-se igualmente a clientes pessoa física e pessoa jurídica, sem qualquer distinção.',
      B: 'não se aplica a cliente pessoa jurídica.',
      C: 'aplica-se apenas a investidores qualificados pessoa física.',
      D: 'é o único critério dispensável para investidores profissionais e qualificados, mas obrigatório para todos os demais.',
    },
    correct: 'B',
    explanation:
      'O item "conhecimento e compreensão dos riscos (não se aplica a cliente pessoa jurídica)" é expressamente ressalvado no guia — esse critério específico não se aplica quando o cliente for pessoa jurídica, diferentemente dos outros dois critérios (objetivo de investimento e situação financeira), que se aplicam a todos.',
    explanationWrong: {
      A: 'Há sim uma distinção expressa: o critério de conhecimento/compreensão de riscos NÃO se aplica a cliente pessoa jurídica.',
      C: 'Não se trata de uma exceção restrita a investidores qualificados pessoa física — a ressalva é sobre pessoa JURÍDICA em geral (qualquer cliente PJ), não sobre o tipo de investidor.',
      D: 'A dispensa da verificação completa de suitability para investidores qualificados/profissionais é um tema à parte (seção 6, dispensa do dever de verificação) — diferente da ressalva específica sobre PJ no critério de "conhecimento".',
    },
    examTip: 'O critério "conhecimento e compreensão dos riscos" é o ÚNICO dos três que NÃO se aplica a cliente pessoa jurídica.',
    commonTrap: '⚠️ Não confunda essa ressalva específica (PJ) com a dispensa total de suitability para investidores qualificados/profissionais — são temas diferentes do capítulo.',
    ...SRC('Perfil do cliente', '650-651'),
  },
  {
    topic: 'Perfil do cliente e categorias de produtos',
    subtopic: 'Vedação de recomendação inadequada',
    difficulty: 'prova',
    statement: 'Caso não seja possível identificar o perfil do cliente por falta de informações, ou sua classificação esteja baseada em informações desatualizadas, o participante:',
    options: {
      A: 'pode fazer qualquer recomendação, desde que documentada.',
      B: 'não pode fazer recomendação alguma.',
      C: 'pode recomendar produtos de baixo risco, independentemente da situação cadastral.',
      D: 'deve consultar a CVM antes de cada recomendação individual.',
    },
    correct: 'B',
    explanation:
      'É proibido recomendar produto ou serviço inadequado ao perfil. Além disso, se não for possível identificar o perfil do cliente por falta de informações ou sua classificação for baseada em informações desatualizadas, NÃO é permitido fazer recomendação alguma.',
    explanationWrong: {
      A: 'É o oposto: sem perfil identificado (ou com perfil desatualizado), NENHUMA recomendação é permitida, documentada ou não.',
      C: 'Mesmo produtos de baixo risco não podem ser recomendados sem que o perfil do cliente esteja corretamente identificado e atualizado.',
      D: 'Não há exigência de consulta prévia à CVM para cada recomendação individual — a vedação é uma regra geral de conduta do participante, não um processo de aprovação caso a caso.',
    },
    examTip: 'Sem perfil identificado ou com cadastro desatualizado = ZERO recomendação permitida, seja qual for o produto.',
    commonTrap: '⚠️ Pegadinha: achar que produtos "mais simples" ou de "baixo risco" escapam dessa vedação — a regra é absoluta enquanto o perfil não estiver identificado/atualizado.',
    ...SRC('Categorias de produtos', '651-652'),
  },

  // ---------- Operação fora do perfil ----------
  {
    topic: 'Operação fora do perfil',
    subtopic: 'Procedimento para operação divergente',
    difficulty: 'prova',
    statement: 'Caso o investidor envie ordem de operação divergente de seu perfil, o participante deve:',
    options: {
      A: 'recusar e não executar a ordem, em qualquer hipótese.',
      B: 'recusar e informar imediatamente ao Coaf e à CVM.',
      C: 'aceitar e executar, sem qualquer procedimento adicional.',
      D: 'alertar o cliente sobre a divergência e obter sua declaração expressa de ciência, podendo então executar a ordem.',
    },
    correct: 'D',
    explanation:
      'Se o cliente solicitar operação que não seja adequada ao seu perfil (ou o perfil não puder ser verificado), o participante deve, antes da primeira operação: alertar o cliente sobre a inadequação (com indicação das causas da divergência) e obter declaração expressa do cliente de que está ciente dessa situação. Após esse procedimento, a operação pode ser executada.',
    explanationWrong: {
      A: 'Não é uma recusa automática e absoluta — o participante deve alertar e obter declaração de ciência do cliente, podendo então executar a operação.',
      B: 'Não há exigência de comunicação ao Coaf/CVM nesse caso — esse é um procedimento de PLD/FTP para indícios de lavagem de dinheiro, situação diferente da simples inadequação de perfil.',
      C: 'Não é uma aceitação automática sem qualquer formalidade — é necessário o alerta prévio e a declaração expressa de ciência do cliente.',
      },
    examTip: 'Operação fora do perfil: ALERTAR (causas da divergência) + obter DECLARAÇÃO EXPRESSA de ciência do cliente — depois disso, pode executar.',
    commonTrap: '⚠️ Não é proibição nem aceitação livre — é um meio-termo com alerta e formalização da ciência do cliente.',
    ...SRC('Operação fora do perfil', '652-653'),
  },
  {
    topic: 'Operação fora do perfil',
    subtopic: 'Dispensa do alerta — recomendação de consultor',
    difficulty: 'dificil',
    statement: 'O alerta e a declaração expressa de ciência do cliente sobre operação fora do perfil são dispensados quando:',
    options: {
      A: 'o cliente for pessoa jurídica de qualquer porte.',
      B: 'o cliente estiver, comprovadamente, implementando recomendações fornecidas por consultor de valores mobiliários autorizado pela CVM.',
      C: 'a operação envolver valor inferior a R$ 10.000,00.',
      D: 'o cliente for considerado investidor de varejo.',
    },
    correct: 'B',
    explanation:
      'Esse alerta e essa declaração expressa são dispensados quando o cliente estiver, comprovadamente, implementando recomendações fornecidas por consultor de valores mobiliários autorizado pela CVM — nesse caso, presume-se que o cliente já recebeu orientação profissional adequada.',
    explanationWrong: {
      A: 'Ser pessoa jurídica, por si só, não dispensa esse alerta — a dispensa está vinculada especificamente à implementação de recomendação de consultor autorizado pela CVM.',
      C: 'Não há dispensa baseada em valor da operação — o critério de dispensa é a origem da recomendação (consultor autorizado), não o montante envolvido.',
      D: 'Ser investidor de varejo não gera, por si só, dispensa — pelo contrário, investidores de varejo em geral têm MAIS proteções de suitability, não menos.',
    },
    examTip: 'Dispensa do alerta: só quando o cliente segue recomendação de CONSULTOR autorizado pela CVM — presunção de que já houve orientação profissional adequada.',
    commonTrap: null,
    ...SRC('Operação fora do perfil', '653'),
  },

  // ---------- Regras e controles ----------
  {
    topic: 'Perfil do cliente e categorias de produtos',
    subtopic: 'Periodicidade de atualização',
    difficulty: 'prova',
    statement: 'Em relação à periodicidade das obrigações de suitability, é correto afirmar que:',
    options: {
      A: 'o perfil do cliente deve ser atualizado no intervalo máximo de 5 anos, e a classificação das categorias de valores mobiliários deve ser reanalisada em intervalos não superiores a 24 meses.',
      B: 'tanto o perfil do cliente quanto a classificação de produtos devem ser reanalisados anualmente, sem exceção.',
      C: 'não há prazo definido para atualização do perfil do cliente, ficando a critério exclusivo do participante.',
      D: 'a classificação de produtos deve ser revista a cada 5 anos, e o perfil do cliente, a cada 24 meses.',
    },
    correct: 'A',
    explanation:
      'Os participantes devem manter as informações do perfil de seus clientes atualizadas, observando o mesmo intervalo máximo de 5 (cinco) anos previsto na Resolução CVM 50/21 (PLD/FTP) para atualização cadastral, e devem proceder a nova análise e classificação das categorias de valores mobiliários em intervalos não superiores a 24 (vinte e quatro) meses.',
    explanationWrong: {
      B: 'Não há exigência de reanálise ANUAL para ambos — os prazos corretos são 5 anos (perfil do cliente) e 24 meses (categorias de produtos).',
      C: 'Há sim um prazo máximo definido (5 anos) para a atualização do perfil do cliente — não é uma decisão livre e sem limite do participante.',
      D: 'Inverte os prazos: o perfil do cliente segue o limite de 5 ANOS, e a classificação de produtos segue o limite de 24 MESES — não o contrário.',
    },
    examTip: 'Perfil do cliente: até 5 ANOS (mesmo prazo do PLD/FTP). Classificação de produtos/valores mobiliários: até 24 MESES.',
    commonTrap: '⚠️ Pegadinha: trocar os dois prazos entre si — memorize "cliente = 5 anos, produto = 24 meses".',
    ...SRC('Regras, procedimentos e controles internos referentes à suitability', '652'),
  },
  {
    topic: 'Perfil do cliente e categorias de produtos',
    subtopic: 'Diretor responsável — relatório anual',
    difficulty: 'dificil',
    statement: 'O diretor estatutário responsável pelo cumprimento das normas de suitability deve encaminhar aos órgãos de administração, até o último dia útil de abril, relatório relativo ao ano civil anterior contendo:',
    options: {
      A: 'apenas o número total de clientes atendidos no período.',
      B: 'avaliação do cumprimento das regras, procedimentos e controles internos, com recomendações sobre deficiências e cronogramas de saneamento.',
      C: 'exclusivamente o extrato financeiro de todas as operações realizadas pelo participante.',
      D: 'a lista nominal de todos os investidores qualificados atendidos.',
    },
    correct: 'B',
    explanation:
      'O diretor estatutário responsável por suitability deve encaminhar aos órgãos de administração, até o último dia útil de abril, relatório relativo ao ano civil anterior, contendo avaliação do cumprimento das regras, procedimentos e controles internos de verificação de adequação, e as recomendações a respeito de eventuais deficiências, com estabelecimento de cronogramas de saneamento.',
    explanationWrong: {
      A: 'O relatório não se limita a um número de clientes — deve conter avaliação qualitativa do cumprimento das regras/controles e recomendações.',
      C: 'Não é um extrato financeiro de operações — é um relatório de AVALIAÇÃO DE CONFORMIDADE dos controles internos de suitability.',
      D: 'Não é uma lista nominal de investidores qualificados — o foco é avaliar o cumprimento das regras e controles, não listar clientes.',
    },
    examTip: 'Relatório do diretor de suitability: até último dia útil de ABRIL, avaliando cumprimento de regras/controles + recomendações + cronograma de saneamento de deficiências.',
    commonTrap: '⚠️ Mesmo mês (abril) do relatório de avaliação interna de risco de PLD/FTP visto no Capítulo I — mas são relatórios DIFERENTES, sobre temas diferentes.',
    ...SRC('Regras, procedimentos e controles internos referentes à suitability', '652'),
  },

  // ---------- Dispensa ----------
  {
    topic: 'Dispensa do dever de verificação',
    subtopic: 'Hipóteses de dispensa',
    difficulty: 'prova',
    statement: 'O participante está dispensado de verificar a adequação do produto, serviço ou operação ao perfil do cliente, EXCETO no caso de cliente:',
    options: {
      A: 'investidor qualificado (com as exceções previstas na norma).',
      B: 'pessoa jurídica de direito público.',
      C: 'com carteira administrada discricionariamente por administrador autorizado pela CVM.',
      D: 'pessoa física iniciante, sem qualquer histórico de investimentos, classificado como investidor de varejo.',
    },
    correct: 'D',
    explanation:
      'O participante está dispensado de verificar a adequação no caso de: investidor qualificado (com exceções específicas); pessoa jurídica de direito público; cliente com carteira administrada discricionariamente por administrador autorizado pela CVM; ou cliente que já tenha perfil definido por consultor autorizado pela CVM e esteja implementando a recomendação. Um investidor de varejo iniciante, sem qualquer dessas condições, NÃO se enquadra em nenhuma hipótese de dispensa.',
    explanationWrong: {
      A: 'É justamente uma das hipóteses de dispensa expressamente previstas (investidor qualificado, com as exceções da norma).',
      B: 'Pessoa jurídica de direito público é uma das hipóteses expressas de dispensa do dever de verificação.',
      C: 'Carteira administrada discricionariamente por administrador autorizado pela CVM é uma das hipóteses expressas de dispensa.',
    },
    examTip: 'Dispensa de suitability: investidor qualificado, PJ de direito público, carteira administrada discricionariamente, ou cliente seguindo recomendação de consultor autorizado. Investidor de varejo comum NÃO é dispensado.',
    commonTrap: null,
    ...SRC('Dispensa do dever de verificação de adequação', '653-654'),
  },
  {
    topic: 'Dispensa do dever de verificação',
    subtopic: 'Limite da dispensa vinculada a consultor',
    difficulty: 'dificil',
    statement: 'No caso de cliente que já tenha seu perfil definido por consultor de valores mobiliários autorizado pela CVM, a dispensa de verificação de adequação:',
    options: {
      A: 'aplica-se a qualquer produto ou serviço solicitado pelo cliente, independentemente de vínculo com a recomendação do consultor.',
      B: 'aplica-se somente quando os produtos, serviços ou operações estiverem diretamente relacionados à implementação da recomendação do consultor.',
      C: 'é permanente e irrestrita, mesmo após o encerramento do vínculo com o consultor.',
      D: 'dispensa também a exigência de o participante obter a avaliação de perfil realizada pelo consultor.',
    },
    correct: 'B',
    explanation:
      'A dispensa de verificação de adequação somente se aplica quando os produtos, serviços ou operações solicitadas pelo cliente estiverem diretamente relacionados à implementação das recomendações fornecidas pelo consultor. Se o cliente demandar qualquer produto, serviço ou operação NÃO vinculada à recomendação do consultor, o participante continua obrigado a realizar a verificação de adequação.',
    explanationWrong: {
      A: 'É o oposto: a dispensa é limitada exatamente aos produtos/operações vinculados à recomendação do consultor — para o restante, a verificação normal continua obrigatória.',
      C: 'A dispensa não é permanente e irrestrita — está condicionada à implementação efetiva e comprovada das recomendações daquele consultor específico.',
      D: 'O participante DEVE exigir do cliente a avaliação de perfil realizada pelo consultor — essa exigência não é dispensada, é justamente um requisito da dispensa.',
    },
    examTip: 'Dispensa por recomendação de consultor: LIMITADA aos produtos/operações vinculados àquela recomendação específica — qualquer coisa fora disso exige verificação normal.',
    commonTrap: '⚠️ Pegadinha: achar que a dispensa "libera geral" o cliente de qualquer verificação futura — na verdade é restrita ao escopo exato da recomendação do consultor.',
    ...SRC('Dispensa do dever de verificação de adequação', '654'),
  },

  // ---------- Categorias de investidores ----------
  {
    topic: 'Categorias de investidores',
    subtopic: 'Investidor qualificado — valor mínimo',
    difficulty: 'facil',
    statement: 'A pessoa natural com investimentos financeiros em valor superior a R$ 1.000.000,00, ao atestar essa condição por escrito nos termos exigidos pela CVM, é considerada:',
    options: {
      A: 'investidor de varejo.',
      B: 'investidor qualificado.',
      C: 'investidor institucional.',
      D: 'investidor profissional.',
    },
    correct: 'B',
    explanation:
      'Os investidores qualificados incluem as pessoas naturais ou jurídicas que possuam investimentos financeiros em valor superior a R$ 1.000.000,00 (um milhão de reais) e que, adicionalmente, atestem por escrito sua condição de investidor qualificado mediante termo próprio, de acordo com a Resolução CVM nº 30/21.',
    explanationWrong: {
      A: 'Investidor de varejo é a categoria "padrão", sem exigências especiais de patrimônio — não é essa a classificação de quem atesta R$ 1 milhão em investimentos.',
      C: '"Investidor institucional" não é uma categoria formalmente definida nesse contexto específico do guia — a nomenclatura correta usada é investidor qualificado/profissional.',
      D: 'Investidor PROFISSIONAL exige um patamar de investimentos SUPERIOR (R$ 10.000.000,00), não R$ 1.000.000,00 — categoria diferente e mais exigente.',
    },
    examTip: 'Investidor qualificado: R$ 1 milhão + termo escrito. Investidor profissional: R$ 10 milhões + termo escrito. Não troque os valores.',
    commonTrap: '⚠️ Pegadinha clássica: trocar os R$ 1 milhão (qualificado) pelos R$ 10 milhões (profissional).',
    ...SRC('Categorias de investidores', '655'),
  },
  {
    topic: 'Categorias de investidores',
    subtopic: 'Investidor profissional — valor mínimo',
    difficulty: 'medio',
    statement: 'São considerados investidores profissionais, entre outros, as pessoas naturais ou jurídicas que possuam investimentos financeiros em valor superior a:',
    options: {
      A: 'R$ 500.000,00.',
      B: 'R$ 1.000.000,00.',
      C: 'R$ 5.000.000,00.',
      D: 'R$ 10.000.000,00.',
    },
    correct: 'D',
    explanation:
      'São investidores profissionais as pessoas naturais ou jurídicas que possuam investimentos financeiros em valor superior a R$ 10.000.000,00 (dez milhões de reais) e que, adicionalmente, atestem por escrito sua condição de investidor profissional mediante termo próprio, de acordo com a Resolução CVM nº 30/21.',
    explanationWrong: {
      A: 'R$ 500.000,00 não corresponde a nenhum dos patamares de investidor qualificado ou profissional previstos na norma.',
      B: 'R$ 1.000.000,00 é o patamar de investidor QUALIFICADO, não de investidor profissional (que exige valor bem superior).',
      C: 'R$ 5.000.000,00 não corresponde ao valor estabelecido para investidor profissional (R$ 10 milhões).',
    },
    examTip: 'Investidor profissional = R$ 10 milhões. É o patamar mais alto de categoria de investidor por patrimônio.',
    commonTrap: null,
    ...SRC('Categorias de investidores', '654-655'),
  },
  {
    topic: 'Categorias de investidores',
    subtopic: 'Todo investidor profissional é qualificado?',
    difficulty: 'dificil',
    statement: 'Em relação à relação entre as categorias de investidores profissionais e qualificados, é correto afirmar que:',
    options: {
      A: 'são categorias mutuamente excludentes — um investidor não pode ser, ao mesmo tempo, profissional e qualificado.',
      B: 'todo investidor profissional é também considerado investidor qualificado, mas nem todo investidor qualificado é profissional.',
      C: 'todo investidor qualificado é também investidor profissional, automaticamente.',
      D: 'as duas categorias são idênticas, apenas com nomenclaturas diferentes.',
    },
    correct: 'B',
    explanation:
      'Os investidores qualificados incluem, entre suas categorias, os "investidores profissionais" — ou seja, todo investidor profissional é automaticamente também qualificado. Porém, há outras hipóteses de investidor qualificado (como a pessoa com R$ 1 milhão que atesta a condição) que não chegam ao patamar de investidor profissional (R$ 10 milhões).',
    explanationWrong: {
      A: 'Não são mutuamente excludentes — pelo contrário, "investidores profissionais" é uma das categorias que compõem o grupo mais amplo de "investidores qualificados".',
      C: 'É o oposto do correto: nem todo investidor qualificado é profissional (ex.: quem tem R$ 1 milhão é qualificado, mas não atinge o patamar de profissional, que exige R$ 10 milhões).',
      D: 'Não são idênticas — investidor profissional é uma categoria mais restrita (exigências maiores), contida dentro do conjunto mais amplo de investidor qualificado.',
    },
    examTip: 'Investidor PROFISSIONAL é um subconjunto de investidor QUALIFICADO — todo profissional é qualificado, mas nem todo qualificado é profissional.',
    commonTrap: '⚠️ Muito cobrado — visualize como círculos concêntricos: qualificado (círculo maior) contém profissional (círculo menor).',
    ...SRC('Categorias de investidores', '654-655'),
  },
];
