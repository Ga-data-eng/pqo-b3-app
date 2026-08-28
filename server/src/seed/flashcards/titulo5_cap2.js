export const chapterRef = { titleNumber: 'V', chapterNumber: 'II' };

export const flashcards = [
  {
    front: 'Puma x Trader/CetipNet',
    back: 'Puma Trading System: Segmento Listado B3 (bolsa). Trader e CetipNet: Segmento Balcão B3 (balcão organizado).',
    difficulty: 'medio',
    source_page: '506',
  },
  {
    front: 'Ambiente de negociação: características (Resolução CVM 135/2022)',
    back: 'Sistema CENTRALIZADO e MULTILATERAL, onde ofertas de compra e venda são processadas segundo regras predefinidas.',
    difficulty: 'medio',
    source_page: '506-507',
  },
  {
    front: 'Day trade: os 5 requisitos cumulativos',
    back: 'Mesmo ativo, mesma quantidade, mesmo dia, mesmo comitente, mesmo membro de compensação. Liquidação só financeira (sem entrega física).',
    difficulty: 'prova',
    source_page: '513',
  },
  {
    front: 'EOC x TON',
    back: 'EOC (Execute or Cancel): executa o que der na hora, cancela o resto. TON (Total Order Now): executa TUDO na hora ou cancela TUDO — não aceita parcial.',
    difficulty: 'dificil',
    source_page: '518-519',
  },
  {
    front: 'MOA x MOC x LOC',
    back: 'MOA: a mercado, no call de ABERTURA. MOC: a mercado, no call de FECHAMENTO. LOC: com preço LIMITADO, no call de fechamento.',
    difficulty: 'prova',
    source_page: '519',
  },
  {
    front: 'RLP: regras-chave',
    back: 'Só PNP envia oferta RLP · invisível no livro de ofertas (só aparece no histórico após execução) · exige opt-in do cliente · há limite percentual de atuação.',
    difficulty: 'prova',
    source_page: '520-522',
  },
  {
    front: 'Leilão especial: números da prova',
    back: 'Duração mínima de 15 minutos + edital publicado com antecedência mínima de 48 horas.',
    difficulty: 'prova',
    source_page: '524',
  },
  {
    front: 'Circuit breaker: os 3 degraus',
    back: '-10% Ibovespa → interrompe 30 min. -15% → interrompe 1 hora. -20% → B3 pode suspender por período que ela definir.',
    difficulty: 'prova',
    source_page: '528',
  },
  {
    front: 'THROTTLE x STP x COD',
    back: 'THROTTLE: limite de mensagens/segundo por conexão. STP: impede o mesmo comitente ser comprador e vendedor na mesma operação. COD: cancela ofertas da conexão ao detectar desconexão.',
    difficulty: 'prova',
    source_page: '531-532',
  },
  {
    front: 'Co-location x centro de dados secundário',
    back: 'Co-location: hospedagem da B3 para acesso normal (uso diário, restrito a participantes autorizados). Centro de dados secundário: espelho do principal, usado só em caso de DESASTRE/contingência.',
    difficulty: 'dificil',
    source_page: '532-534',
  },
  {
    front: 'Compartilhamento de conexão entre participantes',
    back: 'VEDADO por questões prudenciais — o fluxo de ofertas deve ser SEGREGADO para cada PNP/PN, mesmo que usem a mesma infraestrutura física.',
    difficulty: 'medio',
    source_page: '533',
  },
];
