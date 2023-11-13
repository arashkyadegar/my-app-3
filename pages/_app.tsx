import "@/styles/globals.css";
import type { AppProps } from "next/app";
import MainLayout from "@/components/common/mainLayout";
import myAppContext from "@/components/context/context";
import { useState } from "react";
import {
  CommentForm,
  LoginForm,
  Post,
  PostForm,
  User,
} from "@/models/entities";
import { wrapperForPersistStore,wrapperForStore } from "../redux/store/store";
import { Provider } from "react-redux";
import { initialState } from "@/redux/store/posts";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import ReactDOM from "react-dom";

export default function App({ Component, pageProps }: AppProps) {


  const [createPostModal, setCreatePostModal] = useState(false);
  const [navbarMenu, setNavBarMenu] = useState(true);
  const [userSignInModal, setUserSignInModal] = useState(false);

  const [loginForm, setLoginForm] = useState(new LoginForm());
  const [commentForm, setCommentForm] = useState(new CommentForm());

  const [addPostForm, setAddPostForm] = useState(new PostForm());
  const [addPostTagInput, setAddPostTagInput] = useState("");
  const [firstRender, setFirstrender] = useState(true);
  const [postLikeSign, setPostLikeSign] = useState(false);
  // if (typeof window === "undefined") {
  //   const { store } = wrapperForStore.useWrappedStore(initialState);
  //   return (
  //     <myAppContext.Provider
  //       value={{
  //         createPostModal,
  //         setCreatePostModal,
  //         navbarMenu,
  //         setNavBarMenu,
  //         userSignInModal,
  //         setUserSignInModal,
  //         loginForm,
  //         setLoginForm,
  //         commentForm,
  //         setCommentForm,
  //         addPostForm,
  //         setAddPostForm,
  //         addPostTagInput,
  //         setAddPostTagInput,
  //         firstRender,
  //         setFirstrender,
  //         postLikeSign,
  //         setPostLikeSign,
  //       }}
  //     >
  
  //       <Provider store={store}>
  //           <MainLayout>
  //             <Component {...pageProps} />
  //           </MainLayout>
  //       </Provider>
  //     </myAppContext.Provider>
  
  //   );
  // }else {
    const { store } = wrapperForPersistStore.useWrappedStore(initialState);
    let persistor = persistStore(store);
  return (
    <myAppContext.Provider
      value={{
        createPostModal,
        setCreatePostModal,
        navbarMenu,
        setNavBarMenu,
        userSignInModal,
        setUserSignInModal,
        loginForm,
        setLoginForm,
        commentForm,
        setCommentForm,
        addPostForm,
        setAddPostForm,
        addPostTagInput,
        setAddPostTagInput,
        firstRender,
        setFirstrender,
        postLikeSign,
        setPostLikeSign,
      }}
    >

      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </PersistGate>
      </Provider>
    </myAppContext.Provider>

  );
    // }
}
