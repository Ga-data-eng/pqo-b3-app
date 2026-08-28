// Título II - Mercados de Bolsa e de Balcão
// Capítulo VII - Outros ativos e serviços
// Fonte: Guia Por Dentro da B3, páginas 344-361.

export const chapterRef = { titleNumber: 'II', chapterNumber: 'VII' };

export const topics = [
  'Serviços informacionais e leilões',
  'Cepac e COE',
  'Netting e mitigadores de risco',
];

const SRC = (section, page) => ({
  source_title: 'Guia Por Dentro da B3',
  source_chapter: 'Título II, Capítulo VII — Outros ativos e serviços',
  source_section: section,
  source_page: page,
});

export const questions = [
  // ---------- Serviços informacionais e leilões ----------
  {
    topic: 'Serviços informacionais e leilões',
    subtopic: 'Market data',
    difficulty: 'facil',
    statement: 'O serviço da B3 que envia, em tempo real, informações geradas pela bolsa e notícias econômicas sobre o mercado de ações e derivativos é chamado de:',
    options: {
      A: 'Sinacor.',
      B: 'Market data.',
      C: 'Cepac.',
      D: 'Netting.',
    },
    correct: 'B',
    explanation:
      'O market data da B3 é o serviço que envia, em tempo real, para qualquer lugar do mundo, informações geradas pela bolsa e notícias econômicas sobre o mercado de ações e derivativos. A instituição que se torna "vendor" passa a ter o direito de distribuir esses dados a investidores e clientes.',
    explanationWrong: {
      A: 'O Sinacor é o Sistema Integrado de Administração de Corretoras, voltado à retaguarda operacional das corretoras, não à distribuição de cotações em tempo real.',
      C: 'Cepac é um valor mobiliário municipal ligado a potencial construtivo, sem relação com distribuição de dados de mercado.',
      D: 'Netting é um contrato de compensação de exposições de crédito, sem relação com dados de mercado.',
    },
    examTip:
      'Market data = "a informação da bolsa em tempo real, para o mundo todo", distribuída por vendors.',
    commonTrap:
      'Vendor é quem DISTRIBUI o market data (não é o próprio serviço) — não confunda o papel do vendor com o serviço de market data em si.',
    ...SRC('3. Serviços de natureza informacional — Market data', '348'),
  },
  {
    topic: 'Serviços informacionais e leilões',
    subtopic: 'Sinacor',
    difficulty: 'medio',
    statement: 'O Sistema Integrado de Administração de Corretoras (Sinacor) tem como principal finalidade:',
    options: {
      A: 'Otimizar a retaguarda dos agentes do mercado, informatizando atividades operacionais e de controle.',
      B: 'Distribuir cotações de ações em tempo real para investidores no exterior.',
      C: 'Registrar operações de seguro para atender à demanda regulatória da Susep.',
      D: 'Calcular o valor de ajuste diário dos contratos futuros.',
    },
    correct: 'A',
    explanation:
      'O Sinacor otimiza a retaguarda (back office) dos agentes do mercado, facilitando, por meio da informatização, suas atividades operacionais e de controle. É estruturado em módulos que permitem atendimento personalizado conforme as necessidades de cada usuário.',
    explanationWrong: {
      B: 'A distribuição de cotações em tempo real é função do serviço de market data, não do Sinacor.',
      C: 'O registro de operações de seguro é função do SRO (registro de operações de seguro), serviço distinto do Sinacor.',
      D: 'O cálculo do ajuste diário é uma função das câmaras de compensação (Core), não do Sinacor, que é um sistema de retaguarda administrativa.',
    },
    examTip:
      'Sinacor = "ERP" das corretoras — sistema de retaguarda (back office) para administração operacional, não um serviço de dados de mercado.',
    commonTrap:
      'Não confunda Sinacor (retaguarda administrativa das corretoras) com market data (distribuição de cotações) — são serviços diferentes da B3, ambos voltados a participantes do mercado, mas com propósitos distintos.',
    ...SRC('4. Sistema Integrado de Administração de Corretoras (Sinacor)', '350'),
  },
  {
    topic: 'Serviços informacionais e leilões',
    subtopic: 'Leilões conduzidos pela B3',
    difficulty: 'medio',
    statement: 'A B3, ao oferecer infraestrutura para leilões públicos e privados (rodovias, aeroportos, energia elétrica etc.), permite o acesso de:',
    options: {
      A: 'Apenas pessoas jurídicas de direito público.',
      B: 'Qualquer pessoa física ou jurídica, de direito público ou privado, com intenção de negociar o objeto de interesse.',
      C: 'Exclusivamente investidores estrangeiros.',
      D: 'Somente instituições financeiras autorizadas pelo Bacen.',
    },
    correct: 'B',
    explanation:
      'Qualquer pessoa física ou jurídica, de direito público ou privado, pode acessar a B3 com a intenção de negociar o objeto de seu interesse nos leilões conduzidos pela bolsa (rodovias, aeroportos, energia elétrica, saneamento, créditos de carbono, entre outros).',
    explanationWrong: {
      A: 'O acesso não é restrito a pessoas jurídicas de direito público — pessoas físicas e jurídicas de direito privado também podem participar.',
      C: 'Não há essa restrição a investidores estrangeiros — o acesso é amplo, para qualquer pessoa física ou jurídica interessada.',
      D: 'Não há essa restrição a instituições financeiras — o serviço de leilões da B3 é aberto a qualquer interessado, de direito público ou privado.',
    },
    examTip:
      'Leilões da B3: acesso amplo — qualquer pessoa física/jurídica, pública ou privada, interessada no objeto do leilão (rodovia, energia, saneamento etc.).',
    commonTrap:
      'Não pense que os leilões da B3 são restritos ao setor público (governo) apenas porque envolvem concessões de infraestrutura — o acesso para participar é amplo.',
    ...SRC('2. Leilões', '346'),
  },

  // ---------- Cepac e COE ----------
  {
    topic: 'Cepac e COE',
    subtopic: 'Cepac — emissor',
    difficulty: 'medio',
    statement: 'O Certificado de Potencial Adicional de Construção (Cepac) é um valor mobiliário emitido:',
    options: {
      A: 'Pela União, para financiar obras federais.',
      B: 'Pelas prefeituras, como meio de pagamento de contrapartida para outorga de direito urbanístico adicional em operação urbana consorciada.',
      C: 'Pelos estados, para financiar rodovias estaduais.',
      D: 'Por construtoras privadas, sem qualquer registro na CVM.',
    },
    correct: 'B',
    explanation:
      'O Cepac é emitido pela prefeitura de determinado município, utilizado como meio de pagamento de contrapartida para a outorga de direito urbanístico adicional dentro do perímetro de uma operação urbana consorciada, conforme a Resolução CVM nº 84/2022.',
    explanationWrong: {
      A: 'O Cepac não é emitido pela União — é um instrumento municipal, emitido pela prefeitura local.',
      C: 'O Cepac não é emitido pelos estados — sua emissão é uma prerrogativa municipal (prefeituras).',
      D: 'O Cepac não pode ser ofertado no mercado sem registro prévio na CVM — a afirmação de "sem qualquer registro" está incorreta, além de não ser emitido por construtoras privadas.',
    },
    examTip:
      'Cepac = título MUNICIPAL, emitido pela prefeitura, para financiar revitalização urbana, pago em "potencial construtivo adicional" (m² extra de construção).',
    commonTrap:
      'Esta é uma das três perguntas-modelo do próprio Guia nesse capítulo — sinal de que é um dos pontos mais cobrados: "quem emite o Cepac" (resposta: prefeituras, não União nem estados).',
    ...SRC('5. Certificado de Potencial Adicional de Construção (Cepac)', '351'),
  },
  {
    topic: 'Cepac e COE',
    subtopic: 'COE — modalidades',
    difficulty: 'medio',
    statement: 'O Certificado de Operações Estruturadas (COE) pode ser emitido em duas modalidades:',
    options: {
      A: 'Valor nominal protegido (com garantia do principal) ou valor nominal em risco (com possibilidade de perda até o limite do capital investido).',
      B: 'Renda fixa pura ou renda variável pura, sem possibilidade de combinação.',
      C: 'Apenas para investidores qualificados, nunca para varejo.',
      D: 'Somente com garantia integral do Fundo Garantidor de Créditos (FGC).',
    },
    correct: 'A',
    explanation:
      'O COE pode ser emitido em duas modalidades: valor nominal protegido, com garantia do valor principal investido; ou valor nominal em risco, em que há possibilidade de perda até o limite do capital investido. Em ambos os casos, deve ser observada a regra de suitability.',
    explanationWrong: {
      B: 'O COE é, na verdade, um instrumento híbrido que MESCLA elementos de renda fixa e renda variável — não é "puro" de um tipo ou de outro.',
      C: 'O COE pode ser destinado a diferentes perfis de investidores (conservadores e arrojados), conforme a estratégia — não é restrito apenas a qualificados.',
      D: 'O Guia é explícito: NÃO há garantia do Fundo Garantidor de Créditos (FGC) para o COE — mesmo na modalidade "capital protegido", a proteção vem da estrutura do produto, não do FGC.',
    },
    examTip:
      'COE: protegido (sem risco de perder o principal) x em risco (pode perder até o capital investido). NUNCA tem garantia do FGC, em nenhuma das duas modalidades.',
    commonTrap:
      '"Capital protegido" não significa "garantido pelo FGC" — é uma proteção estrutural do próprio produto (definida pelo emissor), diferente da garantia legal do FGC que outros títulos possuem.',
    ...SRC('6. Certificado de Operações Estruturadas (COE)', '352'),
  },
  {
    topic: 'Cepac e COE',
    subtopic: 'COE — base legal',
    difficulty: 'dificil',
    statement: 'O Certificado de Operações Estruturadas (COE) foi criado pela mesma lei que instituiu:',
    options: {
      A: 'As debêntures.',
      B: 'As letras financeiras (LF).',
      C: 'Os certificados de recebíveis imobiliários (CRI).',
      D: 'As notas promissórias.',
    },
    correct: 'B',
    explanation:
      'O COE foi criado pela Lei nº 12.249/2010, a mesma lei que instituiu as letras financeiras, mas foi regulamentado pelo CMN apenas no segundo semestre de 2013, representando uma alternativa de captação de recursos para os bancos.',
    explanationWrong: {
      A: 'Debêntures não foram criadas pela Lei nº 12.249/2010 — são reguladas principalmente pela Lei das Sociedades por Ações (Lei nº 6.404/1976).',
      C: 'CRI é regulado por normativos específicos de securitização imobiliária, sem relação com a Lei nº 12.249/2010 que criou o COE e a LF.',
      D: 'Notas promissórias não têm origem na Lei nº 12.249/2010 — são tituladas por normas específicas do mercado de capitais para captação de curto prazo.',
    },
    examTip:
      'Lei nº 12.249/2010 = "lei-mãe" de dois instrumentos: Letra Financeira (LF) e COE. Uma coincidência histórica útil para decorar.',
    commonTrap:
      'É uma conexão específica e pouco óbvia entre dois capítulos diferentes do Guia (renda fixa e outros ativos) — a prova pode explorar justamente esse tipo de ligação entre temas.',
    ...SRC('6. Certificado de Operações Estruturadas (COE)', '352'),
  },
  {
    topic: 'Cepac e COE',
    subtopic: 'Estratégia COE — alta ilimitada alavancada',
    difficulty: 'prova',
    statement:
      'Um investidor aplica em um COE com estratégia "alta ilimitada alavancada com capital protegido", alavancagem de 2,5x. Se o ativo subjacente valorizar 20%, o investidor ganhará aproximadamente:',
    options: {
      A: '10%.',
      B: '20%.',
      C: '50%.',
      D: '2,5%.',
    },
    correct: 'C',
    explanation:
      'Na estratégia de alta ilimitada alavancada, o ganho do investidor é a valorização do ativo multiplicada pelo fator de alavancagem. Com alavancagem de 2,5x e valorização de 20%, o ganho será de 20% × 2,5 = 50%.',
    explanationWrong: {
      A: '10% corresponderia a uma alavancagem menor que 1x sobre uma valorização de 20% — não condiz com o fator de 2,5x do enunciado.',
      B: '20% seria o resultado sem qualquer alavancagem (fator 1x) — mas o enunciado especifica alavancagem de 2,5x, que deve ser aplicada.',
      D: '2,5% inverteria a lógica do cálculo (dividindo em vez de multiplicar) — o fator de alavancagem multiplica o ganho, não o reduz.',
    },
    examTip:
      'Alta ilimitada alavancada = variação do ativo × fator de alavancagem = ganho do investidor. No exemplo do próprio Guia: alta de 10% com alavancagem 2,5x = ganho de 25%.',
    commonTrap:
      'Fácil errar a conta esquecendo de multiplicar pela alavancagem — sempre releia o fator de alavancagem informado no enunciado antes de calcular.',
    ...SRC('6. Certificado de Operações Estruturadas (COE) — Principais estratégias utilizadas com COEs', '353'),
  },

  // ---------- Netting e mitigadores de risco ----------
  {
    topic: 'Netting e mitigadores de risco',
    subtopic: 'Contrato de netting',
    difficulty: 'medio',
    statement: 'O contrato de netting (acordo de compensação) tem por objetivo:',
    options: {
      A: 'Aumentar o risco de exposição de crédito entre as partes.',
      B: 'Reduzir o risco de exposição de crédito de uma parte perante a outra, identificando, em caso de vencimento, o valor líquido efetivamente devido entre elas.',
      C: 'Substituir integralmente a necessidade de registro de operações na B3.',
      D: 'Eliminar totalmente qualquer possibilidade de compensação entre créditos e débitos.',
    },
    correct: 'B',
    explanation:
      'O contrato de netting tem por objetivo reduzir o risco de exposição de crédito de uma parte perante a outra, resultante de operações celebradas entre elas, de forma que, em caso de vencimento, após a compensação, seja identificado o valor efetivamente devido pela parte devedora à parte credora.',
    explanationWrong: {
      A: 'É o oposto: o netting busca REDUZIR (não aumentar) o risco de exposição de crédito entre as partes.',
      C: 'O acordo de netting deve, ele próprio, ser registrado na B3 (em até 15 dias úteis da assinatura) — não substitui a necessidade de registro de operações.',
      D: 'O netting é, essencialmente, um mecanismo DE compensação entre créditos e débitos — ele viabiliza, não elimina, essa compensação.',
    },
    examTip:
      'Netting = "compensar para reduzir risco": no lugar de somar todos os créditos/débitos brutos, calcula-se o saldo líquido devido entre as partes.',
    commonTrap:
      'O acordo de netting precisa ser REGISTRADO na B3 em até 15 dias úteis da assinatura — não é um contrato apenas privado entre as partes, sem formalidade regulatória.',
    ...SRC('8. Contrato de netting', '357'),
  },
  {
    topic: 'Netting e mitigadores de risco',
    subtopic: 'Netting e Lei de Falências',
    difficulty: 'dificil',
    statement: 'Segundo a Nova Lei de Falências (Lei nº 11.101/2005), em caso de falência de uma das partes de um acordo de compensação (netting) no âmbito do SFN:',
    options: {
      A: 'O contrato é automaticamente anulado, sem qualquer compensação de créditos.',
      B: 'A parte não falida pode considerar o contrato vencido antecipadamente, admitindo-se a compensação do crédito apurado em favor do falido com créditos detidos pelo contratante.',
      C: 'Somente o juiz da falência pode decidir sobre o contrato, sem participação das partes.',
      D: 'O acordo de netting perde toda a validade jurídica em processos de falência.',
    },
    correct: 'B',
    explanation:
      'Segundo o artigo 119, inciso VIII, da Lei nº 11.101/2005 (Nova Lei de Falências), havendo acordo de compensação e liquidação de obrigações no âmbito do SFN, a parte não falida pode considerar o contrato vencido antecipadamente, sendo liquidado na forma regulamentar, admitindo-se a compensação de eventual crédito apurado em favor do falido com créditos detidos pelo contratante.',
    explanationWrong: {
      A: 'O contrato não é simplesmente anulado sem compensação — a lei prevê justamente o mecanismo de vencimento antecipado COM compensação de créditos.',
      C: 'A lei confere à parte NÃO FALIDA a prerrogativa de considerar o contrato vencido antecipadamente — não é uma decisão exclusiva do juiz, sem participação das partes.',
      D: 'É o oposto: a lei reforça a validade jurídica do acordo de netting justamente em cenários de falência, dando segurança jurídica a esse mecanismo.',
    },
    examTip:
      'A Lei de Falências (art. 119, VIII) PROTEGE o mecanismo de netting mesmo em caso de falência — objetivo declarado: reduzir custo de captação (juros) dando segurança jurídica ao mercado.',
    commonTrap:
      'Não pense que a falência de uma parte "quebra" automaticamente o contrato de netting sem solução — a lei prevê justamente um mecanismo protetivo de vencimento antecipado com compensação para a parte não falida.',
    ...SRC('8. Contrato de netting', '357'),
  },
  {
    topic: 'Netting e mitigadores de risco',
    subtopic: 'Mitigadores de risco (DRRC)',
    difficulty: 'dificil',
    statement: 'O registro com redutor de risco de crédito (DRRC) permite que as partes de uma operação:',
    options: {
      A: 'Estabeleçam a periodicidade de apuração e um limite de risco (unilateral ou bilateral), com pagamento do excedente entre o valor de mercado (MtM) e o limite estabelecido.',
      B: 'Eliminem totalmente a necessidade de qualquer acompanhamento do valor de mercado da operação.',
      C: 'Sejam dispensadas de qualquer registro na B3.',
      D: 'Apliquem esse mecanismo exclusivamente a operações de renda fixa tradicional (CDB, LCI, LCA).',
    },
    correct: 'A',
    explanation:
      'O DRRC permite que as partes estabeleçam a periodicidade de apuração e um limite de risco (unilateral, em favor de uma parte, ou bilateral, em favor de ambas). O valor de mercado (MtM) é apurado periodicamente e, quando ultrapassa o limite, o excedente é pago pela parte devedora à credora — disponível para contratos de termo, swap e opções.',
    explanationWrong: {
      B: 'Ao contrário: o mecanismo depende justamente do acompanhamento periódico do valor de mercado (MtM) da operação para funcionar.',
      C: 'O DRRC é um mecanismo de registro (aliás, "registro com redutor de risco de crédito") — não dispensa o registro, é uma modalidade dele.',
      D: 'O DRRC é disponível especificamente para contratos de Termo, Swap e Opções (derivativos) — não para títulos de renda fixa tradicional como CDB, LCI ou LCA.',
    },
    examTip:
      'DRRC = mecanismo para DERIVATIVOS (termo, swap, opções) que paga periodicamente o excedente de MtM acima de um limite acordado, mitigando risco de crédito acumulado.',
    commonTrap:
      'DRRC é uma funcionalidade específica para os TRÊS tipos de derivativos citados (termo, swap, opções) — não é um mecanismo genérico aplicável a qualquer produto financeiro.',
    ...SRC('9. Mitigadores de risco (DRRC)', '358'),
  },
];
