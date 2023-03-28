import React, { useState } from 'react'
import "./work.css"
import { workData } from "./Data";

export const Work = () => {
  const [activeStep, setActiveStep] = useState(0);


  return (
    <div id='work'>
      <div className='flex justify-center px-4'>
        <div>
          <h2 className='text-3xl font-bold'>Where I’ve Worked </h2>
          <div className='main-content'>
            <div className='btn-list'>
              <button className={`btn ${activeStep === 0 ? 'active-btn':''}`} type='button' onClick={()=>{setActiveStep(0)}}>CreatorX</button>
              <button className={`btn ${activeStep === 1 ? 'active-btn':''}`} type='button' onClick={()=>{setActiveStep(1)}}>Stroke</button>
              <button className={`btn ${activeStep === 2 ? 'active-btn':''}`} type='button' onClick={()=>{setActiveStep(2)}}>Arth</button>
              <button className={`btn ${activeStep === 3 ? 'active-btn':''}`} type='button' onClick={()=>{setActiveStep(3)}}>Aakash</button>
            </div>
            <div className='desiganation'>
              {
                workData?.filter((item) => {
                  return item.id === activeStep;
                }).map((item) => {
                  return (
                    <>
                      <div className=''>
                        <p className='text-lg'>
                          <span className='font-bold'>{item?.designation}</span>
                          <span className='secondary-text opacity-80 font-bold '>{item?.companyName}</span>
                        </p>
                        <p className='text-sm'>
                          {item?.duration}
                        </p>
                      </div>
                      <div className='desiganation-detail'>
                        {
                          item?.work?.map((item) => {
                            return (
                              <ul>
                                <li>{item}</li>
                              </ul>
                            )
                          })
                        }
                      </div>
                    </>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
