// Título VIII - Compliance
// Capítulo I - Prevenção à lavagem de dinheiro, ao financiamento do terrorismo e ao
// financiamento da proliferação de armas de destruição em massa – PLD/FTP
// Fonte: Guia Por Dentro da B3, páginas ~616-635.

export const chapterRef = { titleNumber: 'VIII', chapterNumber: 'I' };

export const topics = [
  'Fundamentos regulatórios do PLD/FTP',
  'Abordagem baseada em risco (ABR)',
  'Política de PLD/FTP',
  'Regras, procedimentos e controles',
  'Comunicação ao Coaf e sanções internacionais',
];

const SRC = (section, page) => ({
  source_title: 'Guia Por Dentro da B3',
  source_chapter: 'Título VIII, Capítulo I — PLD/FTP',
  source_section: section,
  source_page: page,
});

export const questions = [
  // ---------- Fundamentos regulatórios ----------
  {
    topic: 'Fundamentos regulatórios do PLD/FTP',
    subtopic: 'Resolução CVM 50/21',
    difficulty: 'medio',
    statement: 'A Resolução CVM nº 50/21, que trata da prevenção à lavagem de dinheiro, ao financiamento do terrorismo e ao financiamento da proliferação de armas de destruição em massa, revogou:',
    options: {
      A: 'a Instrução CVM 617/19.',
      B: 'a Circular Bacen 3.978/20.',
      C: 'a Lei nº 9.613/98.',
      D: 'a Lei nº 13.260/16.',
    },
    correct: 'A',
    explanation:
      'Em agosto de 2021, a CVM expediu a Resolução CVM nº 50/21, que revogou a Instrução CVM 617/19, alinhando-se às diretrizes do Gafi (Grupo de Ação Financeira) e incorporando ao escopo de PLD-FT o tema "prevenção ao financiamento de armas de destruição em massa".',
    explanationWrong: {
      B: 'A Circular Bacen 3.978/20 é uma norma distinta, editada pelo Banco Central, que continua vigente e se aplica às instituições autorizadas a funcionar pelo Bacen — não foi revogada pela Resolução CVM 50/21.',
      C: 'A Lei nº 9.613/98 é a lei que trata do crime de lavagem de dinheiro — permanece em vigor, sendo referenciada, não revogada, pela Resolução CVM 50/21.',
      D: 'A Lei nº 13.260/16 trata do financiamento do terrorismo — também permanece em vigor.',
    },
    examTip: 'Resolução CVM 50/21 revogou a Instrução CVM 617/19. Circular Bacen 3.978/20 é uma norma PARALELA (do Bacen), não revogada.',
    commonTrap: '⚠️ Não confunda as duas normas paralelas: CVM 50/21 (mercado de valores mobiliários) e Circular Bacen 3.978/20 (instituições autorizadas pelo Bacen) — corretoras/distribuidoras seguem AMBAS.',
    ...SRC('Apresentação', '616-617'),
  },
  {
    topic: 'Fundamentos regulatórios do PLD/FTP',
    subtopic: 'Abrangência da Resolução CVM 50/21',
    difficulty: 'dificil',
    statement: 'Além dos participantes de negociação e agentes de custódia, a Resolução CVM nº 50/21 também se aplica a:',
    options: {
      A: 'apenas pessoas físicas que atuam como investidores de varejo.',
      B: 'bolsas, câmara de compensação, central depositária, escrituradores e securitizadoras, entre outros.',
      C: 'exclusivamente instituições financeiras internacionais sem atuação no Brasil.',
      D: 'apenas ao Banco Central do Brasil, na qualidade de órgão regulador.',
    },
    correct: 'B',
    explanation:
      'A Resolução CVM nº 50/21 também se aplica, entre outros, a bolsas, câmara de compensação, central depositária, escrituradores e securitizadoras — abrangendo, portanto, um conjunto amplo de infraestruturas e prestadores de serviços do mercado de valores mobiliários.',
    explanationWrong: {
      A: 'A resolução não se limita a pessoas físicas investidoras de varejo — aplica-se a diversas pessoas físicas e jurídicas que prestam serviços no mercado (distribuição, custódia, intermediação, administração de carteiras).',
      C: 'Não é restrita a instituições financeiras internacionais sem atuação no Brasil — aplica-se justamente às entidades que atuam no mercado brasileiro de valores mobiliários.',
      D: 'O Bacen é o órgão regulador que edita norma PARALELA (Circular 3.978/20) — não é ele o destinatário da Resolução CVM 50/21, mas sim as entidades supervisionadas por ele e pela CVM.',
    },
    examTip: 'Abrangência ampla: participantes de negociação, agentes de custódia, bolsas, câmara, central depositária, escrituradores, securitizadoras.',
    commonTrap: null,
    ...SRC('Apresentação', '616-617'),
  },

  // ---------- ABR ----------
  {
    topic: 'Abordagem baseada em risco (ABR)',
    subtopic: 'Conceito de ABR',
    difficulty: 'prova',
    statement: 'A abordagem baseada em risco (ABR), no contexto de PLD/FTP, é definida como uma metodologia de gestão de riscos que:',
    options: {
      A: 'aplica exatamente os mesmos controles e recursos para todos os clientes e produtos, independentemente do risco.',
      B: 'permite distribuição eficaz de esforços, dedicando mais ou menos recursos conforme o risco identificado seja maior ou menor.',
      C: 'elimina totalmente a necessidade de classificação de clientes por risco.',
      D: 'é aplicável apenas a clientes classificados como PEP.',
    },
    correct: 'B',
    explanation:
      'A ABR é uma metodologia de gestão de riscos que permite distribuição eficaz de esforços, porque demanda identificação e compreensão dos riscos inerentes às atividades, de acordo com sua realidade específica, prevendo a dedicação de mais ou menos recursos para situações que apresentem riscos maiores ou menores.',
    explanationWrong: {
      A: 'É exatamente o oposto do conceito: a ABR pressupõe justamente a DIFERENCIAÇÃO de esforços conforme o nível de risco, não um tratamento uniforme.',
      C: 'A classificação de clientes por grau de risco é uma exigência central da ABR, não algo eliminado por ela.',
      D: 'A ABR se aplica a TODOS os clientes e produtos, sendo segmentados minimamente em baixo, médio e alto risco — PEP recebe tratamento específico dentro dessa lógica geral, mas a ABR não é exclusiva para PEP.',
    },
    examTip: 'ABR = "mais risco, mais esforço; menos risco, menos esforço" — distribuição proporcional e eficaz de recursos de controle.',
    commonTrap: null,
    ...SRC('Abordagem baseada em risco (ABR)', '617-618'),
  },
  {
    topic: 'Abordagem baseada em risco (ABR)',
    subtopic: 'Segmentação de produtos e clientes',
    difficulty: 'medio',
    statement: 'Para efeitos de PLD/FTP, os participantes devem segmentar, no mínimo, seus produtos/serviços e seus clientes em quantas faixas de risco?',
    options: {
      A: 'Duas: baixo e alto.',
      B: 'Três: baixo, médio e alto.',
      C: 'Quatro: baixíssimo, baixo, médio e alto.',
      D: 'Cinco faixas, conforme classificação da CVM.',
    },
    correct: 'B',
    explanation:
      'Os participantes devem elencar todos os produtos e serviços, segmentando-os minimamente em baixo, médio e alto risco, e classificar os respectivos clientes por grau de risco, segmentando-os também minimamente em baixo, médio e alto risco.',
    explanationWrong: {
      A: 'A segmentação mínima exigida é de TRÊS faixas (baixo/médio/alto), não apenas duas.',
      C: 'Não há exigência de quatro faixas — o mínimo estabelecido são três (baixo/médio/alto), podendo o participante adotar granularidade adicional se desejar.',
      D: 'Não há uma classificação fixa de cinco faixas definida pela CVM — a exigência mínima regulatória é de três faixas.',
    },
    examTip: 'Segmentação mínima: BAIXO, MÉDIO e ALTO risco — tanto para produtos/serviços quanto para clientes.',
    commonTrap: null,
    ...SRC('Abordagem baseada em risco (ABR)', '618'),
  },
  {
    topic: 'Abordagem baseada em risco (ABR)',
    subtopic: 'Diretor responsável — prazo de comunicação',
    difficulty: 'prova',
    statement: 'O diretor estatutário responsável pela implementação e manutenção da política de PLD/FTP deve ter sua nomeação informada à CVM, bolsa, câmara de compensação e central depositária no prazo de:',
    options: {
      A: '3 dias de sua investidura no cargo.',
      B: '7 dias de sua investidura no cargo.',
      C: '15 dias de sua investidura no cargo.',
      D: '30 dias de sua investidura no cargo.',
    },
    correct: 'B',
    explanation:
      'O diretor estatutário responsável por PLD/FTP deve ter sua nomeação informada à CVM, bolsa, câmara de compensação e central depositária no prazo de 7 (sete) dias de sua investidura no cargo, podendo acumular outras funções desde que não haja conflito de interesses.',
    explanationWrong: {
      A: '3 dias não corresponde ao prazo estabelecido — o prazo correto é de 7 dias.',
      C: '15 dias é superior ao prazo efetivamente previsto (7 dias).',
      D: '30 dias é bem superior ao prazo correto de 7 dias estabelecido para essa comunicação.',
    },
    examTip: 'Diretor de PLD/FTP: comunicar nomeação em 7 dias à CVM, bolsa, câmara e central depositária. Pode acumular outras funções, SE não gerar conflito de interesses (especialmente com áreas de negócio).',
    commonTrap: '⚠️ Não confunda com outros prazos do capítulo: 7 dias (comunicação da nomeação do diretor) x 24 horas (comunicação ao Coaf) x 5 anos (guarda de documentação).',
    ...SRC('Abordagem baseada em risco (ABR)', '619-620'),
  },
  {
    topic: 'Abordagem baseada em risco (ABR)',
    subtopic: 'Relatório de efetividade — Bacen',
    difficulty: 'dificil',
    statement: 'Conforme a Circular Bacen nº 3.978/20, o relatório de efetividade da política, controles e procedimentos de PLD deve ser encaminhado ao Bacen até:',
    options: {
      A: '31 de janeiro do ano seguinte ao ano de referência.',
      B: '31 de março do ano seguinte ao ano de referência.',
      C: '30 de abril do ano seguinte ao ano de referência.',
      D: '31 de dezembro do próprio ano de referência.',
    },
    correct: 'B',
    explanation:
      'O Bacen determina que o relatório de efetividade da política, controles e procedimentos de prevenção à lavagem de dinheiro seja encaminhado ao Bacen até 31 de março do ano seguinte ao ano de referência. O plano de ação para sanar deficiências e o respectivo relatório de acompanhamento devem ser encaminhados até 30 de junho do ano seguinte.',
    explanationWrong: {
      A: '31 de janeiro não é o prazo correto — o prazo é 31 de março.',
      C: '30 de abril é o prazo do relatório de avaliação interna de risco encaminhado à ALTA ADMINISTRAÇÃO (não ao Bacen) — não confundir os dois prazos.',
      D: '31 de dezembro do próprio ano de referência não corresponde ao prazo — o relatório é sobre o ano de referência, encaminhado no ANO SEGUINTE.',
    },
    examTip: 'Relatório de avaliação interna de risco → alta administração, até 30 de ABRIL. Relatório de efetividade → Bacen, até 31 de MARÇO. Plano de ação → até 30 de junho.',
    commonTrap: '⚠️ Muito cobrado: três prazos e três destinatários diferentes no mesmo capítulo — decore a combinação exata de cada um.',
    ...SRC('Abordagem baseada em risco (ABR)', '620'),
  },

  // ---------- Política de PLD/FTP ----------
  {
    topic: 'Política de PLD/FTP',
    subtopic: 'Conteúdo mínimo — atualização cadastral',
    difficulty: 'prova',
    statement: 'Nos termos do art. 4º da Resolução CVM nº 50/21, a política de PLD/FTP deve definir critérios e periodicidade para atualização cadastral dos clientes ativos, observando-se o intervalo máximo de:',
    options: {
      A: '2 anos.',
      B: '3 anos.',
      C: '5 anos.',
      D: '10 anos.',
    },
    correct: 'C',
    explanation:
      'A política de PLD/FTP deve contemplar a definição dos critérios e periodicidade para atualização cadastral dos clientes ativos, observando-se o intervalo máximo de 5 (cinco) anos.',
    explanationWrong: {
      A: '2 anos não corresponde ao intervalo máximo estabelecido — o limite é de 5 anos.',
      B: '3 anos também não é o prazo correto — o intervalo máximo previsto é de 5 anos.',
      D: '10 anos é superior ao intervalo máximo permitido de 5 anos.',
    },
    examTip: 'Atualização cadastral de cliente ativo: intervalo MÁXIMO de 5 anos.',
    commonTrap: '⚠️ Não confunda com o prazo de guarda de documentação (também 5 anos, mas com contagem diferente — a partir do cadastro/atualização ou da detecção da situação atípica).',
    ...SRC('Política de PLD/FTP', '621-622'),
  },
  {
    topic: 'Política de PLD/FTP',
    subtopic: 'Definição de cliente ativo',
    difficulty: 'facil',
    statement: 'Considera-se cliente ativo, para fins de PLD/FTP, aquele que:',
    options: {
      A: 'nos últimos 12 meses tenha efetuado movimentação de conta-corrente ou posição de custódia, realizado operação no mercado de valores mobiliários, ou apresentado saldo e posição de custódia.',
      B: 'nos últimos 18 meses tenha efetuado movimentação de conta-corrente ou posição de custódia, realizado operação no mercado de valores mobiliários, ou apresentado saldo e posição de custódia.',
      C: 'nos últimos 12 meses tenha apenas efetuado movimentação de conta-corrente, excluindo-se outras hipóteses.',
      D: 'nos últimos 18 meses tenha realizado exclusivamente operações de day trade.',
    },
    correct: 'A',
    explanation:
      'Cliente ativo é aquele que, nos últimos 12 (doze) meses, tenha efetuado movimentação de sua conta-corrente ou posição de custódia, realizado operação no mercado de valores mobiliários ou apresentado saldo e sua posição de custódia.',
    explanationWrong: {
      B: 'O prazo correto é de 12 meses, não 18 meses.',
      C: 'A definição não se restringe apenas à movimentação de conta-corrente — inclui também posição de custódia, operação no mercado ou apresentação de saldo/posição.',
      D: 'Não há restrição a operações de day trade, nem o prazo de 18 meses é o correto.',
    },
    examTip: 'Cliente ativo: 12 meses + (movimentação de conta-corrente/custódia OU operação no mercado OU saldo/posição de custódia) — critério amplo, qualquer uma das três hipóteses basta.',
    commonTrap: null,
    ...SRC('Política de PLD/FTP', '622'),
  },

  // ---------- Regras, procedimentos e controles ----------
  {
    topic: 'Regras, procedimentos e controles',
    subtopic: 'Situações atípicas — pessoa física',
    difficulty: 'dificil',
    statement: 'Constitui situação atípica que deve receber especial atenção no monitoramento de PLD/FTP, no caso de cliente pessoa física:',
    options: {
      A: 'operações cujos valores se afigurem incompatíveis com a ocupação profissional, os rendimentos ou a situação patrimonial ou financeira do cliente.',
      B: 'qualquer operação realizada no mercado de valores mobiliários, independentemente do valor.',
      C: 'operações realizadas exclusivamente por meio de corretoras autorizadas pela CVM.',
      D: 'operações realizadas dentro dos limites operacionais estabelecidos pela câmara.',
    },
    correct: 'A',
    explanation:
      'No caso de clientes pessoa física, são consideradas situações atípicas as operações cujos valores se afigurem incompatíveis com a ocupação profissional, os rendimentos ou a situação patrimonial ou financeira, tomando-se por base as informações cadastrais respectivas.',
    explanationWrong: {
      B: 'Nem toda operação no mercado é, por si só, atípica — a atipicidade decorre de incompatibilidade específica com o perfil do cliente, não da mera realização de operações.',
      C: 'Operar por meio de corretora autorizada pela CVM é a regra normal e regular do mercado — não configura, por si só, situação atípica.',
      D: 'Operar dentro dos limites operacionais estabelecidos é o comportamento esperado e regular — não é uma situação atípica de PLD/FTP.',
    },
    examTip: 'Situação atípica de PF: valores incompatíveis com ocupação/rendimento/patrimônio declarados no cadastro.',
    commonTrap: null,
    ...SRC('Regras, procedimentos e controles', '624-626'),
  },
  {
    topic: 'Regras, procedimentos e controles',
    subtopic: 'Prazo de comunicação ao Coaf',
    difficulty: 'prova',
    statement: 'Os participantes devem comunicar ao Coaf as situações e operações que possam constituir sérios indícios de lavagem de dinheiro no prazo de:',
    options: {
      A: '24 horas a contar da conclusão da análise que caracterizou a atipicidade.',
      B: '48 horas a contar da realização da operação suspeita.',
      C: '5 dias úteis a contar da detecção da situação atípica.',
      D: '30 dias corridos a contar do fim do mês em que a operação ocorreu.',
    },
    correct: 'A',
    explanation:
      'A comunicação ao Coaf deve ser efetuada no prazo de 24 (vinte e quatro) horas a contar da conclusão da análise que caracterizou a atipicidade da operação, respectiva proposta, ou mesmo da situação atípica detectada, como uma suspeição a ser comunicada.',
    explanationWrong: {
      B: '48 horas não é o prazo correto — o prazo é de 24 horas, contado da conclusão da análise (não da realização da operação em si).',
      C: '5 dias úteis é muito superior ao prazo real de 24 horas.',
      D: '30 dias corridos é muito superior ao prazo real e o marco temporal também está incorreto.',
    },
    examTip: 'Comunicação ao Coaf: 24 HORAS, contadas da CONCLUSÃO DA ANÁLISE (não da operação em si) — e não pode dar ciência do ato a ninguém, nem ao próprio cliente.',
    commonTrap: '⚠️ Pegadinha: o prazo conta da conclusão da ANÁLISE que caracteriza a atipicidade, não da data em que a operação suspeita ocorreu.',
    ...SRC('Regras, procedimentos e controles', '628-629'),
  },
  {
    topic: 'Regras, procedimentos e controles',
    subtopic: 'Sigilo da comunicação ao Coaf',
    difficulty: 'dificil',
    statement: 'Em relação à comunicação de operações suspeitas ao Coaf, é correto afirmar que:',
    options: {
      A: 'deve ser dada ciência do ato à pessoa a que se refere a informação, como garantia de contraditório.',
      B: 'não deve ser dada ciência de tal ato a qualquer pessoa, inclusive àquela a que se refira a informação.',
      C: 'a ciência é facultativa, a critério exclusivo do participante.',
      D: 'deve ser previamente autorizada pelo cliente envolvido na operação suspeita.',
    },
    correct: 'B',
    explanation:
      'O conteúdo mínimo da comunicação está estipulado no art. 22, §1º da Resolução CVM nº 50/21, e não deve ser dada ciência de tal ato a qualquer pessoa, inclusive àquela à qual se refira a informação — o chamado princípio do "tipping off" (proibição de alertar o investigado).',
    explanationWrong: {
      A: 'É exatamente o oposto: dar ciência ao próprio cliente frustraria a finalidade da comunicação, permitindo que ele tome medidas para dificultar a investigação — por isso é expressamente vedado.',
      C: 'Não é facultativo — é uma vedação expressa e obrigatória, não sujeita a critério discricionário do participante.',
      D: 'A comunicação ao Coaf não pode depender de autorização do próprio cliente investigado — isso anularia completamente sua eficácia investigativa.',
    },
    examTip: 'Comunicação ao Coaf é SIGILOSA — vedado avisar qualquer pessoa, inclusive o próprio cliente envolvido (princípio do "tipping off").',
    commonTrap: '⚠️ Pegadinha grave: nunca informar ao cliente que ele foi objeto de comunicação ao Coaf — isso é expressamente proibido pela norma.',
    ...SRC('Regras, procedimentos e controles', '629'),
  },
  {
    topic: 'Regras, procedimentos e controles',
    subtopic: 'Prazo de guarda de documentação',
    difficulty: 'prova',
    statement: 'Toda a documentação relacionada às obrigações de PLD/FTP deve ser mantida à disposição da CVM, em meio físico ou eletrônico, durante o período mínimo de:',
    options: {
      A: '2 anos.',
      B: '3 anos.',
      C: '5 anos.',
      D: '10 anos.',
    },
    correct: 'C',
    explanation:
      'Toda documentação relacionada às obrigações de PLD/FTP, avaliação interna de risco, identificação de clientes, monitoramento, análise e comunicação de operações suspeitas e cumprimento de sanções do Conselho de Segurança das Nações Unidas deve ser mantida, em meio físico ou eletrônico, à disposição da CVM, durante o período mínimo de 5 (cinco) anos, podendo ser estendido por determinação da CVM.',
    explanationWrong: {
      A: '2 anos não corresponde ao prazo mínimo estabelecido — o prazo correto é de 5 anos.',
      B: '3 anos também não é o prazo correto — o mínimo é de 5 anos.',
      D: '10 anos é superior ao prazo mínimo estabelecido (5 anos), embora o prazo POSSA ser estendido por determinação da CVM.',
    },
    examTip: 'Guarda de documentação de PLD/FTP: MÍNIMO 5 anos, extensível por determinação da CVM. Mesmo número do prazo de atualização cadastral (5 anos), mas com lógicas diferentes.',
    commonTrap: null,
    ...SRC('Regras, procedimentos e controles', '630'),
  },

  // ---------- Sanções internacionais ----------
  {
    topic: 'Comunicação ao Coaf e sanções internacionais',
    subtopic: 'Indisponibilidade — Lei 13.810/2019',
    difficulty: 'dificil',
    statement: 'Nos termos da Lei nº 13.810/2019, ao receber determinação de indisponibilidade de ativos oriunda de resolução sancionatória do Conselho de Segurança das Nações Unidas, os participantes devem:',
    options: {
      A: 'aguardar autorização prévia da CVM antes de aplicar qualquer restrição.',
      B: 'cumprir imediatamente e sem aviso prévio ao sancionado as medidas determinadas.',
      C: 'notificar previamente o sancionado, para que este possa se manifestar antes da restrição.',
      D: 'aplicar a indisponibilidade somente após decisão do Poder Judiciário brasileiro.',
    },
    correct: 'B',
    explanation:
      'Os participantes devem cumprir, imediatamente e sem aviso prévio aos sancionados, as medidas estabelecidas nas resoluções sancionatórias do Conselho de Segurança das Nações Unidas ou as designações de seus comitês de sanções que determinem a indisponibilidade de ativos, nos termos da Lei nº 13.810/2019, sem prejuízo do dever de cumprir determinações judiciais de indisponibilidade também previstas na lei.',
    explanationWrong: {
      A: 'Não há exigência de autorização prévia da CVM para o cumprimento imediato dessas determinações — o cumprimento deve ser IMEDIATO.',
      C: 'É o oposto: o cumprimento deve ser SEM AVISO PRÉVIO ao sancionado, justamente para não frustrar a eficácia da medida.',
      D: 'A indisponibilidade decorrente de resolução do Conselho de Segurança da ONU é cumprida diretamente pelos participantes, sem depender de decisão judicial brasileira prévia — a lei também prevê determinações judiciais de indisponibilidade, mas como hipótese adicional, não pré-requisito.',
    },
    examTip: 'Indisponibilidade por sanção da ONU (Lei 13.810/2019): cumprimento IMEDIATO e SEM AVISO PRÉVIO ao sancionado.',
    commonTrap: '⚠️ Mesma lógica do "tipping off" da comunicação ao Coaf — nunca avisar previamente a pessoa afetada pela medida.',
    ...SRC('Regras, procedimentos e controles', '631'),
  },
  {
    topic: 'Comunicação ao Coaf e sanções internacionais',
    subtopic: 'Descumprimento da ordem de indisponibilidade',
    difficulty: 'dificil',
    statement: 'Caso não seja possível o cumprimento imediato da ordem de indisponibilidade de ativos, os participantes devem:',
    options: {
      A: 'simplesmente arquivar o caso, sem qualquer comunicação, até que seja possível o cumprimento.',
      B: 'informar, sem demora, ao Ministério da Justiça e à CVM, justificando as razões do não cumprimento.',
      C: 'comunicar apenas ao cliente envolvido, solicitando sua colaboração voluntária.',
      D: 'aguardar o prazo de 30 dias antes de qualquer comunicação às autoridades.',
    },
    correct: 'B',
    explanation:
      'No caso de não cumprimento imediato da ordem de indisponibilidade, os participantes devem informar, sem demora, ao Ministério da Justiça e à CVM, a existência de pessoas e ativos sujeitos às determinações de indisponibilidade a que deixaram de dar imediato cumprimento, justificando as razões para tanto.',
    explanationWrong: {
      A: 'Não é permitido simplesmente arquivar sem comunicação — há dever expresso de informar sem demora às autoridades competentes.',
      C: 'Comunicar ao cliente contraria a lógica de sigilo dessas medidas — a comunicação correta é às autoridades (Ministério da Justiça e CVM), não ao próprio sancionado.',
      D: 'Não há prazo de espera de 30 dias — a comunicação às autoridades deve ser feita SEM DEMORA.',
    },
    examTip: 'Não conseguiu cumprir a indisponibilidade de imediato? Avisar SEM DEMORA ao Ministério da Justiça e à CVM, com justificativa — nunca ao cliente.',
    commonTrap: null,
    ...SRC('Regras, procedimentos e controles', '631-632'),
  },
];
