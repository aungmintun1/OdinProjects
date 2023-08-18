import React, { useEffect, useState } from 'react'
import { addDoc, collection, deleteDoc, doc, documentId, getDocs, query, where } from 'firebase/firestore';
import { auth, db } from '../../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import {Comment as IComment} from "./Post";


interface Props{
    comments: IComment;
}

interface Reply{
  userId: string | '';
  commentId: string;
  text: string | '';
  
}

export default function Comment(props: Props) {
    const {comments} = props;
    const [user] = useAuthState(auth);
    const[replyList, setReplyList] = useState<Reply[]>([]);
    const[replyText, setReplyText] = useState<string | null>("");

    const inputReply = (e : any) => {
      setReplyText(e.target.value)
}

 
    const replysRef = collection(db, "replys");
      const addReply = async () => {
          try
     { const newDoc = await addDoc(replysRef, {userId: user?.uid, commentId: comments.id, text: replyText || '',})
      

      if(user){
      setReplyList((prev) => prev ? [...prev, { userId: user?.uid, commentId: newDoc.id ,text: replyText || ''}] : [{ userId: user?.uid ,commentId: newDoc.id ,text: replyText || ''}]);
      }}

      catch (err) {
        console.log(err)
      }
        
      }

      const replysDoc = query(replysRef, where("commentId" , "==", comments.id)) 
      /* this allows us to get the documents in our replys collection that ONLY have the commentId equal to the firebase id of the comment that was replied to.
          It basically grabs all the reply docs that are related to the comment that was replied to. note that you have to put it in getDocs();  */

      const getReplys = async () => {
        const data = await getDocs(replysDoc);
        setReplyList(data.docs.map((doc) => ({ ...doc.data(), commentId: doc.id })) as Reply[] );
      }

      useEffect(() => {
        getReplys();
      }, []);


  return (
    <div>

<div className='commentList'>

   <p>posted by:{comments.displayName}  <br /> : {comments.comment}  </p>

   <textarea placeholder='reply' onChange={inputReply}></textarea>
   <button onClick={addReply}>submit reply</button>

   <div className='replyList'>

   {replyList?.map((reply) => 
      
      <div>
        <p>{reply.text}</p>
      </div> )}

   </div>

</div>


    </div>
  )
}

/*
How to make reply

first of all i had to reconstruct my comment section, take it out of the post component and then make its own component which is Comment.tsx 
This is because I want to access the commentId of each "comment" object so i can reference it in the replys field in commentID.

so i make a new component called Comment.tsx and I take in each object in commentList as a prop. I also take in the userAuth.
I also declare 2 states, one that will store my reply objects in an array and another that will be used to setup the text in the reply object

 const {comments} = props;
    const [user] = useAuthState(auth);
    const[replyList, setReplyList] = useState<Reply[]>([]);
    const[replyText, setReplyText] = useState<string | null>("");

    I then make a simple function that is used to setup the reply text whenever a user types in the reply text area
    const inputReply = (e : any) => {
      setReplyText(e.target.value)
}
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
I make a collection in firebase called "replys"
we make a reference to the collection.
We then make a function that adds a document to the collection.
its going to add a document in "replys" that has the following fields. 

in commentsId field, i am able to reference the comments.id through the prop object. 
Also in my setState i set the commentId field through the object i created newDoc. I then put newDoc.id in order to put the id of the comment.

and then we're going to add that object to our replyList

 const replysRef = collection(db, "replys");
      const addReply = async () => {
          try
     { const newDoc = await addDoc(replysRef, {userId: user?.uid, commentId: comments.id, text: replyText || '',})
      

      if(user){
      setReplyList((prev) => prev ? [...prev, { userId: user?.uid, commentId: newDoc.id ,text: replyText || ''}] : [{ userId: user?.uid ,commentId: newDoc.id ,text: replyText || ''}]);
      }}

      catch (err) {
        console.log(err)
      }

      Next we're going to setup our getReplys(); which will be used in our useEffect in order to display the text each refresh

       const replysDoc = query(replysRef, where("commentId" , "==", comments.id)) 
      this code above,allows us to get the documents in our replys collection that ONLY have the commentId equal to the firebase id of the comment that was replied to.
          It basically grabs all the reply docs that are related to the comment that was replied to. note that you have to put it in getDocs();  

          const getReplys = async () => {
            const data = await getDocs(replysDoc);  // gets all the reply docs and puts it in data
            setReplyList(data.docs.map((doc) => ({ ...doc.data(), commentId: doc.id })) as Reply[] ); 
             // not exactly sure if i need to put commentId: doc.id, it still works without it.
          }
    
          useEffect(() => {
            getReplys();
          }, []);
    
    
          How to make a reply to a reply?
          I believe I will have to make another reply component so i can reference the reply id, and have each reply component have it's own textarea,submitbutton,
          and each reply will have its own array of replies.

          collection "replyComments"
          and it will reference the replyId

*/