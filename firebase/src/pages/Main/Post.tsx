import React from 'react'
import {Post as IPost} from "./Main";

interface Props{
    post: IPost;
}

export default function post(props: Props) {

    const {post} = props;

  return (
    <div className='postBox'>
        <div className='title'> <h1>{post.title}</h1> </div>
        <div className='body'><p>{post.description}  </p></div>
        <div className='footer'><p>@{post.username}  </p></div>
        <p>{post.userId}</p>
        <p>{post.id}</p>
    </div>
  )
}
