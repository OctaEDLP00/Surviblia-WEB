const $ = <T extends HTMLElement>(
  selector: keyof HTMLElementTagNameMap,
  el: Document = document
): T | null => el.querySelector<T>(selector)

const $$ = <T extends HTMLElement>(selector: string, el: Document = document): NodeListOf<T> =>
  el.querySelectorAll<T>(selector)

const print = console.log

export { $, $$, print }
