import React from 'react'
import "./fade.css"

import { useState, useRef, useEffect} from 'react';

export default function Scroll(props) {

  const [view, setView] = useState(false);
  const img = useRef(null);


  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setView(true);
            } else {
                setView(false);
            }
        });
    });

    if (img.current) {
        observer.observe(img.current);
    }

    // Cleanup: Unobserve the target when component unmounts
    return () => {
        if (img.current) {
            observer.unobserve(img.current);
        }
    };
}, []); // Empty dependency array means this useEffect runs once after component mounts

  return (
    <>

<div className="box">


    <img ref={img} className={`card ${view ? "fade" : ""}`} src={props.pic} alt="" />


    {/* <img ref ={img} className ={`card ${view ? "fade" : ""}`} src={image1} alt="" />
    <img ref ={img} className ={`card ${view ? "fade" : ""}`} src={image2} alt="" />
    <img ref ={img} className ={`card ${view ? "fade" : ""}`} src={image3} alt="" />
    <img className = "card" src={image1} alt="" />
    <img className = "card" src={image2} alt="" />
    <img className = "card" src={image3} alt="" />
    <img className = "card" src={image1} alt="" />
    <img className = "card" src={image2} alt="" />
    <img className = "card" src={image3} alt="" /> */}

</div>
    
    </>
  )
}

// 1. npm i react-reveal --save --legacy-peer-deps

// 2. wrap the Fade tag around the divs that you want to have the fade with

// 3. read documenation that deals with how you can modify the fade
