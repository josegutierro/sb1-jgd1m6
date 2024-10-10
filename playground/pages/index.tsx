import { Button, Card, Input } from 'stowlog-ui'

export default function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Stowlog UI Playground</h1>
      <Card style={{ padding: '20px', marginBottom: '20px' }}>
        <h2>Button Component</h2>
        <Button>Click me</Button>
      </Card>
      <Card style={{ padding: '20px' }}>
        <h2>Input Component</h2>
        <Input placeholder="Enter text" />
      </Card>
    </div>
  )
}