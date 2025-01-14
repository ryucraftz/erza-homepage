import { React, useState } from 'react';
import { Link } from "react-router-dom";
import { Tooltip as ReactTooltip } from "react-tooltip";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react';
import { themeChange } from 'theme-change';
import FadeIn from 'react-fade-in';

import pfp from '../../scripts/Effects';

// ..
AOS.init();

// main css 
import './Hero.css';
// 'pages' area css 
import './Pages.css';
// about me section 
import './About.css';


function Hero(props) {

  useEffect(() => {
    themeChange(false);
    // fetch discord data from Lanyard 
    fetch("https://api.lanyard.rest/v1/users/1019641343875760350")
      .then((res) => res.json())
      .then((json) => {
        let data = json.data.discord_status;
        // Conditions respective to data recieved
        if (json.data.spotify != null) {
          setStatus(`Listening to ${json.data.spotify.song}`);
          document.getElementById('circle').style.display = 'none';
          document.getElementById('intro').style.display = 'flex';
          document.getElementById('spotify').style.display = 'inline';

        }
        else if (data == 'offline') {
          setStatus('Offline');
        }
        else if (data == 'online') {
          setStatus('Online');
          document.getElementById('circle').style.backgroundColor = 'rgb(121, 214, 121)';
        }
        else if (data == 'dnd') {
          setStatus('Busy');
          document.getElementById('circle').style.backgroundColor = 'rgb(212, 109, 109)';

        }
        else if (data == 'idle') {
          setStatus('AFK');
          document.getElementById('circle').style.backgroundColor = 'rgb(209, 209, 116)';

        }
      });
  }, []);

  var dob = new Date("09/02/2009");
  //calculate month difference from current date in time
  var month_diff = Date.now() - dob.getTime();

  //convert the calculated difference in date format
  var age_dt = new Date(month_diff);

  //extract year from date    
  var year = age_dt.getUTCFullYear();

  //now calculate the age of the user
  var age = Math.abs(year - 1970);

  const [discord_state, setStatus] = useState('Loading..');


  var stylesObj = {
    backgroundColor: 'grey',
  };
  return (
    <>


      {/* fade in animation effect to whole hero content  */}
      <FadeIn delay={500}>

        <title>Shaurya Chaudhary ~ snipc</title>

        <div className="container" >
          {/* here comes the text container  */}
          <div className="text" >
            {/* the text in bracket */}
            <h5 id="intro">
              <iconify-icon icon="logos:spotify-icon" id='spotify' height='1.4rem'></iconify-icon>
              <span id="circle" style={stylesObj}></span>
              &nbsp;
              <span id='discord_s' data-tooltip-id="discord_status">{discord_state}</span>

              {/* discord status tooltip  */}
              <ReactTooltip
                id="discord_status"
                place="top"
                content="Discord Status"
                style={{ borderRadius: '10px', fontFamily: "'Work Sans', sans-serif" }}
              />
            </h5>
            {/* name and about me section  */}
            <h1 id='hello'>Hello, I'm <span id='Shaurya'>Shaurya</span></h1>
            <p id='about'>I'm a <b data-tooltip-id="dob">{age}</b> y/o hobbyist developer from India. I'm a nerd so you may find me as snipc online.</p>

            <ReactTooltip
              id="dob"
              place="top"
              content="9/02/2009"
              style={{ borderRadius: '10px', fontFamily: "'Work Sans', sans-serif" }}
            />


            {/* the social links section  */}
            {/* <div id="links">

  <a href="https://github.com/realsnipc" target="_blank"className="link"><iconify-icon icon="line-md:github-loop" className="icon"  height='1.5em' style={{color:'white'}}></iconify-icon></a>

  <a href="https://linkedin.com/in/realshaurya" target="_blank"className="link"  id="linkedin" ><iconify-icon icon="ri:linkedin-fill" height='1.5em'style={{color:'white'}}></iconify-icon></a>
</div> */}
          </div>
          {/* image container */}
          <div className="img">
            <img src={pfp} alt="My online avatar I use as an alternate to my real photo. " />
          </div>


        </div>

        {/* pages1 section (work & anime)  */}
        <div className="pages1">
          <div id="first" className='page'>
            <Link to="/work" style={{ textDecoration: 'none' }} preventScrollReset={false}>
              <h3>work</h3>
              <p>View my elegently crafted open-source and other awesome projects.</p>
            </Link>
          </div>


          <div id="second" className='page'>
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <h3>contact</h3> <p>Wanna Chitchat? Stumped on a project? Just ask! I'm always happy to help out a friend in need.</p>
            </Link>
          </div>
        </div>

        {/* page2 secion */}
        <div className="pages2">
          {/* /donate  */}
          <div id="third" className='page'>
            <Link to="/support" style={{ textDecoration: 'none' }}>
              <h3>support</h3>
              <p>Support my work to help me create something that will blow up people's minds!</p>
            </Link>
          </div>

          {/* /stack   */}
          <div id="fourth" className='page'>
            <Link to="/stack" style={{ textDecoration: 'none' }}>
              <h3>stack</h3>
              <p>The tools that make me look like a genius (even though I'm not). </p>
            </Link>
          </div>
        </div>

        <p id='pages_title'>MORE</p>
        <div id="more_pages">
          <div id="first" className='page'>
            <Link to="https://www.last.fm/user/realsnipc" style={{ textDecoration: 'none' }} preventScrollReset={false}>
              <h3>songs</h3>
              <p>This button leads to songs I listen to when I'm coding, gaming, or just plain bored, so buckle up!</p>
            </Link>
          </div>

          <div id="second" className='page'>
            <Link to="/anime" style={{ textDecoration: 'none' }}>
              <h3>anime</h3> <p>The anime that I'm currently watching that make me feel like I can do anything.</p>
            </Link>
          </div>
        </div>

        <p id='pages_title' style={{ marginTop: '20vh' }}>ABOUT ME</p>
        <div id="about_me" data-aos="fadeInUp" data-aos-anchor=".other-element" >
          <p id="about_para">My name is <span id='Shaurya'>Shaurya</span>. I'm always doing <u>random things</u>.
            <br /> <br /> Beyond computers, I'm really interested in <a href="" id="about_me_link">reading</a> and <a id='about_me_link' href="/anime">anime</a>, you can often find me spending time with those.
            <br />I love exploring new things and places.</p>
          <img src="https://media.tenor.com/lO6HqZ3I2dIAAAAi/e.gif" alt="some random anime gif" id='about_me_gif' />
        </div>
      </FadeIn>
    </>
  );
}

export default Hero;
