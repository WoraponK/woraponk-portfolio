// Lib
import React from 'react'

type Props = {
  icon: React.ReactNode
  name: string
  branch: string
  grade: string
  year_start: string
  year_end: string
}

const EducationCard: React.FC<Props> = ({ icon, name, grade, branch, year_end, year_start }) => {
  return (
    <div className="bg-foreground w-full max-w-lg text-background p-8 flex items-center gap-8 max-sm:flex-col max-sm:gap-4 max-sm:p-4">
      <span className="text-5xl">{icon}</span>
      <div className="space-y-2">
        <h4 className="break-all line-clamp-1 text-lg max-sm:text-xs max-sm:text-center">{name}</h4>
        <div className="text-primary">
          <h5>{branch}</h5>
          <h5>GPA: {grade}</h5>
          <h5>
            {year_start} - {year_end}
          </h5>
        </div>
      </div>
    </div>
  )
}

export default EducationCard
