import type { Version } from './enum.ts'

interface Thumbnail {
  url: string
  width: number
  height: number
}

interface Thumbnails {
  default: Thumbnail
  medium: Thumbnail
  high: Thumbnail
  standard: Thumbnail
  maxres: Thumbnail
}

interface SurviAPIEpisodes {
  episode_number: string
  episode_title: string
  thumbnails: Thumbnails
  version: Version
  videoId: string
}

type SurviAPIEpisodesVideos = Array<SurviAPIEpisodes>

export type { SurviAPIEpisodes, SurviAPIEpisodesVideos }
