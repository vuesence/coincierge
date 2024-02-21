interface IData {
  gas?: any
  cc?: any
  p2p?: any
}
interface IConfig {
  sections: IConfigSection[]
}

interface IConfigSection {
  title: string
  type: string
  enabled: boolean
  sortOrder: number
  provider?: string
}
