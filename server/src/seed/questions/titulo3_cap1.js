// Título III - Estrutura de contas e cadastro
// Capítulo I - Cadastro de investidores residentes
// Fonte: Guia Por Dentro da B3, páginas 405-419.

export const chapterRef = { titleNumber: 'III', chapterNumber: 'I' };

export const topics = [
  'Cadastro de investidores na B3',
  'A conta do investidor',
  'Procedimentos de cadastro e vínculos',
];

const SRC = (section, page) => ({
  source_title: 'Guia Por Dentro da B3',
  source_chapter: 'Título III, Capítulo I — Cadastro de investidores residentes',
  source_section: section,
  source_page: page,
});

export const questions = [
  // ---------- Cadastro de investidores na B3 ----------
  {
    topic: 'Cadastro de investidores na B3',
    subtopic: 'Responsabilidade pelo cadastro',
    difficulty: 'facil',
    statement: 'Todo investidor que deseja operar no mercado de capitais brasileiro deve fazê-lo por meio de uma instituição intermediária, que é responsável por:',
    options: {
      A: 'Garantir a rentabilidade das operações do investidor.',
      B: 'Manter um cadastro atualizado do investidor e avaliar a coerência das operações com sua capacidade de investimento.',
      C: 'Fixar as diretrizes de política monetária aplicáveis ao investidor.',
      D: 'Determinar unilateralmente os ativos que o investidor deve comprar.',
    },
    correct: 'B',
    explanation:
      'A instituição intermediária, em cumprimento à legislação, é obrigada a manter um cadastro atualizado do investidor, além de avaliar a coerência das operações desse investidor com sua capacidade de investimento. Ela também é totalmente responsável pela autenticidade das informações cadastrais.',
    explanationWrong: {
      A: 'A instituição intermediária não garante rentabilidade — sua responsabilidade é cadastral e de avaliação de coerência/adequação (suitability), não de resultado financeiro.',
      C: 'Fixar diretrizes de política monetária é atribuição do CMN, sem relação com a função de cadastro da instituição intermediária.',
      D: 'A decisão de investimento é sempre do investidor — a instituição não determina unilateralmente os ativos que ele deve comprar, apenas orienta e verifica adequação (suitability).',
    },
    examTip:
      'A instituição intermediária é responsável pela AUTENTICIDADE das informações cadastrais e por qualquer alteração feita — não pelo resultado financeiro das operações do cliente.',
    commonTrap:
      'Não confunda "responsabilidade pela autenticidade do cadastro" com "responsabilidade pelo resultado do investimento" — são obrigações de naturezas completamente diferentes.',
    ...SRC('2. Cadastro de investidores na B3 — Regra geral', '407'),
  },
  {
    topic: 'Cadastro de investidores na B3',
    subtopic: 'Atualização cadastral periódica',
    difficulty: 'medio',
    statement: 'Segundo a Resolução CVM nº 50/2021, as instituições devem definir, em sua política de PLDFT, os critérios e a periodicidade para atualização dos cadastros de clientes ativos, observando-se o intervalo máximo de:',
    options: {
      A: '1 ano.',
      B: '3 anos.',
      C: '5 anos.',
      D: '10 anos.',
    },
    correct: 'C',
    explanation:
      'A Resolução CVM nº 50/2021 exige que o participante defina, em sua política de PLDFT, os critérios e a periodicidade para atualização cadastral dos clientes ativos, observando-se o intervalo máximo de cinco anos. Isso não significa refazer o cadastro, mas certificar-se de que as informações continuam válidas.',
    explanationWrong: {
      A: '1 ano não é o intervalo máximo estabelecido pela norma — o limite é bem mais amplo, de cinco anos.',
      B: '3 anos também não corresponde ao intervalo máximo definido pela Resolução CVM nº 50/2021.',
      D: '10 anos excede o limite máximo estabelecido pela norma, que é de cinco anos.',
    },
    examTip:
      'Intervalo máximo de atualização cadastral: 5 anos. É uma verificação de validade das informações, não um "recadastramento" completo.',
    commonTrap:
      'Não confunda "atualização cadastral" (checagem periódica de validade, no máximo a cada 5 anos) com "refazer o cadastro do zero" — são conceitos diferentes, conforme o próprio Guia esclarece.',
    ...SRC('2. Cadastro de investidores na B3 — Regulamentação CVM', '407, 414'),
  },
  {
    topic: 'Cadastro de investidores na B3',
    subtopic: 'Estrutura de contas individualizadas',
    difficulty: 'medio',
    statement: 'O modelo de estrutura de contas utilizado no cadastramento de investidores na B3 é o de:',
    options: {
      A: 'Contas coletivas, sem identificação do investidor final.',
      B: 'Contas individualizadas em nome do investidor final.',
      C: 'Contas exclusivamente em nome da instituição intermediária.',
      D: 'Contas anônimas, sem qualquer identificação.',
    },
    correct: 'B',
    explanation:
      'Utiliza-se o modelo de estrutura de contas individualizadas em nome do investidor final. Essa estrutura dá mais segurança ao mercado e aos investidores, pois garante a identificação dos direitos de propriedade de cada investidor em caso de insolvência ou falência de uma instituição intermediária.',
    explanationWrong: {
      A: 'É o oposto: a estrutura é individualizada por investidor final, não coletiva sem identificação — essa individualização é o que garante segurança em caso de falência do intermediário.',
      C: 'As contas identificam o investidor FINAL, não apenas a instituição intermediária que o representa.',
      D: 'Não há anonimato na estrutura de contas de investidores — a identificação individualizada é justamente o ponto central do modelo.',
    },
    examTip:
      'Contas individualizadas em nome do investidor final = proteção em caso de quebra do intermediário — os ativos ficam identificados como do investidor, não se misturam ao patrimônio da corretora/banco.',
    commonTrap:
      'Esse modelo é o que garante que, se uma corretora quebrar, os ativos do cliente continuem sendo dele (não entram na massa falida da corretora) — ponto de segurança central do sistema.',
    ...SRC('2. Cadastro de investidores na B3 — Cadastro na B3', '407-408'),
  },
  {
    topic: 'Cadastro de investidores na B3',
    subtopic: 'Sincad',
    difficulty: 'medio',
    statement: 'O Sistema Integrado de Cadastro (Sincad) da B3 utiliza o conceito de "entidade", segundo o qual:',
    options: {
      A: 'Apenas pessoas jurídicas residentes no Brasil são passíveis de identificação.',
      B: 'Toda pessoa física ou jurídica, residente ou não no Brasil, é passível de identificação.',
      C: 'Somente investidores institucionais podem ser cadastrados.',
      D: 'Apenas participantes de negociação plenos podem ser identificados como entidades.',
    },
    correct: 'B',
    explanation:
      'O Sincad utiliza o conceito de "entidade", segundo o qual toda pessoa física ou jurídica, residente ou não no Brasil, é passível de identificação — abrangendo tanto investidores quanto profissionais do mercado.',
    explanationWrong: {
      A: 'O conceito de entidade não se restringe a pessoas jurídicas residentes — abrange pessoas físicas e jurídicas, residentes ou não.',
      C: 'Não há essa restrição a investidores institucionais — qualquer pessoa física ou jurídica pode ser identificada como entidade no Sincad.',
      D: 'O conceito de entidade não é restrito a PNPs — abrange qualquer pessoa física ou jurídica passível de identificação, incluindo comitentes e profissionais.',
    },
    examTip:
      'Sincad = sistema de cadastro de contas, vínculos e profissionais do Segmento Listado B3. Conceito de "entidade" é amplo: qualquer PF ou PJ, residente ou não.',
    commonTrap:
      'Não restrinja mentalmente o Sincad a "só brasileiros" — o próprio conceito de entidade já contempla residentes E não residentes.',
    ...SRC('2. Cadastro de investidores na B3 — Sistema Integrado de Cadastro (Sincad)', '409'),
  },
  {
    topic: 'Cadastro de investidores na B3',
    subtopic: 'KYC x suitability',
    difficulty: 'dificil',
    statement: 'A diferença entre "conheça seu cliente" (KYC) e suitability é que o KYC:',
    options: {
      A: 'Tem foco na adequação dos produtos e serviços ao perfil de investidor e apetite de risco do cliente.',
      B: 'Verifica se os documentos e dados apresentados são condizentes com a realidade e o perfil do cliente, enquanto o suitability foca na adequação de produtos/serviços a esse perfil.',
      C: 'É um conceito aplicável apenas a investidores não residentes.',
      D: 'Substitui integralmente a necessidade de avaliação de suitability.',
    },
    correct: 'B',
    explanation:
      'O KYC significa que o participante deve conhecer seu cliente, verificando se os documentos e dados apresentados são condizentes com sua realidade e fazem sentido com seu perfil e natureza. Já o suitability tem foco na adequação dos produtos e serviços ao perfil de investidor e apetite de risco do cliente — são conceitos complementares, não excludentes.',
    explanationWrong: {
      A: 'Essa descrição corresponde ao suitability, não ao KYC — o KYC é sobre conhecer e validar quem é o cliente, não sobre adequar produtos a ele.',
      C: 'Tanto KYC quanto suitability se aplicam a investidores em geral (residentes e não residentes), não são conceitos exclusivos de não residentes.',
      D: 'KYC e suitability são complementares, não substitutos um do outro — o KYC é pré-requisito para uma correta análise de suitability.',
    },
    examTip:
      'KYC = "quem é você de fato" (validação de identidade/perfil). Suitability = "isso é adequado para você" (adequação do produto ao perfil de risco).',
    commonTrap:
      'KYC e suitability são frequentemente tratados como sinônimos — mas o Guia os trata como etapas distintas e complementares do relacionamento com o cliente.',
    ...SRC('2. Cadastro de investidores na B3 — Conheça o seu cliente (KYC) e suitability', '409-410'),
  },

  // ---------- A conta do investidor ----------
  {
    topic: 'A conta do investidor',
    subtopic: 'Estrutura de contas da Câmara B3',
    difficulty: 'medio',
    statement: 'Sobre a estrutura de contas da Câmara B3, é correto afirmar que:',
    options: {
      A: 'É obrigatória a unificação de todas as contas do cliente em todos os mercados.',
      B: 'O participante pode manter uma única conta para seu cliente em todos os mercados que atue, mas essa unificação não é obrigatória.',
      C: 'Cada mercado exige uma instituição intermediária diferente e exclusiva.',
      D: 'Não é possível consolidar margem entre diferentes contas de um mesmo cliente.',
    },
    correct: 'B',
    explanation:
      'No modelo de estrutura de contas da Câmara B3, é possível ao participante manter uma única conta para seu cliente em todos os mercados que atue, permitindo harmonização de regras e consolidação de informações. Contudo, a unificação das contas NÃO é obrigatória, cabendo ao participante e ao cliente definir o nível de consolidação que mais lhes convier.',
    explanationWrong: {
      A: 'A unificação é uma possibilidade, não uma obrigação — o Guia é explícito ao afirmar que "a unificação das contas não é obrigatória".',
      C: 'Não há essa exigência de instituições diferentes por mercado — a estrutura permite, inclusive, consolidar tudo em uma única conta com o mesmo participante.',
      D: 'A estrutura unificada permite justamente a "margem consolidada" como um dos benefícios — o oposto do afirmado.',
    },
    examTip:
      'Estrutura de contas da Câmara B3: unificação é OPCIONAL, trazendo benefícios como netting único e margem consolidada, mas cabe ao participante/cliente decidir.',
    commonTrap:
      'Não confunda "é possível unificar" com "é obrigatório unificar" — a prova pode testar exatamente essa nuance de opcionalidade.',
    ...SRC('3. A conta do investidor — Estrutura de contas da Câmara B3', '411'),
  },
  {
    topic: 'A conta do investidor',
    subtopic: 'Conta máster',
    difficulty: 'dificil',
    statement: 'A conta máster, na estrutura de contas da B3, tem como característica:',
    options: {
      A: 'Ser utilizada exclusivamente por investidores pessoa física, para operações de day trade.',
      B: 'Possuir contas de investidores a ela vinculadas, agrupando investidores com vínculo específico entre si, como gestão comum ou representação pelo mesmo intermediário internacional.',
      C: 'Ser criada automaticamente pela B3 apenas para receber operações com erro operacional.',
      D: 'Ser exclusiva para o registro de posições de opções exercidas.',
    },
    correct: 'B',
    explanation:
      'A conta máster possui contas de investidores a ela vinculadas, agrupando investidores que possuem vínculo específico entre si, como o de gestão comum ou o de representação pelo mesmo intermediário internacional autorizado a realizar tais atividades. Participantes podem indicar uma conta máster e, depois, alocar as operações para os clientes finais.',
    explanationWrong: {
      A: 'A conta máster não é exclusiva de pessoa física nem de day trade — é um mecanismo de agrupamento de investidores com vínculo específico entre si, independentemente do tipo de operação.',
      C: 'A descrição de conta criada automaticamente para erros operacionais corresponde à CONTA ERRO, não à conta máster.',
      D: 'O registro específico para exercício de opções está associado ao vínculo "exercício para opções", não à conta máster em si.',
    },
    examTip:
      'Conta máster = "guarda-chuva" que agrupa vários investidores vinculados (mesma gestão, mesmo intermediário internacional), permitindo alocação posterior para as contas finais.',
    commonTrap:
      'Não confunda conta máster (agrupamento temporário/vinculação de investidores) com conta erro (recebe operações não alocadas por erro) — são tipos de conta com propósitos bem diferentes.',
    ...SRC('3. A conta do investidor — Tipos de conta', '412'),
  },
  {
    topic: 'A conta do investidor',
    subtopic: 'Conta erro x conta captura',
    difficulty: 'prova',
    statement: 'A conta criada automaticamente pela B3, de titularidade do participante de negociação pleno, utilizada para recebimento de operações que não tenham uma conta especificada no ambiente de negociação, é a:',
    options: {
      A: 'Conta erro.',
      B: 'Conta captura.',
      C: 'Conta brokerage.',
      D: 'Conta restrição.',
    },
    correct: 'B',
    explanation:
      'A conta captura é uma conta transitória, automaticamente criada pela B3, de titularidade do participante de negociação pleno, utilizada para recebimento de operações que não tenham uma conta especificada no ambiente de negociação.',
    explanationWrong: {
      A: 'A conta erro recebe operações não alocadas para comitentes ou é utilizada para realocação por erro operacional — conceito próximo, mas distinto: a conta erro trata de alocação incorreta, a captura trata de ausência de conta especificada no momento da negociação.',
      C: 'A conta brokerage é usada para possibilitar o vínculo de repasse entre dois participantes sem identificar o beneficiário final no participante de origem — não é a conta de recebimento automático por ausência de especificação.',
      D: 'A conta restrição é usada pelo PNP como conta de intermediação de operações em nome de um participante, exigindo distribuição posterior — não é a conta transitória automática do enunciado.',
    },
    examTip:
      'Conta captura = "rede de segurança" para ordens sem conta especificada no momento da negociação. Conta erro = recebe operações não alocadas/realocadas por erro.',
    commonTrap:
      'Conta erro e conta captura são frequentemente confundidas por ambas serem "automáticas" e ligadas a situações atípicas — a diferença está no motivo: falta de especificação (captura) x erro/não alocação (erro).',
    ...SRC('3. A conta do investidor — Tipos de conta', '412-413'),
  },

  // ---------- Procedimentos de cadastro e vínculos ----------
  {
    topic: 'Procedimentos de cadastro e vínculos',
    subtopic: 'Documentos para cadastro',
    difficulty: 'medio',
    statement: 'Para o cadastro de pessoa jurídica, segundo a Resolução CVM nº 50/2021, são exigidos, entre outros documentos:',
    options: {
      A: 'Apenas o CNPJ, sem necessidade de outros documentos.',
      B: 'Documento de constituição da pessoa jurídica atualizado e registrado em órgão competente, e atos societários que indiquem os administradores.',
      C: 'Comprovante de residência do administrador, exclusivamente.',
      D: 'Certidão de nascimento de todos os sócios.',
    },
    correct: 'B',
    explanation:
      'Para pessoa jurídica, os documentos exigidos incluem o documento de constituição da pessoa jurídica atualizado e registrado em órgão competente, atos societários que indiquem os administradores e, se for o caso, procuração e identidade e CPF dos procuradores.',
    explanationWrong: {
      A: 'Apenas o CNPJ não é suficiente — são exigidos documentos de constituição e atos societários, entre outros.',
      C: 'Comprovante de residência é documento exigido para PESSOA FÍSICA, não é o requisito central para pessoa jurídica.',
      D: 'Certidão de nascimento não consta da lista de documentos exigidos para cadastro de pessoa jurídica no Guia.',
    },
    examTip:
      'PJ: documento de constituição + atos societários (administradores) + procuração/CPF de procuradores, se houver. PF: documento de identidade + comprovante de residência + procuração, se houver.',
    commonTrap:
      'Não troque os documentos exigidos para PF (identidade + comprovante de residência) com os de PJ (constituição + atos societários) — a prova pode testar essa distinção.',
    ...SRC('4. Procedimentos de cadastro — Cadastro e criação da conta do investidor', '413-414'),
  },
  {
    topic: 'Procedimentos de cadastro e vínculos',
    subtopic: 'Vínculo por conta e ordem',
    difficulty: 'dificil',
    statement: 'O vínculo "por conta e ordem" entre contas viabiliza:',
    options: {
      A: 'As operações do PN que opera por meio de um PNP, criando um vínculo entre as contas do PN no PNP e as contas dos investidores no PN.',
      B: 'A liquidação exclusiva de operações de câmbio.',
      C: 'A garantia de rentabilidade mínima para o investidor.',
      D: 'A dispensa total de identificação do investidor final perante a B3.',
    },
    correct: 'A',
    explanation:
      'O vínculo por conta e ordem viabiliza as operações do PN que opera por meio de um PNP: o PNP inclui o PN como seu cliente, informando o código operacional do PN e o código do investidor no PN, criando um vínculo entre as contas "por conta" do PN no PNP e as contas dos investidores no PN.',
    explanationWrong: {
      B: 'O vínculo por conta e ordem não é específico de operações de câmbio — é um mecanismo geral de identificação de investidores que operam por meio de um PN.',
      C: 'Não há relação entre esse vínculo e qualquer garantia de rentabilidade — é puramente um mecanismo de identificação/estrutura operacional.',
      D: 'Ao contrário: o vínculo por conta e ordem existe justamente para que os sistemas da B3 entendam que o investidor é cliente direto do PN (identificação clara), não para dispensar identificação.',
    },
    examTip:
      '"Por conta e ordem" = quando os sistemas da B3 identificam que o investidor final é cliente do PN (não diretamente do PNP), mesmo a operação passando pelo PNP.',
    commonTrap:
      'Esse vínculo só pode ser inativado se NÃO houver posição na conta de origem — outra regra específica que a prova pode testar (condição para inativação).',
    ...SRC('4. Procedimentos de cadastro — Vínculos entre contas', '414-415'),
  },
  {
    topic: 'Procedimentos de cadastro e vínculos',
    subtopic: 'Vínculo de repasse',
    difficulty: 'prova',
    statement: 'O repasse de operações entre participantes é realizado:',
    options: {
      A: 'Entre dois PNP, sem necessidade de contrato ou vínculo específico.',
      B: 'Entre dois PNP ou entre um PNP e um PL, quando houver contrato específico entre as partes e desde que exista um vínculo de repasse entre eles.',
      C: 'Exclusivamente entre um PNP e a B3, sem participação de outros intermediários.',
      D: 'Apenas para operações do mercado de câmbio.',
    },
    correct: 'B',
    explanation:
      'O repasse de operações é feito entre dois PNP ou entre um PNP e um PL, quando houver contrato específico entre as partes e desde que exista um vínculo de repasse entre eles — combinação de DOIS requisitos: contrato específico E vínculo de repasse cadastrado.',
    explanationWrong: {
      A: 'É necessário tanto contrato específico quanto vínculo de repasse cadastrado — não pode ocorrer "sem necessidade" de nenhum desses requisitos.',
      C: 'O repasse ocorre entre participantes (PNP-PNP ou PNP-PL), não diretamente entre um PNP e a B3.',
      D: 'O vínculo de repasse é um mecanismo geral da estrutura de contas da B3, não restrito ao mercado de câmbio.',
    },
    examTip:
      'Repasse = PNP↔PNP ou PNP↔PL, EXIGE DOIS requisitos simultâneos: (1) contrato específico entre as partes e (2) vínculo de repasse cadastrado entre elas.',
    commonTrap:
      'Esta é uma das três questões-modelo do próprio capítulo no Guia — sinal de que a combinação exata dos dois requisitos (contrato + vínculo) é um dos pontos mais cobrados.',
    ...SRC('4. Procedimentos de cadastro — Vínculos entre contas (Repasse)', '415, 418'),
  },
  {
    topic: 'Procedimentos de cadastro e vínculos',
    subtopic: 'Identificação do investidor',
    difficulty: 'medio',
    statement: 'De acordo com a regulamentação em vigor, os investidores serão identificados:',
    options: {
      A: 'No momento em que a operação for realizada em seu nome.',
      B: 'Somente no momento da liquidação da operação, nunca antes.',
      C: 'Apenas quando solicitarem expressamente sua identificação.',
      D: 'No momento do registro da operação na conta máster, exclusivamente.',
    },
    correct: 'A',
    explanation:
      'De acordo com a regulamentação em vigor, os investidores serão identificados no momento em que a operação for realizada em seu nome — a identificação ocorre no momento da negociação, não apenas em etapas posteriores como a liquidação.',
    explanationWrong: {
      B: 'A identificação não é postergada apenas para o momento da liquidação — ela ocorre já no momento em que a operação é realizada em nome do investidor.',
      C: 'A identificação é uma exigência regulatória compulsória, não uma opção que depende de solicitação do investidor.',
      D: 'A identificação não fica restrita ao registro em conta máster — é um princípio geral aplicável à realização da operação em nome do investidor.',
    },
    examTip:
      'Regra literal (uma das três questões-modelo do próprio capítulo): identificação do investidor ocorre no momento em que a OPERAÇÃO é realizada em seu nome.',
    commonTrap:
      'Não pense que a identificação "só importa" na liquidação — ela é exigida desde o momento da negociação, sendo um princípio estrutural do cadastro na B3.',
    ...SRC('5. Questões (exemplo do capítulo)', '418'),
  },
];
