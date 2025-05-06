import type {
  LEVEL_WITH_NUMBER,
  LEVEL_WITH_NUMBER_ROMAN,
  MIME_IMAGES, MIME_VIDEO,
  REL_TYPE, TARGET_TYPE
} from "~/consts/types";

type _TypeVideo = (typeof MIME_VIDEO)[keyof typeof MIME_VIDEO]
type _TypeImages = (typeof MIME_IMAGES)[keyof typeof MIME_IMAGES]
type HexColor = string & { __hexColorBrand: never };
type TargetType = (typeof TARGET_TYPE)[keyof typeof TARGET_TYPE];
type RelType = (typeof REL_TYPE)[keyof typeof REL_TYPE];
type LevelWithNumberRoman = (typeof LEVEL_WITH_NUMBER_ROMAN)[keyof typeof LEVEL_WITH_NUMBER_ROMAN];
type LevelWithNumber = (typeof LEVEL_WITH_NUMBER)[keyof typeof LEVEL_WITH_NUMBER];
interface Enchantment {
  lvl: LevelWithNumberRoman | LevelWithNumber
  id: IDMinecraftEnchantments;
}

type Map = 'map' | 'empty_map'
type Armor = (typeof ARMOR_PART_TYPE)[keyof typeof ARMOR_PART_TYPE]
type Tool = (typeof TOOL_TYPE)[keyof typeof TOOL_TYPE]
type OtherItems = (typeof OTHERS_ITEMS)[keyof typeof OTHERS_ITEMS]
type ItemsType = Armor | Tool | Map | OtherItems
type EnchantName = (typeof ENCHANT_NAME_TYPE)[keyof typeof ENCHANT_NAME_TYPE]
type Mob = (typeof MOB_TYPE)[keyof typeof MOB_TYPE]
type IdItemsType = `minecraft:${ItemsType}`
type IdMob = `minecraft:${Mob}`
type IdEnchantName = `minecraft:${EnchantName}`
type LevelWithNumberRoman =
  (typeof LEVEL_WITH_NUMBER_ROMAN)[keyof typeof LEVEL_WITH_NUMBER_ROMAN]
type LevelWithNumber = (typeof LEVEL_NUMBER)[keyof typeof LEVEL_NUMBER]
type Comment = string | '' | null
type AllVersions =
  | '1.X'
  | '1.4'
  | '1.4.2'
  | '1.4.4'
  | '1.4.5'
  | '1.4.6'
  | '1.4.7'
  | '1.5'
  | '1.5.1'
  | '1.5.2'
  | '1.6.1'
  | '1.6.2'
  | '1.6.4'
  | '1.7.2'
  | '1.7.4'
  | '1.7.5'
  | '1.7.6'
  | '1.7.7'
  | '1.7.8'
  | '1.7.9'
  | '1.7.10'
  | '1.8'
  | '1.8.1'
  | '1.8.2'
  | '1.8.3'
  | '1.8.4'
  | '1.8.5'
  | '1.8.6'
  | '1.8.7'
  | '1.8.8'
  | '1.8.9'
  | '1.9'
  | '1.9.1'
  | '1.9.2'
  | '1.9.3'
  | '1.9.4'
  | '1.10'
  | '1.10.1'
  | '1.10.2'
  | '1.11'
  | '1.11.1'
  | '1.11.2'
  | '1.12'
  | '1.12.1'
  | '1.12.2'
  | '1.13'
  | '1.13.1'
  | '1.13.2'
  | '1.14'
  | '1.14.1'
  | '1.14.2'
  | '1.14.3'
  | '1.14.4'
  | '1.15'
  | '1.15.1'
  | '1.15.2'
  | '1.16'
  | '1.16.1'
  | '1.16.2'
  | '1.16.3'
  | '1.16.4'
  | '1.16.5'
  | '1.17'
  | '1.17.1'
  | '1.18'
  | '1.18.1'
  | '1.18.2'
  | '1.19'
  | '1.19.1'
  | '1.19.2'
  | '1.19.3'
  | '1.19.4'
  | '1.20'
  | '1.20.1'
  | '1.20.2'
  | '1.20.3'
  | '1.20.4'
  | '1.20.5'
  | '1.20.6'
  | '1.21'
  | '1.21.1'
  | '1.21.2'

type Weights = (typeof WEIGHTS)[keyof typeof WEIGHTS]
type ArmorType = (typeof ARMOR_TYPE)[keyof typeof ARMOR_TYPE]
type Gamemode = (typeof GAMEMODE_TYPE)[keyof typeof GAMEMODE_TYPE]

type Biome = (typeof BIOME_TYPE)[keyof typeof BIOME_TYPE]
type IdBiome = `minecraft:${Biome}`

export type {
  _TypeImages, _TypeVideo, AllVersions, ArmorType, Biome, Enchantment, Gamemode, HexColor, IdBiome, LevelWithNumber,
  LevelWithNumberRoman,
  RelType,
  TargetType, Weights, IdEnchantName
};
export default {
  AllVersions, ArmorType, Enchantment, Gamemode, HexColor,
  LevelWithNumber,
  LevelWithNumberRoman,
  RelType,
  TargetType, Weights, Biome, IdBiome,
  _TypeVideo,
  _TypeImages, IdEnchantName
}

