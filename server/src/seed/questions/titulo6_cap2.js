// Título VI - Câmara de compensação e liquidação
// Capítulo II - Processos operacionais da Câmara B3
// Fonte: Guia Por Dentro da B3, páginas ~556-580.

export const chapterRef = { titleNumber: 'VI', chapterNumber: 'II' };

export const topics = [
  'Modalidades das operações',
  'Contratação de empréstimo de ativos',
  'Contas, vínculos e carteiras',
  'Captura, alocação, aceitação e repasse',
  'Controle de posições',
  'Inadimplência',
  'Ofertas públicas e leilão de fundos setoriais',
  'Custos e encargos',
];

const SRC = (section, page) => ({
  source_title: 'Guia Por Dentro da B3',
  source_chapter: 'Título VI, Capítulo II — Processos operacionais da Câmara B3',
  source_section: section,
  source_page: page,
});

export const questions = [
  // ---------- Modalidades das operações ----------
  {
    topic: 'Modalidades das operações',
    subtopic: 'Sem garantia com liquidação bruta',
    difficulty: 'prova',
    statement: 'A modalidade de operação em que a câmara não atua como contraparte central de nenhuma das partes, mas operacionaliza o processo de liquidação, garantindo apenas a entrega de ativos contra pagamento, é chamada de:',
    options: {
      A: 'com garantia total.',
      B: 'com garantia parcial.',
      C: 'sem garantia com liquidação bruta.',
      D: 'com garantia total no ambiente de empréstimo.',
    },
    correct: 'C',
    explanation:
      'Na modalidade "sem garantia e com liquidação bruta", a câmara não atua como contraparte central de nenhuma das partes da operação, mas operacionaliza o processo de liquidação. Trata-se da confirmação de registro, e a câmara garante apenas o processo de entrega de ativos contra pagamento.',
    explanationWrong: {
      A: 'Na modalidade "com garantia total", a câmara atua como contraparte central de AMBAS as partes — o oposto do descrito na questão.',
      B: 'Na modalidade "com garantia parcial" (que contempla contratos de swap), a câmara atua como contraparte central de APENAS UMA das partes — também diferente do descrito.',
      D: 'No ambiente de empréstimo, a única modalidade prevista é "com garantia total", em que a câmara é contraparte central de ambas as partes.',
    },
    examTip: 'Com garantia total = contraparte de AMBAS. Com garantia parcial = contraparte de APENAS UMA (ex.: swap). Sem garantia com liquidação bruta = câmara só FACILITA, sem ser contraparte de nenhuma.',
    commonTrap: '⚠️ Muito cobrado em prova — decore as três modalidades e o papel exato da câmara em cada uma.',
    ...SRC('Modalidades das operações', '556-557'),
  },
  {
    topic: 'Modalidades das operações',
    subtopic: 'Modalidades no ambiente de registro',
    difficulty: 'medio',
    statement: 'As modalidades das operações registradas nos ambientes de registro administrados pela B3 e aceitas pela câmara podem ser realizadas:',
    options: {
      A: 'apenas com garantia total.',
      B: 'com garantia, sem garantia e com garantia parcial.',
      C: 'apenas sem garantia.',
      D: 'apenas com garantia parcial, exclusiva para swaps.',
    },
    correct: 'B',
    explanation:
      'As modalidades das operações registradas nos ambientes de registro podem ser realizadas com garantia total, com garantia parcial (contratos de swap) e sem garantia (com liquidação bruta) — diferentemente do ambiente de negociação, que possui apenas duas modalidades (com garantia total e sem garantia com liquidação bruta).',
    explanationWrong: {
      A: 'O ambiente de registro admite mais de uma modalidade — não é restrito apenas à garantia total.',
      C: 'Também existem modalidades com garantia (total e parcial) no ambiente de registro, não apenas sem garantia.',
      D: 'A garantia parcial contempla swaps, mas não é a única modalidade possível no ambiente de registro — há também garantia total e sem garantia.',
    },
    examTip: 'Ambiente de registro tem as TRÊS modalidades (total/parcial/sem garantia). Ambiente de negociação só tem DUAS (total/sem garantia). Ambiente de empréstimo só tem UMA (total).',
    commonTrap: null,
    ...SRC('Modalidades das operações', '556-557'),
  },

  // ---------- Contratação de empréstimo de ativos ----------
  {
    topic: 'Contratação de empréstimo de ativos',
    subtopic: 'Autorização para inserir ofertas',
    difficulty: 'dificil',
    statement: 'Em relação à inserção de ofertas no ambiente de contratação de empréstimo de ativos, é correto afirmar que:',
    options: {
      A: 'Os PNPs estão autorizados a inserir apenas ofertas doadoras, enquanto os PLs podem inserir ofertas doadoras e tomadoras.',
      B: 'Os PNPs estão autorizados a inserir ofertas doadoras e tomadoras, enquanto os PLs estão autorizados a inserir apenas ofertas doadoras.',
      C: 'Somente os PNPs podem inserir qualquer tipo de oferta; os PLs não têm acesso ao ambiente de empréstimo.',
      D: 'Ofertas doadoras e tomadoras podem ser inseridas livremente por qualquer comitente, sem intermediação.',
    },
    correct: 'B',
    explanation:
      'Os participantes de negociação plenos (PNP) estão autorizados a inserir ofertas doadoras e tomadoras de ativos, enquanto os participantes de liquidação (PL) estão autorizados a inserir apenas ofertas doadoras.',
    explanationWrong: {
      A: 'Inverte as autorizações: é o PNP que tem acesso completo (doadora e tomadora), e o PL que é restrito apenas a ofertas doadoras — não o contrário.',
      C: 'O PL tem sim acesso ao ambiente de empréstimo, ainda que restrito a ofertas doadoras — não está excluído dele.',
      D: 'O comitente não insere ofertas diretamente — a inserção é feita pelos participantes autorizados (PNP e PL), em nome do comitente.',
    },
    examTip: 'PNP: doadora E tomadora. PL: só doadora. Assimetria clássica de prova.',
    commonTrap: '⚠️ Pegadinha recorrente: trocar as autorizações de PNP e PL entre si.',
    ...SRC('Contratação de empréstimo de ativos', '558'),
  },
  {
    topic: 'Contratação de empréstimo de ativos',
    subtopic: 'Ofertas públicas x privadas',
    difficulty: 'facil',
    statement: 'As ofertas doadoras e tomadoras no ambiente de empréstimo de ativos, que são divulgadas somente ao PNP ou ao PL especificamente indicado na oferta, são classificadas como ofertas:',
    options: {
      A: 'públicas.',
      B: 'privadas.',
      C: 'certificadas.',
      D: 'não certificadas.',
    },
    correct: 'B',
    explanation:
      'As ofertas privadas são divulgadas somente para o participante de negociação pleno ou para o participante de liquidação indicado na oferta — diferente das ofertas públicas, que podem ser consultadas e agredidas por todos os demais PNPs e PLs.',
    explanationWrong: {
      A: 'As ofertas públicas são justamente o oposto: divulgadas de forma ampla, podendo ser consultadas e agredidas por todos os demais participantes.',
      C: 'Certificada/não certificada é uma classificação distinta, relacionada ao momento e à forma de transferência dos ativos — não ao nível de divulgação da oferta.',
      D: 'Também se refere à classificação certificada/não certificada, não à divulgação pública ou privada da oferta.',
    },
    examTip: 'Pública x privada = quem PODE VER a oferta. Certificada x não certificada = COMO/QUANDO os ativos são transferidos.',
    commonTrap: null,
    ...SRC('Contratação de empréstimo de ativos', '558'),
  },

  // ---------- Contas, vínculos e carteiras ----------
  {
    topic: 'Contas, vínculos e carteiras',
    subtopic: 'Conta erro',
    difficulty: 'dificil',
    statement: 'A conta automaticamente criada pela câmara para PNPs e PLs, que recebe operações não alocadas para comitentes no prazo estabelecido, em decorrência de erro operacional, é denominada conta:',
    options: {
      A: 'erro.',
      B: 'brokerage.',
      C: 'máster.',
      D: 'formador de mercado.',
    },
    correct: 'A',
    explanation:
      'A conta erro é criada automaticamente pela câmara para os PNPs e PLs, recebendo operações não alocadas para comitentes na forma e no prazo estabelecidos, em decorrência de erro operacional. As operações de compra e venda do mesmo ATIVO alocadas na conta erro NÃO são compensadas para fins de liquidação, mas as do mesmo DERIVATIVO SÃO compensadas.',
    explanationWrong: {
      B: 'A conta brokerage é uma conta transitória usada para viabilizar o vínculo de repasse entre participantes, sem identificação do comitente final — finalidade distinta.',
      C: 'A conta máster é usada para agrupar contas de comitentes com vínculo específico entre si (gestão comum, mesmo intermediário internacional) — não se relaciona a erro operacional.',
      D: 'A conta formador de mercado é criada automaticamente para receber operações sem conta atribuída no âmbito dos programas de formador de mercado — finalidade específica e diferente da conta erro.',
    },
    examTip: 'Conta erro: ativo NÃO compensa (fica separado), derivativo SIM compensa — assimetria importante de prova.',
    commonTrap: '⚠️ Não confunda "conta erro" (recebe automaticamente por falta de alocação) com "conta erro operacional" (usada pelo participante para realocar, e onde AMBOS ativo e derivativo são compensados).',
    ...SRC('Contas, vínculos e carteiras', '560-561'),
  },
  {
    topic: 'Contas, vínculos e carteiras',
    subtopic: 'Situação da conta',
    difficulty: 'medio',
    statement: 'A situação de conta em que ela está habilitada apenas para a redução de posições na câmara, sem permitir novas alocações, é denominada:',
    options: {
      A: 'ativa.',
      B: 'suspensa parcial.',
      C: 'suspensa.',
      D: 'inativa.',
    },
    correct: 'B',
    explanation:
      'A situação "suspensa parcial" caracteriza-se por a conta estar habilitada apenas para a redução de posições na câmara. Já a situação "suspensa" é temporária e não permite NENHUM tipo de movimentação, e a "ativa" permite receber alocações, posições e movimentações normalmente.',
    explanationWrong: {
      A: 'A conta ativa está apta a receber alocações, posições e/ou movimentações normalmente — mais ampla do que a suspensa parcial.',
      C: 'A conta suspensa (sem o qualificador "parcial") não permite NENHUM tipo de movimentação — nem mesmo redução de posições.',
      D: 'A conta inativa está desativada e inabilitada para qualquer movimentação — situação diferente e mais restritiva que a suspensa parcial.',
    },
    examTip: 'Ativa (tudo) > Suspensa parcial (só reduzir posição) > Suspensa (nada) > Em inativação (transitória) > Inativa (desativada).',
    commonTrap: '⚠️ Não confunda "suspensa parcial" (permite reduzir posição) com "suspensa" (não permite nenhuma movimentação).',
    ...SRC('Situação da conta', '562'),
  },
  {
    topic: 'Contas, vínculos e carteiras',
    subtopic: 'Vínculo de repasse',
    difficulty: 'dificil',
    statement: 'O vínculo entre contas que possibilita que um participante execute ordens recebidas por meio de outros participantes e carregue as posições oriundas dessas ordens é denominado vínculo de:',
    options: {
      A: 'consolidação de margem.',
      B: 'custodiante mandatório.',
      C: 'repasse.',
      D: 'exercício de opções.',
    },
    correct: 'C',
    explanation:
      'O vínculo de repasse é estabelecido entre uma conta cadastrada sob um participante de negociação pleno e uma conta de mesma titularidade cadastrada sob outro PNP ou sob um PL, possibilitando que um participante execute ordens recebidas por meio de outros participantes e carregue as posições oriundas dessas ordens.',
    explanationWrong: {
      A: 'O vínculo de consolidação de margem vincula uma conta máster a contas normais para distribuir automaticamente uma operação alocada na máster — finalidade diferente do repasse de execução.',
      B: 'O vínculo custodiante mandatório vincula uma conta normal a uma conta em agente de custódia, direcionando entrega/recebimento de ativos — não trata de execução de ordens repassadas.',
      D: 'O vínculo de exercício de opções permite que opções registradas sob um participante sejam exercidas por outro PNP — finalidade específica de exercício, não de execução de ordens repassadas em geral.',
    },
    examTip: 'Vínculo de repasse = execução de ordens "emprestando" a estrutura de outro participante, carregando as posições resultantes.',
    commonTrap: null,
    ...SRC('Vínculos entre contas', '563-565'),
  },
  {
    topic: 'Contas, vínculos e carteiras',
    subtopic: 'Conta especial de liquidação (CEL)',
    difficulty: 'prova',
    statement: 'A conta especial de liquidação (CEL), mantida e administrada pelo Banco B3 S.A., caracteriza-se por:',
    options: {
      A: 'Ser de titularidade do membro de compensação, centralizando os fluxos de todos os seus comitentes.',
      B: 'Ser de titularidade do comitente, com características de conta-corrente, segregando a liquidação financeira dos fluxos do PNP, PL e MC responsáveis.',
      C: 'Ser exclusiva para investidores institucionais estrangeiros regulados pela SEC.',
      D: 'Substituir integralmente a necessidade de garantias depositadas na câmara.',
    },
    correct: 'B',
    explanation:
      'A CEL é uma conta especial mantida e administrada pelo Banco B3 S.A., com características de conta-corrente, de titularidade do COMITENTE, por meio da qual ocorre a liquidação financeira de suas obrigações com a câmara, de forma segregada dos fluxos financeiros do PNP, do PL e do MC responsáveis.',
    explanationWrong: {
      A: 'É o oposto: a CEL é de titularidade do COMITENTE, não do membro de compensação — e sua característica central é justamente a segregação, não a centralização.',
      C: 'A CEL pode ser utilizada por instituições financeiras sem conta reservas, fundos de investimento, comitentes não residentes e outras entidades a critério da B3 — não é exclusiva para investidores institucionais estrangeiros regulados pela SEC.',
      D: 'A CEL é um mecanismo de LIQUIDAÇÃO FINANCEIRA, não substitui a exigência de depósito de garantias perante a câmara.',
    },
    examTip: 'CEL = conta do COMITENTE (não do participante) para liquidação SEGREGADA dos fluxos do PNP/PL/MC.',
    commonTrap: '⚠️ Pegadinha: achar que a CEL é uma conta do participante — na verdade é sempre do COMITENTE, mantida pelo Banco B3.',
    ...SRC('Conta especial de liquidação (CEL)', '565-566'),
  },

  // ---------- Captura, alocação, aceitação e repasse ----------
  {
    topic: 'Captura, alocação, aceitação e repasse',
    subtopic: 'Momento de aceitação — ambiente de negociação',
    difficulty: 'prova',
    statement: 'As operações realizadas no ambiente de negociação são consideradas aceitas pela câmara no momento:',
    options: {
      A: 'da confirmação do depósito das garantias exigidas das contrapartes originais.',
      B: 'da geração do contrato de empréstimo.',
      C: 'do fechamento do negócio (matching).',
      D: 'da liquidação financeira definitiva em D+2.',
    },
    correct: 'C',
    explanation:
      'Em decorrência da aceitação de operações no ambiente de negociação, a B3 assume a posição de contraparte central para fins de liquidação, exclusivamente perante os membros de compensação, sendo tais operações consideradas aceitas pela câmara no momento do fechamento do negócio (matching).',
    explanationWrong: {
      A: 'A confirmação do depósito de garantias é o critério de aceitação para operações realizadas em MERCADO DE BALCÃO ORGANIZADO, não no ambiente de negociação.',
      B: 'A geração do contrato de empréstimo é o critério de aceitação específico para OPERAÇÕES DE EMPRÉSTIMO, não para o ambiente de negociação.',
      D: 'A liquidação financeira em D+2 é uma etapa posterior e distinta do momento de aceitação da operação pela câmara.',
    },
    examTip: 'Momentos de aceitação: negociação = matching · balcão organizado = confirmação do depósito de garantias · empréstimo = geração do contrato.',
    commonTrap: '⚠️ Muito cobrado — associe corretamente cada ambiente ao seu momento específico de aceitação pela câmara.',
    ...SRC('Aceitação de operações', '567-568'),
  },
  {
    topic: 'Captura, alocação, aceitação e repasse',
    subtopic: 'Repasse de operações',
    difficulty: 'dificil',
    statement: 'No repasse de operações, o participante recebedor do repasse (participante destino):',
    options: {
      A: 'é obrigado a aceitar toda e qualquer operação a ele repassada, sem possibilidade de recusa.',
      B: 'pode, mediante fundamentação, rejeitar operações a ele repassadas.',
      C: 'assume a responsabilidade pela administração de risco apenas após decorridos 5 dias úteis.',
      D: 'não pode receber repasse parcial de uma operação, apenas o total.',
    },
    correct: 'B',
    explanation:
      'O participante recebedor do repasse pode, mediante fundamentação, rejeitar operações a ele repassadas. O repasse é operacionalizado por meio do processo de alocação, admitindo-se, inclusive, a possibilidade de repasse parcial da operação.',
    explanationWrong: {
      A: 'É o oposto: o participante destino NÃO é obrigado a aceitar — pode rejeitar mediante fundamentação.',
      C: 'A transferência de responsabilidade ocorre mediante confirmação (explícita ou tácita) do participante destino, não após um prazo fixo de 5 dias úteis.',
      D: 'O repasse parcial é expressamente admitido — não há exigência de que seja sempre integral.',
    },
    examTip: 'Repasse: destino PODE rejeitar (com fundamentação) e PODE ser parcial — não é uma aceitação automática e obrigatória.',
    commonTrap: null,
    ...SRC('Repasse de operações', '569'),
  },

  // ---------- Controle de posições ----------
  {
    topic: 'Controle de posições',
    subtopic: 'Consulta de posição — acesso a dados cadastrais',
    difficulty: 'prova',
    statement: 'Em relação à consulta de posição detalhada por conta, é correto afirmar que:',
    options: {
      A: 'Os membros de compensação têm acesso irrestrito aos dados cadastrais de todos os comitentes.',
      B: 'Os membros de compensação não têm acesso aos dados cadastrais de comitentes.',
      C: 'Somente a CVM pode realizar consulta de posição detalhada por conta.',
      D: 'A consulta de posição está disponível apenas para o próprio comitente, não para participantes.',
    },
    correct: 'B',
    explanation:
      'Os PNPs, os PLs, os membros de compensação e os agentes de custódia são os participantes que podem realizar consulta de posição detalhada por conta — porém, é importante destacar que os membros de compensação NÃO têm acesso aos dados cadastrais de comitentes.',
    explanationWrong: {
      A: 'É exatamente o oposto do previsto — os MCs veem posições, mas NÃO têm acesso aos dados cadastrais dos comitentes.',
      C: 'A consulta de posição detalhada por conta é uma prerrogativa dos participantes (PNP, PL, MC, agente de custódia), não uma exclusividade da CVM.',
      D: 'Os participantes autorizados (PNP, PL, MC, agente de custódia) também podem realizar a consulta — não é restrita apenas ao próprio comitente.',
    },
    examTip: 'Detalhe muito específico de prova: MC vê posições, mas NÃO vê dados cadastrais do comitente (privacidade preservada na cadeia).',
    commonTrap: '⚠️ Ponto de destaque explícito no guia ("Importante!") — costuma aparecer literalmente em prova.',
    ...SRC('Consulta de posição', '571-572'),
  },
  {
    topic: 'Controle de posições',
    subtopic: 'Cobertura de posição obrigatória',
    difficulty: 'dificil',
    statement: 'Entre os tipos de posições passíveis de cobertura, aquela em que a cobertura é OBRIGATÓRIA, sujeitando-se a multas em caso de descumprimento, é a posição:',
    options: {
      A: 'vendida no mercado à vista de renda variável.',
      B: 'vendida em opção de compra de ativos do mercado à vista.',
      C: 'vendida em contrato a termo de ativos do mercado à vista.',
      D: 'tomadora em contrato de empréstimo de ativos.',
    },
    correct: 'C',
    explanation:
      'A cobertura de posições vendidas em contrato a TERMO é obrigatória. As posições vendidas em contrato a termo sem cobertura estão sujeitas à aplicação de multas, cobradas por meio de lançamento a débito no saldo líquido multilateral do membro de compensação responsável pelo comitente vendedor.',
    explanationWrong: {
      A: 'A posição vendida no mercado à vista de renda variável está entre os tipos passíveis de cobertura, mas a obrigatoriedade destacada expressamente no guia é para o contrato A TERMO.',
      B: 'A posição vendida em opção de compra também é passível de cobertura, mas não é essa a que o guia destaca como obrigatória com aplicação de multa.',
      D: 'A posição tomadora em empréstimo de ativos é passível de cobertura, mas a obrigatoriedade com multa expressa é especificamente para o contrato a termo.',
    },
    examTip: 'Cobertura em contrato a TERMO é OBRIGATÓRIA — sem cobertura, multa debitada no saldo do MC responsável pelo vendedor.',
    commonTrap: null,
    ...SRC('Cobertura de posição', '573'),
  },
  {
    topic: 'Controle de posições',
    subtopic: 'Eventos corporativos',
    difficulty: 'dificil',
    statement: 'Fusões, cisões e incorporações são exemplos de eventos corporativos classificados como:',
    options: {
      A: 'eventos corporativos em recursos financeiros.',
      B: 'eventos corporativos em ativos sem alteração do ativo-objeto.',
      C: 'eventos corporativos em ativos com alteração do ativo-objeto.',
      D: 'eventos corporativos voluntários.',
    },
    correct: 'C',
    explanation:
      'São consideradas eventos corporativos em ativos COM alteração do ativo-objeto as deliberações do emissor que resultem em crédito de ativos de tipo, espécie ou classe DIFERENTE do ativo anterior ao evento — exemplos: fusões, cisões e incorporações.',
    explanationWrong: {
      A: 'Eventos em recursos financeiros resultam em PAGAMENTO em dinheiro (dividendos, JCP, restituição de capital) — não em alteração do ativo-objeto.',
      B: 'Eventos sem alteração do ativo-objeto resultam em crédito de novos ativos do MESMO tipo/espécie/classe (grupamento, desdobramento, bonificação em ativos) — diferente de fusão/cisão/incorporação.',
      D: 'Eventos voluntários dão ao comitente a OPÇÃO de escolher se exerce o evento (direito de preferência, OPA, conversão voluntária) — fusão/cisão/incorporação não são, em si, uma opção do comitente.',
    },
    examTip: 'Dividendos/JCP = recursos financeiros. Grupamento/desdobramento/bonificação = SEM alteração do ativo-objeto. Fusão/cisão/incorporação = COM alteração do ativo-objeto. Direito de preferência/OPA = voluntário.',
    commonTrap: '⚠️ Classificação muito cobrada — memorize um exemplo-âncora para cada categoria.',
    ...SRC('Tratamento de eventos corporativos', '574-575'),
  },

  // ---------- Inadimplência ----------
  {
    topic: 'Inadimplência',
    subtopic: 'Prazo para pagamento após comunicação',
    difficulty: 'prova',
    statement: 'Após a câmara comunicar ao comitente, por carta física, a pendência financeira informada pelo participante, o comitente tem o prazo de quantos dias úteis para efetivar o pagamento devido, evitando sua inclusão no rol de inadimplentes?',
    options: {
      A: '2 dias úteis.',
      B: '5 dias úteis.',
      C: '10 dias úteis.',
      D: '30 dias úteis.',
    },
    correct: 'B',
    explanation:
      'No prazo de cinco dias úteis, a contar da data de recebimento da carta enviada pela câmara, o comitente deve efetivar, ao participante, o pagamento devido. Caso o pagamento seja efetivado nesse prazo, o processo se encerra sem a inclusão do comitente no rol de inadimplentes.',
    explanationWrong: {
      A: '2 dias úteis não corresponde ao prazo estabelecido — o prazo correto é de 5 dias úteis.',
      C: '10 dias úteis é superior ao prazo efetivamente previsto (5 dias úteis).',
      D: '30 dias úteis é um prazo muito superior ao efetivamente estabelecido no processo de inadimplência (5 dias úteis).',
    },
    examTip: 'Inadimplência de comitente: 5 dias úteis após a carta da câmara para pagar e evitar entrar no rol de inadimplentes.',
    commonTrap: null,
    ...SRC('Inadimplência', '576-577'),
  },
  {
    topic: 'Inadimplência',
    subtopic: 'Efeitos da inclusão no rol de inadimplentes',
    difficulty: 'dificil',
    statement: 'Caso o comitente não efetue o pagamento no prazo estabelecido e seja incluído no rol de inadimplentes, seu status é atualizado para "parcialmente suspenso", o que:',
    options: {
      A: 'impede totalmente qualquer operação, inclusive as que visem reduzir a posição em aberto ou o risco da carteira.',
      B: 'impede o comitente de contratar, alocar ou registrar novas operações em seu nome, exceto operações com o propósito de reduzir a posição em aberto ou o risco da carteira.',
      C: 'não gera nenhuma restrição operacional, apenas registro cadastral informativo.',
      D: 'transfere automaticamente a titularidade dos ativos do comitente para a câmara.',
    },
    correct: 'B',
    explanation:
      'A atualização do status do comitente para "parcialmente suspenso" no sistema de cadastro da B3 impede o comitente de contratar, alocar ou registrar novas operações em seu nome, EXCETO operações com o propósito de reduzir a posição em aberto ou o risco da carteira.',
    explanationWrong: {
      A: 'Não é um bloqueio total — há uma exceção expressa para operações que reduzam posição em aberto ou risco de carteira, justamente para não agravar a situação.',
      C: 'A inclusão gera sim restrição operacional concreta ("parcialmente suspenso"), não é apenas um registro informativo sem efeito prático.',
      D: 'Não há transferência de titularidade dos ativos para a câmara — o efeito é a restrição operacional, não a expropriação dos ativos.',
    },
    examTip: '"Parcialmente suspenso" = bloqueia operações novas, EXCETO as que reduzem posição/risco — a exceção é o detalhe mais cobrado.',
    commonTrap: '⚠️ Pegadinha: achar que a suspensão é total e impede até a redução de risco — na verdade essa exceção existe justamente para não piorar a exposição.',
    ...SRC('Inadimplência', '577-578'),
  },

  // ---------- Ofertas públicas e leilão de fundos setoriais ----------
  {
    topic: 'Ofertas públicas e leilão de fundos setoriais',
    subtopic: 'Requisito para compor consórcio de distribuição',
    difficulty: 'medio',
    statement: 'Para compor o consórcio (pool) de distribuição de uma oferta pública, é necessário que o participante seja:',
    options: {
      A: 'um membro de compensação.',
      B: 'um agente de custódia.',
      C: 'um participante de liquidação.',
      D: 'um formador de mercado credenciado.',
    },
    correct: 'B',
    explanation:
      'Para compor o consórcio de distribuição de uma oferta pública, é necessário que o participante seja um agente de custódia — condição expressamente destacada no guia como "Importante!".',
    explanationWrong: {
      A: 'Ser membro de compensação não é o requisito estabelecido para compor o consórcio de distribuição — o requisito é ser agente de custódia.',
      C: 'Ser participante de liquidação também não é o requisito citado para essa finalidade específica.',
      D: 'Ser formador de mercado credenciado tem relação com atuação em ambiente de negociação, não é o requisito para compor consórcio de distribuição de ofertas públicas.',
    },
    examTip: 'Consórcio de distribuição de oferta pública: exige ser AGENTE DE CUSTÓDIA.',
    commonTrap: null,
    ...SRC('Ofertas públicas de distribuição de ativos', '578-579'),
  },
  {
    topic: 'Ofertas públicas e leilão de fundos setoriais',
    subtopic: 'Leilão de fundos setoriais — prazo de liquidação',
    difficulty: 'prova',
    statement: 'No leilão de fundos setoriais (como Finam e Finor), a liquidação da parcela financeira ou de cotas do fundo deve ocorrer em:',
    options: {
      A: 'D+0 da realização do leilão.',
      B: 'D+1 da realização do leilão.',
      C: 'D+2 da realização do leilão.',
      D: 'D+15 da realização do leilão.',
    },
    correct: 'C',
    explanation:
      'Qualquer que seja a alternativa de liquidação escolhida (transferência de recursos financeiros no STR, transferência de cotas do fundo, ou combinação de ambas), a liquidação do leilão de fundos setoriais deve ocorrer em D+2 da realização do leilão. Já a transferência das ações-objeto do leilão pela empresa emissora ocorre até D+15.',
    explanationWrong: {
      A: 'D+0 não é o prazo estabelecido — a liquidação da parcela financeira/cotas ocorre em D+2.',
      B: 'D+1 também não corresponde ao prazo correto de D+2 estabelecido para essa etapa.',
      D: 'D+15 é o prazo para a EMPRESA EMISSORA transferir as ações adquiridas no leilão (etapa 2), não o prazo de liquidação financeira/cotas (etapa 1, D+2).',
    },
    examTip: 'Leilão de fundos setoriais: liquidação financeira/cotas em D+2, transferência das ações pela emissora até D+15 — duas etapas com prazos distintos.',
    commonTrap: '⚠️ Não confunda o D+2 (liquidação financeira/cotas) com o D+15 (entrega das ações pela emissora) — são etapas diferentes do mesmo leilão.',
    ...SRC('Leilão de fundos setoriais', '580'),
  },

  // ---------- Custos e encargos ----------
  {
    topic: 'Custos e encargos',
    subtopic: 'Definição de day trade pela câmara',
    difficulty: 'facil',
    statement: 'Para fins de cobrança de custos e encargos, a câmara considera day trade as operações de compra e de venda de um mesmo ativo, realizadas:',
    options: {
      A: 'em datas de negociação diferentes, por um mesmo participante.',
      B: 'em uma mesma data de negociação, por um mesmo participante e em uma mesma conta de posição.',
      C: 'por participantes diferentes, em uma mesma conta de posição.',
      D: 'exclusivamente no mercado de opções, independentemente da data.',
    },
    correct: 'B',
    explanation:
      'A câmara considera day trade, para fins de custos e encargos, as operações de compra e de venda de um mesmo ativo, realizadas em uma mesma data de negociação, por um mesmo participante e em uma mesma conta de posição.',
    explanationWrong: {
      A: 'O day trade pressupõe a MESMA data de negociação, não datas diferentes.',
      C: 'O critério exige o MESMO participante, não participantes diferentes.',
      D: 'A definição de day trade para custos e encargos não é restrita ao mercado de opções — aplica-se de forma geral a um mesmo ativo.',
    },
    examTip: 'Day trade (custos/encargos): mesmo ativo + mesma data + mesmo participante + mesma conta de posição.',
    commonTrap: null,
    ...SRC('Custos e encargos', '581'),
  },
  {
    topic: 'Custos e encargos',
    subtopic: 'Onde são cobrados os custos e encargos',
    difficulty: 'dificil',
    statement: 'Em caso de repasse de operações, os custos e encargos cobrados pela B3 incidem sobre:',
    options: {
      A: 'o participante origem, que executou a ordem originalmente.',
      B: 'o participante destino, no qual as operações são liquidadas.',
      C: 'ambos os participantes, de forma proporcional ao volume repassado.',
      D: 'exclusivamente o comitente final, sem intermediação do participante.',
    },
    correct: 'B',
    explanation:
      'Os custos e encargos são cobrados no mesmo participante em que as operações são liquidadas, ou seja, no participante DESTINO, em caso de repasse de operações.',
    explanationWrong: {
      A: 'O participante origem apenas executa a ordem inicialmente — a cobrança de custos e encargos recai sobre quem efetivamente liquida a operação, o participante destino.',
      C: 'Não há rateio proporcional entre origem e destino — a regra é clara: cobrança no participante onde a operação é liquidada (destino).',
      D: 'A cobrança segue a estrutura de participantes (o destino), não é feita diretamente e exclusivamente sobre o comitente sem qualquer intermediação.',
    },
    examTip: 'Custos e encargos: sempre no participante DESTINO (onde a operação é efetivamente liquidada), mesmo havendo repasse.',
    commonTrap: null,
    ...SRC('Custos e encargos', '581'),
  },
];
