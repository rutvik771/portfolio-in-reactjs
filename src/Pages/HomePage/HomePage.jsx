import React from 'react'
import { About } from '../../Components/about/About'
import { Contact } from '../../Components/contacts/Contact'
import { Hero } from '../../Components/Hero/Hero'
import { Project } from '../../Components/project/Project'
import { TechStack } from '../../Components/TechStack/TechStack'
import { Work } from '../../Components/work/Work'

export const HomePage = () => {
  return (
    <div>
      <Hero/>
      <TechStack/>
      <Project/>
      <Work/>
      <Contact/>
    </div>
  )
}
