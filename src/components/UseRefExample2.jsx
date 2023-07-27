import {useEffect, useRef, useState} from "react"

function UseRefExample2() {

    const renders = useRef(1)
    const prevName = useRef('')
    const [name, setName] = useState('')

    useEffect(() => {
        renders.current = renders.current + 1
        prevName.current = name
    },[name])

    return (
        <div>
            <h2>Renders: {renders.current}</h2>
            <h2>prevName: {prevName.current}</h2>
            <input
                type="text"
                value={name}
                onChange={(e)=> setName(e.target.value)}
            />
        </div>
    )
}

export default UseRefExample2