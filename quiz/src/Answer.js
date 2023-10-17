import React, {useState, useEffect} from 'react'
import './App.css'

export default function Answer(props) {

    const [color, setColor] = useState("")

    const check = () => {

        props.click();

        if (props.choice){
            setColor("green")
        }

        else{
        setColor("red")
        }
    }

    useEffect(() => {
        // If the reset prop is true, reset the color
        if (props.reset) {
            setColor('');
        }
    }, [props.reset]);

  return (
    <>
    <button onClick={check} className = {`answerBtn ${color} `}>{props.text}</button>
    </>
  )
}
