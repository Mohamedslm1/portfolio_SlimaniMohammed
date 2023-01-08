import React, { Profiler } from "react"
import "./Home.css"
import profil1 from "../pic/profil1.png"
import skill1 from "../pic/skill1.png"
import skill2 from "../pic/skill2.png"
import skill3 from "../pic/skill3.png"
import csharp from "../pic/csharp.png"
import js from "../pic/js.png"
import python from "../pic/python.png"
import html from "../pic/html.png"
import net from "../pic/net.png"
import matlab from "../pic/matlab.png"
import cplusplus from "../pic/cplusplus.png"
import bootstrap from "../pic/bootstrap.png"
import react from "../pic/react.png"
import { Typewriter } from 'react-simple-typewriter'
import { FaFacebookF , FaInstagram , FaLinkedinIn, FaGithub} from "react-icons/fa";

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>Slimani Mohammed</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter words={[" Professional Coder.", " Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p>Full Stack Developer with 2+ years of hands-on experience designing, developing, and implementing applications and solutions using a range of technologies and programming languages. Seeking to leverage broad development experience and hands-on technical expertise in a challengıng role as a Full-stack Developer.</p>
           
            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                <a href="https://www.facebook.com/profile.php?id=100019189320060">
                  <button className='btn_shadow'>
                  <i class="fa-brands fa-facebook"><FaFacebookF></FaFacebookF></i>
                  </button>
                  </a>
                  <a href="https://www.instagram.com/mohaa.slimani/?hl=fr">
                  <button className='btn_shadow' >
                    <i class='fab fa-instagram'><FaInstagram></FaInstagram></i>
                  </button>
                  </a>
                  <a href="https://www.linkedin.com/in/mohammed-slimani-bb5786237/">
                  <button className='btn_shadow'>
                    <i class='fab fa-linkedin-in'><FaLinkedinIn></FaLinkedinIn></i>
                  </button>
                  </a>
                  <a href="https://github.com/Mohamedslm1">
                  <button className='btn_shadow'>
                    <i class='github'><FaGithub></FaGithub></i>
                  </button>
                  </a>
                </div>
                  
              <div className='col_1'>
                <h4>BEST SKILL ON</h4>
                <button className='btn_shadow'>
                  <img src={skill3} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={csharp} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={js} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={python} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={html} alt='' />
                </button>              
              </div>
              <br></br>
              <div className='col_1'>
              <button className='btn_shadow'>
                  <img src={net} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={cplusplus} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={matlab} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={bootstrap} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={react} alt='' />
                </button>
              </div>
              </div>
            
            </div>
          </div>
          <div>
          
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={profil1} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
