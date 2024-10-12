export enum EProject {
  W = 'Work',
  E = 'Education',
  H = 'Hobby',
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
  id: string
  title: string
  email: string
  description: string
}

export type TProject = {
  id: string
  image: string
  title: string
  description: string
  type: EProject
}
