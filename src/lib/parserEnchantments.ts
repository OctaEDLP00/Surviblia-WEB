import type { Enchantment, IdEnchantName } from '~/types/types.d'

const capitalizeForWords = (str: string): string => str
  .split(' ')
  .map(
    word => word.charAt(0).toUpperCase() +
      word.slice(1).toLowerCase()
  )
  .join(' ')

function parserEnchantNameId(id: IdEnchantName): string {
  const enchantMatch = id.split('minecraft:')[1]!.match('_')
  const splitEnchant = id.split('minecraft:')[1]!.replace('_', ' ')
  const idReplace = id.replace('minecraft:', '')
  if (enchantMatch !== null && enchantMatch![0] === '_') return capitalizeForWords(splitEnchant)
  return capitalizeForWords(idReplace)
}

export const parserEnchantments = (enchants: Array<Enchantment>): Array<string> => enchants.map(enchant => `${parserEnchantNameId(enchant.id)} ${enchant.lvl}`)
