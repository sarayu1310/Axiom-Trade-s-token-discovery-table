export type Token = {
  symbol: string
  name: string
  logoUrl: string
  price: number
  change24h: number
  volume24h: number
  status: 'new' | 'final' | 'migrated'
}

export type TokensResponse = {
  data: Token[]
}
