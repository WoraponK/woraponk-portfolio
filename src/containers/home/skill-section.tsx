// Lib
import React from 'react'

// Images
import {
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandJavascript,
  TbBrandTypescript,
  TbBrandNextjs,
  TbBrandVite,
  TbBrandTailwind,
  TbBrandSass,
  TbBrandReact,
  TbBrandFigma,
  TbBrandGithub,
  TbBrandFirebase,
} from 'react-icons/tb'

// Include in project
import { SkillCard } from '@/components/shared/_'

const skills = [
  {
    icon: <TbBrandHtml5 />,
    title: 'HTML',
  },
  {
    icon: <TbBrandCss3 />,
    title: 'CSS',
  },
  {
    icon: <TbBrandTailwind />,
    title: 'TailwindCSS',
  },
  {
    icon: <TbBrandSass />,
    title: 'SASS/SCSS',
  },
  {
    icon: <TbBrandJavascript />,
    title: 'JavaScript',
  },
  {
    icon: <TbBrandTypescript />,
    title: 'TypeScript',
  },
  {
    icon: <TbBrandReact />,
    title: 'React.js',
  },
  {
    icon: <TbBrandNextjs />,
    title: 'Next.js',
  },
  {
    icon: <TbBrandVite />,
    title: 'Vite.js',
  },
  {
    icon: <TbBrandFigma />,
    title: 'Figma',
  },
  {
    icon: <TbBrandGithub />,
    title: 'GitHub',
  },
  {
    icon: <TbBrandFirebase />,
    title: 'Firebase',
  },
]

const SkillSection: React.FC = () => {
  return (
    <div id="skills" className="flex flex-col gap-12">
      <h2 className="text-end">This is my top list skill</h2>
      <div className="flex justify-center flex-wrap gap-7 max-sm:gap-4">
        {skills.map((skill, index) => (
          <SkillCard key={index} icon={skill.icon} title={skill.title} />
        ))}
      </div>
    </div>
  )
}

export default SkillSection
