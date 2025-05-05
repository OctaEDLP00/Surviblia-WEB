interface Tracks {
  track_1: string
  track_2: string
  track_3: string
  track_4: string
  track_5: string
  solution: string
}

interface Solutions {
  episode_number: string
  episode_title: string
  tracks: Tracks
}

interface SurviAPISVSG {
  whats_is_svsg: string
  rules_of_the_game: Array<string>
  how_and_where_send_solution: Array<string>
  solutions: Array<Solutions>
}

export type { Solutions, SurviAPISVSG, Tracks }
export default { SurviAPISVSG, Solutions, Tracks }
