interface KonamiProps {
  code: Array<string>
  keyPressed: string
  onFinishTime?: number
  onSucces: () => void
  onFinish?: () => void
}

interface KonamiState {
  [key: string]: number
}

export type { KonamiProps, KonamiState }
