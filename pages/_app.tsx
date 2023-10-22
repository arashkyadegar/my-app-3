import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import MainLayout from '@/components/common/mainLayout';
import myAppContext from '@/components/context/context';
import { useState } from 'react';
import { CommentForm, LoginForm , Post, PostForm, User } from '@/models/entities';

export default function App({ Component, pageProps }: AppProps) {
  const [userProfile, setUserProfile] = useState({
    _id: "",
    name: "unknown",
    img: "img_avatar1.png",
    password: "",
    token: "",
    remember: false,
    tags: [""],
    likes: [""],
    follower: "",
    following: ""
  });



  const [createPostModal, setCreatePostModal] = useState(false);
  const [navbarMenu, setNavBarMenu] = useState(true);
  const [userSignInModal, setUserSignInModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState(new Post());
  const [comments, setComments] = useState([]);


  const [loginForm, setLoginForm] = useState(new LoginForm());
  const [commentForm, setCommentForm] = useState(new CommentForm());

  const [addPostForm, setAddPostForm] = useState(new PostForm());
  const [addPostTagInput, setAddPostTagInput] = useState("");
  const [firstRender, setFirstrender] = useState(true);
  const [postLikeSign, setPostLikeSign] = useState(false);
  return (
        <myAppContext.Provider value={{ createPostModal, setCreatePostModal 
          ,navbarMenu ,setNavBarMenu ,userProfile,setUserProfile,userSignInModal,
          setUserSignInModal,selectedPost,setSelectedPost,comments,setComments
          ,loginForm,setLoginForm,commentForm,setCommentForm,addPostForm,setAddPostForm
          ,addPostTagInput,setAddPostTagInput,firstRender,setFirstrender,postLikeSign,setPostLikeSign
          }} >
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </myAppContext.Provider>
  )
}
