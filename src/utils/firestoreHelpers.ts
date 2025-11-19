import { doc, setDoc, serverTimestamp, collection, getDoc, addDoc } from 'firebase/firestore';
import { FirebaseError } from 'firebase/app';
import { ActivityResult } from '@/types/models';
import { initFirebase } from '@/firebase/firebase';

const { db } = initFirebase();

export type FirestoreResult<T> = { ok: true; data: T } | { ok: false; error: string };

export async function saveActivityResult(result: Omit<ActivityResult, 'id' | 'createdAt'>): Promise<FirestoreResult<ActivityResult>> {
  try {
    const ref = await addDoc(collection(db, 'activityResults'), {
      ...result,
      createdAt: serverTimestamp(),
    });
    const snap = await getDoc(doc(db, 'activityResults', ref.id));
    const createdAtVal = Date.now();
    return { ok: true, data: { id: snap.id, createdAt: createdAtVal, ...(snap.data() as any) } };
  } catch (e) {
    const msg = e instanceof FirebaseError ? `${e.code}: ${e.message}` : 'Unknown Firestore error';
    return { ok: false, error: msg };
  }
}
