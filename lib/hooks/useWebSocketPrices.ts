"use client"
import { useEffect, useRef, useState } from 'react'
import { createPriceSocket } from '../wsMock'

export function useWebSocketPrice(symbol: string, initial: number) {
  const [price, setPrice] = useState(initial)
  const [delta, setDelta] = useState(0)
  const socketRef = useRef(createPriceSocket())
  useEffect(() => {
    const unsub = socketRef.current.subscribe(symbol, initial, (p, change) => {
      setPrice(p)
      setDelta(change)
    })
    return () => {
      unsub()
    }
  }, [symbol, initial])
  return { price, delta }
}
