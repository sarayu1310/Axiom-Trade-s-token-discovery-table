import PulseLayout from '@components/templates/PulseLayout'
import TabsContainer from '@components/organisms/TabsContainer'
import ErrorBoundary from '@components/ErrorBoundary'

export default function PulsePage() {
  return (
    <PulseLayout>
      <ErrorBoundary>
        <TabsContainer />
      </ErrorBoundary>
    </PulseLayout>
  )
}
