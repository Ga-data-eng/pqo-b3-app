// Estrutura extraída do Índice Geral e do Quadro de Orientação de Estudos
// (Certificação de profissionais) do Guia Por Dentro da B3, páginas 9-10, 13-15.

export const CERTIFICATIONS = [
  { code: 'operacoes', name: 'Operações' },
  { code: 'comercial', name: 'Comercial' },
  { code: 'compliance', name: 'Compliance' },
  { code: 'risco', name: 'Risco' },
  { code: 'back_office', name: 'Back Office' },
  { code: 'back_office_custodia', name: 'Back Office — Custódia' },
  { code: 'back_office_liquidacao', name: 'Back Office — Liquidação' },
];

// cols usa os códigos acima. "geral" = aplica-se a todas (Título I e II são Tomo Geral).
const ALL = CERTIFICATIONS.map((c) => c.code);

export const TITLES = [
  {
    number: 'I',
    name: 'Aspectos institucionais',
    chapters: [
      { number: 'I', name: 'Sistema Financeiro Nacional', certs: ALL },
      { number: 'II', name: 'Infraestrutura do mercado', certs: ALL },
      { number: 'III', name: 'A B3 no mercado financeiro e de capitais', certs: ALL },
    ],
  },
  {
    number: 'II',
    name: 'Mercados de Bolsa e de Balcão',
    chapters: [
      { number: 'I', name: 'Mercado de renda variável', certs: ALL },
      { number: 'II', name: 'Mercado de derivativos', certs: ALL },
      { number: 'III', name: 'Mercado de renda fixa', certs: ALL },
      { number: 'IV', name: 'Mercado de câmbio', certs: ALL },
      { number: 'V', name: 'Fundos de investimento', certs: ALL },
      { number: 'VI', name: 'Clubes de investimento', certs: ALL },
      { number: 'VII', name: 'Outros ativos e serviços', certs: ALL },
      { number: 'VIII', name: 'Tributação do mercado financeiro', certs: ALL },
    ],
  },
  {
    number: 'III',
    name: 'Estrutura de contas e cadastro',
    chapters: [
      { number: 'I', name: 'Cadastro de investidores residentes', certs: ALL },
      { number: 'II', name: 'Cadastro de investidores não residentes', certs: ALL },
    ],
  },
  {
    number: 'IV',
    name: 'Gestão de risco',
    chapters: [
      { number: 'I', name: 'Gestão de risco na Câmara', certs: ['compliance', 'risco', 'back_office'] },
      { number: 'II', name: 'Risco corporativo e controles internos', certs: ['operacoes', 'comercial', 'compliance', 'risco'] },
    ],
  },
  {
    number: 'V',
    name: 'Negociação',
    chapters: [
      { number: 'I', name: 'Mercados organizados', certs: ALL },
      { number: 'II', name: 'Ambiente de negociação', certs: ['operacoes', 'comercial'] },
    ],
  },
  {
    number: 'VI',
    name: 'Câmara de compensação e liquidação',
    chapters: [
      { number: 'I', name: 'Câmara B3', certs: ['operacoes', 'compliance', 'risco', 'back_office', 'back_office_liquidacao'] },
      { number: 'II', name: 'Processos operacionais da Câmara B3', certs: ['back_office', 'back_office_liquidacao'] },
    ],
  },
  {
    number: 'VII',
    name: 'Central depositária',
    chapters: [
      { number: 'I', name: 'Central depositária da B3', certs: ['operacoes', 'compliance', 'risco', 'back_office', 'back_office_custodia'] },
      { number: 'II', name: 'Processos operacionais da Central depositária da B3', certs: ['back_office', 'back_office_custodia'] },
    ],
  },
  {
    number: 'VIII',
    name: 'Compliance',
    chapters: [
      {
        number: 'I',
        name: 'Prevenção à lavagem de dinheiro, ao financiamento do terrorismo e ao financiamento da proliferação de armas de destruição em massa – PLD/FTP',
        certs: ALL,
      },
      { number: 'II', name: 'Proteção de dados pessoais e privacidade', certs: ALL },
      { number: 'III', name: 'Adequação ao perfil do cliente (Suitability)', certs: ['operacoes', 'comercial', 'compliance'] },
      { number: 'IV', name: 'Operações ilícitas', certs: ['operacoes', 'comercial', 'compliance'] },
      { number: 'V', name: 'Segurança cibernética e segurança da informação', certs: ['compliance'] },
      { number: 'VI', name: 'Política de responsabilidade social, ambiental e climática (PRSAC)', certs: ['compliance'] },
    ],
  },
];
