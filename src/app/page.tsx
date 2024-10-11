'use client'

// Lib
import React, { useEffect } from 'react'

// Include in project
import {
  WelcomeSection,
  AboutSection,
  SkillSection,
  ProjectSection,
  ContactSection,
  EducationSection,
} from '@/containers/home/_'

const Home = () => {
  useEffect(() => {
    document.title = 'WoraponK Portfolio'
  }, [])

  return (
    <div className="pt-20 pb-44 space-y-40 container mx-auto">
      <WelcomeSection />
      <AboutSection />
      <EducationSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
    </div>
  )
}

export default Home
