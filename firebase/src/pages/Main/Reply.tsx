import React, { useEffect, useState } from 'react'
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

    const[replyCommentList, setReplyCommentList] = useState<Ireply[]>([]);
    const[replyCommentText, setReplyCommentText] = useState<string>("");

    const inputReplyComment = (e : any) => {
        setReplyCommentText(e.target.value)
  }

  const replysRef = collection(db, "replys");
  const addReply = async () => {
    try
{ 
if(user){

  const newDoc = {
    userId: user.uid,
    displayName: user.displayName || '',
    commentId: reply.commentId,
    text: replyCommentText || '',
    replyId: reply.id,

  };

  await addDoc(replysRef, newDoc);
  setReplyCommentList(prev => prev ? [...prev, newDoc] : [newDoc])

}
}

catch (err) {
  console.log(err)
}
  
}
// where("replyId", "==", reply.id

const replysDoc = query(replysRef, where("commentId" , "==", reply.commentId)) 
const getReplys = async () => {
  const data = await getDocs(replysDoc);
  setReplyCommentList(data.docs.map((doc) => ({ ...doc.data()})) as Ireply[] );
}

useEffect(() => {
  getReplys();
}, []);






  return (
    <div className='replyBox'>
        <p>{reply.text} REPLIED BY: {reply.displayName} </p>

        <textarea placeholder='reply' onChange={inputReplyComment}></textarea>
        <button onClick={addReply}>submit reply</button>

        <div className='replyList'>

       {replyCommentList.map((replyComment) => 
        
          // <Reply reply={replyComment} />
          <p>{replyComment.text}</p>
        
        )}
        
      </div>



        {/* <textarea placeholder='reply' onChange={inputReplyComment} ></textarea>
        <button onClick={submitReplyComment}>submit reply</button>

        {replyCommentList?.map((reply) => 
        <p>{reply}</p>
        )} */}


    </div>
  )
}
