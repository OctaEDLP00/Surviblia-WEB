import type { ArmorType, RelType, TargetType, Weights } from '../types/types'

export interface Link {
  text: string
  path: string
  icon?: (_props: Record<string, unknown>) => unknown
  subpath?: Array<Link>
  target?: TargetType
  rel?: RelType
}

const Links = [
  { text: 'Spawn', path: '/' },
  { text: 'Episodios', path: '/episodios', subpath: [] },
  {
    text: 'Proyectos',
    path: '/proyectos',
    subpath: [
      {
        text: 'Tier S+',
        path: '/tier-s-plus',
        subpath: [
          {
            text: 'Orogeddon',
            path: '/orogeddon',
          },
          {
            text: 'Permutador Metalurgico',
            path: '/permutador-metalurgico',
          },
          {
            text: 'Universal Datatrao',
            path: '/universal-datatrap',
          },
        ],
      },
      {
        text: 'Tier S',
        path: '/tier-s',
        subpath: [
          {
            text: 'Ferrofactoria Æternalis',
            path: '/ferrofactoria-Æternalis',
          },
          {
            text: 'Multidust',
            path: '/multidust',
          },
          {
            text: 'Incinerador',
            path: '/incinerador',
          },
          {
            text: 'Generador de Endercrystal',
            path: '/generador-de-endercrystal',
          },
          {
            text: 'The Bedrock Tower',
            path: '/the-bedrock-tower',
          },
          {
            text: 'Sistema Perimetral',
            path: '/sistema-perimetral',
          },
          {
            text: 'Generador automatico de EnderCrystals y Diamantes',
            path: '/generador-automatico-de-endercrystals-y-diamonds',
          },
          {
            text: 'Forwarp',
            path: '/forwarp',
          },
        ],
      },
      {
        text: 'Tier A',
        path: '/tier-a',
        subpath: [
          {
            text: 'Über Orber',
            path: '/ürber-orber',
          },
          {
            text: 'Spawngea',
            path: '/spawngea',
          },
          {
            text: 'Blocones',
            path: '/blocones',
          },
          {
            text: 'Proyecto ⬚⬚⬚⬚⬚⬚⬚',
            path: '/projecto-⬚⬚⬚⬚⬚⬚⬚',
          },
          {
            text: 'Cronódromo del Destino',
            path: '/cronodromo-del-destino',
          },
          {
            text: 'Parámo Helado de Piggers',
            path: '/paramo-helado-de-piggers',
          },
          {
            text: 'La Forja del Tiempo',
            path: '/la-forja-del-tiempo',
          },
          {
            text: 'Los Rascahielos',
            path: '/los-rascahielos',
          },
        ],
      },
      {
        text: 'Tier B',
        path: '/tier-b',
        subpath: [
          {
            text: 'F.O.I',
            path: '/f-o-i',
          },
          {
            text: 'Catedral Esqueleto',
            path: '/catedral-esqueleto',
          },
          {
            text: 'Proyecto Fractalis',
            path: '/proyecto-fractalis',
          },
          {
            text: 'Granja de Obsidiana',
            path: '/granja-de-obsidiana',
          },
          {
            text: 'Granja de Madera',
            path: '/granja-de-madera',
          },
          {
            text: 'Impresora de Agua',
            path: '/impresora-de-agua',
          },
          {
            text: 'Hidro Receptor Infernal',
            path: '/hidro-receptor-infernal',
          },
          {
            text: 'Ghast Catcher',
            path: '/ghast-catcher',
          },
          {
            text: 'Triple Gold Pan',
            path: '/triple-gold-pan',
          },
          {
            text: 'Skeleton Trap Trap',
            path: '/skeleton-trap-trap',
          },
          {
            text: 'Auto Wither Killer',
            path: '/auto-wither-killer',
          },
          {
            text: 'La Chunketera',
            path: '/la-chunktera',
          },
          {
            text: 'The Pathfinder',
            path: '/the-pathfinder',
          },
        ],
      },
      {
        text: 'Tier C',
        path: '/tier-c',
        subpath: [
          {
            text: 'Nether Hub + Red Interdimensional',
            path: '/nether-hub-mas-red-interdimensional',
          },
          {
            text: 'I.H.T',
            path: '/i-h-t',
          },
          {
            text: 'Proyecto Terra',
            path: '/proyecto-terra',
          },
          {
            text: 'Villa Nordica de ElRichMC',
            path: '/villa-nordica-de-elrichmc',
          },
          {
            text: 'Mansion de Mr.Tiger Chunks',
            path: '/mansion-de-mr-tiger-chunks',
          },
          {
            text: 'Redstone Ready',
            path: '/redstone-ready',
          },
          {
            text: 'Overworld Skull Converter',
            path: '/overworld-skull-converter',
          },
          {
            text: 'Thundernet',
            path: '/thundernet',
          },
          {
            text: 'Laser Symphonia',
            path: '/laser-symphonia',
          },
          {
            text: 'End Switch',
            path: '/end-switch',
          },
          {
            text: 'Fractalis 2',
            path: '/fractalis-2',
          },
        ],
      },
      {
        text: 'Tier D',
        path: '/tier-d',
        subpath: [
          {
            text: 'Caseta de Wuar IV',
            path: '/caseta-de-war-iv',
          },
          {
            text: 'Activador de Instant Falling',
            path: '/activador-de-instant-falling',
          },
          {
            text: 'Granja de Flores de Pantano',
            path: '/granja-de-flores-de-pantano',
          },
          {
            text: 'Mob Switch 1.0',
            path: '/mob-switch-1-0',
          },
          {
            text: 'Granja de Hielo',
            path: '/granja-de-hielo',
          },
          {
            text: 'Mob Switch 3.1',
            path: '/mob-switch-3-1',
          },
          {
            text: 'Granja de Zombies',
            path: '/granja-de-zombies',
          },
          {
            text: 'Mob Switch 2.0',
            path: '/mob-switch-2-0',
          },
          {
            text: 'Cotton Square',
            path: '/cotton-square',
          },
          {
            text: 'IC-43S',
            path: '/ic-43s',
          },
        ],
      },
      {
        text: 'Unranked',
        path: '/Unranked',
        subpath: [
          {
            text: 'Gusanator',
            path: '/gusanator',
          },
          {
            text: 'Disyuntor de Endermans',
            path: '/disyuntor-de-endermans',
          },
          {
            text: 'Granja de Hielo v3',
            path: '/granja-de-hielo-v3',
          },
          {
            text: 'Chuletizador',
            path: '/chuletizador',
          },
          {
            text: 'Granja de Flores Heladas',
            path: '/granja-de-flores-heladas',
          },
          {
            text: 'Mob Switch Infernal',
            path: '/mobswitch-infernal',
          },
          {
            text: 'Granja de Pollos',
            path: '/granja-de-pollos',
          },
          {
            text: 'Monumento Pegajoso',
            path: '/monumento-pagajoso',
          },
          {
            text: 'Generador de End Portals',
            path: '/generador-de-end-portals',
          },
          {
            text: 'Generador de Barrier Block',
            path: '/generador-de-barrier-block',
          },
          {
            text: 'Proyecto Berilo',
            path: '/proyecto-berilo',
          },
          {
            text: 'Granja de Calamares',
            path: '/granja-de-calamares',
          },
          {
            text: 'Granja de Slime',
            path: '/granja-de-slime',
          },
          {
            text: 'Granja de Caña de Azucar',
            path: '/granja-de-caña-de-azucar',
          },
          {
            text: 'Gran Arbol Padre y Custodio del Arbol Primigenio',
            path: '/gran-arbol-padre-y-custodio-del-arbol-primigenio',
          },
          {
            text: 'Fuente de los Deseos',
            path: '/fuente-de-los-deseos',
          },
          {
            text: 'Mushroom Islands con Moais',
            path: '/mushroom-island-con-moais',
          },
          {
            text: 'Mausoleo de los Fans',
            path: '/mausoleo-de-los-fans',
          },
          {
            text: 'Pantalla led v0.5',
            path: '/pantalla-led-v-0-5',
          },
          {
            text: 'Granja de Flores de Flower Forest',
            path: '/granja-de-flores-de-flower-forest',
          },
          {
            text: 'Capsula del Tiempo 2017',
            path: '/capsula-del-tiempo-2017',
          },
          {
            text: 'Capsula de Tiempo 2019',
            path: '/capsula-del-tiempo-2019',
          },
          {
            text: 'Granja de Hielo v2',
            path: '/granja-de-hielo-v2',
          },
          {
            text: 'Granja de Nether Wart',
            path: '/granja-de-netherwart',
          },
          {
            text: 'Granja manual de Slimes',
            path: '/granja-manual-de-slimes',
          },
          {
            text: 'Horno Automatico Hipster',
            path: '/horno-automatico-hipster',
          },
          {
            text: 'Granja de Patatas',
            path: '/granja-de-patatas',
          },
          {
            text: 'NanoFarm de Patatas',
            path: '/nanofarm-de-patatas',
          },
          {
            text: 'Nanofarm de Survival',
            path: '/nanofarm-de-survival',
          },
          {
            text: 'Cabaña de 2012',
            path: '/cabaña-de-2012',
          },
        ],
      },
    ],
  },
  {
    text: 'Mascotas',
    path: '/mascotas',
    subpath: [
      {
        text: 'Oficiales',
        path: '/oficiales',
        subpath: [
          {
            text: 'Lobagnus Philips',
            path: '/lobagnus-philips',
          },
          {
            text: 'Guadrado I',
            path: '/guadrado-I',
          },
          {
            text: 'Guadrado II',
            path: '/guadrado-II',
          },
          {
            text: 'Gelatino',
            path: '/gelatino',
          },
          {
            text: 'Jefferson',
            path: '/jefferson',
          },
          {
            text: 'Leopardus Vandals',
            path: '/leopardus-vandals',
          },
          {
            text: 'Betty III',
            path: '/betty-III',
          },
          {
            text: 'James',
            path: '/james',
          },
          {
            text: 'James II',
            path: '/james-II',
          },
          {
            text: 'Poppy',
            path: '/poppy',
          },
          {
            text: 'Mr.Felpudo',
            path: '/mr-felpudo',
          },
          {
            text: 'Guadrado III',
            path: '/guadrado-III',
          },
          {
            text: 'Wuar IV',
            path: '/wuar-IV',
          },
          {
            text: 'Piggers',
            path: '/piggers',
          },
          {
            text: 'Floda',
            path: '/floda',
          },
          {
            text: 'Schörichnger',
            path: '/schörichnger',
          },
          {
            text: 'Tenebrator I',
            path: '/tenebrator-I',
          },
          {
            text: 'Blast',
            path: '/blast',
          },
          {
            text: 'Magma Cube Totem',
            path: '/magma-cube-totem',
          },
          {
            text: 'Globglobgabgalab',
            path: '/globglobgabgalab',
          },
          {
            text: 'Player 2',
            path: '/player-2',
          },
          {
            text: 'Ghost Wither Rider',
            path: '/ghost-whiter-rider',
          },
          {
            text: 'Wither Skeleton Rider Zurdo',
            path: '/wither-skeleton-rider-zurdo',
          },
          {
            text: 'Bearminator',
            path: '/bearminator',
          },
          {
            text: 'Mr.Tiger Chunks',
            path: '/mr-tiger-chuncks',
          },
          {
            text: 'Wendy',
            path: '/wendy',
          },
        ],
      },
      {
        text: 'No Oficiales',
        path: '/no-oficiales',
        subpath: [
          {
            text: 'Tomás (Slime)',
            path: '/tomas',
          },
          {
            text: 'Betty',
            path: '/betty',
          },
          {
            text: 'Betty II',
            path: '/betty-II',
          },
          {
            text: 'Tomás, Pancho y José',
            path: '/tomas-pancho-jose',
          },
          {
            text: 'Mini Piggy',
            path: '/mini-piggy',
          },
          {
            text: 'D. Piggy',
            path: '/d-piggy',
          },
          {
            text: 'Freddie, Bob, Max',
            path: '/freddie-bob-max',
          },
          {
            text: 'Freddie II, Bob III, Max II',
            path: '/freddie-II-bob-III-max-II',
          },
          {
            text: 'Creeper Electrico (Caballo)',
            path: '/creeper-electrico',
          },
          {
            text: 'Timoteo I',
            path: '/timoteo-I',
          },
          {
            text: 'Timoteo II',
            path: '/timoteo-II',
          },
          {
            text: 'Loggy',
            path: '/loggy',
          },
          {
            text: 'Super Ghast Sweeper',
            path: '/super-ghast-sweeper',
          },
          {
            text: 'Endermites [MC-1], [MC-2], [MC-3]',
            path: '/endermites',
          },
          {
            text: 'Spruce Wills',
            path: '/spruce-wills',
          },
          {
            text: 'Hopper',
            path: '/hopper',
          },
          {
            text: 'Endermeat',
            path: '/endermeat',
          },
        ],
      },
    ],
  },
  {
    text: 'Herramientas',
    path: '/herramientas',
    subpath: [], // con la API
  },
  {
    text: 'Mapa',
    path: '/mapa',
  },
  {
    text: 'Timeline',
    path: '/timeline',
  },
  {
    text: 'Lore, animaciones y cinemáticas',
    path: '/lore-animaciones-cinematicas',
    subpath: [
      {
        text: 'Lore',
        path: '/lore',
        subpath: [
          {
            text: 'General',
            path: '/general',
          },
          {
            text: 'Mascotas',
            path: '/pets',
          },
          {
            text: 'Flashbacks',
            path: '/flashback',
          },
          {
            text: 'Otros',
            path: '/others',
          },
        ],
      },
      {
        text: 'Animaciones',
        path: '/animations',
        subpath: [
          {
            text: 'Intro',
            path: '/intro',
          },
          {
            text: 'Intermedio',
            path: '/intermedio',
          },
          {
            text: 'Animaciones General',
            path: '/animaciones-general',
          },
          {
            text: 'Particle Hype',
            path: '/particle-hype',
          },
          {
            text: 'Anuncios Patreon',
            path: '/',
          },
          {
            text: 'Otras',
            path: '/otras',
          },
        ],
      },
      {
        text: 'Cinematicas',
        path: '/cinematics',
        subpath: [
          {
            text: 'General',
            path: '/general',
          },
          {
            text: 'Presentacion de Proyectos',
            path: '/presentacion-proyectos',
          },
          {
            text: 'Otros',
            path: '/otros',
          },
        ],
      },
      {
        text: 'Clips',
        path: '/clips',
        subpath: [
          {
            text: 'Generales',
            path: '/generales',
          },
          {
            text: 'Emoji',
            path: '/emoji',
          },
          {
            text: 'Meme',
            path: '/meme',
          },
          {
            text: 'Referencia',
            path: '/referencia',
          },
          {
            text: 'Resumen',
            path: '/resumen',
          },
          {
            text: 'Explicacion',
            path: '/explicacion',
          },
          {
            text: 'Navidad',
            path: '/navidad',
          },
          {
            text: 'Macedonia',
            path: '/macedonia',
          },
          {
            text: 'Mecenas',
            path: '/mecenas',
          },
          {
            text: 'Outro',
            path: '/outro',
          },
          {
            text: 'Otros',
            path: '/otros',
          },
        ],
      },
    ],
  },
  {
    text: 'Timelapses',
    path: '/',
  },
  {
    text: 'SVSG',
    path: '/svsg',
    subpath: [
      {
        text: 'Ep 156 - Consigo TODOS los bloques Ilegales de Minecraft',
        path: '/156',
      },
      {
        text: 'Ep 157 - Los SECRETOS que oculté en 2017',
        path: '/157',
      },
      {
        text: 'Ep 158 - He picado 500.000 bloques para ESTO',
        path: '/158',
      },
      {
        text: 'Ep 159 - Los SECRETOS OCULTOS de mi mundo',
        path: '/159',
      },
      {
        text: 'Ep 160 - La granja de CALAVERAS BLANCAS',
        path: '/160',
      },
      {
        text: 'Ep 161 - 0,00001% de SPAWN',
        path: '/161',
      },
      {
        text: 'Ep 162 - He conseguido la CABEZA DE STEVE',
        path: '/162',
      },
      {
        text: 'Ep 163 - Bienvenidos a Winter Star',
        path: '/163',
      },
      {
        text: 'Ep 164 - La Espectacular despedida de 2022',
        path: '/164',
      },
      {
        text: 'Ep 165 - Un NUEVO proyecto GIGANTE',
        path: '/165',
      },
      {
        text: 'Ep 166 - PORTAL A LAS FARLANDS',
        path: '/166',
      },
      {
        text: 'Ep 167 - 25 AÑOS de Survival',
        path: '/167',
      },
      {
        text: 'Ep 168 - MODIFICO TODO UN BIOMA CON ESTA MAQUINA',
        path: '/168',
      },
      {
        text: 'Ep 169 - Conociendo mas a ElRichMC',
        path: '/169',
      },
      {
        text: 'Ep 170 - Actualizar mi mundo rompe granjas',
        path: '/170',
      },
      {
        text: 'Ep 171 - 100.000 Ender Pearls SUPERSTACKEADAS de 64',
        path: '/171',
      },
      {
        text: 'Ep 172',
        path: '/172',
      },
      {
        text: 'Ep 173',
        path: '/173',
      },
      {
        text: 'Ep 174',
        path: '/174',
      },
      {
        text: 'Ep 175',
        path: '/175',
      },
      {
        text: 'Ep 176',
        path: '/176',
      },
      {
        text: 'Ep 177',
        path: '/177',
      },
    ],
  },
  {
    text: 'Extras',
    path: '/extras',
    subpath: [
      {
        text: 'Memes de Survival',
        path: '/memes-survival',
      },
      {
        text: 'Fan Arts',
        path: '/fan-arts',
      },
    ],
  },
  {
    text: '¡Apoya a ElRichMC!',
    path: '/apoya-a-elrichmc',
  },
] satisfies Array<Link>

const ArmorWeight: Record<ArmorType, Weights> = {
  chainmail: 'low',
  leather: 'low',
  gold: 'medium',
  iron: 'medium',
  diamond: 'high',
  netherite: 'high',
}

export { ArmorWeight, Links }
export type { Link }
export default { ArmorWeight, Links }
