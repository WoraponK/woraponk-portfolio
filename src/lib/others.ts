import { EProject } from './type'

export const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
  e.preventDefault()
  const target = document.querySelector(id)
  if (target) {
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}

export const formatEProject = (type: EProject) => {
  switch (type) {
    case EProject.Education:
      return 'Education'
    case EProject.Hobby:
      return 'Hobby'
    case EProject.Work:
      return 'Work'
  }
}
