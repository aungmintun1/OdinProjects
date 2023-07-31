import React from 'react'
import BottomComp from './BottomComp'
import { useContext } from 'react'
import { AppContext } from '../App'

export default function TopComp() {
  const{ name } = useContext(AppContext);
  return (
    <>
    <div>this is my name: {name} </div>
    <BottomComp/>
    </>
  )
}
