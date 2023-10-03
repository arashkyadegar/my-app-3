import { createContext, useContext, useState } from 'react';
import {User,Post, LoginFields} from '../../models/entities';
const myAppContext = createContext({
  createPostModal: false,
  setCreatePostModal: (createPostModal :boolean) => {},
  navbarMenu: false,
  setNavBarMenu: (navbarMenu: boolean) => {},
  userSignInModal: false,
  setUserSignInModal: (userSignInModal: boolean) => {},
  userProfile : {
    _id: "",
    name: "not logged in",
    img: "unknown-avatar.png",
    password: "",
    token: "",
    remember: false,
    tags: [""],
    likes: [""],
    followers: [""],
    followings: [""]
  },
  setUserProfile: (user: User) => {},
  selectedPost: {
    _id: ""  ,
    author: new User() ,
    title: "" ,
    body: "" ,
    rate: 0 ,
    img: "" ,
    date: "" ,
    isVisible: false ,
    documents: [] ,
    tags: [] ,
    links: [] ,
    comments: []
  },
  setSelectedPost :(post: Post) => {},
  comments : [],
  setComments : (comments : []) => {},
  loginFields: {
    username: "",
    password: ""
  },
 setLoginFields: (loginFields: LoginFields) => {},
 commentText:"",
 setCommentText:(commentText: string) => {}
});


export default myAppContext;