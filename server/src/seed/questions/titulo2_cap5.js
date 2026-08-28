// Título II - Mercados de Bolsa e de Balcão
// Capítulo V - Fundos de investimento
// Fonte: Guia Por Dentro da B3, páginas 305-326.

export const chapterRef = { titleNumber: 'II', chapterNumber: 'V' };

export const topics = [
  'Conceitos básicos de fundos de investimento',
  'Agentes, documentação e cotas',
  'Custos e taxas',
  'Classificação e assembleia de cotistas',
  'ETF, FIDC, FIP e FII',
  'Fundos regionais',
];

const SRC = (section, page) => ({
  source_title: 'Guia Por Dentro da B3',
  source_chapter: 'Título II, Capítulo V — Fundos de investimento',
  source_section: section,
  source_page: page,
});

export const questions = [
  // ---------- Conceitos básicos ----------
  {
    topic: 'Conceitos básicos de fundos de investimento',
    subtopic: 'Conceito de cota',
    difficulty: 'facil',
    statement: 'A cota de um fundo de investimento é:',
    options: {
      A: 'Um título de dívida emitido pelo fundo, com juros prefixados.',
      B: 'A fração do patrimônio líquido do fundo (ou de uma classe), utilizada como referência para aplicações e resgates.',
      C: 'Um direito de voto exclusivo do administrador do fundo.',
      D: 'O valor total dos ativos do fundo, sem considerar os passivos.',
    },
    correct: 'B',
    explanation:
      'A cota é a fração do patrimônio líquido de um fundo de investimento (ou de uma classe), utilizada como referência para a realização de aplicações e resgates. O valor de cada cota é obtido dividindo-se o patrimônio líquido pelo número de cotas emitidas.',
    explanationWrong: {
      A: 'A cota não é um título de dívida com juros prefixados — seu valor varia conforme o desempenho da carteira do fundo, refletindo ganhos e perdas.',
      C: 'A cota confere ao investidor (cotista) direitos de participação e voto em assembleia, proporcionais à sua posição — não é um instrumento exclusivo do administrador.',
      D: 'O patrimônio líquido do fundo é a diferença entre ativos e passivos, não apenas o valor bruto dos ativos — a cota reflete esse patrimônio líquido, não o valor bruto.',
    },
    examTip:
      'Cota = fatia do patrimônio líquido. Valor da cota = PL da classe ÷ número de cotas daquela classe.',
    commonTrap:
      'Não confunda "patrimônio líquido" (ativos menos passivos) com o valor bruto dos ativos do fundo — a cota é calculada sobre o líquido.',
    ...SRC('2. Visão geral dos fundos de investimento', '308, 313'),
  },
  {
    topic: 'Conceitos básicos de fundos de investimento',
    subtopic: 'Estrutura de classes e subclasses',
    difficulty: 'medio',
    statement: 'Desde a reforma da CVM em 2022, os fundos de investimento passaram a adotar um formato de "casca", no qual:',
    options: {
      A: 'Cada fundo só pode ter uma única classe de cotas, sem exceção.',
      B: 'O fundo pode ser dividido em classes (que definem o destino dos recursos) e subclasses (separadas por passivos/obrigações, como prazos e taxas).',
      C: 'As classes substituem integralmente o conceito de patrimônio líquido.',
      D: 'Somente fundos de ações podem ter classes e subclasses.',
    },
    correct: 'B',
    explanation:
      'No formato de "casca" adotado a partir de 2022, os fundos podem ser divididos em classes (diferentes "bolsos" que definem o destino dos recursos) e subclasses (separadas por passivos/obrigações do fundo, como diferentes prazos, taxas e público-alvo).',
    explanationWrong: {
      A: 'É o oposto: a reforma permitiu justamente que um mesmo fundo tenha MÚLTIPLAS classes de cotas, cada uma com destinação distinta dos recursos.',
      C: 'Classes não substituem o conceito de patrimônio líquido — cada classe (ou subclasse) tem seu próprio patrimônio líquido, usado para calcular o valor de suas cotas.',
      D: 'A estrutura de classes e subclasses é uma regra geral do novo formato de "casca", aplicável a diversos tipos de fundos, não exclusiva de fundos de ações.',
    },
    examTip:
      'Classe = "bolso" que define ONDE o dinheiro é investido. Subclasse = separação por PASSIVOS (prazos, taxas, público) dentro da mesma classe.',
    commonTrap:
      'Não confunda "classe" (destino do investimento) com "subclasse" (características do passivo/obrigações) — são níveis diferentes de segmentação dentro do mesmo fundo.',
    ...SRC('2. Visão geral dos fundos de investimento', '308'),
  },
  {
    topic: 'Conceitos básicos de fundos de investimento',
    subtopic: 'Regulação — Resolução CVM 175',
    difficulty: 'medio',
    statement: 'A partir de 2022, a CVM simplificou as regras do universo dos fundos, concentrando as principais categorias em:',
    options: {
      A: 'Instrução CVM nº 555, mantida sem alterações.',
      B: 'Resolução CVM nº 175.',
      C: 'Lei nº 6.385/1976, exclusivamente.',
      D: 'Resolução CMN nº 5.007/2022.',
    },
    correct: 'B',
    explanation:
      'A partir de 2022, a CVM simplificou as regras do universo dos fundos, concentrando as principais categorias (fundos de investimento financeiro, FIDC, FII, FIP, fundos de índice/ETF) em uma única norma: a Resolução CVM nº 175.',
    explanationWrong: {
      A: 'A antiga Instrução CVM nº 555 (fundos 555) foi substituída/consolidada pela Resolução CVM nº 175, não mantida sem alterações.',
      C: 'A Lei nº 6.385/1976 criou a CVM e disciplina o mercado de capitais de forma ampla, mas não é a norma específica que unificou as regras dos fundos em 2022.',
      D: 'A Resolução CMN nº 5.007/2022 trata da Letra Financeira (título de renda fixa), sem relação com a unificação das regras de fundos de investimento.',
    },
    examTip:
      'Resolução CVM nº 175 (2022) = a "grande unificação" das regras de fundos de investimento no Brasil.',
    commonTrap:
      'Não confunda a Resolução CVM 175 (fundos em geral) com outras normas específicas de produtos de renda fixa (como a Resolução CMN 5.007/2022, sobre Letra Financeira).',
    ...SRC('2. Visão geral dos fundos de investimento — Regulação dos fundos de investimento', '309-310'),
  },

  // ---------- Agentes, documentação e cotas ----------
  {
    topic: 'Agentes, documentação e cotas',
    subtopic: 'Administrador x gestor',
    difficulty: 'facil',
    statement: 'A diferença entre o administrador e o gestor de um fundo de investimento é que o gestor é responsável por:',
    options: {
      A: 'Todo o conjunto de serviços relacionados ao funcionamento do fundo, incluindo os prestados por terceiros.',
      B: 'A compra e a venda dos ativos do fundo, conforme os objetivos e a política de investimento do regulamento.',
      C: 'O registro e a guarda dos ativos que compõem o fundo.',
      D: 'A venda das cotas do fundo aos investidores.',
    },
    correct: 'B',
    explanation:
      'O gestor é a instituição responsável pela compra e venda dos ativos do fundo (gestão), conforme os objetivos e a política de investimento estabelecida no regulamento. Já o administrador é responsável pelo conjunto de serviços relacionados ao funcionamento e à manutenção do fundo.',
    explanationWrong: {
      A: 'A responsabilidade pelo conjunto de serviços relacionados ao funcionamento e manutenção do fundo é do ADMINISTRADOR, não do gestor.',
      C: 'Registro e guarda dos ativos é atribuição do CUSTODIANTE, um agente distinto do gestor.',
      D: 'A venda das cotas do fundo é atribuição do DISTRIBUIDOR (que pode ser o próprio administrador ou terceiros contratados), não do gestor.',
    },
    examTip:
      'Administrador = "gerente geral" do fundo. Gestor = "quem escolhe os ativos" da carteira. Custodiante = "guarda". Distribuidor = "vende cotas". Auditor = "audita".',
    commonTrap:
      'A prova adora misturar os cinco agentes essenciais (administrador, gestor, custodiante, distribuidor, auditor) e suas atribuições — memorize o verbo-chave de cada um.',
    ...SRC('2. Visão geral dos fundos de investimento — Principais agentes e atribuições', '312'),
  },
  {
    topic: 'Agentes, documentação e cotas',
    subtopic: 'Come-cotas',
    difficulty: 'medio',
    statement: 'O processo conhecido no mercado como "come-cotas" refere-se a:',
    options: {
      A: 'Uma taxa de saída cobrada em resgates antecipados.',
      B: 'O recolhimento semestral de Imposto de Renda, no último dia útil de maio e novembro, abatido diretamente da quantidade de cotas do investidor.',
      C: 'A cobrança de taxa de performance sobre o benchmark do fundo.',
      D: 'A conversão automática de um fundo aberto em fundo fechado.',
    },
    correct: 'B',
    explanation:
      'O "come-cotas" é o processo de recolhimento semestral de Imposto de Renda, no último dia útil dos meses de maio e novembro, no qual o valor devido de IR é abatido diretamente da quantidade de cotas do investidor (e não do valor da cota).',
    explanationWrong: {
      A: 'Taxa de saída é uma cobrança distinta, opcional e paga pelo investidor diretamente — não é o mecanismo do come-cotas, que é uma antecipação semestral de IR.',
      C: 'Taxa de performance é cobrada sobre rentabilidade que supera um benchmark — conceito totalmente diferente do come-cotas, que é uma antecipação tributária.',
      D: 'O come-cotas não converte o tipo de fundo (aberto/fechado) — é apenas um mecanismo de recolhimento antecipado de IR sobre os rendimentos.',
    },
    examTip:
      '"Come-cotas" = o IR "come" (reduz) a QUANTIDADE de cotas do investidor duas vezes por ano (maio e novembro), não o valor de cada cota.',
    commonTrap:
      'É um erro comum achar que o come-cotas reduz o VALOR da cota — na verdade, ele reduz a QUANTIDADE de cotas que o investidor possui, mantendo o valor unitário da cota.',
    ...SRC('2. Visão geral dos fundos de investimento — Cotas de um fundo de investimento', '314'),
  },
  {
    topic: 'Agentes, documentação e cotas',
    subtopic: 'Cota de abertura x fechamento',
    difficulty: 'dificil',
    statement: 'Fundos com carteiras compostas por títulos de menor risco (como renda fixa, exclusivas ou previdenciárias) podem ter suas cotas calculadas com base em:',
    options: {
      A: 'Cota de fechamento apenas, sem exceções.',
      B: 'Cota de abertura, com base no patrimônio líquido do dia anterior atualizado por um dia, permitindo acesso ao saldo já no início do dia.',
      C: 'Uma média móvel de 30 dias do valor da cota.',
      D: 'O valor da última cota emitida há um ano.',
    },
    correct: 'B',
    explanation:
      'A CVM permite, para fundos de carteiras de menor risco, o cálculo das cotas com base no patrimônio líquido do dia anterior atualizado por um dia (cota de abertura), de forma que os cotistas já podem acessar o saldo atualizado logo no início de cada dia. Para os demais fundos, aplica-se a cota de fechamento, calculada no encerramento do dia.',
    explanationWrong: {
      A: 'A cota de fechamento é a regra geral para a maioria dos fundos, mas não a única possibilidade — fundos de menor risco podem usar a cota de abertura.',
      C: 'Não existe esse mecanismo de "média móvel de 30 dias" para cálculo de cota descrito no Guia — o cálculo é diário, por abertura ou fechamento.',
      D: 'O valor da cota é sempre atualizado diariamente (abertura ou fechamento do próprio dia) — não uma referência de um ano atrás.',
    },
    examTip:
      'Cota de abertura = já sei meu saldo no início do dia (fundos de baixo risco). Cota de fechamento = só sei meu saldo no fim do dia (regra geral).',
    commonTrap:
      'A cota de abertura é uma EXCEÇÃO permitida para fundos de menor risco — não pense que é a regra padrão de todo o mercado.',
    ...SRC('2. Visão geral dos fundos de investimento — Cotas de um fundo de investimento', '314'),
  },

  // ---------- Custos e taxas ----------
  {
    topic: 'Custos e taxas',
    subtopic: 'Taxa de performance',
    difficulty: 'dificil',
    statement: 'A taxa de performance de um fundo de investimento deve ser cobrada:',
    options: {
      A: 'Sobre toda a rentabilidade do fundo, independentemente de comparação com qualquer índice.',
      B: 'Como percentual sobre a rentabilidade que ultrapassar o benchmark, após dedução de todas as demais despesas (inclusive a taxa de administração), com periodicidade mínima de seis meses.',
      C: 'Mensalmente, sobre o patrimônio total do fundo, sem relação com desempenho.',
      D: 'Apenas em fundos de renda fixa, sendo vedada em fundos de ações.',
    },
    correct: 'B',
    explanation:
      'A taxa de performance é cobrada na forma de percentual sobre a rentabilidade que ultrapassar o benchmark, após a dedução de todas as demais despesas do fundo (inclusive a taxa de administração), com periodicidade mínima de seis meses. Deve estar vinculada a um parâmetro de referência compatível com a política do fundo, definido desde a criação (ou aprovado em assembleia).',
    explanationWrong: {
      A: 'A taxa de performance incide apenas sobre a rentabilidade que EXCEDE o benchmark, não sobre toda a rentabilidade do fundo.',
      C: 'A cobrança mensal sobre o patrimônio total, sem relação com desempenho, descreve a lógica da taxa de ADMINISTRAÇÃO, não da taxa de performance.',
      D: 'A taxa de performance pode ser cobrada em diversos tipos de fundos (não é exclusiva de renda fixa nem vedada em fundos de ações), desde que vinculada a um benchmark compatível.',
    },
    examTip:
      'Taxa de performance = "prêmio por bater o benchmark", cobrada só sobre o excedente, no mínimo a cada 6 meses, após todas as outras despesas já deduzidas.',
    commonTrap:
      'Não confunda taxa de performance (sobre o EXCEDENTE ao benchmark) com taxa de administração (percentual FIXO sobre o patrimônio, independentemente de desempenho).',
    ...SRC('2. Visão geral dos fundos de investimento — Custos (Taxa de performance)', '315'),
  },
  {
    topic: 'Custos e taxas',
    subtopic: 'Taxas de ingresso e saída',
    difficulty: 'medio',
    statement: 'As taxas de ingresso e de saída em fundos de investimento, quando cobradas, são:',
    options: {
      A: 'Debitadas diretamente do patrimônio do fundo, assim como a taxa de administração.',
      B: 'Pagas diretamente pelo investidor, e não debitadas do patrimônio do fundo.',
      C: 'Proibidas pela legislação brasileira em qualquer hipótese.',
      D: 'Obrigatórias em todos os fundos constituídos no Brasil.',
    },
    correct: 'B',
    explanation:
      'As taxas de ingresso e de saída são pagas diretamente pelo investidor, não sendo debitadas do patrimônio do fundo — diferentemente da taxa de administração e outras despesas, que são provisionadas sobre o patrimônio líquido do fundo.',
    explanationWrong: {
      A: 'Ao contrário: essas taxas não são debitadas do patrimônio do fundo — são cobradas diretamente do investidor, individualmente.',
      C: 'A legislação vigente PERMITE a cobrança dessas taxas, embora ainda não seja comum no mercado brasileiro (mais usual nos EUA).',
      D: 'Não há obrigatoriedade dessas taxas — o Guia menciona explicitamente que "ainda não é comum" no mercado brasileiro, sendo uma possibilidade, não uma regra.',
    },
    examTip:
      'Taxas de ingresso/saída = pagas pelo BOLSO do investidor, direto. Taxa de administração/performance = debitadas do PATRIMÔNIO do fundo (afetam a cota de todos).',
    commonTrap:
      'A distinção entre "debitado do patrimônio do fundo" (afeta todos os cotistas via valor da cota) e "pago diretamente pelo investidor" (só afeta quem entra/sai) é o ponto central dessa questão.',
    ...SRC('2. Visão geral dos fundos de investimento — Custos (Taxas de ingresso e de saída)', '315-316'),
  },

  // ---------- Classificação e assembleia ----------
  {
    topic: 'Classificação e assembleia de cotistas',
    subtopic: 'Gestão ativa x passiva',
    difficulty: 'medio',
    statement: 'Um fundo de ações cuja carteira é construída para replicar o Ibovespa, buscando rentabilidade próxima à variação do índice, é classificado como fundo de:',
    options: {
      A: 'Gestão ativa.',
      B: 'Gestão passiva.',
      C: 'Gestão discricionária exclusiva.',
      D: 'Gestão previdenciária.',
    },
    correct: 'B',
    explanation:
      'O gestor de um fundo com estratégia passiva aplica em ativos buscando replicar um índice de referência (benchmark), fazendo com que a rentabilidade do fundo seja próxima à variação desse índice — como no exemplo de fundos de ações atrelados ao Ibovespa.',
    explanationWrong: {
      A: 'Gestão ativa é o oposto: o gestor busca rentabilidade SUPERIOR ao índice de referência, escolhendo ativamente as melhores oportunidades — não apenas replicar o índice.',
      C: '"Gestão discricionária exclusiva" não é uma categoria de classificação de gestão (ativa/passiva) descrita pelo Guia nesse contexto.',
      D: '"Gestão previdenciária" não é uma classificação de estratégia de gestão — previdenciário é um tipo de classe restrita (quanto ao público-alvo), não uma estratégia ativa/passiva.',
    },
    examTip:
      'Gestão passiva = replica o benchmark (CDI para renda fixa, Ibovespa para ações). Gestão ativa = busca SUPERAR o benchmark, geralmente com taxa de administração maior.',
    commonTrap:
      'Fundos de gestão ativa tendem a cobrar taxas de administração MAIORES que os passivos — mas taxa maior não é garantia de rentabilidade maior (fica a critério da eficiência do gestor).',
    ...SRC('2. Visão geral dos fundos de investimento — Fundos de gestão ativa e passiva', '316-317'),
  },
  {
    topic: 'Classificação e assembleia de cotistas',
    subtopic: 'Fundos abertos x fechados',
    difficulty: 'medio',
    statement: 'Em um fundo constituído sob a forma de classe fechada, as cotas:',
    options: {
      A: 'Podem ser resgatadas a qualquer momento, como nos fundos abertos.',
      B: 'Somente são resgatadas ao término do prazo de duração do fundo, podendo ser negociadas em bolsa ou balcão organizado antes disso.',
      C: 'Nunca podem ser transferidas, sob nenhuma hipótese.',
      D: 'São automaticamente convertidas em ações da administradora ao final do prazo.',
    },
    correct: 'B',
    explanation:
      'Nas classes fechadas, as cotas somente são resgatadas ao término do prazo de duração do fundo. No entanto, a cota de fundo fechado pode ser transferida mediante termo de cessão e transferência, ou negociada em bolsa de valores ou entidade de balcão organizado em que as cotas sejam admitidas à negociação.',
    explanationWrong: {
      A: 'É justamente o oposto: nos fundos ABERTOS o resgate pode ocorrer a qualquer momento (respeitados prazos regulamentares); nos FECHADOS, apenas ao final do prazo.',
      C: 'É possível transferir cotas de fundo fechado por termo de cessão e transferência, ou via negociação em bolsa/balcão — não há vedação absoluta à transferência.',
      D: 'Não há essa conversão automática em ações da administradora descrita pelo Guia — o resgate ocorre ao término do prazo de duração do fundo (em dinheiro/ativos, conforme regulamento).',
    },
    examTip:
      'Fundo aberto: resgate a qualquer momento. Fundo fechado: só resgata no fim do prazo, MAS pode negociar as cotas em bolsa/balcão antes disso (liquidez alternativa).',
    commonTrap:
      '"Fechado" não significa "sem liquidez nenhuma" — as cotas de fundos fechados (como FII) podem ser negociadas no mercado secundário, mesmo sem direito a resgate direto junto ao fundo.',
    ...SRC('2. Visão geral dos fundos de investimento — Classes abertas e fechadas', '317-318'),
  },
  {
    topic: 'Classificação e assembleia de cotistas',
    subtopic: 'Classes restritas e exclusivas',
    difficulty: 'dificil',
    statement: 'Uma classe ou subclasse "exclusiva" de um fundo de investimento é aquela:',
    options: {
      A: 'Aberta à captação de qualquer investidor de varejo, sem restrição.',
      B: 'Constituída para receber aplicações exclusivamente de um único investidor profissional, de cotistas com vínculo societário familiar, ou vinculados por interesse único e indissociável.',
      C: 'Destinada exclusivamente a entidades de previdência complementar.',
      D: 'Vedada a qualquer tipo de investidor, servindo apenas como reserva técnica do administrador.',
    },
    correct: 'B',
    explanation:
      'Uma classe ou subclasse de cotas exclusiva é aquela constituída para receber aplicações exclusivamente de um único investidor profissional, de cotistas que possuam vínculo societário familiar, ou de cotistas vinculados por interesse único e indissociável — sendo esse veículo considerado pela CVM um investidor profissional.',
    explanationWrong: {
      A: 'É o oposto de "exclusiva": classes exclusivas são restritas a um único investidor (ou grupo vinculado), não abertas ao público de varejo em geral.',
      C: 'A destinação exclusiva a entidades de previdência complementar caracteriza uma classe PREVIDENCIÁRIA, categoria distinta da classe exclusiva.',
      D: 'A classe exclusiva não é "vedada a investidores" — ela é, ao contrário, dedicada a um investidor (ou grupo) específico, que é seu único titular.',
    },
    examTip:
      'Exclusiva = 1 investidor profissional (ou grupo com interesse único). Restrita = vários investidores qualificados/profissionais. Previdenciária = recursos de entidades de previdência.',
    commonTrap:
      'Não confunda "classe restrita" (aberta a vários investidores qualificados/profissionais) com "classe exclusiva" (um único investidor ou grupo vinculado) — são níveis diferentes de fechamento.',
    ...SRC('2. Visão geral dos fundos de investimento — Classes restritas; Classes exclusivas', '319'),
  },
  {
    topic: 'Classificação e assembleia de cotistas',
    subtopic: 'Assembleia geral x especial',
    difficulty: 'medio',
    statement: 'A diferença entre a assembleia geral de cotistas e a assembleia especial de cotistas é que a assembleia especial:',
    options: {
      A: 'Convoca todos os cotistas do fundo, independentemente da classe.',
      B: 'Convoca apenas os cotistas de uma determinada classe ou subclasse de cotas.',
      C: 'Só pode ser realizada uma vez na existência do fundo.',
      D: 'Dispensa qualquer prazo de antecedência para convocação.',
    },
    correct: 'B',
    explanation:
      'A assembleia geral de cotistas convoca todos os cotistas do fundo, enquanto a assembleia especial de cotistas convoca apenas os cotistas de uma determinada classe ou subclasse específica de cotas.',
    explanationWrong: {
      A: 'Convocar TODOS os cotistas, independentemente da classe, é característica da assembleia GERAL, não da especial.',
      C: 'Não há essa limitação de "uma única vez" — assembleias (gerais ou especiais) podem ser convocadas periodicamente, conforme a necessidade do fundo.',
      D: 'A convocação de qualquer assembleia (geral ou especial) deve respeitar a antecedência mínima de 10 dias em relação à data de realização, conforme o Guia.',
    },
    examTip:
      'Geral = TODOS os cotistas do fundo. Especial = SÓ os cotistas de uma classe/subclasse específica. Ambas exigem convocação com 10 dias de antecedência mínima.',
    commonTrap:
      'A prova pode testar o prazo mínimo de convocação (10 dias) — aplicável tanto à assembleia geral quanto à especial, não é exclusividade de uma delas.',
    ...SRC('2. Visão geral dos fundos de investimento — Assembleia de cotistas', '319'),
  },

  // ---------- ETF, FIDC, FIP e FII ----------
  {
    topic: 'ETF, FIDC, FIP e FII',
    subtopic: 'ETF — características',
    difficulty: 'medio',
    statement: 'Sobre o Exchange Traded Fund (ETF), é correto afirmar que:',
    options: {
      A: 'É um fundo de condomínio fechado, sem possibilidade de negociação em bolsa.',
      B: 'Tem cotas negociáveis em bolsa como se fossem ações, buscando replicar a performance de um índice de mercado, e não é permitida a cobrança de taxa de performance.',
      C: 'É obrigatoriamente um fundo de gestão ativa, com taxas de administração elevadas.',
      D: 'Não pode ter suas cotas emitidas ou resgatadas em nenhuma hipótese.',
    },
    correct: 'B',
    explanation:
      'O ETF é um fundo de investimento em um índice de mercado, com cotas negociáveis em bolsa como se fossem ações — um fundo de condomínio ABERTO. Dada sua gestão passiva (busca replicar o índice), não é permitida a cobrança de taxa de performance.',
    explanationWrong: {
      A: 'O ETF é, na verdade, um fundo de condomínio ABERTO, com cotas negociadas em bolsa — o oposto do afirmado.',
      C: 'O ETF é, por definição, um fundo de gestão PASSIVA (replica um índice), e sua taxa de administração é, em geral, inferior à cobrada por fundos tradicionais — não elevada.',
      D: 'O investidor pode solicitar emissão ou resgate do ETF, desde que realizados com os papéis que compõem a carteira teórica do índice de referência, conforme regulamento.',
    },
    examTip:
      'ETF: condomínio ABERTO + gestão PASSIVA + negociado como ação em bolsa + SEM taxa de performance + taxa de administração geralmente baixa.',
    commonTrap:
      'Não confunda a "negociação em bolsa como ação" do ETF com um fundo fechado — ele é um condomínio aberto, permitindo tanto negociação secundária quanto emissão/resgate de cotas conforme regras específicas.',
    ...SRC('3. Outros fundos regidos pela CVM — Exchange traded fund (Fundos de Índice)', '320-321'),
  },
  {
    topic: 'ETF, FIDC, FIP e FII',
    subtopic: 'Agentes do ETF',
    difficulty: 'dificil',
    statement: 'No contexto operacional de um ETF, a corretora que atua continuamente no mercado com ofertas de compra e venda, obedecendo a um spread máximo, é o:',
    options: {
      A: 'Agente autorizado.',
      B: 'Formador de mercado.',
      C: 'Custodiante.',
      D: 'Gestor.',
    },
    correct: 'B',
    explanation:
      'O formador de mercado, no contexto do ETF, é a corretora que atua continuamente no mercado com ofertas de compra e de venda para, pelo menos, uma quantidade mínima de ETFs por oferta, obedecendo a um spread máximo — função voltada a garantir liquidez.',
    explanationWrong: {
      A: 'O agente autorizado é a corretora que pode emitir e resgatar lotes mínimos de ETF, relacionando-se diretamente com o administrador — função distinta de manter ofertas contínuas de compra/venda.',
      C: 'O custodiante assegura a guarda dos ETFs e dos ativos que os compõem, além de operacionalizar emissão/resgate — não é quem mantém ofertas contínuas no mercado.',
      D: 'O gestor é responsável por gerir a carteira do fundo e replicar a performance do índice de referência — não por prover liquidez com ofertas contínuas.',
    },
    examTip:
      'No ETF: Agente autorizado = emite/resgata lotes mínimos. Formador de mercado = mantém ofertas contínuas de compra/venda para dar liquidez.',
    commonTrap:
      'Agente autorizado e formador de mercado são ambos corretoras, mas com papéis distintos: um cuida da criação/resgate de cotas, o outro da liquidez diária no book de ofertas.',
    ...SRC('3. Outros fundos regidos pela CVM — Exchange traded fund (Fundos de Índice)', '321'),
  },
  {
    topic: 'ETF, FIDC, FIP e FII',
    subtopic: 'FIDC — subclasses',
    difficulty: 'dificil',
    statement: 'Em um FIDC, os cotistas da subclasse sênior, em relação aos das subclasses subordinada mezanino e subordinada:',
    options: {
      A: 'São os últimos a receber os valores devidos pelo fundo.',
      B: 'São os primeiros a receber os valores, de forma semelhante a uma operação de renda fixa.',
      C: 'Não têm qualquer prioridade de recebimento em relação aos demais cotistas.',
      D: 'Só podem ser investidores de varejo, nunca profissionais.',
    },
    correct: 'B',
    explanation:
      'Os cotistas sêniores de um FIDC são os primeiros a receber os valores, como se fosse uma operação de renda fixa. Os cotistas das subclasses subordinada mezanino e subordinada só recebem depois do pagamento aos sêniores — por isso, as cotas subordinadas são destinadas apenas a investidores profissionais.',
    explanationWrong: {
      A: 'É o oposto: os sêniores são os PRIMEIROS a receber, não os últimos — a subordinação de pagamento beneficia justamente os sêniores.',
      C: 'Há sim uma clara hierarquia de prioridade de pagamento entre as subclasses (sênior > mezanino > subordinada) — não é um tratamento igualitário.',
      D: 'É o oposto: as cotas SUBORDINADAS (mezanino e subordinada), por seu maior risco, são destinadas a investidores PROFISSIONAIS, não as sêniores, que podem ser acessadas por outros perfis.',
    },
    examTip:
      'FIDC: sênior primeiro na fila de pagamento (menor risco, "parece renda fixa"), subordinada/mezanino por último (maior risco, só para profissionais).',
    commonTrap:
      'A subordinação de pagamento é o coração do FIDC — não pense nas subclasses como iguais; a ordem de recebimento é o mecanismo que protege os cotistas sêniores.',
    ...SRC('3. Outros fundos regidos pela CVM — Fundo de investimento em direitos creditórios (FIDC)', '322'),
  },
  {
    topic: 'ETF, FIDC, FIP e FII',
    subtopic: 'FIP — participação na gestão',
    difficulty: 'dificil',
    statement: 'Uma característica essencial do Fundo de Investimento em Participações (FIP) é que ele:',
    options: {
      A: 'Deve permanecer totalmente passivo, sem qualquer influência na gestão das companhias investidas.',
      B: 'Deve participar do processo decisório da companhia investida, com efetiva influência em sua política estratégica e gestão.',
      C: 'É constituído exclusivamente sob a forma de condomínio aberto, com resgate a qualquer momento.',
      D: 'Só pode investir em companhias já listadas em bolsa com mais de 10 anos de existência.',
    },
    correct: 'B',
    explanation:
      'O FIP deve participar do processo decisório da companhia investida, com efetiva influência na definição de sua política estratégica e gestão — seja pela detenção de ações do bloco de controle, celebração de acordo de acionistas, ou outro procedimento que assegure essa influência.',
    explanationWrong: {
      A: 'É o oposto: a participação ativa na gestão/estratégia da companhia investida é uma característica ESSENCIAL e definidora do FIP, não uma prática vedada.',
      C: 'O FIP é constituído sob a forma de condomínio FECHADO, com cotas resgatadas apenas ao término da duração do fundo ou por deliberação de liquidação — não é aberto.',
      D: 'O FIP pode investir em companhias abertas, fechadas ou sociedades limitadas em fase de desenvolvimento — não há essa exigência de listagem prévia com 10 anos de existência.',
    },
    examTip:
      'FIP = investidor ATIVO na gestão da empresa investida (assento no conselho, acordo de acionistas), condomínio FECHADO, renda variável.',
    commonTrap:
      'Não confunda FIP (participação ativa na gestão) com um fundo de ações comum (compra ações no mercado secundário sem buscar influência na administração da empresa).',
    ...SRC('3. Outros fundos regidos pela CVM — Fundos de investimento em participações (FIP)', '322-323'),
  },
  {
    topic: 'ETF, FIDC, FIP e FII',
    subtopic: 'FII — distribuição de resultados',
    difficulty: 'medio',
    statement: 'Segundo o Guia, o administrador de um Fundo de Investimento Imobiliário (FII) deve distribuir a seus cotistas, no mínimo:',
    options: {
      A: '25% do lucro eventualmente auferido pelo fundo.',
      B: '50% do lucro eventualmente auferido pelo fundo.',
      C: '95% do lucro eventualmente auferido pelo fundo.',
      D: '100% do patrimônio líquido do fundo a cada ano.',
    },
    correct: 'C',
    explanation:
      'Existe disposição legal obrigando que o administrador de um FII distribua a seus cotistas, no mínimo, 95% do lucro eventualmente auferido pelo fundo, apurado conforme o regime de caixa, com base em balanço ou balancete.',
    explanationWrong: {
      A: '25% é o percentual mínimo de dividendo obrigatório de AÇÕES (Lei nº 6.404/1976, quando o estatuto é omisso e alterado em assembleia) — não do FII.',
      B: '50% também está associado à regra de dividendos de AÇÕES em outra hipótese (estatuto omisso, sem alteração em assembleia) — não é o percentual do FII.',
      D: 'Distribuir 100% do patrimônio líquido a cada ano descapitalizaria o fundo — a regra é sobre o LUCRO auferido (95%), não sobre todo o patrimônio.',
    },
    examTip:
      'FII: distribuição mínima de 95% do lucro. Não confunda com a regra de dividendo obrigatório de ações (25% ou 50%, conforme o estatuto).',
    commonTrap:
      'A prova pode misturar o percentual do FII (95%) com os percentuais de dividendo obrigatório de ações vistos no Capítulo I (25% ou 50%) — são regras de universos diferentes (fundo imobiliário x companhia aberta).',
    ...SRC('3. Outros fundos regidos pela CVM — Fundos de investimentos imobiliários (FII)', '324'),
  },
  {
    topic: 'ETF, FIDC, FIP e FII',
    subtopic: 'Fiagro',
    difficulty: 'dificil',
    statement: 'O Fiagro (Fundo de Investimento nas Cadeias Produtivas Agroindustriais), criado pela Lei 14.130/2021, pode ser estruturado em três categorias, EXCETO:',
    options: {
      A: 'Fiagro-FIDC (direitos creditórios do agronegócio).',
      B: 'Fiagro-FII (imobiliário).',
      C: 'Fiagro-FIP (participações).',
      D: 'Fiagro-Câmbio (operações cambiais do agronegócio).',
    },
    correct: 'D',
    explanation:
      'São três as categorias de Fiagro descritas pelo Guia: Fiagro-FIDC (fundos que aplicam em direitos creditórios do agronegócio), Fiagro-FII (fundos que aplicam em ativos imobiliários do agronegócio) e Fiagro-FIP (fundos que aplicam em participações de companhias ligadas ao agronegócio). Não existe uma categoria "Fiagro-Câmbio".',
    explanationWrong: {
      A: 'Fiagro-FIDC é, de fato, uma das três categorias reais de Fiagro descritas pelo Guia.',
      B: 'Fiagro-FII é, de fato, uma das três categorias reais de Fiagro descritas pelo Guia.',
      C: 'Fiagro-FIP é, de fato, uma das três categorias reais de Fiagro descritas pelo Guia.',
    },
    examTip:
      'Fiagro tem 3 sabores: FIDC (crédito), FII (imóveis) e FIP (participações) — todos aplicados à cadeia do agronegócio. Não existe "Fiagro-Câmbio".',
    commonTrap:
      'Questões de "assinale a alternativa incorreta/inexistente" testam se você decorou a lista fechada de categorias — cuidado com opções que "soam plausíveis" mas não existem no Guia.',
    ...SRC('3. Outros fundos regidos pela CVM — Fundos de investimento nas cadeias produtivas agroindustriais (Fiagro)', '325-326'),
  },

  // ---------- Fundos regionais ----------
  {
    topic: 'Fundos regionais',
    subtopic: 'Finam',
    difficulty: 'dificil',
    statement: 'O Fundo de Investimento da Amazônia (Finam) tem seu patrimônio constituído por ações e debêntures de empresas sediadas:',
    options: {
      A: 'Exclusivamente no estado de São Paulo.',
      B: 'Na região amazônica (Acre, Amapá, Amazonas, Mato Grosso, Pará, Rondônia, Roraima, Tocantins e parte do Maranhão).',
      C: 'Exclusivamente em capitais de estados do Nordeste.',
      D: 'Em qualquer país da América Latina, sem restrição geográfica.',
    },
    correct: 'B',
    explanation:
      'O Finam tem seu patrimônio constituído por ações e debêntures emitidas por empresas sediadas na região amazônica — que compreende os estados do Acre, Amapá, Amazonas, Mato Grosso, Pará, Rondônia, Roraima, Tocantins e parte do Maranhão —, contribuindo para o desenvolvimento econômico-social dessa região.',
    explanationWrong: {
      A: 'São Paulo não faz parte da região amazônica contemplada pelo Finam — o fundo é voltado especificamente ao desenvolvimento da Amazônia.',
      C: 'Empresas do Nordeste são o foco do FINOR (Fundo de Investimentos do Nordeste), não do Finam, que é voltado à região amazônica.',
      D: 'O Finam é restrito a empresas sediadas na região amazônica brasileira, não a qualquer país da América Latina.',
    },
    examTip:
      'Finam = Amazônia (norte). FINOR = Nordeste. Ambos são fundos de incentivo fiscal regional, criados pelo mesmo Decreto-Lei nº 1.376/1974.',
    commonTrap:
      'Não troque Finam (Amazônia) com FINOR (Nordeste) — os nomes são parecidos, mas as regiões-alvo são diferentes.',
    ...SRC('4. Fundos de investimento regionais — Fundo de Investimento da Amazônia (Finam)', '326-327'),
  },
];
