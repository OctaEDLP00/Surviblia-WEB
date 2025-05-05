import type { AllVersions, Biome } from './types.d'

interface Coords {
  x: string
  y?: string
  z: string
}

interface Tiers {
  animations?: string
  blocks_used?: string | Array<string>
  curiosity?: string
  coords: Coords
  episode_number: string | Array<string>
  mechanisms_carried_out: Array<string>
  mentions?: string | Array<string>
  official_name_of_project: string
  others_name_of_project?: string
  others?: string
  project_biome: Biome | Array<Biome>
  project_objetives: string | Array<string>
  records?: Array<string>
  version: AllVersions | Array<AllVersions>
  space?: string
}

interface SurviAPIProjects {
  tierSplus: Array<Tiers>
  tierS: Array<Tiers>
  tierA: Array<Tiers>
  tierB: Array<Tiers>
  tierC: Array<Tiers>
  tierD: Array<Tiers>
  tierUnranked: Array<Tiers>
}

export type { Coords, SurviAPIProjects, Tiers }
export default { Coords, Tiers, SurviAPIProjects }
