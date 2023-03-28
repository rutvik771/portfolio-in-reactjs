import React from 'react'
import Marquee from "react-fast-marquee";
import { workData1 } from "./Data";
import './Techstack.css'

export const TechStack = () => {
  return (
    <div id='techstack'>
      <p className='heading'>Tech Stack</p>
      <div className='tech-container'>
        <div>
          <Marquee speed="60" direction="left" gradientColor={[34, 38, 41]} gradientWidth={200}>
            {workData1?.map((item) => (
              <div className='tech-box'>
                <img className='stack-img' src={item?.image} />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  )
}
