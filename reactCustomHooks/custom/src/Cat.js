import React from 'react'
import useGetCat from './useGetCat';

export default function Cat() {

    const {data, onRefetch,} = useGetCat();

  return (
    <div>
        <h2> {data?.fact} </h2>
    <button onClick={onRefetch}>press for a cat fact</button>
    </div>
  )
}