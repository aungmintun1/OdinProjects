
import { useState } from 'react';
import './App.css';
import Comment from './Comment';
function App() {
  const [comment,setComment] = useState([]);
  const [commentText,setCommentText] = useState("");

  const inputText = (e) => {
    setCommentText(e.target.value)
  }
const submit = () => {

    setComment([ commentText, ...comment])
}

  return (
    <div className="App">

    <input type="text" onChange={inputText} />
    <button onClick={submit}>submit</button>

    <div className='List'>

    {comment.map((text) => 
    <Comment text ={text} />
    )}

    </div>

    </div>
  );
}

export default App;
