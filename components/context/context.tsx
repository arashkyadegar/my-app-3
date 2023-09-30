import { createContext, useContext, useState } from 'react';
import {User} from '../../models/entities';
const myAppContext = createContext({
  createPostModal: false,
  setCreatePostModal: (createPostModal :boolean) => {},
  navbarMenu:false,
  setNavBarMenu: (navbarMenu: boolean) => {},
  userSignInModal:false,
  setUserSignInModal: (userSignInModal: boolean) => {},
  userProfile : {
    _id: "",
    name: "not logged in",
    img: "unknown-avatar.png",
    password: "",
    token: "",
    remember: false,
    tags:[""],
    likes: [""],
    followers: [""],
    followings: [""]
  },
  setUserProfile: (user: User) => {}
});


export default myAppContext;