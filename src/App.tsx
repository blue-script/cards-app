import { Button } from '@/components/ui/button/button'

export function App() {
  return (
    <>
      <div>Hello</div>

      <Button>simple button</Button>

      <Button as={'a'} href={'www.google.com'}>
        Link
      </Button>
    </>
  )
}
