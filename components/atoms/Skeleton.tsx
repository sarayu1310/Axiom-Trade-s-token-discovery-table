"use client"
import { cn } from '@lib/utils'

type Props = {
  className?: string
}

export default function Skeleton({ className }: Props) {
  return <div className={cn('skeleton rounded', className)} />
}
