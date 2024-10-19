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
    description: 'The standard markup language for creating and structuring content on the web.',
  },
  {
    icon: <TbBrandCss3 />,
    title: 'CSS',
    description:
      'A stylesheet language used to style and layout HTML elements, controlling design aspects like colors and fonts.',
  },
  {
    icon: <TbBrandJavascript />,
    title: 'JavaScript',
    description:
      'A programming language used to make web pages interactive, handling dynamic content and user interactions.',
  },
  {
    icon: <TbBrandTailwind />,
    title: 'TailwindCSS',
    description:
      'A utility-first CSS framework that simplifies styling by providing pre-defined classes for fast and responsive design.',
  },
  {
    icon: <TbBrandSass />,
    title: 'SASS/SCSS',
    description:
      'A CSS preprocessor that adds features like variables, nesting, and functions to make CSS more maintainable and efficient.',
  },
  {
    icon: <TbBrandTypescript />,
    title: 'TypeScript',
    description:
      'A superset of JavaScript that adds static typing, enhancing code reliability and development with type checking.',
  },
  {
    icon: <TbBrandReact />,
    title: 'React.js',
    description:
      'A JavaScript library for building user interfaces, particularly single-page applications, using reusable components.',
  },
  {
    icon: <TbBrandNextjs />,
    title: 'Next.js',
    description:
      'A React-based framework for building server-rendered web applications, offering features like API routes and static site generation.',
  },
  {
    icon: <TbBrandVite />,
    title: 'Vite.js',
    description:
      'A fast build tool for modern JavaScript frameworks like React and Vue, offering quick development and hot module replacement.',
  },
  {
    icon: <TbBrandFigma />,
    title: 'Figma',
    description:
      'A collaborative design tool used for creating user interfaces, wireframes, and prototypes in real-time with teams.',
  },
  {
    icon: <TbBrandGithub />,
    title: 'GitHub',
    description:
      'A platform for version control and collaboration, allowing developers to manage code, track changes, and contribute to projects.',
  },
  {
    icon: <TbBrandFirebase />,
    title: 'Firebase',
    description:
      'A cloud-based platform by Google providing backend services like authentication, database, and hosting for web and mobile apps.',
  },
]

const SkillSection: React.FC = () => {
  return (
    <div className="bg-foreground py-16">
      <div className="container mx-auto">
        <div id="skills" className="flex flex-col gap-12">
          <h2 className="text-end text-primary">This is my top list skill</h2>
          <div className="flex justify-center flex-wrap gap-7 max-sm:gap-4">
            {skills.map((skill, index) => (
              <SkillCard key={index} icon={skill.icon} title={skill.title} description={skill.description} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillSection
