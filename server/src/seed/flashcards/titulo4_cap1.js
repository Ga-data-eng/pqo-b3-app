export const chapterRef = { titleNumber: 'IV', chapterNumber: 'I' };

export const flashcards = [
  {
    front: 'Risco de principal',
    back: 'Perda por entregar/pagar sem receber a contrapartida. Subcomponente do risco de crédito. Mitigado pelo DVP (entrega contra pagamento).',
    difficulty: 'medio',
    source_page: '433',
  },
  {
    front: 'Risco de mercado x risco de liquidez',
    back: 'Mercado: perda por variação de PREÇO acima das garantias. Liquidez: indisponibilidade TEMPORÁRIA de recursos para pagar, mesmo com garantia suficiente em valor.',
    difficulty: 'dificil',
    source_page: '433-434',
  },
  {
    front: 'Responsabilidade da B3 como CCP',
    back: 'A B3 é contraparte central EXCLUSIVAMENTE perante os membros de compensação. Não responde pela inadimplência entre os demais participantes da cadeia.',
    difficulty: 'prova',
    source_page: '437',
  },
  {
    front: 'Cadeia de responsabilidades: regra geral',
    back: 'Cada nível (MC, PNP, PL, PN) permanece responsável perante o nível acima, MESMO que o nível abaixo falhe. A responsabilidade não "sobe" automaticamente por falha de terceiro vinculado.',
    difficulty: 'prova',
    source_page: '437-439',
  },
  {
    front: 'Defaulters pay x Survivors pay x CCP Capital x Third party pays',
    back: 'Defaulters pay: garantia do próprio inadimplente. Survivors pay: fundo mutualizado dos demais membros. CCP Capital: recursos da própria B3. Third party pays: linhas de terceiros (bancos).',
    difficulty: 'prova',
    source_page: '442',
  },
  {
    front: 'Qual componente de salvaguarda é mutualizável?',
    back: 'Só o FUNDO DE LIQUIDAÇÃO (PNP/PL/MC + B3). Garantia de operações (comitente) e saldo operacional (PNP/PL/MC) são individuais, não mutualizáveis.',
    difficulty: 'prova',
    source_page: '443',
  },
  {
    front: 'Limite de concentração: fórmula',
    back: 'Limite = Máximo(P × Q; L) — sempre o MAIOR entre o percentual do total em aberto e o valor fixo. Nível 1: só margem adicional. Nível 2: margem maior + redução compulsória + multa.',
    difficulty: 'prova',
    source_page: '445-446',
  },
  {
    front: 'Carta de fiança bancária como garantia: exceção',
    back: 'NÃO é aceita como garantia de comitente que seja instituição financeira bancária — evita autogarantia/conflito de interesse.',
    difficulty: 'dificil',
    source_page: '448',
  },
  {
    front: 'Saldo operacional: fórmula e interpretação',
    back: 'Saldo = Limite Intradiário + Garantias − Risco Intradiário. Positivo = dentro do limite. Negativo = desenquadramento, exige depositar mais garantia ou reduzir posição.',
    difficulty: 'prova',
    source_page: '451',
  },
];
