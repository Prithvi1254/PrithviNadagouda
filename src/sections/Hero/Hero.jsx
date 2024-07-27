import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import Leetcode from '../../assets/leetcode.png'
import githubDark from '../../assets/github-dark.svg'
import githubLight from '../../assets/github-light.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import twitterLight from '../../assets/twitter-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import CV from '../../assets/CV.pdf'
import {useTheme} from '../../common/ThemeContext'
import { TypeAnimation } from 'react-type-animation'
function Hero() {
    const { theme, toggleTheme } = useTheme();
  
    const themeIcon = theme === 'light' ? sun : moon;
    const Twitter = theme === 'light' ? twitterLight : twitterDark;
    const github = theme === 'light' ? githubLight : githubDark;
    const Linkedin = theme === 'light' ? linkedinLight : linkedinDark;
    const textColor = theme === 'light' ? 'black' : 'white';
  
    return (
      <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
          <img
            src={heroImg}
            className={styles.hero}
            style={{borderRadius:500}}
            alt="Profile picture of Prithvi Nadagouda"
          />
          <img
            className={styles.colorMode}
            src={themeIcon}
            alt="Color mode icon"
            onClick={toggleTheme}
          />
        </div>
        <div className={styles.info}>
          <h1>
            Prithvi
            <br />
            Nadagouda
          </h1>
          <TypeAnimation
          key={theme}
    
      sequence={[
        // Same substring at the start will only be typed out once, initially
        
        'I AM AN ENGINEER',
        1000,
        
        'I AM A DEVELOPER',
        1000
      ]}
      wrapper="span"
      
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' ,color:textColor}}
      repeat={Infinity}
    />
          <span>
                <a href='https://leetcode.com/u/PrithviNadagouda/' target='_blank' >
                <img src={Leetcode} alt='LeetCode Profile'  style={{height:55,width:55,borderRadius:100}}/>
                </a>
                <a href='https://github.com/Prithvi1254' target='_blank'>
                <img src={github} alt='Github Profile' style={{height:55,width:55,borderRadius:100}} />
                </a>
                <a href='https://www.linkedin.com/in/prithvinadagouda/' target='_blank'>
                <img src={Linkedin} alt='LinkedIn Profile' style={{height:55,width:55,borderRadius:100}} />
                </a>

                <a href='https://twitter.com/Nadagou1Prithvi' target='_blank'>
                <img src={Twitter} alt='Twiter Profile' style={{height:55,width:55,borderRadius:100}} />
                </a>
            </span>
          <p className={styles.description}>
          Engineer specializing in problem-solving and creating efficient, user-friendly solutions
          </p>
          <a href={CV} download>
            <button className="hover">Resume</button>
          </a>
        </div>
      </section>
    );
  }
  
  export default Hero;