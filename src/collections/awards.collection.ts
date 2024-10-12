import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/lib/firebase'

import { TAward } from '@/lib/type'

const awardCollection = collection(db, 'awards')

export const getAwards = async () => {
  try {
    const snapshot = await getDocs(awardCollection)
    const awards = snapshot.docs.map(
      (doc) =>
        ({
          id: doc.id,
          ...doc.data(),
        } as TAward),
    )
    return awards
  } catch (error) {
    console.error('Error fetching awards:', error)
    return []
  }
}
