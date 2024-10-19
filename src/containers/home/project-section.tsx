// Lib
import React from 'react'

// Include in project
import { TProject, EProject } from '@/lib/type'
import { ProjectCard } from '@/components/shared/_'

type Props = {
  data: TProject[]
}

const ProjectSection: React.FC<Props> = ({ data }) => {
  const formatData = [
    {
      title: 'Hobby',
      resutls: data.filter((ele) => ele.type === EProject.Hobby),
    },
    {
      title: 'Education',
      resutls: data.filter((ele) => ele.type === EProject.Education),
    },
    {
      title: 'Work',
      resutls: data.filter((ele) => ele.type === EProject.Work),
    },
  ]

  return (
    <div className="container mx-auto">
      <div id="projects" className="space-y-16">
        <h2 className="text-center">My Projects ({data.length})</h2>
        <div className="space-y-12">
          {formatData.map((data, index) => (
            <div key={index} className="space-y-6">
              <h3>
                {data.title} ({data.resutls.length})
              </h3>
              <div className="grid grid-cols-3 gap-2 max-md:grid-cols-2 max-xs:grid-cols-1">
                {data.resutls.map((project) => (
                  <ProjectCard
                    key={project.id}
                    id={project.id}
                    image={project.image}
                    title={project.title}
                    description={project.description}
                    type={project.type}
                    position={project.position}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectSection
