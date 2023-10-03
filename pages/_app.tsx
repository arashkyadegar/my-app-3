import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import MainLayout from '@/components/common/mainLayout';
import myAppContext from '@/components/context/context';
import { useState } from 'react';
import { LoginFields, Post, User } from '@/models/entities';

export default function App({ Component, pageProps }: AppProps) {
  const [createPostModal, setCreatePostModal] = useState(false);
  const [navbarMenu, setNavBarMenu] = useState(true);
  const [userSignInModal, setUserSignInModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState(new Post());
  const [comments, setComments] = useState([]);
  const [userProfile, setUserProfile] = useState(new User());
  const [loginFields, setLoginFields] = useState(new LoginFields());
  const [commentText, setCommentText] = useState("");

  
  return (
        <myAppContext.Provider value={{ createPostModal, setCreatePostModal 
          ,navbarMenu ,setNavBarMenu ,userProfile,setUserProfile,userSignInModal,
          setUserSignInModal,selectedPost,setSelectedPost,comments,setComments
          ,loginFields,setLoginFields,commentText,setCommentText}} >
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </myAppContext.Provider>
  )
}
