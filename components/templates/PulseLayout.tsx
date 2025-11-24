export default function PulseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-6">
      <div className="mb-4 text-2xl font-semibold">Pulse</div>
      {children}
    </div>
  )
}
