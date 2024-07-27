import React from 'react'
import './Contact.css'
import { useTheme } from '../../common/ThemeContext';

function Contact() {
    const { theme } = useTheme();
    const butoncolor=theme==='dark'?'white':'#0987f2'
    const textColor = theme === 'light' ? 'white' : 'black';

  return (
    <div className='contactbox'>
        <h1>contact</h1>
        <input type='text' className='mailid' placeholder='Name'></input>
        <input type='text' className='mailid' placeholder='Email Id'></input>
        <textarea className='message' placeholder='Message'></textarea>
        <button style={{height:50,width:126,borderRadius:30,marginTop:20,backgroundColor:butoncolor,color:textColor}} className='hover1' >Submit</button>
    </div>
  )
}

export default Contact
