import React from 'react'
import './work.css'
import { useTheme } from '../../common/ThemeContext';

function Work() {
    const { theme } = useTheme();
    const color = theme === 'dark' ? 'black' : 'black';
    const progressBarColor = theme === 'light' ? '#0987f2' : 'white';
    const back=theme==='dark'?'transparent':'white'
  return (
    <div className='work-container'>
        <main className="row">
		<section className="col">
			
			<header className="title">
				<h2>EDUCATION</h2>
			</header>

			<div className="contents">
				
				<div className="box">
					<h4>2021 - 2025</h4>
					<h3 style={{color:color}}>Thadomal Shahani Engineering College</h3>
					<p style={{color:color}}>Currently a final-year engineering student at Thadomal Shahani Engineering College, I am pursuing a degree in Electronics and Telecommunication Engineering.</p>
				</div>

				<div className="box">
					<h4>2019 - 2021</h4>
					<h3 style={{color:color}}>Pace Junior College</h3>
					<p style={{color:color}}>Completed my high school from Pace Jr College with a percentage of 87.33</p>
				</div>


			</div>
		</section>
		<section className="col">
			
			<header className="title">
				<h2>EXPERIENCE</h2>
			</header>

			<div className="contents">
				
				<div className="box">
					<h4>May 2023 - June 2023</h4>
					<h3 style={{color:color}}>PCB Intern at Kaizen FutureTech </h3>
					<p style={{color:color}}>Worked on the design and development of printed circuit boards (PCBs). Gained hands-on experience with PCB layout software and fabrication processes. Designed and implemented a lock system, collaborating with engineers to ensure efficient and reliable designs. </p>
				</div>

				<div className="box">
					<h4>Jan 2023 - Feb 2023</h4>
					<h3 style={{color:color}}>Iot Intern at Kaizen FutureTech</h3>
					<p style={{color:color}}>Gained practical experience in electronic systems and communication technologies. Assisted in the development of innovative solutions using AI and IoT. Collaborated with a team on various projects, enhancing technical and analytical skills.</p>
				</div>

				

			</div>
		</section>
	</main>
    </div>
  )
}

export default Work
