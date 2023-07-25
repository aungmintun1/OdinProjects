import React from 'react'
import Axios from "axios";
import { useState} from 'react';

export default function Gif() {

    //this is the giphy API below

const [gif, setGif] = useState(null);

const createGif = (animal) => {

  Axios.get(`https://api.giphy.com/v1/gifs/search?api_key=1fWJNOTY6cuEfqkg4RgNMHDLhuwevds7&limit=1&q=${animal}`).then((res) => {
    setGif(res.data.data[0]);
    // API syntax can be tricky, data is the JSON object, and then data is the actual array in the API data and we grab the first object in that array
  });
}

  return (
    <> 
        <h1>Gif Generator</h1>

<button onClick={() => createGif("goat")}>goat</button>
<button onClick={() => createGif("cat")}>cat</button>
<button onClick={() => createGif("dog")}>dog</button>
<h2>name: {gif?.title} </h2>
<img src={gif?.images.downsized.url} alt="" />

    </>
  )
}
