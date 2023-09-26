'use client'
import React, { useState } from 'react'

const AccordItem = ({header,text}) => {
    const [active,setActive]=useState(Boolean)
    const handleToggle = (event) => {
        event.preventDefault();
        setActive(!active);
      };
  return (
    <div className='flex flex-col '>
      <div className=" flex justify-between">
      <h1 className="question_text">{header}</h1>
    <button className='self-end' onClick={(e)=>{handleToggle(e)}} type="button">
        {!active? 
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="18" cy="18" r="18" fill="#D9D9D9"/>
<path d="M17.777 25.2095V11.3405H19.2845V25.2095H17.777ZM11.412 19.012V17.5715H25.6495V19.012H11.412Z" fill="black"/>
      </svg>:
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="18" cy="18" r="18" fill="#D9D9D9"/>
<path d="M17.777 25.2095V11.3405H19.2095H17.777ZM11.412  19.012V17.5715H25.6495V19.012H11.412Z" fill="black"/>
      </svg>
}
      </button>
     
      </div>
      <div
        className={`pl-[62px] duration-200 ease-in-out ${
          active ? "block" : "hidden"
        }`}
      >
        <p className="answer_text py-3  leading-relaxed ">{text}</p>
      </div>
  </div>
  )
}

export default AccordItem