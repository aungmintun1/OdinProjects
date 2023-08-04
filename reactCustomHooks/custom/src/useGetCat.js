import React from 'react'
import { useQuery } from "@tanstack/react-query";
import Axios from "axios"

export default function useGetCat() {
  
    const {data, refetch} = useQuery(["cat"], () => {
        return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
    });

    const onRefetch = () => {
        alert("refetched data from API")
        refetch()

    }

    return {data, onRefetch};

}
