// Título VIII - Compliance
// Capítulo V - Segurança cibernética e segurança da informação
// Fonte: Guia Por Dentro da B3, páginas ~673-685.

export const chapterRef = { titleNumber: 'VIII', chapterNumber: 'V' };

export const topics = [
  'Política de segurança cibernética',
  'Plano de ação e de resposta a incidentes',
  'Relatório anual e contratação de nuvem',
  'Segurança da informação',
];

const SRC = (section, page) => ({
  source_title: 'Guia Por Dentro da B3',
  source_chapter: 'Título VIII, Capítulo V — Segurança cibernética e segurança da informação',
  source_section: section,
  source_page: page,
});

export const questions = [
  // ---------- Política de segurança cibernética ----------
  {
    topic: 'Política de segurança cibernética',
    subtopic: 'Órgãos reguladores expedidores',
    difficulty: 'medio',
    statement: 'As regras de segurança cibernética aplicáveis aos participantes do sistema de distribuição de valores mobiliários são expedidas por:',
    options: {
      A: 'Bacen, exclusivamente.',
      B: 'CVM, exclusivamente.',
      C: 'Bacen e CVM.',
      D: 'Bacen, CVM e ANPD.',
    },
    correct: 'C',
    explanation:
      'Os participantes, na qualidade de instituições autorizadas a funcionar pelo Banco Central do Brasil, por força da Resolução CMN nº 4.893/21, devem implementar política de segurança cibernética. A CVM, na mesma linha, também determina, na Resolução CVM nº 35/21, a existência de política de segurança cibernética — ou seja, ambos os reguladores expedem normas sobre o tema.',
    explanationWrong: {
      A: 'Não é exclusividade do Bacen — a CVM também expede norma própria (Resolução CVM 35/21) sobre segurança cibernética.',
      B: 'Não é exclusividade da CVM — o Bacen também expede norma própria (Resolução CMN 4.893/21) sobre o tema.',
      D: 'A ANPD trata de proteção de dados pessoais (LGPD), não especificamente de segurança cibernética — não é uma das duas entidades que expedem essas normas específicas.',
    },
    examTip: 'Segurança cibernética: DUAS normas paralelas — CMN 4.893/21 (Bacen) e CVM 35/21 (CVM). Ambas exigem política própria.',
    commonTrap: null,
    ...SRC('Política de segurança cibernética', '673'),
  },
  {
    topic: 'Política de segurança cibernética',
    subtopic: 'Compatibilidade da política',
    difficulty: 'medio',
    statement: 'A política de segurança cibernética deve ser compatível com:',
    options: {
      A: 'apenas o capital social da instituição.',
      B: 'o porte, o perfil de risco e o modelo de negócio da instituição; a natureza das operações e complexidade de produtos/serviços; e a sensibilidade dos dados sob sua responsabilidade.',
      C: 'exclusivamente o número de funcionários da área de tecnologia.',
      D: 'o valor de mercado da instituição na bolsa de valores.',
    },
    correct: 'B',
    explanation:
      'A política de segurança cibernética deve ser compatível com: (i) o porte, o perfil de risco e o modelo de negócio da instituição; (ii) a natureza das operações e a complexidade de produtos, serviços, atividades e processos da instituição; e (iii) a sensibilidade dos dados e das informações sob responsabilidade da instituição.',
    explanationWrong: {
      A: 'Não se limita ao capital social — os critérios são mais amplos, envolvendo porte, risco, modelo de negócio, complexidade operacional e sensibilidade dos dados.',
      C: 'O número de funcionários de TI não é, isoladamente, o critério de compatibilidade estabelecido pela norma.',
      D: 'Valor de mercado na bolsa não é um dos critérios de compatibilidade previstos para a política de segurança cibernética.',
    },
    examTip: 'Compatibilidade da política: porte/risco/modelo de negócio + natureza/complexidade das operações + sensibilidade dos dados. Critério "proporcional", não numérico fixo.',
    commonTrap: null,
    ...SRC('Política de segurança cibernética', '673'),
  },
  {
    topic: 'Política de segurança cibernética',
    subtopic: 'Comunicação de incidente relevante',
    difficulty: 'prova',
    statement: 'Em caso de incidente de segurança cibernética relevante, o participante deve comunicar:',
    options: {
      A: 'apenas o Ministério Público, no prazo de 30 dias.',
      B: 'a CVM (por meio da SMI) e os órgãos de administração do participante, enviando relatório final à CVM nos termos do art. 46 da Resolução CVM nº 35/21.',
      C: 'exclusivamente a imprensa, para dar transparência ao mercado.',
      D: 'apenas o cliente diretamente afetado, sem necessidade de comunicação a órgãos reguladores.',
    },
    correct: 'B',
    explanation:
      'A CVM, por meio da SMI (Superintendência de Relações com o Mercado e Intermediários), e os órgãos de administração do participante devem ser comunicados em caso de incidente de segurança cibernética relevante, e relatório final sobre o assunto deve ser enviado à CVM, nos termos do artigo 46 da Resolução CVM nº 35/21.',
    explanationWrong: {
      A: 'Não é ao Ministério Público que a comunicação deve ser feita nesse contexto regulatório específico — é à CVM (SMI) e aos órgãos de administração do participante.',
      C: 'Não há exigência de comunicação direta à imprensa como procedimento regulatório formal — a comunicação obrigatória é à CVM e à administração do participante.',
      D: 'A comunicação não se limita ao cliente afetado — há uma obrigação regulatória específica de comunicar a CVM e a administração do participante, com relatório final.',
    },
    examTip: 'Incidente relevante: comunicar CVM (via SMI) + órgãos de administração do participante + relatório final à CVM (art. 46, CVM 35/21).',
    commonTrap: null,
    ...SRC('Política de segurança cibernética', '673-674'),
  },

  // ---------- Plano de ação e resposta a incidentes ----------
  {
    topic: 'Plano de ação e de resposta a incidentes',
    subtopic: 'Aprovação e revisão',
    difficulty: 'prova',
    statement: 'A política de segurança cibernética e o plano de ação e de resposta a incidentes devem ser aprovados por qual órgão, e revisados com qual periodicidade mínima?',
    options: {
      A: 'Aprovados pelo diretor de TI; revisados a cada 2 anos.',
      B: 'Aprovados pelo conselho de administração ou, na sua inexistência, pela diretoria; documentados e revisados, no mínimo, anualmente.',
      C: 'Aprovados pela CVM diretamente; revisados a cada 6 meses.',
      D: 'Aprovados pela assembleia geral de acionistas; revisados a cada 5 anos.',
    },
    correct: 'B',
    explanation:
      'A política de segurança cibernética e o plano de ação e de resposta a incidentes devem: (i) ser aprovados pelo conselho de administração ou, na sua inexistência, pela diretoria da instituição; e (ii) ser documentados e revisados, no mínimo, anualmente.',
    explanationWrong: {
      A: 'A aprovação não é do diretor de TI, e o prazo de revisão não é de 2 anos — é do conselho de administração/diretoria, com revisão mínima ANUAL.',
      C: 'A aprovação não é feita diretamente pela CVM — é interna, pelo conselho de administração ou diretoria — e a periodicidade não é semestral, mas sim anual.',
      D: 'Não é a assembleia geral quem aprova, e o prazo de revisão não é de 5 anos — é o conselho/diretoria, com revisão mínima ANUAL.',
    },
    examTip: 'Política de segurança cibernética + plano de resposta a incidentes: aprovados pelo conselho de administração (ou diretoria, se não houver conselho) + revisão mínima ANUAL.',
    commonTrap: null,
    ...SRC('Plano de ação e de resposta a incidentes', '675'),
  },
  {
    topic: 'Plano de ação e de resposta a incidentes',
    subtopic: 'Diretor responsável',
    difficulty: 'medio',
    statement: 'Em relação ao diretor responsável pela política de segurança cibernética e pela execução do plano de resposta a incidentes, é correto afirmar que:',
    options: {
      A: 'deve ser exclusivamente dedicado a essa função, sem poder acumular outras atribuições.',
      B: 'pode desempenhar outras funções, desde que não haja conflito de interesses.',
      C: 'deve necessariamente ser um profissional externo à instituição, contratado especificamente para esse fim.',
      D: 'não precisa ser formalmente designado, bastando que a área de TI assuma essa responsabilidade de forma difusa.',
    },
    correct: 'B',
    explanation:
      'Os participantes devem designar diretor responsável pela política de segurança cibernética e pela execução do plano de ação e de resposta a incidentes, que pode desempenhar outras funções, desde que não haja conflito de interesses.',
    explanationWrong: {
      A: 'Não há exigência de dedicação exclusiva — o diretor pode acumular outras funções, desde que sem conflito de interesses.',
      C: 'Não há exigência de que seja necessariamente um profissional externo — pode ser um diretor da própria estrutura da instituição.',
      D: 'É necessária a designação FORMAL de um diretor responsável — não pode ser uma responsabilidade difusa da área de TI sem designação específica.',
    },
    examTip: 'Diretor de segurança cibernética: designação formal e específica, PODE acumular outras funções (sem conflito de interesses) — mesmo padrão de outros diretores de compliance vistos no guia.',
    commonTrap: null,
    ...SRC('Plano de ação e de resposta a incidentes', '675'),
  },

  // ---------- Relatório anual e contratação de nuvem ----------
  {
    topic: 'Relatório anual e contratação de nuvem',
    subtopic: 'Relatório anual — data-base e prazo',
    difficulty: 'prova',
    statement: 'O relatório anual sobre a implementação do plano de ação e de resposta a incidentes tem data-base de 31 de dezembro e deve ser apresentado ao conselho de administração (ou diretoria) até:',
    options: {
      A: '31 de janeiro do ano seguinte.',
      B: '31 de março do ano seguinte.',
      C: '30 de abril do ano seguinte.',
      D: '30 de junho do ano seguinte.',
    },
    correct: 'B',
    explanation:
      'O participante deve elaborar relatório anual sobre a implementação do plano de ação e de resposta a incidentes com data-base de 31 de dezembro, sendo esse relatório submetido ao comitê de risco (quando existente) e apresentado ao conselho de administração ou, na sua inexistência, à diretoria, até 31 de março do ano seguinte ao da data-base.',
    explanationWrong: {
      A: '31 de janeiro é um prazo muito curto e não corresponde ao estabelecido — o prazo correto é 31 de março.',
      C: '30 de abril é o prazo de OUTROS relatórios de compliance vistos no guia (ex.: PLD/FTP avaliação interna de risco, suitability) — não é o prazo deste relatório específico de segurança cibernética.',
      D: '30 de junho é o prazo do plano de ação de PLD/FTP (Capítulo I) — não se aplica a este relatório de segurança cibernética.',
    },
    examTip: 'Relatório anual de segurança cibernética: data-base 31/dezembro, apresentado até 31/março do ano seguinte — mesmo prazo do relatório de efetividade de PLD/FTP ao Bacen.',
    commonTrap: '⚠️ O guia tem vários prazos de "31 de março" e "30 de abril" em capítulos diferentes de compliance — preste atenção ao CONTEXTO de cada questão.',
    ...SRC('Outras obrigações relacionadas à segurança cibernética', '676'),
  },
  {
    topic: 'Relatório anual e contratação de nuvem',
    subtopic: 'Comunicação de contratação de nuvem',
    difficulty: 'prova',
    statement: 'A contratação de serviços relevantes de computação em nuvem deve ser comunicada ao Banco Central em até:',
    options: {
      A: '5 dias, informando apenas a denominação da empresa contratada.',
      B: '10 dias, com denominação da empresa, serviços contratados e países/regiões onde os dados serão armazenados/processados.',
      C: '30 dias, apenas se o valor do contrato superar R$ 1 milhão.',
      D: '90 dias, mediante autorização prévia expressa do Bacen para cada contrato.',
    },
    correct: 'B',
    explanation:
      'A contratação de serviços de computação em nuvem deve ser comunicada, em até 10 dias, ao Banco Central com as seguintes informações: (i) a denominação da empresa contratada; (ii) os serviços relevantes contratados; e (iii) a indicação dos países e regiões onde os serviços poderão ser prestados e onde os dados poderão ser armazenados, processados e gerenciados.',
    explanationWrong: {
      A: '5 dias não é o prazo correto (10 dias), e a comunicação exige mais informações do que apenas a denominação da empresa.',
      C: '30 dias não é o prazo correto, e não há condicionamento a um valor mínimo de contrato para a exigência de comunicação.',
      D: '90 dias não é o prazo correto, e não há exigência de autorização PRÉVIA do Bacen — a exigência é de COMUNICAÇÃO posterior à contratação, em até 10 dias.',
    },
    examTip: 'Contratação de nuvem: comunicar ao Bacen em até 10 DIAS — empresa contratada + serviços + países/regiões de armazenamento/processamento.',
    commonTrap: '⚠️ Não é autorização PRÉVIA — é comunicação, em até 10 dias APÓS a contratação.',
    ...SRC('Outras obrigações relacionadas à segurança cibernética', '676-677'),
  },
  {
    topic: 'Relatório anual e contratação de nuvem',
    subtopic: 'Contratação de nuvem no exterior',
    difficulty: 'prova',
    statement: 'Em relação à contratação de serviços relevantes de processamento, armazenamento de dados e computação em nuvem prestados NO EXTERIOR, é correto afirmar que:',
    options: {
      A: 'o prestador pode ser livremente escolhido, sem qualquer requisito adicional.',
      B: 'o prestador deve estar em país cuja autoridade de supervisão tenha convênio para troca de informações com o Bacen.',
      C: 'é vedada, em qualquer hipótese, a contratação de serviços de nuvem fora do Brasil.',
      D: 'o prestador deve constar em lista divulgada anualmente pelo Bacen, sendo vedada a contratação de qualquer outro.',
    },
    correct: 'B',
    explanation:
      'A contratação de serviços relevantes de processamento, armazenamento de dados e de computação em nuvem prestados no exterior deve observar os requisitos do art. 16 da Resolução CMN nº 4.893/21, merecendo destaque a existência de CONVÊNIO PARA TROCA DE INFORMAÇÕES entre o Banco Central do Brasil e as autoridades supervisoras dos países onde os serviços poderão ser prestados.',
    explanationWrong: {
      A: 'Não pode ser livremente escolhido, sem requisitos — há exigências regulatórias específicas, entre elas a existência do convênio de troca de informações entre autoridades.',
      C: 'Não é vedada em qualquer hipótese — é permitida a contratação no exterior, desde que observados os requisitos regulatórios (como o convênio entre autoridades supervisoras).',
      D: 'Não há uma "lista oficial" divulgada anualmente pelo Bacen com essa finalidade — o requisito central é a existência de convênio de troca de informações com a autoridade supervisora do país do prestador.',
    },
    examTip: 'Nuvem no exterior: requisito central é o CONVÊNIO de troca de informações entre Bacen e a autoridade supervisora do país do prestador (art. 16, CMN 4.893/21).',
    commonTrap: null,
    ...SRC('Outras obrigações relacionadas à segurança cibernética', '677'),
  },
  {
    topic: 'Relatório anual e contratação de nuvem',
    subtopic: 'Guarda de documentação',
    difficulty: 'dificil',
    statement: 'Os documentos e relatórios relacionados à Resolução CMN nº 4.893/21 (segurança cibernética) devem ficar à disposição do Banco Central do Brasil pelo prazo de:',
    options: {
      A: '2 anos.',
      B: '3 anos.',
      C: '5 anos.',
      D: '10 anos.',
    },
    correct: 'C',
    explanation:
      'Os documentos e relatórios relacionados com a Resolução CMN nº 4.893/21 devem ficar à disposição do Banco Central do Brasil pelo prazo de cinco anos — o mesmo prazo padrão observado em outras obrigações de compliance vistas no guia (PLD/FTP, suitability e PRSAC).',
    explanationWrong: {
      A: '2 anos não é o prazo correto — o prazo estabelecido é de 5 anos.',
      B: '3 anos também não corresponde ao prazo estabelecido de 5 anos.',
      D: '10 anos é superior ao prazo mínimo de guarda estabelecido (5 anos).',
    },
    examTip: 'Prazo padrão de guarda de documentação em compliance: 5 ANOS — se repete em PLD/FTP, segurança cibernética e PRSAC.',
    commonTrap: null,
    ...SRC('Outras obrigações relacionadas à segurança cibernética', '677'),
  },

  // ---------- Segurança da informação ----------
  {
    topic: 'Segurança da informação',
    subtopic: 'Compatibilidade da política de segurança da informação',
    difficulty: 'medio',
    statement: 'A política de segurança da informação, nos termos da Resolução CVM nº 35/21, deve:',
    options: {
      A: 'seguir modelo padrão de mercado expedido pelo Bacen, idêntico para todos os participantes.',
      B: 'seguir modelo padrão de mercado expedido pela CVM, idêntico para todos os participantes.',
      C: 'ser compatível com o porte, o perfil de risco e o modelo de negócio da instituição, entre outros fatores.',
      D: 'considerar apenas o capital social, o perfil de clientes e o modelo de negócio da instituição.',
    },
    correct: 'C',
    explanation:
      'A política de segurança da informação deve ser compatível com o porte, o perfil de risco e o modelo de negócio do intermediário, assim como com a natureza das operações e a complexidade dos produtos, serviços, atividades e processos e a sensibilidade dos dados e informações sob sua responsabilidade — não existe um modelo padrão único imposto pelo regulador.',
    explanationWrong: {
      A: 'Não há um modelo padrão único expedido pelo Bacen a ser seguido de forma idêntica por todos — a política deve ser proporcional às características de cada instituição.',
      B: 'Também não há modelo padrão único da CVM — o critério é a compatibilidade/proporcionalidade com as características específicas da instituição.',
      D: 'Não se limita a capital social e perfil de clientes — os critérios incluem também porte, risco, natureza das operações, complexidade e sensibilidade dos dados.',
    },
    examTip: 'Política de segurança da informação: proporcional/compatível com porte, risco, modelo de negócio, complexidade e sensibilidade dos dados — não existe modelo único padronizado.',
    commonTrap: null,
    ...SRC('Segurança da informação', '678'),
  },
  {
    topic: 'Segurança da informação',
    subtopic: 'Dados considerados sensíveis',
    difficulty: 'prova',
    statement: 'Nos termos da Resolução CVM nº 35/21, devem ser considerados sensíveis, no mínimo:',
    options: {
      A: 'apenas dados de natureza contábil da instituição.',
      B: 'os dados cadastrais e demais informações que permitem a identificação de clientes, suas operações e posições de custódia.',
      C: 'exclusivamente informações públicas divulgadas pela CVM.',
      D: 'somente dados relacionados a operações de derivativos.',
    },
    correct: 'B',
    explanation:
      'Nos termos da Resolução CVM nº 35/21, devem ser considerados como sensíveis, no mínimo, os dados cadastrais e demais informações que permitem a identificação de clientes, suas operações e posições de custódia.',
    explanationWrong: {
      A: 'Dados contábeis da própria instituição não são o foco central dessa definição — o foco é a identificação de CLIENTES, suas operações e posições.',
      C: 'Informações públicas divulgadas pela CVM não se enquadram no conceito de dados sensíveis do cliente — pelo contrário, são informações já públicas.',
      D: 'Não se limita a derivativos — abrange dados cadastrais e informações de identificação de clientes de forma geral, em qualquer tipo de operação.',
    },
    examTip: 'Dados sensíveis (CVM 35/21): dados cadastrais + identificação do cliente + suas operações + posições de custódia — mínimo obrigatório de proteção.',
    commonTrap: null,
    ...SRC('Segurança da informação', '678-679'),
  },
  {
    topic: 'Segurança da informação',
    subtopic: 'Incidente relevante — critério',
    difficulty: 'dificil',
    statement: 'Deve ser considerado incidente de segurança cibernética RELEVANTE aquele que:',
    options: {
      A: 'afete qualquer processo, ainda que não crítico, independentemente do impacto sobre clientes.',
      B: 'afete processos críticos de negócios, ou dados/informações sensíveis, e tenha impacto significativo sobre os clientes.',
      C: 'envolva exclusivamente ataques originados fora do território nacional.',
      D: 'seja detectado pela auditoria externa, independentemente de sua natureza.',
    },
    correct: 'B',
    explanation:
      'O incidente de segurança cibernética que afete processos críticos de negócios, ou dados ou informações sensíveis, e tenha impacto significativo sobre os clientes deve ser considerado relevante — sendo esse o critério que aciona as obrigações de comunicação e registro específicas para incidentes relevantes.',
    explanationWrong: {
      A: 'Não é qualquer processo, independentemente de criticidade e impacto — a relevância exige justamente que o processo seja CRÍTICO e o impacto sobre clientes seja SIGNIFICATIVO.',
      C: 'Não há essa distinção quanto à origem geográfica do ataque — o critério de relevância é sobre o IMPACTO (processos críticos, dados sensíveis, clientes), não sobre a origem do incidente.',
      D: 'A relevância não depende de quem detecta o incidente (auditoria externa ou não) — depende da natureza do impacto causado (processos críticos, dados sensíveis, clientes afetados).',
    },
    examTip: 'Incidente RELEVANTE = afeta processo CRÍTICO ou dado SENSÍVEL + impacto SIGNIFICATIVO sobre clientes — os dois elementos, criticidade e impacto, precisam estar presentes.',
    commonTrap: null,
    ...SRC('Segurança da informação', '678'),
  },
];
