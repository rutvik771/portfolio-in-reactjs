import React from 'react'
import "./project.css"
import { workData } from "./Data";
import { HiOutlineExternalLink } from "react-icons/hi"

export const Project = () => {
  return (
    <div id='project'>
      <div className='flex justify-center'>
        <div>
            <p className='heading'>Project</p>
          <div className='main-content gap-x-9'>
            {
              workData?.map((item) => {
                return (
                  <div className='project-introduction'>
                    <a className='float-right' href={item?.link} target='_blank'><HiOutlineExternalLink fontSize="1.5rem" /></a>
                    <div className='py-8'>
                    <p className='project-name'>{item?.name}</p>
                    <p className='py-4 opacity-80'>{item?.description}</p>
                    </div>
                    <div className='flex gap-x-3 py-2 text-base view-project'>
                      {
                        item?.technology?.map((item)=>{
                          return(
                            <p>{item}</p>
                          )
                        })
                      }
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}
