import React from 'react'
import styles from './Projects.module.css'
import Dijkstra from '../../assets/Dijkstra.png'
import crypto from '../../assets/crypto.jpg'
import VideoCall from '../../assets/VideoCall.png'
import pcb from '../../assets/PCB.jpg'
import {useTheme} from '../../common/ThemeContext'
function Projects() {
    const { theme, toggleTheme } = useTheme();
    const a=theme==='dark'?50:25;
  return (
    <section id='projects' >
        <h1 className={styles.sectionTitle}>Projects</h1>
        <div className={styles.main}>
            <div className={styles.first} >
            <a href='https://github.com/Prithvi1254?tab=repositories'>
            <img src={Dijkstra} alt="First Project" style={{height:200,width:300,margin:20,borderRadius:a}} />
            </a>
            <h3 style={{marginLeft:20}}>Visualization </h3> <br/> 
            <p style={{marginLeft:20}}>
            Dijkstra Algorithm <br/>visualion</p>
            </div>
            <div className={styles.first} >
            <a href='https://github.com/Prithvi1254?tab=repositories'>
            <img src={crypto} alt="First Project" style={{height:200,width:300,margin:20,borderRadius:50}} />
            </a>
            <h3 style={{marginLeft:20}}>CryptoSphere </h3> <br/> 
            <p style={{marginLeft:20}}>
            Live Crypto App</p>
            </div>
            <div className={styles.first} >
            <a href='https://github.com/Prithvi1254?tab=repositories'>
            <img src={VideoCall} alt="First Project" style={{height:200,width:300,margin:20,borderRadius:50}} />
            </a>
            <h3 style={{marginLeft:20}}>VibeCall </h3> <br/> 
            <p style={{marginLeft:20}}>
            A video chat app</p>
            </div>
            
            
        </div>
        </section>
  )
}

export default Projects