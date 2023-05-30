import React, { useState, useEffect } from 'react';
import InputShortner from "../components/InputShortner/InputShortner";
import LinkResult from '../components/InputShortner/LinkResult';
import "../App.css"
import History from '../components/History/History';



const Home = () => {
    const [inputValue, setInputValue] = useState("");
    useEffect(() => {
      const history =  window.localStorage.setItem("history",JSON.stringify([]) )
      console.log({history})
     },[]);
  return (
    <div className="app">
 
    <div className="container">
     <InputShortner setInputValue={setInputValue}/>
     <LinkResult inputValue={inputValue}/>
     {/* <History/> */}
     </div>

    </div>
  )
}

export default Home