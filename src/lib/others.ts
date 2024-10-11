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
