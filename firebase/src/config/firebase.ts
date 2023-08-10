// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import{getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5Y4dffQjo_LyhSCqXOs0DnYQ8b_wvzRg",
  authDomain: "react-blog-582f7.firebaseapp.com",
  projectId: "react-blog-582f7",
  storageBucket: "react-blog-582f7.appspot.com",
  messagingSenderId: "624471080885",
  appId: "1:624471080885:web:828d77fa6e090eed2be3fc",
  measurementId: "G-ZD43S68QPY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(); 
export const db = getFirestore(app);

/*
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// tells firebase we have authentication and we use google as the provider

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(); 
// export all these functions

*/

/*
DATABASE:

1.import{getFirestore} from "firebase/firestore";
2.export const db = getFirestore(app)

go to form component:
1.import:
import{ addDoc, collection } from "firebase/firestore";
import{db} from "../config/firebase";
import {auth} from "../config/firebase";
import {useAuthState} from "react-firebase-hooks/auth";

//adds a collection with addDoc() and collection() allows us to identify which collection in our database

2.const postsRef = collection(db, "posts");   //references our db, and the name of the collection we want to add data to
  //addDoc specifys what data info we are going to send to the collection we selected

3.const[user] = useAuthState(auth); // this adds the auth hook. user will be an object now

  4.
  in our onsubmit function which is onCreatePost(), we will define what is going to be sent using addDoc() function, postsRef will be taken as an argument.
  const onCreatePost = async (data : CreateFormData) => {

        await addDoc(postsRef,{
            title: data.title,
            description: data.description, 
            username: user?.displayName,
            id: user?.uid,

        })
    };

    note that you can do this. which adds everything from data to the collection.
            ...data,
            username: user?.displayName,
            id: user?.uid,
5. go into firebase posts, and go to rules 

  allow write, delete, update: if request.auth != null && request.auth.uid == request. resource.data.userId;
  allow read: if request.auth != null;

 //this states that if the user id from auth matches with the UserId property in our object then you can submit this form
 // if a user is logged in they can read posts



*/
