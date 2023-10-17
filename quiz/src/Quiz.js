import React, { useState } from 'react'
import './App.css'
import Answer from './Answer';

export default function Quiz() {

  const questions = [
    {
      id:1,
      question: "Which property is used to change the background color of an element?",
      answer1: {text: "background-color", choice: true},
      answer2: {text: "color", choice: false},
      answer3: {text: "bg-color", choice: false},
  
    }
    ,

    {
      id: 2,
      question: "Which property is used to set the font style of an element?",
      answer1: { text: "font-weight", choice: false },
      answer2: { text: "font-style", choice: true },
      answer3: { text: "font-color", choice: false },
  },
  {
      id: 3,
      question: "What does the 'flex' property do in CSS?",
      answer1: { text: "Defines the flexibility of a border.", choice: false },
      answer2: { text: "Sets the color of a flexible box.", choice: false },
      answer3: { text: "Sets the ability of a flexible item to alter its dimensions.", choice: true },
  },
  {
      id: 4,
      question: "Which unit is not relative to the current font-size?",
      answer1: { text: "em", choice: false },
      answer2: { text: "px", choice: true },
      answer3: { text: "rem", choice: false },
  },
  {
      id: 5,
      question: "How can you add a comment in a CSS file?",
      answer1: { text: "// This is a comment", choice: false },
      answer2: { text: "/* This is a comment */", choice: true },
      answer3: { text: "<!-- This is a comment -->", choice: false },
  }
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex(index+1)
    setButtonState(false)
    
    setReset(true)
    setTimeout(() => {
      setReset(false);
  }, 100);

  }

  const [buttonState, setButtonState] = useState(false);

  const handleButtonClick = () => {
      setButtonState(true);
  };

  const [reset, setReset] = useState(false);


 

  return (
    <>

    <div class="container">
    <h1>Question# {questions[index].id}</h1>

    <p>{questions[index].question}</p>    

    <Answer reset= {reset} click= {handleButtonClick} text={questions[index].answer1.text} choice={questions[index].answer1.choice}/>
    <Answer reset= {reset} click= {handleButtonClick} text={questions[index].answer2.text} choice={questions[index].answer2.choice}/>
    <Answer reset= {reset} click= {handleButtonClick} text={questions[index].answer3.text} choice={questions[index].answer3.choice}/>

    {buttonState && <button onClick={next}>Next Question</button>}

    </div>

    </>
  )
}
