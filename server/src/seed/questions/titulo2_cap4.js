// Título II - Mercados de Bolsa e de Balcão
// Capítulo IV - Mercado de câmbio
// Fonte: Guia Por Dentro da B3, páginas 286-304.

export const chapterRef = { titleNumber: 'II', chapterNumber: 'IV' };

export const topics = [
  'Visão geral do mercado de câmbio',
  'Participantes e reguladores do câmbio',
  'Cotação PTAX',
  'Negociação e liquidação de câmbio na B3',
  'Câmara de câmbio B3',
];

const SRC = (section, page) => ({
  source_title: 'Guia Por Dentro da B3',
  source_chapter: 'Título II, Capítulo IV — Mercado de câmbio',
  source_section: section,
  source_page: page,
});

export const questions = [
  // ---------- Visão geral ----------
  {
    topic: 'Visão geral do mercado de câmbio',
    subtopic: 'Flutuação suja',
    difficulty: 'medio',
    statement: 'O regime cambial brasileiro, vigente desde janeiro de 1999, é de livre flutuação, com a possibilidade de o Bacen intervir na cotação por meio de instrumentos formais. Essa intervenção é conhecida como:',
    options: {
      A: 'Câmbio fixo.',
      B: 'Flutuação suja (dirty float).',
      C: 'Bandas cambiais.',
      D: 'Paridade do poder de compra.',
    },
    correct: 'B',
    explanation:
      'A flutuação suja (dirty float) acontece quando a flutuação da taxa de câmbio, embora livre em princípio, é controlada por meio de intervenções das instituições monetárias dominantes de cada país — no caso brasileiro, o Bacen, com o objetivo de impedir altas variações na cotação do dólar.',
    explanationWrong: {
      A: 'Câmbio fixo é um regime em que a taxa é oficialmente atrelada a um valor determinado — diferente do regime brasileiro, que é de flutuação (ainda que "suja").',
      C: 'Bandas cambiais são um regime em que a taxa flutua dentro de limites pré-anunciados — não é o modelo vigente no Brasil desde 1999.',
      D: 'Paridade do poder de compra é uma teoria econômica sobre taxas de câmbio de longo prazo, não um regime cambial ou mecanismo de intervenção.',
    },
    examTip:
      '"Flutuação suja" = câmbio livre "na teoria", mas com intervenções pontuais do Bacen para evitar volatilidade excessiva.',
    commonTrap:
      'Não confunda "flutuação suja" com "câmbio fixo" — no regime brasileiro não há uma taxa oficial fixada, apenas intervenções pontuais dentro de um regime fundamentalmente de livre flutuação.',
    ...SRC('2. Visão geral do mercado de câmbio — Mercado de câmbio', '288'),
  },
  {
    topic: 'Visão geral do mercado de câmbio',
    subtopic: 'Mercado primário x secundário',
    difficulty: 'medio',
    statement: 'A diferença entre o mercado primário e o mercado secundário (interbancário) de câmbio é que, no mercado primário:',
    options: {
      A: 'A moeda estrangeira apenas migra de uma instituição autorizada para outra, sem entrada ou saída do país.',
      B: 'Há efetiva entrada ou saída de moeda estrangeira do país, envolvendo clientes (exportadores, importadores, viajantes etc.).',
      C: 'Somente o Banco Central pode participar das operações.',
      D: 'Não há qualquer regulamentação aplicável.',
    },
    correct: 'B',
    explanation:
      'O mercado primário implica o recebimento ou entrega de moeda estrangeira por parte de clientes no país, correspondendo a fluxo de entrada ou saída da moeda estrangeira (operações com exportadores, importadores, viajantes etc.). Já no mercado secundário (interbancário), a moeda simplesmente migra entre instituições autorizadas, sem fluxo de entrada/saída do país.',
    explanationWrong: {
      A: 'Essa descrição corresponde ao mercado SECUNDÁRIO (interbancário), não ao primário — no primário há efetiva movimentação de moeda entre residentes e não residentes.',
      C: 'O mercado primário envolve bancos e clientes (pessoas físicas, jurídicas, exportadores, importadores) — não é restrito ao Banco Central.',
      D: 'Todas as operações de câmbio, primárias ou secundárias, são regulamentadas pelo Bacen, conduzidas por instituições autorizadas.',
    },
    examTip:
      'Primário = moeda ENTRA ou SAI do país (cliente ↔ banco). Secundário/interbancário = moeda só MIGRA entre instituições dentro do sistema, sem cruzar a fronteira.',
    commonTrap:
      'Não confunda "mercado secundário" de câmbio (interbancário, sem fluxo de fronteira) com "mercado secundário" de ações (revenda entre investidores) — são conceitos análogos, mas em contextos diferentes.',
    ...SRC('2. Visão geral do mercado de câmbio — Mercado primário e secundário (ou interbancário)', '288-289'),
  },
  {
    topic: 'Visão geral do mercado de câmbio',
    subtopic: 'Câmbio pronto x futuro',
    difficulty: 'facil',
    statement: 'Uma operação de câmbio pronto é aquela liquidada:',
    options: {
      A: 'Em até dois dias úteis da data da contratação (D+2).',
      B: 'Em prazo superior a dois dias úteis.',
      C: 'Somente no mesmo dia da contratação (D+0), sem exceção.',
      D: 'Em, no mínimo, 30 dias corridos.',
    },
    correct: 'A',
    explanation:
      'A operação de câmbio pronto é aquela a ser liquidada em até dois dias úteis da data da contratação (D+2). A operação de câmbio para liquidação futura é a que é contratada para liquidação em prazo superior a dois dias úteis.',
    explanationWrong: {
      B: 'Liquidação em prazo superior a dois dias úteis caracteriza a operação de câmbio para LIQUIDAÇÃO FUTURA, não a operação pronta.',
      C: 'O câmbio pronto pode ser liquidado em D+0, D+1 ou D+2 — não é restrito apenas ao mesmo dia (D+0).',
      D: 'Não há essa exigência de prazo mínimo de 30 dias — pelo contrário, o câmbio pronto é justamente a modalidade de liquidação MAIS RÁPIDA (até D+2).',
    },
    examTip:
      'Câmbio pronto = até D+2. Câmbio futuro = mais de D+2. É uma definição simples e literal, cobrada com frequência.',
    commonTrap:
      'D+2 é o limite MÁXIMO do câmbio pronto (que inclui D+0 e D+1 também) — não pense que "pronto" significa exclusivamente "no mesmo dia".',
    ...SRC('2. Visão geral do mercado de câmbio — Operação de câmbio pronto e para liquidação futura', '289'),
  },
  {
    topic: 'Visão geral do mercado de câmbio',
    subtopic: 'Posição de câmbio',
    difficulty: 'medio',
    statement: 'Uma instituição autorizada que efetuou compras de moeda estrangeira em valores superiores às vendas está em posição de câmbio:',
    options: {
      A: 'Vendida.',
      B: 'Comprada.',
      C: 'Neutra.',
      D: 'Fechada.',
    },
    correct: 'B',
    explanation:
      'A posição de câmbio comprada é o saldo, em moeda estrangeira, registrado em nome de uma instituição autorizada que tenha efetuado compras — prontas ou para liquidação futura — de moeda estrangeira, títulos e instrumentos cambiais, em valores superiores às vendas.',
    explanationWrong: {
      A: 'A posição vendida é o saldo em que as vendas superam as compras — o oposto do cenário descrito.',
      C: '"Neutra" não é a terminologia usada pelo Guia para descrever posições de câmbio — as posições são classificadas como comprada ou vendida, conforme o saldo líquido.',
      D: '"Fechada" não é o termo técnico utilizado no Guia para posição de câmbio equilibrada — o conceito central trabalhado é comprada x vendida.',
    },
    examTip:
      'Posição comprada: compras > vendas. Posição vendida: vendas > compras. Mesma lógica de "posição líquida" vista em derivativos.',
    commonTrap:
      'A lógica de posição comprada/vendida em câmbio é análoga à de derivativos (saldo líquido) — não pense nisso como um conceito totalmente novo.',
    ...SRC('2. Visão geral do mercado de câmbio — Posição de câmbio', '289-290'),
  },

  // ---------- Participantes e reguladores ----------
  {
    topic: 'Participantes e reguladores do câmbio',
    subtopic: 'CMN x Bacen no câmbio',
    difficulty: 'medio',
    statement: 'No mercado de câmbio, a competência de baixar normas que regulam as operações, fixando limites, taxas e prazos, é do:',
    options: {
      A: 'Banco Central do Brasil (Bacen).',
      B: 'Conselho Monetário Nacional (CMN).',
      C: 'Comitê Consultivo do Mercado de Câmbio do Brasil.',
      D: 'Comitê de Política Monetária (Copom).',
    },
    correct: 'B',
    explanation:
      'O CMN tem a competência de baixar normas que regulam as operações de câmbio, fixando limites, taxas, prazos e outras condições. O Bacen, por sua vez, executa essas diretrizes — concede autorização às instituições financeiras, fiscaliza e aplica penalidades.',
    explanationWrong: {
      A: 'O Bacen executa e fiscaliza as normas cambiais (autorizações, fiscalização, penalidades), mas quem baixa as normas gerais/diretrizes é o CMN.',
      C: 'O Comitê Consultivo tem função apenas consultiva, sem poder normativo ou vinculante — não é ele quem regula formalmente o mercado.',
      D: 'O Copom define a taxa básica de juros (Selic), sem relação direta com a regulação normativa do mercado de câmbio.',
    },
    examTip:
      'No câmbio, vale a mesma lógica do SFN: CMN normatiza (baixa normas, fixa limites/taxas/prazos), Bacen executa/fiscaliza/autoriza.',
    commonTrap:
      'É a mesma pegadinha clássica de CMN x Bacen do Título I — releia sempre qual verbo está em jogo: "normatizar" (CMN) x "autorizar/fiscalizar/executar" (Bacen).',
    ...SRC('2. Visão geral do mercado de câmbio — Reguladores do mercado de câmbio', '291'),
  },
  {
    topic: 'Participantes e reguladores do câmbio',
    subtopic: 'Comitê Consultivo do Mercado de Câmbio',
    difficulty: 'dificil',
    statement: 'O Comitê Consultivo do Mercado de Câmbio do Brasil:',
    options: {
      A: 'Possui poder normativo e vinculante, substituindo o CMN na regulação cambial.',
      B: 'Tem função consultiva, sem poder normativo ou vinculante, sendo as diretrizes e a execução da política cambial mantidas a cargo do CMN e do Bacen.',
      C: 'É formado exclusivamente por representantes de bancos estrangeiros.',
      D: 'Substitui o Bacen na fiscalização das instituições autorizadas a operar em câmbio.',
    },
    correct: 'B',
    explanation:
      'As deliberações do Comitê Consultivo do Mercado de Câmbio do Brasil são consultivas, sem poder normativo ou vinculante. As diretrizes e a execução da política cambial permanecem a cargo do CMN e do Bacen, respectivamente. O Bacen ocupa cinco cadeiras efetivas no comitê, incluindo a presidência, e exerce o secretariado.',
    explanationWrong: {
      A: 'É o oposto: o comitê NÃO tem poder normativo/vinculante — ele é apenas consultivo, sem substituir o CMN.',
      C: 'O comitê é composto por participantes do mercado e representantes do Bacen — não exclusivamente por bancos estrangeiros.',
      D: 'O comitê não substitui o Bacen na fiscalização — sua função é de fórum consultivo para discutir questões conjunturais e estruturais do câmbio.',
    },
    examTip:
      'Comitê Consultivo = "fórum de discussão", sem poder de decisão — quem decide continua sendo CMN (diretrizes) e Bacen (execução).',
    commonTrap:
      'O nome "Comitê" pode sugerir poder decisório — mas o Guia é claro: suas deliberações são meramente consultivas, sem força normativa.',
    ...SRC('2. Visão geral do mercado de câmbio — Comitê Consultivo do Mercado de Câmbio do Brasil', '298'),
  },
  {
    topic: 'Participantes e reguladores do câmbio',
    subtopic: 'Dealers de câmbio',
    difficulty: 'dificil',
    statement: 'Os dealers de câmbio são:',
    options: {
      A: 'Instituições de pagamento que emitem moeda eletrônica.',
      B: 'Bancos por meio dos quais o Bacen atua no mercado de câmbio, inserindo ofertas próprias e de outras instituições durante os leilões do Sisbacen.',
      C: 'Órgãos reguladores responsáveis por fixar diretrizes de política cambial.',
      D: 'Exclusivamente corretoras de câmbio, nunca bancos.',
    },
    correct: 'B',
    explanation:
      'Os dealers são bancos por meio dos quais o Bacen atua no mercado de câmbio. Durante os leilões de compra e venda de moeda realizados pelo Bacen no Sisbacen, os dealers inserem suas próprias ofertas e as das demais instituições participantes do mercado (corretoras e bancos).',
    explanationWrong: {
      A: 'Dealers de câmbio não são instituições de pagamento — são bancos selecionados pelo Bacen para atuar nos leilões cambiais.',
      C: 'Dealers de câmbio são agentes operacionais do mercado, não órgãos reguladores — quem fixa diretrizes é o CMN.',
      D: 'Ao contrário: os dealers de câmbio são especificamente bancos (não corretoras) — não confundir com os dealers do Tesouro Nacional, categoria diferente que inclui bancos e corretoras/distribuidoras.',
    },
    examTip:
      'Dealers de CÂMBIO = só bancos, atuam nos leilões do Bacen via Sisbacen. Dealers do TESOURO NACIONAL = bancos + corretoras/distribuidoras, atuam nos leilões de títulos públicos. Não confunda os dois sistemas de dealers.',
    commonTrap:
      'O Guia apresenta dois sistemas de "dealers" diferentes (câmbio e Tesouro) — a prova pode testar se você sabe que o de câmbio é restrito a bancos, enquanto o do Tesouro inclui também corretoras/distribuidoras.',
    ...SRC('2. Visão geral do mercado de câmbio — Participantes do mercado secundário (Dealers de câmbio)', '292-293'),
  },
  {
    topic: 'Participantes e reguladores do câmbio',
    subtopic: 'Limites de operação por tipo de instituição',
    difficulty: 'prova',
    statement:
      'Segundo a Resolução nº 277/2022 do Banco Central, o limite de operações de câmbio com clientes para liquidação pronta que instituições de pagamento (emissoras de moeda eletrônica) podem realizar é de até:',
    options: {
      A: 'US$ 100.000,00 ou equivalente em outras moedas.',
      B: 'US$ 500.000,00 ou equivalente em outras moedas.',
      C: 'Sem qualquer limite de valor.',
      D: 'US$ 1.000.000,00 ou equivalente em outras moedas.',
    },
    correct: 'A',
    explanation:
      'As instituições de pagamento autorizadas pelo Bacen que prestem serviço como emissor de moeda eletrônica, emissor de instrumento pós-pago ou credenciador podem realizar operações de câmbio com clientes para liquidação pronta de até US$ 100.000,00 ou o equivalente em outras moedas.',
    explanationWrong: {
      B: 'O limite de US$ 500.000,00 é o aplicável a sociedades corretoras/distribuidoras de valores mobiliários, corretoras de câmbio, SCFI e agências de fomento — não às instituições de pagamento.',
      C: 'Há sim um limite específico definido pela norma (US$ 100.000,00) para as instituições de pagamento — não é ilimitado.',
      D: 'US$ 1.000.000,00 não corresponde a nenhum dos limites mencionados no Guia para essas categorias de instituição.',
    },
    examTip:
      'Instituições de pagamento: limite de US$ 100 mil. Corretoras/distribuidoras/SCFI/agências de fomento: limite de US$ 500 mil. Bancos e CEF: sem limite (podem tudo).',
    commonTrap:
      'A prova pode trocar os dois valores (US$ 100 mil x US$ 500 mil) entre os tipos de instituição — decore que o limite MENOR é o das instituições de pagamento.',
    ...SRC('2. Visão geral do mercado de câmbio — Participantes do mercado de câmbio (Outras entidades)', '292-293'),
  },

  // ---------- PTAX ----------
  {
    topic: 'Cotação PTAX',
    subtopic: 'Cálculo da PTAX',
    difficulty: 'medio',
    statement: 'A cotação PTAX é calculada com base em quantas consultas diárias de taxas aos dealers de câmbio?',
    options: {
      A: 'Duas consultas.',
      B: 'Três consultas.',
      C: 'Quatro consultas.',
      D: 'Seis consultas.',
    },
    correct: 'C',
    explanation:
      'São feitas quatro consultas de taxas aos dealers de câmbio diariamente: entre 10h e 10h10; 11h e 11h10; 12h e 12h10; e 13h e 13h10. As taxas de compra e venda de cada consulta correspondem às médias das cotações fornecidas pelos dealers, excluídas as duas maiores e as duas menores.',
    explanationWrong: {
      A: 'Não são duas, mas quatro consultas diárias — realizadas em quatro janelas de horário específicas ao longo da manhã e início da tarde.',
      B: 'Não são três, mas quatro consultas — o número exato citado pelo Guia.',
      D: 'Não são seis, mas quatro consultas diárias aos dealers de câmbio.',
    },
    examTip:
      'PTAX = 4 consultas diárias (10h, 11h, 12h, 13h) aos dealers, com exclusão das 2 maiores e 2 menores cotações em cada consulta antes de calcular a média.',
    commonTrap:
      'Não confunda a quantidade de consultas diárias (quatro) com a quantidade de cotações excluídas em cada consulta (duas maiores e duas menores) — são números diferentes no mesmo processo.',
    ...SRC('2. Visão geral do mercado de câmbio — Cotação PTAX', '294'),
  },
  {
    topic: 'Cotação PTAX',
    subtopic: 'Origem do nome PTAX',
    difficulty: 'dificil',
    statement: 'O nome "PTAX" tem origem em:',
    options: {
      A: 'Uma sigla oficial definida pelo FMI para taxas cambiais internacionais.',
      B: 'A transação do Sisbacen "PTAX800", usada por muitos anos pelo público para consultar taxas de câmbio, desativada em 2014, mas cujo nome foi mantido no novo sistema.',
      C: 'O nome do banco responsável por administrar a taxa.',
      D: 'Uma referência à paridade do dólar frente ao euro.',
    },
    correct: 'B',
    explanation:
      'A PTAX recebe esse nome porque, durante muitos anos, foi usada a transação do Sisbacen "PTAX800" pelo público para consultar as taxas de câmbio. Essa transação foi desativada em 2014, embora o novo sistema tenha mantido o nome PTAX, já bastante conhecido no mercado.',
    explanationWrong: {
      A: 'PTAX não é uma sigla definida pelo FMI — é um nome de origem histórica/operacional, ligado a um sistema específico do Bacen (Sisbacen).',
      C: 'A PTAX não leva o nome de um banco — é uma taxa calculada pelo Bacen com base em consultas a dealers, sem relação com nome de instituição.',
      D: 'Não há relação com paridade dólar-euro — o nome vem da antiga transação eletrônica PTAX800 do Sisbacen.',
    },
    examTip:
      'PTAX = herança do nome da antiga transação "PTAX800" do Sisbacen (desativada em 2014), mantido por já ser consagrado no mercado.',
    commonTrap:
      'É uma curiosidade histórica específica do Guia — fácil de esquecer, mas cobrável em questões de nível "prova" sobre detalhes operacionais.',
    ...SRC('2. Visão geral do mercado de câmbio — Cotação PTAX', '294'),
  },

  // ---------- Negociação e liquidação na B3 ----------
  {
    topic: 'Negociação e liquidação de câmbio na B3',
    subtopic: 'Anonimato na negociação eletrônica',
    difficulty: 'dificil',
    statement: 'Uma característica que diferencia a negociação de câmbio na plataforma eletrônica da B3 dos demais mercados administrados pela bolsa é:',
    options: {
      A: 'A identificação obrigatória da corretora ou banco em cada oferta inserida.',
      B: 'A inserção de ofertas de forma anônima, sem identificação da corretora ou banco que as colocou.',
      C: 'A impossibilidade de negociação eletrônica, sendo todo o mercado feito apenas em balcão.',
      D: 'A ausência de qualquer sistema de fechamento por melhor preço.',
    },
    correct: 'B',
    explanation:
      'Na plataforma eletrônica da B3, as ofertas de câmbio são inseridas de forma anônima, sem identificação da corretora ou do banco que colocou a oferta — uma característica que diferencia a negociação de câmbio dos demais mercados administrados pela B3.',
    explanationWrong: {
      A: 'É o oposto: as ofertas são anônimas, sem identificação da instituição — não há identificação obrigatória.',
      C: 'A negociação de câmbio pronto ocorre tanto no Puma Trading System (eletrônico) quanto em mercado de balcão — não é restrita apenas ao balcão.',
      D: 'Há sim um sistema de fechamento por melhor preço na plataforma eletrônica (compra pelo maior preço, venda pelo menor preço) — assim como nos demais mercados.',
    },
    examTip:
      'Câmbio na B3 = a única negociação com ofertas ANÔNIMAS na plataforma eletrônica — ponto de diferenciação explicitamente destacado pelo Guia.',
    commonTrap:
      'Não pense que "anônimo" significa "sem regras" — o fechamento por melhor preço (maior para compra, menor para venda) continua se aplicando normalmente.',
    ...SRC('3. Negociação e liquidação de câmbio da B3 — Operações negociadas', '300'),
  },
  {
    topic: 'Negociação e liquidação de câmbio na B3',
    subtopic: 'Registro no Sisbacen',
    difficulty: 'medio',
    statement: 'Uma operação de câmbio no mercado interbancário só está contratada e pode ser liquidada se:',
    options: {
      A: 'For registrada e confirmada no Sisbacen.',
      B: 'For aprovada previamente pela CVM.',
      C: 'For registrada exclusivamente em cartório.',
      D: 'For realizada apenas em mercado de balcão, nunca em plataforma eletrônica.',
    },
    correct: 'A',
    explanation:
      'Por força de norma, as operações de câmbio do mercado interbancário são contratadas e passíveis de liquidação apenas mediante o seu registro e confirmação no Sisbacen (Sistema de Informações do Banco Central).',
    explanationWrong: {
      B: 'A aprovação da CVM não é o requisito de validade da operação de câmbio — o registro relevante é feito no Sisbacen, sistema do Bacen.',
      C: 'Não há exigência de registro em cartório para a validade da operação de câmbio interbancário — o mecanismo de registro é eletrônico, no Sisbacen.',
      D: 'Tanto operações de balcão quanto as realizadas no sistema eletrônico de negociação precisam, ao final, ser registradas e confirmadas no Sisbacen para serem válidas.',
    },
    examTip:
      'Sisbacen = o registro obrigatório que "valida" juridicamente toda operação de câmbio interbancário, seja negociada em balcão ou na plataforma eletrônica.',
    commonTrap:
      'Mesmo uma operação fechada na plataforma eletrônica da B3 só é efetivamente válida após ser registrada e confirmada no Sisbacen — a negociação eletrônica não dispensa esse registro.',
    ...SRC('3. Negociação e liquidação de câmbio da B3 — Registro, confirmação e contratação das operações', '304'),
  },

  // ---------- Câmara de câmbio ----------
  {
    topic: 'Câmara de câmbio B3',
    subtopic: 'Contraparte central e pagamento contra pagamento',
    difficulty: 'medio',
    statement: 'A Câmara de Câmbio B3, atuando como contraparte central, garante a liquidação das operações eliminando o risco de principal por meio da aplicação do conceito de:',
    options: {
      A: 'Entrega contra pagamento (DVP).',
      B: 'Pagamento contra pagamento (PVP).',
      C: 'Liquidação bruta em tempo real (LBTR), sem qualquer garantia.',
      D: 'Compensação unilateral.',
    },
    correct: 'B',
    explanation:
      'Atuando como contraparte central para a liquidação das operações de câmbio pronto contratadas no mercado interbancário, a Câmara de Câmbio B3 garante a liquidação eliminando o risco de principal pela aplicação do conceito de pagamento contra pagamento (payment versus payment).',
    explanationWrong: {
      A: 'Entrega contra pagamento (DVP) é o conceito aplicado quando há entrega de um ativo (como um título) contra pagamento — em câmbio, como envolve duas moedas (dois "pagamentos"), o conceito correto é pagamento contra pagamento (PVP).',
      C: 'A Câmara de Câmbio atua justamente com garantias e como contraparte central — não é uma liquidação "sem garantia".',
      D: 'Compensação unilateral não é o mecanismo aplicado — a Câmara atua bilateralmente, comprando dos vendedores e vendendo aos compradores.',
    },
    examTip:
      'DVP = ativo contra dinheiro (ex.: título x pagamento). PVP = dinheiro contra dinheiro (câmbio: real x dólar) — a Câmara de Câmbio usa PVP, não DVP.',
    commonTrap:
      'O Título I já mencionou "payment versus payment" como uma variação do DVP para câmbio — este capítulo confirma que é justamente esse o modelo usado pela Câmara de Câmbio B3.',
    ...SRC('3. Negociação e liquidação de câmbio da B3 — Câmara (Clearing) de Câmbio', '301'),
  },
  {
    topic: 'Câmara de câmbio B3',
    subtopic: 'Membro de compensação com x sem reserva',
    difficulty: 'dificil',
    statement: 'O membro de compensação de câmbio SEM reserva bancária, ao contrário do membro COM reserva, precisa:',
    options: {
      A: 'Estar conectado obrigatoriamente à Rede do Sistema Financeiro Nacional (RSFN).',
      B: 'Indicar um banco liquidante.',
      C: 'Ser necessariamente uma corretora de câmbio, nunca um banco.',
      D: 'Prescindir de qualquer prestação de garantias à Câmara.',
    },
    correct: 'B',
    explanation:
      'O membro de compensação de câmbio sem reserva bancária precisa indicar um banco liquidante. Já o membro de compensação com reserva bancária deve estar conectado à Rede do Sistema Financeiro Nacional (RSFN), além da B3.',
    explanationWrong: {
      A: 'A exigência de conexão à RSFN é do membro de compensação COM reserva bancária, não do que não tem reserva — que precisa indicar um banco liquidante em vez disso.',
      C: 'São elegíveis a membro de compensação corretoras e distribuidoras de valores mobiliários, bancos de investimento, bancos comerciais e bancos múltiplos — não é exclusividade de corretoras.',
      D: 'Ambos os tipos de membro de compensação (com ou sem reserva) são responsáveis, como contraparte perante a Câmara, pela prestação de garantias referentes às operações — essa obrigação não é dispensada.',
    },
    examTip:
      'Sem reserva → precisa de um banco liquidante "emprestando" acesso ao sistema de reservas. Com reserva → conecta-se diretamente via RSFN, sem intermediário.',
    commonTrap:
      'A prova pode inverter as exigências entre "com reserva" e "sem reserva" — associe: quem NÃO tem conta de reserva bancária própria precisa de alguém (banco liquidante) que tenha.',
    ...SRC('3. Negociação e liquidação de câmbio da B3 — Membro de compensação de câmbio', '302'),
  },
];
