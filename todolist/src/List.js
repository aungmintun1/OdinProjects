import React from 'react'

export default function List({todo}) {
  return (
    <div>
        

    {todo.map((task) => {

    return <h1>{task}</h1>
    })}

    </div>
  )
}
