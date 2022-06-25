import React from 'react'
import "./WhatWeDo.css"

const WhatWeDo = () => {
  return (
    <>
     <section class="section-third" id="section-third">
      <h2>What We Do ?</h2>
      <p>
        Lamet minim mollit non deserunt ullamco est sit aliq do amet sint. Velit
        officia consequat
      </p>
      <div class="section-third-task">
        <div class="task-1">
          <img src="./images/book-glp.gif" width={"10000rem"} alt="icon1" />
          <h3>Learn with us</h3>
          <p>
            Lamet minim mollit non deserunt ullamco est sit aliq do amet sint.
            Velit officia consequat
          </p>
        </div>

        <div class="task-2">
          <img src="images/light.gif" alt="icon1" />
          <h3>Build with us</h3>
          <p>
            Lamet minim mollit non deserunt ullamco est sit aliq do amet sint.
            Susbcribe to ThapaTechncial.
          </p>
        </div>

        <div class="task-3">
          {/* <img src="images/rocket.gif" alt="icon1" /> */}
          <div className="image-container">
              <img src="./images/rocket.gif" alt="" />
          </div>
          <h3>Grow With Us</h3>
          <p>
            Lamet minim mollit non deserunt ullamco est sit aliq do amet sint.
            Velit officia consequat
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default WhatWeDo