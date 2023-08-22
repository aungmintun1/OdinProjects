import React from 'react'
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useState, useEffect } from 'react';
import Post from './Post';

export interface Post {
  id: string;
  userId: string;
  title: string;
  username: string;
  description: string;
  }

export default function Main() {


  
  const [postsList, setPostsList] = useState<Post[] | null>(null);

  const postsRef = collection (db, "posts"); 
  const getPosts = async () => {
    const data = await getDocs(postsRef);
    setPostsList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Post[] );
  }

  useEffect(() => {
    getPosts();

  }, []);

  return (
    <div className='main'>
        <h1>main page</h1>

        <div>

          {postsList?.map((post) => 
      
          <Post post={post}/> )}

        </div>
    </div>
  )
}




/*
HOW TO DISPLAY DATA FROM FIREBASE ON WEBSITE

//note that we are not going to use a fetch because we are using
functions from firebase which are already going to handle that for us

1.we import from out collection in the data base with 
import { getDocs, collection } from "firebase/firestore";
import { db } from "../config/firebase";
//declare postsRef
const postsRef = collection (db, "posts"); 

2. set state for our posts and getPosts(). The state is going to be the array containing all the posts in our database
 const [postsList, setPostList] = useState<Post[] | null>(null); // note that the state is identified as Post type in an array or null type 

 b. getPosts() is going to be like a fetch function. 

    "data" is going to be the collection stored as an object
    postsRef: is the collection that we are referencing.In this case we are referencing the "posts" collection from our database.
    getDocs(): is the function that actually gets the documents from the collection that you reference. in this case we use postsRef in order to reference the "posts" colleciton we made

   const getPosts = async () => {
    const data = await getDocs(postsRef);
    setPostsList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Post[] ); 
  }

  note: if you want to console log each of the documents in your collection do so like this. data is the collection, docs is the list of docs in a object, and you map over each element in docs.
  console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

  everytime the data is fetched from the colletion posts, a new object will created and stored into the state array, its gets the document object from doc.data(), 
  and it appends a new property "id" with the value of doc.id
  note that user.Id and id are randomly generated in firebase. user.Id is part of the document fields, and id is the actual id of the document itself.


3.set up interface

interface Post {
id: string;
userId: string;
title: string;
username: string;
description: string;
}

4. set the useEffect hook. Everytime the component is mounted the getPosts() function activates
};
useEffect ( ( )
getPosts();
}, []);

5. map through the posts and create a "Post" component and map through all the elements
        <div>
          {postsList?.map((post) => 
          
          <Post post={post}/> )}      // post is passed as an object that comes from the state array
        </div>
    
  this code basically loops through the array state postsList, each time an element is looped through it produces a Post component which has the data as an object prop.
  A map function is basically creating a new array by looping through the existing array and modifying the elements in the original array.
   however in this case with JSX we are producing the output of the function and storing in a tag instead of an element.

   Process:
   1. component mounts
   2. getPosts() activates and fetches data from firebase
   3. the data object gets sent to the state array
   4. the map function that uses the state array activates and loops through each post in the array. every time it loops through an element
      the data of the post gets sent to the post component as a prop. 
      
      Basically the map function creates a loop, producing a Post component of all the elements in the state array.
      
*/