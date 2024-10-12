// Lib
import React from 'react'

type Props = {
  icon: React.ReactNode
  title: string
}

const SkillCard: React.FC<Props> = ({ icon, title }) => {
  return (
    <div className="flex items-center justify-center space-x-2 p-4 bg-background border-2 border-background transition-colors hover:bg-foreground hover:text-primary hover:border-primary">
      <span className="text-5xl">{icon}</span>
      <h3 className="max-sm:hidden">{title}</h3>
    </div>
  )
}

export default SkillCard
