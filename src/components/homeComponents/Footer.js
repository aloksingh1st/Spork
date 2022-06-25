import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Footer.css"
import {BsInstagram, BsFacebook, BsTwitter, BsYoutube, BsWhatsapp} from "react-icons/bs"

const Footer = () => {
  return (
    <>
    <footer>
<div class="row primary">
  <div class="column about">

  <h3>Developer</h3>

   <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
      voluptatem corporis error non,
  </p>

  <div class="social">
    <BsFacebook></BsFacebook>
    <BsInstagram></BsInstagram>
    <BsTwitter></BsTwitter>
    <BsYoutube></BsYoutube>
    <BsWhatsapp></BsWhatsapp>
  </div>
</div>

<div class="column links">
<h3>Some Links</h3>

 <ul>

  <li>
   <a href="#faq">F.A.Q</a>
  </li>
  <li>
   <a href="#cookies-policy">Cookies Policy</a>
  </li>
  <li>
   <a href="#terms-of-services">Terms Of Service</a>
  </li>
  <li>
   <a href="#support">Support</a>
  </li>
 </ul>

</div>


<div class="column links">
  <h3>Some Links</h3>
   <ul>
    <li>
     <a href="#faq">F.A.Q</a>
    </li>
    <li>
     <a href="#cookies-policy">Cookies Policy</a>
    </li>
    <li>
    <a href="#terms-of-services">Terms Of Service</a>
    </li>
    <li>
    <a href="#support">Support</a>
    </li>
  </ul>
</div>

<div class="column subscribe">
 <h3>Newsletter</h3>
  <div>
   <input type="email" placeholder="Your email id here" />
   <button>Subscribe</button>
  </div>

</div>

</div>

<div class="row copyright">
  <div class="footer-menu">

  <ul>
          <li>
             <NavLink to="/"> Home</NavLink>
            </li>
            <li>
              <NavLink to="initiatives">

              Initiatives
              </NavLink>
            </li>
            <li>
              <NavLink to="about">

              About
              </NavLink>
            </li>
            <li>
            <NavLink to="connect">
              Connect
              </NavLink>
            </li>
            <li>
              <NavLink to="team">

              Team
              </NavLink>
            </li>
            <li>
              <NavLink to="blogs">

              Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="gallary">

              Gallary
              </NavLink>
              </li>
            <li>
              <NavLink to="contact">

              Contact
              </NavLink>
            </li>
  </ul>

  </div>
   <p>Copyright &copy; 2023 KIT KANPUR</p>
</div>
</footer>
    
    </>
  )
}

export default Footer