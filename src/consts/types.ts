const REL_TYPE = {
  NOREFERRER: 'noreferrer',
  NOOPENER: 'noopener',
  NOREFERRERNOOPENER: 'noreferrer noopener'
} as const

const TARGET_TYPE = {
  BLANK: '_blank',
  TOP: '_top',
  SELF: '_self',
  PARENT: '_parent'
} as const

const LEVEL_WITH_NUMBER_ROMAN = {
  ONE: 'I',
  TWO: 'II',
  THREE: 'III',
  FOUR: 'IV',
  FIVE: 'V',
} as const

const LEVEL_NUMBER = {
  ONE: '1',
  TWO: '2',
  THREE: '3',
  FOUR: '4',
  FIVE: '5',
} as const

const ARMOR_PART_TYPE = {
  DIAMOND_BOOTS: 'diamond_boots',
  DIAMOND_LEGGINGS: 'diamond_leggigns',
  DIAMOND_CHESTPLATE: 'diamond_chestplate',
  DIAMOND_HELMET: 'diamond_helmet',
  IRON_BOOTS: 'iron_boots',
  IRON_LEGGINGS: 'iron_leggings',
  IRON_CHESTPLATE: 'iron_chestplate',
  IRON_HELMET: 'iron_helmet',
  GOLD_BOOTS: 'gold_boots',
  GOLD_LEGGINGS: 'gold_leggings',
  GOLD_CHESTPLATE: 'gold_chestplate',
  GOLD_HELMET: 'gold_helmet',
  CHAINMAIL_BOOTS: 'chainmail_boots',
  CHAINMAIL_LEGGINGS: 'chainmail_leggings',
  CHAINMAIL_CHESTPLATE: 'chainmail_chestplate',
  CHAINMAIL_HELMET: 'chainmail_helmet',
} as const

const TOOL_TYPE = {
  DIAMOND_PICKAXE: 'diamond_pickaxe',
  DIAMOND_AXE: 'diamond_axe',
  DIAMOND_SHOVEL: 'diamond_shovel',
  DIAMOND_SWORD: 'diamond_sword',
  DIAMOND_: 'diamond_hoe',
  IRON_PICKAXE: 'iron_pickaxe',
  IRON_AXE: 'iron_axe',
  IRON_HOE: 'iron_hoe',
  IRON_SWORD: 'iron_sword',
  IRON_SHOVEL: 'iron_shovel',
  GOLD_PICKAXE: 'gold_pickaxe',
  GOLD_AXE: 'gold_axe',
  GOLD_HOE: 'gold_hoe',
  GOLD_SWORD: 'gold_sword',
  GOLD_SHOVEL: 'gold_shovel',
  WODDEN_PICKAXE: 'wodden_pickaxe',
  FISHING_ROD: 'fishing_rod',
} as const

const OTHERS_ITEMS = {
  BOW: 'bow',
  SHIELD: 'shield',
  SHULKER_BOX: 'shulker_box',
  EMPTY_MAP: 'empty_map',
  ELYTRA: 'elytra',
  SHEARS: 'shears',
  BOOK: 'book',
  BOOK_AND_QUILL: 'book_and_quill',
} as const

const ENCHANT_NAME_TYPE = {
  PROTECTION: 'protection',
  UNBREAKING: 'unbreaking',
  MENDING: 'mending',
  LOOTING: 'looting',
  RESPIRATION: 'respiration',
  FEATHER_FALLING: 'feather_falling',
  DEPTH_STRIDER: 'depth_strider',
  EFFICIENCY: 'efficiency',
  FORTUNE: 'fortune',
  SILK_TOUCH: 'silk_touch',
  POWER: 'power',
  INFINITY: 'infinity',
  PUNCH: 'punch',
  FLAME: 'flame',
  FIRE_ASPECT: 'fire_aspect',
  AQUA_AFFINITY: 'aqua_affinity',
  BANE_OF_ARTHROPODS: 'bane_of_arthropds',
  BLAST_PROTECTION: 'blast_protection',
  FIRE_PROTECTION: 'fire_protection',
  FROST_WALKER: 'frost_walker',
  KNOCKBACK: 'knockback',
  LUCK_OF_THE_SEA: 'luck_of_the_sea',
  LURE: 'lure',
  PROJECTILE_PROTECTION: 'projectile_protection',
  SHARPNESS: 'sharpness',
  SMITE: 'smite',
  THORNS: 'thorns',
  SWEEPING: 'sweeping',
  SWEEPING_EDGE: 'sweeping_edge',
} as const

const MOB_TYPE = {
  ZOMBIFIED_PIGLIN: 'zombified_piglin',
  ZOMBIE_PIGMAN: 'zombie_pigman',
  ZOMBIE: 'zombie',
  ZOMBIE_VILLAGER: 'zombie_villager',
  SKELETON: 'skeleton',
  WITHER_SKELETON: 'wither_skeleton',
  MAGMA: 'magma_cube',
  HORSE: 'horse',
  WOLF: 'wolf',
} as const

const WEIGHTS = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
} as const

const ARMOR_TYPE = {
  CHAINMAIL: 'chainmail',
  LEATHER: 'leather',
  GOLD: 'gold',
  IRON: 'iron',
  DIAMOND: 'diamond',
  NETHERITE: 'netherite',
} as const

const GAMEMODE_TYPE = {
  CREATIVO: 'Creativo',
  CREATIVE: 'Creative',
  SURVIVAL: 'Survival',
  ESPECTADOR: 'Espectador',
  SPECTATOR: 'Spectator',
  ADVENTURE: 'Adventure',
  AVENTURA: 'Aventura',
} as const

const BIOME_TYPE = {
  TAIGA: 'taiga',
  EXTREME_HILLS: 'extreme hills',
  SWAMP: 'swamp',
  PLAINS: 'plains',
  JUNGLE: 'jungle',
  NETHER: 'nether',
} as const

const MIME_IMAGES = {
  'image/apng': 'image/apng',
  'image/avif': 'image/avif',
  'image/gif': 'image/gif',
  'image/heic': 'image/heic',
  'image/jpeg': 'image/jpeg',
  'image/png': 'image/png',
  'image/svg+xml': 'image/svg+xml',
  'image/webp': 'image/webp',
} as const

const MIME_VIDEO = {
  'video/jpeg': 'video/jpeg',
  'video/mp4': 'video/mp4',
  'video/mp3': 'video/mp3',
  'video/mpeg': 'video/mpeg',
  'video/ogg': 'video/ogg',
  'video/webm': 'video/webm',
} as const

export {
  ARMOR_PART_TYPE, ARMOR_TYPE, BIOME_TYPE, ENCHANT_NAME_TYPE, GAMEMODE_TYPE, LEVEL_NUMBER, LEVEL_WITH_NUMBER_ROMAN, MIME_IMAGES, MIME_VIDEO, MOB_TYPE, OTHERS_ITEMS, REL_TYPE, TARGET_TYPE, TOOL_TYPE, WEIGHTS
}
export default {
  TARGET_TYPE, REL_TYPE, LEVEL_WITH_NUMBER_ROMAN,
  LEVEL_NUMBER,
  ARMOR_PART_TYPE,
  TOOL_TYPE,
  OTHERS_ITEMS,
  ENCHANT_NAME_TYPE,
  MOB_TYPE,
  WEIGHTS,
  ARMOR_TYPE,
  GAMEMODE_TYPE,
  BIOME_TYPE,
  MIME_VIDEO, MIME_IMAGES
}
