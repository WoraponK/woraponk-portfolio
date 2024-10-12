import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/lib/firebase'

import { TProject } from '@/lib/type'

const projectCollection = collection(db, 'projects')

export const getProjects = async () => {
  try {
    const snapshot = await getDocs(projectCollection)
    const projects = snapshot.docs.map(
      (doc) =>
        ({
          id: doc.id,
          ...doc.data(),
        } as TProject),
    )
    return projects
  } catch (error) {
    console.error('Error fetching projects:', error)
    return []
  }
}
