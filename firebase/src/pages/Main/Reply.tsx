import React, { useState } from 'react'
import {Reply as Ireply} from "./Comment";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../config/firebase';
import { addDoc, collection, deleteDoc, doc, documentId, getDocs, query, where } from 'firebase/firestore';
import Comment from './Comment';

interface Props{
    reply: Ireply;
}

export default function Reply(props: Props) {
    const {reply} = props;

    const [user] = useAuthState(auth);
    const[replyList, setReplyList] = useState<Props[]>([]);
    const[replyText, setReplyText] = useState<string | null>("");

 

//     const[replyCommentList, setReplyCommentList] = useState<string[]>([]);
//     const[replyCommentText, setReplyCommentText] = useState<string>("");

//     const inputReplyComment = (e : any) => {
//         setReplyCommentText(e.target.value)
//   }

//   const submitReplyComment = () => {
//     setReplyCommentList(prev => [...prev, replyCommentText]);
//     setReplyCommentText("");
// }



  return (
    <div className='replyBox'>
        <p>{reply.text} REPLIED BY: {reply.displayName} </p>

        <textarea placeholder='reply' ></textarea>
        <button>submit reply</button>

        <div className='replyList'>

       
      </div>



        {/* <textarea placeholder='reply' onChange={inputReplyComment} ></textarea>
        <button onClick={submitReplyComment}>submit reply</button>

        {replyCommentList?.map((reply) => 
        <p>{reply}</p>
        )} */}


    </div>
  )
}
