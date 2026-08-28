// Título II - Mercados de Bolsa e de Balcão
// Capítulo II - Mercado de derivativos
// Fonte: Guia Por Dentro da B3, páginas 169-209.

export const chapterRef = { titleNumber: 'II', chapterNumber: 'II' };

export const topics = [
  'Conceitos básicos de derivativos',
  'Participantes do mercado de derivativos',
  'Contrato a termo',
  'Contrato futuro',
  'Contrato de opções',
  'Contrato de swap',
];

const SRC = (section, page) => ({
  source_title: 'Guia Por Dentro da B3',
  source_chapter: 'Título II, Capítulo II — Mercado de derivativos',
  source_section: section,
  source_page: page,
});

export const questions = [
  // ---------- Conceitos básicos ----------
  {
    topic: 'Conceitos básicos de derivativos',
    subtopic: 'Conceito e classificação',
    difficulty: 'facil',
    statement: 'Derivativos são instrumentos financeiros cujos preços:',
    options: {
      A: 'São fixados pelo governo e não variam ao longo do tempo.',
      B: 'Estão ligados a outro ativo que lhes serve de referência (ativo-objeto).',
      C: 'Dependem exclusivamente da política monetária do Bacen.',
      D: 'São sempre idênticos ao preço do ativo à vista correspondente.',
    },
    correct: 'B',
    explanation:
      'Derivativos são instrumentos financeiros cujos preços estão ligados a outro ativo que lhes serve de referência (o ativo-objeto ou ativo subjacente) — por exemplo, o preço do contrato futuro de dólar está atrelado à cotação da moeda norte-americana em relação ao real.',
    explanationWrong: {
      A: 'Os preços de derivativos são formados por negociação em mercado (processo competitivo entre compradores e vendedores), não fixados pelo governo.',
      C: 'Embora a política monetária influencie taxas de juros que afetam a formação de preços, o preço do derivativo depende do seu ativo-objeto específico, não exclusivamente do Bacen.',
      D: 'O preço futuro e o preço à vista geralmente diferem (relação explicada por taxa de juros, custo de carregamento etc.), convergindo apenas próximo ao vencimento.',
    },
    examTip:
      'Todo derivativo tem um "ativo-objeto" (ou ativo subjacente) do qual deriva seu preço — é a primeira coisa a identificar em qualquer questão sobre derivativos.',
    commonTrap:
      'Não confunda "preço do derivativo" com "preço do ativo à vista" — eles se relacionam, mas não são idênticos, exceto no vencimento (convergência).',
    ...SRC('2. Conceitos básicos', '171'),
  },
  {
    topic: 'Conceitos básicos de derivativos',
    subtopic: 'Classes de derivativos',
    difficulty: 'medio',
    statement: 'Um contrato futuro de taxa de juros (DI) é classificado, segundo o Guia, na categoria de:',
    options: {
      A: 'Derivativos de ações, ETFs e BDRs.',
      B: 'Derivativos financeiros.',
      C: 'Derivativos agropecuários.',
      D: 'Derivativos de energia e climáticos.',
    },
    correct: 'B',
    explanation:
      'Derivativos financeiros têm como ativo-objeto uma taxa ou índice financeiro, como taxa de juro, taxa de inflação, taxa de câmbio, índice de ações e outros — categoria na qual se enquadra o contrato futuro de DI (taxa de juro).',
    explanationWrong: {
      A: 'Derivativos de ações, ETFs e BDRs têm como ativo-objeto ações de empresas listadas, ETFs e BDRs — não taxas de juro.',
      C: 'Derivativos agropecuários têm como ativo-objeto commodities agrícolas (café, boi, milho, soja) — não taxas de juro.',
      D: 'Derivativos de energia e climáticos referem-se a energia elétrica, gás natural, créditos de carbono — não taxas de juro.',
    },
    examTip:
      'As 4 categorias do Guia: ações/ETFs/BDRs, financeiros (taxas/índices), agropecuários (commodities), energia/climáticos.',
    commonTrap:
      'Índices de ações (como o Ibovespa) também entram em "derivativos financeiros" — não confundir com "derivativos de ações", que se refere à ação individual como ativo-objeto.',
    ...SRC('2. Conceitos básicos — Classificação dos derivativos', '171'),
  },
  {
    topic: 'Conceitos básicos de derivativos',
    subtopic: 'Contratos padronizados x não padronizados',
    difficulty: 'medio',
    statement: 'Contratos derivativos padronizados, negociados em bolsa, caracterizam-se por serem:',
    options: {
      A: 'Intercambiáveis, podendo ser repassados a outros participantes a qualquer momento durante o período de negociação.',
      B: 'Negociados exclusivamente no mercado de balcão, sem qualquer padronização.',
      C: 'Impossíveis de serem encerrados antes da data de vencimento.',
      D: 'Sempre negociados diretamente entre as partes, sem intervenção de bolsa ou câmara.',
    },
    correct: 'A',
    explanation:
      'Contratos padronizados, negociados em bolsa, são muito líquidos justamente por serem intercambiáveis — podem ser repassados a outros participantes a qualquer momento durante o funcionamento do período de negociação, diferentemente dos contratos não padronizados de balcão.',
    explanationWrong: {
      B: 'É o oposto: contratos padronizados são negociados em BOLSA (ambiente organizado), não em balcão sem padronização — isso descreveria os NÃO padronizados.',
      C: 'Justamente por serem intercambiáveis, os contratos padronizados PODEM ser encerrados a qualquer momento antes do vencimento, via operação inversa.',
      D: 'Contratos padronizados negociados em bolsa são tipicamente liquidados via câmara de compensação (contraparte central), não diretamente entre as partes.',
    },
    examTip:
      'Padronizado = bolsa + intercambiável + líquido. Não padronizado = balcão + feito sob medida + difícil de repassar a terceiros.',
    commonTrap:
      'A intercambialidade é a característica-chave dos contratos de bolsa: "zerar" a posição é tão simples quanto assumir a posição inversa no mesmo contrato/vencimento/quantidade.',
    ...SRC('2. Conceitos básicos — Contratos padronizados e não padronizados', '172'),
  },
  {
    topic: 'Conceitos básicos de derivativos',
    subtopic: 'Liquidação física x financeira',
    difficulty: 'medio',
    statement: 'Na B3, quais são as únicas commodities cuja liquidação é física, segundo o Guia?',
    options: {
      A: 'Boi gordo e milho.',
      B: 'Café arábica 4/5 e café conilon robusta.',
      C: 'Soja e dólar.',
      D: 'Ouro e Ibovespa.',
    },
    correct: 'B',
    explanation:
      'O Guia destaca que, na B3, o café arábica 4/5 e o café conilon robusta são as únicas commodities cuja liquidação é física — todas as demais operações de derivativos na B3 são liquidadas financeiramente (por diferença), sem entrega física do ativo.',
    explanationWrong: {
      A: 'Boi gordo e milho, assim como a maioria dos contratos da B3, são liquidados financeiramente, não fisicamente.',
      C: 'Soja e dólar também são liquidados financeiramente na B3 — o café é a exceção citada explicitamente pelo Guia.',
      D: 'Ouro e Ibovespa não são as commodities de liquidação física mencionadas — o destaque do Guia recai especificamente sobre os dois tipos de café.',
    },
    examTip:
      'Fato específico e literal do Guia: apenas os contratos de CAFÉ (arábica 4/5 e conilon robusta) têm liquidação física na B3 — todo o resto é liquidação financeira.',
    commonTrap:
      'A prova pode generalizar "commodities agrícolas têm liquidação física" — mas na B3 isso é exceção, restrita ao café, não regra geral.',
    ...SRC('2. Conceitos básicos — Liquidação de operações', '176'),
  },
  {
    topic: 'Conceitos básicos de derivativos',
    subtopic: 'Posição comprada x vendida',
    difficulty: 'dificil',
    statement:
      'Um investidor comprou 30 contratos futuros de Ibovespa para março e, em seguida, vendeu 40 contratos do mesmo vencimento. Sua posição líquida resultante é:',
    options: {
      A: 'Comprada (long) em 70 contratos.',
      B: 'Vendida (short) em 10 contratos.',
      C: 'Comprada (long) em 10 contratos.',
      D: 'Encerrada (zerada).',
    },
    correct: 'B',
    explanation:
      'A posição em derivativos é o saldo líquido dos contratos negociados para a mesma data de vencimento. Se o número de contratos vendidos (40) for maior que o número de contratos comprados (30), a posição líquida será vendedora (short) — nesse caso, vendida em 10 contratos (40 − 30).',
    explanationWrong: {
      A: 'Somar 30 + 40 = 70 ignora que compra e venda se compensam — o cálculo correto é a diferença (saldo líquido), não a soma.',
      C: 'Inverte o sinal do resultado: como as vendas (40) superam as compras (30), a posição é vendedora, não compradora.',
      D: 'A posição só estaria zerada se as quantidades compradas e vendidas fossem iguais — aqui há uma diferença líquida de 10 contratos vendidos.',
    },
    examTip:
      'Posição líquida = compras − vendas (mesmo vencimento). Se vendas > compras → vendido (short). Se compras > vendas → comprado (long).',
    commonTrap:
      'Questões de posição líquida testam se você soma (errado) em vez de calcular a diferença (saldo líquido) entre contratos comprados e vendidos do MESMO vencimento.',
    ...SRC('2. Conceitos básicos — Contratos em aberto, abertura e encerramento de posição', '174-175'),
  },

  // ---------- Participantes ----------
  {
    topic: 'Participantes do mercado de derivativos',
    subtopic: 'Hedger x especulador',
    difficulty: 'medio',
    statement: 'A principal diferença entre um hedger e um especulador no mercado de derivativos é que o especulador:',
    options: {
      A: 'Sempre possui uma posição no mercado à vista que precisa proteger.',
      B: 'Não tem nenhuma negociação no mercado à vista que necessite de proteção, buscando apenas ganhar com movimentos de preço.',
      C: 'É proibido de negociar contratos futuros na B3.',
      D: 'Atua exclusivamente para eliminar discrepâncias de preço entre mercados diferentes.',
    },
    correct: 'B',
    explanation:
      'Diferentemente do hedger — que busca proteção para uma posição real no mercado à vista —, o especulador não tem nenhuma negociação no mercado à vista que necessite de proteção; sua atuação consiste em comprar e vender contratos futuros apenas para ganhar com os movimentos de preço, sem interesse pelo ativo-objeto em si.',
    explanationWrong: {
      A: 'É justamente o hedger, não o especulador, quem possui uma posição no mercado à vista a ser protegida.',
      C: 'Especuladores são participantes legítimos e necessários do mercado de derivativos — não há proibição, e sua atuação inclusive fornece liquidez.',
      D: 'Eliminar discrepâncias de preço entre mercados é a função típica do arbitrador, não do especulador.',
    },
    examTip:
      'Hedger = protege posição real. Especulador = aposta em movimento de preço, sem posição a proteger. Arbitrador = lucra com discrepância de preços entre mercados.',
    commonTrap:
      'Apesar da "má fama", o Guia destaca que especuladores frequentemente atuam como provedores de liquidez, ajudando outros participantes a transferir risco — não são apenas uma fonte de instabilidade.',
    ...SRC('2. Conceitos básicos — Participantes dos mercados de derivativos', '173-174'),
  },
  {
    topic: 'Participantes do mercado de derivativos',
    subtopic: 'Arbitrador',
    difficulty: 'medio',
    statement: 'A atuação do arbitrador no mercado de derivativos contribui para:',
    options: {
      A: 'Aumentar as discrepâncias de preço entre mercados diferentes.',
      B: 'Manter os preços alinhados entre mercados, eliminando oportunidades de lucro sem risco.',
      C: 'Reduzir a liquidez geral do mercado.',
      D: 'Proteger exclusivamente sua própria posição física de um ativo.',
    },
    correct: 'B',
    explanation:
      'Os arbitradores buscam lucrar com discrepâncias de preço entre ativos ou mercados diferentes, comprando onde está mais barato e vendendo onde está mais caro. Essa atividade ajuda a manter os preços alinhados entre os mercados, eliminando oportunidades de lucro sem risco e contribuindo para a eficiência do mercado financeiro.',
    explanationWrong: {
      A: 'É o oposto: a atuação do arbitrador tende a REDUZIR (não aumentar) as discrepâncias de preço, ao comprar onde está barato e vender onde está caro, equilibrando os preços.',
      C: 'Ao negociar ativamente entre mercados, os arbitradores contribuem para a liquidez e a eficiência, não a reduzem.',
      D: 'Diferentemente do hedger, o arbitrador não está protegendo uma posição física própria — ele explora diferenças de preço entre mercados/ativos.',
    },
    examTip:
      '"O arbitrador age como um árbitro": compra no mercado mais barato, vende no mais caro, e os preços convergem para um valor intermediário — reduzindo distorções.',
    commonTrap:
      'Não confunda arbitrador (elimina distorções de preço entre mercados diferentes) com especulador (aposta na direção do preço em um único mercado) — são estratégias distintas, mesmo que ambos busquem lucro.',
    ...SRC('2. Conceitos básicos — Participantes dos mercados de derivativos', '174'),
  },

  // ---------- Contrato a termo ----------
  {
    topic: 'Contrato a termo',
    subtopic: 'Características do termo',
    difficulty: 'medio',
    statement: 'Uma das principais dificuldades apresentadas pelos contratos a termo, em comparação aos contratos futuros, é:',
    options: {
      A: 'A impossibilidade de recompra e revenda, já que não é possível "zerar" a posição repassando o compromisso a outro participante.',
      B: 'A exigência de garantias mais baixas do que as exigidas nos contratos futuros.',
      C: 'A existência de ajuste diário, que aumenta o risco de crédito.',
      D: 'A obrigatoriedade de negociação em bolsa, o que reduz a flexibilidade das partes.',
    },
    correct: 'A',
    explanation:
      'Os contratos a termo não oferecem intercambialidade de posições: nenhuma das partes consegue "zerar" sua posição antes da liquidação repassando o compromisso a outro participante. Além disso, exigem garantias mais altas que os futuros — o mercado futuro resolve ambas as dificuldades.',
    explanationWrong: {
      B: 'É o oposto: os contratos a termo exigem garantias MAIS ALTAS que os futuros, não mais baixas.',
      C: 'O ajuste diário é uma característica exclusiva do mercado FUTURO — o termo não tem ajuste diário, sendo liquidado integralmente no vencimento (ou antecipadamente).',
      D: 'Os contratos a termo são negociados no mercado de BALCÃO, não em bolsa — é o contrato futuro que é negociado em bolsa.',
    },
    examTip:
      'Termo: balcão, sem ajuste diário, sem intercambialidade, garantias mais altas. Futuro: bolsa, com ajuste diário, intercambiável, garantias menores.',
    commonTrap:
      'A prova pode inverter as características de termo e futuro numa mesma alternativa — releia com cuidado quem tem "ajuste diário" e quem é "intercambiável".',
    ...SRC('3. Tipos de contratos de derivativos — Características operacionais dos contratos a termo', '182'),
  },
  {
    topic: 'Contrato a termo',
    subtopic: 'NDF',
    difficulty: 'dificil',
    statement: 'O NDF (non-deliverable forward) é um instrumento financeiro derivativo usado principalmente para:',
    options: {
      A: 'Proteção contra flutuações cambiais, sendo uma modalidade de contrato a termo de moedas.',
      B: 'Negociação padronizada de ações em bolsa, com ajuste diário.',
      C: 'Substituir integralmente o papel das câmaras de compensação e liquidação.',
      D: 'Garantir entrega física obrigatória da moeda estrangeira negociada.',
    },
    correct: 'A',
    explanation:
      'O NDF é a denominação das operações a termo de moedas, usado principalmente para proteção contra flutuações cambiais. Na data de liquidação, calcula-se a diferença entre a taxa de câmbio acordada (forward) e a taxa de mercado, e uma das partes paga a outra essa diferença multiplicada pelo valor nocional — sem entrega física da moeda.',
    explanationWrong: {
      B: 'NDF é negociado no mercado de balcão como contrato a termo, sem ajuste diário (característica exclusiva do mercado futuro) — não é uma negociação padronizada de ações.',
      C: 'O NDF não substitui as câmaras de compensação; ele pode, inclusive, ser registrado com ou sem garantia (CCP), conforme a modalidade escolhida.',
      D: '"Non-deliverable" já indica o oposto: não há entrega física da moeda — a liquidação é financeira, pela diferença entre as taxas.',
    },
    examTip:
      'NDF = "non-deliverable" = sem entrega física. É a versão de contrato a termo aplicada a moedas, liquidada pela diferença cambial.',
    commonTrap:
      'O próprio nome "non-deliverable" é a pista: quem acha que há entrega física da moeda no NDF está invertendo o conceito central do instrumento.',
    ...SRC('3. Tipos de contratos de derivativos — Contrato a termo de moedas', '182'),
  },
  {
    topic: 'Contrato a termo',
    subtopic: 'Prazos do termo de ações',
    difficulty: 'dificil',
    statement: 'Segundo o Guia Por Dentro da B3, o prazo de uma operação a termo de ações deve respeitar:',
    options: {
      A: 'Prazo mínimo de 16 dias corridos e máximo de 999 dias corridos.',
      B: 'Prazo mínimo de 1 dia útil e máximo de 30 dias corridos.',
      C: 'Prazo fixo obrigatório de 30 dias corridos, sem exceções.',
      D: 'Não há prazo mínimo nem máximo definido.',
    },
    correct: 'A',
    explanation:
      'O Guia estabelece que o prazo mínimo de uma operação a termo de ações é de 16 dias corridos, e o prazo máximo é de 999 dias corridos.',
    explanationWrong: {
      B: 'Os limites reais são 16 dias corridos (mínimo) e 999 dias corridos (máximo) — não 1 dia útil e 30 dias corridos.',
      C: 'Não há prazo fixo obrigatório de 30 dias — esse número aparece apenas em um exemplo do Guia, não como regra geral de prazo único.',
      D: 'Há sim limites definidos: mínimo de 16 dias corridos e máximo de 999 dias corridos.',
    },
    examTip:
      'Decore os números literais: termo de ações = mínimo 16 dias corridos, máximo 999 dias corridos.',
    commonTrap:
      'Não confunda o prazo do EXEMPLO numérico do Guia (30 dias, usado para ilustrar o cálculo) com os LIMITES regulamentares reais (16 a 999 dias corridos).',
    ...SRC('3. Tipos de contratos de derivativos — Contrato a termo de ações', '185'),
  },

  // ---------- Contrato futuro ----------
  {
    topic: 'Contrato futuro',
    subtopic: 'Ajuste diário',
    difficulty: 'facil',
    statement: 'O mecanismo que diferencia mais notavelmente o mercado futuro do mercado a termo é:',
    options: {
      A: 'A negociação exclusiva em moeda estrangeira.',
      B: 'O ajuste diário, que liquida ganhos e perdas diariamente conforme a variação de preço do ativo subjacente.',
      C: 'A ausência de qualquer exigência de garantias.',
      D: 'A proibição de encerramento antecipado da posição.',
    },
    correct: 'B',
    explanation:
      'A diferença mais notável entre mercado futuro e mercado a termo é a existência do ajuste diário no mercado futuro — mecanismo de equalização de ganhos e perdas que liquida diariamente as posições com base nas variações de preço do ativo subjacente. No termo, há um único ajuste, na data de vencimento (ou liquidação antecipada).',
    explanationWrong: {
      A: 'Nem futuro nem termo são exclusivos de moeda estrangeira — ambos podem ter diversos ativos-objeto (ações, commodities, taxas, moedas etc.).',
      C: 'O contrato futuro EXIGE garantias (margem de garantia), embora tipicamente menores que as do termo — não há ausência de exigência.',
      D: 'É justamente o oposto: a intercambialidade do futuro permite encerrar a posição a qualquer momento antes do vencimento; o termo é que tem essa limitação.',
    },
    examTip:
      '"O ajuste diário existe apenas no mercado futuro" — frase literal do Guia, destacada como "Atenção!". É a diferença mais cobrada entre termo e futuro.',
    commonTrap:
      'Ajuste diário = liquidação de ganhos/perdas TODO DIA (futuro). No termo, tudo se acumula para o vencimento — risco de crédito maior no termo.',
    ...SRC('3. Tipos de contratos de derivativos — Contrato futuro (Ajuste diário)', '186, 189'),
  },
  {
    topic: 'Contrato futuro',
    subtopic: 'Ajuste diário — cálculo',
    difficulty: 'prova',
    statement:
      'Um investidor está comprado em contratos futuros de Ibovespa. Se o preço de ajuste do dia subir em relação ao preço de ajuste do dia anterior, o resultado do ajuste diário para esse investidor será:',
    options: {
      A: 'Positivo (recebe o ajuste diário).',
      B: 'Negativo (paga o ajuste diário).',
      C: 'Sempre zero, independentemente da variação de preço.',
      D: 'Indefinido, pois depende exclusivamente da posição da contraparte.',
    },
    correct: 'A',
    explanation:
      'Conforme a tabela de ajuste diário do Guia: quando o preço de ajuste sobe, a posição comprada recebe o ajuste diário (resultado positivo), enquanto a posição vendida paga (resultado negativo). O inverso ocorre quando o preço cai.',
    explanationWrong: {
      B: 'Um resultado negativo (pagar o ajuste) ocorreria para a posição comprada apenas se o preço tivesse CAÍDO, não subido.',
      C: 'O ajuste diário nunca é automaticamente zero quando há variação de preço — ele reflete exatamente a diferença entre os preços de ajuste de dois dias consecutivos.',
      D: 'O resultado do ajuste diário para o comprado é determinado pela variação de preço do próprio contrato, de forma simétrica e previsível — não depende de uma característica arbitrária da contraparte.',
    },
    examTip:
      'Regra de bolso: preço sobe → comprado ganha, vendido paga. Preço cai → comprado paga, vendido ganha. É simétrico e diário.',
    commonTrap:
      'É fácil inverter "sobe" com "desce" na hora da prova — sempre relacione com a lógica intuitiva: quem está comprado (esperando alta) ganha quando o preço sobe.',
    ...SRC('3. Tipos de contratos de derivativos — Ajuste diário', '189'),
  },
  {
    topic: 'Contrato futuro',
    subtopic: 'Risco de base',
    difficulty: 'prova',
    statement: 'O "risco de base" em operações de hedge com contratos futuros refere-se a:',
    options: {
      A: 'O risco de a contraparte não cumprir suas obrigações contratuais.',
      B: 'A variação entre o preço do ativo subjacente no mercado à vista (spot) e o preço do mesmo ativo no contrato futuro, que pode oscilar até a convergência no vencimento.',
      C: 'O risco de o formador de mercado não manter ofertas contínuas.',
      D: 'A impossibilidade de encerrar a posição antes do vencimento.',
    },
    correct: 'B',
    explanation:
      'O risco de base refere-se à diferença entre o preço spot e o preço futuro de uma mercadoria (a "base"), que pode variar ao longo do tempo devido a fatores como oferta/demanda, custos de transporte e armazenagem, mas tende a se aproximar de zero à medida que o contrato se aproxima do vencimento, quando os preços à vista e futuro convergem.',
    explanationWrong: {
      A: 'Esse é o risco de crédito/contraparte, distinto do risco de base, que trata da diferença entre preços à vista e futuro, não do inadimplemento de uma parte.',
      C: 'A atuação do formador de mercado está relacionada a liquidez, não ao conceito de base entre preços spot e futuro.',
      D: 'A impossibilidade de encerrar a posição é uma característica dos contratos a termo (não intercambiáveis), sem relação com o conceito de risco de base.',
    },
    examTip:
      'Base = preço à vista menos preço futuro. O risco de base é a incerteza sobre essa diferença até a convergência no vencimento — fundamental em hedge de commodities regionais.',
    commonTrap:
      'Não confunda "risco de base" (diferença de preços entre praças/momentos) com "risco de crédito" (inadimplência da contraparte) — são riscos de natureza totalmente diferente.',
    ...SRC('3. Tipos de contratos de derivativos — Base', '192-193'),
  },
  {
    topic: 'Contrato futuro',
    subtopic: 'Margem de garantia',
    difficulty: 'medio',
    statement: 'A margem de garantia, requerida pela câmara de compensação nos contratos futuros, tem como principal função:',
    options: {
      A: 'Remunerar o formador de mercado pelos seus serviços.',
      B: 'Assegurar o cumprimento das obrigações assumidas pelos participantes no mercado futuro.',
      C: 'Substituir o mecanismo de ajuste diário.',
      D: 'Eliminar totalmente a necessidade de contraparte central.',
    },
    correct: 'B',
    explanation:
      'A margem de garantia requerida pela câmara de compensação é necessária para a cobertura do compromisso assumido pelos participantes no mercado futuro, protegendo o sistema contra o risco de inadimplência diante das expectativas de oferta e demanda que alteram os preços diariamente.',
    explanationWrong: {
      A: 'A margem de garantia não é uma remuneração ao formador de mercado — é uma garantia depositada pelos próprios participantes das operações futuras.',
      C: 'Margem de garantia e ajuste diário são mecanismos complementares (não substitutos): o ajuste diário liquida ganhos/perdas, e a margem cobre o risco remanescente.',
      D: 'A margem de garantia é depositada justamente PORQUE existe uma contraparte central (a câmara) que precisa se proteger contra o risco de inadimplência — ela reforça, não elimina, essa estrutura.',
    },
    examTip:
      'Margem de garantia + ajuste diário = a dupla que torna o mercado futuro mais seguro (e alavancável) que o mercado a termo.',
    commonTrap:
      'A margem de garantia é depositada no início/ao longo da operação como colateral; o ajuste diário é o fluxo de caixa diário de ganhos/perdas — são conceitos complementares, não a mesma coisa.',
    ...SRC('3. Tipos de contratos de derivativos — Margem de garantia', '192'),
  },

  // ---------- Contrato de opções ----------
  {
    topic: 'Contrato de opções',
    subtopic: 'Titular x lançador',
    difficulty: 'facil',
    statement: 'Em um contrato de opções, o titular é:',
    options: {
      A: 'Quem vende a opção e assume a obrigação de comprar ou vender o ativo-objeto.',
      B: 'Quem compra a opção, adquirindo o direito de comprar ou vender o ativo-objeto.',
      C: 'Sempre a B3, na qualidade de contraparte central.',
      D: 'A instituição responsável por calcular o preço de exercício.',
    },
    correct: 'B',
    explanation:
      'O titular é o comprador da opção, aquele que adquire os direitos de comprar (no caso de uma call) ou de vender (no caso de uma put) o ativo-objeto, pagando um prêmio ao lançador por esse direito.',
    explanationWrong: {
      A: 'A descrição de quem vende a opção e assume a obrigação corresponde ao lançador, não ao titular.',
      C: 'A B3 pode atuar como contraparte central da liquidação, mas isso é distinto do conceito de "titular" de uma opção específica.',
      D: 'O preço de exercício (strike) é definido nas especificações do contrato, não calculado por uma instituição específica no momento da negociação.',
    },
    examTip:
      'Titular = COMPRA a opção = tem um DIREITO (não obrigação). Lançador = VENDE a opção = assume uma OBRIGAÇÃO caso seja exercido.',
    commonTrap:
      'Titular tem direito (pode ou não exercer); lançador tem obrigação (deve cumprir se o titular exercer) — essa assimetria é a essência do contrato de opções.',
    ...SRC('3. Tipos de contratos de derivativos — Contrato de opções', '195'),
  },
  {
    topic: 'Contrato de opções',
    subtopic: 'Call x put — risco',
    difficulty: 'dificil',
    statement: 'Sobre o perfil de risco do titular (comprador) de uma opção de compra (call), é correto afirmar que:',
    options: {
      A: 'Seu prejuízo é ilimitado, e seu lucro é limitado ao prêmio pago.',
      B: 'Seu prejuízo é limitado ao prêmio pago, e seu lucro é ilimitado (quanto mais o preço subir, maior o ganho).',
      C: 'Não há risco algum envolvido na compra de uma call.',
      D: 'Seu lucro é limitado ao preço de exercício, e seu prejuízo é ilimitado.',
    },
    correct: 'B',
    explanation:
      'O titular de uma call tem prejuízo limitado ao prêmio pago (é o máximo que pode perder, caso a opção não seja exercida), enquanto seus lucros são ilimitados, pois, quanto mais o preço à vista subir além do preço de exercício mais o prêmio, maior será o ganho.',
    explanationWrong: {
      A: 'Inverte o perfil de risco: é o LANÇADOR (vendedor) da call a descoberto que tem prejuízo ilimitado; o titular (comprador) tem prejuízo limitado ao prêmio.',
      C: 'Há sim risco: o titular pode perder a totalidade do prêmio pago, caso a opção não seja exercida (vire pó).',
      D: 'O lucro do titular de uma call não é limitado ao preço de exercício — ao contrário, é ilimitado, crescendo conforme o ativo-objeto se valoriza além do strike.',
    },
    examTip:
      'Titular de call: risco limitado (prêmio), ganho ilimitado. É a posição "mais segura" em termos de perda máxima conhecida, mas com potencial de ganho aberto.',
    commonTrap:
      'A pegadinha clássica é achar que "quem compra tem mais risco" — na verdade, é justamente o titular (comprador) quem tem risco limitado; o risco ilimitado está do lado do lançador (vendedor) a descoberto.',
    ...SRC('3. Tipos de contratos de derivativos — Opção de compra (call)', '195-196'),
  },
  {
    topic: 'Contrato de opções',
    subtopic: 'Lançador de call a descoberto',
    difficulty: 'prova',
    statement: 'Um investidor lança (vende) uma opção de compra (call) a descoberto, sem possuir o ativo-objeto. Seu perfil de risco é:',
    options: {
      A: 'Prejuízo limitado ao valor do prêmio recebido.',
      B: 'Prejuízo ilimitado, pois não há limite de valorização para o ativo-objeto.',
      C: 'Nenhum risco, já que ele recebeu o prêmio antecipadamente.',
      D: 'Prejuízo limitado ao preço de exercício da opção.',
    },
    correct: 'B',
    explanation:
      'Na venda a descoberto de uma call (sem possuir o ativo-objeto), se o preço à vista subir e ultrapassar o preço de exercício mais o prêmio, o lançador poderá ser exercido e sofrer perdas crescentes. Como não existe limite teórico para a valorização de um ativo, essa operação apresenta prejuízo ilimitado para o lançador.',
    explanationWrong: {
      A: 'É o lucro do lançador que é limitado ao prêmio recebido (esse é o ganho máximo possível); o prejuízo, ao contrário, é ilimitado.',
      C: 'Há sim risco significativo: o prêmio recebido é o ganho máximo, mas o lançador pode ter perdas ilimitadas se o ativo se valorizar muito.',
      D: 'O prejuízo não é limitado ao preço de exercício — ele cresce conforme o preço do ativo sobe indefinidamente além de K + prêmio.',
    },
    examTip:
      'Lançador de call a descoberto = a posição de MAIOR risco entre as quatro combinações básicas de opções (titular/lançador de call/put) — perda potencialmente ilimitada.',
    commonTrap:
      'O Guia alerta explicitamente: "a venda de uma call sem ter o ativo-objeto pode ser muito perigosa" — é uma das operações de maior risco do capítulo, cobrada com frequência.',
    ...SRC('3. Tipos de contratos de derivativos — Opção de compra (call), vendedor', '196-197'),
  },
  {
    topic: 'Contrato de opções',
    subtopic: 'Modelos de exercício',
    difficulty: 'medio',
    statement: 'Uma opção que só pode ser exercida na própria data de vencimento acordada entre as partes segue o modelo:',
    options: {
      A: 'Americano.',
      B: 'Europeu.',
      C: 'Asiático.',
      D: 'Brasileiro.',
    },
    correct: 'B',
    explanation:
      'No modelo europeu, a opção somente pode ser exercida na data de vencimento acordada entre as partes. Já no modelo americano, o exercício pode ocorrer a qualquer momento até o vencimento (na B3, a partir do dia seguinte à abertura da posição).',
    explanationWrong: {
      A: 'No modelo americano, a opção pode ser exercida a qualquer momento até a data de vencimento — não apenas nela.',
      C: 'O modelo asiático refere-se a um direito baseado em uma média de preços durante um período, sem relação com a restrição de exercício apenas no vencimento.',
      D: 'O Guia não descreve um "modelo brasileiro" de opções — os três modelos apresentados são americano, europeu e asiático.',
    },
    examTip:
      'Americano = exerce QUANDO QUISER até o vencimento. Europeu = exerce SÓ no vencimento. Asiático = baseado em MÉDIA de preços do período.',
    commonTrap:
      'Nomes "americano" e "europeu" não indicam onde a opção é negociada — são apenas nomes convencionais para as regras de exercício, aplicáveis em qualquer mercado, inclusive no Brasil.',
    ...SRC('3. Tipos de contratos de derivativos — Modelos de opções', '195'),
  },
  {
    topic: 'Contrato de opções',
    subtopic: 'Valor intrínseco x extrínseco',
    difficulty: 'prova',
    statement:
      'Uma opção de compra (call) tem preço de exercício (K) de R$ 30,00, e o ativo-objeto está sendo negociado a R$ 32,00 (S). Desconsiderando a taxa de juros, o valor intrínseco dessa call é:',
    options: {
      A: 'R$ 0,00, pois a opção está fora do dinheiro.',
      B: 'R$ 2,00 (S − K).',
      C: 'R$ 30,00, equivalente ao preço de exercício.',
      D: 'R$ 62,00 (S + K).',
    },
    correct: 'B',
    explanation:
      'Para uma call, o valor intrínseco (sem considerar juros) é dado pela diferença entre o preço do ativo-objeto e o preço de exercício, quando S > K: R$ 32,00 − R$ 30,00 = R$ 2,00. Quando S ≤ K, o valor intrínseco da call é zero.',
    explanationWrong: {
      A: 'A opção estaria "zero" (valor intrínseco nulo) apenas se S ≤ K — aqui S (32) é maior que K (30), logo há valor intrínseco positivo de R$ 2,00.',
      C: 'O preço de exercício (K) não é, por si só, o valor intrínseco — este é a DIFERENÇA entre S e K, não o valor de K isoladamente.',
      D: 'Somar S e K não corresponde a nenhuma fórmula de valor intrínseco de opções — a fórmula para call é S − K (quando positivo).',
    },
    examTip:
      'Valor intrínseco de call = max(S − K, 0). Valor intrínseco de put = max(K − S, 0). O que exceder isso é valor extrínseco (juros + volatilidade).',
    commonTrap:
      'Não inverta a fórmula entre call e put: para call é "S menos K"; para put é "K menos S" — inverter gera resultado com sinal errado.',
    ...SRC('3. Tipos de contratos de derivativos — Formação do prêmio de opção', '198'),
  },
  {
    topic: 'Contrato de opções',
    subtopic: 'Volatilidade e prêmio',
    difficulty: 'medio',
    statement: 'O aumento da volatilidade do ativo-objeto tende a, mantidos os demais fatores constantes:',
    options: {
      A: 'Reduzir o prêmio tanto das calls quanto das puts.',
      B: 'Aumentar o prêmio tanto das calls quanto das puts.',
      C: 'Não ter nenhum efeito sobre o prêmio das opções.',
      D: 'Aumentar o prêmio das calls e reduzir o prêmio das puts.',
    },
    correct: 'B',
    explanation:
      'A volatilidade é uma das principais variáveis que influenciam o preço de uma opção. Quanto maior a volatilidade do ativo subjacente, maior será o prêmio das opções, tanto para as opções de compra (calls) quanto para as opções de venda (puts).',
    explanationWrong: {
      A: 'É o oposto: maior volatilidade AUMENTA o prêmio das opções, não reduz.',
      C: 'A volatilidade tem efeito direto e relevante sobre o valor extrínseco da opção, afetando seu prêmio.',
      D: 'O efeito da volatilidade é simétrico: aumenta o prêmio de calls E de puts, não apenas de um dos tipos.',
    },
    examTip:
      'Volatilidade ↑ → prêmio de opções ↑ (tanto call quanto put) — quanto mais incerteza, mais valioso é o "seguro" que a opção representa.',
    commonTrap:
      'Não pense que volatilidade só ajuda quem compra opções esperando alta (calls) — ela encarece TAMBÉM as puts, pois aumenta a chance de movimentos extremos em qualquer direção.',
    ...SRC('3. Tipos de contratos de derivativos — Formação do prêmio de opção', '199'),
  },

  // ---------- Swap ----------
  {
    topic: 'Contrato de swap',
    subtopic: 'Conceito e regulação',
    difficulty: 'medio',
    statement: 'No mercado brasileiro de swaps, segundo a Resolução CMN nº 3.505/2007:',
    options: {
      A: 'Não há qualquer obrigatoriedade de registro dos contratos.',
      B: 'Há obrigatoriedade de registro do contrato em sistemas de registro devidamente autorizados pelo Banco Central ou pela CVM.',
      C: 'Somente pessoas físicas podem participar de operações de swap.',
      D: 'É proibida a participação de instituições financeiras nas operações de swap.',
    },
    correct: 'B',
    explanation:
      'De acordo com a Resolução CMN nº 3.505/2007, existe a obrigatoriedade de registro do contrato de swap em sistemas de registro devidamente autorizados pelo Banco Central ou pela CVM.',
    explanationWrong: {
      A: 'Há sim obrigatoriedade de registro — essa é justamente a determinação central da Resolução CMN nº 3.505/2007 sobre o tema.',
      C: 'Participam do mercado de swap tanto instituições financeiras quanto seus clientes (outras instituições financeiras, pessoas físicas ou empresas não financeiras) — não é restrito a pessoas físicas.',
      D: 'Pelo contrário: de acordo com a legislação brasileira, as instituições financeiras devem estar sempre em uma das pontas da operação de swap.',
    },
    examTip:
      'Swap no Brasil: registro obrigatório (Res. CMN 3.505/2007) + instituição financeira sempre em uma das pontas do contrato.',
    commonTrap:
      'Não confunda "instituição financeira sempre em uma das pontas" com "só instituições financeiras participam" — clientes pessoa física/jurídica não financeira também podem estar na outra ponta.',
    ...SRC('3. Tipos de contratos de derivativos — Contrato de swap (Participantes do mercado de swap; Regulação)', '207-208'),
  },
  {
    topic: 'Contrato de swap',
    subtopic: 'Swap broker x swap dealer',
    difficulty: 'dificil',
    statement: 'No mercado de swaps, a diferença entre um "swap broker" e um "swap dealer" é que o swap dealer:',
    options: {
      A: 'Apenas identifica e localiza as duas partes que firmarão o compromisso, sem se posicionar no contrato.',
      B: 'Posiciona-se temporariamente em uma das pontas do swap, até encontrar outra instituição que assuma seu lugar como contraparte.',
      C: 'É o órgão regulador responsável por autorizar o registro dos contratos de swap.',
      D: 'É sinônimo de "swap broker", sem diferença prática entre os termos.',
    },
    correct: 'B',
    explanation:
      'O swap dealer é o agente que se posiciona em uma das pontas de um swap quando surge o interesse de uma instituição pelo contrato, até que ele mesmo encontre outra instituição que queira ser a contraparte em seu lugar. Já o swap broker apenas identifica e localiza as duas partes que firmam o compromisso, sem assumir posição própria no contrato.',
    explanationWrong: {
      A: 'A descrição de "apenas identificar e localizar as partes, sem se posicionar" corresponde ao swap BROKER, não ao swap dealer.',
      C: 'Nem o swap broker nem o swap dealer são órgãos reguladores — são agentes de mercado que atuam na intermediação/formação de operações de swap.',
      D: 'Os termos não são sinônimos: o broker apenas intermedia (sem posição própria); o dealer assume posição temporária até repassá-la a outra contraparte.',
    },
    examTip:
      'Broker = só conecta as partes (intermediário puro). Dealer = "segura a ponta" temporariamente até achar quem assuma seu lugar.',
    commonTrap:
      'A prova pode trocar os papéis de broker e dealer — associe "dealer" a "assumir posição" (deal = negócio próprio) e "broker" a "só conectar" (sem posição própria).',
    ...SRC('3. Tipos de contratos de derivativos — Contrato de swap (Swap broker e swap dealer)', '208'),
  },
  {
    topic: 'Contrato de swap',
    subtopic: 'Tipos de swap',
    difficulty: 'medio',
    statement: 'Um contrato em que duas instituições trocam fluxos associados à variação de cotações de commodities é classificado como:',
    options: {
      A: 'Swap de taxa de juro.',
      B: 'Swap de moeda.',
      C: 'Swap de commodities.',
      D: 'Swap de índices.',
    },
    correct: 'C',
    explanation:
      'O swap de commodities é o contrato por meio do qual duas instituições trocam fluxos associados à variação de cotações de commodities — como no exemplo do Guia de "swap variação do preço do café × taxa pré".',
    explanationWrong: {
      A: 'O swap de taxa de juro troca indexadores associados a ativos/passivos em que uma das variáveis é a taxa de juro (ex.: taxa DI x dólar), não a variação de cotação de commodities.',
      B: 'O swap de moeda troca o principal e os juros em uma moeda pelo principal mais juros em outra moeda (ex.: fixed-for-fixed dólar x libra), não é sobre commodities.',
      D: 'O swap de índices troca fluxos associados ao retorno de um índice de preços (IGP-M, IPC-Fipe) ou de ações (Ibovespa, IBrX 50), categoria distinta de commodities.',
    },
    examTip:
      'Identifique o tipo de swap pelo que está sendo trocado: juro→taxa de juro, moeda→duas moedas, commodity→cotação de mercadoria, índices→índice de preços/ações.',
    commonTrap:
      'Swap de índices (ex.: Ibovespa) pode parecer "financeiro" e ser confundido com swap de taxa de juro — mas são categorias distintas na classificação do Guia.',
    ...SRC('3. Tipos de contratos de derivativos — Contrato de swap (Tipos de swap)', '208-209'),
  },
];
