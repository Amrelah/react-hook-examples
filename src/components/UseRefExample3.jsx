import React, { useState } from 'react'
import Todo from './Todo'

function UseRefExample3() {
    const [showTodo, setShowTodo] = useState(false)
  return (
      <div>
          {showTodo && <Todo />}
          <button
              className='btn btn-primary'
              onClick={()=>setShowTodo(!showTodo)}
          >on/off</button>
    </div>
  )
}

export default UseRefExample3