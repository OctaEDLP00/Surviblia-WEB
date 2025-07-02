import type { KonamiProps, KonamiState } from './Konami.d.ts'

/** @const {KonamiState} konamiState */
const konamiState: KonamiState = {}

/**
 * @module Konami
 * @description This class is a simple implementation of the Konami code.
 * @class Konami
 * @implements {IKonami}
 * @property {Array<string>} code
 * @property {string} keyPressed
 * @property {number} [onFinishTime] If onFinishTime is not define, it's default value is 1000ms
 * @property {function} onSucces
 * @property {function} [onFinish]
 */
export class Konami {
  /** An array of the letters that will be the keys pressed to execute the easter egg */
  code: Array<string>
  /** the key pressed by the user */
  keyPressed: string
  /**
   * If onFinishTime is not define, it's default value is 1000ms
   * @default '1000ms'
   */
  onFinishTime?: number
  /**  */
  onSucces: () => void
  /**  */
  onFinish?: () => void

  /**
   * this a description constructor
   * @constructor
   * @param {import('@const/types').KonamiProps} konamiProps
   */
  constructor({ code, keyPressed, onSucces, onFinish, onFinishTime }: KonamiProps) {
    this.code = code
    this.keyPressed = keyPressed
    this.onFinishTime = onFinishTime
    this.onSucces = onSucces
    this.onFinish = onFinish
    this.init(this.code, this.keyPressed, this.onFinishTime, this.onSucces, this.onFinish)
  }

  /**
   * @param {Array<string>} code
   * @param {string} keyPressed
   * @param {() => void} onFinish
   * @param {() => void} onSucces
   * @param {number} onFinishTime
   * @return {void}
   */
  private init(
    code: Array<string>,
    keyPressed: string,
    onFinishTime: number,
    onSucces: () => void,
    onFinish: () => void
  ): void {
    const codeKey = code.join('-')
    const konamiCodePosition = konamiState[codeKey] || 0

    const actualKey = keyPressed.toLowerCase()
    const actualCode = code[konamiCodePosition].toLowerCase()

    if (actualKey !== actualCode) {
      if (onFinish) onFinish()
      konamiState[codeKey] = 0
      return
    }

    const nextPosition = konamiCodePosition + 1

    if (nextPosition === code.length) {
      onSucces()
      konamiState[codeKey] = 0

      if (onFinishTime && onFinish) {
        setTimeout(() => {
          onFinish()
        }, onFinishTime ?? 1000)
      }
    } else {
      konamiState[codeKey] = nextPosition
    }
  }
}

export default Konami
