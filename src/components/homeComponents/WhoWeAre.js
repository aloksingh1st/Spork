import React from 'react'
import "./WhoWeAre.css"
import { NavLink } from 'react-router-dom'

const WhoWeAre = () => {
  return (
    <>
    {/* <div className="container-joinus"> */}
    <div className="left-right-container">
    <div className="left switch-left">
      <h1>Who We Are ?</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ducimus repellat cum eaque?</p>
      <a href="/about">Know More</a>
      {/* <NavLink to={"about"}>Know More</NavLink> */}
    </div>

    <div className="right">
      <img src="./images/question.png" alt=""/>
    </div>

    </div>
    {/* </div> */}
    </>
  )
}

export default WhoWeAre