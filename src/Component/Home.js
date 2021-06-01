import React,{useState} from 'react';
import{RiMenu4Fill,RiCloseLine} from 'react-icons/ri';
import { Link } from 'react-router-dom';
import {HashLink as Link1} from 'react-router-hash-link';
import women from '../Component/Images/woman.png';
import{BiCodeAlt,BiImage,BiLayout,BiVector,BiChevronLeft,BiChevronRight} from 'react-icons/bi';
import {FaFacebookSquare,FaBehanceSquare,FaInstagram,FaDribbbleSquare,FaTwitterSquare} from 'react-icons/fa';
import 'react-bootstrap';

function Home() {

    const[nav,setNav] =useState(true)
    const [mouseX,setMouseX] =useState(null)
    const[mouseY,setMouseY] =useState(null)

    window.addEventListener('mousemove',(e)=>
    {
        setMouseX(e.pageX);
        setMouseY(e.pageY);
    })

    const handler=()=>{
        setNav(!nav)
    }
    return (
        <>
            <div className="navbar">
                <div className="nav-logo">
                <img src="https://img.icons8.com/color/35/000000/google-tag-manager.png" alt="logo"/>
                </div>
                <div className="menubar" onClick={handler} style={nav?{}:{zIndex:'1'}}>
                    {
                        nav ? <RiMenu4Fill/> : <RiCloseLine/>
                    }
                </div>

                <div className="navbar-nav" style={nav ?{}:{width:'100%',height:'100%'}}>
                <div style={{top:mouseY + 'px',left:mouseX + 'px'}} className="pointer">
                    </div>
                  
                    <div className="nav-items" onClick={handler}>
                        <Link1 to="#home" smooth>Home</Link1>
                        <Link1 to="#skills" smooth>What I do</Link1>
                        <Link1 to="#skillset" smooth>Skills</Link1>
                        <Link1 to="#aboutme" smooth>About Me</Link1>
                        <Link1 to="#mywork" smooth>My Works</Link1>
                    </div>
                   
                </div>
            </div>


            <div id="home">
                <div className="home-content">
                    <div className="home-bg">
                        <div className="home-circle">
                        <img src={women} className="woman" alt="woman"/>
                       
                        </div>
                        <img src={women} className="woman-bg" alt="woman"/>
                        <img src="https://i.ibb.co/VYKr0LR/Pngtree-flat-vector-illustration-business-office-4208091.jpg" className="drawing" alt="women1" />
                        <img src="https://i.ibb.co/zmdHD0h/Untitled-34.png" className="drawing1" alt="women2" />

                    </div>
                    
                    <div className="home-text">
                        <h1>FRONT END DEVELOPER</h1>
                        <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                        <br/>
                        <br/>
                        <br/>
                        <Link to="/dummy">Hire Me</Link>
                    </div>
                </div>
            </div>


            <div id="skills">
                    <div className="skill-content">
                        <div>
                        <BiLayout style={{fontSize:"45px"}}/>
                        <br></br>
                            <h2>UI Designing</h2>
                            <p>Lorem ipsum is placeholder text commonly used in the graphic, print.</p>
                        </div>
                        <div>
                        <BiVector style={{fontSize:"45px"}}/>
                        <br/>
                            <h2>Vectors</h2>
                            <p>Lorem ipsum is placeholder text commonly used in the graphic, print.</p>
                        </div>
                        <div>
                        <BiImage style={{fontSize:"45px"}}/>
                        <br/>
                            <h2>Illustartion</h2>
                            <p>Lorem ipsum is placeholder text commonly used in the graphic, print.</p>
                        </div>
                        <div>
                        <BiCodeAlt style={{fontSize:"45px"}}/>
                        <br/>
                            <h2>Website Design</h2>
                            <p>Lorem ipsum is placeholder text commonly used in the graphic, print.</p>
                        </div>
                    </div>
            </div>


            <div id="aboutme">
               
                    <div className="ab-content">
                        <h1>ABOUT ME</h1>
                        <br/>
                        <p>Lorem ipsum is placeholder text commonly used in the graphic, print.
                        Lorem ipsum is placeholder text commonly used in the graphic, print.
                        Lorem ipsum is placeholder text commonly used in the graphic, print.
                        Lorem ipsum is placeholder text commonly used in the graphic, print.
                        </p>

                        <br/>
                        <Link1 to="/dummy">Download CV</Link1>
                    </div>

                    <div className="ab-img">
                        <img src={women} alt="women"/>
                    </div>
        
            </div>


            <div id="skillsets">

                <div className="ss-title" >
                    <p>MY</p>
                    <h1>SKILLS</h1>
                </div>

                <div className="skillset-c">
                <h3>HTML & CSS</h3>
                    <div className="skill-bars">
                        <div className="skill-percentage" style={{width:"95%"}}>
                            <p>95%</p>
                        </div>
                    </div>
                    <h3>BOOTSTARP</h3>
                    <div className="skill-bars">
                    <div className="skill-percentage" style={{width:"90%"}}>
                            <p>90%</p>
                        </div>
                    </div>
                    <h3>JAVASCRIPT</h3>
                    <div className="skill-bars">
                    <div className="skill-percentage" style={{width:"60%"}}>
                            <p>60%</p>
                        </div>
                    </div>
                    <h3>ANGULAR & REACT JS</h3>
                    <div className="skill-bars">
                    <div className="skill-percentage" style={{width:"70%"}}>
                            <p>70%</p>
                        </div>
                    </div>

                    <h3>ILLUSTARTION</h3>
                    <div className="skill-bars">
                    <div className="skill-percentage" style={{width:"75%"}}>
                            <p>75%</p>
                        </div>
                    </div>

                </div>
            </div>


            <div id="mywork">

                <div className="myw-heading">
                    <p>HEADING</p>
                    <h1>MY WORKS</h1>
                </div>
                <div className="myw">
                    <div className="myw-content">
                    <div className="myw-bg" style={{background:"url('https://i.ibb.co/60dVcyz/Pngtree-flat-vector-illustration-business-office-4208091.jpg') no-repeat",backgroundPosition:'center',backgroundSize:'cover'}}>

                    </div>
                    <div className="myw-title">
                        <div style={{margin:"20px"}}>
                        <h1>Website Templates</h1>
                        <p>One of the best adorable and best responsive website templates</p>
                        <br></br>
                        <br></br>
                        <Link to="/dummy">See my Work</Link>
                        </div>
                    </div>
                </div>
                </div>

                <div className="myw">
                    <div className="myw-content" style={{flexDirection:"row-reverse"}}>
                    <div className="myw-bg" style={{background:"url('https://i.ibb.co/ynv5xzv/Pngtree-cartoon-vr-virtual-reality-universe-4119045.jpg') no-repeat",backgroundPosition:'center',backgroundSize:'cover'}}>

                    </div>
                    <div className="myw-title">
                    <div style={{margin:"20px"}}>
                        <h1>Illustartions</h1>
                        <p>One of the best adorable and best responsive website templates</p>
                        <br></br>
                        <br></br>
                        <Link to="/dummy">See my Work</Link>
                        </div>
                    </div>
                </div>
                </div>


                <div className="myw">
                    <div className="myw-content">
                    <div className="myw-bg" style={{background:"url('https://i.ibb.co/bg28NXT/Pngtree-flat-robot-customer-service-future-4219292.jpg') no-repeat",backgroundPosition:'center',backgroundSize:'cover'}}>

                    </div>
                    <div className="myw-title">
                        <div style={{margin:"20px"}}>
                        <h1>UI Designs</h1>
                        <p>One of the best adorable and best responsive website templates</p>
                        <br></br>
                        <br></br>
                        <Link to="/dummy">See my Work</Link>
                        </div>
                    </div>
                </div>
                </div>

            </div>


          



            <div id="demo" class="carousel slide" data-ride="carousel">

                        <div className="testimonial">
                            <p>MY</p>
                            <h1>TESTIMONIAL</h1>
                        </div>
<ul class="carousel-indicators">
  <li data-target="#demo" data-slide-to="0" class="active"></li>
  <li data-target="#demo" data-slide-to="1"></li>
  <li data-target="#demo" data-slide-to="2"></li>
</ul>


<div class="carousel-inner">
  <div class="carousel-item active">
    <img src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="face" className="c-img"></img>
    <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
    <b>-JHON</b>
  </div>
  <div class="carousel-item">
  <img src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="face" className="c-img"></img>
  <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
    <b>-SARA</b>
  </div>
  <div class="carousel-item">
  <img src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="face" className="c-img"></img>
  <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
    <b>-SARA</b>
  </div>
</div>


<a class="carousel-control-prev" href="#demo" data-slide="prev">
  <span className="c-left"><BiChevronLeft/></span>
</a>
<a class="carousel-control-next" href="#demo" data-slide="next">
  <span className="c-right"><BiChevronRight/></span>
</a>
</div>


<footer>
    <div className="f-content">
    <div className="aboutus">
        <h1>LOGO</h1>
        <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
        <div className="s-icons">
        <Link1 to="/dummy"><FaFacebookSquare/></Link1>
        <Link1 to="/dummy"><FaTwitterSquare/></Link1>
        <Link1 to="/dummy"><FaInstagram/></Link1>
        <Link1 to="/dummy"><FaDribbbleSquare/></Link1>
        <Link1 to="/dummy"><FaBehanceSquare/></Link1>
        </div>
    </div>
    <div className="f-btns">
        <Link1 to="/dummy">Downlod CV</Link1>
        <Link1 to="/dummy">Talk to me</Link1>
    </div>
    </div>

    <div className="f-nav">
        <Link1 to="/dummy">Home</Link1>
        <Link1 to="/dummy">About Me</Link1>
        <Link1 to="/dummy">Skills</Link1>
        <Link1 to="/dummy">My Works</Link1>
        <Link1 to="/dummy">What I Do</Link1>
    </div>
</footer>




            
        </>
    )
}

export default Home
