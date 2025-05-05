interface GeneralLore {
  episode_number
  description
  related_places
  related_pets
  references
}

interface Lore {
  general_lore: Array<GeneralLore>
  pets: object
  flashbacks: object
  others: object
}

interface IntroAnimations {
  first_apparition
  apparition_episodes
  description
}

interface Animations {
  intro: Array<IntroAnimations>
  general_animations: unknown
  intermediate: object
  others: unknown
  particle_hype: unknown
}

interface Cinematics {
  general_cinematics: unknown
  others: object
  projects_presentations: unknown
}

interface Clips {
  emoji: unknown
  explication: unknown
  general_clips: unknown
  holiday: unknown
  macedonia: unknown
  mecenas: unknown
  meme: unknown
  others: unknown
  outro: unknown
  reference: unknown
  resume: unknown
}

interface SurviAPICALC {
  lore: Lore
  animations: Animations
  cinematics: Cinematics
  clips: Clips
}

export type { Animations, Cinematics, Clips, Lore, SurviAPICALC }
export default { SurviAPICALC, Clips, Cinematics, Animations, Lore }
