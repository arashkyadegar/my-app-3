import { createContext, useContext, useState } from 'react';
import {User,Post, LoginForm, CommentForm, Comment, PostForm} from '../../models/entities';
const myAppContext = createContext({
  createPostModal: false,
  setCreatePostModal: (createPostModal :boolean) => {},
  navbarMenu: false,
  setNavBarMenu: (navbarMenu: boolean) => {},
  userSignInModal: false,
  setUserSignInModal: (userSignInModal: boolean) => {},
  userProfile : {
    _id: "",
    name: "unknown",
    img: "img_avatar1.png",
    password: "",
    token: "",
    remember: false,
    tags: [""],
    follower: "",
    following: ""
  },
  setUserProfile: (user: User) => {},
  addPostForm : {
    _id: ""  ,
    author: new User("","") ,
    title: "" ,
    body: "" ,
    rate: 0 ,
    img: "" ,
    date: "" ,
    isVisible: false ,
    documents: [""] ,
    tags: [""] ,
    links: [""] ,
    comments: Array<Comment> (),
    formIsValid: false,
    bodyError: "",
    titleError:"" 
  },
setAddPostForm : (addPostForm : PostForm) => {},
  selectedPost: {
    _id: ""  ,
    author: new User("","") ,
    title: "" ,
    body: "" ,
    rate: 0 ,
    img: "" ,
    date: "" ,
    isVisible: false ,
    documents: [""] ,
    tags: [""] ,
    links: [""] ,
    comments: Array<Comment> ()
  },
  setSelectedPost :(post: Post) => {},
  comments : [],
  setComments : (comments : []) => {},
  loginForm: {
    username : "",
    password  : "",
    usernameError :"",
    passwordError  :"",
    formIsValid : false
  },
  setLoginForm:(loginForm: LoginForm) => {},
  commentForm: {
    commentText: "",
    commentTextError: "",
    formIsValid:  false
  },
  setCommentForm:(commentForm: CommentForm) => {},
  addPostTagInput : "",
  setAddPostTagInput : (addPostTagInput: string) => {},
  firstRender: true,
  setFirstrender : (firstRender: boolean) => {}
});


export default myAppContext;