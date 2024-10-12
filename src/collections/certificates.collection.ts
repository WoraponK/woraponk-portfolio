import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/lib/firebase'

import { TCertificate } from '@/lib/type'

const certificateCollection = collection(db, 'certificates')

export const getCertificates = async () => {
  try {
    const snapshot = await getDocs(certificateCollection)
    const certificates = snapshot.docs.map(
      (doc) =>
        ({
          id: doc.id,
          ...doc.data(),
        } as TCertificate),
    )
    return certificates
  } catch (error) {
    console.error('Error fetching certificates:', error)
    return []
  }
}
