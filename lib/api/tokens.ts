import { TokensResponse, Token } from '../types'

const sample: Token[] = [
  {
    symbol: 'SOL',
    name: 'Solana',
    logoUrl: 'https://cryptologos.cc/logos/solana-sol-logo.png',
    price: 164.27,
    change24h: 3.21,
    volume24h: 842312345,
    status: 'final'
  },
  {
    symbol: 'AXM',
    name: 'Axiom',
    logoUrl: 'https://avatars.githubusercontent.com/u/149850447?s=200&v=4',
    price: 2.18,
    change24h: -1.12,
    volume24h: 1234421,
    status: 'new'
  },
  {
    symbol: 'USDC',
    name: 'USD Coin',
    logoUrl: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png',
    price: 1,
    change24h: 0,
    volume24h: 213423423,
    status: 'migrated'
  }
]

export async function getTokens(tab: 'new' | 'final' | 'migrated'): Promise<TokensResponse> {
  await new Promise(r => setTimeout(r, 500))
  const filtered = sample
    .filter(t => t.status === tab)
    .concat(
      Array.from({ length: 30 }).map((_, i) => ({
        symbol: `${tab.toUpperCase()}${i + 1}`,
        name: `${tab} token ${i + 1}`,
        logoUrl: 'https://placehold.co/32x32/png',
        price: Math.random() * 10 + 1,
        change24h: Math.random() * 4 - 2,
        volume24h: Math.floor(Math.random() * 1_000_000),
        status: tab
      }))
    )
  return { data: filtered }
}
