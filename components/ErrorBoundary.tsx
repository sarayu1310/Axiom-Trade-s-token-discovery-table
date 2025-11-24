"use client"
import { Component, ReactNode } from 'react'

type Props = { children: ReactNode }
type State = { hasError: boolean }

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  render() {
    if (this.state.hasError) {
      return <div className="rounded bg-red-500/10 p-3 text-sm text-red-300">Something went wrong</div>
    }
    return this.props.children
  }
}
