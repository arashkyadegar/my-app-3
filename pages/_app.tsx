import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import MainLayout from '@/components/common/mainLayout';
import myAppContext from '@/components/context/context';
import { useState } from 'react';
import { User } from '@/models/entities';

export default function App({ Component, pageProps }: AppProps) {
  const [createPostModal, setCreatePostModal] = useState(false);
  const [navbarMenu, setNavBarMenu] = useState(true);
  const [userProfile, setUserProfile] = useState(new User());
  const [userSignInModal, setUserSignInModal] = useState(false);
  return (
    <>
        <myAppContext.Provider value={{ createPostModal, setCreatePostModal 
          ,navbarMenu ,setNavBarMenu ,userProfile,setUserProfile,userSignInModal,
          setUserSignInModal}} >
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </myAppContext.Provider>
    
    </>
  )
}
