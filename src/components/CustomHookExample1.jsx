import React from 'react'
import useFetch from '../hooks/useFetch'

function CustomHookExample1() {
    const {loading, data} = useFetch('https://jsonplaceholder.typicode.com/posts', {})

    if (loading) {
        return <h2>Loading...</h2>
    }
  return (
      <div>
          {data.map((posts) => (
              <h4 key={posts.id}>{posts.title}</h4>
          ))}
    </div>
  )
}

export default CustomHookExample1