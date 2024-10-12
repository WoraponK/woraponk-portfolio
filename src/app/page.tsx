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
import { TCertificate } from '@/lib/type'

// Collection
import { getCertificates } from '@/collections/certificates.collection'

const Home = () => {
  const [certificates, setCertificates] = useState<TCertificate[]>([])

  const fetchCertificates = async () => {
    try {
      const data = await getCertificates()
      setCertificates(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    document.title = 'WoraponK Portfolio'
    fetchCertificates()
  }, [])

  return (
    <div className="py-20 space-y-40">
      <WelcomeSection />
      <AboutSection />
      <EducationSection />
      <AwardSection />
      <SkillSection />
      <ProjectSection />
      <CertificationSection data={certificates} />
      <ContactSection />
    </div>
  )
}

export default Home
