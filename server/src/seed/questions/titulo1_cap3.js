// Título I - Aspectos institucionais
// Capítulo III - A B3 no mercado financeiro e de capitais
// Fonte: Guia Por Dentro da B3, páginas 69-101.

export const chapterRef = { titleNumber: 'I', chapterNumber: 'III' };

export const topics = [
  'Histórico e antecedentes da B3',
  'Segmentos da B3',
  'Participantes da B3',
  'Sistemas de negociação eletrônica',
  'Câmaras de compensação e liquidação na B3',
  'Central depositária e BSM',
];

const SRC = (section, page) => ({
  source_title: 'Guia Por Dentro da B3',
  source_chapter: 'Título I, Capítulo III — A B3 no mercado financeiro e de capitais',
  source_section: section,
  source_page: page,
});

export const questions = [
  // ---------- Histórico ----------
  {
    topic: 'Histórico e antecedentes da B3',
    subtopic: 'Desmutualização',
    difficulty: 'medio',
    statement: 'O processo de "desmutualização", ocorrido com a Bovespa em 2007, consiste em:',
    options: {
      A: 'Uma empresa pertencente a um grupo de participantes (como uma cooperativa) mudar sua estrutura societária para se tornar uma empresa de capital aberto pertencente a acionistas.',
      B: 'A fusão entre duas bolsas de valores distintas em uma única entidade.',
      C: 'A migração do pregão viva-voz para negociação totalmente eletrônica.',
      D: 'A criação de uma câmara de compensação integrada para vários mercados.',
    },
    correct: 'A',
    explanation:
      'Desmutualização é o processo pelo qual uma empresa pertencente a um grupo de participantes, como uma cooperativa (caso da Bovespa mutualizada), muda legalmente sua estrutura societária para se tornar uma empresa de capital aberto pertencente a acionistas — em 2007, os detentores de títulos patrimoniais da Bovespa e da CBLC tornaram-se acionistas da Bovespa Holding S/A.',
    explanationWrong: {
      B: 'A fusão entre bolsas (como BM&F e Bovespa em 2008) é um evento distinto, chamado de integração/fusão — não é sinônimo de desmutualização.',
      C: 'O fim do pregão viva-voz (2005 para a Bovespa) é um evento de modernização operacional, não de mudança de estrutura societária.',
      D: 'A criação de câmara integrada refere-se ao Projeto de Integração da Pós-Negociação (IPN), conceito distinto de desmutualização.',
    },
    examTip:
      'Desmutualização = "de cooperativa mutualizada para empresa de capital aberto com acionistas". Não confunda com fusão entre bolsas nem com fim do pregão viva-voz.',
    commonTrap:
      'A prova tende a misturar os vários marcos históricos da Bovespa/BM&F (fim do pregão, desmutualização, fusão) — cada evento tem um ano e um significado diferente.',
    ...SRC('2. Visão geral e antecedentes históricos — Bovespa', '73'),
  },
  {
    topic: 'Histórico e antecedentes da B3',
    subtopic: 'Fusões que originaram a B3',
    difficulty: 'medio',
    statement: 'A empresa B3 S.A. – Brasil, Bolsa, Balcão foi criada em 2017 a partir da fusão entre:',
    options: {
      A: 'Bovespa e BM&F.',
      B: 'BM&FBOVESPA S.A. e Cetip S.A.',
      C: 'CBLC e Cetip.',
      D: 'Bovespa Holding e Banco B3.',
    },
    correct: 'B',
    explanation:
      'Em 30 de março de 2017, o Cade aprovou a fusão da BM&FBOVESPA S.A. (que já era, desde 2008, resultado da fusão entre Bovespa e BM&F) com a Cetip S.A., dando origem à B3 S.A. – Brasil, Bolsa, Balcão, que consolidou os mercados de bolsa e de balcão organizado.',
    explanationWrong: {
      A: 'A fusão entre Bovespa e BM&F ocorreu em 2008 e deu origem à BM&FBOVESPA S.A. — um passo anterior, não a criação da B3 em si.',
      C: 'A CBLC foi incorporada à estrutura da Bovespa/BM&FBOVESPA na década de 1990/2000, mas a fusão que criou a B3 em 2017 foi entre BM&FBOVESPA e Cetip, não CBLC e Cetip diretamente.',
      D: 'O Banco B3 é uma subsidiária controlada pela B3, criada em 2004 — não participou da fusão de 2017.',
    },
    examTip:
      'Linha do tempo: 2008 → Bovespa + BM&F = BM&FBOVESPA. 2017 → BM&FBOVESPA + Cetip = B3.',
    commonTrap:
      'Cuidado para não confundir a fusão de 2008 (Bovespa+BM&F) com a de 2017 (BM&FBOVESPA+Cetip) — a prova costuma testar exatamente essa sequência.',
    ...SRC('2. Visão geral e antecedentes históricos — B3 S.A.', '74-75'),
  },
  {
    topic: 'Histórico e antecedentes da B3',
    subtopic: 'Ambiente de balcão (Cetip)',
    difficulty: 'medio',
    statement:
      'O ambiente historicamente administrado pela Cetip é conhecido como ambiente de balcão porque, em comparação ao ambiente de bolsa:',
    options: {
      A: 'Não permite o registro de nenhum tipo de título de renda fixa.',
      B: 'Oferece aos participantes maior flexibilidade para o registro da negociação de títulos e valores mobiliários de renda fixa.',
      C: 'É restrito exclusivamente a títulos públicos federais.',
      D: 'Opera apenas com derivativos de commodities.',
    },
    correct: 'B',
    explanation:
      'O ambiente de balcão (historicamente associado à Cetip) é conhecido por oferecer aos participantes maior flexibilidade para o registro da negociação de títulos e valores mobiliários de renda fixa, diferenciando-se do ambiente de bolsa (mais associado a regras centralizadas e padronizadas de negociação).',
    explanationWrong: {
      A: 'É o oposto: a Cetip é justamente reconhecida pelo registro de títulos privados de renda fixa (debêntures, CDBs etc.), além de outros ativos.',
      C: 'A Cetip registrava diversos tipos de título, incluindo títulos públicos estaduais/municipais e privados — não é restrita a títulos públicos federais (que é o domínio do Selic).',
      D: 'A Cetip é historicamente ligada a títulos de renda fixa e derivativos de balcão, não especificamente a commodities.',
    },
    examTip:
      'Balcão (Cetip) = mais flexibilidade, foco em renda fixa/derivativos de balcão. Bolsa = ambiente mais padronizado (ex.: renda variável na Bovespa).',
    commonTrap:
      'Não pense em "balcão" como um mercado menos regulado ou informal — é um ambiente organizado, apenas com regras mais flexíveis de registro do que o ambiente de bolsa.',
    ...SRC('2. Visão geral e antecedentes históricos — Cetip', '74-75'),
  },

  // ---------- Segmentos da B3 ----------
  {
    topic: 'Segmentos da B3',
    subtopic: 'Listado B3',
    difficulty: 'facil',
    statement: 'No segmento Listado B3, a B3 administra uma única plataforma de negociação multiativos chamada:',
    options: {
      A: 'Mega Bolsa.',
      B: 'CATS.',
      C: 'Puma Trading System.',
      D: 'Sisbex.',
    },
    correct: 'C',
    explanation:
      'No segmento Listado B3, a B3 administra o Puma Trading System, plataforma que congrega operações com ativos de renda variável, renda fixa, derivativos e commodities. O Puma substituiu sistemas anteriores como GTS, Mega Bolsa, Bovespa Fix e Sisbex.',
    explanationWrong: {
      A: 'Mega Bolsa foi um sistema anterior, usado para negociação de ações e derivativos de ações antes de ser substituído pelo Puma.',
      B: 'CATS (Computer Assisted Trading System) foi o primeiro sistema eletrônico de negociação de renda variável da Bovespa, na década de 1990, já superado.',
      D: 'Sisbex era o sistema usado para negociação de títulos públicos antes de ser substituído pelo Puma Trading System.',
    },
    examTip:
      'Puma Trading System = plataforma multiativos ATUAL da B3, sucessora de GTS, Mega Bolsa, Bovespa Fix e Sisbex.',
    commonTrap:
      'A prova pode citar um sistema antigo (Mega Bolsa, CATS, Sisbex) como se fosse a plataforma atual — todos foram substituídos pelo Puma.',
    ...SRC('3. Os Segmentos da B3 — Listado B3', '78'),
  },
  {
    topic: 'Segmentos da B3',
    subtopic: 'Estrutura para financiamento',
    difficulty: 'medio',
    statement:
      'O segmento de Estrutura para Financiamento da B3 oferece uma solução para que instituições financeiras cumpram exigências relativas a:',
    options: {
      A: 'Listagem de emissores de valores mobiliários.',
      B: 'Registro e controle de gravames sobre veículos automotores em operações de crédito e leasing.',
      C: 'Negociação de derivativos financeiros e de commodities.',
      D: 'Supervisão de mercado e processos disciplinares.',
    },
    correct: 'B',
    explanation:
      'Por meio do segmento de Estrutura para Financiamento, a B3 oferece o Sistema de Registro de Garantia sobre Veículos Automotores, atendendo à Resolução CMN nº 4.088/2012, segundo a qual os bancos devem registrar informações sobre garantias de veículos em operações de crédito e sobre a propriedade de veículos em operações de arrendamento mercantil (leasing).',
    explanationWrong: {
      A: 'Listagem de emissores está ligada ao segmento Listado B3, não ao segmento de Estrutura para Financiamento.',
      C: 'Negociação de derivativos ocorre no Puma Trading System (Listado B3), não no segmento de financiamento de veículos/imóveis.',
      D: 'Supervisão de mercado e processos disciplinares são atribuições da BSM Supervisão de Mercados, entidade distinta do segmento de financiamento.',
    },
    examTip:
      'Estrutura para Financiamento = veículos e imóveis (registro de garantias/gravames), não confundir com Listado B3 (ações/derivativos) nem com a BSM (supervisão).',
    commonTrap:
      'A B3 tem múltiplos segmentos de negócio muito diferentes entre si — a prova testa se você sabe qual segmento cuida de qual atividade específica.',
    ...SRC('3. Os Segmentos da B3 — Estrutura para financiamento', '78'),
  },

  // ---------- Participantes da B3 ----------
  {
    topic: 'Participantes da B3',
    subtopic: 'PNP x PN',
    difficulty: 'medio',
    statement: 'A diferença essencial entre um Participante de Negociação Pleno (PNP) e um Participante de Negociação (PN) é que:',
    options: {
      A: 'O PNP acessa diretamente os sistemas de negociação da B3; o PN atua para seus clientes por meio de um PNP, sem acesso direto.',
      B: 'O PN é responsável pela liquidação de operações perante a câmara; o PNP nunca participa da liquidação.',
      C: 'Somente o PN pode negociar para carteira própria; o PNP só pode negociar para clientes.',
      D: 'PNP e PN são sinônimos, apenas com nomenclaturas diferentes usadas em contextos distintos.',
    },
    correct: 'A',
    explanation:
      'O PNP é a instituição autorizada pela B3 a acessar diretamente os sistemas de negociação, tanto para carteira própria quanto para clientes. Já o PN atua para seus clientes por meio de um PNP, no modelo operacional "por conta e ordem" — ele não acessa diretamente o sistema de negociação da B3.',
    explanationWrong: {
      B: 'A responsabilidade pela liquidação perante a câmara está tipicamente ligada ao membro de compensação (MC) ou ao participante de liquidação (PL), não é uma distinção entre PN e PNP.',
      C: 'O PNP pode negociar tanto para carteira própria quanto para clientes; a restrição de acesso direto é do PN, não a limitação a apenas um tipo de operação.',
      D: 'PNP e PN são categorias distintas com nível de acesso diferente — não são sinônimos.',
    },
    examTip:
      'PNP = acesso DIRETO ao sistema de negociação. PN = acessa POR MEIO de um PNP ("por conta e ordem").',
    commonTrap:
      'PNP e PN têm nomes parecidos de propósito — a prova espera que você saiba exatamente quem acessa diretamente o sistema de negociação e quem depende de intermediação.',
    ...SRC('4. Os participantes da B3 — PNP e PN', '80, 82'),
  },
  {
    topic: 'Participantes da B3',
    subtopic: 'Participante Estrangeiro (PE)',
    difficulty: 'dificil',
    statement:
      'Um Participante Estrangeiro (PE) que executa operações para clientes não residentes na B3 é representado operacionalmente por:',
    options: {
      A: 'Um agente de custódia (AC), com liquidação sob responsabilidade do PNP e de um membro de compensação.',
      B: 'Um participante de registro (PR), sem qualquer vínculo com PNP ou membro de compensação.',
      C: 'Diretamente pelo sistema de negociação, sem necessidade de intermediário.',
      D: 'Exclusivamente pelo Banco Central do Brasil.',
    },
    correct: 'A',
    explanation:
      'O Participante Estrangeiro (PE) acessa os ambientes da B3 por intermédio de um PNP, com a liquidação de suas obrigações sob responsabilidade do PNP e de um Membro de Compensação, sendo representado operacionalmente por um Agente de Custódia.',
    explanationWrong: {
      B: 'O participante de registro (PR) registra operações de balcão organizado, sem relação com a representação operacional de um PE.',
      C: 'Assim como o PN, o PE não acessa diretamente os sistemas de negociação — quem o faz é o PNP com quem mantém vínculo.',
      D: 'O Bacen não representa operacionalmente participantes estrangeiros na B3; esse papel é do agente de custódia, dentro da estrutura B3/PNP/MC.',
    },
    examTip:
      'PE = igual ao PN em termos de acesso (via PNP), mas com a peculiaridade de ser representado operacionalmente por um Agente de Custódia.',
    commonTrap:
      'Tanto o PN quanto o PE "não acessam diretamente" o sistema de negociação — mas só o PE tem, adicionalmente, representação obrigatória por agente de custódia.',
    ...SRC('4. Os participantes da B3 — Participante Estrangeiro (PE)', '81'),
  },
  {
    topic: 'Participantes da B3',
    subtopic: 'Membro de compensação (MC)',
    difficulty: 'dificil',
    statement: 'O Membro de Compensação (MC) é a instituição responsável, perante a câmara de compensação, por:',
    options: {
      A: 'Executar ordens de compra e venda para investidores finais.',
      B: 'Liquidar o saldo multilateral das operações diretamente com a câmara, respondendo pelo cumprimento das obrigações dos PNPs e PLs a ele vinculados.',
      C: 'Registrar operações de balcão organizado sem garantia.',
      D: 'Guardar centralizadamente valores mobiliários em nome dos investidores.',
    },
    correct: 'B',
    explanation:
      'O MC é a instituição autorizada pela B3 a liquidar o saldo multilateral das operações diretamente com a câmara de compensação, sendo responsável pelo cumprimento, perante a câmara, de todas as obrigações assumidas pelos participantes de negociação plenos (PNP) e pelos participantes de liquidação (PL) vinculados a ele.',
    explanationWrong: {
      A: 'Executar ordens é atividade típica de corretoras/PNP na ponta de negociação, não do MC, que atua na ponta de liquidação perante a câmara.',
      C: 'Registrar operações de balcão organizado é atribuição do participante de registro (PR), não do membro de compensação.',
      D: 'A guarda centralizada de valores mobiliários é função da central depositária (via agente de custódia), não do membro de compensação.',
    },
    examTip:
      'MC = "quem responde pela liquidação perante a câmara" — ele carrega o risco de crédito dos PNPs/PLs vinculados a ele.',
    commonTrap:
      'Não confunda o MC (responde perante a câmara pela liquidação) com o PL (que tem modelo semelhante a um "carrying broker" e pode contratar um MC).',
    ...SRC('4. Os participantes da B3 — Membro de compensação (MC)', '81'),
  },
  {
    topic: 'Participantes da B3',
    subtopic: 'Participante de liquidação (PL)',
    difficulty: 'dificil',
    statement: 'Sobre o Participante de Liquidação (PL), é correto afirmar que:',
    options: {
      A: 'Tem acesso direto ao sistema de negociação da bolsa, assim como o PNP.',
      B: 'Pode atuar como membro de compensação ou contratar um membro de compensação, mesmo que não pertencente ao mesmo grupo econômico.',
      C: 'É restrito exclusivamente a bancos múltiplos, não podendo ser corretora ou distribuidora.',
      D: 'Não pode receber repasses de operações de outros PNPs.',
    },
    correct: 'B',
    explanation:
      'O PL pode atuar como membro de compensação ou contratar membro de compensação — não necessariamente pertencente ao mesmo grupo econômico — para a liquidação de suas operações e de seus clientes. São elegíveis a PL as corretoras e distribuidoras de títulos e valores mobiliários, bem como bancos múltiplos, comerciais e de investimento.',
    explanationWrong: {
      A: 'O Guia é explícito: "o participante de liquidação, por não ser participante de negociação pleno, não tem acesso direto ao sistema de negociação da bolsa".',
      C: 'São elegíveis a PL não apenas bancos múltiplos, mas também corretoras, distribuidoras, bancos comerciais e bancos de investimento.',
      D: 'Pelo procedimento de repasse, um PNP pode transferir a liquidação para outro PNP ou para um PL — ou seja, o PL pode sim receber repasses.',
    },
    examTip:
      'PL = modelo "carrying broker": liquida e "carrega" operações, mas sem acesso direto à negociação (isso é exclusivo do PNP).',
    commonTrap:
      'A pegadinha mais comum é achar que PL tem acesso direto à negociação por poder atuar como membro de compensação — são capacidades independentes.',
    ...SRC('4. Os participantes da B3 — Participante de liquidação (PL)', '81-82'),
  },
  {
    topic: 'Participantes da B3',
    subtopic: 'Agente de custódia (AC)',
    difficulty: 'medio',
    statement: 'De acordo com a Resolução CVM nº 32/2021, o participante da central depositária da B3 é:',
    options: {
      A: 'O membro de compensação (MC).',
      B: 'O agente de custódia (AC) ou custodiante.',
      C: 'O participante de negociação pleno (PNP).',
      D: 'O sistema externo.',
    },
    correct: 'B',
    explanation:
      'O agente de custódia (AC) compreende as instituições responsáveis, perante seus clientes e a câmara, pela administração de contas de custódia próprias e de seus clientes no serviço de custódia da B3. Segundo a Resolução CVM nº 32/2021, é ele — o agente de custódia/custodiante — o participante da central depositária da B3.',
    explanationWrong: {
      A: 'O MC atua na ponta de liquidação perante a câmara de compensação, e não como participante da central depositária.',
      C: 'O PNP atua na ponta de negociação (acesso direto ao sistema de negociação), papel distinto do de participante da central depositária.',
      D: 'O sistema externo é um sistema de negociação/compensação/depositária de terceiros autorizado a acessar a infraestrutura da B3 — não é, por definição, o "participante" típico da central depositária referido na norma.',
    },
    examTip:
      'Câmara → membro de compensação. Negociação → PNP. Central depositária → agente de custódia (AC/custodiante). Associe cada infraestrutura ao seu participante típico.',
    commonTrap:
      'Cada uma das três infraestruturas da B3 (negociação, câmara, depositária) tem um "participante-chave" diferente — a prova testa se você sabe emparelhar corretamente.',
    ...SRC('4. Os participantes da B3 — Agente de custódia (AC)', '82'),
  },
  {
    topic: 'Participantes da B3',
    subtopic: 'Comitente',
    difficulty: 'dificil',
    statement: 'O "comitente", no contexto dos participantes cadastrados da B3, é:',
    options: {
      A: 'A instituição que executa ordens diretamente no sistema de negociação da B3.',
      B: 'A pessoa física, jurídica, fundo ou entidade de investimento coletivo que é titular das operações realizadas por sua conta e ordem, por intermédio de um participante.',
      C: 'O banco responsável pela emissão de garantias aceitas pela câmara.',
      D: 'A instituição habilitada a registrar operações de balcão organizado.',
    },
    correct: 'B',
    explanation:
      'O comitente é a pessoa física ou jurídica, o fundo, a entidade de investimento coletivo ou entidade semelhante que participa como titular das operações realizadas por sua conta e ordem, por intermédio de um participante, utilizando os serviços de um agente de custódia (e, no caso de títulos públicos federais, de um participante Selic).',
    explanationWrong: {
      A: 'Quem executa ordens diretamente no sistema de negociação é o PNP, não o comitente (que é o titular final da operação, "por conta e ordem" de quem).',
      C: 'O banco emissor de garantias é uma categoria separada de participante cadastrado, distinta do comitente.',
      D: 'Registrar operações de balcão organizado é atribuição do participante de registro (PR), não do comitente.',
    },
    examTip:
      '"Comitente" = o investidor final/titular por trás da operação — quem dá a ordem "por conta e ordem" de quem os participantes atuam.',
    commonTrap:
      'Não confunda "comitente" (titular final da operação) com "participante" (instituição intermediária que executa/liquida/custodia em nome do comitente).',
    ...SRC('4. Os participantes da B3 — Comitente', '84-85'),
  },

  // ---------- Sistemas de negociação eletrônica ----------
  {
    topic: 'Sistemas de negociação eletrônica',
    subtopic: 'DMA',
    difficulty: 'medio',
    statement: 'O acesso direto ao mercado (direct market access – DMA) permite que:',
    options: {
      A: 'O investidor final acesse diretamente o Puma Trading System, por meio de tela própria ou de provedor externo, mas sempre autorizado e controlado pelo PN ou PNP.',
      B: 'Qualquer pessoa negocie sem qualquer vínculo com uma corretora autorizada pela B3.',
      C: 'A B3 execute automaticamente as ordens sem intervenção de sistemas de negociação eletrônica.',
      D: 'O agente de custódia acesse diretamente o sistema de negociação em nome do investidor.',
    },
    correct: 'A',
    explanation:
      'O DMA é uma das formas de acesso ao Puma Trading System em que o investidor, cliente final, acessa diretamente a plataforma por meio de tela de negociação de provedor externo ou do próprio participante — mas esse acesso direto deve ser sempre autorizado e controlado pelo PN ou PNP, permitindo visualizar o livro de ofertas em tempo real e enviar ordens.',
    explanationWrong: {
      B: 'O DMA não elimina o vínculo com um participante autorizado — ele deve ser autorizado e controlado pelo PN ou PNP, não é um acesso livre e sem vínculo.',
      C: 'O DMA é uma forma de acesso ao sistema eletrônico de negociação (Puma), não uma execução automática sem sistema — as ordens ainda passam pelo livro de ofertas do sistema.',
      D: 'O agente de custódia atua na ponta de custódia/central depositária, não no acesso ao sistema de negociação — essa não é sua função no contexto do DMA.',
    },
    examTip:
      'DMA = cliente final vê o book e envia ordens diretamente, MAS sempre sob autorização e controle do PN/PNP — não é acesso "livre" e desvinculado.',
    commonTrap:
      'A prova pode sugerir que o DMA elimina totalmente a necessidade de um participante autorizado — mas o controle e a autorização do PN/PNP continuam obrigatórios.',
    ...SRC('5. Sistemas de negociação eletrônica — Puma Trading System', '86'),
  },

  // ---------- Câmaras de compensação e liquidação na B3 ----------
  {
    topic: 'Câmaras de compensação e liquidação na B3',
    subtopic: 'IPN',
    difficulty: 'medio',
    statement: 'O Projeto de Integração da Pós-Negociação (IPN) teve como objetivo:',
    options: {
      A: 'Criar quatro câmaras de compensação e liquidação separadas, uma para cada classe de ativo.',
      B: 'Consolidar as atividades das câmaras de derivativos, ações/renda fixa privada e ativos em uma clearing única e integrada.',
      C: 'Transferir a administração das câmaras da B3 para o Banco Central.',
      D: 'Eliminar a necessidade de depósito de garantias pelos participantes.',
    },
    correct: 'B',
    explanation:
      'O IPN foi uma iniciativa da B3 para a criação de uma clearing de compensação e liquidação integrada, consolidando as atividades de três das quatro câmaras (derivativos, ações/renda fixa privada e ativos), trazendo maior eficiência na alocação de capital, administração de risco comum e uma única janela de liquidação.',
    explanationWrong: {
      A: 'É o oposto do IPN: o projeto buscou justamente consolidar câmaras separadas em uma estrutura única, não criar mais câmaras isoladas.',
      C: 'A administração das câmaras permaneceu com a B3; o IPN foi um projeto interno de integração tecnológica e operacional, não uma transferência para o Bacen.',
      D: 'O IPN buscou maior eficiência no USO de capital para garantias (não eliminação da exigência de garantias), por meio da unificação das janelas de liquidação.',
    },
    examTip:
      'IPN = integração de câmaras (derivativos + ações/renda fixa privada + ativos) em uma clearing única, com sistema de risco comum (Core) e janela de liquidação unificada.',
    commonTrap:
      'Não confunda "integração das câmaras" (redução de estruturas separadas para uma única) com "eliminação de garantias" — o objetivo é eficiência, não menos controle de risco.',
    ...SRC('6. Câmaras de compensação e liquidação na B3 — O projeto de integração da pós-negociação (IPN)', '88-89'),
  },
  {
    topic: 'Câmaras de compensação e liquidação na B3',
    subtopic: 'Core',
    difficulty: 'dificil',
    statement: 'O sistema Core, adotado pela Câmara B3 após a integração da pós-negociação, é:',
    options: {
      A: 'A plataforma de negociação eletrônica multiativos da B3.',
      B: 'O novo sistema de cálculo e gerenciamento de riscos (close-out risk evaluation) da Câmara B3.',
      C: 'O sistema de registro de operações de balcão organizado.',
      D: 'O mecanismo de ressarcimento de prejuízos aos investidores.',
    },
    correct: 'B',
    explanation:
      'O Core (close-out risk evaluation) é o novo sistema de cálculo e gerenciamento de riscos adotado pela estrutura única e integrada da Câmara B3, parte dos benefícios trazidos pelo Projeto de Integração da Pós-Negociação, ao lado de uma estrutura única de salvaguardas, um único netting multilateral e uma única janela de liquidação.',
    explanationWrong: {
      A: 'A plataforma de negociação multiativos da B3 é o Puma Trading System, não o Core (que é voltado a gerenciamento de risco na câmara).',
      C: 'O registro de operações de balcão organizado é atribuição do participante de registro (PR) dentro do sistema de registro da B3, distinto do Core.',
      D: 'O mecanismo de ressarcimento de prejuízos é o MRP, administrado pela BSM — sem relação com o sistema Core de gerenciamento de risco.',
    },
    examTip:
      'Core = sigla para "close-out risk evaluation" — é o motor de CÁLCULO DE RISCO da câmara integrada, não um sistema de negociação nem de registro.',
    commonTrap:
      'A sigla "Core" pode confundir por soar genérica — lembre-se de que, no contexto do Guia, ela é especificamente o sistema de risco da Câmara B3.',
    ...SRC('6. Câmaras de compensação e liquidação na B3 — O projeto de integração da pós-negociação (IPN)', '88'),
  },

  // ---------- Central depositária e BSM ----------
  {
    topic: 'Central depositária e BSM',
    subtopic: 'Ativos desmaterializados na central depositária',
    difficulty: 'medio',
    statement: 'Os ativos guardados na central depositária da B3 caracterizam-se por serem:',
    options: {
      A: 'Mantidos exclusivamente em forma física, com certificados em papel.',
      B: 'Inteiramente desmaterializados, com registro de posições e movimentações em formato eletrônico (book entry).',
      C: 'Registrados apenas para ativos de renda fixa pública, excluindo ações.',
      D: 'Custodiados apenas por bancos múltiplos autorizados.',
    },
    correct: 'B',
    explanation:
      'Os ativos guardados na central depositária da B3 são inteiramente desmaterializados: o registro das posições é feito em formato eletrônico (book entry), assim como o registro de todas as movimentações de custódia e das atualizações de eventos corporativos incidentes sobre esses ativos.',
    explanationWrong: {
      A: 'É o oposto: os ativos são desmaterializados (eletrônicos), não mantidos fisicamente em papel.',
      C: 'A central depositária da B3 guarda diversas classes de ativos — renda variável (ações, ETFs, BDRs), renda fixa (debêntures, notas promissórias), imobiliários (CRIs, FIIs) e do agronegócio (CRAs) —, não apenas renda fixa pública.',
      D: 'A custódia é feita por meio de agentes de custódia autorizados, categoria que vai além de bancos múltiplos (inclui corretoras e distribuidoras, por exemplo).',
    },
    examTip:
      'Central depositária da B3 = 100% desmaterializada (book entry), cobrindo várias classes de ativos: renda variável, renda fixa, imobiliários e agronegócio.',
    commonTrap:
      'Não pense que "desmaterializado" significa "sem registro" — pelo contrário, significa que o único registro válido é o eletrônico, o que aumenta (não reduz) a segurança e a rastreabilidade.',
    ...SRC('7. Central depositária da B3', '89-90'),
  },
  {
    topic: 'Central depositária e BSM',
    subtopic: 'BSM — Mecanismo de Ressarcimento de Prejuízos (MRP)',
    difficulty: 'prova',
    statement:
      'O Mecanismo de Ressarcimento de Prejuízos (MRP), administrado pela BSM, indeniza investidores prejudicados pela atuação inadequada de participantes da Bolsa, até o seguinte limite:',
    options: {
      A: 'R$ 20.000,00 por ocorrência.',
      B: 'R$ 70.000,00 por ocorrência.',
      C: 'R$ 200.000,00 por ocorrência.',
      D: 'R$ 250.000,00 por ocorrência, mesmo limite do FGC.',
    },
    correct: 'C',
    explanation:
      'O MRP, mantido pela B3 e administrado pela BSM, indeniza, por ocorrência, até o limite de R$ 200 mil, os investidores prejudicados pela atuação inadequada de participante da Bolsa (como corretoras e distribuidoras), seus administradores ou prepostos, em relação a serviços de intermediação e custódia.',
    explanationWrong: {
      A: 'R$ 20.000,00 não corresponde ao limite atual do MRP segundo o Guia.',
      B: 'R$ 70.000,00 foi, em outro contexto, um valor histórico de garantia do FGC — não é o limite do MRP.',
      D: 'O limite do MRP (R$ 200 mil) é diferente do limite de garantia ordinária do FGC (R$ 250 mil) — são mecanismos de proteção distintos, com valores próprios; não devem ser confundidos.',
    },
    examTip:
      'MRP (BSM) = até R$ 200 mil por ocorrência. Não confundir com o FGC (R$ 250 mil por instituição/conglomerado) — são fundos de proteção diferentes, para riscos diferentes.',
    commonTrap:
      'MRP protege contra falhas de atuação de participantes da Bolsa (corretoras); FGC protege créditos contra instituições financeiras em caso de insolvência. São mecanismos e valores distintos — pegadinha clássica de prova.',
    ...SRC('8. BSM Supervisão de Mercados — Ressarcimento de prejuízos', '91'),
  },
  {
    topic: 'Central depositária e BSM',
    subtopic: 'BSM — frentes de atuação',
    difficulty: 'medio',
    statement: 'NÃO é uma das frentes de atuação da BSM Supervisão de Mercados, segundo o Guia Por Dentro da B3:',
    options: {
      A: 'Supervisão de mercado, com monitoramento de 100% das ofertas e negócios realizados nos ambientes da B3.',
      B: 'Auditoria, com fiscalização de todos os participantes quanto à aderência às normas.',
      C: 'Definição das diretrizes de política monetária e cambial do país.',
      D: 'Processos disciplinares, com aplicação de medidas como carta de recomendação, carta censura ou processo administrativo disciplinar.',
    },
    correct: 'C',
    explanation:
      'A definição das diretrizes de política monetária e cambial é atribuição do CMN, não da BSM. As frentes de atuação da BSM são: supervisão de mercado, auditoria, processos disciplinares e outras ações de reforço, ressarcimento de prejuízos (MRP) e desenvolvimento do mercado.',
    explanationWrong: {
      A: 'É, de fato, uma frente de atuação real da BSM: monitoramento de 100% das ofertas e negócios da B3.',
      B: 'É, de fato, uma frente de atuação real da BSM: auditoria e fiscalização de participantes.',
      D: 'É, de fato, uma frente de atuação real da BSM: aplicação de medidas disciplinares proporcionais à gravidade da infração.',
    },
    examTip:
      'A BSM fiscaliza e supervisiona o mercado da B3; ela não define política monetária — isso é papel do CMN, um órgão normativo do SFN, de natureza totalmente diferente.',
    commonTrap:
      'Questões de "assinale a incorreta" costumam inserir uma atribuição de outro órgão (aqui, do CMN) no meio de atribuições reais da BSM — releia cada alternativa isoladamente.',
    ...SRC('8. BSM Supervisão de Mercados', '91'),
  },
  {
    topic: 'Central depositária e BSM',
    subtopic: 'Banco B3',
    difficulty: 'dificil',
    statement: 'Sobre o Banco B3, controlado integralmente pela B3, é correto afirmar que:',
    options: {
      A: 'Capta recursos do público em geral, como qualquer banco comercial.',
      B: 'Desempenha funções exclusivas de liquidante e custodiante para os agentes econômicos responsáveis pelas operações realizadas na B3.',
      C: 'Concede crédito e presta garantias, aval ou fiança a terceiros fora do grupo B3.',
      D: 'É uma autarquia federal vinculada ao Ministério da Fazenda.',
    },
    correct: 'B',
    explanation:
      'O Banco B3 é uma sociedade anônima fechada, banco comercial singular com carteira de câmbio, controlado integralmente pela B3, concebido para ser o principal instrumento de suporte operacional aos participantes da B3, desempenhando funções exclusivas de liquidante e custodiante.',
    explanationWrong: {
      A: 'O Guia é explícito: o Banco B3 NÃO capta recursos do público — diferente de um banco comercial tradicional.',
      C: 'O Banco B3 não realiza operações que requeiram oferta de garantias, aval ou fiança a terceiros, nem concede crédito — isso é expressamente vedado pelo Guia.',
      D: 'O Banco B3 é uma sociedade anônima fechada controlada pela B3 (entidade privada), não uma autarquia federal.',
    },
    examTip:
      'Banco B3 = banco "de bastidores" do grupo: só liquida e custodia para o ecossistema B3, sem captar do público, sem emprestar, sem dar garantias a terceiros.',
    commonTrap:
      'Por ter "Banco" no nome, é tentador supor que ele funciona como um banco comercial comum — mas o Guia restringe expressamente sua atuação a liquidante/custodiante interno do grupo.',
    ...SRC('2. Visão geral e antecedentes históricos — Empresas do Grupo B3 (Banco B3 S.A.)', '76'),
  },
];
