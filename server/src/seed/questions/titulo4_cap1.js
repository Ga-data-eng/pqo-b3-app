// Título IV - Gestão de risco
// Capítulo I - Gestão de risco na Câmara
// Fonte: Guia Por Dentro da B3, páginas 432-451.

export const chapterRef = { titleNumber: 'IV', chapterNumber: 'I' };

export const topics = [
  'Conceitos internacionais de risco',
  'Câmara B3 e cadeia de responsabilidades',
  'Estrutura de salvaguardas',
  'Limites de concentração e garantias',
  'Monitoramento de risco intradiário',
];

const SRC = (section, page) => ({
  source_title: 'Guia Por Dentro da B3',
  source_chapter: 'Título IV, Capítulo I — Gestão de risco na Câmara',
  source_section: section,
  source_page: page,
});

export const questions = [
  // ---------- Conceitos internacionais de risco ----------
  {
    topic: 'Conceitos internacionais de risco',
    subtopic: 'Risco de principal',
    difficulty: 'medio',
    statement: 'O risco de perda do principal de uma transação, por ter pago ou entregue os ativos sem receber a contrapartida em ativos ou dinheiro, é conhecido como:',
    options: {
      A: 'Risco legal.',
      B: 'Risco de principal.',
      C: 'Risco operacional.',
      D: 'Risco de liquidez.',
    },
    correct: 'B',
    explanation:
      'O risco de principal é o risco de perda do principal da transação por ter pagado ou entregado os ativos sem o recebimento da contrapartida em ativos ou dinheiro — um dos riscos mais relevantes em operações com ativos no mercado à vista, mitigado pelos mecanismos de entrega contra pagamento (DVP).',
    explanationWrong: {
      A: 'Risco legal é a possibilidade de perda por aplicação inesperada de lei/regulamento ou mudança de interpretação — não a perda por falta de contrapartida na entrega/pagamento.',
      C: 'Risco operacional decorre de deficiências em sistemas, processos, erros humanos ou eventos externos — não da ausência de contrapartida em uma transação.',
      D: 'Risco de liquidez é a indisponibilidade temporária de recursos/ativos para cumprir obrigações — distinto da perda por entrega sem contrapartida.',
    },
    examTip:
      'Risco de principal = "entreguei e não recebi" (ou vice-versa). É mitigado pelo DVP (entrega contra pagamento), mecanismo já visto no Título I.',
    commonTrap:
      'O risco de principal é um SUBCOMPONENTE do risco de crédito (junto com o risco de custo de substituição) — não é uma categoria isolada e independente na classificação do Guia.',
    ...SRC('2. Conceitos internacionais de risco — Risco de crédito', '433'),
  },
  {
    topic: 'Conceitos internacionais de risco',
    subtopic: 'Risco de mercado x risco de liquidez',
    difficulty: 'dificil',
    statement: 'A diferença entre risco de mercado e risco de liquidez, segundo as definições internacionais adotadas pela B3, é que o risco de mercado:',
    options: {
      A: 'Consiste no risco de indisponibilidade temporária de recursos ou ativos necessários ao cumprimento de obrigações.',
      B: 'Consiste no risco de perdas em decorrência da variação de preço dos ativos e contratos em valor superior ao das garantias.',
      C: 'É gerado por deficiências em sistemas tecnológicos e processos internos.',
      D: 'É a possibilidade de perda por aplicação inesperada de lei ou regulamento.',
    },
    correct: 'B',
    explanation:
      'O risco de mercado consiste no risco de perdas em decorrência da variação de preço dos ativos e contratos em valor superior ao das garantias depositadas. Já o risco de liquidez é a indisponibilidade temporária de recursos ou ativos necessários ao cumprimento de obrigações.',
    explanationWrong: {
      A: 'Essa é a definição de risco de LIQUIDEZ, não de risco de mercado — foco em disponibilidade de recursos, não em variação de preço.',
      C: 'Essa é a definição de risco OPERACIONAL, relacionada a falhas de sistemas/processos, não a variações de preço de mercado.',
      D: 'Essa é a definição de risco LEGAL, relacionada a mudanças normativas/interpretativas, sem relação com variação de preços.',
    },
    examTip:
      'Risco de mercado = variação de PREÇO além das garantias. Risco de liquidez = falta de RECURSOS DISPONÍVEIS para pagar, mesmo que a garantia exista "no papel".',
    commonTrap:
      'Uma câmara pode ter garantias suficientes em VALOR, mas ainda assim enfrentar risco de liquidez se esses ativos não puderem ser convertidos rapidamente em recursos disponíveis — são riscos relacionados, mas distintos.',
    ...SRC('2. Conceitos internacionais de risco — Risco de mercado; Risco de liquidez', '433-434'),
  },
  {
    topic: 'Conceitos internacionais de risco',
    subtopic: 'Eficiência da liquidez',
    difficulty: 'dificil',
    statement: 'A "eficiência da liquidez", mencionada no contexto do risco de liquidez, é um indicador que mede:',
    options: {
      A: 'O quanto a atuação das câmaras reduz a liquidez necessária para liquidar todas as operações que ocorrem em seu âmbito.',
      B: 'A velocidade de processamento dos sistemas tecnológicos da câmara.',
      C: 'A quantidade de participantes inadimplentes em determinado período.',
      D: 'O volume total de garantias depositadas pelos comitentes.',
    },
    correct: 'A',
    explanation:
      'A eficiência da liquidez é um indicador do quanto a atuação das câmaras reduz a liquidez necessária para liquidar todas as operações que ocorrem no seu âmbito. A liquidação pelo saldo multilateral (em vez de bilateral, bruta) reduz significativamente a necessidade de liquidez do sistema como um todo.',
    explanationWrong: {
      B: 'Não é uma medida de velocidade de processamento tecnológico — é uma medida relacionada à redução da necessidade de liquidez via compensação multilateral.',
      C: 'Não mede diretamente a quantidade de inadimplentes — é um conceito ligado à eficácia da compensação multilateral em reduzir a necessidade agregada de recursos líquidos.',
      D: 'Não é simplesmente o volume de garantias — é sobre o quanto a atuação da câmara (via netting multilateral) reduz a NECESSIDADE de liquidez do sistema.',
    },
    examTip:
      'Eficiência da liquidez = benefício direto da compensação multilateral (netting): ao invés de liquidar cada operação bilateralmente, a câmara consolida tudo, reduzindo o volume de recursos necessário.',
    commonTrap:
      'Conecta diretamente com o conceito de "compensação multilateral" visto no Título I — a eficiência da liquidez é justamente o benefício prático desse mecanismo.',
    ...SRC('2. Conceitos internacionais de risco — Risco de liquidez', '434'),
  },

  // ---------- Câmara B3 e cadeia de responsabilidades ----------
  {
    topic: 'Câmara B3 e cadeia de responsabilidades',
    subtopic: 'Risco sistêmico',
    difficulty: 'facil',
    statement: 'As câmaras de compensação e liquidação são essenciais para evitar o risco sistêmico, que é definido como:',
    options: {
      A: 'A possibilidade de uma inadimplência se propagar para outras instituições do mercado em efeito dominó.',
      B: 'A variação cambial que afeta apenas operações em moeda estrangeira.',
      C: 'O risco exclusivo de fraude interna em uma única instituição.',
      D: 'A impossibilidade de qualquer participante acessar o mercado de capitais.',
    },
    correct: 'A',
    explanation:
      'O risco sistêmico é a possibilidade de uma inadimplência se propagar para outras instituições do mercado em efeito dominó. As câmaras centralizam a administração do risco das transações, promovendo mensuração adequada e constituindo mecanismos de salvaguardas suficientes para impedir que a inadimplência de um participante afete os demais.',
    explanationWrong: {
      B: 'Risco sistêmico não é restrito a operações cambiais — é um conceito amplo sobre a propagação de inadimplência entre instituições de qualquer natureza.',
      C: 'Não se trata de fraude interna isolada — é sobre o efeito de contágio de uma inadimplência sobre TODO o sistema, não um risco confinado a uma única instituição.',
      D: 'Não é sobre impossibilidade geral de acesso ao mercado — é especificamente sobre o efeito dominó de uma inadimplência entre instituições interligadas.',
    },
    examTip:
      'Risco sistêmico = "efeito dominó": a quebra de um participante contamina outros. É exatamente o que a estrutura de salvaguardas da câmara existe para evitar.',
    commonTrap:
      'Esse conceito já apareceu no Título I (papel do Bacen mitigando risco sistêmico) — aqui se aplica especificamente ao papel das câmaras de compensação e liquidação.',
    ...SRC('3. A importância das câmaras de compensação e liquidação', '435'),
  },
  {
    topic: 'Câmara B3 e cadeia de responsabilidades',
    subtopic: 'Responsabilidade da B3',
    difficulty: 'dificil',
    statement: 'A B3 assume a posição de contraparte central para fins de liquidação das obrigações resultantes de operações por ela aceitas:',
    options: {
      A: 'Perante todos os participantes da cadeia, indistintamente, incluindo comitentes diretamente.',
      B: 'Exclusivamente em relação aos membros de compensação.',
      C: 'Apenas em relação aos participantes de negociação plenos, nunca aos membros de compensação.',
      D: 'Somente em relação aos comitentes não residentes.',
    },
    correct: 'B',
    explanation:
      'A B3 assume a posição de contraparte central exclusivamente em relação aos membros de compensação. Perante os demais participantes (PNP, PL, PN, comitentes), a B3 não é responsável pela inadimplência de uns para com os outros, independentemente dos motivos da falha.',
    explanationWrong: {
      A: 'É o oposto: a responsabilidade da B3 como contraparte central é restrita aos membros de compensação, não se estende indistintamente a toda a cadeia.',
      C: 'É o inverso: a B3 assume a posição de CCP em relação ao membro de compensação, não ao PNP diretamente.',
      D: 'Não há essa restrição a comitentes não residentes — a regra geral (responsabilidade restrita ao membro de compensação) vale de forma ampla, com regras específicas apenas para a forma de liquidação em dólar desses comitentes.',
    },
    examTip:
      '"Perante os demais participantes, a B3 NÃO é responsável pela inadimplência de uns para com os outros" — frase literal e crucial do Guia, destacada como "Importante!".',
    commonTrap:
      'A prova pode tentar generalizar a atuação da B3 como CCP para "todos os participantes" — mas ela é estritamente limitada aos membros de compensação, com a cadeia de responsabilidade se propagando por outros níveis de forma diferente.',
    ...SRC('5. Estrutura de participantes e cadeia de responsabilidades — Responsabilidades da B3', '437'),
  },
  {
    topic: 'Câmara B3 e cadeia de responsabilidades',
    subtopic: 'Responsabilidade do membro de compensação',
    difficulty: 'prova',
    statement: 'A responsabilidade do membro de compensação pelas obrigações decorrentes de uma operação, uma vez aceita pela câmara, estende-se até a completa extinção das obrigações, independentemente de:',
    options: {
      A: 'Apenas erros cometidos pelo próprio membro de compensação.',
      B: 'Falha ou incapacidade de pagamento dos participantes a ele vinculados, e da suficiência ou qualidade das garantias depositadas.',
      C: 'Decisões tomadas exclusivamente pela CVM.',
      D: 'Alterações na política monetária do Bacen.',
    },
    correct: 'B',
    explanation:
      'A responsabilidade do membro de compensação se estende até a completa extinção de todas as obrigações decorrentes das operações, independentemente da ocorrência de falha ou incapacidade de pagamento/entrega dos participantes a ele vinculados, e da suficiência e qualidade das garantias depositadas.',
    explanationWrong: {
      A: 'A responsabilidade não é limitada a erros próprios — ela persiste mesmo diante de falhas de terceiros (participantes vinculados a ele), o que é justamente o ponto central da cadeia de responsabilidades.',
      C: 'Não há relação direta entre a persistência dessa responsabilidade e decisões da CVM — o mecanismo é interno à estrutura de responsabilidades da câmara.',
      D: 'Política monetária do Bacen não é o fator que determina a persistência da responsabilidade do membro de compensação nesse contexto.',
    },
    examTip:
      'A cadeia de responsabilidades é "blindada": cada elo responde perante o elo acima, MESMO que o elo abaixo falhe. O membro de compensação não pode se eximir alegando falha de um PNP/PL/comitente vinculado.',
    commonTrap:
      'Esse é o princípio estrutural mais importante do capítulo: a responsabilidade NÃO se transfere para cima só porque quem está "embaixo" na cadeia falhou — cada nível assume o próprio risco perante o nível superior.',
    ...SRC('5. Estrutura de participantes e cadeia de responsabilidades — Responsabilidades dos membros de compensação', '437-438'),
  },
  {
    topic: 'Câmara B3 e cadeia de responsabilidades',
    subtopic: 'Responsabilidade do PNP mesmo com falha do comitente',
    difficulty: 'prova',
    statement: 'Se um comitente vinculado a um Participante de Negociação Pleno (PNP) falha em cumprir suas obrigações, o PNP:',
    options: {
      A: 'Fica automaticamente isento de qualquer responsabilidade perante o membro de compensação.',
      B: 'Permanece responsável pelas obrigações assumidas perante o membro de compensação, mesmo diante da falha do comitente vinculado a ele.',
      C: 'Transfere toda a responsabilidade diretamente para a B3.',
      D: 'Só permanece responsável se a falha for superior a 30 dias.',
    },
    correct: 'B',
    explanation:
      'O participante de negociação pleno permanece responsável pelas obrigações assumidas perante o membro de compensação, mesmo em caso de falha ou incapacidade de pagamento ou de entrega dos comitentes e participantes de negociação a ele vinculados.',
    explanationWrong: {
      A: 'É o oposto: a falha do comitente NÃO isenta o PNP — ele continua responsável perante o membro de compensação.',
      C: 'A responsabilidade não é transferida para a B3 — ela permanece no nível do PNP perante o membro de compensação, conforme a cadeia estruturada.',
      D: 'Não há esse prazo de 30 dias como condição de isenção — a responsabilidade do PNP é incondicional em relação à falha do comitente vinculado.',
    },
    examTip:
      'Regra geral em toda a cadeia (B3→MC→PNP/PL→PN→comitente): cada nível responde pelo nível abaixo dele, SEM EXCEÇÃO por falha do elo inferior. É a espinha dorsal do sistema de garantias.',
    commonTrap:
      'Essa "blindagem" da cadeia se repete em cada nível (MC, PNP, PL, PN) — decore o princípio geral em vez de tentar memorizar cada caso separadamente.',
    ...SRC('5. Estrutura de participantes e cadeia de responsabilidades — Responsabilidades do PNP e do PL', '438-439'),
  },

  // ---------- Estrutura de salvaguardas ----------
  {
    topic: 'Estrutura de salvaguardas',
    subtopic: 'Defaulters pay x Survivors pay x CCP Capital x Third Party Pays',
    difficulty: 'prova',
    statement: 'Na estrutura de salvaguardas da Câmara B3, os recursos da própria câmara alocados para o tratamento de inadimplências são conhecidos como:',
    options: {
      A: 'Defaulters Pay.',
      B: 'Survivors Pay.',
      C: 'CCP Capital.',
      D: 'Third Party Pays.',
    },
    correct: 'C',
    explanation:
      'CCP Capital são os recursos da própria câmara (a B3, na qualidade de contraparte central) alocados para o tratamento de inadimplências — parte do fundo mutualizado, ao lado das garantias prestadas pelos membros de compensação (survivors pay).',
    explanationWrong: {
      A: 'Defaulters Pay são recursos depositados como garantia, usados apenas em caso de inadimplência do PRÓPRIO participante contribuinte — não são recursos da câmara.',
      B: 'Survivors Pay são recursos depositados por TODOS os membros de compensação, compondo um fundo mutualizado usável em caso de inadimplência de terceiros — não são recursos próprios da câmara.',
      D: 'Third Party Pays são recursos de terceiros — linhas de assistência à liquidez contratadas pela B3 com instituições financeiras, não recursos próprios da câmara.',
    },
    examTip:
      'Defaulters pay = garantia do PRÓPRIO inadimplente. Survivors pay = fundo mutualizado dos DEMAIS membros. CCP Capital = recursos da PRÓPRIA B3. Third party pays = linhas de terceiros (bancos).',
    commonTrap:
      'A Câmara B3 usa um modelo HÍBRIDO combinando defaulters pay (risco calculado normal) + fundo mutualizado com survivors pay e CCP Capital (cenários mais severos/risco residual) — não é só um mecanismo isolado.',
    ...SRC('6. Estrutura de salvaguardas', '442'),
  },
  {
    topic: 'Estrutura de salvaguardas',
    subtopic: 'Modelo híbrido da Câmara B3',
    difficulty: 'dificil',
    statement: 'No modelo híbrido de salvaguardas da Câmara B3, o risco residual (cenários mais severos) é coberto por:',
    options: {
      A: 'Apenas pelas garantias individuais do próprio participante inadimplente.',
      B: 'Um fundo mutualizado (fundo de liquidação), composto por garantias de todos os membros de compensação e pela própria B3.',
      C: 'Recursos exclusivos do Banco Central do Brasil.',
      D: 'Doações voluntárias de investidores não vinculados à operação.',
    },
    correct: 'B',
    explanation:
      'A Câmara B3 mantém um modelo híbrido em que o risco calculado para cenários normais é coberto por garantias do próprio participante (defaulters pay), e o risco residual, para cenários mais severos, é coberto por um fundo mutualizado (fundo de liquidação), composto por garantias de todos os membros de compensação (survivors pay) e da própria B3 (CCP Capital).',
    explanationWrong: {
      A: 'A cobertura apenas pelo próprio participante (defaulters pay) é usada para o risco "normal", calculado — não para o risco RESIDUAL de cenários mais severos, que exige o fundo mutualizado.',
      C: 'O Bacen não é a fonte de recursos do fundo mutualizado da Câmara B3 — os recursos vêm dos membros de compensação e da própria B3.',
      D: 'Não há esse mecanismo de doações voluntárias descrito — a estrutura é formal, com contribuições obrigatórias dos membros de compensação e da B3.',
    },
    examTip:
      'Modelo híbrido: risco "normal" → defaulters pay (individual). Risco "severo"/residual → fundo mutualizado (survivors pay + CCP Capital).',
    commonTrap:
      'Não pense que a câmara cobre TODO risco só com a garantia do inadimplente — o mecanismo é em CAMADAS, com o fundo mutualizado entrando apenas quando a garantia individual não é suficiente.',
    ...SRC('6. Estrutura de salvaguardas', '442'),
  },
  {
    topic: 'Estrutura de salvaguardas',
    subtopic: 'Mutualização por tipo de salvaguarda',
    difficulty: 'prova',
    statement: 'Entre os componentes da estrutura de salvaguardas destinados à contenção do risco de mercado, é considerado MUTUALIZÁVEL:',
    options: {
      A: 'A garantia de operações, depositada pelo comitente.',
      B: 'O saldo operacional, depositado pelo PNP/PL e/ou MC.',
      C: 'O fundo de liquidação, com contribuição do PNP/PL/MC e da B3.',
      D: 'Nenhum dos componentes é mutualizável.',
    },
    correct: 'C',
    explanation:
      'Segundo a tabela de componentes de salvaguarda do Guia: a garantia de operações (comitente) e o saldo operacional (PNP/PL e/ou MC) NÃO são mutualizáveis; apenas o fundo de liquidação (contribuído por PNP/PL/MC e pela B3) é mutualizável.',
    explanationWrong: {
      A: 'A garantia de operações do comitente é individual e NÃO mutualizável — cobre apenas o risco daquele comitente específico.',
      B: 'O saldo operacional do PNP/PL/MC também não é mutualizável — cobre o risco intradiário daquele participante específico.',
      D: 'Há sim um componente mutualizável: o fundo de liquidação, que reúne contribuições de vários participantes e da B3, disponível para cobrir inadimplência de terceiros.',
    },
    examTip:
      'Só o FUNDO DE LIQUIDAÇÃO é mutualizável (compartilhado entre participantes). Garantia de operações e saldo operacional são individuais, não mutualizáveis.',
    commonTrap:
      'A prova pode testar justamente essa exceção: entre os três componentes de risco de mercado da tabela, apenas UM é mutualizável — não generalize "toda garantia é individual" nem "tudo é compartilhado".',
    ...SRC('6. Estrutura de salvaguardas — Componentes da estrutura de salvaguardas', '443'),
  },

  // ---------- Limites de concentração e garantias ----------
  {
    topic: 'Limites de concentração e garantias',
    subtopic: 'Limite de nível 1 x nível 2',
    difficulty: 'prova',
    statement: 'Nos limites de concentração de posições em aberto da B3, a violação do limite de NÍVEL 2 pode acarretar, entre outras consequências:',
    options: {
      A: 'Apenas cobrança de margem adicional, sem qualquer outra ação.',
      B: 'Redução compulsória da posição que exceder o limite, em prazo estabelecido pela B3, além de aumento de margem adicional e cobrança de multa.',
      C: 'Cancelamento automático e definitivo do cadastro do comitente.',
      D: 'Nenhuma consequência prática, sendo apenas um indicador informativo.',
    },
    correct: 'B',
    explanation:
      'O limite de nível 2 é indicativo para: aumento de margem adicional requerida; redução compulsória da posição que exceder o limite, em prazo estabelecido pela B3; e cobrança de multa. Já o limite de nível 1 é indicativo apenas para cobrança de margem adicional.',
    explanationWrong: {
      A: 'Apenas cobrança de margem adicional é a consequência do limite de NÍVEL 1, não do nível 2, que tem consequências mais severas.',
      C: 'Não há essa consequência de cancelamento definitivo do cadastro descrita para violação de limites de concentração — as medidas são de natureza financeira/operacional (margem, redução de posição, multa).',
      D: 'Há sim consequências práticas e concretas para a violação do limite de nível 2 — não é meramente informativo.',
    },
    examTip:
      'Nível 1 = só margem adicional (mais brando). Nível 2 = margem adicional MAIOR + redução compulsória da posição + multa (mais severo).',
    commonTrap:
      'Não trate os dois níveis como equivalentes — o nível 2 tem consequências adicionais e mais graves que o nível 1, incluindo a redução forçada da posição.',
    ...SRC('7. Limites de concentração de posições em aberto', '445'),
  },
  {
    topic: 'Limites de concentração e garantias',
    subtopic: 'Cálculo de limites — exemplo prático',
    difficulty: 'prova',
    statement:
      'Em um instrumento com 21.000 contratos em aberto no mercado, os parâmetros de limite de nível 1 são P1 = 20% e L1 = 5.000. O limite de nível 1 (Limite 1 = Max[P1×Q; L1]) para esse instrumento é de:',
    options: {
      A: '4.200 contratos.',
      B: '5.000 contratos.',
      C: '21.000 contratos.',
      D: '9.000 contratos.',
    },
    correct: 'B',
    explanation:
      'Limite 1 = Máximo(P1 × Q; L1) = Máximo(20% × 21.000; 5.000) = Máximo(4.200; 5.000) = 5.000 contratos. Como 5.000 é maior que 4.200, prevalece o valor fixo L1 = 5.000.',
    explanationWrong: {
      A: '4.200 é o resultado de 20% × 21.000, mas a fórmula pede o MÁXIMO entre esse valor e L1 (5.000) — como 5.000 é maior, é ele que prevalece, não 4.200.',
      C: '21.000 é a quantidade total de contratos em aberto (Q), não o resultado do cálculo do limite.',
      D: '9.000 corresponde ao limite de NÍVEL 2 nesse exemplo (L2), não ao limite de nível 1.',
    },
    examTip:
      'Fórmula do limite: sempre pegue o MAIOR entre o percentual do total (P×Q) e o valor fixo (L) — nunca o menor, nem a soma dos dois.',
    commonTrap:
      'A fórmula usa MÁXIMO, não mínimo nem soma — um erro comum é pegar o menor valor entre os dois parâmetros, invertendo a lógica da fórmula.',
    ...SRC('7. Limites de concentração de posições em aberto — Exemplo', '445-446'),
  },
  {
    topic: 'Limites de concentração e garantias',
    subtopic: 'Critério de elegibilidade de garantias',
    difficulty: 'medio',
    statement: 'Sobre o critério de elegibilidade de ativos para garantia na Câmara B3, é correto afirmar que:',
    options: {
      A: 'Qualquer ativo pode ser aceito como garantia, sem restrição de risco.',
      B: 'Somente é admitido o depósito de ativo que apresente nível aceitável de risco, conforme definido pela Câmara B3.',
      C: 'Apenas moeda estrangeira pode ser utilizada como garantia.',
      D: 'A carta de fiança bancária é sempre aceita, mesmo quando o comitente for instituição financeira bancária.',
    },
    correct: 'B',
    explanation:
      'Somente é admitido o depósito de ativo que apresente nível aceitável de risco, conforme definido pela Câmara B3. O PNP, PN, PL e MC respondem pelo risco de crédito da emissão e pela autenticidade do ativo depositado como garantia.',
    explanationWrong: {
      A: 'Não é qualquer ativo — há critérios de elegibilidade rigorosos relacionados ao risco aceitável do ativo, definidos pela Câmara.',
      C: 'O depósito de garantias é feito preferencialmente em moeda nacional, podendo ser substituído por outros ativos/moedas a critério da Câmara — não é restrito à moeda estrangeira.',
      D: 'O Guia especifica explicitamente que a carta de fiança bancária NÃO é aceita como garantia de comitente que seja instituição financeira bancária — há essa exceção específica.',
    },
    examTip:
      'Elegibilidade de garantia = "nível aceitável de risco" definido pela Câmara. Exceção específica: carta de fiança bancária NÃO vale para comitente que é banco.',
    commonTrap:
      'A exceção da carta de fiança bancária para comitentes bancários é um detalhe específico e bem cobrável — evita um conflito de interesse óbvio (o banco não pode "se autogarantir" com sua própria fiança).',
    ...SRC('8. Administração de garantias — Critério de elegibilidade; Ativos elegíveis', '447-448'),
  },

  // ---------- Monitoramento de risco intradiário ----------
  {
    topic: 'Monitoramento de risco intradiário',
    subtopic: 'Aceitação da operação — mercado de bolsa',
    difficulty: 'dificil',
    statement: 'No mercado de bolsa, a aceitação de uma operação pela Câmara B3 ocorre:',
    options: {
      A: 'No momento do fechamento, executado pelo sistema de negociação, das ofertas de compra e de venda que a originam.',
      B: 'Apenas no dia útil seguinte à data de registro, após confirmação de garantias.',
      C: 'Somente após a assembleia geral de acionistas da B3.',
      D: 'No momento do pagamento de dividendos da empresa negociada.',
    },
    correct: 'A',
    explanation:
      'No mercado de bolsa, a aceitação de uma operação registrada ocorre no momento do fechamento, executado pelo sistema de negociação, das ofertas de compra e de venda que a originam. Somente após aceita, a operação passa a compor a carteira do participante para a qual a B3 atua como CCP.',
    explanationWrong: {
      B: 'A confirmação no dia útil subsequente ao registro é a regra para os DEMAIS contratos do mercado de balcão organizado (com garantia total/parcial), não para o mercado de bolsa.',
      C: 'Não há relação entre a aceitação de uma operação individual e assembleias gerais de acionistas da B3 — são processos completamente distintos.',
      D: 'Pagamento de dividendos é um evento corporativo da empresa emissora, sem relação com o momento de aceitação de uma operação pela câmara.',
    },
    examTip:
      'Mercado de bolsa: aceitação = fechamento das ofertas no sistema de negociação. Balcão organizado (com garantia): aceitação = dia útil seguinte, após confirmar garantias.',
    commonTrap:
      'O momento de aceitação varia conforme o MERCADO (bolsa x balcão) e a MODALIDADE de contrato — não existe um único momento universal de aceitação para todas as operações.',
    ...SRC('9. Monitoramento do risco intradiário — Aceitação da operação', '450'),
  },
  {
    topic: 'Monitoramento de risco intradiário',
    subtopic: 'Risco pré-negociação',
    difficulty: 'dificil',
    statement: 'No modelo de risco pré-negociação da B3, os VALORES dos limites atribuídos a cada conta de comitente e conta máster são definidos por:',
    options: {
      A: 'Exclusivamente pela B3, sem qualquer participação do PNP.',
      B: 'O PNP responsável pela conta, respeitados os valores máximos estabelecidos pela B3.',
      C: 'O próprio comitente, sem qualquer limite superior.',
      D: 'A CVM, mediante aprovação prévia de cada operação.',
    },
    correct: 'B',
    explanation:
      'Os tipos de limite aos quais as ofertas são submetidas são definidos pela B3, enquanto os VALORES dos limites atribuídos a cada conta de comitente e conta máster são definidos pelo PNP responsável por ela, respeitados os valores máximos estabelecidos pela B3.',
    explanationWrong: {
      A: 'A B3 define os TIPOS de limite, mas os VALORES específicos por conta são definidos pelo PNP — há sim participação do PNP nesse processo.',
      C: 'O comitente não define os limites de risco pré-negociação de sua própria conta — essa definição cabe ao PNP, dentro dos parâmetros máximos da B3.',
      D: 'Não há aprovação prévia de cada operação pela CVM nesse contexto — o modelo de risco pré-negociação é operacionalizado pela B3 e pelo PNP, automaticamente, antes da inserção da oferta no livro.',
    },
    examTip:
      'B3 define os TIPOS de limite (o quê é limitado). PNP define os VALORES específicos por conta (quanto é o limite), sempre dentro do teto máximo fixado pela B3.',
    commonTrap:
      'Divisão de responsabilidades sutil: "tipo de limite" (B3) x "valor do limite" (PNP) — a prova pode testar se você sabe quem faz cada parte dessa definição.',
    ...SRC('9. Monitoramento do risco intradiário — Monitoramento de risco pré-negociação', '450'),
  },
  {
    topic: 'Monitoramento de risco intradiário',
    subtopic: 'Saldo operacional — fórmula',
    difficulty: 'prova',
    statement: 'Segundo a fórmula do saldo operacional (Saldo Operacional = Limite Intradiário + Garantias Depositadas − Risco Intradiário), um resultado NEGATIVO indica:',
    options: {
      A: 'Que o participante está operando com folga excepcional, sem qualquer necessidade de ação.',
      B: 'Desenquadramento, exigindo ações imediatas, como depositar mais garantias ou reduzir posições.',
      C: 'Que a B3 deve automaticamente encerrar as atividades do participante, sem possibilidade de correção.',
      D: 'Que o limite de risco intradiário deve ser eliminado permanentemente.',
    },
    correct: 'B',
    explanation:
      'Se o resultado da fórmula do saldo operacional for negativo, ocorre o desenquadramento, exigindo ações imediatas do participante, como depositar mais garantias ou reduzir posições. Se positivo, o participante está operando dentro dos limites estabelecidos.',
    explanationWrong: {
      A: 'É o oposto: um resultado negativo indica DESENQUADRAMENTO (problema), não folga — a folga corresponde a um resultado positivo.',
      C: 'Não há encerramento automático e definitivo das atividades — a exigência é de ações corretivas imediatas (mais garantias ou redução de posição), não uma penalidade irreversível.',
      D: 'O limite de risco intradiário não é eliminado — ele continua sendo o parâmetro de referência; o que muda é a necessidade de ação corretiva por parte do participante.',
    },
    examTip:
      'Saldo operacional positivo = tudo OK, dentro do limite. Saldo operacional negativo = desenquadramento, exige correção imediata (mais garantia ou reduzir posição).',
    commonTrap:
      'Não confunda "negativo" com "penalidade automática irreversível" — é um sinal de alerta que exige ação corretiva, dentro da lógica de monitoramento contínuo do risco intradiário.',
    ...SRC('9. Monitoramento do risco intradiário — Saldo operacional', '451'),
  },
];
