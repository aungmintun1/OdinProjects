import React, { useEffect, useState } from 'react'
import {Post as IPost} from "./Main";
import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore';
import { auth, db } from '../../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

interface Props{
    post: IPost;
}

interface Like {
  userId: string;
  likeId: string;
}

export default function Post(props: Props) {

    const {post} = props;
    const [user] = useAuthState(auth);
    const[likeAmount, setLikeAmount] = useState<Like[] | null >(null)

    const likesRef = collection(db, "likes");

    const addLike = async () => {
      try
     { const newDoc=await addDoc(likesRef, {userId: user?.uid, postId: post.id})
      // adds a doc to our collection in "likes"

      if(user){
      setLikeAmount((prev) => prev ? [...prev, { userId: user?.uid, likeId: newDoc.id}] : [{ userId: user?.uid ,likeId: newDoc.id}]);
      }}

      catch (err) {
        console.log(err)
      }
      };

      const removeLike = async() => {
        try {

          const likeToDeleteQuery = query(
            likesRef,
            where ("postId","==" , post.id),
            where("userId", "==" , user?.uid)
            );  

        const likeToDeleteData = await getDocs(likeToDeleteQuery);
        const deletedLikeId = likeToDeleteData.docs[0].id;
        const likeToDelete = doc(db, "likes", likeToDeleteData.docs[0].id);
        await deleteDoc(likeToDelete);

        if (user) {
        setLikeAmount ((prev) => prev && prev?.filter((like) => like.likeId !== deletedLikeId));
        }

        } catch (err) {
        console.log(err);
        }
        };

    
    const likesDoc = query(likesRef, where("postId" , "==", post.id))

    const getLikes = async () => {
     const data = await getDocs(likesDoc)
     setLikeAmount(data.docs.map((doc) =>({userId: doc.data().userId, likeId: doc.id})));
     // retrieves all the docs that comply with the condition in likesDoc, and we then get the length of the docs that have that condition, and set state.
    }

    const hasUserLiked = likeAmount?.find((like) => like.userId === user?.uid);


useEffect(() => {
  getLikes();

}, []);

  return (
    <div className='postBox'>
        <div className='title'> <h1>{post.title}</h1> </div>
        <div className='body'><p>{post.description}  </p></div>
        <div className='footer'><p>@{post.username}  </p></div>
        <button onClick={hasUserLiked ? removeLike : addLike}> {hasUserLiked ? <>&#128078;</> : <>&#128077;</>} </button>
       { likeAmount && <p>likes:{likeAmount?.length}</p>}
    </div>
  )
}

/*
ADDING LIKES

1. create the button
2. we can add a like property in out posts object. however we wouldn't know who liked and set a limit to likes
3. we first make a new collection "likes" in firebase
4. we make a property {userId, postId}. everytime someone likes a post, the postID(ID of the post ) and userID (person who liked) 
  gets sent to the database.

5. we then add the likesRef. To reference the collection
6. we then add a addLike() function in order to add a like to our collection.

   a. we declare it as an async function
   b. we use the addDoc() function to add a document to our collection. 
   we also reference what fields we want to have in the document that we will send to the database

7. we import the useAuthState() function to get information from the logged in user
  const [user] = useAuthState(auth);

8. add in the data for the documents. we get user.uid from auth and post id from the prop
const addLike = async () => {
await addDoc(likesRef, {userId: user?.uid, postId: post.id})

9. add addLike() to the onclick EL of the button

HOW TO DISPLAY LIKES:

1. import query from firestore
import { addDoc, collection, query } from 'firebase/firestore';

2. we must specify exactly what document we want. similar to likesRef
we specify what collection we want. now its for the document.

const likesDoc = query(likesRef, where("postId" , "==", post.id))

we reference the collection with likesRef. next we use the where() function to reference a specific document with a condition.
In this condition, we are comparing the postId field in our DB and comparing it to the post.id that we are currently in.

b. create a useState for the number of likes for each post and add a likes <p> tag
 const[likeAmount, setLikeAmount] = useState<number | null >(null)
{ likeAmount && <p>likes:{likeAmount}</p>}
   

3. create getLikes();  //sets the amount of likes in the state and then is used to display the like

  this function is used to retrieve all the documents that comply with the condition in likesDoc, it will then be returned as an object "data".
   we then get the amount of all documents that comply with the condition that is in likesDoc() with the .length
   With that variable we put it in our setLikeAmount() function to display the number of likes.

  const getLikes = async () => {
     const data = await getDocs(likesDoc)
     setLikeAmount (data.docs.length);
    }

4. create the useEffect. everytime a post component is mounted it will activate the 
    getLikes() function

      useEffect(() => {
      getLikes();

      }, []);


HOW TO REMOVE A LIKE: how to show a thumbs down emoji if the user has liked already

1. change the state into an array. in order to remove a like we have to remove a doc from the array.
const[likeAmount, setLikeAmount] = useState<Like[] | null >(null)

interface Like {
  userId: string;
}

2.in getLikes(); change the set state function to get the id from the document and to map through the array.
setLike(data.docs.map((doc) =>({userId: doc.data().userId })));

3. the hasUserLiked() function goes through the array, finds the element that satisfys the condition and returns a true or false
const hasUserLiked = likeAmount?.find((like) => like.userId === user?.uid);

b. change the button. if hasUserLiked is true it will display a thumbs down, if not it will display a thumbs up
  <button onClick={addLike}> {hasUserLiked ? <>&#128078;</> : <>&#128077;</>} </button>

4. go into addLikes(); add set state function to add to the array when the function activates. the set state will have previous elements and add the new userId string
   to the array. We also have a try and catch, if the try is successful everything runs if not it logs an error.

   we also have an if statement where if user is true it will run the set state function.

const addLike = async () => {
      try
     { await addDoc(likesRef, {userId: user?.uid, postId: post.id})
      // adds a doc to our collection in "likes"

      if(user){
      setLikeAmount((prev) => prev ? [...prev, { userId: user?.uid }] : [{ userId: user?.uid }]);
      }}
      
      catch (err) {
        console.log(err)
      }
      };

  HOW TO REMOVE LIKE: REMOVE YOUR LIKE

  1. add the removeLike() function which is very similar to the addLike function. 
     
     we first use the query in order to reference the specific document with the postId and userId matching. this is to find the post that the user already liked.

     we then use getDocs to retrieve the referenced documents

     likeToDeleteData is going to be the document that satisfys the condition in an object.

     likeToDelete is going to go into the database, into likes collection, and then get the first document in the likeToDeleteData object, and to the id property.

     deleteDoc() is going to delete the document that is referenced as the parameter

   const removeLike = async() => {
        try {

          const likeToDeleteQuery = query(
            likesRef,
            where ("postId","==" , post.id),
            where("userId", "==" , user?.uid)
            );  

        const likeToDeleteData = await getDocs(likeToDeleteQuery);
        const likeToDelete = doc(db, "likes", likeToDeleteData.docs[0].id);
        await deleteDoc(likeToDelete);

        const likeId = likeToDeleteData.docs[0].id;

        if (user) {
        setLikeAmount ((prev) => prev && prev?.filter((like) => like.likeId !== likeId));
        }

        } catch (err) {
        console.log(err);
        }
        };

    b. setting up the set state function.

       we add a likeId to our interface Like. This is so that we can reference the id of the like as well as the userId. now our array stores "like" objects that have userId and likeId.

       we filter the array and if the like.deletedLikeId doesn't match with the likeId we just deleted then we keep that element in that array. if it does match we remove that element.

       we have a likeId variable that is used to reference the id of the like document the user clicked on.
       

 2. change the OnClick event listener. if the hasUserLiked is true then the removeLike function activates if not the adddLike function activates

 <button onClick={hasUserLiked ? removeLike : addLike}>

 3. change the logic in the firebase rules so user can delete
        	allow read,delete: if request.auth != null;

*/
