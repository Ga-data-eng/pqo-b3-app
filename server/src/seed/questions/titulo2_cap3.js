// Título II - Mercados de Bolsa e de Balcão
// Capítulo III - Mercado de renda fixa
// Fonte: Guia Por Dentro da B3, páginas 255-282.

export const chapterRef = { titleNumber: 'II', chapterNumber: 'III' };

export const topics = [
  'Conceitos básicos de renda fixa',
  'Negociação e liquidação',
  'Títulos públicos',
  'Títulos privados',
  'Duration e convexidade',
];

const SRC = (section, page) => ({
  source_title: 'Guia Por Dentro da B3',
  source_chapter: 'Título II, Capítulo III — Mercado de renda fixa',
  source_section: section,
  source_page: page,
});

export const questions = [
  // ---------- Conceitos básicos ----------
  {
    topic: 'Conceitos básicos de renda fixa',
    subtopic: 'Renda fixa x renda variável',
    difficulty: 'facil',
    statement: 'A principal diferença na formação de preço entre o mercado de renda variável e o de renda fixa é que, na renda fixa:',
    options: {
      A: 'O preço depende exclusivamente de oferta e demanda, como nas ações.',
      B: 'Os ativos obedecem a uma regra de prazo e rentabilidade previamente estabelecida, embora seu valor de mercado ainda possa variar conforme a taxa de juros vigente.',
      C: 'Não existe qualquer possibilidade de variação de valor ao longo do tempo.',
      D: 'O preço é definido exclusivamente pelo Banco Central.',
    },
    correct: 'B',
    explanation:
      'Na renda fixa, os ativos obedecem a uma regra de prazo e rentabilidade previamente estabelecida — diferentemente da renda variável, cujo preço depende diretamente de oferta e demanda. Ainda assim, o valor de mercado do título de renda fixa pode variar ao longo do tempo de acordo com a taxa de juros do momento.',
    explanationWrong: {
      A: 'É a renda variável (como as ações) que tem seu preço formado diretamente por oferta e demanda — não é essa a lógica da renda fixa.',
      C: 'Apesar da rentabilidade ser previamente estabelecida, o Guia é claro: o valor do título PODE variar ao longo do tempo conforme a taxa de juros (seu valor de mercado).',
      D: 'O Banco Central não define o preço de cada título de renda fixa individualmente — a formação de preço segue regras de rentabilidade contratadas e a dinâmica de mercado (taxa de juros).',
    },
    examTip:
      'Renda fixa: regra de rentabilidade CONHECIDA no contrato, mas o VALOR DE MERCADO ainda oscila com a taxa de juros — não é "preço travado" no sentido absoluto.',
    commonTrap:
      'É um erro comum achar que "renda fixa" significa "preço não varia nunca" — o que é fixo é a REGRA de rentabilidade contratada, não o valor de mercado do papel antes do vencimento.',
    ...SRC('2. Conceitos básicos', '256'),
  },

  // ---------- Negociação e liquidação ----------
  {
    topic: 'Negociação e liquidação',
    subtopic: 'Operações compromissadas',
    difficulty: 'medio',
    statement: 'Uma operação "repo" (compromissada) caracteriza-se por:',
    options: {
      A: 'Compra ou venda definitiva de títulos, sem qualquer compromisso futuro.',
      B: 'Venda de títulos com compromisso de recompra a prazo e preço previamente definidos.',
      C: 'Emissão de novos títulos diretamente pelo Tesouro Nacional.',
      D: 'Doação de títulos entre investidores sem contraprestação financeira.',
    },
    correct: 'B',
    explanation:
      'Operações compromissadas caracterizam-se pela venda não definitiva de títulos, com recompra a prazo e preço previamente definidos. O tipo "repo" é a venda de títulos com compromisso de recompra, e o "reverse repo" é a compra de títulos com compromisso de revenda.',
    explanationWrong: {
      A: 'Compra/venda sem qualquer compromisso futuro é a operação DEFINITIVA, o oposto da compromissada.',
      C: 'A emissão de novos títulos pelo Tesouro Nacional ocorre por meio de leilões (oferta pública), não por operações compromissadas entre investidores.',
      D: 'Operações compromissadas envolvem contraprestação financeira (compra/venda com preço definido) — não são doações.',
    },
    examTip:
      'Repo = venda com compromisso de RECOMPRA. Reverse repo = compra com compromisso de REVENDA. São a mesma operação vista de lados opostos.',
    commonTrap:
      'Não confunda "definitiva" (sem compromisso de retorno) com "compromissada" (com recompra/revenda combinada) — a prova pode descrever uma situação e pedir para classificar corretamente.',
    ...SRC('3. Negociação e liquidação de títulos de renda fixa', '257'),
  },
  {
    topic: 'Negociação e liquidação',
    subtopic: 'Preço de curva x preço de mercado',
    difficulty: 'dificil',
    statement: 'O "preço de curva" de um título de renda fixa é:',
    options: {
      A: 'O preço obtido diariamente por meio de marcação a mercado, refletindo o preço de fechamento negociado.',
      B: 'O preço calculado de acordo com a remuneração do título determinada no documento de emissão (escritura, termo de securitização ou regulamento), sem considerar oscilações de mercado.',
      C: 'Sempre idêntico ao preço de referência de fechamento (PRF).',
      D: 'Aplicável exclusivamente a ações negociadas em bolsa.',
    },
    correct: 'B',
    explanation:
      'O preço de curva é o preço de um ativo em determinada data, calculado de acordo com a remuneração do título (incluindo prêmio, se houver) determinada no documento que estabelece a relação entre investidores e emissores — escritura de emissão (debêntures), termo de securitização (CRI) ou regulamento (FIDC).',
    explanationWrong: {
      A: 'A descrição de preço obtido por marcação a mercado corresponde ao preço de MERCADO, não ao preço de curva.',
      C: 'Preço de curva e PRF são conceitos distintos: o de curva segue a remuneração contratual; o PRF resulta do processo de negociação transparente do mercado.',
      D: 'Preço de curva é um conceito de renda fixa (debêntures, CRI, FIDC), sem relação com ações — que são renda variável.',
    },
    examTip:
      'Preço de curva = "o que o contrato promete pagar", sem olhar o mercado. Preço de mercado/PRF = "o que o mercado está realmente pagando" agora.',
    commonTrap:
      'Um título pode ter preço de curva estável mesmo que seu preço de mercado oscile bastante — são metodologias de precificação diferentes, usadas para finalidades diferentes (ex.: marcação na curva x marcação a mercado).',
    ...SRC('3. Negociação e liquidação de títulos de renda fixa — Preço de curva; Preço de mercado', '257-258'),
  },

  // ---------- Títulos públicos ----------
  {
    topic: 'Títulos públicos',
    subtopic: 'Emissão de títulos públicos',
    difficulty: 'medio',
    statement: 'Desde a Lei de Responsabilidade Fiscal (2001), a emissão de títulos públicos federais é de responsabilidade exclusiva:',
    options: {
      A: 'Do Banco Central do Brasil.',
      B: 'Da Secretaria do Tesouro Nacional.',
      C: 'Da Comissão de Valores Mobiliários.',
      D: 'Da B3, na qualidade de central depositária.',
    },
    correct: 'B',
    explanation:
      'A partir da Lei de Responsabilidade Fiscal, em 2001, foi criada a vedação à emissão de títulos públicos por parte do Banco Central. Atualmente, a emissão de títulos públicos federais é de responsabilidade exclusiva da Secretaria do Tesouro Nacional.',
    explanationWrong: {
      A: 'Ao contrário: desde 2001, o Bacen está proibido de emitir títulos públicos — antes disso, era permitido, mas essa possibilidade foi vedada.',
      C: 'A CVM regula o mercado de valores mobiliários, mas não é ela quem emite títulos públicos federais — essa é atribuição do Tesouro Nacional.',
      D: 'A B3 atua na negociação, custódia e registro de títulos, mas não emite títulos públicos — a emissão é exclusiva do Tesouro Nacional.',
    },
    examTip:
      'Antes de 2001: Bacen podia emitir títulos públicos. Depois da LRF (2001): só o Tesouro Nacional pode emitir.',
    commonTrap:
      'Pegadinha histórica clássica: a prova pode testar se você sabe que o Bacen JÁ PÔDE emitir títulos públicos no passado, mas isso foi vedado pela Lei de Responsabilidade Fiscal.',
    ...SRC('4. Títulos públicos', '258'),
  },
  {
    topic: 'Títulos públicos',
    subtopic: 'LTN / Tesouro Prefixado',
    difficulty: 'medio',
    statement: 'O Tesouro Prefixado (LTN) caracteriza-se por:',
    options: {
      A: 'Pagamento de cupons semestrais e correção pela taxa Selic.',
      B: 'Rendimento prefixado definido pelo deságio sobre o valor nominal, sem pagamento de cupons intermediários — o investidor sabe exatamente quanto receberá no vencimento.',
      C: 'Correção do valor nominal pela variação do IPCA.',
      D: 'Rendimento pós-fixado atrelado à variação cambial.',
    },
    correct: 'B',
    explanation:
      'No Tesouro Prefixado (LTN), há apenas pagamento do principal no vencimento, sem pagamento de cupons (juros) intermediários, e o valor de resgate não sofre correção — o rendimento é definido pelo deságio sobre o valor nominal, e o investidor sabe exatamente o que receberá se ficar com o título até o vencimento.',
    explanationWrong: {
      A: 'Pagamento de cupons semestrais com correção pela Selic é característica de outros títulos (como a NTN-F, no caso dos cupons, ou a LFT, no caso da Selic) — não da LTN.',
      C: 'Correção pelo IPCA é característica da NTN-B (Tesouro IPCA+), não da LTN (que é prefixada, sem indexador de inflação).',
      D: 'Não há título público federal remunerado por variação cambial disponível atualmente — essa característica não se aplica à LTN.',
    },
    examTip:
      'LTN/Tesouro Prefixado = "sem surpresas": você sabe exatamente o valor final, sem cupom, sem indexador — só o deságio na compra.',
    commonTrap:
      'Não confunda LTN (sem cupom) com NTN-F (também prefixada, mas COM cupons semestrais) — ambas são prefixadas, mas a forma de pagamento é diferente.',
    ...SRC('4. Títulos públicos — Letra do Tesouro Nacional (LTN) ou Tesouro Prefixado', '260-261'),
  },
  {
    topic: 'Títulos públicos',
    subtopic: 'LFT / Tesouro Selic',
    difficulty: 'dificil',
    statement: 'Sobre a Letra Financeira do Tesouro (LFT) ou Tesouro Selic, é correto afirmar que:',
    options: {
      A: 'É negociada diretamente pelo seu valor nominal atualizado (VNA), sem uso de cotação.',
      B: 'É negociada por meio de uma cotação que representa um percentual do VNA, refletindo ágio ou deságio sobre o título.',
      C: 'Paga cupons semestrais fixos de 6% ao ano.',
      D: 'Tem seu valor nominal atualizado pela variação do IPCA.',
    },
    correct: 'B',
    explanation:
      'As negociações da LFT não são feitas diretamente pelo VNA, mas sim mediante uma cotação que representa um percentual do VNA, refletindo a taxa de ágio ou deságio desejada no título. O preço de negociação (PU) é obtido multiplicando a cotação (COT) pelo VNA.',
    explanationWrong: {
      A: 'É o oposto: a negociação NÃO é feita diretamente pelo VNA — usa-se uma cotação percentual sobre o VNA.',
      C: 'Pagamento de cupons semestrais de 6% ao ano é característica da NTN-B (Tesouro IPCA+ com Juros Semestrais), não da LFT, que não tem cupons.',
      D: 'A atualização pela Selic diária acumulada (não pelo IPCA) é a característica da LFT — a correção pelo IPCA é da NTN-B.',
    },
    examTip:
      'LFT: VNA atualizado pela Selic diária, mas negociada por uma COTAÇÃO (percentual do VNA), não pelo VNA puro.',
    commonTrap:
      'A prova pode testar se você sabe que a LFT "acompanha a Selic no VNA", mas "negocia por cotação" — dois conceitos que parecem redundantes, mas são etapas distintas do cálculo do preço.',
    ...SRC('4. Títulos públicos — Letra Financeira do Tesouro (LFT) ou Tesouro Selic', '261'),
  },
  {
    topic: 'Títulos públicos',
    subtopic: 'Modalidades de leilão',
    difficulty: 'prova',
    statement: 'Nos leilões de LFT (Tesouro Selic), o critério de apuração utilizado é o de:',
    options: {
      A: 'Preços múltiplos, em que cada proposta vencedora paga o preço que ofertou.',
      B: 'Preço único ou uniforme, em que todas as propostas vencedoras pagam o mesmo preço, correspondente ao preço de corte.',
      C: 'Leilão de troca, sem relação com preço de corte.',
      D: 'Leilão de compra (resgate antecipado).',
    },
    correct: 'B',
    explanation:
      'No critério de preço único ou uniforme (utilizado nos leilões de LFT e NTN-B), são aceitas todas as propostas com preço igual ou superior ao preço mínimo aceito ("preço de corte"), e um único preço — o mínimo aceito — é aplicado a todas as propostas ganhadoras.',
    explanationWrong: {
      A: 'Preços múltiplos (cada vencedor paga o preço de sua própria proposta) é o critério usado nos leilões de LTN e NTN-F, não de LFT.',
      C: 'Leilão de troca é uma MODALIDADE de leilão (gerenciamento de passivos), distinta do CRITÉRIO de apuração de preço (múltiplos ou único) usado nos leilões de venda.',
      D: 'Leilão de compra/resgate antecipado é outra modalidade de leilão (usada em situações excepcionais), não o critério de apuração de preço da LFT.',
    },
    examTip:
      'Preços múltiplos → LTN e NTN-F. Preço único/uniforme → LFT e NTN-B. Decore essa associação — é bem específica e cobrada.',
    commonTrap:
      'A prova pode trocar qual título usa qual critério — associe: títulos PREFIXADOS "puros" e com cupom fixo (LTN, NTN-F) usam múltiplos; os PÓS-FIXADOS (LFT, NTN-B) usam preço único.',
    ...SRC('4. Títulos públicos — Leilões de títulos públicos', '267'),
  },
  {
    topic: 'Títulos públicos',
    subtopic: 'Sistema de dealers',
    difficulty: 'dificil',
    statement: 'Sobre o sistema de dealers do Tesouro Nacional, é correto afirmar que:',
    options: {
      A: 'As instituições credenciadas (dealers) podem apresentar até sete propostas por vencimento ofertado, mais que as não dealers (até três).',
      B: 'O desempenho dos dealers é avaliado anualmente, sem possibilidade de substituição.',
      C: 'Somente corretoras podem ser credenciadas como dealers, nunca bancos.',
      D: 'Os dealers não participam do mercado secundário de títulos públicos, apenas do primário.',
    },
    correct: 'A',
    explanation:
      'As instituições dealers (credenciadas) podem participar com até sete propostas por vencimento ofertado, enquanto as instituições não dealers podem apresentar, no máximo, três propostas por vencimento. Atualmente, o Tesouro Nacional possui 12 dealers, dos quais nove são bancos e três são corretoras ou distribuidoras.',
    explanationWrong: {
      B: 'O desempenho dos dealers é avaliado a cada SEIS MESES (semestralmente), não anualmente — e as instituições com pior desempenho SÃO substituídas.',
      C: 'A maioria dos dealers são bancos (nove de doze, segundo o Guia) — corretoras/distribuidoras também podem ser credenciadas, mas não é exclusividade de nenhum dos dois tipos.',
      D: 'Os dealers atuam tanto nas emissões primárias de títulos públicos federais quanto na negociação no mercado secundário desses títulos — em ambos os mercados.',
    },
    examTip:
      'Dealers: até 7 propostas/vencimento. Não dealers: até 3. Avaliação a cada 6 meses, com substituição dos piores.',
    commonTrap:
      'Cuidado com o número de dealers atual (12, sendo 9 bancos e 3 corretoras/distribuidoras) — a prova pode testar essa composição específica citada pelo Guia.',
    ...SRC('4. Títulos públicos — Sistema de dealers do Tesouro Nacional', '267-268'),
  },

  // ---------- Títulos privados ----------
  {
    topic: 'Títulos privados',
    subtopic: 'CDB x RDB',
    difficulty: 'medio',
    statement: 'A principal diferença entre um CDB e um RDB é que o RDB:',
    options: {
      A: 'Pode ser negociado livremente no mercado secundário, ao contrário do CDB.',
      B: 'É intransferível e não permite resgate antecipado, não sendo passível de negociação no mercado secundário.',
      C: 'É emitido exclusivamente por instituições não financeiras.',
      D: 'Não é registrado eletronicamente na B3.',
    },
    correct: 'B',
    explanation:
      'A diferença entre CDB e RDB é que o RDB é intransferível e não permite resgate antecipado, ou seja, não é passível de negociação no mercado secundário — diferentemente do CDB, que pode ser negociado.',
    explanationWrong: {
      A: 'É o oposto: é o CDB (não o RDB) que pode ser negociado no mercado secundário — o RDB é intransferível.',
      C: 'Tanto CDB quanto RDB são emitidos por bancos comerciais e múltiplos (instituições financeiras), não por instituições não financeiras.',
      D: 'Ambos, CDB e RDB, são registrados eletronicamente na B3, segundo o Guia.',
    },
    examTip:
      'RDB = "Recibo", não "Certificado" — por isso não circula: fica preso ao titular original, sem negociação secundária nem resgate antecipado.',
    commonTrap:
      'CDB e RDB são frequentemente tratados como sinônimos no dia a dia, mas têm uma diferença regulatória importante: liquidez no mercado secundário (CDB tem, RDB não tem).',
    ...SRC('5. Títulos privados — Certificados de Depósito Bancário (CDB) e recibos de depósitos bancários (RDB)', '269'),
  },
  {
    topic: 'Títulos privados',
    subtopic: 'LCI e LCA — benefícios',
    difficulty: 'medio',
    statement: 'Um investidor pessoa física que aplica em LCI ou LCA tem, entre outros benefícios:',
    options: {
      A: 'Isenção de Imposto de Renda e cobertura pelo Fundo Garantidor de Créditos (FGC).',
      B: 'Garantia do Tesouro Nacional contra qualquer perda.',
      C: 'Direito a voto em assembleias da instituição emissora.',
      D: 'Impossibilidade de negociação no mercado secundário em qualquer hipótese.',
    },
    correct: 'A',
    explanation:
      'Tanto a LCI quanto a LCA contam com isenção de Imposto de Renda para pessoa física e são cobertas pelo Fundo Garantidor de Crédito (FGC), características que as tornam bastante procuradas por esse público.',
    explanationWrong: {
      B: 'A proteção desses títulos vem do FGC (até o limite de garantia), não de uma garantia direta do Tesouro Nacional.',
      C: 'LCI e LCA são títulos de renda fixa (dívida), sem qualquer relação com participação societária ou direito a voto, que são características de ações (renda variável).',
      D: 'Embora não possam ser resgatadas a qualquer momento antes do prazo mínimo, é possível negociar a LCI no mercado secundário, segundo o Guia.',
    },
    examTip:
      'LCI e LCA: gêmeas em benefícios — isentas de IR para PF + cobertas pelo FGC. A diferença está no lastro (imobiliário x agronegócio).',
    commonTrap:
      'Não pense que "isento de IR" significa "sem qualquer risco" — o risco de crédito da instituição emissora ainda existe, mitigado (não eliminado) pela cobertura do FGC até o limite de garantia.',
    ...SRC('5. Títulos privados — Letra de Crédito Imobiliário (LCI); Letra de Crédito do Agronegócio (LCA)', '269-271'),
  },
  {
    topic: 'Títulos privados',
    subtopic: 'Letra Financeira (LF)',
    difficulty: 'dificil',
    statement: 'A Letra Financeira (LF), regulamentada pela Resolução CMN nº 5.007/2022, tem como característica:',
    options: {
      A: 'Prazo mínimo de dois anos, vedado o resgate total ou parcial antes do vencimento pactuado.',
      B: 'Cobertura integral pelo Fundo Garantidor de Créditos (FGC).',
      C: 'Prazo máximo de 180 dias.',
      D: 'Permissão de emissão com cláusula de variação cambial.',
    },
    correct: 'A',
    explanation:
      'A Letra Financeira é classificada como título de longo prazo, com prazo mínimo de dois anos, sendo vedado o resgate total ou parcial antes do vencimento pactuado.',
    explanationWrong: {
      B: 'O Guia é explícito: as Letras Financeiras NÃO são garantidas pelo Fundo Garantidor de Créditos (FGC).',
      C: 'O prazo mínimo é de dois ANOS (não 180 dias) — 180 dias é o intervalo mínimo entre pagamentos periódicos de rendimentos, não o prazo total do título.',
      D: 'É vedada a emissão de Letra Financeira com cláusula de variação cambial — pode ter taxa prefixada, combinada ou não com taxas flutuantes.',
    },
    examTip:
      'LF: prazo mínimo 2 anos, sem resgate antecipado, SEM garantia do FGC, sem variação cambial. É um título de longo prazo "travado".',
    commonTrap:
      'A ausência de cobertura do FGC na Letra Financeira é uma pegadinha clássica — diferente de CDB, LCI e LCA, que têm essa proteção.',
    ...SRC('5. Títulos privados — Letra financeira (LF)', '270'),
  },
  {
    topic: 'Títulos privados',
    subtopic: 'Debêntures — espécies de garantia',
    difficulty: 'dificil',
    statement: 'Uma debênture quirografária caracteriza-se por:',
    options: {
      A: 'Não oferecer ao investidor nenhum privilégio sobre o ativo da companhia emissora, concorrendo em igualdade com os demais credores em caso de falência.',
      B: 'Ser garantida por bens específicos da companhia, sob a forma de hipoteca ou penhor.',
      C: 'Ter preferência sobre todos os demais credores em caso de liquidação da companhia.',
      D: 'Poder ser convertida obrigatoriamente em ações da companhia emissora.',
    },
    correct: 'A',
    explanation:
      'A debênture quirografária não oferece ao investidor nenhum tipo de privilégio sobre o ativo da companhia emissora, concorrendo em igualdade de condições com os demais credores em caso de falência.',
    explanationWrong: {
      B: 'A garantia por bens específicos (hipoteca, penhor, anticrese) caracteriza a debênture com GARANTIA REAL, não a quirografária.',
      C: 'Ter preferência sobre os demais credores é o oposto da debênture quirografária — é justamente a ausência de privilégio que a caracteriza. A que tem MENOS preferência (nem sobre acionistas) é a subordinada.',
      D: 'A conversão obrigatória em ações caracteriza uma debênture CONVERSÍVEL, uma espécie distinta — a quirografária refere-se ao tipo de garantia, não à conversibilidade.',
    },
    examTip:
      'Ranking de garantia das debêntures (do mais forte ao mais fraco): garantia real > garantia flutuante > quirografária > subordinada.',
    commonTrap:
      'Não confunda "tipo" de debênture (simples, conversível, permutável) com "espécie de garantia" (real, flutuante, quirografária, subordinada) — são duas classificações independentes.',
    ...SRC('5. Títulos privados — Debêntures', '272-273'),
  },
  {
    topic: 'Títulos privados',
    subtopic: 'CRI performado x não performado',
    difficulty: 'prova',
    statement: 'A diferença entre um CRI Performado e um CRI Não Performado é que o Performado:',
    options: {
      A: 'Tem como lastro direitos de crédito garantidos por imóveis que já possuem certidão de habite-se.',
      B: 'É emitido exclusivamente por bancos comerciais.',
      C: 'Não pode ser negociado no mercado secundário.',
      D: 'É isento de qualquer forma de garantia imobiliária.',
    },
    correct: 'A',
    explanation:
      'O CRI Performado se caracteriza por ter como lastro direitos de crédito garantidos por imóveis que já possuem certidão de habite-se (ou seja, já concluídos), enquanto o CRI Não Performado tem como lastro direitos de crédito garantidos por imóveis ainda não concluídos.',
    explanationWrong: {
      B: 'O CRI é emitido por companhias securitizadoras, não por bancos comerciais.',
      C: 'Não há essa restrição de negociação específica associada ao termo "performado" — a diferença está na condição do imóvel (concluído ou não), não na negociabilidade.',
      D: 'O CRI, seja performado ou não, tem como lastro créditos imobiliários — a garantia imobiliária é justamente a característica central do título.',
    },
    examTip:
      '"Performado" = imóvel PRONTO (com habite-se). "Não performado" = imóvel AINDA EM OBRAS.',
    commonTrap:
      'O termo "performado" pode soar técnico e confuso — associe-o simplesmente a "obra concluída" (performada = já realizada/entregue).',
    ...SRC('5. Títulos privados — Certificado de recebíveis imobiliários (CRI)', '273-274'),
  },
  {
    topic: 'Títulos privados',
    subtopic: 'CPR Física x Financeira',
    difficulty: 'medio',
    statement: 'A Cédula de Produto Rural (CPR) na modalidade "CPR Financeira" caracteriza-se por:',
    options: {
      A: 'Obrigação de entrega física do produto rural na data de vencimento.',
      B: 'Liquidação financeira do compromisso assumido, sem entrega física do produto.',
      C: 'Ser emitida exclusivamente por instituições financeiras.',
      D: 'Não poder ser emitida por cooperativas de produtores.',
    },
    correct: 'B',
    explanation:
      'A CPR Financeira é utilizada quando o emitente pretende liquidar financeiramente o compromisso assumido (e o comprador tem esse mesmo interesse), diferentemente da CPR Física, que envolve a obrigação de entrega do produto rural.',
    explanationWrong: {
      A: 'A obrigação de entrega física caracteriza a CPR FÍSICA, não a financeira, que é justamente o oposto.',
      C: 'A CPR pode ser emitida somente por produtores rurais, suas associações e cooperativas — não por instituições financeiras.',
      D: 'Cooperativas de produtores rurais podem, sim, emitir CPR — não há essa restrição no Guia.',
    },
    examTip:
      'CPR Física = entrega o produto. CPR Financeira = paga a diferença em dinheiro, sem entregar o produto. Só produtores/cooperativas emitem (nunca bancos).',
    commonTrap:
      'Não confunda emissor da CPR (produtor rural/cooperativa) com o CRA (emitido por companhias securitizadoras) — ambos são do agronegócio, mas com emissores bem diferentes.',
    ...SRC('5. Títulos privados — Cédula de Produto Rural (CPR)', '274-275'),
  },

  // ---------- Duration e convexidade ----------
  {
    topic: 'Duration e convexidade',
    subtopic: 'Conceito de duration',
    difficulty: 'medio',
    statement: 'A duration (ou duration de Macaulay) de um título de renda fixa representa:',
    options: {
      A: 'A taxa de juros nominal paga pelo título.',
      B: 'O prazo médio dos valores presentes dos fluxos de caixa do título, sendo maior a exposição ao risco quanto maior a duration.',
      C: 'O valor nominal do título na data de emissão.',
      D: 'A alíquota de Imposto de Renda aplicável ao título.',
    },
    correct: 'B',
    explanation:
      'A duration é o prazo médio dos valores presentes dos fluxos de caixa de um título ou carteira de renda fixa. Quanto maior a duration, maior é o período de tempo para o investidor recuperar o valor investido e maior é a exposição ao risco (sensibilidade a variações de taxa de juros).',
    explanationWrong: {
      A: 'A duration não é a taxa de juros do título — é uma medida de prazo médio ponderado dos fluxos de caixa, expressa em unidades de tempo.',
      C: 'O valor nominal é um dado fixo do título na emissão; a duration é uma métrica calculada a partir do fluxo de caixa e do prazo, não o valor nominal em si.',
      D: 'A duration não tem relação com alíquotas de Imposto de Renda — é um conceito de precificação/risco de renda fixa.',
    },
    examTip:
      'Duration = prazo médio ponderado dos fluxos de caixa. Título SEM pagamento de juros intermediários (ex.: LTN) tem duration = prazo até o vencimento.',
    commonTrap:
      'Não confunda duration com "prazo até o vencimento" de forma genérica — só são iguais quando não há pagamentos intermediários (cupons); com cupons, a duration é sempre menor que o prazo total.',
    ...SRC('6. Duration e convexidade — Conceito de duration', '278'),
  },
  {
    topic: 'Duration e convexidade',
    subtopic: 'Duration modificada',
    difficulty: 'prova',
    statement:
      'Um título possui duration modificada de 1,7. Se a taxa de juros de mercado subir 1 ponto percentual, o preço desse título deverá:',
    options: {
      A: 'Aumentar aproximadamente 1,7%.',
      B: 'Reduzir aproximadamente 1,7%.',
      C: 'Permanecer inalterado.',
      D: 'Reduzir exatamente 17%.',
    },
    correct: 'B',
    explanation:
      'A duration modificada mede, em percentual, o efeito de uma alteração na taxa de juros sobre o preço do título. Uma duration modificada de 1,7 significa que, a cada elevação de 1% nos juros, o preço do título será reduzido em aproximadamente 1,7% (relação inversa entre taxa de juros e preço).',
    explanationWrong: {
      A: 'O preço do título de renda fixa se move de forma INVERSA à taxa de juros — quando os juros sobem, o preço cai, não aumenta.',
      C: 'A duration modificada existe justamente para medir uma variação esperada no preço — não é razoável esperar que o preço fique inalterado diante de uma alta de 1 ponto percentual nos juros.',
      D: 'O valor de 1,7 já é o percentual de variação esperado por 1 ponto percentual de variação da taxa — multiplicar por 10 (chegando a 17%) está incorreto.',
    },
    examTip:
      'Duration modificada = "sensibilidade": preço varia (aproximadamente) o percentual da duration modificada, na direção OPOSTA à variação da taxa de juros.',
    commonTrap:
      'Lembre-se sempre da relação inversa entre taxa de juros e preço de título de renda fixa — juros sobem, preço cai (e vice-versa) — antes de aplicar o percentual da duration modificada.',
    ...SRC('6. Duration e convexidade — Duration modificada', '278-279'),
  },
  {
    topic: 'Duration e convexidade',
    subtopic: 'Fatores determinantes da duration',
    difficulty: 'dificil',
    statement: 'Sobre os fatores que influenciam a duration de um título de renda fixa, é correto afirmar que:',
    options: {
      A: 'Quanto maior a taxa de cupom paga pelo título, maior será sua duration.',
      B: 'Quanto menor a maturidade do título, menor será sua duration.',
      C: 'A frequência de pagamento de cupons não tem qualquer efeito sobre a duration.',
      D: 'Quanto maior a amortização do principal, maior será a duration.',
    },
    correct: 'B',
    explanation:
      'A maturidade é diretamente relacionada com a duration: quanto menor a maturidade, menor será a duration. Já a taxa de cupom (juros) é inversamente relacionada: quanto MENOR o cupom, MAIOR a duration.',
    explanationWrong: {
      A: 'É o oposto: quanto maior a taxa de cupom, MENOR será a duration (relação inversa) — cupons maiores devolvem valor ao investidor mais cedo, reduzindo o prazo médio ponderado.',
      C: 'A frequência de pagamento de cupons TEM efeito: considerando dois títulos com mesma taxa anual, o que pagar cupons com maior frequência terá MENOR duration.',
      D: 'A amortização do principal é inversamente relacionada com a duration: quanto MENOR a amortização, MAIOR será a duration (não o contrário).',
    },
    examTip:
      'Maturidade ↑ duration ↑ (direta). Cupom ↑ duration ↓ (inversa). Amortização ↑ duration ↓ (inversa). Frequência de pagamento ↑ duration ↓.',
    commonTrap:
      'Apenas a maturidade tem relação DIRETA com a duration — todos os demais fatores (cupom, amortização, frequência de pagamento) têm relação INVERSA. É a pegadinha central desse tópico.',
    ...SRC('6. Duration e convexidade — Fatores determinantes da duration', '279'),
  },
  {
    topic: 'Duration e convexidade',
    subtopic: 'Convexidade',
    difficulty: 'prova',
    statement: 'Entre dois títulos de mesma duration, mas com convexidades diferentes, é correto afirmar que:',
    options: {
      A: 'O título menos convexo sempre apresentará preço mais elevado.',
      B: 'O título mais convexo sempre apresentará preço mais elevado, e sofrerá menor redução de preço diante de elevações nas taxas de juros.',
      C: 'A convexidade não influencia o preço do título em nenhuma circunstância.',
      D: 'Ambos os títulos terão exatamente o mesmo comportamento de preço, independentemente da convexidade.',
    },
    correct: 'B',
    explanation:
      'Segundo as propriedades da convexidade descritas no Guia: títulos mais convexos, de mesma duration, sempre apresentarão preços mais elevados do que títulos menos convexos. Além disso, elevações nas taxas de juros resultam em menores reduções de preço (e reduções nas taxas resultam em maiores elevações de preço) em títulos com maior convexidade.',
    explanationWrong: {
      A: 'É o oposto: entre títulos de mesma duration, é o MAIS convexo (não o menos) que apresenta preço mais elevado.',
      C: 'A convexidade tem influência direta e relevante no comportamento do preço diante de variações nas taxas de juros — não é irrelevante.',
      D: 'Títulos de mesma duration podem ter comportamentos de preço diferentes justamente por causa de convexidades distintas — a convexidade capta o efeito de "segunda ordem" que a duration (linear) não captura sozinha.',
    },
    examTip:
      'Maior convexidade = "melhor dos dois mundos": perde menos quando os juros sobem e ganha mais quando os juros caem, para a mesma duration.',
    commonTrap:
      'A duration assume uma relação linear entre preço e taxa de juros, mas a relação real é curva — a convexidade corrige essa aproximação, sendo sempre vantajosa (maior convexidade é sempre preferível, a igual duration).',
    ...SRC('6. Duration e convexidade — Convexidade', '280'),
  },
];
