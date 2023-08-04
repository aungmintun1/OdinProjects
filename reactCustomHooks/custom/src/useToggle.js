import React from 'react'
import {useState,} from "react";

export default function useToggle() {

    const [isVisible, setVisible]= useState(false);

    const toggle = () => {
        setVisible((text) => !text);
    }

   
    return[isVisible, toggle ,];
}
