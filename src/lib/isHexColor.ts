import type { HexColor } from "~/types/types"

function isHexColor(value: string): value is HexColor {
  const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
  return hexColorRegex.test(value)
}

export { isHexColor }
export default isHexColor
