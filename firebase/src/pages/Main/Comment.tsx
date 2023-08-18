import React from 'react'
import { addDoc, collection, deleteDoc, doc, documentId, getDocs, query, where } from 'firebase/firestore';
import { auth, db } from '../../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import {Comment as IComment} from "./Post";


interface Props{
    comments: IComment;
}
export default function Comment(props: Props) {
    const {comments} = props;

  return (
    <div>

<div className='commentList'>

   <p>posted by:{comments.displayName}  <br /> : {comments.comment}  </p>

</div>


    </div>
  )
}
