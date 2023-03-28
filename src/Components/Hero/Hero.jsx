import React from 'react'
import './hero.css'
import sw from './sw.png';

export const Hero = () => {
    return (
       <div id='hero'>
                <div className='hero-container'>
                    <div className='content'>
                        <p className='text-lg tracking-widest mb-4'>Hello 👋 </p>
                        <p>I’m a <span className='custom-bold secondary-text'> Full Stack Developer</span>.</p>
                        <p>Currently, I’m focused on building accessible, human-centered products at CreatorX.</p>
                    </div>
                    <img className='hero-img' src={sw}/>
                </div>
        </div>
    )
}
