import {useEffect, useMemo, useRef, useState} from 'react'

function UseMemoExample() {
  const [num, setNum] = useState(1)
  const [inc, setInc] = useState(0)

  // const sqrt = getSqrt(num)
  const sqrt = useMemo(()=> getSqrt(num), [num])

  const render = useRef(1)

  const onClick = () => {
    setInc((prev) => {
      console.log(prev + 1)
      return prev + 1
    })
  }
  
  useEffect(() => {
    render.current = render.current + 1
  })
  return (
    <div>
      <input type="number" value={num} onChange={(e)=>setNum(e.target.value)} />
      <h3>Render = {render.current}</h3>

      <h2>The square root of {num} is {sqrt}</h2>
      <button onClick={onClick}>Re render</button>
    </div>
  )
}

function getSqrt(n) {
  for (let i = 0; i <= 10000; i++){
    console.log(i)
  }

  console.log('Expensive function called');
  return Math.sqrt(n)
}

export default UseMemoExample