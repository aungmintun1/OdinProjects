import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../App'

export default function BottomComp() 
{
  const{ name } = useContext(AppContext);
  return (
    <div> hey im the bottomcomp and my name is : {name} </div>
  )
}
