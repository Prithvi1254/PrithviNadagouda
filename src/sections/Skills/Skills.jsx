import React from 'react';
import './Skills.css';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
    const { theme } = useTheme();
    const color = theme === 'dark' ? 'white' : 'black';
    const progressBarColor = theme === 'light' ? '#0987f2' : 'white';
    const back=theme==='dark'?'transparent':'white'

    const skills = [
        {
            category: 'FRONTEND',
            skills: [
                { name: 'HTML', level: '95%' },
                { name: 'CSS', level: '90%' },
                { name: 'REACT', level: '85%' }
            ]
        },
        {
            category: 'LANGUAGE',
            skills: [
                { name: 'C', level: '55%' },
                { name: 'C++', level: '90%' },
                { name: 'JAVASCRIPT', level: '85%' }
            ]
        },
        {
            category: 'OTHERS',
            skills: [
                { name: 'MySQL', level: '80%' },
                { name: 'BOOTSTRAP', level: '75%' },
                { name: 'GIT', level: '70%' }
            ]
        }
    ];

    return (
        <div className='skills-container' style={{backgroundColor:back}}>
            <h1 style={{ color }}>Skills</h1>
            <div className='skills-categories'>
                {skills.map((category, index) => (
                    <div key={index} className='skills-category'>
                        <h2 style={{ color }}>{category.category}</h2>
                        <ul>
                            {category.skills.map((skill, i) => (
                                <li key={i} style={{ color }}>
                                    {skill.name}
                                    <div className='progress-bar'>
                                        <div className='progress' style={{ width: skill.level, backgroundColor: progressBarColor }}></div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
