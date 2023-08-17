import React from 'react'
import {useForm} from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup'
import{ addDoc, collection } from "firebase/firestore";
import{db} from "../../config/firebase";

import {auth} from "../../config/firebase";
import {useAuthState} from "react-firebase-hooks/auth";

import { useNavigate } from "react-router-dom";


export default function CreateForm() {

    const navigate = useNavigate();

    interface CreateFormData {
        title: string;
        description: string;
        }

    const schema = yup.object().shape({
        title: yup.string().required("a title is required!"), 
        description:  yup.string().required("a description is required!"), 
    })

    const {register, handleSubmit, formState: {errors}} = useForm<CreateFormData>({
        resolver: yupResolver(schema),
    });

    const[user] = useAuthState(auth);
    const postsRef = collection(db, "posts");   //references our db, and the name of the collection we want to add data to
    
    const onCreatePost = async (data : CreateFormData) => {

        await addDoc(postsRef,{
            title: data.title,
            description: data.description, 
            username: user?.displayName,
            userId: user?.uid,
        })

        navigate('/');
    };
    
  

  return (
    <div className='formSection'>
        <h1>post</h1>
        
        <form className='form' onSubmit={handleSubmit(onCreatePost)}>

            <input placeholder = "Title..." {...register("title")}/>
            <p>{errors.title?.message}</p>

            <textarea placeholder = "Description"  {...register("description")}/>
            <p>{errors.description?.message}</p>
            <input type= "submit" />
        </form>

    </div>
  )
}
