interface Parameter {
  name: string
  endpoint: string
  description: string
}

interface Paths {
  description: string
  endpoint: string
  parameters?: Array<Parameter>
}

type Endpoints = Array<Paths>

export type { Endpoints, Parameter, Paths }
export default { Endpoints, Parameter, Paths }
