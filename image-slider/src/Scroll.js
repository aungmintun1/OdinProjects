import React from 'react'
import "./fade.css"
import Fade from "react-reveal/Fade"

export default function Scroll() {
  return (
    <>
<div className="container">
<Fade top> 

<div className="card"></div>
<div className="card"></div>
<div className="card"></div>
<div className="card"></div>
<div className="card"></div>
<div className="card"></div>
<div className="card"></div>
<div className="card"></div>
<div className="card"></div>

</Fade>
</div>
    
    </>
  )
}

// 1. npm i react-reveal --save --legacy-peer-deps

// 2. wrap the Fade tag around the divs that you want to have teh fade with

// 3. read documenation that deals with how you can modify the fade
