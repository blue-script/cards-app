import { Button } from '@/components/ui/button/button'
import { Typography } from '@/components/ui/typography'

export function App() {
  return (
    <>
      <div>Hello</div>
      <Button>simple button</Button>
      <div>hi</div>
      <Button as={'a'} href={'www.google.com'}>
        Link
      </Button>
      hi2
      <Typography tag={'body1'}>123</Typography>
    </>
  )
}
