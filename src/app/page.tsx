'use client'

// Lib
import React, { useEffect, useState } from 'react'

// Include in project
import {
  WelcomeSection,
  AboutSection,
  SkillSection,
  ProjectSection,
  ContactSection,
  EducationSection,
  AwardSection,
  CertificationSection,
} from '@/containers/home/_'
import { TCertificate, TProject, TAward } from '@/lib/type'

// Collection
import { getCertificates } from '@/collections/certificates.collection'
import { getProjects } from '@/collections/projects.collection'
import { getAwards } from '@/collections/awards.collection'

const Home = () => {
  const [certificates, setCertificates] = useState<TCertificate[]>([])
  const [projects, setProjects] = useState<TProject[]>([])
  const [awards, setAwards] = useState<TAward[]>([])

  const fetchData = async () => {
    try {
      const [projectData, certificateData, awardData] = await Promise.all([
        getProjects(),
        getCertificates(),
        getAwards(),
      ])
      setProjects(projectData)
      setCertificates(certificateData)
      setAwards(awardData)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    document.title = 'WoraponK Portfolio'
    fetchData()
  }, [])

  return (
    <div id="main" className="py-20 space-y-40 max-md:space-y-20">
      <WelcomeSection />
      <AboutSection />
      <EducationSection />
      <AwardSection data={awards} />
      <SkillSection />
      <ProjectSection data={projects} />
      <CertificationSection data={certificates} />
      <ContactSection />
    </div>
  )
}

export default Home
