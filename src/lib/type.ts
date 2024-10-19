export enum EProject {
  Work = 'WORK',
  Education = 'EDUCATION',
  Hobby = 'HOBBY',
}

export type TCertificate = {
  id: string
  image: string
  title: string
}

export type TAward = {
  id: string
  image: string
  title: string
}

export type TContact = {
  title: string
  email: string
  description: string
}

export type TProject = {
  id: string
  image: string
  title: string
  description: string
  position: string
  type: EProject
}
