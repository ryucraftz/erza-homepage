import {React,useState} from 'react'
import { Link } from "react-router-dom";

// main css 
import './Hero.css'
// 'pages' area css 
import './Pages.css'
// what i do & Contact section 
import './Others.css'
import snipc_img from './img/snipc_nobg.png'


function Hero(props) {

  const [discord_state,setStatus]= useState('Loading..')

  var stylesObj = {
    backgroundColor: 'grey',
  };
  // fetch discord data from Lanyard 
  fetch("https://api.lanyard.rest/v1/users/1019641343875760350")
  .then((res) => res.json())
  .then((json) => {
    let data= json.data.discord_status
    // Conditions respective to data recieved
    if (json.data.spotify!=null){
      setStatus(`Listening to ${json.data.spotify.song}`)
      document.getElementById('circle').style.display='none'
      document.getElementById('intro').style.display='flex'
      document.getElementById('spotify').style.display='inline'
      
    }
    else if (data=='offline') {
      setStatus('Offline')
    }
    else if (data=='online'){
      setStatus('Online')
      document.getElementById('circle').style.backgroundColor= 'rgb(121, 214, 121)'
    } 
    else if(data=='dnd'){
      setStatus('Busy')
      document.getElementById('circle').style.backgroundColor= 'rgb(212, 109, 109)'

    }
    else if(data=='idle'){
      setStatus('AFK')
      document.getElementById('circle').style.backgroundColor= 'rgb(209, 209, 116)'
    
    }
  })
  return (
<>


  
<title>snipc • Shaurya</title>

<div className="container"  data-theme={props.w_theme} >
  {/* here comes the text container  */}
<div className="text" data-theme={props.w_theme}>
  {/* the text in bracket */}
    <h5 id="intro">
      {/* <img src="https://sniarchive.github.io/images/spotify-icon.png" alt="" id="spotify" /> */}
      <iconify-icon icon="logos:spotify-icon" id='spotify' height='1.4rem'></iconify-icon>
      <span id="circle" style={stylesObj}></span> 
      &nbsp; 
      <span id='discord_s'>{discord_state}</span>
    </h5>
    {/* name and about me section  */}
    <h1 id='hello'>Hello, I'm <span id='Shaurya'>Shaurya</span></h1>
    <p id='about'>I'm a {props.age} y/o self-taught {props.developer} developer from India. I'm a nerd so you may find me as <span id='Shaurya'>{props.nerd_name}</span> online.</p>


{/* the social links section  */}
    <div id="links">

  <a href="https://github.com/realsnipc" target="_blank"className="link"><iconify-icon icon="line-md:github-loop" className="icon"  height='1.5em' style={{color:'white'}}></iconify-icon></a>

  <a href="https://linkedin.com/in/realshaurya" target="_blank"className="link"  id="linkedin" ><iconify-icon icon="ri:linkedin-fill" height='1.5em'style={{color:'white'}}></iconify-icon></a>
</div>
</div>

{/* image container */}
<div className="img">
  <img src={snipc_img} alt="img not loaded!  " />
</div>


</div>

{/* pages1 section (work & anime)  */}
<div className="pages1">
  
  <div id="first" className='page'>
  <Link to="/work"  style={{ textDecoration: 'none' }} preventScrollReset={false}>
    <h3>work</h3> 
    <p>View my elegently crafted open-source and other awesome projects.</p>
    </Link>
    </div>


    <div id="second" className='page'>
  <Link to="/anime"  style={{ textDecoration: 'none' }}>
    <h3>anime</h3> <p>The anime that I'm currently watching that make me feel like I can do anything.</p>
  </Link>
    </div>
</div>
{/* page2 secion (donate and stack)  */}
<div className="pages2">

  {/* /donate  */}
  <div id="third" className='page'>
  <Link to="/donate"  style={{ textDecoration: 'none' }}>
    <h3>donate</h3>
     <p>Support my work to help me create something that will blow up people's minds!</p>
  </Link>
     </div>
    {/* /stack   */}
  {/* <div id="fourth" className='page'>
  <Link to="/stack"  style={{ textDecoration: 'none' }}>
    <h3>stack</h3> 
    <p>The tools that make me look like a genius (even though I'm not). </p>
    </Link>
    </div> */}
</div>
<div id="others">

  {/* learning section  */}
  <div id="learning">
    <h5>MOSTLY USED</h5>
    <div className="item">
    <span id="item_container">
    <h6><iconify-icon icon="devicon:react" height='1.5rem'></iconify-icon></h6>
      <p>React.js</p>
      </span>
    </div>
    <div className="item">
    <span id="item_container">
    <h6><iconify-icon icon="vscode-icons:file-type-node" height='1.5rem'></iconify-icon></h6>
      <p>Node.js</p>
      </span>
    </div>
    <div className="item">
    <span id="item_container">
    <h6><iconify-icon icon="devicon:git" height='1.5rem'></iconify-icon></h6>
      <p>Git/Github (VCS)</p>
      </span>
    </div>
    <div className="item">
    <span id="item_container">
    <h6><iconify-icon icon="devicon:vscode" height='1.5rem'></iconify-icon></h6>
      <p>VS Code (IDE)</p>
      </span>
    </div>
    
  </div>

  <div id="contact">
  <h5>MORE CONTACTS</h5>
  <div className="item" onClick={()=>{window.location= "https://discord.com/users/1019641343875760350"}}>
    <span id="item_container">
    <h6><iconify-icon icon="ic:baseline-discord" height='1.5rem' className='social_icon'></iconify-icon></h6>
      <p>{props.discord}</p>
      </span>
    </div>
    <div className="item" onClick={()=>{window.location= `https://linkedin.com/in/${props.linkedin}`}}>
    <span id="item_container">
    <h6><iconify-icon icon="mdi:linkedin" height='1.5rem'></iconify-icon></h6>
      <p>{props.linkedin}</p>
      </span>
    </div>
    <div className="item" onClick={()=>{window.location= `https://github.com/${props.github}`}}>
    <span id="item_container">
    <h6><iconify-icon icon="mingcute:github-fill" height='1.5rem'></iconify-icon></h6>
      <p>{props.github}</p>
      </span>
    </div>
    <div className="item" onClick={()=>{window.location= `mailto:${props.email}`}}>
    <span id="item_container">
    <h6><iconify-icon icon="dashicons:email" height='1.5rem'></iconify-icon></h6>
      <p>{props.email}</p>
      </span>
    </div>
  </div>
</div>


</>
  )
}

export default Hero
