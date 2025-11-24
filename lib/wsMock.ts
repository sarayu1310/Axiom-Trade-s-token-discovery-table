type Subscriber = (price: number, change: number) => void

export function createPriceSocket() {
  const map = new Map<string, Set<Subscriber>>()
  const timers = new Map<string, any>()

  function start(symbol: string, initial: number) {
    if (timers.has(symbol)) return
    const loop = () => {
      const delay = 1000 + Math.random() * 2000
      const subs = map.get(symbol)
      const change = (Math.random() - 0.5) * 0.04
      if (subs && subs.size) {
        subs.forEach(cb => cb(initial * (1 + change), change * 100))
      }
      timers.set(
        symbol,
        setTimeout(() => {
          loop()
        }, delay)
      )
    }
    loop()
  }

  return {
    subscribe(symbol: string, initial: number, cb: Subscriber) {
      if (!map.has(symbol)) map.set(symbol, new Set())
      map.get(symbol)!.add(cb)
      start(symbol, initial)
      return () => {
        const set = map.get(symbol)
        if (!set) return
        set.delete(cb)
      }
    }
  }
}
