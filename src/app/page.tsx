'use client';

import Sidebar from '@/components/Sidebar';
import Loading from '@/components/Loading';
import Login from '@/components/Login';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

import { useEffect } from 'react';

export default function Home() {
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    const addUser = async () => {
      if (user) {
        const docRef = await addDoc(collection(db, 'users'), {
          email: user.email,
          lastSeen: serverTimestamp(),
          photoURL: user.photoURL,
        });
      }
    };
    addUser();
  }, [user]);

  if (loading) return <Loading />;

  return <>{user ? <Sidebar /> : <Login />}</>;
}
