import React from 'react'
import "./card.css"
import {AiOutlineMail, AiOutlineLinkedin} from "react-icons/ai"
const card = () => {
  return (
    <>
    <div className="card-container">
            <div className="minCard minCardo card">
              <img src="./images/alok.png" alt="" />
             

              <span> <AiOutlineMail></AiOutlineMail><AiOutlineLinkedin/></span>
            </div>
            </div>
    </>
  )
}

export default card