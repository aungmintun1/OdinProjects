import React, { useState } from 'react'

export default function Comment(prop) {

    const [commentReplys, setCommentReplys] = useState([])
    const [replyText, setReplyText] = useState("")

    const inputText = (e) => {
        setReplyText(e.target.value)
      }
    const submitReply = () => {
    
        setCommentReplys([ replyText, ...commentReplys])
    }
    

  return (

    <div className='Comment' >
        <p>{prop.text}</p>
        
        <div className='replyTextArea'>

        <textarea name="" id="" cols="30" rows="4" onChange={inputText}></textarea>
        <button onClick={submitReply}>submit reply</button>

        <div className='replyList'>

        {commentReplys?.map((text) => 
            <div className='blueBox'>
            <Comment text ={text} />
            </div>
        )}

        </div>


        </div>

    </div>
  )
}
