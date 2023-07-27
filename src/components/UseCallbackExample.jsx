import { Button } from 'bootstrap'
import React, { useCallback, useState } from 'react'

function UseCallbackExample() {

    const [tasks, setTasks] = useState([])

    const addTask = useCallback(() => {
        setTasks((prevState) =>
            [...prevState, 'Some Task']
        )
    }, [setTasks])
  return (
      <div>
          <Buttons addTask={addTask} />
          {tasks.map((task, index) => (
              <p key={index}>{task}</p>
          ))}
      </div>
  )
}

const Buttons = React.memo(({ addTask }) => {
    //after we use useCallback hook this log is not shown that means the 
    //callback is saved and it will use it whenever we pass the same parameters
    console.log('Button clicked');              
    return <div>
        <button onClick={addTask}>Add Task</button>
    </div>
} )
export default UseCallbackExample