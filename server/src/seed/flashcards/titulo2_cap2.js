export const chapterRef = { titleNumber: 'II', chapterNumber: 'II' };

export const flashcards = [
  {
    front: 'Hedger x Especulador x Arbitrador',
    back: 'Hedger: protege posição real no mercado à vista. Especulador: aposta na direção do preço, sem posição a proteger. Arbitrador: lucra com discrepância de preços entre mercados, sem risco (ou risco mínimo).',
    difficulty: 'medio',
    source_page: '173-174',
  },
  {
    front: 'Termo x Futuro — diferença mais notável',
    back: 'Ajuste diário existe APENAS no mercado futuro (liquida ganhos/perdas todo dia). No termo, tudo se acumula até o vencimento — maior risco de crédito.',
    difficulty: 'facil',
    source_page: '186, 189',
  },
  {
    front: 'Prazo do termo de ações na B3',
    back: 'Mínimo de 16 dias corridos, máximo de 999 dias corridos.',
    difficulty: 'dificil',
    source_page: '185',
  },
  {
    front: 'Únicas commodities com liquidação física na B3',
    back: 'Café arábica 4/5 e café conilon robusta. Todo o resto é liquidação financeira (por diferença).',
    difficulty: 'dificil',
    source_page: '176',
  },
  {
    front: 'Titular x Lançador de opção',
    back: 'Titular: compra a opção, tem um DIREITO (de comprar/vender), paga o prêmio. Lançador: vende a opção, assume uma OBRIGAÇÃO se exercido, recebe o prêmio.',
    difficulty: 'facil',
    source_page: '195',
  },
  {
    front: 'Risco do titular x lançador de uma call',
    back: 'Titular de call: prejuízo limitado ao prêmio, lucro ilimitado. Lançador de call a descoberto: lucro limitado ao prêmio, prejuízo ILIMITADO (sem teto de valorização do ativo).',
    difficulty: 'prova',
    source_page: '195-197',
  },
  {
    front: 'Modelos de exercício de opções',
    back: 'Americano: exerce a qualquer momento até o vencimento. Europeu: só no vencimento. Asiático: baseado na média de preços de um período.',
    difficulty: 'medio',
    source_page: '195',
  },
  {
    front: 'Valor intrínseco: fórmula para call e put',
    back: 'Call: max(S − K, 0). Put: max(K − S, 0). O que exceder isso é valor extrínseco (efeito de juros + volatilidade).',
    difficulty: 'prova',
    source_page: '198',
  },
  {
    front: 'Swap broker x Swap dealer',
    back: 'Broker: só identifica/conecta as duas partes, sem posição própria. Dealer: assume temporariamente uma ponta do swap até repassá-la a outra contraparte.',
    difficulty: 'dificil',
    source_page: '208',
  },
];
