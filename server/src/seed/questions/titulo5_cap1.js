// Título V - Negociação
// Capítulo I - Mercados organizados
// Fonte: Guia Por Dentro da B3, páginas 484-505.

export const chapterRef = { titleNumber: 'V', chapterNumber: 'I' };

export const topics = [
  'Definição de mercados organizados',
  'Mercado de bolsa — renda variável e derivativos',
  'Mercado de opções',
  'Mercado a termo e operações de estratégias',
  'Mercado de balcão organizado e câmbio pronto',
];

const SRC = (section, page) => ({
  source_title: 'Guia Por Dentro da B3',
  source_chapter: 'Título V, Capítulo I — Mercados organizados',
  source_section: section,
  source_page: page,
});

export const questions = [
  // ---------- Definição ----------
  {
    topic: 'Definição de mercados organizados',
    subtopic: 'Conceito CVM',
    difficulty: 'medio',
    statement: 'Segundo a Resolução CVM nº 135/2022, mercado organizado de valores mobiliários é definido como:',
    options: {
      A: 'Exclusivamente o ambiente de negociação de títulos públicos federais.',
      B: 'Ambiente físico ou sistema eletrônico destinado à negociação ou ao registro de operações com valores mobiliários por um conjunto determinado de participantes.',
      C: 'Apenas as operações realizadas diretamente entre duas pessoas físicas, sem intermediação.',
      D: 'Um sistema exclusivo do Banco Central para controle cambial.',
    },
    correct: 'B',
    explanation:
      'Considera-se mercado organizado de valores mobiliários o "ambiente físico ou sistema eletrônico destinado à negociação ou ao registro de operações com valores mobiliários por um conjunto determinado de participantes, que atuam por conta própria ou de terceiros". Os mercados organizados são as bolsas de valores, de mercadorias e de futuros, e os mercados de balcão organizado.',
    explanationWrong: {
      A: 'Não é restrito a títulos públicos federais — abrange valores mobiliários de forma ampla, negociados em bolsa ou balcão organizado.',
      C: 'Mercado organizado pressupõe justamente um AMBIENTE ou SISTEMA com um conjunto determinado de participantes — não uma negociação direta e isolada entre duas pessoas sem qualquer estrutura.',
      D: 'Não é um sistema exclusivo do Bacen para câmbio — é um conceito da CVM aplicável a valores mobiliários em geral, incluindo bolsa e balcão organizado.',
    },
    examTip:
      'Mercado organizado = ambiente/sistema + participantes definidos + negociação ou registro de valores mobiliários. Duas modalidades: bolsa e balcão organizado.',
    commonTrap:
      'Não confunda "mercado organizado" (conceito amplo da CVM, que inclui bolsa E balcão organizado) com "mercado de bolsa" especificamente — bolsa é uma ESPÉCIE de mercado organizado, não sinônimo dele.',
    ...SRC('2. Definição de mercados organizados', '486'),
  },

  // ---------- Mercado de bolsa ----------
  {
    topic: 'Mercado de bolsa — renda variável e derivativos',
    subtopic: 'Requisitos para formador de mercado como contraparte',
    difficulty: 'prova',
    statement: 'Para que um mercado de bolsa permita a execução de negócios tendo como contraparte um formador de mercado, é necessário, entre outros requisitos:',
    options: {
      A: 'Que não haja qualquer limite entre os preços de compra e venda ofertados pelo formador de mercado.',
      B: 'Que a regulação da bolsa preveja limites máximos para a diferença entre os preços de compra e de venda ofertados pelo formador de mercado.',
      C: 'Que seja vedada a interferência de qualquer outra pessoa autorizada a operar no intervalo entre as ofertas.',
      D: 'Que o formador de mercado seja sempre uma pessoa física, nunca uma pessoa jurídica.',
    },
    correct: 'B',
    explanation:
      'Entre os requisitos para que o mercado de bolsa permita negócios tendo o formador de mercado como contraparte, está que a regulação da bolsa preveja limites máximos para a diferença (spread) entre os preços de compra e venda ofertados pelo formador de mercado, além de sua atuação ser regulada e fiscalizada, e ser admitida a interferência de outras pessoas autorizadas no intervalo entre as ofertas.',
    explanationWrong: {
      A: 'É o oposto: deve HAVER limite máximo para a diferença (spread) entre compra e venda — não pode ser ilimitado.',
      C: 'É o oposto: deve SER ADMITIDA a interferência de outras pessoas autorizadas a operar no intervalo entre as ofertas do formador de mercado, para a quantidade total do negócio.',
      D: 'O formador de mercado é, tipicamente, uma pessoa jurídica (corretora), como visto no Título II Capítulo I — não há essa exigência de ser pessoa física.',
    },
    examTip:
      'Formador de mercado como contraparte em bolsa: precisa de (1) regulação/fiscalização pela bolsa, (2) limite máximo de spread, (3) permitir interferência de terceiros no intervalo de preços.',
    commonTrap:
      'Esse conceito conecta diretamente com o formador de mercado visto no Título II — aqui aparecem as condições REGULATÓRIAS específicas para que ele atue como contraparte em mercado de bolsa.',
    ...SRC('3. Mercado de bolsa', '486-487'),
  },
  {
    topic: 'Mercado de bolsa — renda variável e derivativos',
    subtopic: 'Liquidação do mercado à vista de renda variável',
    difficulty: 'facil',
    statement: 'O mercado à vista de ativos de renda variável tem prazo de liquidação física e financeira fixado em:',
    options: {
      A: 'D+0.',
      B: 'D+1.',
      C: 'D+2.',
      D: 'D+3.',
    },
    correct: 'C',
    explanation:
      'O mercado à vista de renda variável é aquele em que se realizam operações de compra e venda de ações e demais ativos admitidos à negociação, com prazo de liquidação física e financeira (D+2) fixado nos regulamentos e procedimentos operacionais da Câmara da B3.',
    explanationWrong: {
      A: 'D+0 não é o prazo padrão de liquidação do mercado à vista de renda variável, que é D+2.',
      B: 'D+1 também não corresponde ao prazo padrão — o Guia especifica D+2 para esse mercado.',
      D: 'D+3 excede o prazo real de liquidação do mercado à vista de renda variável (D+2).',
    },
    examTip:
      'Mercado à vista de renda variável: liquidação em D+2 — mesmo prazo já mencionado no Título II, Capítulo I, para negociação de ações.',
    commonTrap:
      'D+2 é uma referência recorrente no Guia (câmbio pronto, mercado à vista de ações) — decore esse prazo como padrão em vários contextos.',
    ...SRC('3. Mercado de bolsa — Mercado à vista de ativos de renda variável', '487'),
  },
  {
    topic: 'Mercado de bolsa — renda variável e derivativos',
    subtopic: 'Recibo de subscrição',
    difficulty: 'dificil',
    statement: 'O recibo de subscrição, negociado no mercado à vista, é:',
    options: {
      A: 'Um título de dívida com juros prefixados.',
      B: 'Um registro que comprova que o direito de subscrever ativos foi exercido pelo titular, negociável até sua transformação em ações.',
      C: 'Sinônimo exato de "bônus de subscrição", sem qualquer diferença.',
      D: 'Um documento que não pode ser negociado em nenhuma hipótese.',
    },
    correct: 'B',
    explanation:
      'O direito de subscrição é o direito de preferência na compra de novas ações emitidas pela empresa. O recibo de subscrição é o registro que comprova que esse direito foi EXERCIDO pelo titular. Os recibos podem ser negociados no mercado à vista da B3 até sua transformação em ações, quando também são extintos.',
    explanationWrong: {
      A: 'O recibo de subscrição não é um título de dívida com juros — é um registro de exercício de direito de preferência, ligado à renda variável.',
      C: 'Recibo de subscrição e bônus de subscrição são conceitos distintos: o recibo comprova o EXERCÍCIO do direito de preferência; o bônus é um título negociável que CONFERE o direito de subscrever ações dentro de limites estatutários.',
      D: 'É o oposto: o recibo de subscrição PODE ser negociado no mercado à vista, até se transformar em ação.',
    },
    examTip:
      'Direito de subscrição = preferência de compra. Recibo de subscrição = comprovante de que o direito JÁ FOI exercido (negociável até virar ação). Bônus de subscrição = título separado que dá o direito de subscrever.',
    commonTrap:
      'Direito, recibo e bônus de subscrição são três conceitos próximos, mas distintos — a prova testa se você sabe diferenciar exercício (recibo) de possibilidade futura de exercício (direito/bônus).',
    ...SRC('3. Mercado de bolsa — Recibos, direitos e bônus de subscrição', '488'),
  },
  {
    topic: 'Mercado de bolsa — renda variável e derivativos',
    subtopic: 'Derivativos agropecuários — anonimato',
    difficulty: 'dificil',
    statement: 'Para os derivativos agropecuários negociados no mercado de bolsa, todas as ofertas e operações registradas no sistema de negociação são divulgadas:',
    options: {
      A: 'Com identificação completa do participante, sem qualquer restrição.',
      B: 'De forma anônima, sem identificação do código de negociação do participante.',
      C: 'Apenas para investidores institucionais, nunca para pessoas físicas.',
      D: 'Exclusivamente após o fechamento do mercado, no dia seguinte.',
    },
    correct: 'B',
    explanation:
      'Para os derivativos agropecuários, todas as ofertas e operações registradas no sistema de negociação são divulgadas de forma anônima na difusão de dados de mercado e na mensagem de execução (execution report), ou seja, sem identificação do código de negociação do participante — regra semelhante à aplicada ao mercado de câmbio.',
    explanationWrong: {
      A: 'É o oposto: a divulgação é ANÔNIMA, sem identificação do participante.',
      C: 'Não há essa restrição de divulgação apenas a institucionais — a regra de anonimato aplica-se à divulgação pública de dados de mercado em geral.',
      D: 'A divulgação anônima ocorre em tempo real, na difusão de dados de mercado — não é restrita ao dia seguinte após o fechamento.',
    },
    examTip:
      'Derivativos agropecuários = anonimato na divulgação (igual ao câmbio pronto, visto no Título II) — padrão que se repete em mercados sensíveis a estratégias de grandes players.',
    commonTrap:
      'O anonimato dos derivativos agropecuários é o mesmo padrão do mercado de câmbio pronto — a prova pode conectar os dois contextos (Título II e Título V) numa mesma pergunta.',
    ...SRC('3. Mercado de bolsa — Mercado de derivativos de bolsa (Contratos futuros)', '489'),
  },
  {
    topic: 'Mercado de bolsa — renda variável e derivativos',
    subtopic: 'Operação estruturada de rolagem',
    difficulty: 'dificil',
    statement: 'A operação estruturada de rolagem tem como característica:',
    options: {
      A: 'Representar sempre um novo contrato, distinto dos vencimentos originais.',
      B: 'Possibilitar a execução de compra e venda de dois vencimentos ao mesmo tempo, sem representar um novo contrato, mantendo as características contratuais inalteradas.',
      C: 'Ser aplicável exclusivamente a opções, nunca a contratos futuros.',
      D: 'Exigir o encerramento definitivo da posição do investidor, sem possibilidade de continuidade.',
    },
    correct: 'B',
    explanation:
      'A operação de rolagem não representa um novo contrato, mas um mecanismo que possibilita a execução de compra e venda de dois vencimentos ao mesmo tempo, mantendo as características dos contratos inalteradas — usada por investidores que desejam migrar posições para vencimentos mais longos ou operar diferenciais de preço entre vencimentos.',
    explanationWrong: {
      A: 'É o oposto: a operação de rolagem NÃO representa um novo contrato — é um mecanismo operacional sobre contratos já existentes.',
      C: 'A rolagem é aplicável a contratos futuros (mudança de vencimento), não é conceito restrito a opções.',
      D: 'A rolagem permite justamente a CONTINUIDADE da posição, migrando-a para outro vencimento, em vez de simplesmente encerrá-la.',
    },
    examTip:
      'Rolagem = "trocar de vencimento sem sair da posição" — compra e venda simultânea de dois vencimentos, sem criar um contrato novo.',
    commonTrap:
      'Não confunda rolagem (migração entre vencimentos do MESMO contrato) com encerramento de posição (saída definitiva) — são operações com propósitos opostos.',
    ...SRC('3. Mercado de bolsa — Operação estruturada', '489-490'),
  },
  {
    topic: 'Mercado de bolsa — renda variável e derivativos',
    subtopic: 'Forward rate agreement (FRC)',
    difficulty: 'prova',
    statement: 'O Forward Rate Agreement (FRC) da B3 é um produto estruturado que:',
    options: {
      A: 'Combina a negociação de dois contratos futuros de cupom cambial de naturezas opostas, expondo o investidor a um cupom cambial a termo.',
      B: 'É utilizado exclusivamente para negociação de ações no mercado à vista.',
      C: 'Elimina totalmente a necessidade de contratos futuros de DDI.',
      D: 'É uma modalidade de opção de compra sobre ouro.',
    },
    correct: 'A',
    explanation:
      'O FRC combina a negociação de dois contratos futuros de cupom cambial, com naturezas opostas, expondo o investidor a um cupom cambial a termo (com início em data futura), auxiliando investidores a negociar uma taxa de juro referenciada em dólar a termo sem risco de execução em livros de ofertas distintas.',
    explanationWrong: {
      B: 'O FRC é um produto de taxa de juro/cupom cambial, sem relação com negociação de ações no mercado à vista.',
      C: 'O FRC não elimina os contratos futuros de DDI — pelo contrário, ele é automaticamente transformado pelo sistema da B3 em duas operações de DDI (ponta curta e ponta longa).',
      D: 'FRC não é uma opção sobre ouro — é um produto estruturado ligado a cupom cambial (taxa de juro em dólar).',
    },
    examTip:
      'FRC = combina 2 contratos futuros de cupom cambial opostos → exposição a um "cupom cambial a termo". É automaticamente convertido em duas operações de DDI pelo sistema da B3.',
    commonTrap:
      'Apesar de ter livro de ofertas próprio, o FRC NÃO é considerado contrato para fins de posição em aberto — é transformado em outras operações de DDI (ponta curta/longa) pelo sistema.',
    ...SRC('3. Mercado de bolsa — Operação estruturada (Forward rate agreement)', '490'),
  },

  // ---------- Mercado de opções ----------
  {
    topic: 'Mercado de opções',
    subtopic: 'Estilo americano x europeu',
    difficulty: 'medio',
    statement: 'Os titulares de opção de estilo americano poderão exercê-la:',
    options: {
      A: 'Somente na data de vencimento.',
      B: 'A qualquer tempo, a partir do pregão seguinte ao de sua aquisição, até a data de seu vencimento.',
      C: 'Apenas em D+2 após a aquisição.',
      D: 'Somente mediante autorização prévia da CVM para cada exercício.',
    },
    correct: 'B',
    explanation:
      'Os titulares de opção de estilo americano poderão exercê-la a qualquer tempo, a partir do pregão seguinte ao de sua aquisição, até a data de seu vencimento. Já os titulares de opção de estilo europeu poderão exercê-la somente na data de vencimento.',
    explanationWrong: {
      A: 'Exercício apenas na data de vencimento é característica do estilo EUROPEU, não do americano.',
      C: 'Não há essa exigência específica de D+2 para o exercício de opções de estilo americano — o exercício é permitido a partir do pregão seguinte à aquisição.',
      D: 'Não há necessidade de autorização prévia da CVM para cada exercício individual de opção — é um processo operacional entre titular e a B3/lançador.',
    },
    examTip:
      'Americano = exerce QUANDO QUISER (a partir do dia seguinte à compra até o vencimento). Europeu = exerce SÓ no vencimento. Uma das três questões-modelo do próprio capítulo.',
    commonTrap:
      'Essa é uma das perguntas-exemplo do próprio Guia — reforça que "estilo americano x europeu" é um dos pontos mais cobrados sobre opções em toda a apostila.',
    ...SRC('3. Mercado de bolsa — Mercado de opções (Características da negociação de opção)', '493, 496'),
  },
  {
    topic: 'Mercado de opções',
    subtopic: 'Exercício manual x automático',
    difficulty: 'medio',
    statement: 'O exercício automático de uma opção, disponível para séries de ativos do mercado à vista de renda variável, é:',
    options: {
      A: 'Solicitado expressamente pelo titular a cada operação.',
      B: 'Realizado automaticamente pela B3, sem necessidade de solicitação expressa do titular.',
      C: 'Vedado para qualquer tipo de opção negociada na B3.',
      D: 'Aplicável apenas a opções sobre ouro.',
    },
    correct: 'B',
    explanation:
      'O exercício automático é disponível para séries de ativos pertencentes ao mercado à vista de renda variável e realizado automaticamente pela B3 — diferentemente do exercício manual, que é solicitado expressamente pelo titular.',
    explanationWrong: {
      A: 'A solicitação expressa pelo titular caracteriza o exercício MANUAL, não o automático.',
      C: 'O exercício automático não é vedado — é uma modalidade disponível para séries específicas de ativos do mercado à vista de renda variável.',
      D: 'Não é aplicável apenas a opções sobre ouro — é vinculado a séries de ativos do mercado à vista de renda variável.',
    },
    examTip:
      'Manual = titular pede expressamente. Automático = a B3 processa sozinha, para séries elegíveis de renda variável.',
    commonTrap:
      'A escolha entre exercício manual/automático depende das especificações do contrato — não é uma regra universal aplicável a toda e qualquer opção.',
    ...SRC('3. Mercado de bolsa — Mercado de opções (Exercício da opção)', '494'),
  },
  {
    topic: 'Mercado de opções',
    subtopic: 'Critérios para exercício',
    difficulty: 'dificil',
    statement: 'Para uma opção de VENDA, o critério padrão para o exercício ser vantajoso ao titular é que o preço do ativo-objeto no mercado à vista seja:',
    options: {
      A: 'Superior ao preço de exercício.',
      B: 'Inferior ao preço de exercício.',
      C: 'Exatamente igual ao preço de exercício.',
      D: 'Irrelevante, pois o exercício sempre ocorre independentemente do preço.',
    },
    correct: 'B',
    explanation:
      'Para opção de venda, o exercício é vantajoso quando o preço do ativo-objeto no mercado à vista for INFERIOR ao preço de exercício — o titular pode vender pelo preço de exercício (mais alto) o ativo que vale menos no mercado.',
    explanationWrong: {
      A: 'Preço do ativo-objeto SUPERIOR ao preço de exercício é o critério de vantagem para a opção de COMPRA, não para a de venda.',
      C: 'Igualdade exata entre os preços não caracteriza vantagem clara para o exercício — o critério do Guia é a desigualdade (inferior, no caso da put).',
      D: 'O preço é justamente o fator determinante da vantagem do exercício — não é irrelevante.',
    },
    examTip:
      'Call: exerce se S > K (ativo vale mais que o preço de exercício). Put: exerce se S < K (ativo vale menos que o preço de exercício) — lógica oposta entre os dois tipos.',
    commonTrap:
      'Não inverta os critérios entre call e put — a lógica de "vantagem" é sempre oposta entre os dois tipos de opção, pois um dá direito de comprar e o outro de vender.',
    ...SRC('3. Mercado de bolsa — Mercado de opções (Critérios para exercício)', '494'),
  },
  {
    topic: 'Mercado de opções',
    subtopic: 'Ajuste do preço de exercício — proventos em dinheiro',
    difficulty: 'prova',
    statement: 'Na hipótese de distribuição de proventos em dinheiro sobre o ativo-objeto de uma opção, o preço de exercício é ajustado:',
    options: {
      A: 'Somando o valor do provento ao preço de exercício.',
      B: 'Deduzindo o valor do provento líquido do preço de exercício, no dia em que o ativo passa a ser negociado "Ex" no mercado à vista.',
      C: 'Sem qualquer ajuste, mantendo-se o preço de exercício original.',
      D: 'Apenas se o titular solicitar expressamente o ajuste em até 30 dias.',
    },
    correct: 'B',
    explanation:
      'No caso de proventos pagos em dinheiro, o preço de exercício é ajustado no dia em que a ação passar a ser negociada "Ex" no mercado à vista, deduzindo-se o valor do provento líquido do preço de exercício, sendo a liquidação feita com o ativo-objeto "Ex".',
    explanationWrong: {
      A: 'É o oposto: o valor do provento é DEDUZIDO (subtraído) do preço de exercício, não somado.',
      C: 'Há sim ajuste automático — o preço de exercício muda no dia em que o ativo passa a ser negociado "Ex".',
      D: 'O ajuste é automático, vinculado à data "Ex" do ativo — não depende de solicitação expressa do titular em um prazo específico.',
    },
    examTip:
      'Proventos em dinheiro sobre opções: preço de exercício é reduzido (deduzido) do valor do provento, no dia "Ex" — mantém a "justiça" do contrato original diante da distribuição.',
    commonTrap:
      'O ajuste do preço de exercício é AUTOMÁTICO e ocorre independentemente de haver posições em aberto no momento — não é uma opção do titular, é uma regra operacional da B3.',
    ...SRC('3. Mercado de bolsa — Mercado de opções (Direitos e rendimentos sobre o ativo-objeto)', '495'),
  },

  // ---------- Mercado a termo e estratégias ----------
  {
    topic: 'Mercado a termo e operações de estratégias',
    subtopic: 'Termo x futuro — ajuste diário',
    difficulty: 'medio',
    statement: 'O termo de ações, desenvolvido como ferramenta de gestão do risco de oscilação de preço, diferencia-se dos contratos futuros por:',
    options: {
      A: 'Ter ajustes diários, assim como os contratos futuros.',
      B: 'Ter liquidação em data futura sem ajustes diários.',
      C: 'Ser negociado exclusivamente no mercado de balcão não organizado.',
      D: 'Não poder ter liquidação antecipada em nenhuma hipótese.',
    },
    correct: 'B',
    explanation:
      'O termo de ações serve como uma escolha de compra ou venda por um valor estipulado, com liquidação em data futura, SEM ajustes diários — diferentemente dos contratos futuros, que têm ajuste diário como característica central.',
    explanationWrong: {
      A: 'É o oposto: a AUSÊNCIA de ajustes diários é justamente o que diferencia o termo do contrato futuro (que tem ajuste diário).',
      C: 'O termo de ações é negociado no Segmento Listado B3 (mercado organizado), não em balcão não organizado.',
      D: 'A liquidação antecipada da operação a termo PODE ocorrer, à vontade do comprador, mediante solicitação — não há vedação absoluta.',
    },
    examTip:
      'Confirma o que já foi visto no Título II: termo NÃO tem ajuste diário (só liquida no vencimento ou antecipadamente); futuro TEM ajuste diário.',
    commonTrap:
      'Esse ponto se repete em múltiplos capítulos do Guia (Título II e Título V) — é claramente um dos conceitos mais cobrados de toda a certificação.',
    ...SRC('3. Mercado de bolsa — Mercado a termo (Termo comum)', '496-497'),
  },
  {
    topic: 'Mercado a termo e operações de estratégias',
    subtopic: 'Direitos do comprador a termo',
    difficulty: 'dificil',
    statement: 'Dividendos, bonificações e outras vantagens distribuídas aos ativos objeto de uma operação a termo pertencem:',
    options: {
      A: 'Ao vendedor a termo, até a data de liquidação da operação.',
      B: 'Ao comitente comprador a termo, a partir do registro da operação na B3.',
      C: 'Sempre à B3, como taxa de intermediação.',
      D: 'Ao participante de negociação pleno, independentemente de quem seja o comitente.',
    },
    correct: 'B',
    explanation:
      'Dividendos, bonificações e quaisquer outras vantagens atribuídas ou distribuídas aos títulos e valores mobiliários objeto da operação a termo pertencerão ao comitente COMPRADOR a termo, a partir do registro da operação na B3 — mesmo que a entrega física do ativo só ocorra no vencimento.',
    explanationWrong: {
      A: 'É o oposto: os direitos pertencem ao COMPRADOR a termo, não ao vendedor, a partir do registro da operação.',
      C: 'A B3 não se apropria dos proventos distribuídos — eles pertencem ao comprador a termo, conforme regra específica do Guia.',
      D: 'Os direitos pertencem ao COMITENTE comprador (o investidor final), não ao participante de negociação pleno como intermediário.',
    },
    examTip:
      'Comprador a termo já "ganha" os proventos distribuídos DESDE O REGISTRO da operação — mesmo sem ainda ter recebido fisicamente o ativo (que só ocorre no vencimento).',
    commonTrap:
      'Pode parecer contraintuitivo que o comprador (que ainda não recebeu o ativo fisicamente) já tenha direito aos proventos — mas essa é justamente a regra específica destacada pelo Guia para operações a termo.',
    ...SRC('3. Mercado de bolsa — Mercado a termo (Termo comum)', '496-497'),
  },
  {
    topic: 'Mercado a termo e operações de estratégias',
    subtopic: 'Operações de estratégias — leilão',
    difficulty: 'dificil',
    statement: 'As operações realizadas por meio de estratégias operacionais nos mercados de ativos e derivativos são submetidas a:',
    options: {
      A: 'Leilão de, no mínimo, cinco minutos, não sendo aceita oferta ao preço de abertura.',
      B: 'Nenhum tipo de leilão, sendo executadas instantaneamente sem qualquer verificação.',
      C: 'Aprovação prévia individual da CVM para cada estratégia.',
      D: 'Leilão de, no máximo, um minuto.',
    },
    correct: 'A',
    explanation:
      'As operações de estratégias são submetidas a leilão de, no mínimo, cinco minutos, e não é aceita oferta ao preço de abertura — regras específicas de procedimento para esse tipo de operação, que inclui estratégias como box de 4 pontas, financiamento a termo, ofertas por spread, volatilidade de dólar e forward points.',
    explanationWrong: {
      B: 'Há sim submissão a leilão — não são operações executadas instantaneamente sem qualquer procedimento formal.',
      C: 'Não há exigência de aprovação prévia individual da CVM para cada operação de estratégia — o procedimento é padronizado pela B3 (leilão mínimo de 5 minutos).',
      D: 'O leilão mínimo é de CINCO minutos, não um minuto — valor bem diferente do estabelecido no Guia.',
    },
    examTip:
      'Operações de estratégias: leilão mínimo de 5 minutos, sem aceitar oferta ao preço de abertura — regra procedimental específica e objetiva.',
    commonTrap:
      'Decore o número exato (5 minutos) — é um detalhe operacional facilmente cobrável em questão de nível "prova".',
    ...SRC('3. Mercado de bolsa — Operações de estratégias', '497'),
  },

  // ---------- Balcão organizado e câmbio pronto ----------
  {
    topic: 'Mercado de balcão organizado e câmbio pronto',
    subtopic: 'Operações ex-pit',
    difficulty: 'prova',
    statement: 'As operações ex-pit, que não são submetidas à interferência de mercado, têm como um dos objetivos:',
    options: {
      A: 'Aumentar artificialmente o volume negociado de um ativo específico.',
      B: 'Permitir o encerramento de posições de comitentes declarados inadimplentes ou com dificuldades para liquidar operações realizadas.',
      C: 'Substituir integralmente o mercado de bolsa para todas as operações de renda variável.',
      D: 'Eliminar a necessidade de registro de qualquer operação a termo.',
    },
    correct: 'B',
    explanation:
      'As operações ex-pit têm como objetivo encerrar posições geradas por contrato a termo firmado entre as partes, em hipóteses como: (I) operação caracterizada como hedge; (II) operação para permitir o encerramento de posições de comitentes declarados inadimplentes ou com dificuldades para liquidar operações; e (III) operação para arbitrar preço praticado em outras entidades de mercado organizado, inclusive estrangeiras.',
    explanationWrong: {
      A: 'Não há esse objetivo de "aumentar artificialmente" volume — as operações ex-pit têm finalidades específicas e legítimas (hedge, inadimplência, arbitragem de preços).',
      C: 'As operações ex-pit não substituem o mercado de bolsa de forma geral — são um mecanismo específico para situações determinadas, sem interferência de mercado.',
      D: 'As operações ex-pit estão relacionadas ao encerramento de posições GERADAS por contrato a termo — não eliminam a necessidade de registro de operações a termo em geral.',
    },
    examTip:
      'Ex-pit = operações "fora do pregão" para 3 finalidades específicas: hedge, encerramento por inadimplência, ou arbitragem de preço entre mercados (inclusive estrangeiros).',
    commonTrap:
      'Ex-pit não é um mecanismo de manipulação — é uma ferramenta regulada para situações específicas de gestão de risco e resolução de inadimplência, sem interferência de mercado.',
    ...SRC('4. Mercado de balcão organizado — Operações ex-pit', '499'),
  },
  {
    topic: 'Mercado de balcão organizado e câmbio pronto',
    subtopic: 'Lote padrão de câmbio pronto',
    difficulty: 'medio',
    statement: 'O lote padrão de negociação no mercado de câmbio pronto (dólar dos EUA) é de:',
    options: {
      A: 'US$ 10.000,00.',
      B: 'US$ 50.000,00.',
      C: 'US$ 100.000,00.',
      D: 'US$ 500.000,00.',
    },
    correct: 'B',
    explanation:
      'O lote padrão de negociação no mercado de câmbio pronto é de US$ 50.000,00. As ofertas e operações devem ser iguais ou múltiplas ao lote padrão, limitadas a US$ 25.000.000,00.',
    explanationWrong: {
      A: 'US$ 10.000,00 corresponde ao tamanho do minicontrato futuro de dólar (WDO), visto no Título II — não é o lote padrão do câmbio pronto.',
      C: 'US$ 100.000,00 é o limite de operações de câmbio para instituições de pagamento (Título II) — não o lote padrão do câmbio pronto.',
      D: 'US$ 500.000,00 é o limite de operações de câmbio para corretoras/distribuidoras/SCFI (Título II) — não o lote padrão do câmbio pronto negociado na B3.',
    },
    examTip:
      'Lote padrão do câmbio pronto na B3: US$ 50.000,00, limitado a US$ 25 milhões por oferta/operação (múltiplos do lote padrão).',
    commonTrap:
      'Não confunda o "lote padrão de câmbio pronto" (US$ 50 mil) com o "tamanho do minicontrato futuro WDO" (US$ 10 mil, Título II) — são valores de referência de mercados/produtos diferentes.',
    ...SRC('5. Mercado de câmbio pronto — Lote padrão', '502'),
  },
  {
    topic: 'Mercado de balcão organizado e câmbio pronto',
    subtopic: 'Anonimato e ausência de leilão no câmbio pronto',
    difficulty: 'dificil',
    statement: 'Sobre as operações de câmbio pronto negociadas na B3, é correto afirmar que:',
    options: {
      A: 'São divulgadas com identificação completa do participante e submetidas a leilão.',
      B: 'São divulgadas de forma anônima e não são submetidas a leilão, em razão de suas características operacionais.',
      C: 'Exigem identificação do comitente apenas para operações acima de US$ 1 milhão.',
      D: 'Podem ser inseridas como ordens a mercado, sem qualquer limite de preço.',
    },
    correct: 'B',
    explanation:
      'Todas as ofertas e operações de câmbio pronto são divulgadas de forma anônima na difusão de dados de mercado, sem identificação do código de negociação do participante. Em razão de suas características operacionais, essas operações NÃO são submetidas a leilão.',
    explanationWrong: {
      A: 'É o oposto: a divulgação é anônima (sem identificação do participante), e não há submissão a leilão.',
      C: 'A identificação do COMITENTE é obrigatória para todas as ofertas de câmbio pronto, independentemente do valor — o que é anônimo é a identificação do PARTICIPANTE na divulgação pública.',
      D: 'Somente é permitida a inserção de ofertas LIMITADAS com validade para o dia — não ofertas a mercado sem limite de preço.',
    },
    examTip:
      'Câmbio pronto: divulgação anônima (participante) + identificação obrigatória do comitente + SEM leilão + só ofertas limitadas (válidas para o dia).',
    commonTrap:
      'Não confunda "anonimato na divulgação do participante" (para o mercado em geral) com "identificação do comitente" (exigida internamente, para fins de registro/rastreabilidade) — são coisas diferentes que coexistem.',
    ...SRC('5. Mercado de câmbio pronto — Tipos de ofertas', '502-503'),
  },
  {
    topic: 'Mercado de balcão organizado e câmbio pronto',
    subtopic: 'Túnel de rejeição tipo 2',
    difficulty: 'prova',
    statement: 'O túnel de rejeição tipo 2, aplicado às operações de câmbio pronto, tem por objetivo:',
    options: {
      A: 'Impedir o registro de ofertas de compra com preço igual ou acima de determinado valor e ofertas de venda com preço igual ou abaixo de determinado valor.',
      B: 'Garantir que toda operação seja submetida a um leilão de abertura.',
      C: 'Eliminar totalmente a necessidade de identificação do comitente.',
      D: 'Aumentar artificialmente a volatilidade cambial durante o pregão.',
    },
    correct: 'A',
    explanation:
      'O túnel de rejeição tipo 2 tem por objetivo impedir o registro de ofertas de compra com preço igual ou acima de determinado valor e ofertas de venda com preço igual ou abaixo de determinado valor — mecanismo de proteção contra preços muito distantes do praticado no mercado, com o centro do túnel definido pelo preço da última operação, atualizado a cada minuto.',
    explanationWrong: {
      B: 'O túnel de rejeição não garante leilão de abertura — inclusive, as operações de câmbio pronto NÃO são submetidas a leilão (regra vista na questão anterior).',
      C: 'O túnel de rejeição não tem relação com a identificação do comitente — é um mecanismo de controle de preços das ofertas.',
      D: 'É o oposto: o túnel de rejeição busca CONTER (não aumentar) a volatilidade, rejeitando ofertas com preços muito distantes do valor de referência.',
    },
    examTip:
      'Túnel de rejeição tipo 2 = "cerca de proteção de preço": rejeita ofertas de compra muito ALTAS e de venda muito BAIXAS, evitando distorções abruptas de preço.',
    commonTrap:
      'O túnel de rejeição é um mecanismo de PREVENÇÃO de distorções de preço, não de garantia de leilão ou identificação — não confunda seus propósitos com outros mecanismos do mercado de câmbio.',
    ...SRC('5. Mercado de câmbio pronto — Túnel de rejeição', '503-504'),
  },
];
