import React from 'react'
import { useQuery } from "@tanstack/react-query";
import Axios from "axios"

export default function Cat() {
    const {data, refetch} = useQuery(["cat"], () => {
        return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
    });

  return (
    <div>
        <h2> {data?.fact} </h2>
    <button onClick={refetch}>press for a cat fact</button>
    </div>
  )
}
