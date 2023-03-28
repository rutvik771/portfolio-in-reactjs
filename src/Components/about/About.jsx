import React from 'react'
import './about.css';
import profileImg from './rutvik.jpeg'

export const About = () => {
  return (
    <section id='about'>
        <div className='about-container'>
            <div>
                <p className='text-3xl font-bold mb-6 opacity-90'>About Me</p>
                <div className='main-content gap-x-6 gap-y-6'>
                <div className=''>
                  <div>
                  <p>Hello! My name is Rutvik Patel, and I specialize in building web applications using the MERN (MongoDB, Express, React, and Node.js) technology stack.</p>
                  <p className='py-2'>I am passionate about my work and enjoy tackling complex challenges. I believe that communication, collaboration, and attention to detail are key factors in delivering successful projects. Therefore, I always work closely with my clients to understand their specific requirements, provide regular updates, and ensure that the final product exceeds their expectations.</p> 
                </div>
                <div className='py-3'>
                  <p>Here are a few technologies I’ve been working with recently:</p>
                  <ul className='grid grid-cols-2 gap-2 m-4 list-disc secondary-text'>
                    <li>Java-script</li>
                    <li>React Js</li>
                    <li>Node js</li>
                    <li>Mongo DB</li>
                    <li>MY SQL</li>
                    <li>Exprees Js</li>
                  </ul>
                </div>
                  </div>
                <img className='my-img' src={profileImg}/>
                </div>
            </div>
        </div>
    </section>
  )
}
