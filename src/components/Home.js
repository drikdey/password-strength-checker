import React, { useEffect, useRef, useState } from "react";
import  Strength from "./Strength"
 
export default function Home() {
  const [show, setShow] = useState(true);
  const buttonValue = show ? "Hide" : "Show";
  const [inputValue,setInputValue] = useState('');
  const inputRef = useRef();
  const changeShow = () => {
    setShow(!show);
  };
  const onButtonClick  = () => {
    inputRef.current.value = "";
    setInputValue('');
  };
  useEffect(() => {

  },[show,inputValue]);

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
      <h1>Welcome to my dummy project</h1>
      <h3>Enter your password</h3>
      <input placeholder="Your Password" type={show? "text" : "password"} ref={inputRef} onChange={() => {setInputValue(inputRef.current.value)}}></input>
      <div style={{display:"flex", justifyContent: "space-between", marginTop:"10px"}}>
      <button style={{marginRight: "40px"}} onClick={changeShow}>{buttonValue}</button>
      <button onClick={onButtonClick}>Clear Text</button>
      </div>
      <div style={{marginTop: "10px"}}>
        <Strength inputValue={inputValue}/>
      </div>
    </div>
  );
}
