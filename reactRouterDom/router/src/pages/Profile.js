import React from 'react'
import { useParams } from 'react-router-dom';

export default function Profile() {
    let {username} = useParams();
    
  return (
    <div>This is the profile page of {username}</div>
  )
}
