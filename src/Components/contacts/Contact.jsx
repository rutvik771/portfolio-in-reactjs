import React from 'react'
import "./contact.css";
import { TbBrandGithub } from "react-icons/tb"
import { FiLinkedin , FiInstagram ,FiMail} from "react-icons/fi"

export const Contact = () => {
  return (
    <div id='contact'>
      <hr/>
        <div className='contact-container'>
            <h1 className='text-3xl font-bold primary-text'>Get In Touch 💌</h1>
            <div className='social-media-icons'>
              <a target='_blank' href="mailto:patelrutvik039@gmail.com"><FiMail color='#EDEDED'/></a>
              <a className='pl-3' target='_blank' href='https://github.com/rutvik771'><TbBrandGithub color='#EDEDED'/></a>
              <a className='px-3' target='_blank' href='https://www.linkedin.com/in/rutvik-patel-b8b4871b9/' ><FiLinkedin color='#EDEDED'/></a>
              <a target='_blank' href='https://www.instagram.com/rutvik_731/'><FiInstagram color='#EDEDED'/></a>
           </div>
        </div>
    </div>
  )
}
