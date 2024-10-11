// Lib
import React from 'react'

// Images
import { FaSchool, FaUniversity } from 'react-icons/fa'

// Include in project
import { EducationCard } from '@/components/shared/_'

const educationList = [
  {
    icon: <FaSchool />,
    name: 'Bangsawanwittayakom School',
    branch: 'Science and Mathematics',
    grade: '3.70',
    year_start: '2019',
    year_end: '2022',
  },
  {
    icon: <FaUniversity />,
    name: 'University of Phayao',
    branch: 'Software Engineering',
    grade: '3.64',
    year_start: '2022',
    year_end: 'Now',
  },
]

const EducationSection: React.FC = () => {
  return (
    <div className="flex flex-col gap-12">
      <h2 className="text-center">Education</h2>
      <div className="flex flex-col items-center justify-center">
        <div className="w-1 h-24 bg-foreground" />
        <div>
          {educationList.map((ele, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
              <EducationCard
                icon={ele.icon}
                name={ele.name}
                branch={ele.branch}
                grade={ele.grade}
                year_start={ele.year_start}
                year_end={ele.year_end}
              />
              <div className="w-1 h-24 bg-foreground" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EducationSection
