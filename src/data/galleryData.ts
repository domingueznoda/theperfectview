import imgHeroPanoramica from '../media/hero-panoramica-atardecer.jpg';
import imgPiscinaCocinaDia from '../media/piscina-cocina-jardin-dia.jpg';
import imgPergolaSalonExterior from '../media/pergola-salon-exterior.jpg';
import imgLoungeSofaPergolaSol from '../media/lounge-sofa-pergola-sol.jpg';
import imgPiscinaTumbonaAtardecer from '../media/piscina-tumbona-atardecer.jpg';
import imgAtardecerChilloutPiscina from '../media/atardecer-chillout-piscina.jpg';
import imgPiscinaPergolaPalmera from '../media/piscina-pergola-palmera.jpg';
import imgPiscinaVistaMuroLogo from '../media/piscina-vista-muro-logo.jpg';
import imgTerrazaPanoramicaSoo from '../media/terraza-panoramica-soo.jpg';
import imgBanoVistaPiscina from '../media/bano-vista-piscina.jpg';
import imgBanoInteriorClaraboya from '../media/bano-interior-claraboya.jpg';
import imgLogoMuroThePerfectView from '../media/logo-muro-the-perfect-view.jpg';
import imgCartelPromocional from '../media/cartel-promocional.jpg';

export interface GalleryItemData {
  id: string;
  title: string;
  subtitle: string;
  category: 'vistas' | 'piscina' | 'lounge' | 'cocina' | 'bano' | 'detalles';
  categoryLabel: string;
  description: string;
  imageSrc: string;
  accentColor: string;
}

export const INITIAL_GALLERY_ITEMS: GalleryItemData[] = [
  {
    id: 'hero-panoramica-atardecer',
    title: 'Atardecer Panorámico en Soo',
    subtitle: 'Vistas despejadas a los volcanes y al océano al atardecer',
    category: 'vistas',
    categoryLabel: 'Vistas Panorámicas',
    description: 'Panorámica completa de la terraza al atardecer: piscina privada, amplio césped, pérgola con cocina exterior y salón lounge, con el horizonte volcánico de Soo bañándose en luz dorada.',
    imageSrc: imgHeroPanoramica,
    accentColor: '#D9532A',
  },
  {
    id: 'piscina-cocina-jardin-dia',
    title: 'Piscina, Césped & Cocina Exterior',
    subtitle: 'Perspectiva completa de las instalaciones durante el día',
    category: 'piscina',
    categoryLabel: 'Piscina & Jardín',
    description: 'Vista diurna de la piscina rectangular privada, pradera de césped verde, tumbona de teca con ruedas, sombrilla y la pérgola techada con barbacoa y zona de cocina.',
    imageSrc: imgPiscinaCocinaDia,
    accentColor: '#0284C7',
  },
  {
    id: 'lounge-sofa-pergola-sol',
    title: 'Salón Exterior & Pérgola Chill-Out',
    subtitle: 'Confortable chaiselongue, suelo de piedra y luz dorada',
    category: 'lounge',
    categoryLabel: 'Pérgola Chill-Out',
    description: 'Espacio bajo pérgola de madera lacada en blanco con suelo de pizarra rústica, amplio sofá seccional en tono crema con cojines mullidos y mesa con sillas para descansar y conversar.',
    imageSrc: imgLoungeSofaPergolaSol,
    accentColor: '#854D0E',
  },
  {
    id: 'piscina-pergola-palmera',
    title: 'Zona de Baño & Muro de Piedra Volcánica',
    subtitle: 'Piscina cristalina, solárium y palmeras canarias',
    category: 'piscina',
    categoryLabel: 'Piscina & Jardín',
    description: 'Piscina con coronación en piedra gris marengo y reflejos cristalinos, rodeada de césped, sombrilla, pérgola y el tradicional muro de piedra volcánica de Lanzarote.',
    imageSrc: imgPiscinaPergolaPalmera,
    accentColor: '#0284C7',
  },
  {
    id: 'pergola-salon-exterior',
    title: 'Comedor Exterior & Vistas a la Piscina',
    subtitle: 'Mesa de cristal, sillas y perspectiva abierta al jardín',
    category: 'cocina',
    categoryLabel: 'Cocina & Comedor',
    description: 'Zona de comedor bajo la pérgola con mesa de cristal templado, vistas directas a la piscina y el característico rótulo de forja de The Perfect View in Soo.',
    imageSrc: imgPergolaSalonExterior,
    accentColor: '#B45309',
  },
  {
    id: 'atardecer-chillout-piscina',
    title: 'Relax al Atardecer junto a la Piscina',
    subtitle: 'La magia de la "golden hour" en Soo',
    category: 'vistas',
    categoryLabel: 'Vistas Panorámicas',
    description: 'Disfruta de una bebida refrescante en la tumbona de madera noble mientras el sol desciende tras las montañas y el océano en Soo.',
    imageSrc: imgAtardecerChilloutPiscina,
    accentColor: '#F59E0B',
  },
  {
    id: 'bano-vista-piscina',
    title: 'Baño de Diseño con Salida a la Piscina',
    subtitle: 'Lavabo moderno, grifería negra y acceso directo',
    category: 'bano',
    categoryLabel: 'Baño Completo',
    description: 'Acceso directo desde la zona de baño al aseo privado. Dispone de lavabo pedestal blanco, grifo negro mate de diseño y espejo vertical con iluminación cálida.',
    imageSrc: imgBanoVistaPiscina,
    accentColor: '#57534E',
  },
  {
    id: 'bano-interior-claraboya',
    title: 'Ducha Walk-In & Luz Natural Cenital',
    subtitle: 'Alicatado en gres porcelánico efecto piedra y claraboya',
    category: 'bano',
    categoryLabel: 'Baño Completo',
    description: 'Interior del baño con revestimientos porcelánicos de gran formato, ducha de obra a ras de suelo, inodoro moderno y claraboya en el techo que aporta luz natural durante todo el día.',
    imageSrc: imgBanoInteriorClaraboya,
    accentColor: '#57534E',
  },
  {
    id: 'piscina-vista-muro-logo',
    title: 'Perspectiva de la Terraza & Arquitectura',
    subtitle: 'Reflejos en el agua y diseño tradicional blanco',
    category: 'piscina',
    categoryLabel: 'Piscina & Jardín',
    description: 'Vista hacia el muro perimetral blanco con el rótulo corporativo, arquitectura tradicional canaria y el contraste con el muro de piedra volcánica.',
    imageSrc: imgPiscinaVistaMuroLogo,
    accentColor: '#0284C7',
  },
  {
    id: 'terraza-panoramica-soo',
    title: 'Vistas Abiertas hacia el Parque Natural',
    subtitle: 'Tranquilidad absoluta y paisajes volcánicos',
    category: 'vistas',
    categoryLabel: 'Vistas Panorámicas',
    description: 'Perspectiva elevada desde la terraza que muestra la inmensidad del paisaje de Soo, sin edificaciones que tapen las vistas panorámicas al atardecer.',
    imageSrc: imgTerrazaPanoramicaSoo,
    accentColor: '#D9532A',
  },
  {
    id: 'piscina-tumbona-atardecer',
    title: 'Solárium al Caer la Tarde',
    subtitle: 'Tumbona de teca con sombrilla orientada al poniente',
    category: 'piscina',
    categoryLabel: 'Piscina & Jardín',
    description: 'Área de relax con tumbona de madera noble y sombrilla blanca, perfecta para descansar tras un baño refrescante con la silueta de los volcanes de fondo.',
    imageSrc: imgPiscinaTumbonaAtardecer,
    accentColor: '#EA580C',
  },
  {
    id: 'logo-muro-the-perfect-view',
    title: 'Rótulo "The Perfect View in Soo"',
    subtitle: 'Forja negra artesanal sobre muro encalado',
    category: 'detalles',
    categoryLabel: 'Identidad & Estilo',
    description: 'Rótulo en forja negra con el emblema del sol sobre las olas y tipografía en cursiva, el rincón predilecto para las fotografías de recuerdo de tus invitados.',
    imageSrc: imgLogoMuroThePerfectView,
    accentColor: '#171717',
  },
  {
    id: 'cartel-promocional',
    title: 'Cartel Informativo del Espacio',
    subtitle: 'Terraza Lounge para celebraciones · Tel. 637495690',
    category: 'detalles',
    categoryLabel: 'Identidad & Estilo',
    description: 'Cartel oficial de alquiler de espacio para eventos: ideal para celebraciones, reuniones y eventos privados. Alquiler de 12:00 a 20:00 h.',
    imageSrc: imgCartelPromocional,
    accentColor: '#CA8A04',
  },
];
