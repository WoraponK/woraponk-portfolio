import { collection, addDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase'

import { TContact } from '@/lib/type'

const contactCollection = collection(db, 'contacts')

export const addContact = async (post: TContact) => {
  try {
    await addDoc(contactCollection, post)
  } catch (error) {
    console.error('Error adding contact:', error)
  }
}
