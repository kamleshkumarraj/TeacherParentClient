import { useState } from 'react'

function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <>
      <h1 className='text-red-500' >Hello World !</h1>
    </>
  )
}

export default App
