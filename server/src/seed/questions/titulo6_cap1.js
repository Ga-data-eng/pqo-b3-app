// Título VI - Câmara de compensação e liquidação
// Capítulo I - Câmara B3
// Fonte: Guia Por Dentro da B3, páginas ~536-560.

export const chapterRef = { titleNumber: 'VI', chapterNumber: 'I' };

export const topics = [
  'Câmara de compensação e liquidação — conceito',
  'Participantes da câmara',
  'Compensação e liquidação',
  'Administração de risco',
  'Falhas e situações especiais',
  'Continuidade de negócios e sanções',
];

const SRC = (section, page) => ({
  source_title: 'Guia Por Dentro da B3',
  source_chapter: 'Título VI, Capítulo I — Câmara B3',
  source_section: section,
  source_page: page,
});

export const questions = [
  // ---------- Conceito ----------
  {
    topic: 'Câmara de compensação e liquidação — conceito',
    subtopic: 'Contraparte central',
    difficulty: 'prova',
    statement: 'A Câmara da B3 assume a posição de contraparte central na liquidação, exclusivamente, perante o(a):',
    options: {
      A: 'comitente.',
      B: 'participante de negociação.',
      C: 'participante de liquidação.',
      D: 'membro de compensação.',
    },
    correct: 'D',
    explanation:
      'A Câmara da B3 assume a posição de contraparte central na liquidação, exclusivamente, perante os membros de compensação (MC) — é o MC quem se responsabiliza diretamente perante a câmara pelas obrigações decorrentes das operações a ele atribuídas e dos participantes vinculados a ele.',
    explanationWrong: {
      A: 'O comitente não se relaciona diretamente com a câmara como contraparte central — ele liquida suas obrigações por intermédio da cadeia de participantes (PN/PNP/PL) até chegar ao membro de compensação.',
      B: 'O participante de negociação (PN) liquida suas obrigações perante o PNP, não diretamente perante a câmara como contraparte central.',
      C: 'O participante de liquidação (PL) liquida perante o membro de compensação — a contraparte central da câmara é sempre o MC.',
    },
    examTip: 'A câmara é contraparte central SÓ perante o membro de compensação (MC) — toda a cadeia (comitente → PN/PNP/PL → MC) converge para o MC antes de chegar à câmara.',
    commonTrap: '⚠️ Muito cobrado: a prova tenta fazer você achar que a câmara é contraparte central de todos os participantes — na verdade é apenas do MC.',
    ...SRC('Câmara de compensação e liquidação', '537'),
  },
  {
    topic: 'Câmara de compensação e liquidação — conceito',
    subtopic: 'Irrevogabilidade da liquidação',
    difficulty: 'medio',
    statement: 'A liquidação dos resultados apurados pela câmara em moeda nacional e em ativos torna-se irrevogável e definitiva no momento:',
    options: {
      A: 'do registro da operação no ambiente de negociação.',
      B: 'da apuração do saldo líquido multilateral do comitente.',
      C: 'das transferências dos respectivos saldos das contas de liquidação da câmara para as contas de liquidação dos participantes, as quais ocorrem de forma simultânea.',
      D: 'da assinatura do contrato entre o participante e o membro de compensação.',
    },
    correct: 'C',
    explanation:
      'A liquidação dos resultados apurados pela câmara em moeda nacional e ativos é irrevogável e definitiva no momento das transferências dos respectivos saldos das contas de liquidação da câmara para as contas de liquidação dos participantes, as quais ocorrem de forma simultânea.',
    explanationWrong: {
      A: 'O registro da operação no ambiente de negociação é apenas o início do processo — não é o momento de irrevogabilidade da liquidação, que ocorre bem depois, na câmara.',
      B: 'A apuração do saldo líquido multilateral é uma etapa intermediária (compensação), não o momento final e irrevogável da liquidação.',
      D: 'A assinatura de contrato entre participante e MC é uma condição de acesso/vínculo, sem relação com o momento de irrevogabilidade da liquidação de uma operação específica.',
    },
    examTip: 'Irrevogabilidade = momento da transferência SIMULTÂNEA entre as contas de liquidação da câmara e dos participantes.',
    commonTrap: null,
    ...SRC('Câmara de compensação e liquidação', '537'),
  },

  // ---------- Participantes ----------
  {
    topic: 'Participantes da câmara',
    subtopic: 'Membro de compensação',
    difficulty: 'medio',
    statement: 'O participante detentor de autorização de acesso para liquidação financeira diretamente perante a câmara, podendo ser contratado por PNP ou PL, é denominado:',
    options: {
      A: 'agente de custódia.',
      B: 'membro de compensação (MC).',
      C: 'banco liquidante.',
      D: 'controlador garantidor.',
    },
    correct: 'B',
    explanation:
      'O membro de compensação (MC) é o participante detentor de autorização de acesso para liquidação financeira diretamente perante a câmara, podendo ser contratado por participante de negociação pleno (PNP) ou participante de liquidação (PL). Ele se torna responsável pelas obrigações de uma operação desde o momento de sua aceitação pela câmara.',
    explanationWrong: {
      A: 'O agente de custódia tem autorização de acesso para custódia na central depositária, não para liquidação financeira direta perante a câmara.',
      C: 'O banco liquidante utiliza sua conta reservas bancárias para efetuar/receber pagamentos, mas não é o participante que assume a responsabilidade direta pelas obrigações das operações perante a câmara como o MC.',
      D: 'O controlador garantidor deposita garantias em favor de um participante controlado — papel de garantia, não de liquidação financeira direta.',
    },
    examTip: 'MC é responsável desde a ACEITAÇÃO da operação pela câmara — mesmo que o participante vinculado a ele falhe depois, o MC já está comprometido.',
    commonTrap: null,
    ...SRC('Participantes da câmara', '538'),
  },
  {
    topic: 'Participantes da câmara',
    subtopic: 'Participante de liquidação (PL)',
    difficulty: 'dificil',
    statement: 'O participante detentor de autorização de acesso para atuar no processo de compensação e liquidação, com acesso direto ao ambiente de contratação de empréstimo, mas SEM acesso direto ao ambiente de negociação da B3, é denominado:',
    options: {
      A: 'participante de negociação (PN).',
      B: 'participante de negociação pleno (PNP).',
      C: 'participante de liquidação (PL).',
      D: 'participante estrangeiro.',
    },
    correct: 'C',
    explanation:
      'O participante de liquidação (PL) é o participante detentor de autorização de acesso para atuar no processo de compensação e liquidação, com acesso direto ao ambiente de contratação de empréstimo e sem acesso direto ao ambiente de negociação — ele recebe, via repasse, as operações realizadas naquele ambiente.',
    explanationWrong: {
      A: 'O PN acessa o ambiente de negociação (por intermédio de um PNP), diferentemente do PL, que não tem esse acesso direto.',
      B: 'O PNP tem autorização de acesso justamente para NEGOCIAÇÃO — o oposto da característica central do PL.',
      D: 'O participante estrangeiro atua na execução de operações de comitentes não residentes, acessando o ambiente de negociação por meio de um PNP — não é o perfil descrito.',
    },
    examTip: 'PL = compensação/liquidação + acesso DIRETO ao empréstimo de ativos, mas SEM acesso direto à negociação (recebe as operações "via repasse").',
    commonTrap: '⚠️ Pegadinha: o PL é frequentemente confundido com o membro de compensação — mas se o PL não for ele mesmo um MC, precisa CONTRATAR um MC para atuar perante a câmara.',
    ...SRC('Participante de liquidação', '539'),
  },
  {
    topic: 'Participantes da câmara',
    subtopic: 'Banco emissor de garantias x Controlador garantidor',
    difficulty: 'dificil',
    statement: 'O participante cadastrado que possui controle sobre um PNP, PL ou MC e deposita ativos de sua própria titularidade como garantia em favor da câmara, permanecendo corresponsável até o limite dessas garantias em caso de inadimplência, é denominado:',
    options: {
      A: 'banco emissor de garantias.',
      B: 'controlador garantidor.',
      C: 'depositário do agronegócio.',
      D: 'agente de custódia.',
    },
    correct: 'B',
    explanation:
      'O controlador garantidor é o participante cadastrado que possui controle sobre PNP, PL ou MC e deposita ativos de sua própria titularidade como garantia em favor da câmara, permanecendo corresponsável pelas obrigações de pagamento assumidas pelo participante controlado até o limite das garantias de sua titularidade.',
    explanationWrong: {
      A: 'O banco emissor de garantias emite ativos passíveis de aceitação pela câmara EM GARANTIA (ex.: cartas de fiança) — não é o controlador do participante, apenas o emissor do instrumento de garantia.',
      C: 'O depositário do agronegócio guarda mercadorias e atua na liquidação de derivativos por entrega física — papel totalmente diferente do controlador garantidor.',
      D: 'O agente de custódia tem autorização de acesso para custódia na central depositária, efetuando entregas na conta da câmara a pedido do comitente — não tem relação de controle societário com o participante.',
    },
    examTip: 'Controlador garantidor = tem CONTROLE societário sobre o participante + deposita garantias próprias + fica corresponsável.',
    commonTrap: '⚠️ Não confunda "banco emissor de garantias" (emite o instrumento de garantia) com "controlador garantidor" (controla o participante e deposita garantia própria).',
    ...SRC('Participantes da câmara', '539-540'),
  },
  {
    topic: 'Participantes da câmara',
    subtopic: 'Bacen como participante',
    difficulty: 'prova',
    statement: 'Quando o Bacen atua na qualidade de participante da câmara — como membro de compensação, participante de negociação pleno e comitente — ele NÃO está sujeito a:',
    options: {
      A: 'apresentar-se corretamente identificado perante a câmara.',
      B: 'realizar suas operações em ambiente de negociação administrado pela B3.',
      C: 'supervisão da BSM, aos requisitos econômico-financeiros do manual de acesso, ao controle de saldo operacional e aos limites de concentração de posição em aberto.',
      D: 'observar a legislação em vigor no exercício de suas atividades.',
    },
    correct: 'C',
    explanation:
      'O Bacen, na qualidade de participante da câmara, atua como membro de compensação, participante de negociação pleno e comitente, não estando sujeito: à supervisão da BSM; aos requisitos econômico-financeiros, operacionais, funcionais, técnicos e de segurança da informação e de depósito de garantias do manual de acesso; ao controle de saldo operacional; e aos limites de concentração de posição em aberto.',
    explanationWrong: {
      A: 'A identificação perante a câmara é um requisito básico operacional que não está entre as dispensas expressamente listadas para o Bacen.',
      B: 'A realização de operações em ambiente de negociação é a própria atividade do Bacen como participante — não é algo do qual ele esteja dispensado.',
      D: 'A observância da legislação em vigor não é dispensada para nenhum participante, incluindo o Bacen — as dispensas são específicas e limitadas às hipóteses listadas.',
    },
    examTip: 'Bacen como participante é dispensado de 4 coisas específicas: supervisão da BSM, requisitos do manual de acesso, controle de saldo operacional e limites de concentração — decore essa lista fechada.',
    commonTrap: '⚠️ A prova pode tentar generalizar a dispensa do Bacen para "toda e qualquer regra" — a dispensa é uma lista fechada e específica.',
    ...SRC('Bacen na qualidade de participante', '540'),
  },

  // ---------- Compensação e liquidação ----------
  {
    topic: 'Compensação e liquidação',
    subtopic: 'Compensação — conceito',
    difficulty: 'medio',
    statement: 'A apuração dos direitos e das obrigações líquidos dos participantes, realizada pela câmara para cada data de liquidação, é denominada:',
    options: {
      A: 'liquidação bruta.',
      B: 'compensação.',
      C: 'administração de risco intradiário.',
      D: 'entrega contra pagamento.',
    },
    correct: 'B',
    explanation:
      'A compensação consiste na apuração dos direitos e das obrigações líquidos dos participantes. A câmara apura, para cada data de liquidação, os saldos líquidos multilaterais dos membros de compensação, dos PNPs, dos PLs e dos comitentes, por meio da compensação das obrigações e dos direitos decorrentes das operações realizadas e das posições em aberto.',
    explanationWrong: {
      A: 'A liquidação bruta é o oposto conceitual: liquida cada operação pelo valor bruto, SEM compensação/netting entre elas.',
      C: 'A administração de risco intradiário é o monitoramento contínuo da exposição ao risco de contraparte ao longo do dia — não é a apuração de saldos líquidos.',
      D: 'Entrega contra pagamento é o mecanismo de mitigação do risco de principal na liquidação — diferente do conceito de compensação (apuração de saldos líquidos).',
    },
    examTip: 'Compensação = apuração dos saldos LÍQUIDOS (netting). Liquidação bruta = SEM netting, valor cheio de cada operação.',
    commonTrap: null,
    ...SRC('Compensação e liquidação', '541'),
  },
  {
    topic: 'Compensação e liquidação',
    subtopic: 'Saldo líquido multilateral do comitente',
    difficulty: 'dificil',
    statement: 'Os saldos líquidos multilaterais dos comitentes são calculados:',
    options: {
      A: 'de forma consolidada, somando-se todas as operações do comitente independentemente da estrutura de participantes utilizada.',
      B: 'de forma segregada, em relação a cada combinação entre PNP, PL, PN, participante estrangeiro e membro de compensação.',
      C: 'exclusivamente em nível de membro de compensação, sem individualização por comitente.',
      D: 'apenas uma vez por semana, independentemente do volume de operações diário.',
    },
    correct: 'B',
    explanation:
      'Os saldos líquidos multilaterais dos comitentes são calculados de forma segregada em relação a cada combinação entre participante de negociação pleno, participante de liquidação, participante de negociação, participante estrangeiro e membro de compensação — ou seja, um mesmo comitente pode ter múltiplos saldos, um para cada estrutura de participantes utilizada.',
    explanationWrong: {
      A: 'É o oposto: o cálculo é SEGREGADO por combinação de participantes, não consolidado num único saldo geral do comitente.',
      C: 'Existe sim individualização por comitente — o saldo líquido multilateral do comitente é um dos três níveis apurados pela câmara (comitente, PNP/PN, membro de compensação).',
      D: 'A apuração de saldos ocorre a cada data de liquidação (tipicamente diária), não semanalmente.',
    },
    examTip: 'Saldo do comitente é SEGREGADO por combinação de estrutura de participantes — um comitente que opera por dois PNPs diferentes tem saldos distintos para cada um.',
    commonTrap: null,
    ...SRC('Compensação multilateral', '542-543'),
  },
  {
    topic: 'Compensação e liquidação',
    subtopic: 'Liquidação em moeda nacional',
    difficulty: 'medio',
    statement: 'A obrigação de pagamento do membro de compensação perante a câmara, ou vice-versa, é considerada extinta quando:',
    options: {
      A: 'o membro de compensação envia comprovante de transferência bancária à câmara.',
      B: 'a operação é registrada no ambiente de negociação.',
      C: 'o Bacen confirma a realização dos créditos e dos débitos.',
      D: 'transcorrem 30 dias corridos da data de liquidação.',
    },
    correct: 'C',
    explanation:
      'A liquidação do saldo líquido multilateral em moeda nacional entre os membros de compensação e a câmara é realizada durante a janela de liquidação (por meio do STR). A obrigação de pagamento do membro de compensação perante a câmara, ou vice-versa, é considerada extinta quando o Bacen confirma a realização dos créditos e dos débitos.',
    explanationWrong: {
      A: 'Um simples comprovante enviado pelo participante não extingue a obrigação — é necessária a confirmação oficial da realização de créditos/débitos pelo Bacen via STR.',
      B: 'O registro da operação no ambiente de negociação é apenas o início do processo, muito anterior à extinção da obrigação de pagamento na câmara.',
      D: 'Não há prazo de 30 dias para extinção — a extinção ocorre no momento da confirmação do Bacen, dentro da janela de liquidação do próprio dia.',
    },
    examTip: 'Liquidação em moeda nacional passa pelo STR (Sistema de Transferência de Reservas) — extinção da obrigação = confirmação do Bacen.',
    commonTrap: null,
    ...SRC('Liquidação do saldo líquido multilateral em moeda nacional', '543'),
  },
  {
    topic: 'Compensação e liquidação',
    subtopic: 'Liquidação bruta e bilateral',
    difficulty: 'dificil',
    statement: 'Na liquidação bruta ou pelo saldo líquido bilateral prestada pela câmara, é correto afirmar que a câmara:',
    options: {
      A: 'atua como contraparte central garantidora dessas operações, da mesma forma que na compensação multilateral.',
      B: 'não atua como contraparte central garantidora, atuando apenas como facilitadora, fornecendo infraestrutura para a liquidação.',
      C: 'somente presta esse serviço para operações do mercado de derivativos listados.',
      D: 'exige a constituição de fundo de liquidação específico para essas operações.',
    },
    correct: 'B',
    explanation:
      'Na liquidação bruta e na liquidação pelo saldo líquido bilateral, a câmara não atua como contraparte central garantidora das operações — atua apenas como facilitadora da liquidação, fornecendo a infraestrutura necessária para a preparação e liquidação das operações, sem assumir o risco de contraparte central típico da compensação multilateral.',
    explanationWrong: {
      A: 'É justamente o oposto: nessas modalidades a câmara NÃO assume o papel de contraparte central garantidora — esse papel é exclusivo da compensação multilateral.',
      C: 'A liquidação bruta/bilateral abrange diversas operações (renda variável, renda fixa privada, derivativos de balcão, registro de ETFs etc.), não apenas derivativos listados.',
      D: 'O fundo de liquidação é um mecanismo da estrutura de salvaguardas da compensação multilateral — não há exigência de fundo específico para liquidação bruta/bilateral, já que a câmara não garante essas operações.',
    },
    examTip: 'Liquidação bruta/bilateral = câmara SÓ facilita (infraestrutura), NÃO garante como contraparte central — diferente da compensação multilateral.',
    commonTrap: '⚠️ Pegadinha central deste tópico: assumir que a câmara sempre atua como contraparte central garantidora — isso só vale para a compensação MULTILATERAL.',
    ...SRC('Liquidação bruta e compensação bilateral', '545'),
  },

  // ---------- Administração de risco ----------
  {
    topic: 'Administração de risco',
    subtopic: 'Cálculo do risco de contraparte',
    difficulty: 'dificil',
    statement: 'O risco de contraparte decorrente das posições em aberto de um participante é calculado pela câmara como:',
    options: {
      A: 'a média histórica de preços dos últimos 12 meses do ativo negociado.',
      B: 'o maior custo potencial de encerramento das posições desse participante no mercado, considerando cenários de estresse.',
      C: 'um percentual fixo de 5% sobre o valor nocional das posições, independentemente do ativo.',
      D: 'o valor de mercado corrente das posições, sem qualquer ajuste por volatilidade.',
    },
    correct: 'B',
    explanation:
      'O risco de contraparte decorrente das posições em aberto de um participante é calculado pela câmara como o maior custo potencial de encerramento das posições desse participante no mercado, considerando-se cenários de estresse, definidos com base nas recomendações do Comitê Interno de Risco de Contraparte Central da B3.',
    explanationWrong: {
      A: 'O cálculo não se baseia em uma média histórica simples de preços — usa cenários de estresse e metodologia própria de risco.',
      C: 'Não existe um percentual fixo genérico de 5% — o cálculo é dinâmico, baseado em cenários de estresse específicos por ativo/carteira.',
      D: 'O valor de mercado corrente, isoladamente, não capta o risco de fechamento das posições em cenários adversos — por isso se usam cenários de estresse.',
    },
    examTip: 'Risco de contraparte = MAIOR CUSTO POTENCIAL de encerramento das posições, sob CENÁRIOS DE ESTRESSE — não é um valor simples de mercado.',
    commonTrap: null,
    ...SRC('Avaliação e cobertura do risco de contraparte', '547'),
  },
  {
    topic: 'Administração de risco',
    subtopic: 'Fundo de liquidação',
    difficulty: 'prova',
    statement: 'O fundo de liquidação mantido pela câmara é destinado à cobertura de perdas associadas à inadimplência dos membros de compensação, sendo seus recursos utilizados:',
    options: {
      A: 'antes da utilização das garantias depositadas pelos participantes declarados inadimplentes.',
      B: 'somente após a utilização das garantias depositadas pelos participantes declarados inadimplentes, e se estas não forem suficientes.',
      C: 'em substituição integral às garantias individuais dos participantes.',
      D: 'apenas mediante aprovação prévia da CVM para cada caso concreto.',
    },
    correct: 'B',
    explanation:
      'Os recursos do fundo de liquidação devem ser utilizados somente após a utilização das garantias depositadas pelos participantes declarados inadimplentes, e apenas no caso de o valor de tais garantias não ser suficiente para a cobertura dos valores devidos pelo membro de compensação à câmara.',
    explanationWrong: {
      A: 'É o oposto: o fundo de liquidação é usado DEPOIS, não antes, das garantias individuais do inadimplente — a lógica é usar primeiro o que é diretamente do devedor.',
      C: 'O fundo não substitui as garantias individuais — é um mecanismo COMPLEMENTAR, usado apenas se as garantias individuais não bastarem.',
      D: 'Não há exigência de aprovação prévia da CVM caso a caso para o acionamento do fundo — a utilização segue a ordem estabelecida no manual de administração de risco da câmara.',
    },
    examTip: 'Ordem de uso: 1º garantias do próprio inadimplente, 2º fundo de liquidação (MC inadimplente → B3 → demais MCs adimplentes, proporcionalmente).',
    commonTrap: '⚠️ Decore a sequência completa de utilização de garantias (comitente → PN → PNP/PL → MC → fundo de liquidação → caixa da B3) — é um dos pontos mais cobrados do capítulo.',
    ...SRC('Fundo de liquidação', '548-549'),
  },
  {
    topic: 'Administração de risco',
    subtopic: 'Fundo de liquidez',
    difficulty: 'dificil',
    statement: 'O fundo de liquidez mantido pela câmara, constituído por meio de um fundo de investimento administrado, gerido e custodiado pelo Banco B3 S.A., tem como cotistas exclusivamente:',
    options: {
      A: 'pessoas físicas investidoras de varejo cadastradas na B3.',
      B: 'a B3, os participantes de negociação plenos, os participantes de liquidação e os membros de compensação.',
      C: 'apenas o Banco Central do Brasil.',
      D: 'exclusivamente investidores estrangeiros institucionais.',
    },
    correct: 'B',
    explanation:
      'Os cotistas do fundo de liquidez são, exclusivamente, a B3, os participantes de negociação plenos, os participantes de liquidação e os membros de compensação. As cotas desse fundo são utilizadas exclusivamente para constituição de garantias, permanecendo depositadas a favor da estrutura de salvaguardas da câmara.',
    explanationWrong: {
      A: 'Investidores de varejo (pessoas físicas comuns) não são cotistas do fundo de liquidez — o acesso é restrito aos participantes estruturais listados.',
      C: 'O Bacen não é citado como cotista do fundo de liquidez — os cotistas são B3, PNPs, PLs e MCs.',
      D: 'Não há exclusividade para investidores estrangeiros institucionais — os cotistas são as entidades estruturais da câmara (B3, PNPs, PLs, MCs).',
    },
    examTip: 'Fundo de liquidez: cotistas SÓ podem ser B3 + PNP + PL + MC — investidor comum (comitente) NÃO é cotista.',
    commonTrap: '⚠️ Não confunda fundo de liquidez (mitiga risco de LIQUIDEZ, cotas usadas como garantia) com o fundo de liquidação (mitiga risco de CRÉDITO/inadimplência, usa contribuições diretas).',
    ...SRC('Fundo de liquidez', '549'),
  },

  // ---------- Falhas e situações especiais ----------
  {
    topic: 'Falhas e situações especiais',
    subtopic: 'Devedor operacional x inadimplente',
    difficulty: 'facil',
    statement: 'O participante que não efetuar a liquidação de sua obrigação, na forma estabelecida pela câmara, em decorrência de insuficiência financeira, poderá ser declarado:',
    options: {
      A: 'insolvente.',
      B: 'concordatário.',
      C: 'inadimplente.',
      D: 'devedor operacional.',
    },
    correct: 'C',
    explanation:
      'O participante que não efetuar a liquidação de sua obrigação, na forma estabelecida pela câmara, em decorrência de insuficiência financeira, poderá ser declarado inadimplente. Já o participante que falha por problemas estritamente operacionais (não financeiros) pode ser declarado devedor operacional.',
    explanationWrong: {
      A: '"Insolvente" não é a terminologia usada pelo Regulamento da Câmara B3 para essa hipótese — o termo técnico correto é "inadimplente".',
      B: '"Concordatário" é um termo ligado ao antigo instituto da concordata (hoje substituído pela recuperação judicial) — não é a classificação usada pela câmara para falta de pagamento.',
      D: 'Devedor operacional é a classificação para falhas de ORDEM ESTRITAMENTE OPERACIONAL — não para insuficiência financeira, que caracteriza inadimplência.',
    },
    examTip: 'Falha por problema OPERACIONAL → devedor operacional. Falha por falta de DINHEIRO (insuficiência financeira) → inadimplente.',
    commonTrap: '⚠️ Clássica pegadinha de prova — trocar as duas classificações entre si.',
    ...SRC('Caracterização de participante como devedor operacional e/ou inadimplente', '551'),
  },
  {
    topic: 'Falhas e situações especiais',
    subtopic: 'Falha de entrega de ativo',
    difficulty: 'dificil',
    statement: 'Na hipótese de falha de entrega de ativo por comitente na central depositária, a câmara inicia o processo de tratamento da falha realizando:',
    options: {
      A: 'a suspensão definitiva do comitente, sem possibilidade de recurso.',
      B: 'a contratação compulsória de operação de empréstimo do ativo, sob a responsabilidade do PNP, PL, PN e MC, conforme o caso.',
      C: 'o cancelamento retroativo da operação que originou a obrigação de entrega.',
      D: 'a conversão automática da obrigação de entrega em pagamento em espécie, sem qualquer outra medida.',
    },
    correct: 'B',
    explanation:
      'Na hipótese de falha de entrega de ativo por comitente na depositária, a câmara inicia o processo de tratamento de falha de entrega realizando a contratação compulsória, pelo comitente devedor do ativo e sob a responsabilidade do PNP, do PL, do PN e do MC, conforme o caso, de operação de empréstimo do ativo no sistema de contratação de empréstimo de ativos mantido pela B3.',
    explanationWrong: {
      A: 'A suspensão definitiva e sem recurso não é a primeira medida adotada — o processo específico é a contratação compulsória de empréstimo do ativo.',
      C: 'A câmara não cancela retroativamente a operação — busca resolver a falha por meio do empréstimo compulsório do ativo faltante.',
      D: 'A conversão automática em pagamento em espécie não é o mecanismo previsto para falha de ATIVO — para falha de MERCADORIA, o tratamento é a suspensão do pagamento devido e eventual prazo adicional.',
    },
    examTip: 'Falha de ATIVO → contratação COMPULSÓRIA de empréstimo do ativo. Falha de MERCADORIA → suspensão do pagamento devido + eventual prazo adicional.',
    commonTrap: '⚠️ Não confunda o tratamento de falha de entrega de ATIVO (empréstimo compulsório) com o de falha de entrega de MERCADORIA (suspensão de pagamento).',
    ...SRC('Falha na liquidação por entrega', '551-552'),
  },
  {
    topic: 'Falhas e situações especiais',
    subtopic: 'Situações especiais — Lei 10.214/2001',
    difficulty: 'prova',
    statement: 'Nos termos do artigo 7º da Lei nº 10.214/2001, os regimes de insolvência civil, concordata, intervenção, falência ou liquidação extrajudicial a que seja submetido um participante:',
    options: {
      A: 'suspendem imediatamente todas as obrigações desse participante perante a câmara.',
      B: 'não afetam o adimplemento das obrigações assumidas no âmbito das câmaras, que serão ultimadas e liquidadas na forma de seus regulamentos.',
      C: 'transferem automaticamente as garantias do participante para a União Federal.',
      D: 'obrigam a câmara a devolver imediatamente todas as garantias depositadas pelo participante insolvente.',
    },
    correct: 'B',
    explanation:
      'Nos termos do art. 7º da Lei 10.214/2001, os regimes de insolvência civil, concordata, intervenção, falência ou liquidação extrajudicial a que seja submetido qualquer participante não afetarão o adimplemento de suas obrigações assumidas no âmbito das câmaras, que serão ultimadas e liquidadas pela câmara na forma de seus regulamentos.',
    explanationWrong: {
      A: 'É o oposto: a lei garante justamente que essas obrigações NÃO sejam suspensas — elas continuam sendo ultimadas e liquidadas pela câmara.',
      C: 'A lei prevê que o produto da realização das garantias seja destinado à liquidação das obrigações assumidas no âmbito das câmaras — não há transferência para a União.',
      D: 'É o oposto do previsto: as garantias e demais ativos objeto de compensação/liquidação são destinados à liquidação das obrigações, não devolvidos automaticamente ao participante insolvente.',
    },
    examTip: 'Lei 10.214/2001, art. 7º: regimes de insolvência do participante NÃO afetam suas obrigações na câmara — princípio da segurança jurídica da liquidação.',
    commonTrap: '⚠️ Esse dispositivo legal específico (Lei 10.214/2001) é frequentemente cobrado literalmente — vale memorizar a lógica de que a câmara "blinda" a liquidação de eventuais processos de insolvência do participante.',
    ...SRC('Situações especiais', '552-553'),
  },

  // ---------- Continuidade de negócios e sanções ----------
  {
    topic: 'Continuidade de negócios e sanções',
    subtopic: 'Continuidade de negócios',
    difficulty: 'medio',
    statement: 'A B3 conta com infraestrutura tecnológica compatível com seu enquadramento, pelo Bacen, como:',
    options: {
      A: 'instituição financeira de pequeno porte.',
      B: 'câmara de compensação e de liquidação sistemicamente importante.',
      C: 'entidade sem relevância sistêmica.',
      D: 'prestadora de serviços auxiliares ao Sistema Financeiro Nacional, sem qualquer enquadramento especial.',
    },
    correct: 'B',
    explanation:
      'A B3 conta com infraestrutura tecnológica compatível com o seu enquadramento, pelo Bacen, como câmara de compensação e de liquidação sistemicamente importante — o que justifica exigências elevadas de continuidade de negócios, incluindo um centro de processamento de dados secundário espelhado ao principal.',
    explanationWrong: {
      A: 'A B3 não é enquadrada como instituição financeira de pequeno porte — pelo contrário, seu porte e relevância sistêmica justificam exigências rigorosas de infraestrutura.',
      C: 'É o oposto: a B3 tem justamente relevância sistêmica reconhecida pelo Bacen, e não ausência dela.',
      D: 'O enquadramento como câmara sistemicamente importante é um enquadramento ESPECIAL e específico, não uma classificação genérica sem relevância especial.',
    },
    examTip: 'B3 é enquadrada pelo Bacen como câmara "sistemicamente importante" — por isso mantém centro de dados secundário espelhado (mesmos sistemas/nobreaks/geradores).',
    commonTrap: null,
    ...SRC('Política de continuidade de negócios', '554'),
  },
  {
    topic: 'Continuidade de negócios e sanções',
    subtopic: 'Competência sancionadora',
    difficulty: 'facil',
    statement: 'Compete à BSM apurar e punir as infrações dispostas nos regulamentos da Câmara B3, aplicando as penalidades previstas em seu(sua):',
    options: {
      A: 'contrato social, conforme deliberação da diretoria a cada caso.',
      B: 'estatuto social, na forma de seu Regulamento Processual.',
      C: 'convênio celebrado com a CVM para cada infração específica.',
      D: 'legislação penal comum, exclusivamente.',
    },
    correct: 'B',
    explanation:
      'Compete à BSM apurar e punir as infrações do disposto nos regulamentos da B3, nas normas que os complementam ou na legislação e regulamentação em vigor, aplicando, conforme o caso, as penalidades previstas em seu estatuto social, na forma de seu Regulamento Processual.',
    explanationWrong: {
      A: 'Não é uma deliberação discricionária da diretoria a cada caso — segue o estatuto social e o Regulamento Processual, de forma padronizada.',
      C: 'Não depende de convênio específico com a CVM para cada infração — a competência da BSM decorre diretamente de seu papel de autorregulador.',
      D: 'A punição de infrações regulamentares não se dá pela legislação penal comum — é um processo administrativo/disciplinar próprio da BSM, no âmbito da autorregulação.',
    },
    examTip: 'BSM pune com base no PRÓPRIO estatuto social + Regulamento Processual — mesmo padrão já visto para as sanções do Título V (negociação).',
    commonTrap: null,
    ...SRC('Sanções', '555'),
  },
];
