export const chapterRef = { titleNumber: 'I', chapterNumber: 'II' };

export const flashcards = [
  {
    front: 'O que é uma QCCP e qual o FPR aplicável no Brasil?',
    back: 'QCCP (qualifying central counterparty): câmara-CCP que cumpre substancialmente os princípios do PFMI (Resolução BCB 229/2022). No Brasil, aplica-se FPR de 2% às exposições de titularidade própria com uma QCCP.',
    difficulty: 'dificil',
    source_page: '50',
  },
  {
    front: 'PS, TR, SSS, CCP, CSD — o que cada sigla do PFMI representa?',
    back: 'PS: sistema de pagamentos. TR: entidade de registro. SSS: sistema de liquidação. CCP: contraparte central. CSD: central depositária. São as 5 infraestruturas do documento PFMI (BIS/Iosco).',
    difficulty: 'medio',
    source_page: '51-53',
  },
  {
    front: 'Novação contratual: o que é?',
    back: 'Instituto jurídico que extingue a obrigação original e cria uma nova. É o mecanismo pelo qual a câmara se torna contraparte central, substituindo os contratos entre as partes originais por contratos de cada parte com a câmara.',
    difficulty: 'medio',
    source_page: '54',
  },
  {
    front: 'LBTR x LDL — qual a diferença?',
    back: 'LBTR (liquidação bruta em tempo real): transação por transação, individual (ex.: STR, Selic). LDL (liquidação diferida líquida): acumula transações e liquida pelo saldo líquido multilateral após um prazo (ex.: câmaras como a B3).',
    difficulty: 'medio',
    source_page: '57-58',
  },
  {
    front: 'Defaulters pay x Survivors pay',
    back: 'Defaulters pay: cada participante cobre, com garantia própria, o risco que ele mesmo gera (colateralização individual). Survivors pay: fundo mutualizado constituído pelos participantes cobre perdas residuais.',
    difficulty: 'dificil',
    source_page: '59-60',
  },
  {
    front: 'O Selic atua como contraparte central?',
    back: 'Não. O Selic é a central depositária dos títulos públicos federais e opera LBTR com DVP, mas o próprio Guia destaca: "o Selic não atua como contraparte central na liquidação das operações".',
    difficulty: 'dificil',
    source_page: '61',
  },
  {
    front: 'CIP x Compe — o que cada uma administra?',
    back: 'CIP: administra Sitraf e Siloc (transferências e ordens de crédito interbancárias). Compe: compensação de cheques (LDL), executada pelo Banco do Brasil.',
    difficulty: 'medio',
    source_page: '62-64',
  },
];
