import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import MainLayout from '@/components/common/mainLayout';
import myAppContext from '@/components/context/context';
import { useState } from 'react';
import { Post, User } from '@/models/entities';

export default function App({ Component, pageProps }: AppProps) {
  const [createPostModal, setCreatePostModal] = useState(false);
  const [navbarMenu, setNavBarMenu] = useState(true);
  const [userProfile, setUserProfile] = useState(new User());
  const [userSignInModal, setUserSignInModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState(new Post());
  const [comments, setComments] = useState([]);
  return (
        <myAppContext.Provider value={{ createPostModal, setCreatePostModal 
          ,navbarMenu ,setNavBarMenu ,userProfile,setUserProfile,userSignInModal,
          setUserSignInModal,selectedPost,setSelectedPost,comments,setComments}} >
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </myAppContext.Provider>
  )
}
