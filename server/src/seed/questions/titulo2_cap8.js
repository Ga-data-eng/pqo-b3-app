// Título II - Mercados de Bolsa e de Balcão
// Capítulo VIII - Tributação do mercado financeiro
// Fonte: Guia Por Dentro da B3, páginas 366-400.

export const chapterRef = { titleNumber: 'II', chapterNumber: 'VIII' };

export const topics = [
  'Tributação de renda fixa',
  'Tributação de fundos de investimento',
  'Tributação de renda variável',
  'IOF',
  'Investidores não residentes',
];

const SRC = (section, page) => ({
  source_title: 'Guia Por Dentro da B3',
  source_chapter: 'Título II, Capítulo VIII — Tributação do mercado financeiro',
  source_section: section,
  source_page: page,
});

export const questions = [
  // ---------- Renda fixa ----------
  {
    topic: 'Tributação de renda fixa',
    subtopic: 'Tabela regressiva',
    difficulty: 'medio',
    statement: 'Um investidor resgata uma aplicação de renda fixa 400 dias após a aplicação. A alíquota de Imposto de Renda aplicável sobre o rendimento é de:',
    options: {
      A: '22,50%.',
      B: '20,00%.',
      C: '17,50%.',
      D: '15,00%.',
    },
    correct: 'C',
    explanation:
      'A tabela regressiva de IR para renda fixa é: até 180 dias, 22,50%; de 181 a 360 dias, 20,00%; de 361 a 720 dias, 17,50%; acima de 721 dias, 15,00%. Um resgate em 400 dias está na faixa "de 361 até 720 dias", portanto a alíquota é 17,50%.',
    explanationWrong: {
      A: '22,50% aplica-se a resgates em até 180 dias — muito abaixo dos 400 dias do enunciado.',
      B: '20,00% aplica-se à faixa de 181 a 360 dias — 400 dias já ultrapassa esse limite.',
      D: '15,00% aplica-se apenas a partir de 721 dias — 400 dias ainda não atinge essa faixa mais longa.',
    },
    examTip:
      'Tabela regressiva de renda fixa: ≤180d=22,5% | 181-360d=20% | 361-720d=17,5% | >720d=15%. Quanto mais tempo, menor o imposto — incentivo a permanecer investido.',
    commonTrap:
      'A prova adora pedir para posicionar um prazo específico (como 400 dias) dentro da faixa correta da tabela regressiva — preste atenção nos limites exatos de cada faixa.',
    ...SRC('3. Tributação do mercado de renda fixa — Alíquotas', '370'),
  },
  {
    topic: 'Tributação de renda fixa',
    subtopic: 'Isenções de renda fixa para pessoa física',
    difficulty: 'medio',
    statement: 'São isentos de Imposto de Renda para pessoa física, entre outros títulos de renda fixa:',
    options: {
      A: 'CDB e debêntures comuns.',
      B: 'LCI, LCA e CRI.',
      C: 'Letra Financeira (LF) e COE.',
      D: 'Fundos de investimento de curto prazo.',
    },
    correct: 'B',
    explanation:
      'São isentos do imposto sobre a renda para pessoa física, entre outros: depósito de poupança, Letra Hipotecária (LH), CRI, LCI, CDA, WA, CDCA, LCA, CRA, CPR com liquidação financeira e LIG.',
    explanationWrong: {
      A: 'CDB e debêntures comuns NÃO estão na lista de isenção — são tributados pela tabela regressiva normal de renda fixa.',
      C: 'Letra Financeira e COE também não constam da lista de isenção — são tributados normalmente pela tabela regressiva.',
      D: 'Fundos de curto prazo não têm isenção — o próprio Guia afirma explicitamente "não há" isenção para eles, sujeitos sempre a, no mínimo, 20%.',
    },
    examTip:
      'Decore a lista de isentos: poupança, LH, CRI, LCI, CDA, WA, CDCA, LCA, CRA, CPR financeira, LIG. Todos ligados a imobiliário ou agronegócio (mais LIG e poupança).',
    commonTrap:
      'CDB, LF, COE e debêntures comuns NÃO são isentos — são frequentemente confundidos com LCI/LCA pela semelhança de nome/formato, mas não estão na lista de isenção.',
    ...SRC('3. Tributação do mercado de renda fixa — Isenções', '371'),
  },
  {
    topic: 'Tributação de renda fixa',
    subtopic: 'Debêntures incentivadas',
    difficulty: 'dificil',
    statement: 'Os rendimentos de debêntures incentivadas (relacionadas a projetos de investimento em infraestrutura) auferidos por pessoa física sujeitam-se a uma alíquota de Imposto de Renda de:',
    options: {
      A: '0%.',
      B: '15%.',
      C: '20%.',
      D: '22,50%.',
    },
    correct: 'A',
    explanation:
      'Os rendimentos de debêntures incentivadas (e CRIs relacionados a projetos de infraestrutura) sujeitam-se à incidência do imposto de renda exclusivamente na fonte, à alíquota de 0% quando auferidos por pessoa física.',
    explanationWrong: {
      B: '15% é a alíquota aplicável quando os rendimentos são auferidos por pessoa JURÍDICA tributada pelo lucro real, presumido ou arbitrado — não por pessoa física.',
      C: '20% não corresponde à alíquota das debêntures incentivadas para nenhum tipo de beneficiário nesse regime específico.',
      D: '22,50% é a alíquota máxima da tabela regressiva comum de renda fixa — não se aplica ao regime especial das debêntures incentivadas.',
    },
    examTip:
      'Debêntures incentivadas (infraestrutura): pessoa física = 0%. Pessoa jurídica (lucro real/presumido/arbitrado/isenta/Simples) = 15%.',
    commonTrap:
      'Não confunda a alíquota de debêntures incentivadas (0% PF / 15% PJ) com a tabela regressiva comum de renda fixa (22,5% a 15%, conforme prazo) — são regimes distintos.',
    ...SRC('3. Tributação do mercado de renda fixa — Situações especiais', '371-372'),
  },

  // ---------- Fundos de investimento ----------
  {
    topic: 'Tributação de fundos de investimento',
    subtopic: 'Fundos de curto x longo prazo',
    difficulty: 'medio',
    statement: 'Para fins de tributação, um fundo de investimento é classificado como "de longo prazo" quando sua carteira de títulos tem prazo médio:',
    options: {
      A: 'Igual ou inferior a 365 dias.',
      B: 'Igual ou superior a 365 dias.',
      C: 'Sempre superior a 720 dias, sem exceção.',
      D: 'Indefinido, a critério exclusivo do gestor.',
    },
    correct: 'B',
    explanation:
      'São considerados fundos de investimento de longo prazo, para fins de tributação, aqueles cuja carteira de títulos tenha prazo médio igual ou superior a 365 dias. Os de curto prazo têm prazo médio igual ou inferior a 365 dias.',
    explanationWrong: {
      A: 'Prazo médio igual ou inferior a 365 dias caracteriza o fundo de CURTO prazo, não o de longo prazo.',
      C: 'O limite de classificação é 365 dias, não 720 dias — este último é apenas um patamar dentro da tabela regressiva de alíquotas, não o critério de classificação curto/longo.',
      D: 'A classificação segue um critério objetivo (prazo médio da carteira), não é discricionária do gestor.',
    },
    examTip:
      'Fundo curto prazo: prazo médio da carteira ≤ 365 dias, alíquota mínima de come-cotas 20%. Fundo longo prazo: prazo médio ≥ 365 dias, alíquota mínima de come-cotas 15%.',
    commonTrap:
      'A classificação "curto x longo" do FUNDO (baseada no prazo médio da CARTEIRA) é diferente da tabela regressiva aplicada ao INVESTIDOR (baseada no tempo que ELE ficou aplicado) — não confunda os dois prazos.',
    ...SRC('6. Tributação de fundos de investimento — Fundos de investimento de longo prazo aberto', '379-381'),
  },
  {
    topic: 'Tributação de fundos de investimento',
    subtopic: 'Come-cotas',
    difficulty: 'prova',
    statement: 'No sistema de come-cotas, aplicado nos fundos de curto e longo prazo no último dia útil de maio e novembro, é usada:',
    options: {
      A: 'A maior alíquota possível da tabela regressiva, independentemente do prazo decorrido.',
      B: 'A menor alíquota de cada tipo de fundo (20% para curto prazo, 15% para longo prazo), independentemente do prazo decorrido da aplicação.',
      C: 'Uma alíquota fixa de 22,50% para todos os fundos, sem distinção.',
      D: 'Uma alíquota de 0%, com todo o imposto pago apenas no resgate final.',
    },
    correct: 'B',
    explanation:
      'No come-cotas, é usada a menor alíquota de cada tipo de fundo (20% para fundos de tributação de curto prazo e 15% para fundos de tributação de longo prazo), independentemente do prazo decorrido da aplicação. No momento do resgate, é feito o recolhimento da diferença, conforme a alíquota final devida pelo prazo real de permanência.',
    explanationWrong: {
      A: 'É o oposto: usa-se a MENOR alíquota possível de cada categoria no come-cotas, não a maior — o ajuste final ocorre no resgate.',
      C: '22,50% não é usada no come-cotas — essa é a alíquota máxima da tabela regressiva geral, aplicável apenas a resgates muito curtos (até 180 dias), fora da lógica do come-cotas.',
      D: 'O come-cotas cobra IR antecipadamente, a cada seis meses — não é uma alíquota zero com tudo postergado para o resgate.',
    },
    examTip:
      'Come-cotas usa sempre a MENOR alíquota da categoria (20% curto, 15% longo) como antecipação — no resgate, ajusta-se a diferença conforme o prazo real.',
    commonTrap:
      'O come-cotas é uma ANTECIPAÇÃO, não o cálculo final — o ajuste (para mais, conforme a tabela regressiva real) só acontece no momento do resgate efetivo.',
    ...SRC('6. Tributação de fundos de investimento — Fundos de investimento de curto e longo prazo', '379-381'),
  },
  {
    topic: 'Tributação de fundos de investimento',
    subtopic: 'Fundos de ações',
    difficulty: 'medio',
    statement: 'Fundos e clubes de investimento em ações (com no mínimo 67% da carteira em ações) têm alíquota de Imposto de Renda:',
    options: {
      A: 'Regressiva, conforme o prazo de permanência, como os fundos comuns.',
      B: 'Única de 15%, independentemente do prazo que o investidor permanecer com os recursos investidos.',
      C: 'De 0%, sempre isentos.',
      D: 'De 22,5%, fixa, sem exceção.',
    },
    correct: 'B',
    explanation:
      'Fundos e clubes de investimento em ações contam com alíquota única de 15% de Imposto de Renda, independentemente do prazo que o investidor permaneça com os recursos investidos, cobrada sobre o rendimento bruto no momento do resgate — não seguem o sistema de come-cotas.',
    explanationWrong: {
      A: 'Ao contrário dos fundos de renda fixa (curto/longo prazo), os fundos de ações NÃO seguem a tabela regressiva — usam alíquota única de 15%.',
      C: 'Não são isentos — há incidência de 15% sobre o rendimento no resgate ou distribuição.',
      D: '22,5% não é a alíquota dos fundos de ações — essa é a alíquota máxima da tabela regressiva de renda fixa, sistema que não se aplica aos fundos de ações.',
    },
    examTip:
      'Fundos de ações: SEMPRE 15%, sem come-cotas, sem tabela regressiva — é o regime mais simples entre os fundos.',
    commonTrap:
      'Diferente dos fundos de renda fixa, os fundos de AÇÕES não sofrem come-cotas semestral — o IR de 15% é cobrado de uma vez, no resgate ou na distribuição.',
    ...SRC('6. Tributação de fundos de investimento — Fundos e clubes de investimento em ações', '381-382'),
  },
  {
    topic: 'Tributação de fundos de investimento',
    subtopic: 'FII — condições de isenção',
    difficulty: 'prova',
    statement: 'Os rendimentos distribuídos por um Fundo de Investimento Imobiliário (FII) são isentos de IR para pessoa física quando, cumulativamente:',
    options: {
      A: 'O fundo tiver no mínimo 100 cotistas, o cotista pessoa física detiver no máximo 10% das cotas (ou direito a até 10% dos rendimentos), e uma mesma família não detiver mais de 30% das cotas.',
      B: 'O fundo tiver menos de 10 cotistas e as cotas não forem negociadas em bolsa.',
      C: 'O fundo for administrado exclusivamente por um banco múltiplo.',
      D: 'O investidor for pessoa jurídica com mais de 50% das cotas.',
    },
    correct: 'A',
    explanation:
      'Ficam isentos os rendimentos distribuídos por FII cujas cotas sejam negociadas exclusivamente em bolsa ou balcão organizado, se, cumulativamente: (I) o fundo possuir no mínimo 100 cotistas; (II) o cotista pessoa física for titular de até 10% das cotas ou tiver direito a até 10% dos rendimentos; e (III) os membros de uma família não possuírem mais de 30% das cotas.',
    explanationWrong: {
      B: 'É o oposto do exigido: o fundo precisa ter NO MÍNIMO 100 cotistas (não menos de 10) e as cotas devem ser negociadas em bolsa/balcão organizado, não fora desse ambiente.',
      C: 'Não há exigência sobre o tipo específico de administrador (banco múltiplo) para a isenção — as condições giram em torno de pulverização de cotistas e negociação em mercado organizado.',
      D: 'A regra de isenção é voltada a rendimentos de PESSOA FÍSICA — e a concentração excessiva (seja de pessoa física ou família) é justamente uma das condições que IMPEDE a isenção, não a garante.',
    },
    examTip:
      'FII isento: 100+ cotistas + PF com até 10% das cotas/rendimentos + família com até 30% das cotas + negociação em bolsa/balcão. As três condições devem ser cumpridas simultaneamente.',
    commonTrap:
      'Se qualquer uma das três condições falhar (poucos cotistas, concentração de um PF acima de 10%, ou família acima de 30%), a isenção cai por completo — são requisitos cumulativos, não alternativos.',
    ...SRC('6. Tributação de fundos de investimento — Fundos de investimento Imobiliário e Fiagro', '383-384'),
  },

  // ---------- Renda variável ----------
  {
    topic: 'Tributação de renda variável',
    subtopic: 'Isenção de R$ 20.000,00',
    difficulty: 'medio',
    statement: 'Uma pessoa física realiza, no mercado à vista de ações, um total de vendas de R$ 18.000,00 em um mês, sem qualquer operação de day trade. Nesse caso:',
    options: {
      A: 'O ganho líquido é isento de Imposto de Renda, pois o total de alienações do mês não excedeu R$ 20.000,00.',
      B: 'O ganho líquido é tributado normalmente à alíquota de 15%, sem qualquer isenção.',
      C: 'A isenção só valeria se o valor fosse superior a R$ 20.000,00.',
      D: 'A isenção se aplica também a operações com ETFs e BDRs no mesmo limite.',
    },
    correct: 'A',
    explanation:
      'Ficam isentos do Imposto de Renda os ganhos líquidos auferidos por pessoa física quando o total das alienações de AÇÕES no mercado à vista de bolsas de valores no mês não exceder R$ 20.000,00, exceto em operações de day trade — o caso do enunciado (R$ 18.000,00, sem day trade) se enquadra na isenção.',
    explanationWrong: {
      B: 'A isenção se aplica justamente quando o valor está dentro do limite (R$ 18.000 < R$ 20.000) — não há tributação nesse caso.',
      C: 'É o oposto: a isenção vale quando o total NÃO EXCEDE R$ 20.000,00 — valores acima desse limite é que perdem a isenção.',
      D: 'A isenção aplica-se exclusivamente a AÇÕES — não vale para outros valores mobiliários, como cotas de ETF ou BDR, mesmo dentro do mesmo limite de valor.',
    },
    examTip:
      'Isenção de R$ 20.000,00/mês: só para AÇÕES no mercado à vista, nunca para day trade, nunca para ETF/BDR/outros valores mobiliários.',
    commonTrap:
      'A isenção é frequentemente mal aplicada a ETFs e BDRs — o Guia é explícito que ela vale "exclusivamente" para ações.',
    ...SRC('7. Tributação de renda variável — Mercado à vista (Isenções)', '387'),
  },
  {
    topic: 'Tributação de renda variável',
    subtopic: 'Day trade — alíquotas',
    difficulty: 'medio',
    statement: 'As operações de day trade de renda variável sujeitam-se a:',
    options: {
      A: 'IRRF de 1% na fonte e IR mensal de 20% sobre os ganhos líquidos.',
      B: 'IRRF de 0,005% na fonte e IR mensal de 15%.',
      C: 'Isenção total de Imposto de Renda até R$ 20.000,00 por mês.',
      D: 'Alíquota única de 22,5%, sem retenção na fonte.',
    },
    correct: 'A',
    explanation:
      'Operações de day trade sujeitam-se a IRRF de 1% (na fonte, sobre o resultado positivo apurado na operação) e a IR mensal de 20% sobre os ganhos líquidos mensais auferidos em operações de day trade.',
    explanationWrong: {
      B: 'O IRRF de 0,005% aplica-se às operações comuns do mercado à vista/opções/futuro/termo (não day trade) sobre o valor da alienação — o day trade tem sua própria alíquota de retenção, de 1%.',
      C: 'A isenção de R$ 20.000,00 do mercado à vista é explicitamente EXCLUÍDA para operações de day trade — não se aplica a elas.',
      D: '22,5% não é a alíquota do day trade — o day trade tem regime próprio (1% na fonte + 20% mensal), distinto da tabela regressiva de renda fixa.',
    },
    examTip:
      'Day trade: IRRF 1% (na fonte, retido pelo intermediário) + IR mensal 20% (pago pelo contribuinte). Sem isenção de R$ 20 mil.',
    commonTrap:
      'Não confunda a alíquota de retenção na fonte do day trade (1%) com a do mercado à vista comum (0,005%) — são taxas de retenção bem diferentes para operações diferentes.',
    ...SRC('7. Tributação de renda variável — Operações de day trade', '392-393'),
  },
  {
    topic: 'Tributação de renda variável',
    subtopic: 'Compensação de perdas em day trade',
    difficulty: 'dificil',
    statement: 'As perdas mensais incorridas em operações de day trade:',
    options: {
      A: 'Podem ser compensadas livremente com ganhos de qualquer natureza, inclusive do mercado à vista comum.',
      B: 'Somente podem ser compensadas com ganhos auferidos em operações da mesma espécie (day trade).',
      C: 'Nunca podem ser compensadas, em nenhuma hipótese.',
      D: 'Podem ser compensadas com rendimentos de renda fixa.',
    },
    correct: 'B',
    explanation:
      'As perdas incorridas em operações de day trade somente poderão ser compensadas com ganhos auferidos em operações de mesma espécie (outras operações de day trade) — diferentemente das perdas em operações comuns do mercado à vista, opções, termo e futuro, que podem ser compensadas entre si.',
    explanationWrong: {
      A: 'É o oposto: as perdas de day trade são SEGREGADAS, compensáveis apenas com ganhos de outras operações de day trade — não podem se misturar livremente com outras modalidades.',
      C: 'Há sim possibilidade de compensação — mas restrita a operações da mesma espécie (day trade com day trade).',
      D: 'Day trade é renda variável; rendimentos de renda fixa seguem regime tributário totalmente diferente — não há compensação cruzada entre essas naturezas de rendimento.',
    },
    examTip:
      'Regra geral de renda variável: perdas em à vista/opções/termo/futuro se compensam ENTRE SI livremente. EXCEÇÃO: day trade só compensa com day trade.',
    commonTrap:
      'O day trade é a única modalidade "isolada" na compensação de perdas dentro da renda variável — todas as outras (à vista, opções, termo, futuro) formam um "balde" único compensável entre si.',
    ...SRC('7. Tributação de renda variável — Mercado à vista / Operações de day trade (Compensação de perdas)', '387, 393'),
  },
  {
    topic: 'Tributação de renda variável',
    subtopic: 'Dividendos x JCP',
    difficulty: 'medio',
    statement: 'Sobre a tributação de proventos pagos por ações, é correto afirmar que:',
    options: {
      A: 'Dividendos são isentos de IR; juros sobre capital próprio (JCP) sofrem retenção de IRRF de 15%.',
      B: 'Dividendos e JCP são igualmente isentos de IR.',
      C: 'Dividendos sofrem retenção de 15%; JCP é isento.',
      D: 'Ambos são tributados à alíquota de 22,5%.',
    },
    correct: 'A',
    explanation:
      'Os dividendos pagos pela empresa aos seus acionistas são isentos do recolhimento de IR. Já o pagamento de juros sobre capital próprio (JCP) está sujeito ao recolhimento do Imposto de Renda Retido na Fonte (IRRF) à alíquota de 15%.',
    explanationWrong: {
      B: 'JCP não é isento — apenas os dividendos têm essa isenção; o JCP sofre retenção de 15%.',
      C: 'Inverte a regra: são os dividendos que são isentos, e o JCP que sofre a retenção de 15% — não o contrário.',
      D: 'Nem dividendos (isentos) nem JCP (15%) são tributados a 22,5% — essa alíquota pertence à tabela regressiva de renda fixa, sem relação com proventos de ações.',
    },
    examTip:
      'Dividendo = isento. JCP = 15% na fonte. É uma diferença essencial entre as duas formas de remuneração ao acionista vistas no Capítulo I de Título II.',
    commonTrap:
      'Essa é uma conexão direta com o Capítulo I (eventos corporativos) — o Guia já havia explicado que o JCP é dedutível como despesa para a empresa; aqui reforça que ele também é tributado na pessoa física, diferente do dividendo.',
    ...SRC('7. Tributação de renda variável — Mercado à vista (Isenções)', '387'),
  },

  // ---------- IOF ----------
  {
    topic: 'IOF',
    subtopic: 'IOF regressivo em renda fixa',
    difficulty: 'dificil',
    statement: 'O IOF sobre operações de renda fixa e resgate de cotas de fundos incide:',
    options: {
      A: 'Sobre qualquer resgate, independentemente do prazo.',
      B: 'Apenas em resgates feitos em prazo inferior a 30 dias, com alíquota regressiva de até 96% do rendimento no 1º dia, chegando a 0% a partir do 30º dia.',
      C: 'Sempre à alíquota fixa de 15%, sem relação com o prazo.',
      D: 'Somente sobre operações de renda variável.',
    },
    correct: 'B',
    explanation:
      'O IOF incide sobre resgates feitos em período inferior a 30 dias, com alíquota regressiva sobre o rendimento — variando de 96% no 1º dia até 0% a partir do 30º dia (tabela regressiva do IOF, distinta da tabela regressiva do IR).',
    explanationWrong: {
      A: 'O IOF de renda fixa incide apenas nos resgates em prazo INFERIOR a 30 dias — resgates a partir do 30º dia não sofrem mais essa incidência (alíquota 0%).',
      C: '15% não é a lógica do IOF regressivo — a alíquota do IOF varia conforme o número de dias decorridos, de 96% a 0%, sempre limitada ao rendimento da operação.',
      D: 'O IOF sobre títulos/valores mobiliários incide sobre operações de renda FIXA e resgate de cotas de fundos — não é exclusivo de renda variável (aliás, o mercado de renda variável tem alíquota de IOF de 0%).',
    },
    examTip:
      'IOF regressivo: só incide se o resgate ocorrer em menos de 30 dias, começando em 96% (dia 1) e caindo até 0% (dia 30). É limitado ao valor do rendimento, nunca "come" o principal.',
    commonTrap:
      'Não confunda a tabela regressiva do IOF (96% a 0%, em dias, aplicável só nos primeiros 30 dias) com a tabela regressiva do IR (22,5% a 15%, em faixas de até 720+ dias) — são duas tabelas totalmente diferentes que "correm" ao mesmo tempo.',
    ...SRC('8. Outros impostos — IOF sobre títulos ou valores mobiliários', '395-396'),
  },
  {
    topic: 'IOF',
    subtopic: 'IOF sobre câmbio',
    difficulty: 'prova',
    statement: 'Segundo o Guia, o envio de recursos do exterior para o Brasil destinado a operações no mercado financeiro ou de capitais está sujeito, atualmente, a uma alíquota de IOF de:',
    options: {
      A: '0,38%.',
      B: '1,1%.',
      C: '6,38%.',
      D: '0%.',
    },
    correct: 'D',
    explanation:
      'Caso o envio de recursos do exterior para o Brasil tenha como destino operações no mercado financeiro ou de capitais, a alíquota de IOF atualmente é de 0%. A regra geral de câmbio (0,38%) aplica-se a outras finalidades, e a maioria das operações do mercado financeiro/capitais está sujeita à alíquota 0%.',
    explanationWrong: {
      A: '0,38% é a alíquota geral aplicável a qualquer envio de recursos do exterior para o Brasil, independentemente da titularidade — mas quando destinado ao mercado financeiro/capitais, cai para 0%.',
      B: '1,1% aplica-se a remessas para o exterior com mesma titularidade e a compras de moeda estrangeira em bancos/casas de câmbio — não ao envio de recursos ao mercado financeiro brasileiro.',
      C: '6,38% aplica-se a compras internacionais feitas com cartão — sem relação com investimentos no mercado financeiro.',
    },
    examTip:
      'IOF câmbio: regra geral 0,38%, MAS para recursos destinados ao mercado financeiro/capitais brasileiro, a alíquota cai para 0% — um forte incentivo a investimentos estrangeiros no país.',
    commonTrap:
      'O Guia destaca que "a maioria das operações [de câmbio ligadas a aplicações financeiras] está sujeita à alíquota 0%" — não assuma que toda operação de câmbio paga o percentual "padrão" de 0,38%.',
    ...SRC('8. Outros impostos — IOF sobre câmbio', '396-397'),
  },
  {
    topic: 'IOF',
    subtopic: 'IOF sobre derivativos',
    difficulty: 'dificil',
    statement: 'A alíquota de IOF aplicável aos derivativos de moeda estrangeira, segundo o Decreto nº 8.027/2013, é de:',
    options: {
      A: '0,38%.',
      B: '1%.',
      C: '0%.',
      D: '6,38%.',
    },
    correct: 'C',
    explanation:
      'A alíquota do IOF para derivativos de moeda estrangeira é de 0%, conforme o Decreto nº 8.027/2013. Derivativos de moeda estrangeira são os derivativos financeiros que, individualmente, resultam no aumento da exposição cambial vendida ou na redução da exposição cambial comprada.',
    explanationWrong: {
      A: '0,38% é a alíquota geral de câmbio à vista, não a alíquota específica aplicada aos derivativos de moeda estrangeira (que é 0%).',
      B: '1% não corresponde à alíquota de nenhuma das operações de IOF sobre câmbio/derivativos mencionadas pelo Guia nesse contexto.',
      D: '6,38% é a alíquota aplicável a compras internacionais com cartão — sem relação com derivativos de moeda estrangeira.',
    },
    examTip:
      'IOF sobre derivativos de moeda estrangeira = 0% (Decreto nº 8.027/2013) — mais um exemplo de alíquota zerada para instrumentos financeiros/de proteção.',
    commonTrap:
      'A alíquota zero em vários pontos do capítulo (derivativos cambiais, PIS/Cofins sobre hedge, maioria do câmbio para mercado financeiro) reflete uma política de incentivo — não assuma tributação alta "por padrão" nesses casos.',
    ...SRC('8. Outros impostos — IOF sobre derivativos de moeda estrangeira', '397'),
  },

  // ---------- Investidores não residentes ----------
  {
    topic: 'Investidores não residentes',
    subtopic: 'Regime geral x regime especial',
    difficulty: 'medio',
    statement: 'Investidores não residentes que realizam aplicações no mercado de renda fixa e renda variável, sob o regime geral, estão sujeitos a:',
    options: {
      A: 'Isenção total de qualquer tributação no Brasil.',
      B: 'As mesmas regras de tributação de Imposto de Renda previstas para os residentes ou domiciliados no país.',
      C: 'Tributação exclusivamente no país de origem do investidor, sem qualquer retenção no Brasil.',
      D: 'Uma alíquota única de 6,38%, independentemente do tipo de aplicação.',
    },
    correct: 'B',
    explanation:
      'Os investidores não residentes que realizam aplicações no mercado de renda fixa e renda variável, sob o regime geral, estão sujeitos às mesmas regras de tributação de Imposto de Renda previstas para os residentes ou domiciliados no país.',
    explanationWrong: {
      A: 'Não há isenção total automática — no regime geral, aplicam-se as mesmas regras dos residentes, que incluem diversas incidências de IR.',
      C: 'O Brasil pode reter tributos sobre rendimentos gerados no país, independentemente da tributação (ou não) no país de origem do investidor.',
      D: '6,38% é a alíquota de IOF para compras internacionais com cartão — sem relação com o regime geral de tributação de investidores não residentes.',
    },
    examTip:
      'Regime GERAL de não residente = "trate como se fosse residente", aplicando as mesmas regras de IR do investidor local.',
    commonTrap:
      'O regime ESPECIAL (Resolução Conjunta 13/2024 + Resolução CVM 13/2020) é que traz benefícios diferenciados — não confundir com o regime geral, que apenas replica as regras nacionais.',
    ...SRC('9. Tratamento de investidores não residentes — Aplicações sujeitas ao regime geral', '398'),
  },
  {
    topic: 'Investidores não residentes',
    subtopic: 'Regime especial — renda variável em bolsa',
    difficulty: 'prova',
    statement: 'Investidores não residentes (não domiciliados em paraísos fiscais), sob o regime especial, têm alíquota de Imposto de Renda de quanto sobre os ganhos de capital em operações realizadas em bolsas de valores, mercadorias e futuros?',
    options: {
      A: '15%, igual ao investidor residente.',
      B: '0%.',
      C: '20%, para operações de day trade.',
      D: '22,5%, alíquota máxima da tabela regressiva.',
    },
    correct: 'B',
    explanation:
      'Sob o regime especial, os investidores não residentes (não domiciliados em paraísos fiscais) têm alíquota de 0% sobre os ganhos de capital nas operações realizadas em bolsas de valores, de mercadorias, de futuros e assemelhadas — um benefício expressivo em relação ao investidor local (tributado a 15%).',
    explanationWrong: {
      A: '15% é a alíquota do investidor RESIDENTE no mercado à vista — o não residente sob regime especial tem tratamento diferenciado, com alíquota 0%.',
      C: '20% é a alíquota de day trade para investidor residente — não a regra do regime especial para não residentes em bolsa.',
      D: '22,5% é a alíquota máxima da tabela regressiva de renda fixa comum — sem relação com o benefício do regime especial de não residentes em bolsa.',
    },
    examTip:
      'Regime especial de não residente + operação em bolsa = alíquota ZERO — um dos maiores incentivos tributários do capítulo, criado para atrair capital estrangeiro à B3.',
    commonTrap:
      'Esse benefício NÃO se aplica a investidores domiciliados em paraísos fiscais — para esses, a regra do regime especial não vale, e a tributação segue outras normas (equiparação ao residente).',
    ...SRC('9. Tratamento de investidores não residentes — Imposto de Renda', '398-399'),
  },
];
