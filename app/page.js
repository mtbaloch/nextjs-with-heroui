"use client";
// we import button from heroui, as it's a third party ui library
import {Button} from "@heroui/react"
import React, {useState} from "react";


export default function Home() {
const [value, setValue] = useState(false)

const valueHanlder = ()=>{
  setValue(prev=>!prev)
}
  return (
  <>
  {/* here this button perfor onPress action and call the function */}
  {/* 
  button has different properties -> props
  color is one of them.
  size is one of them
  onPress is an eventHandler
  
  */}
  <Button onPress={valueHanlder} color="warning" size="lg">HeroUi Button</Button>

  <p>
{
  value && "Habib Khan"
}
  </p>


  </>
  );
}
