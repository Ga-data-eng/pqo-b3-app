// Título V - Negociação
// Capítulo II - Ambiente de negociação
// Fonte: Guia Por Dentro da B3, páginas ~506-535 (Puma, participantes, sessão, ordens/ofertas,
// RLP, leilões, túneis, correção/suspensão/circuit breaker, sanções, controle de risco
// tecnológico, continuidade de negócio, conexão e acessibilidade).

export const chapterRef = { titleNumber: 'V', chapterNumber: 'II' };

export const topics = [
  'Sistema de negociação e ambiente de negociação',
  'Participantes do ambiente de negociação',
  'Sessão, fases e lotes de negociação',
  'Operação ex-pit e day trade',
  'Ordens e prioridade de execução',
  'Ofertas e qualificadores',
  'RLP — Retail Liquidity Provider',
  'Leilões',
  'Túneis de negociação',
  'Correção, suspensão e circuit breaker',
  'Sanções',
  'Controle de risco tecnológico',
  'Continuidade de negócio, conexão e acessibilidade',
];

const SRC = (section, page) => ({
  source_title: 'Guia Por Dentro da B3',
  source_chapter: 'Título V, Capítulo II — Ambiente de negociação',
  source_section: section,
  source_page: page,
});

export const questions = [
  // ---------- Sistema de negociação e ambiente de negociação ----------
  {
    topic: 'Sistema de negociação e ambiente de negociação',
    subtopic: 'Puma Trading System',
    difficulty: 'medio',
    statement: 'O sistema eletrônico de negociação utilizado no Segmento Listado B3 (bolsa), que processa as ofertas de compra e venda de ativos e derivativos, é denominado:',
    options: {
      A: 'Trader.',
      B: 'CetipNet.',
      C: 'Puma Trading System.',
      D: 'Sisbex.',
    },
    correct: 'C',
    explanation:
      'O Puma Trading System é o sistema eletrônico de negociação utilizado no Segmento Listado B3 (bolsa), no qual são registradas e processadas as ofertas de compra e venda de ativos e derivativos, formando o livro central de ofertas.',
    explanationWrong: {
      A: 'Trader é um dos sistemas utilizados no Segmento Balcão B3 (balcão organizado), não no segmento listado.',
      B: 'CetipNet é outro sistema do Segmento Balcão B3, herdado da fusão com a Cetip — usado para registro/negociação de instrumentos de balcão.',
      D: 'Sisbex não é o nome do sistema de negociação do segmento listado nesta estrutura.',
    },
    examTip: 'Puma = Segmento Listado (bolsa). Trader e CetipNet = Segmento Balcão B3.',
    commonTrap: 'A prova pode trocar os sistemas entre si — associe sempre Puma a "bolsa/listado" e Trader/CetipNet a "balcão".',
    ...SRC('Sistema de negociação', '506'),
  },
  {
    topic: 'Sistema de negociação e ambiente de negociação',
    subtopic: 'Definição de ambiente de negociação',
    difficulty: 'medio',
    statement: 'Nos termos da regulamentação da CVM, o ambiente de negociação da B3 caracteriza-se por ser um sistema:',
    options: {
      A: 'Descentralizado e bilateral, restrito a negociações diretas entre participantes.',
      B: 'Centralizado e multilateral, no qual as ofertas de compra e venda são processadas segundo regras predefinidas.',
      C: 'Exclusivo para operações de renda fixa privada.',
      D: 'De uso restrito a investidores institucionais estrangeiros.',
    },
    correct: 'B',
    explanation:
      'O ambiente de negociação é um sistema centralizado e multilateral, nos termos da Resolução CVM 135/2022, no qual as ofertas de compra e venda de ativos e derivativos são processadas e, quando compatíveis, resultam em operações, segundo regras predefinidas.',
    explanationWrong: {
      A: 'É o oposto: o ambiente de negociação é centralizado (livro único de ofertas) e multilateral (múltiplos participantes interagem entre si, não apenas bilateralmente).',
      C: 'Não é exclusivo para renda fixa privada — abrange ações, derivativos e outros ativos e derivativos admitidos à negociação.',
      D: 'Não é restrito a investidores institucionais estrangeiros — o acesso se dá por meio dos diversos participantes de negociação (PNP, PN, participante estrangeiro etc.).',
    },
    examTip: 'Ambiente de negociação = sistema CENTRALIZADO e MULTILATERAL (Resolução CVM 135/2022) — decore essas duas palavras-chave.',
    commonTrap: null,
    ...SRC('Definição de ambiente de negociação', '506-507'),
  },

  // ---------- Participantes do ambiente de negociação ----------
  {
    topic: 'Participantes do ambiente de negociação',
    subtopic: 'Comitente',
    difficulty: 'facil',
    statement: 'O participante cadastrado que tem suas ordens transmitidas ao ambiente de negociação por meio do registro de ofertas, realizadas por sua conta e ordem através de um participante de negociação pleno ou participante de negociação, é chamado de:',
    options: {
      A: 'PNP.',
      B: 'PN.',
      C: 'comitente.',
      D: 'formador de mercado.',
    },
    correct: 'C',
    explanation:
      'O comitente é o participante cadastrado que tem suas ordens transmitidas ao ambiente de negociação por meio do registro de ofertas e suas operações próprias realizadas no ambiente de negociação, por sua conta e ordem, por intermédio e responsabilidade de um participante de negociação pleno ou participante de negociação.',
    explanationWrong: {
      A: 'O PNP (participante de negociação pleno) é quem intermedeia a operação do comitente — é o intermediário, não o titular final da ordem.',
      B: 'O PN (participante de negociação) atua sob a responsabilidade de um PNP — também não é o titular final da ordem.',
      D: 'O formador de mercado tem papel de fornecer liquidez ao mercado mediante registro de ofertas de compra e venda — é uma categoria distinta do comitente comum.',
    },
    examTip: 'Comitente = "dono" final da ordem (investidor). PNP/PN = intermediários que transmitem a ordem ao ambiente de negociação.',
    commonTrap: null,
    ...SRC('Participantes', '508'),
  },
  {
    topic: 'Participantes do ambiente de negociação',
    subtopic: 'Vedações a participantes',
    difficulty: 'prova',
    statement: 'Constitui vedação aplicável aos participantes autorizados a operar no ambiente de negociação da B3:',
    options: {
      A: 'Realizar operações que caracterizem manipulação de preços ou criação de condições artificiais de oferta, demanda ou preço.',
      B: 'Registrar ofertas em nome próprio quando atuando como formador de mercado devidamente credenciado.',
      C: 'Realizar operações por conta e ordem de comitentes devidamente cadastrados.',
      D: 'Utilizar sistemas de negociação eletrônicos certificados pela B3.',
    },
    correct: 'A',
    explanation:
      'Entre as vedações previstas no Regulamento de Negociação da B3, está a realização de operações que caracterizem manipulação de preços, criação de condições artificiais de demanda, oferta ou preço, ou outras práticas não equitativas — condutas que ferem a higidez e a integridade do mercado.',
    explanationWrong: {
      B: 'Atuar como formador de mercado credenciado, registrando ofertas em nome próprio dentro dos parâmetros autorizados, é uma atividade regular e permitida, não uma vedação.',
      C: 'Realizar operações por conta e ordem de comitentes cadastrados é justamente a atividade regular do PNP/PN — não é vedado.',
      D: 'O uso de sistemas certificados pela B3 é, na verdade, uma exigência regulamentar (certificação e testes de conectividade), não uma prática vedada.',
    },
    examTip: 'As vedações giram em torno de práticas que distorcem o mercado: manipulação de preços, condições artificiais de oferta/demanda, operações fraudulentas.',
    commonTrap: '⚠️ A prova costuma inverter a lógica, apresentando uma atividade regular e permitida (como atuar como formador de mercado ou operar por conta de comitente) como se fosse vedação.',
    ...SRC('Vedações', '509'),
  },
  {
    topic: 'Participantes do ambiente de negociação',
    subtopic: 'Formador de mercado — atuação',
    difficulty: 'dificil',
    statement: 'Em relação à atuação do formador de mercado no ambiente de negociação da B3, é correto afirmar que:',
    options: {
      A: 'O formador de mercado pode atuar de forma autônoma ou mediante contrato com o emissor do ativo ou derivativo.',
      B: 'É vedado à B3 estabelecer parâmetros e regras específicas para a atuação do formador de mercado.',
      C: 'O formador de mercado somente pode atuar em derivativos, nunca em ações.',
      D: 'A atuação do formador de mercado dispensa credenciamento perante a B3.',
    },
    correct: 'A',
    explanation:
      'O formador de mercado pode atuar de forma autônoma (por iniciativa própria) ou mediante contrato firmado com o emissor do ativo ou derivativo (formador de mercado contratado), estando sua atuação sujeita a parâmetros e regras estabelecidos pela B3.',
    explanationWrong: {
      B: 'É o oposto: a B3 estabelece sim parâmetros e regras específicas (spread máximo, quantidade mínima, tempo de permanência das ofertas etc.) para a atuação do formador de mercado.',
      C: 'O formador de mercado pode atuar tanto em ações/renda variável quanto em derivativos — não há essa restrição exclusiva a derivativos.',
      D: 'A atuação como formador de mercado exige credenciamento e autorização da B3, não é uma atividade livre e informal.',
    },
    examTip: 'Formador de mercado: pode ser autônomo OU contratado pelo emissor — e sempre sujeito a regras/parâmetros da B3 (spread, quantidade, permanência).',
    commonTrap: null,
    ...SRC('Formador de mercado', '509'),
  },

  // ---------- Sessão, fases e lotes de negociação ----------
  {
    topic: 'Sessão, fases e lotes de negociação',
    subtopic: 'After-market',
    difficulty: 'medio',
    statement: 'As operações realizadas no período de after-market do ambiente de negociação da B3 são registradas em D e liquidadas:',
    options: {
      A: 'No mesmo dia (D+0).',
      B: 'Em D+2, da mesma forma que as operações do período regular.',
      C: 'Somente após aprovação expressa da CVM para cada operação.',
      D: 'Em D+3, prazo diferenciado exclusivo do after-market.',
    },
    correct: 'B',
    explanation:
      'As operações realizadas no after-market são registradas em D (mesmo dia da sessão) e seguem o prazo normal de liquidação (D+2 para o mercado à vista de renda variável, por exemplo), da mesma forma que as operações realizadas no período regular de negociação.',
    explanationWrong: {
      A: 'A liquidação não ocorre no mesmo dia — segue o prazo padrão do respectivo mercado (ex.: D+2 no mercado à vista).',
      C: 'Não há exigência de aprovação individual da CVM para cada operação de after-market — o horário estendido é uma modalidade regular de negociação.',
      D: 'Não há prazo de liquidação diferenciado e mais longo para o after-market — o prazo segue o do mercado em que o ativo é negociado.',
    },
    examTip: 'After-market: registro em D, liquidação segue o prazo normal do mercado (ex.: D+2) — não muda por ser fora do horário regular.',
    commonTrap: '⚠️ Não confunda "horário estendido" com "prazo de liquidação estendido" — apenas o horário de registro da oferta é diferente, a liquidação segue a regra normal.',
    ...SRC('Sessão de negociação', '510'),
  },
  {
    topic: 'Sessão, fases e lotes de negociação',
    subtopic: 'Lote fracionário',
    difficulty: 'facil',
    statement: 'No mercado de ações, um lote de negociação em quantidade inferior ao lote padrão, identificado pelo sufixo "F" no código do ativo (ex.: VALE3F), é denominado:',
    options: {
      A: 'Lote-padrão.',
      B: 'Lote fracionário.',
      C: 'Lote de day trade.',
      D: 'Lote de leilão.',
    },
    correct: 'B',
    explanation:
      'O lote fracionário é aquele negociado em quantidade inferior ao lote-padrão estabelecido para o ativo, sendo identificado pelo sufixo "F" adicionado ao código de negociação do ativo (por exemplo, VALE3F para o lote fracionário de VALE3).',
    explanationWrong: {
      A: 'O lote-padrão é a quantidade de referência "cheia" do ativo — o oposto do lote fracionário.',
      C: '"Lote de day trade" não é uma categoria de lote — day trade é uma modalidade de operação (compra e venda no mesmo dia), independente do tipo de lote.',
      D: '"Lote de leilão" não é uma categoria de lote de negociação prevista.',
    },
    examTip: 'Sufixo "F" no código do ativo = mercado fracionário (ex.: PETR4F, VALE3F).',
    commonTrap: null,
    ...SRC('Lotes', '511'),
  },
  {
    topic: 'Sessão, fases e lotes de negociação',
    subtopic: 'Fases de negociação',
    difficulty: 'medio',
    statement: 'Assinale a sequência que representa corretamente as fases de negociação de um pregão no ambiente de negociação da B3:',
    options: {
      A: 'Pré-abertura, aberta, cancelamento, pré-fechamento, call de fechamento, fechada.',
      B: 'Aberta, pré-abertura, pré-fechamento, fechada, cancelamento, call de fechamento.',
      C: 'Call de fechamento, aberta, pré-fechamento, pré-abertura, fechada, cancelamento.',
      D: 'Fechada, pré-abertura, aberta, call de fechamento, pré-fechamento, cancelamento.',
    },
    correct: 'A',
    explanation:
      'A sessão de negociação percorre as fases, na sequência: pré-abertura (formação do preço teórico de abertura via call), aberta (negociação contínua), cancelamento (de ofertas remanescentes), pré-fechamento, call de fechamento (formação do preço teórico de fechamento) e fechada.',
    explanationWrong: {
      B: 'A sequência está fora de ordem — a fase "aberta" não pode vir antes da "pré-abertura", que é justamente o que a antecede.',
      C: 'Inverte completamente a lógica — o call de fechamento é uma das últimas fases, não a primeira.',
      D: 'A fase "fechada" é o encerramento do ciclo, não pode aparecer como primeira fase.',
    },
    examTip: 'Decore a sequência: PRÉ-ABERTURA → ABERTA → CANCELAMENTO → PRÉ-FECHAMENTO → CALL DE FECHAMENTO → FECHADA.',
    commonTrap: '⚠️ Questões de prova costumam embaralhar a ordem das fases — sempre visualize a linha do tempo de um pregão do início ao fim.',
    ...SRC('Fases de negociação', '512'),
  },

  // ---------- Operação ex-pit e day trade ----------
  {
    topic: 'Operação ex-pit e day trade',
    subtopic: 'Definição de day trade',
    difficulty: 'prova',
    statement: 'Para que uma operação seja caracterizada como day trade no ambiente de negociação da B3, é necessário que a compra e a venda do mesmo ativo/derivativo, na mesma quantidade, ocorram no mesmo dia e, cumulativamente, sejam:',
    options: {
      A: 'Realizadas pelo mesmo comitente, através do mesmo PNP ou PN e liquidadas por compensação financeira, sem movimentação física do ativo.',
      B: 'Realizadas por comitentes diferentes, com liquidação física obrigatória em D+2.',
      C: 'Registradas em bolsas diferentes, com liquidação centralizada apenas na B3.',
      D: 'Realizadas exclusivamente por formadores de mercado credenciados.',
    },
    correct: 'A',
    explanation:
      'Day trade é a operação de compra e venda de um mesmo ativo/derivativo, na mesma quantidade, realizada no mesmo dia, pelo mesmo comitente, por intermédio do mesmo membro de compensação, sendo liquidada exclusivamente por compensação financeira (sem movimentação física do ativo).',
    explanationWrong: {
      B: 'É o oposto: o day trade exige o MESMO comitente (não comitentes diferentes) e é liquidado por compensação financeira, sem movimentação física do ativo.',
      C: 'Não há exigência de operações em bolsas diferentes — pelo contrário, a lógica de day trade se aplica dentro do mesmo ambiente/membro de compensação.',
      D: 'O day trade não é exclusivo de formadores de mercado — qualquer comitente pode realizar operação de day trade, desde que atendidos os requisitos.',
    },
    examTip: 'Day trade = mesmo ativo + mesma quantidade + mesmo dia + mesmo comitente + mesmo membro de compensação + liquidação só financeira (sem entrega física).',
    commonTrap: '⚠️ Pegadinha clássica: trocar "mesmo comitente" por "mesmo PNP" como requisito central — o requisito-chave é a identidade do COMITENTE, não apenas do intermediário.',
    ...SRC('Operação day trade', '513'),
  },

  // ---------- Ordens e prioridade de execução ----------
  {
    topic: 'Ordens e prioridade de execução',
    subtopic: 'Tipos de ordens',
    difficulty: 'medio',
    statement: 'A ordem que estabelece o preço máximo de compra ou preço mínimo de venda pelo comitente, podendo ser executada por preço igual ou mais vantajoso, é denominada ordem:',
    options: {
      A: 'a mercado.',
      B: 'limitada.',
      C: 'administrada.',
      D: 'stop.',
    },
    correct: 'B',
    explanation:
      'A ordem limitada é aquela que deve ser executada por preço igual ou mais vantajoso do que o especificado pelo comitente, que representa, no caso de compra, o preço máximo, e no caso de venda, o preço mínimo, a partir do qual a ordem pode ser executada.',
    explanationWrong: {
      A: 'A ordem a mercado deve ser executada imediatamente, pelo preço vigente no mercado no momento de seu registro, sem especificação de preço-limite pelo comitente.',
      C: 'A ordem administrada não define preço — apenas quantidade e características do ativo, deixando a critério do participante o momento e o preço de execução.',
      D: 'A ordem stop tem um preço de disparo (stop) que, uma vez atingido, aciona o envio da ordem — mecanismo diferente do simples limite de preço.',
    },
    examTip: 'Ordem limitada = tem um preço-limite definido pelo comitente (máximo na compra, mínimo na venda).',
    commonTrap: null,
    ...SRC('Ordens', '515'),
  },
  {
    topic: 'Ordens e prioridade de execução',
    subtopic: 'Ordem casada',
    difficulty: 'dificil',
    statement: 'A ordem que vincula a execução de uma operação à execução simultânea de outra, geralmente envolvendo ativos ou vencimentos distintos, é conhecida como ordem:',
    options: {
      A: 'discricionária.',
      B: 'de financiamento.',
      C: 'casada.',
      D: 'administrada concorrente.',
    },
    correct: 'C',
    explanation:
      'A ordem casada é aquela cuja execução está vinculada à execução de uma segunda ordem, para o mesmo comitente, podendo envolver o mesmo ativo em vencimentos diferentes ou ativos diferentes, sendo executadas simultaneamente.',
    explanationWrong: {
      A: 'A ordem discricionária é dada por um representante (administrador de carteira) que detém poder de decidir a especificação da ordem (ativo, quantidade, preço) no momento da execução — não envolve vinculação a uma segunda ordem.',
      B: 'A ordem de financiamento visa financiar uma posição (compra em um mercado e venda em outro, geralmente à vista/termo), tendo lógica diferente da simples vinculação entre duas ordens.',
      D: 'A ordem administrada concorrente é executada a critério do participante, dentro de um conjunto de ordens, sem a característica de vinculação simultânea a outra ordem.',
    },
    examTip: 'Ordem casada = duas pontas vinculadas, executadas juntas ("tudo ou nada" entre as duas pernas da operação).',
    commonTrap: null,
    ...SRC('Ordens', '515-516'),
  },

  // ---------- Ofertas e qualificadores ----------
  {
    topic: 'Ofertas e qualificadores',
    subtopic: 'Qualificador EOC',
    difficulty: 'prova',
    statement: 'O qualificador de oferta que determina que a oferta deve ser executada imediatamente, total ou parcialmente, sendo a quantidade não executada automaticamente cancelada, é o:',
    options: {
      A: 'EOC (Execute or Cancel).',
      B: 'TON (Total Order Now).',
      C: 'VAD (Válida até a Data).',
      D: 'MOC (Market on Close).',
    },
    correct: 'A',
    explanation:
      'O qualificador EOC (Execute or Cancel) determina que a oferta seja executada imediatamente, no todo ou em parte, sendo a parcela não executada automaticamente cancelada — não permanecendo registrada no livro de ofertas.',
    explanationWrong: {
      B: 'TON (Totalmente ou Nada / Total Order Now) exige que a oferta seja executada IMEDIATA e INTEGRALMENTE, ou é cancelada por completo — diferente do EOC, que aceita execução parcial.',
      C: 'VAD (Válida até a Data) é um qualificador de prazo de validade da oferta, relacionado ao tempo, não à forma de execução imediata.',
      D: 'MOC (Market on Close) é um qualificador que direciona a oferta para participar do call de fechamento, não relacionado à execução imediata parcial.',
    },
    examTip: 'EOC aceita execução PARCIAL imediata (resto cancela). TON exige execução TOTAL imediata (senão cancela tudo). Não troque os dois.',
    commonTrap: '⚠️ EOC x TON é uma pegadinha clássica — a diferença está em aceitar (EOC) ou não (TON) a execução parcial.',
    ...SRC('Qualificadores de ofertas', '518-519'),
  },
  {
    topic: 'Ofertas e qualificadores',
    subtopic: 'Qualificador MOC',
    difficulty: 'medio',
    statement: 'O qualificador de oferta que direciona a participação exclusivamente no call de fechamento é denominado:',
    options: {
      A: 'MOA (Market on Open).',
      B: 'MOC (Market on Close).',
      C: 'LOC (Limit on Close).',
      D: 'EOC (Execute or Cancel).',
    },
    correct: 'B',
    explanation:
      'O qualificador MOC (Market on Close) determina que a oferta a mercado participe exclusivamente do call de fechamento (leilão de fechamento), não sendo negociada durante o período de negociação contínua.',
    explanationWrong: {
      A: 'MOA (Market on Open) é o equivalente para o call de ABERTURA, não de fechamento.',
      C: 'LOC (Limit on Close) também se destina ao call de fechamento, mas com PREÇO LIMITADO — diferente do MOC, que é a mercado (sem limite de preço).',
      D: 'EOC (Execute or Cancel) é um qualificador de execução imediata, sem relação com participação específica em call de fechamento.',
    },
    examTip: 'MOA = call de ABERTURA / MOC = call de FECHAMENTO (ambos "a mercado", sem preço-limite). LOC = fechamento COM preço-limite.',
    commonTrap: '⚠️ MOA, MOC e LOC são fáceis de confundir — associe "A" a abertura e "C" a close (fechamento); "L" de LOC lembra "Limit".',
    ...SRC('Qualificadores de ofertas', '519'),
  },

  // ---------- RLP ----------
  {
    topic: 'RLP — Retail Liquidity Provider',
    subtopic: 'Conceito e acesso',
    difficulty: 'prova',
    statement: 'Em relação à funcionalidade RLP (Retail Liquidity Provider) do ambiente de negociação da B3, é correto afirmar que:',
    options: {
      A: 'Qualquer comitente pode enviar diretamente ofertas RLP, independentemente de intermediação.',
      B: 'Somente participantes de negociação plenos (PNPs) podem enviar ofertas RLP, e a adesão do cliente à modalidade é opcional (opt-in).',
      C: 'As ofertas RLP são sempre visíveis no livro central de ofertas, com prioridade de preço sobre as demais.',
      D: 'O RLP substitui integralmente o sistema de leilões da B3.',
    },
    correct: 'B',
    explanation:
      'O RLP (Retail Liquidity Provider) é uma funcionalidade em que apenas participantes de negociação plenos (PNPs) podem enviar ofertas, oferecendo melhora de preço a ofertas de varejo. A adesão do cliente a essa modalidade é opcional (exige opt-in), e há percentuais máximos definidos para a atuação do RLP.',
    explanationWrong: {
      A: 'Comitentes não enviam ofertas RLP diretamente — apenas PNPs podem fazê-lo, no papel de provedor de liquidez para o varejo.',
      C: 'É o oposto: as ofertas RLP são INVISÍVEIS no livro central de ofertas — aparecem apenas no histórico de negociação após a execução.',
      D: 'O RLP é uma funcionalidade adicional de melhora de preço para ofertas de varejo, coexistindo com o sistema de leilões — não o substitui.',
    },
    examTip: 'RLP: só PNP envia · invisível no book · opt-in do cliente · limite percentual de atuação · objetivo é melhorar o preço do investidor de varejo.',
    commonTrap: '⚠️ Pegadinha: achar que o RLP aparece no livro de ofertas como as demais — ele é uma oferta OCULTA, só visível após a execução no histórico de negócios.',
    ...SRC('RLP', '520-522'),
  },

  // ---------- Leilões ----------
  {
    topic: 'Leilões',
    subtopic: 'Prioridade de execução em leilão',
    difficulty: 'dificil',
    statement: 'Na formação do preço teórico (fixing) durante um leilão no ambiente de negociação da B3, a ordem de prioridade de execução das ofertas obedece, primeiramente, às ofertas:',
    options: {
      A: 'MOA/MOC (a mercado), seguidas pelas ofertas limitadas por preço, em ordem cronológica de registro.',
      B: 'limitadas por preço, seguidas pelas ofertas a mercado, sem qualquer critério cronológico.',
      C: 'registradas por PNPs, independentemente do preço ofertado.',
      D: 'de maior quantidade, independentemente do preço ou do tipo de qualificador.',
    },
    correct: 'A',
    explanation:
      'No leilão, têm prioridade as ofertas com qualificadores MOA/MOC (a mercado, sem limite de preço), seguidas pelas ofertas limitadas por preço, sendo o desempate entre ofertas de mesmo preço realizado pela ordem cronológica de registro.',
    explanationWrong: {
      B: 'Inverte a prioridade: as ofertas a mercado (MOA/MOC) têm prioridade sobre as limitadas por preço, não o contrário — e o critério cronológico é sim aplicado no desempate.',
      C: 'A prioridade não depende de quem registrou a oferta (PNP específico), e sim do tipo de qualificador e do preço ofertado.',
      D: 'A quantidade não é o critério primário de prioridade — o critério central é o tipo de oferta (a mercado x limitada) e o preço, com desempate cronológico.',
    },
    examTip: 'Prioridade no leilão: 1º ofertas a mercado (MOA/MOC), 2º ofertas limitadas por preço (as mais agressivas primeiro), desempate por ordem cronológica.',
    commonTrap: null,
    ...SRC('Regras de leilão', '523'),
  },
  {
    topic: 'Leilões',
    subtopic: 'Leilão especial',
    difficulty: 'prova',
    statement: 'O leilão especial, modalidade utilizada em situações como a inclusão de um ativo relevante em índice ou a negociação de lote relevante de ações, deve ter duração mínima de:',
    options: {
      A: '5 minutos, sem exigência de publicação prévia de edital.',
      B: '15 minutos, com publicação de edital com antecedência mínima de 48 horas.',
      C: '30 minutos, sem qualquer exigência de edital.',
      D: '1 hora, com publicação de edital com antecedência mínima de 24 horas.',
    },
    correct: 'B',
    explanation:
      'O leilão especial tem duração mínima de 15 minutos e exige a publicação de edital com antecedência mínima de 48 horas, dando ampla publicidade e transparência ao mercado sobre a realização do leilão.',
    explanationWrong: {
      A: 'A duração mínima de 5 minutos corresponde a outras modalidades de leilão (como o leilão comum em operações de estratégias), não ao leilão especial — e o leilão especial EXIGE edital prévio.',
      C: 'A duração do leilão especial é de 15 minutos, não 30, e há sim exigência de edital.',
      D: 'O prazo mínimo de antecedência do edital é de 48 horas, não 24 horas, e a duração mínima é de 15 minutos, não 1 hora.',
    },
    examTip: 'Leilão especial: mínimo 15 minutos + edital com no mínimo 48h de antecedência. Números clássicos de prova.',
    commonTrap: '⚠️ Não confunda com o leilão mínimo de 5 minutos das operações de estratégias (Título V, Capítulo I) — são leilões de espécies diferentes.',
    ...SRC('Espécies de leilão', '524'),
  },

  // ---------- Túneis de negociação ----------
  {
    topic: 'Túneis de negociação',
    subtopic: 'Objetivo dos túneis',
    difficulty: 'medio',
    statement: 'Os túneis de negociação adotados pela B3 têm por objetivo, entre outros:',
    options: {
      A: 'Aumentar a velocidade de processamento das ofertas no sistema de negociação.',
      B: 'Mitigar a ocorrência de falhas e erros operacionais dos participantes e resguardar o processo de formação de preço.',
      C: 'Substituir integralmente a necessidade de controle de risco pré-negociação.',
      D: 'Determinar o valor dos emolumentos cobrados pela B3.',
    },
    correct: 'B',
    explanation:
      'Os túneis de negociação são mecanismos de controle aplicáveis às quantidades e às oscilações de preço dos ativos e derivativos, com o objetivo de mitigar falhas e erros operacionais de participantes, resguardar o processo de formação de preço, preservar a higidez e a integridade dos mercados e evitar o risco sistêmico.',
    explanationWrong: {
      A: 'Os túneis não têm relação com velocidade de processamento — são mecanismos de controle de preço/quantidade, não de performance técnica.',
      C: 'Os túneis são um mecanismo complementar, não um substituto da ferramenta de controle de risco pré-negociação, que é obrigatória e independente.',
      D: 'Túneis de negociação nada têm a ver com a cobrança de emolumentos — são um controle de mercado, não uma regra tarifária.',
    },
    examTip: 'Túneis de negociação = controle de PREÇO e QUANTIDADE das ofertas, para evitar erros operacionais e risco sistêmico.',
    commonTrap: null,
    ...SRC('Túneis de negociação', '525'),
  },
  {
    topic: 'Túneis de negociação',
    subtopic: 'Classificação dos túneis',
    difficulty: 'dificil',
    statement: 'Os túneis de negociação classificados como dinâmicos e sincronizados com o valor de referência do preço de um ativo em tempo real durante a sessão de negociação são denominados túneis:',
    options: {
      A: 'estáticos.',
      B: 'dinâmicos assíncronos.',
      C: 'dinâmicos síncronos.',
      D: 'de rejeição tipo 1.',
    },
    correct: 'C',
    explanation:
      'Os túneis dinâmicos síncronos são sincronizados com o valor de referência do preço de determinado ativo ou derivativo em tempo real, durante a sessão de negociação, calculado com base no último preço atualizado ou no preço da última operação.',
    explanationWrong: {
      A: 'Os túneis estáticos têm limites fixados previamente pela B3, que NÃO variam durante a sessão — o oposto do que descreve a sincronização em tempo real.',
      B: 'Os túneis dinâmicos assíncronos NÃO são sincronizados em tempo real — usam referência de preço com origem em metodologia de cálculo ajustada a ativo-objeto diverso.',
      D: '"Túnel de rejeição tipo 1" é uma classificação por tipo de túnel (rejeição/leilão/proteção), não pela característica estática/dinâmica-síncrona/assíncrona.',
    },
    examTip: 'Estático = fixo na sessão. Dinâmico síncrono = acompanha o preço em tempo real. Dinâmico assíncrono = referência de outra metodologia/ativo diverso.',
    commonTrap: null,
    ...SRC('Classificação dos túneis', '526-527'),
  },

  // ---------- Correção, suspensão e circuit breaker ----------
  {
    topic: 'Correção, suspensão e circuit breaker',
    subtopic: 'Circuit breaker — primeira regra',
    difficulty: 'prova',
    statement: 'Quando o Ibovespa desvalorizar 10% em relação ao índice de fechamento do dia anterior, a negociação dos ativos, dos derivativos e de renda fixa privada é interrompida por:',
    options: {
      A: '15 minutos.',
      B: '30 minutos.',
      C: '1 hora.',
      D: 'período indeterminado, a critério exclusivo da B3.',
    },
    correct: 'B',
    explanation:
      'A primeira regra do circuit breaker determina que, quando o Ibovespa desvalorizar 10% em relação ao índice de fechamento do dia anterior, a negociação dos ativos, dos derivativos e de renda fixa privada é interrompida por 30 minutos.',
    explanationWrong: {
      A: '15 minutos não corresponde a nenhuma das três regras do circuit breaker.',
      C: '1 hora é o tempo de interrupção da SEGUNDA regra (queda de 15%), não da primeira (queda de 10%).',
      D: 'Somente na terceira regra (queda de 20%) a B3 pode determinar suspensão por período por ela definido — as duas primeiras regras têm prazos fixos (30 min e 1h).',
    },
    examTip: 'Circuit breaker: -10% → 30 min. -15% → 1 hora. -20% → suspensão por período definido pela B3. Decore os três degraus.',
    commonTrap: '⚠️ Muito cobrado em prova — associe corretamente cada percentual ao seu tempo de interrupção; a inversão entre 30 min e 1 hora é a pegadinha mais comum.',
    ...SRC('Circuit breaker', '528'),
  },
  {
    topic: 'Correção, suspensão e circuit breaker',
    subtopic: 'Motivos de suspensão de negociação',
    difficulty: 'medio',
    statement: 'É motivo para a B3 suspender a negociação de um ativo ou derivativo:',
    options: {
      A: 'A iminente divulgação de fato relevante durante a sessão de negociação.',
      B: 'A simples solicitação verbal de um comitente, sem qualquer formalização.',
      C: 'A queda do preço do ativo em qualquer percentual, ainda que abaixo dos limites do circuit breaker.',
      D: 'A ausência de negócios com o ativo por período inferior a 5 minutos.',
    },
    correct: 'A',
    explanation:
      'A negociação com ativos ou derivativos é suspensa pela B3, entre outras hipóteses, quando houver determinação judicial ou administrativa, iminente divulgação de fato relevante durante a sessão de negociação, decretação de falência do emissor, ou decretação de liquidação extrajudicial pelo Bacen ou pela CVM.',
    explanationWrong: {
      B: 'A suspensão de negociação segue hipóteses regulamentares específicas e formais — não decorre de simples solicitação verbal e informal de um comitente.',
      C: 'A simples queda de preço, por si só e fora dos limites do circuit breaker, não é motivo de suspensão — o circuit breaker tem regras próprias e específicas para isso.',
      D: 'A ausência de negócios por poucos minutos não é, isoladamente, motivo de suspensão de negociação previsto na regulamentação.',
    },
    examTip: 'Motivos de suspensão: determinação judicial/administrativa, iminente fato relevante, falência do emissor, liquidação extrajudicial pelo Bacen/CVM.',
    commonTrap: null,
    ...SRC('Suspensão de negociação', '528'),
  },

  // ---------- Sanções ----------
  {
    topic: 'Sanções',
    subtopic: 'Competência para apuração e punição',
    difficulty: 'facil',
    statement: 'Compete à BSM, dentro de sua esfera de atuação, apurar e punir as infrações dispostas no Regulamento de Negociação da B3, aplicando, conforme o caso, as penalidades previstas em seu(sua):',
    options: {
      A: 'Estatuto social, na forma de seu regulamento processual.',
      B: 'Código Civil, na forma da legislação comum.',
      C: 'Instrução normativa exclusiva da CVM.',
      D: 'Convênio internacional de supervisão de mercados.',
    },
    correct: 'A',
    explanation:
      'Compete à BSM, dentro de sua esfera de atuação, apurar e punir as infrações dispostas no regulamento de negociação da B3, nas normas que o complementam ou na legislação em vigor, aplicando as penalidades previstas em seu próprio estatuto social, na forma de seu regulamento processual.',
    explanationWrong: {
      B: 'A punição não segue o Código Civil comum — segue o estatuto social e o regulamento processual próprios da BSM, no âmbito de sua autorregulação.',
      C: 'A competência de apuração e punição nessas hipóteses é da BSM (autorregulador), não diretamente de uma instrução normativa exclusiva da CVM.',
      D: 'Não há relação com convênio internacional — trata-se de competência doméstica de autorregulação exercida pela BSM.',
    },
    examTip: 'BSM apura e pune com base no PRÓPRIO estatuto social e regulamento processual — mecanismo de autorregulação do mercado.',
    commonTrap: null,
    ...SRC('Sanções', '529'),
  },

  // ---------- Controle de risco tecnológico ----------
  {
    topic: 'Controle de risco tecnológico',
    subtopic: 'THROTTLE',
    difficulty: 'medio',
    statement: 'A funcionalidade que permite à B3 regular o número máximo de mensagens de ofertas enviadas por segundo, para o sistema de negociação, por cada conexão, é denominada:',
    options: {
      A: 'Self Trade Prevention (STP).',
      B: 'Cancel on Disconnect (COD).',
      C: 'THROTTLE.',
      D: 'Proteção ao mercado.',
    },
    correct: 'C',
    explanation:
      'O THROTTLE é a funcionalidade que permite à B3 regular o número máximo de mensagens de ofertas enviadas por segundo para o sistema de negociação, por cada conexão, com limites estabelecidos conforme o perfil dos participantes vinculados àquela conexão.',
    explanationWrong: {
      A: 'O STP previne que um mesmo comitente figure como comprador e vendedor na mesma operação — não trata de limite de mensagens por segundo.',
      B: 'O COD (Cancel on Disconnect) cancela automaticamente as ofertas de uma conexão em caso de desconexão — funcionalidade distinta do controle de volume de mensagens.',
      D: 'A proteção ao mercado é uma funcionalidade de cancelamento automático de ofertas ao atingir parâmetros definidos pelo participante — não regula diretamente o número de mensagens por segundo.',
    },
    examTip: 'THROTTLE = limite de mensagens por segundo, por conexão. Participante pode optar por rejeitar mensagens excedentes ou enfileirá-las.',
    commonTrap: null,
    ...SRC('THROTTLE', '531'),
  },
  {
    topic: 'Controle de risco tecnológico',
    subtopic: 'Self Trade Prevention (STP)',
    difficulty: 'prova',
    statement: 'A funcionalidade que previne a realização de operações nas quais um mesmo comitente figure simultaneamente como comprador e vendedor de um mesmo instrumento é denominada:',
    options: {
      A: 'Cancel on Disconnect (COD).',
      B: 'Self Trade Prevention (STP).',
      C: 'Proteção ao mercado.',
      D: 'THROTTLE.',
    },
    correct: 'B',
    explanation:
      'O Self Trade Prevention (STP), ou prevenção de operações de mesmo comitente, é a funcionalidade que previne operações nas quais um mesmo comitente figure como comprador e vendedor do instrumento de negociação, independentemente da corretora responsável pelas duas partes da operação.',
    explanationWrong: {
      A: 'O COD trata do cancelamento automático de ofertas por desconexão da conexão — não tem relação com evitar autonegociação do mesmo comitente.',
      C: 'A proteção ao mercado é acionada por parâmetros de tempo/quantidade definidos pelo participante, cancelando ofertas — não é o mecanismo específico de prevenção de autonegociação.',
      D: 'O THROTTLE regula volume de mensagens por segundo — não impede que um mesmo comitente negocie consigo mesmo.',
    },
    examTip: 'STP impede que o MESMO comitente seja comprador e vendedor na mesma operação — mesmo que use corretoras diferentes nas duas pontas.',
    commonTrap: '⚠️ O STP se aplica mesmo quando as duas pontas passam por corretoras (PNP/PN) diferentes — o critério é a identidade do comitente, não do intermediário.',
    ...SRC('Self Trade Prevention', '531'),
  },
  {
    topic: 'Controle de risco tecnológico',
    subtopic: 'Cancel on Disconnect (COD)',
    difficulty: 'medio',
    statement: 'Quando uma desconexão é detectada pelo sistema de negociação e a funcionalidade Cancel on Disconnect (COD) está habilitada para a conexão, o sistema:',
    options: {
      A: 'Mantém todas as ofertas registradas, inclusive as que estejam participando de leilão.',
      B: 'Envia solicitação de cancelamento para todas as ofertas disponíveis vinculadas àquela conexão, exceto as que estejam participando de leilão ou cujo estado do instrumento não permita.',
      C: 'Suspende automaticamente a negociação de todos os ativos do mercado.',
      D: 'Transfere automaticamente as ofertas para outra conexão do mesmo participante.',
    },
    correct: 'B',
    explanation:
      'O COD (cancelamento automático por desconexão) permite o cancelamento automático das ofertas transmitidas ao sistema de negociação em caso de desconexão. Detectada a desconexão, o sistema envia solicitação de cancelamento para todas as ofertas disponíveis vinculadas àquela conexão, exceto para aquelas que estejam participando de leilão ou se o estado do instrumento não permitir.',
    explanationWrong: {
      A: 'É o oposto do que ocorre: o COD cancela (não mantém) as ofertas vinculadas à conexão desconectada, com as exceções previstas (leilão / estado do instrumento).',
      C: 'O COD atua apenas sobre as ofertas vinculadas à conexão desconectada — não suspende a negociação de todo o mercado.',
      D: 'Não há transferência automática de ofertas para outra conexão — a consequência prevista é o cancelamento, não a portabilidade.',
    },
    examTip: 'COD cancela as ofertas da conexão desconectada — MAS não cancela ofertas em leilão ou quando o estado do instrumento não permite.',
    commonTrap: null,
    ...SRC('Cancel on Disconnect', '531-532'),
  },

  // ---------- Continuidade de negócio, conexão e acessibilidade ----------
  {
    topic: 'Continuidade de negócio, conexão e acessibilidade',
    subtopic: 'Compartilhamento de conexão',
    difficulty: 'prova',
    statement: 'Em relação ao compartilhamento de conexões no ambiente de negociação da B3, é correto afirmar que:',
    options: {
      A: 'É permitido, sem restrições, o compartilhamento de uma mesma conexão por vários PNPs, desde que autorizado pela CVM.',
      B: 'Por questões prudenciais, é vedado o compartilhamento de uma mesma conexão por mais de um participante de negociação pleno ou participante de negociação.',
      C: 'O compartilhamento é permitido apenas entre participantes estrangeiros.',
      D: 'A B3 não realiza qualquer controle ou monitoramento do uso das conexões.',
    },
    correct: 'B',
    explanation:
      'Por questões prudenciais, é vedado o compartilhamento de uma mesma conexão por mais de um participante de negociação pleno ou participante de negociação, ou seja, o fluxo de ofertas deve ser segregado para cada participante. A B3 controla e monitora o uso das conexões para assegurar essa adequação.',
    explanationWrong: {
      A: 'É justamente o oposto — o compartilhamento é vedado por questões prudenciais, e essa vedação não depende de autorização específica da CVM para ser afastada.',
      C: 'Não há uma permissão especial de compartilhamento restrita a participantes estrangeiros — a vedação de compartilhamento se aplica de forma geral.',
      D: 'A B3 efetivamente controla e monitora o uso das conexões, para assegurar sua adequação às regras do Regulamento de Negociação.',
    },
    examTip: 'Cada PNP/PN deve ter fluxo de ofertas SEGREGADO — compartilhar conexão entre participantes diferentes é vedado por prudência.',
    commonTrap: null,
    ...SRC('Controle e monitoramento de conexões', '533'),
  },
  {
    topic: 'Continuidade de negócio, conexão e acessibilidade',
    subtopic: 'Área de co-location',
    difficulty: 'medio',
    statement: 'A área de co-location, mantida pela B3, caracteriza-se por ser:',
    options: {
      A: 'Um data center de terceiros, sem qualquer vínculo com a B3.',
      B: 'O local de hospedagem da B3 para a infraestrutura tecnológica, de acesso restrito aos participantes autorizados.',
      C: 'Um ambiente exclusivo para testes de conectividade sem fins de negociação real.',
      D: 'Um sistema de backup utilizado apenas em situações de emergência.',
    },
    correct: 'B',
    explanation:
      'A área de co-location é o local de hospedagem da B3 para a infraestrutura tecnológica, de acesso restrito ao participante de negociação pleno, ao participante de negociação, ao participante estrangeiro, ao provedor ou ao comitente, permitindo a conexão com o sistema de negociação.',
    explanationWrong: {
      A: 'É exatamente o oposto: a co-location é um local de hospedagem da própria B3, não de terceiros desvinculados dela.',
      C: 'A co-location é usada para a negociação real (infraestrutura de acesso ao sistema de negociação), não apenas para testes.',
      D: 'A co-location não é um sistema de backup emergencial — é a infraestrutura de hospedagem regular para conexão ao ambiente de negociação (o backup em caso de desastre é o centro de processamento de dados secundário).',
    },
    examTip: 'Co-location = hospedagem da B3, acesso restrito aos participantes autorizados. Não confundir com o centro de dados secundário (esse sim é para contingência/desastre).',
    commonTrap: '⚠️ Não confunda "área de co-location" (hospedagem para acesso normal) com "centro de processamento de dados secundário" (usado em caso de desastre no CPD principal).',
    ...SRC('Local de hospedagem (hosting)', '534'),
  },
  {
    topic: 'Continuidade de negócio, conexão e acessibilidade',
    subtopic: 'Plano de continuidade de negócio',
    difficulty: 'dificil',
    statement: 'A B3 garante a continuidade de suas atividades em caso de desastre no centro de processamento de dados principal por meio de:',
    options: {
      A: 'Contratação de seguro específico junto à CVM.',
      B: 'Um centro de processamento de dados secundário, equipado com os mesmos sistemas, nobreaks e geradores do centro principal.',
      C: 'Suspensão definitiva das negociações até restabelecimento do centro principal.',
      D: 'Transferência das operações para outra bolsa estrangeira.',
    },
    correct: 'B',
    explanation:
      'A B3 possui um centro de processamento de dados secundário, aparelhado com os mesmos sistemas, nobreaks e geradores de energia do centro principal, com interligação que permite a produção de cópia dos dados entre os centros, viabilizando a retomada do funcionamento do ambiente de negociação em caso de interrupção do centro principal.',
    explanationWrong: {
      A: 'Não se trata de um seguro contratado junto à CVM — é uma estrutura técnica redundante (centro de dados secundário) mantida pela própria B3.',
      C: 'A B3 busca justamente EVITAR a suspensão definitiva, retomando o funcionamento por meio do centro de dados secundário — não interromper indefinidamente.',
      D: 'Não há previsão de transferência de operações para bolsa estrangeira como plano de continuidade — a solução é interna, via centro de dados secundário.',
    },
    examTip: 'Continuidade de negócio = centro de processamento de dados SECUNDÁRIO, espelhado (mesmos sistemas/nobreaks/geradores) do principal.',
    commonTrap: null,
    ...SRC('Plano de continuidade de negócio', '532-533'),
  },
];
