// Título I - Aspectos institucionais
// Capítulo II - Infraestrutura do mercado
// Fonte: Guia Por Dentro da B3, páginas 47-68.

export const chapterRef = { titleNumber: 'I', chapterNumber: 'II' };

export const topics = [
  'PFMI e infraestrutura mundial',
  'Conceitos constituintes (PS, TR, SSS, CCP, CSD)',
  'Elementos do SFN (compensação, liquidação, novação)',
  'Sistema de Pagamentos Brasileiro (SPB)',
  'Infraestrutura do SFN no Brasil (Selic, CIP, Compe, arranjos)',
];

const SRC = (section, page) => ({
  source_title: 'Guia Por Dentro da B3',
  source_chapter: 'Título I, Capítulo II — Infraestrutura do mercado',
  source_section: section,
  source_page: page,
});

export const questions = [
  // ---------- PFMI e infraestrutura mundial ----------
  {
    topic: 'PFMI e infraestrutura mundial',
    subtopic: 'PFMI',
    difficulty: 'medio',
    statement:
      'O documento Principles for Financial Market Infrastructures (PFMI), publicado pelo BIS e pela Iosco em abril de 2012, apresenta um conjunto de princípios a serem observados por:',
    options: {
      A: 'Exclusivamente bancos comerciais que operam no varejo.',
      B: 'Contrapartes centrais, sistemas de liquidação, sistemas de registro de valores mobiliários e centrais depositárias.',
      C: 'Somente entidades seguradoras e resseguradoras.',
      D: 'Exclusivamente bancos centrais nacionais, sem aplicação a entidades privadas.',
    },
    correct: 'B',
    explanation:
      'O PFMI apresenta princípios a serem observados pelas organizações que compõem a infraestrutura dos mercados financeiros: as contrapartes centrais, os sistemas de liquidação, os sistemas de registro de títulos e valores mobiliários e as centrais depositárias de ativos.',
    explanationWrong: {
      A: 'Bancos comerciais de varejo não são o foco do PFMI — o documento trata de infraestruturas de mercado (CCPs, SSS, TRs, CSDs), não de bancos individualmente.',
      C: 'Seguradoras e resseguradoras não são infraestruturas de mercado financeiro no sentido do PFMI; esse segmento é tratado por outros marcos regulatórios (CNSP/Susep).',
      D: 'O PFMI se aplica às entidades que operam a infraestrutura (inclusive privadas, como câmaras e depositárias), não apenas a bancos centrais.',
    },
    examTip:
      'PFMI = princípios para 4 tipos de infraestrutura: CCP (contraparte central), SSS (sistema de liquidação), TR (entidade de registro) e CSD (central depositária).',
    commonTrap:
      'A prova pode tentar restringir o alcance do PFMI a "só bancos" ou "só bancos centrais" — na verdade ele mira as infraestruturas de pós-negociação como um todo, muitas vezes privadas.',
    ...SRC('2. Infraestrutura do mercado financeiro mundial – Histórico e conceitos', '50'),
  },
  {
    topic: 'PFMI e infraestrutura mundial',
    subtopic: 'QCCP',
    difficulty: 'dificil',
    statement:
      'Segundo a Resolução BCB nº 229/2022, uma câmara que atua como contraparte central e cumpre substancialmente os princípios de governança e administração de risco do PFMI é classificada como:',
    options: {
      A: 'Sistema Externo.',
      B: 'Participante de Registro (PR).',
      C: 'Contraparte central qualificada (QCCP).',
      D: 'Entidade de registro (TR).',
    },
    correct: 'C',
    explanation:
      'A QCCP (qualifying central counterparty) é a câmara que atua como contraparte central e que cumpre, substancialmente, os princípios de governança e de administração de risco estabelecidos no PFMI. No Brasil, deve ser aplicado um fator de ponderação de risco (FPR) de 2% às exposições de titularidade própria realizadas diretamente com uma QCCP.',
    explanationWrong: {
      A: 'Sistema Externo é o sistema de negociação, compensação ou central depositária autorizado a acessar a câmara ou central depositária da B3 — conceito distinto de QCCP.',
      B: 'Participante de Registro é quem registra operações de balcão organizado na B3 — não se refere à qualificação de uma câmara como contraparte central.',
      D: 'Entidade de registro (TR) mantém sistema centralizado de registro de transações; QCCP se refere especificamente à qualificação de uma câmara-CCP.',
    },
    examTip:
      'QCCP = câmara-CCP que cumpre o PFMI substancialmente → FPR de 2% para exposições de titularidade própria (regra pós-Basileia III).',
    commonTrap:
      'Não confunda QCCP (qualificação de risco de uma câmara já reconhecida como CCP) com o conceito genérico de "contraparte central" (papel funcional) — QCCP é um selo de conformidade regulatória adicional.',
    ...SRC('2. Infraestrutura do mercado financeiro mundial – Histórico e conceitos', '50'),
  },

  // ---------- Conceitos constituintes ----------
  {
    topic: 'Conceitos constituintes (PS, TR, SSS, CCP, CSD)',
    subtopic: 'Entidade de registro (TR)',
    difficulty: 'facil',
    statement: 'A principal função de uma entidade de registro (trade repository – TR) é:',
    options: {
      A: 'Garantir a liquidação das operações mesmo em caso de inadimplência de uma das partes.',
      B: 'Manter um sistema centralizado para registro de transações, promovendo transparência e identificando abusos de mercado.',
      C: 'Guardar centralizadamente valores mobiliários e controlar sua titularidade.',
      D: 'Executar ordens de compra e venda para clientes finais.',
    },
    correct: 'B',
    explanation:
      'A entidade de registro mantém um sistema centralizado para registro de transações. Com base na centralização, armazenamento e disseminação de informações para reguladores e público, ela promove transparência e estabilidade financeira, além de identificar e prevenir situações de abuso de mercado.',
    explanationWrong: {
      A: 'Garantir a liquidação em caso de inadimplência é papel da contraparte central (CCP), não da entidade de registro.',
      C: 'Guarda centralizada e controle de titularidade são funções da central depositária (CSD), não da TR.',
      D: 'Execução de ordens é atividade de intermediários (corretoras/PNP), não de uma entidade de registro.',
    },
    examTip:
      'TR = registro e transparência. Não confunda com CCP (garantia de liquidação) nem com CSD (guarda e titularidade).',
    commonTrap:
      'As quatro infraestruturas do PFMI (PS, TR, SSS, CCP, CSD) têm funções fáceis de confundir entre si — decore o verbo-chave de cada uma: registra, guarda, liquida, garante.',
    ...SRC('3. Principais conceitos constituintes do Sistema Financeiro Mundial', '51-52'),
  },
  {
    topic: 'Conceitos constituintes (PS, TR, SSS, CCP, CSD)',
    subtopic: 'Sistema de liquidação (SSS) x CCP x CSD',
    difficulty: 'prova',
    statement:
      'Um sistema de liquidação (securities settlement system – SSS) permite a transferência e liquidação de ativos por registros eletrônicos. Sobre a relação entre SSS, CCP e CSD, é correto afirmar que:',
    options: {
      A: 'As três funções são sempre exercidas por instituições diferentes, nunca podendo ser acumuladas.',
      B: 'O SSS pode prestar serviços adicionais de compensação e liquidação, mas suas funções não se confundem com as de uma CCP ou CSD, ainda que uma mesma instituição possa acumular funções diferentes.',
      C: 'O SSS é, por definição, a mesma coisa que uma central depositária (CSD).',
      D: 'Somente bancos centrais podem operar sistemas de liquidação (SSS).',
    },
    correct: 'B',
    explanation:
      'O Guia destaca explicitamente que um sistema de liquidação pode prestar serviços adicionais de compensação e liquidação, mas suas funções não se confundem com as de uma contraparte central ou de uma central depositária — ainda que, na prática, uma mesma instituição (como a B3) possa acumular essas diferentes funções.',
    explanationWrong: {
      A: 'É o oposto do que o Guia afirma: uma mesma instituição PODE acumular diferentes funções (como faz a própria B3, que é bolsa, TR, SSS/CCP e CSD ao mesmo tempo).',
      C: 'SSS e CSD são conceitos distintos, mesmo que possam coexistir na mesma instituição: o SSS liquida via registros eletrônicos; a CSD guarda e controla titularidade.',
      D: 'Não é exclusividade de bancos centrais — câmaras privadas como a B3 também operam sistemas de liquidação.',
    },
    examTip:
      'Frase-chave para decorar: funções de SSS, CCP e CSD "não se confundem", mas "uma mesma instituição pode acumular" todas elas — é exatamente o caso da B3.',
    commonTrap:
      'A prova pode insinuar que, por a B3 acumular todos os papéis, os conceitos seriam "a mesma coisa" — mas são funções distintas e conceitualmente separadas, apenas reunidas numa única instituição.',
    ...SRC('3. Principais conceitos constituintes do Sistema Financeiro Mundial', '52'),
  },
  {
    topic: 'Conceitos constituintes (PS, TR, SSS, CCP, CSD)',
    subtopic: 'CCP e mutualização de riscos',
    difficulty: 'dificil',
    statement:
      'As contrapartes centrais podem "mutualizar" alguns riscos entre os participantes. Essa mutualização ocorre tipicamente por meio de:',
    options: {
      A: 'Constituição de fundos de liquidação (default funds), que dividem os riscos entre vários participantes.',
      B: 'Transferência integral do risco para o Banco Central, sem participação dos membros.',
      C: 'Eliminação total da necessidade de garantias por parte dos participantes.',
      D: 'Delegação da administração de risco para uma entidade de registro (TR).',
    },
    correct: 'A',
    explanation:
      'As contrapartes centrais podem mutualizar riscos (dividir os riscos entre várias partes) por meio da constituição de fundos de liquidação (ou default funds), somados às garantias individuais exigidas dos participantes para cobrir suas exposições presentes e futuras.',
    explanationWrong: {
      B: 'O Banco Central não assume o risco das operações das câmaras privadas — a mitigação de risco é estrutural, feita pela própria câmara via garantias e fundos mutualizados.',
      C: 'Ao contrário: as CCPs tipicamente demandam garantias suficientes dos participantes para cobrir exposições, além dos fundos mutualizados.',
      D: 'A entidade de registro (TR) não administra risco de contraparte; essa é função típica da CCP.',
    },
    examTip:
      '"Default fund" = fundo mutualizado (survivors pay). Isso se soma, não substitui, às garantias individuais (defaulters pay) exigidas pela CCP.',
    commonTrap:
      'Cuidado com alternativas que sugerem que a mutualização "elimina" a exigência de garantias individuais — na prática, os dois mecanismos coexistem como camadas de proteção.',
    ...SRC('3. Principais conceitos constituintes do Sistema Financeiro Mundial', '52'),
  },

  // ---------- Elementos do SFN ----------
  {
    topic: 'Elementos do SFN (compensação, liquidação, novação)',
    subtopic: 'Novação contratual',
    difficulty: 'medio',
    statement:
      'Quando uma câmara de compensação e liquidação se torna contraparte central, ela substitui os contratos originais entre as partes por novos contratos entre cada parte e a própria câmara. Esse processo jurídico é chamado de:',
    options: {
      A: 'Desmaterialização.',
      B: 'Certeza de liquidação.',
      C: 'Novação contratual.',
      D: 'Compensação multilateral.',
    },
    correct: 'C',
    explanation:
      'Novação contratual é o instituto jurídico que consiste em criar uma obrigação, substituindo e extinguindo a obrigação anterior e originária. Ao se tornar contraparte central, a câmara efetua a novação dos contratos das partes originais, substituindo-os por novos contratos entre cada parte e a própria câmara.',
    explanationWrong: {
      A: 'Desmaterialização refere-se à representação dos ativos apenas por registro eletrônico, sem relação com a substituição de contratos.',
      B: 'Certeza de liquidação é a diretriz que garante a liquidação financeira até o fim do dia, mesmo com eventual rejeição de lançamento pelo Bacen — não descreve a substituição contratual em si.',
      D: 'Compensação multilateral é a apuração de saldos envolvendo mais de duas partes — é um efeito relacionado, mas o mecanismo jurídico de substituição do contrato é a novação.',
    },
    examTip:
      'Novação = "contrato velho morre, nasce um contrato novo" com a câmara no meio. É esse mecanismo que faz a câmara virar contraparte central de fato.',
    commonTrap:
      'Muitos confundem "novação" com "compensação multilateral" — a compensação é o resultado (apuração de saldos), a novação é o mecanismo jurídico que torna a câmara parte dos contratos.',
    ...SRC('4. Principais elementos do Sistema Financeiro Nacional', '54'),
  },
  {
    topic: 'Elementos do SFN (compensação, liquidação, novação)',
    subtopic: 'Finalidade e irrevogabilidade',
    difficulty: 'facil',
    statement:
      'A diretriz segundo a qual pagamentos e transferências de valores, uma vez processados no âmbito da liquidação, não podem ser estornados, é conhecida como:',
    options: {
      A: 'Certeza de liquidação.',
      B: 'Finalidade (finality) e irrevogabilidade.',
      C: 'Entrega contra pagamento (DVP).',
      D: 'Compensação multilateral.',
    },
    correct: 'B',
    explanation:
      'A finalidade (finality) e irrevogabilidade é a diretriz que estabelece que os pagamentos e as transferências de valores ocorridos no âmbito da liquidação têm caráter final, não podendo ser estornados após o seu processamento.',
    explanationWrong: {
      A: 'Certeza de liquidação trata da garantia de que a liquidação ocorrerá até o fim do dia, mesmo com rejeição de lançamento pelo Bacen — é um conceito relacionado, mas distinto da irrevogabilidade.',
      C: 'DVP (delivery versus payment) trata da condicionalidade entre entrega do ativo e pagamento, e não da impossibilidade de estorno após o processamento.',
      D: 'Compensação multilateral trata da apuração de saldos entre mais de duas partes, sem relação direta com a irreversibilidade do pagamento.',
    },
    examTip:
      '"Finality" = "não tem volta". Uma vez liquidado, está liquidado — essa é a garantia que dá segurança jurídica ao sistema de pagamentos.',
    commonTrap:
      'Certeza de liquidação e finalidade/irrevogabilidade são frequentemente confundidas: a primeira garante QUE vai liquidar até o fim do dia; a segunda garante que, uma vez liquidado, é definitivo.',
    ...SRC('4. Principais elementos do Sistema Financeiro Nacional', '54'),
  },
  {
    topic: 'Elementos do SFN (compensação, liquidação, novação)',
    subtopic: 'LBTR x LDL',
    difficulty: 'dificil',
    statement:
      'Duas modalidades de liquidação coexistem no Sistema de Pagamentos Brasileiro. Assinale a alternativa que descreve corretamente a diferença entre elas.',
    options: {
      A: 'LBTR liquida transação por transação, individualmente, pelo saldo bruto; LDL acumula transações e liquida pelo saldo líquido multilateral após um prazo estabelecido.',
      B: 'LBTR e LDL são sinônimos, apenas com nomes diferentes para o mesmo mecanismo.',
      C: 'LBTR é usada exclusivamente por câmaras privadas; LDL é usada exclusivamente pelo Banco Central.',
      D: 'LDL processa transação por transação, em tempo real; LBTR acumula e liquida em bases líquidas.',
    },
    correct: 'A',
    explanation:
      'A liquidação bruta em tempo real (LBTR) processa e liquida cada transação individualmente pelo saldo bruto (é o caso do STR e do Selic, administrados pelo Bacen). Já a liquidação diferida líquida (LDL) acumula transações e liquida pelo saldo líquido multilateral após decorrido um prazo preestabelecido (é o modelo usado pelas câmaras que atuam como contraparte central, como a B3).',
    explanationWrong: {
      B: 'São mecanismos distintos com lógicas opostas: bruto/individual (LBTR) versus líquido/multilateral (LDL) — não são sinônimos.',
      C: 'O Guia mostra que ambos coexistem no SPB: LBTR é usada por STR e Selic (Bacen), e LDL é tipicamente usada pelas câmaras (como a B3), mas isso não é uma exclusividade rígida — o ponto central é a diferença de mecanismo, não de operador.',
      D: 'Inverte as definições: quem processa transação por transação em tempo real é a LBTR, não a LDL.',
    },
    examTip:
      'LBTR = Bruto + Tempo Real + individual (STR, Selic). LDL = Líquido + Diferida + multilateral (câmaras/CCP, como a B3).',
    commonTrap:
      'A prova adora inverter as definições de LBTR e LDL numa mesma alternativa — releia com atenção qual delas é "bruta e em tempo real" e qual é "líquida e diferida".',
    ...SRC('5. O Sistema de Pagamentos Brasileiro (SPB) — Pilares do SPB', '57-58'),
  },
  {
    topic: 'Elementos do SFN (compensação, liquidação, novação)',
    subtopic: 'DVP',
    difficulty: 'medio',
    statement: 'O mecanismo de entrega contra pagamento (delivery versus payment – DVP) tem como função:',
    options: {
      A: 'Assegurar que a entrega do título ocorra se, e somente se, o pagamento correspondente também ocorrer.',
      B: 'Permitir que ativos sejam entregues antes da confirmação do pagamento, agilizando a operação.',
      C: 'Eliminar a necessidade de qualquer garantia entre as partes da operação.',
      D: 'Substituir integralmente a atuação de uma contraparte central.',
    },
    correct: 'A',
    explanation:
      'DVP é um mecanismo que assegura que a entrega do título ocorra se, e somente se, o pagamento ocorrer — eliminando o risco de uma parte entregar o ativo (ou o dinheiro) sem receber a contrapartida. Uma variação é o pagamento contra pagamento (payment versus payment), usado, por exemplo, em câmaras de câmbio.',
    explanationWrong: {
      B: 'É exatamente o oposto do que o DVP busca evitar: a entrega condicionada à confirmação do pagamento é o núcleo do mecanismo, não uma entrega antecipada e desprotegida.',
      C: 'DVP não elimina a necessidade de garantias; é um mecanismo operacional de sincronização entre entrega e pagamento, distinto da exigência de colateral.',
      D: 'DVP é um mecanismo operacional de liquidação, não uma função substituta da contraparte central (que garante a liquidação em caso de inadimplência).',
    },
    examTip:
      'DVP = "só entrega o título se o dinheiro entrar (e vice-versa)". Elimina o risco de principal na liquidação.',
    commonTrap:
      'Não confunda DVP (condicionalidade entre ativo e pagamento) com "certeza de liquidação" (garantia de que a liquidação financeira ocorrerá até o fim do dia).',
    ...SRC('4. Principais elementos do Sistema Financeiro Nacional', '56'),
  },

  // ---------- SPB ----------
  {
    topic: 'Sistema de Pagamentos Brasileiro (SPB)',
    subtopic: 'Lei do SPB',
    difficulty: 'medio',
    statement: 'A Lei nº 10.214/2001, conhecida como "Lei do SPB", estabeleceu, entre outras disposições:',
    options: {
      A: 'A criação da CVM e a regulação do mercado de capitais.',
      B: 'O alicerce legal e regulatório das câmaras de compensação e liquidação, incluindo a "blindagem" das garantias depositadas a seu favor contra atos de terceiros.',
      C: 'A criação do Coaf como unidade de inteligência financeira brasileira.',
      D: 'A autonomia do Banco Central em relação ao Ministério da Fazenda.',
    },
    correct: 'B',
    explanation:
      'A Lei nº 10.214/2001 (Lei do SPB) estabelece o alicerce legal e regulatório das câmaras de compensação e liquidação, trazendo segurança jurídica ao reconhecer o procedimento de liquidação por compensação multilateral. Ela também estabelece regime jurídico em que as garantias depositadas a favor das câmaras são "blindadas" contra atos de terceiros (impenhoráveis), pois se destinam exclusivamente ao cumprimento das obrigações da câmara como contraparte central.',
    explanationWrong: {
      A: 'A CVM foi criada pela Lei nº 6.385/1976, não pela Lei do SPB.',
      C: 'O Coaf foi criado pela Lei nº 9.613/1998, sem relação com a Lei do SPB.',
      D: 'A autonomia do Bacen veio da Lei Complementar nº 179/2021, não da Lei nº 10.214/2001.',
    },
    examTip:
      'Lei nº 10.214/2001 = Lei do SPB = segurança jurídica das câmaras + garantias impenhoráveis ("blindadas") a favor da câmara como CCP.',
    commonTrap:
      'É comum a prova misturar essa lei com outras leis/marcos do SFN (CVM, Coaf, autonomia do Bacen) — associe sempre "SPB" a "câmaras de compensação e liquidação".',
    ...SRC('5. O Sistema de Pagamentos Brasileiro (SPB) — Base legal e regulamentar', '57'),
  },
  {
    topic: 'Sistema de Pagamentos Brasileiro (SPB)',
    subtopic: 'STR',
    difficulty: 'medio',
    statement: 'O Sistema de Transferência de Reservas (STR), administrado pelo Bacen, caracteriza-se por:',
    options: {
      A: 'Realizar liquidação diferida líquida (LDL), acumulando transações por um período antes de liquidar.',
      B: 'Realizar liquidação bruta em tempo real (LBTR), processando e liquidando transação por transação.',
      C: 'Ser de participação facultativa para todas as instituições financeiras do país.',
      D: 'Atuar exclusivamente como central depositária de ações.',
    },
    correct: 'B',
    explanation:
      'O STR é um sistema que realiza liquidação bruta em tempo real (LBTR), processando e liquidando transação por transação. Participam obrigatoriamente do STR o Bacen, as instituições titulares de contas reservas bancárias e as entidades prestadoras de serviços de compensação e liquidação que operam sistemas sistemicamente importantes.',
    explanationWrong: {
      A: 'É o oposto: o STR é LBTR (bruto, tempo real), não LDL (líquido, diferido) — esse é o modelo típico das câmaras, não do STR.',
      C: 'A participação é obrigatória para as instituições mencionadas (Bacen, titulares de conta reserva, entidades sistemicamente importantes), não facultativa.',
      D: 'O STR liquida transferências de fundos entre contas de reservas bancárias; quem atua como central depositária de títulos públicos é o Selic, não o STR.',
    },
    examTip:
      'STR = LBTR + transferências interbancárias (mercados monetário, cambial e de capitais) + participação obrigatória para sistemicamente importantes.',
    commonTrap:
      'Não confunda o STR (transferência de reservas bancárias em geral) com o Selic (central depositária específica de títulos públicos federais) — ambos são LBTR, mas com objetos diferentes.',
    ...SRC('5. O Sistema de Pagamentos Brasileiro (SPB) — Sistema de Transferência de Reserva (STR)', '58-59'),
  },
  {
    topic: 'Sistema de Pagamentos Brasileiro (SPB)',
    subtopic: 'Mitigação de riscos — defaulters pay x survivors pay',
    difficulty: 'prova',
    statement:
      'Sobre os mecanismos de mitigação de risco exigidos das câmaras sistemicamente importantes no Brasil, a colateralização das exposições de risco — em que cada participante arca com a cobertura dos riscos que gera individualmente — é conhecida como:',
    options: {
      A: 'Survivors pay.',
      B: 'Third parties pay.',
      C: 'Defaulters pay.',
      D: 'Certainty of settlement.',
    },
    correct: 'C',
    explanation:
      'O princípio "defaulters pay" corresponde à colateralização das exposições de risco, em que cada participante arca com a cobertura dos riscos que ele mesmo gera para o sistema. Ele se combina com o princípio "survivors pay", em que fundos mutualizados constituídos pelos participantes cobrem eventuais perdas remanescentes.',
    explanationWrong: {
      A: '"Survivors pay" refere-se aos fundos mutualizados constituídos pelos demais participantes (que sobrevivem/permanecem no sistema), não à colateralização individual do próprio risco gerado.',
      B: '"Third parties pay" não é um dos dois princípios centrais de salvaguarda apresentados no Guia para o caso brasileiro (que combina defaulters pay e survivors pay).',
      D: 'Certeza de liquidação (certainty of settlement) é a diretriz de garantia de liquidação até o fim do dia, um conceito distinto da forma como o risco é coberto (colateralização individual x fundo mutualizado).',
    },
    examTip:
      'Defaulters pay = "cada um cobre o próprio risco" (colateral individual). Survivors pay = "os que ficam dividem o prejuízo residual" (fundo mutualizado).',
    commonTrap:
      'A prova pode inverter os dois termos em inglês — lembre-se de que "defaulter" é quem gera o risco (paga sua própria garantia), e "survivor" é quem permanece no sistema (participa do fundo mutualizado).',
    ...SRC('5. O Sistema de Pagamentos Brasileiro (SPB) — Mecanismos de mitigação de riscos', '59-60'),
  },

  // ---------- Infraestrutura do SFN no Brasil ----------
  {
    topic: 'Infraestrutura do SFN no Brasil (Selic, CIP, Compe, arranjos)',
    subtopic: 'Selic',
    difficulty: 'facil',
    statement: 'O Selic (Sistema Especial de Liquidação e de Custódia) é:',
    options: {
      A: 'A central depositária dos títulos emitidos pelo Tesouro Nacional e pelo Bacen, atuando também como sistema de liquidação bruta em tempo real para esses títulos.',
      B: 'Uma câmara de compensação que atua como contraparte central na liquidação de operações com títulos públicos.',
      C: 'O sistema responsável pela compensação de cheques no Brasil.',
      D: 'A plataforma de negociação eletrônica de ações administrada pela B3.',
    },
    correct: 'A',
    explanation:
      'O Selic é a central depositária dos títulos emitidos pelo Tesouro Nacional e pelo Bacen, processando emissão, resgate, pagamento de juros e custódia desses títulos. Também atua como sistema de liquidação bruta em tempo real (LBTR) para transações com títulos públicos federais, empregando o princípio de entrega contra pagamento (DVP).',
    explanationWrong: {
      B: 'O Guia destaca explicitamente que "o Selic não atua como contraparte central na liquidação das operações" — apesar de liquidar via LBTR, ele não assume o papel de CCP.',
      C: 'A compensação de cheques é função da Compe (Centralizadora da Compensação de Cheques), não do Selic.',
      D: 'A negociação eletrônica de ações é feita no Puma Trading System da B3, não no Selic, que é voltado a títulos públicos federais.',
    },
    examTip:
      'Selic = central depositária + LBTR de títulos públicos federais, mas explicitamente NÃO é contraparte central — pegadinha clássica de prova.',
    commonTrap:
      'A frase "o Selic não atua como contraparte central" do Guia é destacada como "Importante!" propositalmente — é um dos pontos mais cobrados sobre o Selic.',
    ...SRC('6. A infraestrutura do Sistema Financeiro Nacional — Selic', '61'),
  },
  {
    topic: 'Infraestrutura do SFN no Brasil (Selic, CIP, Compe, arranjos)',
    subtopic: 'CIP',
    difficulty: 'medio',
    statement: 'A Câmara Interbancária de Pagamentos (CIP) administra, entre outros, os seguintes sistemas:',
    options: {
      A: 'Sitraf (Sistema de Transferência de Fundos) e Siloc (Sistema de Liquidação Diferida das Transferências Interbancárias de Ordens de Crédito).',
      B: 'Selic e STR, ambos administrados exclusivamente pelo Bacen.',
      C: 'Puma Trading System, plataforma de negociação multiativos da B3.',
      D: 'BSM Supervisão de Mercados e o Mecanismo de Ressarcimento de Prejuízos.',
    },
    correct: 'A',
    explanation:
      'A CIP é uma associação civil sem fins lucrativos que administra, entre vários sistemas, o Sitraf e o Siloc — sistema por meio do qual se realiza a liquidação diferida de transferências interbancárias de ordens de crédito e outras liquidações interbancárias aprovadas pelo Bacen.',
    explanationWrong: {
      B: 'Selic e STR são administrados diretamente pelo Bacen, não pela CIP — que é uma associação civil distinta, embora integrante do SPB.',
      C: 'O Puma Trading System é a plataforma de negociação da B3, sem relação com a CIP, que atua na compensação e liquidação de transferências interbancárias.',
      D: 'BSM e MRP são estruturas de supervisão e ressarcimento ligadas à B3, sem relação com os sistemas administrados pela CIP.',
    },
    examTip:
      'CIP administra Sitraf e Siloc (transferências e ordens de crédito interbancárias) — associação civil sem fins lucrativos, integrante do SPB.',
    commonTrap:
      'Não misture os sistemas administrados pela CIP com os administrados diretamente pelo Bacen (STR, Selic) — são entidades distintas dentro do SPB.',
    ...SRC('6. A infraestrutura do Sistema Financeiro Nacional — CIP', '62-63'),
  },
  {
    topic: 'Infraestrutura do SFN no Brasil (Selic, CIP, Compe, arranjos)',
    subtopic: 'Compe',
    difficulty: 'medio',
    statement: 'A Centralizadora da Compensação de Cheques (Compe) tem como executante:',
    options: {
      A: 'O Banco Central do Brasil diretamente.',
      B: 'A B3.',
      C: 'O Banco do Brasil.',
      D: 'A Caixa Econômica Federal.',
    },
    correct: 'C',
    explanation:
      'A Compe é um sistema de liquidação diferida líquida para compensação de cheques, cujo executante é o Banco do Brasil, conforme a Resolução BCB nº 314/2023. Participam obrigatoriamente as instituições titulares de conta reservas bancárias ou conta de liquidação com contas movimentáveis por cheque.',
    explanationWrong: {
      A: 'O Bacen regula a Compe (via Resolução BCB), mas quem executa operacionalmente o sistema é o Banco do Brasil.',
      B: 'A B3 administra a Câmara B3 e a central depositária de valores mobiliários, sem relação com a compensação de cheques.',
      D: 'A Caixa Econômica Federal não é a executante da Compe — esse papel é do Banco do Brasil.',
    },
    examTip:
      'Compe = compensação de cheques, LDL, executada pelo Banco do Brasil (não pelo Bacen diretamente).',
    commonTrap:
      'É comum achar que o Bacen "executa" tudo que regulamenta — mas a Compe é regulada pelo Bacen e executada pelo Banco do Brasil, papéis distintos.',
    ...SRC('6. A infraestrutura do Sistema Financeiro Nacional — Compe', '64'),
  },
  {
    topic: 'Infraestrutura do SFN no Brasil (Selic, CIP, Compe, arranjos)',
    subtopic: 'Arranjos de pagamento',
    difficulty: 'dificil',
    statement:
      'Segundo o Bacen, NÃO estão sujeitos à sua regulação/supervisão os seguintes tipos de arranjo de pagamento:',
    options: {
      A: 'Bandeiras de cartão de crédito de uso geral, aceitas por qualquer estabelecimento credenciado.',
      B: 'Arranjos operados por instituições de pagamento que oferecem conta de pagamento ao público em geral.',
      C: 'Cartões private label (uso restrito ao emissor/rede conveniada) e cartões de vale-refeição e vale-alimentação.',
      D: 'Arranjos que processam transações de cartão de débito vinculadas a conta-corrente bancária.',
    },
    correct: 'C',
    explanation:
      'Não estão sujeitos à regulação do Bacen os cartões private label — emitidos por grandes varejistas e usados apenas no estabelecimento emissor ou rede conveniada —, os arranjos para pagamento de serviços públicos, o carregamento de cartões pré-pagos de transporte e os cartões de vale-refeição e vale-alimentação.',
    explanationWrong: {
      A: 'Bandeiras de cartão de crédito de uso geral (que conectam todo o mercado) são justamente o tipo de arranjo sujeito à regulação e supervisão do Bacen.',
      B: 'Instituições de pagamento que operam arranjos abertos ao público em geral estão sujeitas à regulação do Bacen.',
      D: 'Cartões de débito vinculados a conta-corrente bancária fazem parte do sistema regulado, diferentemente dos instrumentos de uso restrito citados no Guia.',
    },
    examTip:
      'Regra prática: arranjos de uso restrito e finalidade específica (private label, vale-refeição, pedágio/transporte, contas de serviços públicos) ficam FORA da supervisão do Bacen; arranjos abertos ao público em geral ficam dentro.',
    commonTrap:
      'A prova pode testar justamente o "fora da regulação" — não assuma que "cartão" = sempre regulado pelo Bacen; depende do tipo de arranjo.',
    ...SRC('6. A infraestrutura do Sistema Financeiro Nacional — Arranjos de pagamento', '65'),
  },
  {
    topic: 'Infraestrutura do SFN no Brasil (Selic, CIP, Compe, arranjos)',
    subtopic: 'Instituições de pagamento — vedações',
    difficulty: 'dificil',
    statement: 'A legislação brasileira proíbe que instituições de pagamento:',
    options: {
      A: 'Emitam moeda eletrônica para uso em transações comerciais.',
      B: 'Prestem serviços privativos de instituições financeiras, como concessão de empréstimos e disponibilização de conta bancária e de poupança.',
      C: 'Sejam credenciadoras de estabelecimentos comerciais para aceitação de cartões.',
      D: 'Mantenham relacionamento direto com pagadores e recebedores no arranjo de pagamento.',
    },
    correct: 'B',
    explanation:
      'A legislação proíbe que instituições de pagamento prestem serviços privativos de instituições financeiras, como a concessão de empréstimos e financiamentos ou a disponibilização de conta bancária e de poupança — essa é justamente a linha que separa "instituição de pagamento" de "instituição financeira".',
    explanationWrong: {
      A: 'A emissão de moeda eletrônica é uma atividade típica e permitida de instituições de pagamento — é um dos exemplos dados pelo próprio Guia.',
      C: 'Credenciadores de estabelecimentos comerciais para aceitação de cartões são citados no Guia como exemplo típico de instituição de pagamento.',
      D: 'O relacionamento com pagadores e recebedores é, segundo o próprio Guia, uma característica central da instituição de pagamento, não uma vedação.',
    },
    examTip:
      'Instituição de pagamento pode movimentar dinheiro eletrônico e ser credenciadora, mas NÃO pode fazer o que só banco pode: emprestar dinheiro ou oferecer conta bancária/poupança.',
    commonTrap:
      'A linha entre "instituição de pagamento" e "instituição financeira" é justamente a proibição de conceder crédito/poupança — ponto clássico de pegadinha.',
    ...SRC('6. A infraestrutura do Sistema Financeiro Nacional — Arranjos de pagamento', '65'),
  },
];
