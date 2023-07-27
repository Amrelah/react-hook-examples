import useLocalStorage from '../hooks/useLocalStorage'

function CustomHookExample2() {
  const [task, setTask] = useLocalStorage('task','')
  const [tasks, setTasks] = useLocalStorage('tasks', [])
  
  const onSubmited = e => {
    e.preventDefault()

    const taskObj = {
      task,
      completed: false,
      date: new Date().toLocaleDateString()
    }

    setTasks([...tasks, taskObj])
  }

  return (
    <>
    <form onSubmit={onSubmited}>
      <div>
        <label>Task</label>
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
        <button type="submit">Add</button>
      </div>
      </form>
      <hr />
      
      {tasks.map((task, index) => (
        <h3 key={index}>{task.task}</h3>
      ))}
      </>
  )
}

export default CustomHookExample2