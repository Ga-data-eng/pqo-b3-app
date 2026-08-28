// Título IV - Gestão de risco
// Capítulo II - Risco corporativo e controles internos
// Fonte: Guia Por Dentro da B3, páginas 459-474.

export const chapterRef = { titleNumber: 'IV', chapterNumber: 'II' };

export const topics = [
  'Linhas de defesa',
  'Arcabouço COSO',
  'Componentes do risco corporativo',
  'Base normativa e auditoria interna',
  'Continuidade de negócios e BSM',
];

const SRC = (section, page) => ({
  source_title: 'Guia Por Dentro da B3',
  source_chapter: 'Título IV, Capítulo II — Risco corporativo e controles internos',
  source_section: section,
  source_page: page,
});

export const questions = [
  // ---------- Linhas de defesa ----------
  {
    topic: 'Linhas de defesa',
    subtopic: 'Primeira linha de defesa',
    difficulty: 'medio',
    statement: 'No modelo das quatro linhas de defesa, a gestão operacional (primeira linha) caracteriza-se por:',
    options: {
      A: 'Ser desempenhada exclusivamente pela área de auditoria interna.',
      B: 'Ser a ação do próprio funcionário que executa determinado processo, sendo ele o "dono do risco" inerente à função.',
      C: 'Ter o maior nível de independência entre todas as linhas de defesa.',
      D: 'Reportar-se diretamente e exclusivamente ao Banco Central.',
    },
    correct: 'B',
    explanation:
      'A primeira linha de defesa corresponde à gestão operacional, relacionada à ação do próprio funcionário que executa determinado processo ou função. Esse funcionário é reconhecido como o "dono do risco" inerente à função — todo funcionário, qualquer que seja seu nível hierárquico, é responsável pela implementação de atividades de controle.',
    explanationWrong: {
      A: 'A auditoria interna corresponde à TERCEIRA linha de defesa, não à primeira — a primeira é a gestão operacional do dia a dia.',
      C: 'É o oposto: por estar diretamente envolvida no processo, a primeira linha tem o MENOR nível de independência entre as linhas de defesa.',
      D: 'Não há esse reporte direto e exclusivo ao Bacen na primeira linha — ela opera dentro da própria estrutura operacional da instituição.',
    },
    examTip:
      '1ª linha = quem EXECUTA o processo no dia a dia = "dono do risco". Tem o MENOR grau de independência (está dentro do próprio processo).',
    commonTrap:
      'Não confunda "dono do risco" (quem executa a atividade) com "quem avalia o risco" (controles internos/auditoria) — são papéis complementares em linhas diferentes.',
    ...SRC('3. O modelo das quatro linhas de defesa — Primeira linha de defesa', '461'),
  },
  {
    topic: 'Linhas de defesa',
    subtopic: 'Segunda linha de defesa — foco',
    difficulty: 'dificil',
    statement: 'O foco da área de controles internos (segunda linha de defesa) é avaliar:',
    options: {
      A: 'Se os procedimentos empregados estão sendo executados conforme previsto, independentemente da materialização efetiva de um risco ou irregularidade.',
      B: 'Exclusivamente se algum risco já se materializou em prejuízo financeiro concreto.',
      C: 'Apenas a conduta pessoal dos executivos da alta administração.',
      D: 'A rentabilidade das operações realizadas pelos clientes da instituição.',
    },
    correct: 'A',
    explanation:
      'O foco da área de controles internos é avaliar se os procedimentos empregados estão sendo executados conforme previsto, independentemente da materialização efetiva de um risco ou irregularidade — ou seja, o controle avalia o PROCESSO, não apenas o resultado final.',
    explanationWrong: {
      B: 'O controle interno não espera a materialização de um prejuízo para atuar — seu foco é a EXECUÇÃO CORRETA do processo, independentemente do resultado.',
      C: 'Não é restrito à conduta pessoal de executivos — abrange a verificação de procedimentos como cadastro, KYC e suitability, por exemplo, empregados na operação como um todo.',
      D: 'A rentabilidade das operações dos clientes não é o foco da área de controles internos — seu foco é a conformidade/execução correta dos processos internos da instituição.',
    },
    examTip:
      '2ª linha (controles internos) avalia se o PROCESSO está sendo seguido corretamente — não espera o risco se materializar para agir. É uma avaliação preventiva/contínua.',
    commonTrap:
      'A distinção entre "gestão de risco" (avalia se os controles são SUFICIENTES) e "controles internos" (avalia se os controles estão sendo EXECUTADOS corretamente) é sutil e frequentemente testada.',
    ...SRC('3. O modelo das quatro linhas de defesa — Segunda linha de defesa', '462'),
  },
  {
    topic: 'Linhas de defesa',
    subtopic: 'Terceira x quarta linha de defesa',
    difficulty: 'dificil',
    statement: 'A diferença entre a terceira linha de defesa (auditoria interna) e a quarta linha (auditoria externa) é que a auditoria externa:',
    options: {
      A: 'É desempenhada por funcionários da própria instituição, com menor grau de independência que a auditoria interna.',
      B: 'Revisa as demonstrações financeiras para garantir que não possuam distorções relevantes, com órgãos como Bacen e CVM avaliando a infraestrutura da companhia e o cumprimento normativo.',
      C: 'É responsável apenas por identificar falhas nos controles internos do dia a dia, sem qualquer relação com demonstrações financeiras.',
      D: 'Substitui integralmente a necessidade de auditoria interna, tornando-a desnecessária.',
    },
    correct: 'B',
    explanation:
      'A quarta linha de defesa (auditoria externa) revisa as demonstrações financeiras para garantir que não possuam distorções relevantes e sejam elaboradas de acordo com uma estrutura adequada. Bacen e CVM, como órgãos de supervisão regulatória, avaliam se a companhia possui infraestrutura adequada e cumpre os normativos existentes.',
    explanationWrong: {
      A: 'É o oposto: a auditoria EXTERNA é externa à instituição, por definição — quem é desempenhada internamente é a auditoria interna (terceira linha).',
      C: 'A identificação de falhas nos controles do dia a dia é atribuição da auditoria INTERNA (terceira linha); a auditoria externa foca especificamente nas demonstrações financeiras e supervisão regulatória.',
      D: 'A auditoria externa não substitui a interna — são camadas complementares, cada uma com seu papel específico dentro do modelo de quatro linhas.',
    },
    examTip:
      '3ª linha (auditoria interna) = monitora controles/processos DO DIA A DIA internamente. 4ª linha (auditoria externa + reguladores) = revisa DEMONSTRAÇÕES FINANCEIRAS e cumprimento normativo, de fora.',
    commonTrap:
      'Cuidado: o próprio Guia tem uma inconsistência entre o índice do capítulo (que fala em "três linhas de defesa") e o corpo do texto (que detalha efetivamente QUATRO linhas, incluindo a auditoria externa) — para fins de prova, siga o conteúdo desenvolvido no corpo do capítulo, que é o que efetivamente descreve as quatro linhas.',
    ...SRC('3. O modelo das quatro linhas de defesa — Quarta linha de defesa', '463'),
  },

  // ---------- COSO ----------
  {
    topic: 'Arcabouço COSO',
    subtopic: 'O que é o COSO',
    difficulty: 'medio',
    statement: 'O Committee of Sponsoring Organizations of the Treadway Commission (Coso) é:',
    options: {
      A: 'Um órgão regulador governamental brasileiro, subordinado à CVM.',
      B: 'Uma entidade privada independente, sem fins lucrativos, criada com foco na melhoria dos relatórios financeiros, efetividade dos controles internos e governança corporativa.',
      C: 'Uma câmara de compensação e liquidação americana.',
      D: 'Um departamento interno exclusivo da B3.',
    },
    correct: 'B',
    explanation:
      'O Coso é uma entidade privada independente, sem fins lucrativos, criada em 1985 inicialmente com foco na melhoria dos relatórios financeiros, efetividade dos controles internos e governança corporativa. Atualmente foca em Enterprise Risk Management (ERM), Controle Interno e Dissuasão de Fraudes.',
    explanationWrong: {
      A: 'O Coso não é um órgão governamental brasileiro nem está subordinado à CVM — é uma entidade privada internacional, independente.',
      C: 'O Coso não é uma câmara de compensação — é uma entidade voltada a controles internos, governança e gerenciamento de riscos corporativos.',
      D: 'O Coso não é um departamento da B3 — é uma referência internacional, aplicável a qualquer organização, cujo arcabouço a B3 (e outras empresas) pode adotar como referência.',
    },
    examTip:
      'Coso = entidade PRIVADA, sem fins lucrativos, criada em 1985 (EUA) para estudar fraudes em relatórios financeiros — hoje é referência mundial em controles internos e ERM.',
    commonTrap:
      'Não confunda o Coso (entidade privada internacional, criadora de um framework) com um órgão regulador brasileiro — ele é adotado como referência, mas não tem poder normativo no Brasil.',
    ...SRC('4. Arcabouço do Coso', '464'),
  },
  {
    topic: 'Arcabouço COSO',
    subtopic: 'Categorias de objetivos e componentes',
    difficulty: 'prova',
    statement: 'O arcabouço do Coso estrutura-se em três categorias de objetivos, sustentadas por cinco componentes essenciais. As três categorias de objetivos são:',
    options: {
      A: 'Operações, Comunicação e Conformidade.',
      B: 'Ambiente de Controle, Avaliação de Riscos e Atividades de Controle.',
      C: 'Risco de mercado, risco de crédito e risco operacional.',
      D: 'Primeira, segunda e terceira linha de defesa.',
    },
    correct: 'A',
    explanation:
      'As três categorias de objetivos do Coso são: Operações (eficácia/eficiência da organização), Comunicação/Reporting (confiabilidade dos relatórios contábeis e financeiros) e Conformidade/Compliance (aderência à legislação e regulamentos). Essas categorias são sustentadas por cinco componentes essenciais: Ambiente de Controle, Avaliação de Riscos, Atividades de Controle, Informação e Comunicação, e Atividades de Monitoramento.',
    explanationWrong: {
      B: 'Ambiente de Controle, Avaliação de Riscos e Atividades de Controle são três dos CINCO componentes essenciais (não das três categorias de objetivos) — há ainda Informação/Comunicação e Monitoramento.',
      C: 'Risco de mercado, crédito e operacional são componentes do risco CORPORATIVO (seção 5 do capítulo), não as categorias de objetivos do arcabouço Coso.',
      D: 'As linhas de defesa são um modelo distinto (seção 3 do capítulo), não as categorias de objetivos do Coso.',
    },
    examTip:
      'Coso: 3 categorias de OBJETIVOS (Operações, Comunicação, Conformidade) + 5 COMPONENTES (Ambiente de Controle, Avaliação de Riscos, Atividades de Controle, Informação/Comunicação, Monitoramento) = "Cubo do Coso".',
    commonTrap:
      'Não confunda "categorias de objetivos" (3) com "componentes essenciais" (5) — são dois eixos diferentes do mesmo cubo tridimensional do Coso.',
    ...SRC('4. Arcabouço do Coso — Categorias de objetivos; Componentes essenciais', '464-466'),
  },
  {
    topic: 'Arcabouço COSO',
    subtopic: 'Ambiente de controle',
    difficulty: 'medio',
    statement: 'O componente "Ambiente de Controle" do Coso engloba, principalmente:',
    options: {
      A: 'Apenas o sistema de segurança da informação da empresa.',
      B: 'Conduta, atitude, consciência, competência e valores éticos — um fator intangível e essencial à efetividade dos controles internos.',
      C: 'Exclusivamente a revisão das demonstrações financeiras por auditores externos.',
      D: 'Apenas os relatórios financeiros trimestrais.',
    },
    correct: 'B',
    explanation:
      'O Ambiente de Controle não se resume a pontos isolados de controle — é necessário que todo o funcionamento da empresa seja um grande ambiente de controle, envolvendo conceitos como conduta, atitude, consciência, competência e valores éticos, sendo um fator intangível e essencial à efetividade dos controles internos.',
    explanationWrong: {
      A: 'Segurança da informação é apenas um aspecto entre muitos — o ambiente de controle é um conceito mais amplo, ligado à cultura organizacional como um todo.',
      C: 'A revisão de demonstrações financeiras é atribuição da auditoria externa (quarta linha de defesa), não a definição do componente "Ambiente de Controle".',
      D: 'Relatórios financeiros trimestrais fazem parte da categoria "Comunicação/Reporting", não são a definição de "Ambiente de Controle".',
    },
    examTip:
      'Ambiente de controle = a "cultura" da empresa — competência técnica + compromisso ético. É a base intangível sobre a qual todos os outros componentes se apoiam.',
    commonTrap:
      'É fácil reduzir "ambiente de controle" a algo técnico/procedimental — mas o Guia enfatiza que é um fator INTANGÍVEL, ligado à cultura e aos valores, não apenas a processos formais.',
    ...SRC('4. Arcabouço do Coso — Componentes essenciais (Ambiente de controle)', '465'),
  },

  // ---------- Componentes do risco corporativo ----------
  {
    topic: 'Componentes do risco corporativo',
    subtopic: 'Risco operacional — definição ampliada',
    difficulty: 'dificil',
    statement: 'Segundo o Guia, o risco operacional, no contexto do risco corporativo, inclui:',
    options: {
      A: 'Apenas falhas em sistemas de tecnologia da informação.',
      B: 'O risco legal associado a inadequação ou deficiência dos contratos firmados pela instituição, bem como sanções por descumprimento de dispositivos legais e indenizações por danos a terceiros.',
      C: 'Exclusivamente riscos de flutuação nos valores de mercado de posições detidas pela instituição.',
      D: 'Apenas riscos associados ao não cumprimento de obrigações financeiras por um tomador.',
    },
    correct: 'B',
    explanation:
      'O risco operacional é a possibilidade de perdas resultantes de falha, deficiência ou inadequação de processos internos, pessoas e sistemas, ou de eventos externos. Inclui o risco legal associado à inadequação/deficiência de contratos firmados, bem como sanções por descumprimento de dispositivos legais e indenizações por danos a terceiros.',
    explanationWrong: {
      A: 'Falhas em TI são apenas UM exemplo entre muitos — o risco operacional é mais amplo, envolvendo processos, pessoas, sistemas e eventos externos, incluindo aspectos legais/contratuais.',
      C: 'Flutuação em valores de mercado é a definição de risco DE MERCADO, não operacional.',
      D: 'Não cumprimento de obrigações financeiras por um tomador é a definição de risco DE CRÉDITO, não operacional.',
    },
    examTip:
      'Risco operacional (visão corporativa) é amplo: inclui o risco LEGAL de contratos malfeitos e sanções — não é só "falha de sistema/TI" como muitas vezes se pensa.',
    commonTrap:
      'O risco legal aparece EMBUTIDO dentro do risco operacional nessa classificação corporativa — diferente da classificação internacional de risco de câmara (Título IV Cap I), em que o risco legal era categoria própria e separada.',
    ...SRC('5. Componentes do risco corporativo — Risco operacional', '467'),
  },
  {
    topic: 'Componentes do risco corporativo',
    subtopic: 'Risco de liquidez corporativo',
    difficulty: 'dificil',
    statement: 'No contexto do risco corporativo (diferente do risco de liquidez de câmara), o risco de liquidez também inclui a possibilidade de:',
    options: {
      A: 'A instituição não conseguir negociar, a preço de mercado, uma posição, devido ao seu tamanho elevado em relação ao volume normalmente transacionado ou descontinuidade de mercado.',
      B: 'Um cliente não pagar uma dívida no prazo estipulado.',
      C: 'Uma lei ser aplicada de forma inesperada, prejudicando um contrato vigente.',
      D: 'Um sistema de TI falhar durante o horário de pregão.',
    },
    correct: 'A',
    explanation:
      'O risco de liquidez, no contexto do risco corporativo, inclui a possibilidade de a instituição não ser capaz de honrar eficientemente suas obrigações sem afetar operações diárias ou incorrer em perdas significativas — incluindo a possibilidade de não conseguir negociar, a preço de mercado, uma posição de tamanho elevado ou em razão de descontinuidade de mercado.',
    explanationWrong: {
      B: 'Um cliente não pagar uma dívida é a definição de risco DE CRÉDITO, não de liquidez.',
      C: 'Aplicação inesperada de lei prejudicando contrato é a definição de risco LEGAL/operacional, não de liquidez.',
      D: 'Falha de sistema de TI durante o pregão é um exemplo de risco OPERACIONAL, não de liquidez.',
    },
    examTip:
      'Risco de liquidez corporativo vai além de "falta de caixa" — inclui não conseguir VENDER uma posição grande a preço justo, por falta de comprador/mercado (liquidez de mercado, não só de caixa).',
    commonTrap:
      'Esse aspecto (dificuldade de negociar posição elevada sem afetar o preço) é um detalhe específico da definição corporativa de liquidez, que pode ser cobrado separadamente do conceito mais simples de "falta de dinheiro em caixa".',
    ...SRC('5. Componentes do risco corporativo — Risco de liquidez', '467'),
  },

  // ---------- Base normativa e auditoria interna ----------
  {
    topic: 'Base normativa e auditoria interna',
    subtopic: 'Segregação entre gestão de risco e auditoria',
    difficulty: 'dificil',
    statement: 'Segundo a Resolução nº 4.557/2017, a atividade de gerenciamento de riscos deve ser executada por unidade específica na instituição, devendo:',
    options: {
      A: 'Ser integrada e fundida com a unidade executora da auditoria interna, para maior eficiência.',
      B: 'Ser segregada da unidade executora da auditoria interna, com indicação de um diretor responsável pelo gerenciamento de riscos (CRO).',
      C: 'Ser subordinada diretamente à área comercial da instituição.',
      D: 'Ser dispensada em instituições de pequeno porte, independentemente do segmento de supervisão.',
    },
    correct: 'B',
    explanation:
      'A atividade de gerenciamento de riscos deve ser executada por unidade específica, segregada da unidade executora da auditoria interna. Além disso, deve haver a indicação de um diretor responsável pelo gerenciamento de riscos (CRO — Chief Risk Officer) dessa unidade.',
    explanationWrong: {
      A: 'É o oposto: a norma exige SEGREGAÇÃO entre gestão de riscos e auditoria interna, não fusão — são funções que precisam de independência entre si.',
      C: 'Não há essa subordinação à área comercial — a unidade de gerenciamento de riscos deve ter independência, reportando a um diretor específico (CRO).',
      D: 'A exigência de estrutura de gerenciamento de riscos se aplica de forma proporcional à complexidade da instituição — instituições do segmento S5 têm uma estrutura simplificada, mas não são dispensadas por completo.',
    },
    examTip:
      'Gestão de riscos ≠ Auditoria interna: devem ser unidades SEGREGADAS (separadas), cada uma com sua própria estrutura — a gestão de riscos tem um diretor específico, o CRO.',
    commonTrap:
      'A segregação entre gestão de riscos e auditoria interna é um princípio de governança fundamental — misturar as duas funções comprometeria a independência necessária para cada uma delas.',
    ...SRC('6. Base normativa no Brasil — Resolução nº 4.557/2017', '470'),
  },
  {
    topic: 'Base normativa e auditoria interna',
    subtopic: 'Revisão da política de gerenciamento de riscos',
    difficulty: 'medio',
    statement: 'A política de gerenciamento de riscos das instituições deve ser aprovada e revisada, no mínimo:',
    options: {
      A: 'Mensalmente.',
      B: 'Semestralmente.',
      C: 'Anualmente.',
      D: 'A cada cinco anos.',
    },
    correct: 'C',
    explanation:
      'A política de gerenciamento de riscos deve ser aprovada e revisada, no mínimo, anualmente pela diretoria das instituições e pelo conselho de administração, se houver.',
    explanationWrong: {
      A: 'Mensalmente é um período muito curto — não corresponde à periodicidade mínima exigida pela norma.',
      B: 'Semestralmente também não é a periodicidade mínima definida — a norma estabelece o período anual como mínimo.',
      D: 'Cinco anos é um período muito longo — não corresponde à exigência de revisão da política de gerenciamento de riscos, que é anual.',
    },
    examTip:
      'Política de gerenciamento de riscos: revisão mínima ANUAL, pela diretoria e conselho de administração (se houver).',
    commonTrap:
      'Não confunda esse prazo anual com o prazo de 5 anos de atualização cadastral de investidores (Título III) — são exigências regulatórias de naturezas e capítulos diferentes.',
    ...SRC('6. Base normativa no Brasil — Resolução nº 4.557/2017', '470'),
  },
  {
    topic: 'Base normativa e auditoria interna',
    subtopic: 'Função da auditoria interna',
    difficulty: 'medio',
    statement: 'A auditoria interna é definida pelo Guia como:',
    options: {
      A: 'Uma atividade dependente da gestão operacional, sem qualquer autonomia.',
      B: 'Uma atividade independente e objetiva de avaliação (assurance) e de consultoria, desenhada para adicionar valor e melhorar as operações da organização.',
      C: 'Um departamento exclusivamente voltado à venda de produtos financeiros.',
      D: 'Uma função exercida exclusivamente por órgãos governamentais externos à instituição.',
    },
    correct: 'B',
    explanation:
      'A auditoria interna é uma atividade independente e objetiva de avaliação (assurance) e de consultoria, desenhada para adicionar valor e melhorar as operações de uma organização, auxiliando-a a realizar seus objetivos por meio de uma abordagem sistemática para avaliar e melhorar a eficácia dos processos de gerenciamento de riscos, controle e governança.',
    explanationWrong: {
      A: 'É o oposto: a auditoria interna deve ter INDEPENDÊNCIA e objetividade, não ser dependente da gestão operacional que ela avalia.',
      C: 'A auditoria interna não é um departamento de vendas — sua função é avaliar processos de risco, controle e governança.',
      D: 'A auditoria interna é exercida DENTRO da instituição (por isso "interna") — é a auditoria EXTERNA (quarta linha) que é exercida por agentes de fora da organização.',
    },
    examTip:
      'Auditoria interna = independente + objetiva + assurance + consultoria, voltada a melhorar gerenciamento de riscos, controle e governança. É a "terceira linha de defesa".',
    commonTrap:
      'Apesar do nome "interna" (dentro da empresa), a auditoria interna deve manter alto grau de INDEPENDÊNCIA em relação às áreas que avalia — não é uma função subordinada à operação do dia a dia.',
    ...SRC('7. Auditoria interna', '471'),
  },

  // ---------- Continuidade de negócios e BSM ----------
  {
    topic: 'Continuidade de negócios e BSM',
    subtopic: 'Periodicidade de testes do plano de continuidade',
    difficulty: 'dificil',
    statement: 'O participante deve revisar e testar seus planos de continuidade de negócios em periodicidade:',
    options: {
      A: 'Não superior a um ano.',
      B: 'Não superior a cinco anos.',
      C: 'Não inferior a três anos.',
      D: 'Sem qualquer periodicidade definida, a critério exclusivo do participante.',
    },
    correct: 'A',
    explanation:
      'O participante deve revisar e realizar testes para monitorar a eficiência e a eficácia de seus planos de continuidade de negócios em periodicidade adequada, não superior a um ano, além de alterar os planos sempre que houver alteração relevante na localização, estrutura das operações ou atividades desempenhadas.',
    explanationWrong: {
      B: 'Cinco anos excede em muito o prazo real exigido — a periodicidade máxima é de um ano, não cinco.',
      C: '"Não inferior a três anos" inverte a lógica da exigência — a norma estabelece um teto (não superior a um ano), não um piso mínimo de anos.',
      D: 'Há sim uma periodicidade regulatória definida (máximo de um ano) — não é uma decisão livre e exclusiva do participante.',
    },
    examTip:
      'Plano de continuidade de negócios: teste/revisão em periodicidade máxima de 1 ANO — regra objetiva da Resolução CVM nº 35/2021.',
    commonTrap:
      'Não confunda esse prazo (1 ano, para teste de planos de continuidade) com outros prazos regulatórios do Guia (5 anos para cadastro, anual para política de riscos) — cada norma tem seu próprio prazo específico.',
    ...SRC('9. Continuidade de negócios e sistemas críticos', '473'),
  },
  {
    topic: 'Continuidade de negócios e BSM',
    subtopic: 'Autonomia da BSM',
    difficulty: 'dificil',
    statement: 'Segundo a Resolução CVM nº 135/2022, para desempenhar adequadamente suas funções de autorregulação, a BSM deve:',
    options: {
      A: 'Ser subordinada hierarquicamente aos órgãos de administração da B3, sem qualquer autonomia.',
      B: 'Ser funcionalmente autônoma dos órgãos de administração da entidade administradora de mercado organizado em que realiza a fiscalização (a B3), com autonomia na gestão de recursos orçamentários próprios.',
      C: 'Depender exclusivamente de aprovação orçamentária anual do Bacen.',
      D: 'Ter suas atividades de fiscalização limitadas apenas a participantes de pequeno porte.',
    },
    correct: 'B',
    explanation:
      'A Resolução CVM nº 135/2022 prevê que a BSM deve ser funcionalmente autônoma dos órgãos de administração da entidade administradora de mercado organizado em que realiza a fiscalização (a B3), além de possuir autonomia na gestão dos recursos previstos em orçamento próprio, suficientes para a execução de suas atividades.',
    explanationWrong: {
      A: 'É o oposto: a BSM deve ter autonomia FUNCIONAL em relação à administração da B3 — não pode ser meramente subordinada e sem independência, já que fiscaliza a própria B3.',
      C: 'A autonomia orçamentária da BSM é sobre seu PRÓPRIO orçamento, gerido de forma independente — não há essa dependência de aprovação anual do Bacen descrita no Guia.',
      D: 'Não há essa limitação a participantes de pequeno porte — a BSM fiscaliza e supervisiona os participantes da B3 e a própria B3, de forma ampla.',
    },
    examTip:
      'BSM precisa de autonomia FUNCIONAL e ORÇAMENTÁRIA em relação à B3 — essencial para poder fiscalizar a própria B3 com credibilidade e sem conflito de interesse.',
    commonTrap:
      'A lógica é clara: se a BSM fiscaliza a B3, ela não pode depender financeira/administrativamente da B3 para funcionar — daí a exigência expressa de autonomia funcional e orçamentária.',
    ...SRC('10. BSM Supervisão de Mercados – B3', '474'),
  },
];
