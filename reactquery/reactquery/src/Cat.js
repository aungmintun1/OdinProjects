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

/*
6. import useQuery and import axios. axios is for the fetch
7. declare and initialize the useQuery function. data will be the JSON object and refectch is used to refetch. 
There is an id for the JSON and the function that is used to fetch the data from the API.
8.you can now access the API data by using the data variable as an object.
9. also note that you can use the refetch function in order to refetch the data again.

*/