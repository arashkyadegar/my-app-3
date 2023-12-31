import { createContext, useContext, useState } from "react";
import {
  User,
  Post,
  LoginForm,
  CommentForm,
  Comment,
  PostForm,
  LikeEntity,
  SignupForm,
} from "../../models/entities";
const myAppContext = createContext({
  passwordRepeatVisiblity: false,
  setPasswordRepeatVisibility: (passwordRepeatVisiblity: boolean) => {},
  passwordVisiblity: false,
  setPasswordVisibility: (passwordVisiblity: boolean) => {},
  createPostModal: false,
  setCreatePostModal: (createPostModal: boolean) => {},
  navbarMenu: false,
  setNavBarMenu: (navbarMenu: boolean) => {},
  userSignInModalTab: true,
  setUserSignInModalTab: (userSignInModal: boolean) => {},
  userSignInModal: false,
  setUserSignInModal: (userSignInModal: boolean) => {},
  addPostForm: {
    _id: "",
    author: {
      _id: "",
      name: "",
      img: "",
      password: "",
      token: "",
      remember: false,
      tags: [],
      likes: [],
      followers: [""],
      followings: [""],
    },
    title: "",
    body: "",
    rate: 0,
    img: "",
    date: "",
    isVisible: false,
    documents: [""],
    tags: [""],
    links: [""],
    comments: Array<Comment>(),
    formIsValid: false,
    bodyError: "",
    titleError: "",
    likes: [],
    liked: false,
  },
  setAddPostForm: (addPostForm: PostForm) => {},
  signupForm: {
    username: "",
    password: "",
    passwordRepeat: "",
    passwordRepeatError: "",
    usernameError: "",
    passwordError: "",
    formIsValid: false,
    uploaded_file: "",
  },
  setSignupForm: (signupForm: SignupForm) => {},
  loginForm: {
    username: "",
    password: "",
    usernameError: "",
    passwordError: "",
    uploaded_file: "",
    formIsValid: false,
  },
  setLoginForm: (loginForm: LoginForm) => {},
  commentForm: {
    commentText: "",
    commentTextError: "",
    formIsValid: false,
  },
  setCommentForm: (commentForm: CommentForm) => {},
  addPostTagInput: "",
  setAddPostTagInput: (addPostTagInput: string) => {},
  firstRender: true,
  setFirstrender: (firstRender: boolean) => {},
  postLikeSign: false,
  setPostLikeSign: (firstRender: boolean) => {},
});

export default myAppContext;
