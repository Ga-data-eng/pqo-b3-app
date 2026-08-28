// Título VIII - Compliance
// Capítulo IV - Operações ilícitas
// Fonte: Guia Por Dentro da B3, páginas ~661-680.

export const chapterRef = { titleNumber: 'VIII', chapterNumber: 'IV' };

export const topics = [
  'Fundamentos das operações ilícitas',
  'Spoofing',
  'Layering',
  'Churning',
  'Front running',
  'OMC — Operações de mesmo comitente',
];

const SRC = (section, page) => ({
  source_title: 'Guia Por Dentro da B3',
  source_chapter: 'Título VIII, Capítulo IV — Operações ilícitas',
  source_section: section,
  source_page: page,
});

export const questions = [
  // ---------- Fundamentos ----------
  {
    topic: 'Fundamentos das operações ilícitas',
    subtopic: 'Manipulação de preços — conceito',
    difficulty: 'medio',
    statement: 'Nos termos da Resolução CVM nº 62/2022, a manipulação de preços consiste em:',
    options: {
      A: 'qualquer negociação legítima realizada dentro dos limites operacionais estabelecidos.',
      B: 'utilização de qualquer processo ou artifício destinado a elevar, manter ou baixar a cotação de um valor mobiliário, induzindo terceiros à sua compra e venda.',
      C: 'exclusivamente a realização de operações com formador de mercado credenciado.',
      D: 'a compra ou venda de valores mobiliários em quantidade superior ao lote-padrão.',
    },
    correct: 'B',
    explanation:
      'Manipulação de preços consiste, no caso do mercado de valores mobiliários, na utilização de qualquer processo ou artifício destinado, direta ou indiretamente, a elevar, manter ou baixar a cotação de um valor mobiliário, induzindo terceiros à sua compra e venda.',
    explanationWrong: {
      A: 'Negociação legítima dentro dos limites operacionais é o comportamento normal e regular do mercado — o oposto da manipulação.',
      C: 'Operar com formador de mercado credenciado é uma atividade regular e regulada, não uma manipulação de preços.',
      D: 'Comprar/vender em quantidade superior ao lote-padrão não é, por si só, manipulação — pode ser simplesmente um lote múltiplo dentro das regras normais de negociação.',
    },
    examTip: 'Manipulação de preço: qualquer ARTIFÍCIO para elevar/manter/baixar cotação, INDUZINDO terceiros — elemento central é o engano/indução.',
    commonTrap: null,
    ...SRC('Apresentação', '661'),
  },
  {
    topic: 'Fundamentos das operações ilícitas',
    subtopic: 'Prática não equitativa',
    difficulty: 'dificil',
    statement: 'Prática não equitativa, segundo a Resolução CVM nº 62/2022, é aquela que:',
    options: {
      A: 'beneficia igualmente todos os participantes de uma operação, sem qualquer desequilíbrio.',
      B: 'coloca qualquer das partes, em negociações com valores mobiliários, em indevida posição de desequilíbrio ou desigualdade em face aos demais participantes.',
      C: 'é sempre cometida exclusivamente por participantes de negociação, nunca por investidores.',
      D: 'refere-se apenas a operações realizadas fora do horário regular de negociação.',
    },
    correct: 'B',
    explanation:
      'Prática não equitativa é aquela da qual resulta, direta ou indiretamente, efetiva ou potencialmente, um tratamento para qualquer das partes, em negociações com valores mobiliários, que a coloque em uma indevida posição de desequilíbrio ou desigualdade em face aos demais participantes da operação.',
    explanationWrong: {
      A: 'É exatamente o oposto — a prática não equitativa GERA desequilíbrio, não o elimina.',
      C: 'A prática não equitativa pode ser praticada por investidores, participantes de negociação, ou outros agentes — não é exclusiva de participantes.',
      D: 'Não se refere ao horário de negociação — trata-se de desequilíbrio de tratamento entre as partes de uma operação, independentemente do horário em que ocorre.',
    },
    examTip: 'Prática não equitativa = gera DESEQUILÍBRIO/DESIGUALDADE indevida entre as partes de uma negociação — front running é um exemplo clássico.',
    commonTrap: null,
    ...SRC('Apresentação', '661-662'),
  },

  // ---------- Spoofing ----------
  {
    topic: 'Spoofing',
    subtopic: 'Conceito de spoofing',
    difficulty: 'prova',
    statement: 'O spoofing é uma prática abusiva caracterizada por:',
    options: {
      A: 'criação de liquidez artificial com UMA oferta de tamanho fora do padrão do livro, cancelada após o negócio pretendido ser realizado do lado oposto.',
      B: 'criação de liquidez artificial com diversas ofertas de pequenos lotes em camadas de preço sucessivas.',
      C: 'realização de operações excessivas para gerar maiores receitas de corretagem.',
      D: 'utilização de informação privilegiada sobre ordem de terceiro ainda não executada.',
    },
    correct: 'A',
    explanation:
      'O spoofing é uma prática abusiva de criação artificial de liquidez com o uso de UMA oferta de tamanho fora do padrão do livro de ofertas, com o objetivo de influenciar investidores a superar a oferta artificial e gerar negócios do lado oposto do livro. Após o negócio pretendido, a liquidez artificial é cancelada.',
    explanationWrong: {
      B: 'Essa descrição corresponde ao LAYERING (diversas ofertas de pequenos lotes em camadas), não ao spoofing (uma única oferta grande).',
      C: 'Essa é a descrição do CHURNING (negociação excessiva para gerar receitas), não do spoofing.',
      D: 'Essa é a descrição do FRONT RUNNING (uso de informação sobre ordem de terceiro), não do spoofing.',
    },
    examTip: 'Spoofing = UMA oferta grande e fora do padrão. Layering = VÁRIAS ofertas pequenas em camadas. Mesma lógica, escala diferente.',
    commonTrap: '⚠️ A explicação da BSM resume bem: spoofing = "uma única oferta manipuladora de grande quantidade"; layering = "diversas ofertas manipuladoras de pequenos lotes".',
    ...SRC('Spoofing', '662-663'),
  },
  {
    topic: 'Spoofing',
    subtopic: 'Características da oferta de spoofing',
    difficulty: 'dificil',
    statement: 'Entre as características especiais da oferta que cria falsa liquidez no ciclo de spoofing, está a oferta:',
    options: {
      A: '2 vezes maior que o tamanho médio praticado nos 3 pregões anteriores.',
      B: '6 vezes maior que o tamanho médio praticado nos 3 pregões que antecedem o negócio, e de tamanho pelo menos 1,8 vez maior que a soma de todas as outras ofertas do mesmo lado até o terceiro nível de preço.',
      C: 'de qualquer tamanho, desde que permaneça mais de 1 hora no livro.',
      D: 'idêntica ao lote-padrão do ativo negociado.',
    },
    correct: 'B',
    explanation:
      'As características especiais da oferta que cria falsa liquidez no ciclo de spoofing são: oferta 6 vezes maior que o tamanho médio praticado pelo mercado nos 3 pregões que antecedem o negócio resultante; oferta de tamanho pelo menos 1,8 vez maior que a soma de todas as outras ofertas do mesmo lado do livro até o terceiro nível de preço; e oferta que permaneceu menos de 10 segundos no livro.',
    explanationWrong: {
      A: 'O múltiplo correto é 6 vezes, não 2 vezes, o tamanho médio dos 3 pregões anteriores.',
      C: 'É o oposto quanto ao tempo: a oferta deve ter permanecido MENOS de 10 SEGUNDOS no livro, não mais de 1 hora — a característica é justamente o cancelamento rápido.',
      D: 'Não é sobre ser idêntica ao lote-padrão — é sobre ser MUITO MAIOR que o padrão praticado (6x a média e 1,8x a soma das demais ofertas).',
    },
    examTip: 'Spoofing: oferta 6x a média de 3 pregões + 1,8x a soma das demais ofertas até o 3º nível de preço + permanência menor que 10 segundos.',
    commonTrap: '⚠️ Números muito específicos e cobráveis: 6x, 1,8x, 10 segundos, mínimo 8 eventos em 15 dias de análise.',
    ...SRC('Spoofing', '663-664'),
  },
  {
    topic: 'Spoofing',
    subtopic: 'Recorrência mínima para alerta',
    difficulty: 'prova',
    statement: 'Para que seja gerado um alerta de spoofing pelo monitoramento da BSM, é necessária recorrência mínima de:',
    options: {
      A: '2 eventos no período de análise de 15 dias.',
      B: '4 eventos no período de análise de 30 dias.',
      C: '8 eventos no período de análise de 15 dias.',
      D: '20 eventos no período de análise de 30 dias.',
    },
    correct: 'C',
    explanation:
      'Sempre que todos os elementos característicos do spoofing estiverem presentes, é gerado um alerta. Também é necessária recorrência: no mínimo 8 eventos no período de análise da BSM, que é de 15 dias.',
    explanationWrong: {
      A: '2 eventos é insuficiente — o mínimo exigido é de 8 eventos.',
      B: '4 eventos e período de 30 dias não correspondem aos parâmetros corretos (8 eventos, 15 dias).',
      D: '20 eventos e período de 30 dias também não correspondem aos parâmetros corretos.',
    },
    examTip: 'Recorrência para alerta de spoofing (e também layering): mínimo 8 eventos em 15 dias de período de análise.',
    commonTrap: '⚠️ Elementos isolados NÃO configuram irregularidade — cancelamento de oferta, por si só, não é irregular. É preciso combinação + recorrência.',
    ...SRC('Spoofing', '664'),
  },

  // ---------- Layering ----------
  {
    topic: 'Layering',
    subtopic: 'Conceito de layering',
    difficulty: 'medio',
    statement: 'O layering é uma prática abusiva de criação de liquidez artificial no livro de ofertas por meio de:',
    options: {
      A: 'uma única oferta de grande volume.',
      B: 'camadas de ofertas em níveis sucessivos de preço, tipicamente com lotes mínimos.',
      C: 'operações excessivas visando aumentar receitas de corretagem.',
      D: 'antecipação de ordem relevante de terceiro.',
    },
    correct: 'B',
    explanation:
      'Layering é uma prática abusiva de criação de liquidez artificial no livro de ofertas por meio de camadas de ofertas em níveis sucessivos de preço (tipicamente várias ofertas com lotes mínimos e preços sucessivos) com o objetivo de influenciar investidores a superar a barreira criada pela camada e gerar negócios do lado oposto do livro.',
    explanationWrong: {
      A: 'Uma única oferta de grande volume caracteriza o SPOOFING, não o layering.',
      C: 'Essa é a descrição do CHURNING (também chamado overtrading).',
      D: 'Essa é a descrição do FRONT RUNNING.',
    },
    examTip: 'Layering = camadas de VÁRIAS ofertas pequenas em níveis de preço sucessivos.',
    commonTrap: null,
    ...SRC('Layering', '665-666'),
  },
  {
    topic: 'Layering',
    subtopic: 'Comparação spoofing x layering',
    difficulty: 'dificil',
    statement: 'Em comparação com o spoofing, o layering é mais comum e frequente em casos de:',
    options: {
      A: 'livros mais fechados, com pouco spread entre a melhor oferta de compra e de venda.',
      B: 'livros mais abertos, ou seja, quando a diferença (spread) entre a melhor oferta de compra e a melhor oferta de venda é maior.',
      C: 'ativos com liquidez extremamente alta, sem qualquer spread.',
      D: 'ativos negociados exclusivamente no mercado de balcão organizado.',
    },
    correct: 'B',
    explanation:
      'O layering é mais comum e frequente em casos de livros mais abertos, ou seja, quando a diferença entre a melhor oferta de compra e a melhor oferta de venda é maior (spread com alguns tick sizes entre a melhor oferta de cada lado). Nesse cenário, a manipulação necessária no layering tende a ser mais intensa que no spoofing.',
    explanationWrong: {
      A: 'É o oposto: livros mais FECHADOS (pouco spread) não são o cenário típico do layering — o layering se relaciona a livros mais ABERTOS.',
      C: 'Liquidez extremamente alta sem spread não é o contexto típico do layering, que se relaciona justamente a um spread maior (livro mais aberto).',
      D: 'Não há essa restrição ao mercado de balcão organizado — a análise se refere à característica do livro de ofertas (spread), não ao segmento de mercado.',
    },
    examTip: 'Layering tende a ocorrer em livros ABERTOS (spread maior) — precisa de mais "camadas" para cobrir a distância maior entre compra e venda.',
    commonTrap: null,
    ...SRC('Layering', '666'),
  },
  {
    topic: 'Layering',
    subtopic: 'Características da camada de layering',
    difficulty: 'dificil',
    statement: 'Entre as características das ofertas que criam camada de falsa liquidez no layering, está a exigência de camada contendo, no mínimo:',
    options: {
      A: '2 ofertas no mesmo lado do livro, a preços diferentes.',
      B: '4 ofertas no mesmo lado do livro, a preços diferentes.',
      C: '10 ofertas no mesmo lado do livro, ao mesmo preço.',
      D: '1 oferta, desde que de tamanho 6 vezes maior que a média.',
    },
    correct: 'B',
    explanation:
      'Para a detecção de layering, as características das ofertas que criam camada de falsa liquidez incluem: camada contendo no mínimo 4 ofertas no mesmo lado do livro a preços diferentes; realização de negócio do lado oposto às quatro ofertas; e cancelamento de todas as ofertas manipuladoras após o negócio, usualmente até 10 minutos subsequentes.',
    explanationWrong: {
      A: '2 ofertas é insuficiente — o mínimo exigido para caracterizar uma camada de layering é de 4 ofertas.',
      C: '10 ofertas ao MESMO preço não corresponde à característica de layering — as ofertas devem estar a PREÇOS DIFERENTES (níveis sucessivos), não no mesmo preço.',
      D: 'Uma única oferta grande (6x a média) é a característica do SPOOFING, não do layering, que exige múltiplas ofertas (mínimo 4) em preços diferentes.',
    },
    examTip: 'Layering: mínimo 4 ofertas, mesmo lado do livro, preços DIFERENTES — cancelamento em até 10 minutos após o negócio (spoofing é mais rápido: 10 segundos de permanência).',
    commonTrap: '⚠️ Não confunda os prazos: spoofing = oferta permanece MENOS de 10 SEGUNDOS. Layering = cancelamento em ATÉ 10 MINUTOS após o negócio.',
    ...SRC('Layering', '666-667'),
  },

  // ---------- Churning ----------
  {
    topic: 'Churning',
    subtopic: 'Conceito de churning',
    difficulty: 'facil',
    statement: 'A realização de operações de forma excessiva com o intuito de aumentar o pagamento de comissões e taxas de corretagem é conhecida como:',
    options: {
      A: 'spoofing.',
      B: 'layering.',
      C: 'churning.',
      D: 'OMC e front running.',
    },
    correct: 'C',
    explanation:
      'Churning (também conhecido como overtrading) consiste em prática irregular, comumente associada à gestão do patrimônio dos investidores, com a realização de sucessivas operações com o objetivo preponderante de gerar maiores receitas (taxas de corretagem e comissões).',
    explanationWrong: {
      A: 'Spoofing é a criação de falsa liquidez com uma oferta de grande volume — não tem relação direta com a geração de comissões por negociação excessiva.',
      B: 'Layering é a criação de falsa liquidez com camadas de ofertas — também não se relaciona à geração de comissões por overtrading.',
      D: 'OMC e front running são práticas distintas (operações de mesmo comitente e uso indevido de informação sobre ordem de terceiro), não relacionadas à geração excessiva de comissões.',
    },
    examTip: 'Churning = overtrading = negociação excessiva para gerar comissão/corretagem.',
    commonTrap: null,
    ...SRC('Churning', '667'),
  },
  {
    topic: 'Churning',
    subtopic: 'Turnover ratio',
    difficulty: 'prova',
    statement: 'O indicador utilizado pela BSM para averiguar se o volume de negócios de um investidor foi excessivo, sendo um turnover ratio superior a determinado valor um forte indício de churning, é:',
    options: {
      A: 'cost-equity ratio, com limite de 8.',
      B: 'turnover ratio, com limite de 8.',
      C: 'turnover ratio, com limite de 21%.',
      D: 'índice de Sharpe, com limite de 1,0.',
    },
    correct: 'B',
    explanation:
      'Turnover ratio indica o número de "giros" efetuados com a carteira do cliente, comparando-se o patrimônio médio dele com o volume total de compras. Atualmente, turnover ratio superior a 8 seria um forte indício de churning.',
    explanationWrong: {
      A: 'Cost-equity ratio é o OUTRO indicador de churning (voltado a despesas excessivas), com limite de 21% ao ano — não é o turnover ratio, nem o limite de 8 se aplica a ele.',
      C: 'O limite de 8 é o correto para o turnover ratio — 21% é o limite do cost-equity ratio, não do turnover ratio.',
      D: 'Índice de Sharpe não é um indicador utilizado pela BSM para detecção de churning — é uma métrica de retorno ajustado ao risco de outro contexto.',
    },
    examTip: 'Turnover ratio > 8 = forte indício de churning (mede o "giro" da carteira).',
    commonTrap: '⚠️ Não confunda com o cost-equity ratio (limite de 21% ao ano, mede despesas excessivas) — são dois indicadores DIFERENTES para o mesmo problema.',
    ...SRC('Churning', '667-668'),
  },
  {
    topic: 'Churning',
    subtopic: 'Cost-equity ratio',
    difficulty: 'prova',
    statement: 'O indicador que compara o total de despesas incorridas na carteira do investidor com seu patrimônio médio, sendo um valor igual ou superior a determinado percentual anual um sinal indicativo de churning, é o:',
    options: {
      A: 'turnover ratio, com limite de 21% ao ano.',
      B: 'cost-equity ratio, com limite de 8% ao ano.',
      C: 'cost-equity ratio, com limite de 21% ao ano.',
      D: 'índice de liquidez, com limite de 15% ao ano.',
    },
    correct: 'C',
    explanation:
      'Cost-equity ratio visa verificar a presença de excessiva despesa para os investidores, comparando o total de despesas incorridas na carteira com o patrimônio médio. Atualmente, o percentual adotado pela BSM é de 21% ao ano — cost-equity ratio igual ou superior a esse valor é sinal indicativo de churning.',
    explanationWrong: {
      A: 'O turnover ratio usa o limite de 8 (não 21%) — o limite de 21% ao ano é do cost-equity ratio.',
      B: '8% ao ano não é o limite correto do cost-equity ratio — o percentual correto é 21% ao ano.',
      D: '"Índice de liquidez" não é um dos dois indicadores formais adotados pela BSM para churning (que são turnover ratio e cost-equity ratio).',
    },
    examTip: 'Cost-equity ratio ≥ 21% ao ano = sinal de churning (mede despesas excessivas). Turnover ratio > 8 = sinal de churning (mede giro excessivo da carteira).',
    commonTrap: '⚠️ Os dois números (8 e 21%) e os dois nomes (turnover x cost-equity) são frequentemente trocados na prova — decore a combinação certa.',
    ...SRC('Churning', '668'),
  },
  {
    topic: 'Churning',
    subtopic: 'Os 3 fatores caracterizadores',
    difficulty: 'dificil',
    statement: 'O churning é caracterizado pela presença de três principais fatores, quais sejam:',
    options: {
      A: 'controle sobre a conta do cliente; negociação excessiva; custos excessivos.',
      B: 'informação privilegiada; antecipação de ordem; reversão de posição.',
      C: 'oferta artificial; cancelamento rápido; recorrência mínima de 8 eventos.',
      D: 'mesmo comitente; leilão; desistência de oferta.',
    },
    correct: 'A',
    explanation:
      'O churning é caracterizado pela presença de três principais fatores: (i) controle sobre a conta do cliente; (ii) negociação excessiva; e (iii) custos excessivos. Os participantes podem ser responsabilizados pelo churning praticado pelo assessor de investimento ou outro preposto, dado seu dever de lealdade para com os clientes.',
    explanationWrong: {
      B: 'Essa combinação (informação privilegiada, antecipação, reversão) descreve os elementos do FRONT RUNNING, não do churning.',
      C: 'Essa combinação (oferta artificial, cancelamento rápido, recorrência) descreve elementos do SPOOFING/LAYERING, não do churning.',
      D: 'Essa combinação (mesmo comitente, leilão, desistência) descreve elementos da OMC, não do churning.',
    },
    examTip: 'Churning: controle da conta + negociação excessiva + custos excessivos — os 3 fatores que caracterizam a prática.',
    commonTrap: null,
    ...SRC('Churning', '668-669'),
  },

  // ---------- Front running ----------
  {
    topic: 'Front running',
    subtopic: 'Conceito de front running',
    difficulty: 'medio',
    statement: 'O front running é uma prática não equitativa caracterizada por:',
    options: {
      A: 'antecipação deliberada de operações com base em conhecimento prévio da intenção de negociação de outro investidor, especialmente em ordens de quantidade relevante.',
      B: 'realização de operações sucessivas para gerar maiores receitas de corretagem.',
      C: 'criação de camadas de ofertas em preços sucessivos para induzir outros investidores.',
      D: 'um investidor figurando nas duas pontas de uma mesma operação.',
    },
    correct: 'A',
    explanation:
      'O front running é uma prática não equitativa caracterizada pela antecipação deliberada de operações com base no conhecimento prévio — real ou presumido — da intenção de negociação de outro investidor, especialmente quando essa negociação envolve quantidade relevante capaz de impactar o preço do ativo.',
    explanationWrong: {
      B: 'Essa é a descrição do CHURNING, não do front running.',
      C: 'Essa é a descrição do LAYERING, não do front running.',
      D: 'Essa é a descrição da OMC (operação de mesmo comitente), não do front running.',
    },
    examTip: 'Front running = usar conhecimento PRÉVIO de ordem relevante de terceiro para se antecipar e lucrar com a movimentação de preço esperada.',
    commonTrap: null,
    ...SRC('Front Running', '669-670'),
  },
  {
    topic: 'Front running',
    subtopic: 'Front running x spoofing/layering/churning',
    difficulty: 'dificil',
    statement: 'Diferentemente de práticas como spoofing, layering e churning, o front running:',
    options: {
      A: 'exige obrigatoriamente a formação de um ciclo recorrente de pelo menos 8 eventos.',
      B: 'não pressupõe a formação de um ciclo recorrente, podendo se caracterizar a partir de um único evento.',
      C: 'só pode ser praticado por meio de ofertas em leilão de abertura ou fechamento.',
      D: 'é sempre uma prática lícita, desde que devidamente registrada.',
    },
    correct: 'B',
    explanation:
      'Diferentemente de práticas como spoofing, layering e churning, o front running não pressupõe a formação de um ciclo recorrente, podendo se caracterizar a partir de um único evento. A irregularidade decorre da utilização indevida de informação relacionada a uma ordem relevante ainda não executada.',
    explanationWrong: {
      A: 'É o oposto: front running NÃO exige ciclo recorrente — pode se caracterizar com um ÚNICO evento, diferentemente de spoofing/layering (que exigem recorrência mínima de 8 eventos em 15 dias).',
      C: 'Front running não é restrito a ofertas em leilão — pode ocorrer em qualquer contexto em que haja conhecimento prévio de ordem relevante de terceiro.',
      D: 'Front running é expressamente vedado como prática não equitativa pela Resolução CVM nº 62/2022 — não é lícito, independentemente de registro.',
    },
    examTip: 'Front running é a ÚNICA das quatro práticas ilícitas do capítulo que dispensa recorrência — basta UM evento para caracterizá-la.',
    commonTrap: '⚠️ Muito cobrado: spoofing/layering exigem recorrência (8 eventos/15 dias); front running NÃO exige — um único evento já configura a irregularidade.',
    ...SRC('Front Running', '669-670'),
  },
  {
    topic: 'Front running',
    subtopic: 'Sequência de eventos',
    difficulty: 'dificil',
    statement: 'A sequência típica de eventos que evidencia a prática de front running é:',
    options: {
      A: 'execução da ordem do cliente → conhecimento da ordem → antecipação → reversão da posição.',
      B: 'conhecimento da ordem relevante → antecipação (posicionamento) → execução da ordem do cliente → reversão da posição com obtenção de vantagem.',
      C: 'antecipação → reversão da posição → conhecimento da ordem → execução da ordem do cliente.',
      D: 'reversão da posição → antecipação → conhecimento da ordem → execução da ordem do cliente.',
    },
    correct: 'B',
    explanation:
      'A sequência típica é: (1) conhecimento prévio de ordem relevante ainda não executada; (2) antecipação — inserção de ordens no mesmo sentido econômico da ordem do cliente; (3) execução da ordem de grande volume do cliente, que movimenta o preço; e (4) reversão da posição (operação inversa), obtendo vantagem econômica indevida.',
    explanationWrong: {
      A: 'A ordem está invertida — a execução da ordem do cliente é o PASSO 3, não o primeiro; o conhecimento da ordem vem antes de tudo.',
      C: 'A sequência está fora de ordem — a antecipação só pode ocorrer DEPOIS do conhecimento da ordem, e a reversão é o último passo, não o segundo.',
      D: 'A reversão da posição é o ÚLTIMO passo do ciclo, não o primeiro — a sequência está completamente invertida.',
    },
    examTip: 'Front running: (1) CONHECIMENTO da ordem → (2) ANTECIPAÇÃO (se posiciona) → (3) EXECUÇÃO da ordem do cliente (move o preço) → (4) REVERSÃO (lucra com a variação).',
    commonTrap: null,
    ...SRC('Front Running', '670'),
  },

  // ---------- OMC ----------
  {
    topic: 'OMC — Operações de mesmo comitente',
    subtopic: 'Conceito de OMC',
    difficulty: 'medio',
    statement: 'Operações de mesmo comitente (OMC) são aquelas em que:',
    options: {
      A: 'dois investidores diferentes realizam operações no mesmo horário de negociação.',
      B: 'um investidor figura nas duas pontas (compra e venda) de determinada operação, intermediadas por um ou dois participantes distintos.',
      C: 'um investidor realiza operações exclusivamente em leilão de abertura.',
      D: 'um investidor utiliza informação privilegiada sobre ordem de terceiro.',
    },
    correct: 'B',
    explanation:
      'Operações de mesmo comitente (OMC) são aquelas em que um investidor figura nas duas pontas (compra e venda) de determinada operação, sejam elas intermediadas por um único participante ou por dois participantes distintos.',
    explanationWrong: {
      A: 'Não é sobre dois investidores diferentes operando no mesmo horário — é sobre o MESMO investidor figurando em AMBAS as pontas de uma mesma operação.',
      C: 'A OMC não é exclusiva de leilão de abertura — ela assume relevância especial em leilões (abertura, fechamento e outros), mas pode ocorrer em outros contextos também.',
      D: 'O uso de informação privilegiada sobre ordem de terceiro é a descrição do FRONT RUNNING, não da OMC.',
    },
    examTip: 'OMC = mesmo investidor é comprador E vendedor na mesma operação — assume relevância especial em leilões (abertura/fechamento).',
    commonTrap: null,
    ...SRC('OMC – operações de mesmo comitente', '670-671'),
  },
  {
    topic: 'OMC — Operações de mesmo comitente',
    subtopic: 'Prazo de desistência em leilão',
    difficulty: 'prova',
    statement: 'Segundo o Manual de Procedimentos Operacionais (MPO) da B3, a OMC em leilão por desistência é considerada permitida (regular) quando ocorrer dentro do prazo de:',
    options: {
      A: '60 segundos para ações, opções sobre ações, Ibovespa, IBrX-50 e ETF; e 30 segundos para os demais derivativos.',
      B: '30 segundos para todos os ativos, sem distinção.',
      C: '120 segundos para ações e 60 segundos para derivativos.',
      D: '10 segundos para todos os instrumentos, sem exceção.',
    },
    correct: 'A',
    explanation:
      'O MPO da B3 dispõe que a OMC em leilão é permitida, por desistência, nos primeiros 60 segundos para ações, opções sobre ações, Ibovespa, IBrX-50 e ETF; e nos primeiros 30 segundos para os demais derivativos.',
    explanationWrong: {
      B: '30 segundos para TODOS os ativos, sem distinção, está incorreto — o prazo de 60 segundos se aplica especificamente a ações/opções sobre ações/Ibovespa/IBrX-50/ETF, e 30 segundos aos demais derivativos.',
      C: '120 e 60 segundos não correspondem aos prazos corretos (60 e 30 segundos, respectivamente).',
      D: '10 segundos é o prazo de permanência de oferta no ciclo de SPOOFING, não o prazo de desistência de OMC em leilão.',
    },
    examTip: 'OMC por desistência: 60s (ações/opções sobre ações/Ibovespa/IBrX-50/ETF) x 30s (demais derivativos) — dois prazos distintos.',
    commonTrap: '⚠️ Não confunda com os 10 segundos do spoofing — são contextos e práticas diferentes.',
    ...SRC('OMC – operações de mesmo comitente', '671-672'),
  },
  {
    topic: 'OMC — Operações de mesmo comitente',
    subtopic: 'OMC decorrente de erro operacional',
    difficulty: 'dificil',
    statement: 'A OMC em leilão é considerada permitida quando a primeira oferta que a originou for fruto de erro operacional, tal como:',
    options: {
      A: 'estratégia deliberada de manipulação de preço.',
      B: 'preço, quantidade, sentido econômico ou ativo/derivativo diferente do solicitado pelo cliente, ou falhas/erros em algoritmo comprovados à B3.',
      C: 'decisão consciente do investidor de comprar e vender o mesmo ativo simultaneamente.',
      D: 'ausência de qualquer registro formal da operação.',
    },
    correct: 'B',
    explanation:
      'A OMC é permitida quando a primeira oferta que a originou for fruto de erro operacional por: preço diferente do solicitado; quantidade diferente do solicitado; sentido econômico diferente do solicitado; ativo ou derivativo diferente do solicitado; e falhas ou erros em algoritmo, desde que comprovados à B3.',
    explanationWrong: {
      A: 'Estratégia deliberada de manipulação é justamente o oposto do erro operacional — configuraria OMC IRREGULAR, não uma hipótese de permissão.',
      C: 'Uma decisão CONSCIENTE de comprar e vender o mesmo ativo não é "erro operacional" — o erro pressupõe uma falha não intencional, distinta da vontade do cliente.',
      D: 'A ausência de registro formal não é uma das hipóteses de erro operacional previstas — as hipóteses são específicas (preço, quantidade, sentido, ativo, falha de algoritmo).',
    },
    examTip: 'OMC por erro operacional permitida: preço errado, quantidade errada, sentido econômico errado, ativo errado, ou falha de algoritmo comprovada.',
    commonTrap: null,
    ...SRC('OMC – operações de mesmo comitente', '671'),
  },
  {
    topic: 'OMC — Operações de mesmo comitente',
    subtopic: 'OMC irregular — consequência',
    difficulty: 'prova',
    statement: 'A OMC que consiste em mera desistência do investidor/participante em leilão, sem fundamento que a classifique como regular, é considerada irregular porque:',
    options: {
      A: 'não gera qualquer efeito prático relevante no mercado.',
      B: 'desloca demanda, altera preço e liquidez do ativo, prejudicando outros investidores.',
      C: 'é vedada apenas quando praticada por formadores de mercado.',
      D: 'só é relevante fora do horário de leilão.',
    },
    correct: 'B',
    explanation:
      'OMC que é mera desistência do investidor/participante em leilão, sem fundamento que a classifique como regular, é considerada irregular, porque desloca demanda, altera preço e liquidez do ativo e, assim, prejudica outros investidores — configurando infração ao dever de zelar pela integridade do mercado (Resolução CVM 35/21) e criação de condições artificiais (Resolução CVM 62/2022).',
    explanationWrong: {
      A: 'É o oposto: a OMC irregular gera efeitos concretos e prejudiciais — desloca demanda, altera preço e liquidez.',
      C: 'Não é uma vedação restrita a formadores de mercado — aplica-se a qualquer investidor/participante que pratique OMC irregular em leilão.',
      D: 'É justamente no CONTEXTO DO LEILÃO que a OMC assume relevância especial, dado seu papel na formação de preço — não fora dele.',
    },
    examTip: 'OMC irregular em leilão prejudica a formação de preço: desloca demanda, altera preço/liquidez — infringe CVM 35/21 (integridade) e CVM 62/2022 (condições artificiais).',
    commonTrap: null,
    ...SRC('OMC – operações de mesmo comitente', '672'),
  },
];
