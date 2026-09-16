import { BonusItem, FaqItem, SalesPlan, SkillItem, TargetAudienceItem, TestimonialItem } from '../types';

export const salesContent = {
  // Brand & Colors (Official Reference Palette)
  brand: {
    primary: '#1642A8', // azul-principal
    primaryDark: '#0F2C6F', // azul escuro banner
    royalBlue: '#1E4FC2', // azul royal vibrante
    secondary: '#1D4ED8', // azul secundario
    greenCta: '#16A34A', // verde-cta vivo (inalterado)
    greenCtaHover: '#15803D', // verde-cta-hover (inalterado)
    wine: '#1E4FC2', // substituido pelo azul da referencia
    gold: '#EAB308', // dourado/amarelo da referencia
    bgMain: '#FFFFFF', // fundo-principal
    bgAlt: '#F8FAFC', // fundo-alternativo
    bgBlue: '#1642A8', // fundo secao azul
    bgGuarantee: '#FEF9EE', // fundo-garantia
    white: '#FFFFFF',
    textMain: '#0F172A',
    textSecondary: '#475569',
    borderSoft: '#E2E8F0',
    footer: '#000000', // rodape preto inalterado
    // Fallback aliases for components
    greenDark: '#16A34A',
    greenLight: '#22C55E',
    goldLight: '#FEF9EE',
    dark: '#0F2C6F',
  },

  // Checkout URLs (vazio para inserção do seu link próprio)
  checkoutUrls: {
    essential: '',
    premium: '',
    upsellDiscount: '',
  },

  // Top banner
  topBanner: {
    text: 'OFERTA ESPECIAL POR TEMPO LIMITADO',
  },

  // Hero Section
  hero: {
    securityBadge: 'COMPRA 100% SEGURA E PROTEGIDA',
    headlineHighlight: '+80 ATIVIDADES PRONTAS',
    headlineSubtitle: 'PARA CORAL DE IGREJA',
    subHeading: 'Aqueça as vozes, trabalhe afinação, ritmo e dicção e conduza ensaios mais produtivos sem precisar improvisar atividades toda semana.',
    leadText: 'Um material prático e organizado para regentes e líderes de coral de igreja que querem ter sempre à mão atividades para trabalhar respiração, afinação, ritmo, dicção, concentração, integração e expressão do grupo.',
    mockupImage: '/assets/mockup-principal-1.webp',
    video: {
      poster: '/assets/landing-video-poster.webp',
      mp4: '/assets/landing-video.mp4',
      remoteMp4Fallback: 'https://coralemsintonia.online/__l5e/assets-v1/9278651b-a644-460a-863d-53d3fc190c4b/landing-video.mp4',
    },
    audienceTags: [
      'Coral Adulto',
      'Coral Jovem',
      'Coral Infantil',
      'Coral Misto',
    ],
    ctaText: 'QUERO ACESSAR AS +80 ATIVIDADES',
    trustNotice: 'Acesso imediato • Pagamento único • Garantia de 7 dias',
  },

  // Dynamic Showcase Carousel
  showcase: {
    row1: [
      '/assets/showcase/08.webp',
      '/assets/showcase/02.webp',
      '/assets/showcase/11.webp',
      '/assets/showcase/05.webp',
      '/assets/showcase/14.webp',
      '/assets/showcase/03.webp',
      '/assets/showcase/09.webp',
    ],
    row2: [
      '/assets/showcase/12.webp',
      '/assets/showcase/04.webp',
      '/assets/showcase/07.webp',
      '/assets/showcase/01.webp',
      '/assets/showcase/13.webp',
      '/assets/showcase/06.webp',
      '/assets/showcase/10.webp',
    ],
  },

  // Problem / Solution Section (Não fique sem saber o que aplicar no próximo ensaio)
  problemSolution: {
    heading: 'NÃO FIQUE SEM SABER O QUE APLICAR NO PRÓXIMO ENSAIO',
    paragraph1: 'Quem conduz um coral de igreja sabe: não basta escolher as músicas e reunir o grupo.',
    paragraph2: 'É preciso aquecer as vozes, trabalhar dificuldades, corrigir afinação, melhorar a dicção, desenvolver ritmo, integrar os participantes e preparar o coral para cultos e apresentações.',
    paragraph3: 'E quando isso precisa ser feito toda semana, é fácil acabar repetindo sempre os mesmos exercícios ou perdendo tempo procurando novas atividades.',
    transitionText: 'Foi pensando nessa rotina que criamos:',
    productHighlight: '+80 ATIVIDADES PRONTAS PARA CORAL DE IGREJA',
    description: 'Uma biblioteca prática para você consultar antes do ensaio, escolher o que deseja trabalhar e aplicar com seu grupo.',
    punchline: 'Menos tempo procurando. Mais variedade para seus ensaios.',
    ctaText: 'QUERO TER AS ATIVIDADES À MÃO',
  },

  // Target audience (Este material é para você)
  targetAudience: {
    badge: 'ESTE MATERIAL É PARA VOCÊ',
    heading: 'Feito especialmente para quem conduz corais dentro da igreja.',
    items: [
      {
        emoji: '🎼',
        title: 'Regente de Coral de Igreja',
        desc: 'Tenha novas atividades para aplicar durante seus ensaios.',
      },
      {
        emoji: '⛪',
        title: 'Líder de Coral',
        desc: 'Encontre exercícios organizados para trabalhar diferentes necessidades do grupo.',
      },
      {
        emoji: '🙏',
        title: 'Líder de Ministério de Música',
        desc: 'Tenha recursos complementares para preparação vocal e musical.',
      },
      {
        emoji: '🎤',
        title: 'Responsável por Coral Jovem',
        desc: 'Trabalhe voz, ritmo, participação e integração do grupo.',
      },
      {
        emoji: '🧒',
        title: 'Responsável por Coral Infantil',
        desc: 'Tenha atividades simples para desenvolver musicalidade e participação.',
      },
      {
        emoji: '👥',
        title: 'Responsável por Coral Adulto',
        desc: 'Trabalhe preparação vocal, afinação, dicção e interpretação.',
      },
      {
        emoji: '🎵',
        title: 'Regente Iniciante',
        desc: 'Tenha um repertório de atividades para não depender apenas da improvisação.',
      },
      {
        emoji: '⏱️',
        title: 'Quem Tem Pouco Tempo para Planejar',
        desc: 'Consulte o material e encontre rapidamente uma atividade adequada ao objetivo do ensaio.',
      },
    ] as TargetAudienceItem[],
  },

  // What you will work on (O que você poderá trabalhar)
  skills: {
    heading: 'O QUE VOCÊ PODERÁ TRABALHAR',
    items: [
      {
        emoji: '🎤',
        title: 'Aquecimento Vocal',
        desc: 'Prepare as vozes antes de começar o trabalho com o repertório.',
      },
      {
        emoji: '🌬️',
        title: 'Respiração e Postura',
        desc: 'Trabalhe controle respiratório e consciência corporal.',
      },
      {
        emoji: '🎵',
        title: 'Afinação e Escuta',
        desc: 'Desenvolva percepção, atenção e precisão vocal no grupo.',
      },
      {
        emoji: '👏',
        title: 'Ritmo e Pulsação',
        desc: 'Trabalhe coordenação, tempo e segurança rítmica.',
      },
      {
        emoji: '🗣️',
        title: 'Dicção e Articulação',
        desc: 'Ajude o coral a cantar as palavras de maneira mais clara e compreensível.',
      },
      {
        emoji: '🤝',
        title: 'Integração do Grupo',
        desc: 'Promova participação, confiança e interação entre os integrantes.',
      },
      {
        emoji: '🧠',
        title: 'Concentração e Memória',
        desc: 'Trabalhe atenção e respostas musicais durante os ensaios.',
      },
      {
        emoji: '✨',
        title: 'Expressão e Interpretação',
        desc: 'Ajude o coral a interpretar as músicas com maior consciência e intenção.',
      },
    ] as SkillItem[],
    ctaText: 'QUERO DEIXAR MEUS ENSAIOS MAIS ORGANIZADOS',
  },

  // Deliverables (O que você vai receber)
  deliverables: {
    badge: 'MATERIAL PRINCIPAL',
    titlePrefix: 'O QUE VOCÊ VAI ',
    titleHighlight: 'RECEBER?',
    productName: '+80 ATIVIDADES PRONTAS PARA CORAL DE IGREJA',
    subtitle: 'Você terá uma biblioteca de atividades práticas para consultar e aplicar de acordo com aquilo que seu coral precisa trabalhar.',
    mockupImage: '/assets/mockup-secundario-1.webp',
    items: [
      '+80 atividades práticas para coral de igreja',
      'Aquecimentos vocais',
      'Exercícios de respiração e postura',
      'Atividades de afinação e percepção musical',
      'Dinâmicas de ritmo e pulsação',
      'Exercícios de dicção e articulação',
      'Atividades para integração do coral',
      'Exercícios de concentração e memória',
      'Atividades de expressão e interpretação',
      'Preparações para ensaios, cultos e apresentações',
      'Atividades para diferentes necessidades do grupo',
      'Conteúdo organizado por objetivo',
      'Orientações simples para aplicação',
      'Material para consultar pelo celular, tablet ou computador',
    ],
    footerNote: 'Em vez de procurar uma atividade diferente toda vez que surgir uma necessidade no ensaio, você terá dezenas delas reunidas em um único lugar.',
    ctaText: 'QUERO RECEBER AS +80 ATIVIDADES',
  },

  // Quick Search & Consultation Section (Encontre rapidamente o que seu coral precisa trabalhar)
  quickSearch: {
    heading: 'ENCONTRE RAPIDAMENTE O QUE SEU CORAL PRECISA TRABALHAR',
    leadText: 'O material é organizado para facilitar sua consulta.',
    steps: [
      {
        trigger: 'Se o grupo precisa melhorar afinação,',
        action: 'você encontra atividades de afinação.',
        icon: '🎵',
      },
      {
        trigger: 'Se precisa trabalhar dicção,',
        action: 'você consulta essa categoria.',
        icon: '🗣️',
      },
      {
        trigger: 'Se o coral está disperso,',
        action: 'você encontra atividades de concentração e integração.',
        icon: '🤝',
      },
      {
        trigger: 'Se precisa preparar as vozes antes do culto,',
        action: 'você encontra aquecimentos e exercícios respiratórios.',
        icon: '🌬️',
      },
    ],
    flow: 'Escolha o objetivo → consulte a atividade → aplique no ensaio.',
  },

  // Bonuses (Bônus Exclusivos)
  bonuses: {
    badge: 'BÔNUS EXCLUSIVOS',
    headingPrefix: 'ALÉM DAS +80 ATIVIDADES, VOCÊ AINDA LEVA',
    headingHighlight: '4 Bônus EXCLUSIVOS',
    description: 'Recursos pensados para facilitar ainda mais a preparação dos ensaios e apresentações do seu coral.',
    items: [
      {
        tag: 'BÔNUS #1',
        title: 'Diagnóstico Rápido do Coral',
        subtitle: 'Checklist para identificar o que o grupo precisa trabalhar',
        desc: 'Ajuda o regente a perceber se o problema está na afinação, respiração, ritmo, dicção, concentração, integração ou interpretação — e indica qual categoria de atividade consultar.',
        img: 'https://i.ibb.co/gMkDhqxv/bonus-01.webp',
      },
      {
        tag: 'BÔNUS #2',
        title: 'CORAL PRONTO PARA O CULTO',
        subtitle: 'Guia prático de preparação para apresentações na igreja',
        desc: 'Organize os principais pontos antes da participação do coral: preparação, posicionamento, entrada, repertório e apresentação.',
        img: 'https://i.ibb.co/CG3LnG9/bonus-02.webp',
      },
      {
        tag: 'BÔNUS #3',
        title: 'ENSAIOS PRONTOS',
        subtitle: '30 roteiros completos de ensaio',
        desc: 'Modelos de 30, 45, 60 e 90 minutos para ajudar você a organizar melhor o tempo disponível com o coral.',
        img: 'https://i.ibb.co/M5B3rg35/BONUS-03.webp',
      },
      {
        tag: 'BÔNUS #4',
        title: 'AQUECIMENTO EXPRESS',
        subtitle: '40 sequências rápidas de 5, 10 e 15 minutos',
        desc: 'Para aqueles dias em que o tempo é curto, mas você ainda precisa preparar as vozes antes de cantar.',
        img: 'https://i.ibb.co/LhZjSZgj/BONUS-04.webp',
      },
    ] as BonusItem[],
  },

  // Pricing plans
  pricing: {
    titlePrefix: 'GARANTA SEU ',
    titleHighlight: 'ACESSO HOJE',
    badge: 'OFERTA ESPECIAL POR TEMPO LIMITADO',
    countdownMinutes: 15,
    plans: [
      {
        id: 'essencial',
        name: 'PLANO ESSENCIAL',
        title: '+80 Atividades Prontas para Coral de Igreja',
        mockupImage: '/assets/mockup-secundario-1.webp',
        altText: '+80 Atividades Prontas para Coral de Igreja',
        features: [
          '+80 atividades práticas para coral de igreja',
          'Aquecimento, respiração, afinação e ritmo',
          'Entrega imediata',
          'Garantia de 7 dias',
        ],
        excludedFeatures: [],
        currentPrice: '10',
        priceCents: ',00',
        paymentNotice: 'Pagamento único',
        buttonText: 'QUERO SÓ AS +80 ATIVIDADES →',
        checkoutUrl: '',
        triggerModalOnEssential: true,
        highlightNotice: '92% das pessoas preferem levar os 4 bônus no plano completo abaixo',
      },
      {
        id: 'premium',
        name: 'PLANO COMPLETO',
        badge: 'MAIS VANTAJOSO',
        isPopular: true,
        title: '+80 Atividades Prontas para Coral de Igreja + 4 Bônus',
        mockupImage: '/assets/mockup-new-received.png',
        altText: '+80 Atividades Prontas para Coral de Igreja + 4 Bônus',
        originalPrice: 'R$ 99,90',
        currentPrice: '27',
        priceCents: ',90',
        paymentNotice: 'À vista no Pix • Pagamento único',
        features: [
          '+80 atividades práticas para coral de igreja',
          'Aquecimento vocal',
          'Respiração e postura',
          'Afinação e percepção',
          'Ritmo e pulsação',
          'Dicção e articulação',
          'Integração e concentração',
          'Expressão e interpretação',
          'Pagamento único',
          'Acesso Vitalicio',
        ],
        bonusHighlights: [
          { tag: '#1', title: 'Diagnóstico Rápido do Coral' },
          { tag: '#2', title: 'Coral Pronto para o Culto' },
          { tag: '#3', title: '30 Ensaios Prontos' },
          { tag: '#4', title: 'Aquecimento Express' },
        ],
        buttonText: 'QUERO O PACOTE COMPLETO →',
        checkoutUrl: '',
      },
    ] as SalesPlan[],
  },

  // Discount modal (Downsell/Upsell triggered by essential click)
  upsellModal: {
    badge: 'OFERTA ESPECIAL',
    title: 'Espere! Por apenas R$ 9,90 a mais leve todos os 4 Bônus Exclusivos!',
    benefits: [
      { icon: '📋', label: 'Bônus #1: Diagnóstico Rápido do Coral' },
      { icon: '⛪', label: 'Bônus #2: Coral Pronto para o Culto' },
      { icon: '🎼', label: 'Bônus #3: 30 Ensaios Prontos' },
      { icon: '⚡', label: 'Bônus #4: Aquecimento Express' },
    ],
    dealBadge: 'SUPER DESCONTO',
    originalPrice: 'R$ 27,90',
    dealPrice: '19',
    dealPriceCents: ',90',
    paymentNotice: 'À vista no Pix • Pagamento único',
    acceptButtonText: 'Quero levar tudo por R$ 19,90 →',
    acceptCheckoutUrl: '',
    declineButtonText: 'Quero somente o básico (R$ 10,00)',
    declineCheckoutUrl: '',
  },

  // Testimonials (O que dizem regentes e líderes de coral)
  testimonials: {
    heading: 'O QUE DIZEM REGENTES E LÍDERES DE CORAL',
    items: [
      {
        name: 'Márcia R.',
        role: 'Regente de coral de igreja',
        text: 'Eu estava sempre procurando exercícios diferentes antes dos ensaios. Agora abro o material, escolho o que preciso trabalhar com o coral e já tenho uma atividade para aplicar.',
      },
      {
        name: 'Pr. Daniel S.',
        role: 'Líder de coral',
        text: 'As atividades de aquecimento, respiração e afinação facilitaram bastante a preparação dos nossos ensaios.',
      },
      {
        name: 'Lucas V.',
        role: 'Responsável por coral jovem',
        text: 'Uso com nosso coral jovem e gostei principalmente de ter as atividades separadas por objetivo. Fica muito mais fácil encontrar o que quero trabalhar.',
      },
      {
        name: 'Carlos M.',
        role: 'Líder de coral de igreja',
        text: 'Eu não tenho formação profissional em regência e sempre ficava inseguro sobre quais exercícios aplicar. O material me deu muito mais opções para trabalhar com o grupo.',
      },
    ] as TestimonialItem[],
  },

  // Guarantee (Garantia de 7 dias)
  guarantee: {
    sealImage: '/assets/garantia-opt.webp',
    heading: 'GARANTIA DE 7 DIAS',
    paragraph1: 'Você terá 7 dias para conhecer o material e avaliar se ele faz sentido para você e para a rotina do seu coral.',
    paragraph2: 'Caso não queira permanecer com o produto, poderá solicitar o reembolso dentro do período da garantia, conforme as condições da compra.',
    conclusion: 'Você conhece primeiro e decide com tranquilidade.',
  },

  // FAQs (Perguntas Frequentes)
  faqs: {
    heading: 'PERGUNTAS FREQUENTES',
    items: [
      {
        q: 'Preciso ter formação em regência?',
        a: 'Não. As atividades possuem orientações de aplicação e foram organizadas para atender tanto quem já possui experiência quanto quem está começando a conduzir um coral.',
      },
      {
        q: 'Serve somente para coral de igreja?',
        a: 'O material foi pensado especialmente para a realidade de corais de igreja. Muitas atividades vocais e musicais podem ser adaptadas para outros grupos, mas esse não é o foco principal do produto.',
      },
      {
        q: 'Posso utilizar com coral infantil?',
        a: 'Sim. O material contém atividades que podem ser adaptadas de acordo com a idade e o nível do grupo. Sempre considere as características e limitações vocais da faixa etária.',
      },
      {
        q: 'Serve para coral jovem e adulto?',
        a: 'Sim. Há atividades de aquecimento, respiração, ritmo, afinação, dicção, integração e outras áreas que podem ser selecionadas conforme as necessidades do grupo.',
      },
      {
        q: 'Preciso ter piano ou teclado?',
        a: 'Não para todas as atividades. Algumas atividades de percepção e afinação podem se beneficiar de uma referência sonora, enquanto outras podem ser realizadas sem instrumento.',
      },
      {
        q: 'Preciso aplicar as 80 atividades?',
        a: 'Não. A proposta é justamente funcionar como uma biblioteca de consulta. Você escolhe as atividades de acordo com aquilo que deseja trabalhar em cada ensaio.',
      },
      {
        q: 'Como vou receber?',
        a: 'Após a confirmação da compra, você receberá as instruções para acessar o material digital.',
      },
      {
        q: 'Posso consultar pelo celular?',
        a: 'Sim. O material digital pode ser consultado em dispositivos compatíveis, como celular, tablet ou computador.',
      },
      {
        q: 'É pagamento único?',
        a: 'Sim. Não há mensalidade no acesso adquirido conforme o plano escolhido.',
      },
      {
        q: 'E se eu comprar e não gostar?',
        a: 'Sua compra conta com garantia de 7 dias. Dentro desse período, você poderá solicitar o reembolso conforme as condições informadas na compra.',
      },
    ] as FaqItem[],
  },

  // Final CTA
  finalCta: {
    title: 'PARE DE PROCURAR UMA ATIVIDADE NOVA TODA VEZ QUE FOR PREPARAR O ENSAIO',
    heading: 'Tenha +80 Atividades Prontas para Coral de Igreja reunidas em um único material.',
    subtitle: 'Aquecimento, respiração, afinação, ritmo, dicção, integração, concentração e expressão para você consultar sempre que precisar trabalhar algo diferente com seu coral.',
    punchline: 'Comece seu próximo ensaio sabendo o que aplicar.',
    buttonText: 'QUERO ACESSAR AS +80 ATIVIDADES',
    trustText: 'Acesso imediato • Pagamento único • Garantia de 7 dias',
  },

  // Footer
  footer: {
    copyright: '© 2026 — Todos os direitos reservados.',
    disclaimer: 'Este produto é um material independente para apoio a regentes e líderes de coral. Resultados e aplicação podem variar conforme o grupo, experiência do responsável e contexto de uso.',
  },
};
