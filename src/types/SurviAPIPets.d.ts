import type { AllVersions } from './types.d.ts'

interface Pets {
  alias: string
  apparition_pet: string | Array<string>
  domestication: string
  episode_number: string | Array<string>
  last_see: string | Array<string>
  name_pet: string
  others: string | Array<string>
  specie: string
  state: string
  version: AllVersions | Array<AllVersions>
}

interface SurviAPIPets {
  officials: Array<Pets>
  unofficials: Array<Pets>
}

export type { Pets, SurviAPIPets }
export default { SurviAPIPets, Pets }
