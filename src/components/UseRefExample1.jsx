import {useRef} from 'react'

function UseRefExample1() {
    const inputRef = useRef()
    const h1Ref = useRef()

    const submit = (e) => {
        e.preventDefault()
        inputRef.current.value = 'typed in'
        inputRef.current.style.backgroundColor = 'blue'
        h1Ref.current.innerText = 'now'

    }
    return (
        <div>
            <form onSubmit={submit}>
                <input type='text' ref={inputRef} id='name'/>
                <button type="submit">Submit</button>
                <h1 ref={h1Ref} onClick={()=>{inputRef.current.focus()}}>hello</h1>
            </form>
            
        </div>
    )
}

export default UseRefExample1