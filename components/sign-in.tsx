import { LoginService } from "@/services/loginService";
import myAppContext from "./context/context";
import React, { useEffect, useState } from "react";
import validator from "validator";
import * as actions from "../redux/store/api";
import { useAppDispatch, useAppSelector } from "../redux/store/hooks";

export default function SignIn({ props }: any) {
  const { userProfile, setUserProfile } = React.useContext(myAppContext);
  const { loginForm, setLoginForm } = React.useContext(myAppContext);
  const { userSignInModal, setUserSignInModal } =
    React.useContext(myAppContext);
    const dispatch = useAppDispatch();
  async function submitSigninApi(event: any): Promise<void> {
    let _loginService = new LoginService();
    event.preventDefault();
    if (loginForm.formIsValid) {
      dispatch(
        actions.apiCallBegan({
          url: "/auth/login/",
          method: "POST",
          onSuccess: "user/userRecieved",
          body: JSON.stringify({ name: loginForm.username,password:loginForm.password,remember: true})
        })
      );

      const res = await _loginService.login(
        loginForm.username,
        loginForm.password,
        "true"
      );

      if (res.status != 200) {
        return;
      }

      const repo = (await res.json())[0];
      console.log(repo);
      localStorage.setItem("name", repo.name);
      localStorage.setItem("img", repo.img);
      localStorage.setItem("_id", repo._id);
      localStorage.setItem("token", repo.token);
      localStorage.setItem("following", repo.following.length);
      localStorage.setItem("follower", repo.follower.length);

      setUserProfile({
        ...userProfile,
        name: repo.name,
        img: repo.img,
        _id: repo._id,
        token: repo.token,
        follower: repo.follower.length,
        following: repo.following.length,
      });
      setUserSignInModal(false);
    }
  }

  function fillLoginUsername(event: any) {
    let text: string = validator.escape(event.target.value);
    if (validator.isEmpty(text)) {
      setLoginForm({
        ...loginForm,
        usernameError: "لطفا نام کاربری را وارد کنید",
        formIsValid: false,
      });
    } else {
      setLoginForm({
        ...loginForm,
        username: text,
        usernameError: "",
        formIsValid: true,
      });
    }
  }

  function fillLoginPassword(event: any) {
    let text: string = validator.escape(event.target.value);
    if (validator.isEmpty(text)) {
      setLoginForm({
        ...loginForm,
        passwordError: "لطفا کلمه عبور را وارد کنید",
        formIsValid: false,
      });
    } else {
      setLoginForm({
        ...loginForm,
        password: text,
        passwordError: "",
        formIsValid: true,
      });
    }
  }

  return (
    <div className="absolute bg-white w-6/12  rounded-lg">
      <div className=" mb-10 mx-auto  border-gray-500 w-full  p-5">
        <ul className="flex flex-row gap-2 ">
          <li className="cursor-pointer p-2 border-gray-900">Sign-up</li>
          <li className="cursor-pointer p-2 border-gray-900">Sign-in</li>
        </ul>

        <div className=" flex flex-row justify-center items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            className="w-14 h-14 cursor-pointer delay-100 transition-all hover:h-16 hover:w-16"
            viewBox="0 0 48 48"
          >
            <path
              fill="#3F51B5"
              d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
            ></path>
            <path
              fill="#FFF"
              d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"
            ></path>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            className="w-14 h-14 cursor-pointer delay-100  transition-all hover:h-16 hover:w-16"
            viewBox="0 0 48 48"
          >
            <linearGradient
              id="_osn9zIN2f6RhTsY8WhY4a_5MQ0gPAYYx7a_gr1"
              x1="10.341"
              x2="40.798"
              y1="8.312"
              y2="38.769"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#2aa4f4"></stop>
              <stop offset="1" stopColor="#007ad9"></stop>
            </linearGradient>
            <path
              fill="url(#_osn9zIN2f6RhTsY8WhY4a_5MQ0gPAYYx7a_gr1)"
              d="M46.105,11.02c-1.551,0.687-3.219,1.145-4.979,1.362c1.789-1.062,3.166-2.756,3.812-4.758	c-1.674,0.981-3.529,1.702-5.502,2.082C37.86,8.036,35.612,7,33.122,7c-4.783,0-8.661,3.843-8.661,8.582	c0,0.671,0.079,1.324,0.226,1.958c-7.196-0.361-13.579-3.782-17.849-8.974c-0.75,1.269-1.172,2.754-1.172,4.322	c0,2.979,1.525,5.602,3.851,7.147c-1.42-0.043-2.756-0.438-3.926-1.072c0,0.026,0,0.064,0,0.101c0,4.163,2.986,7.63,6.944,8.419	c-0.723,0.198-1.488,0.308-2.276,0.308c-0.559,0-1.104-0.063-1.632-0.158c1.102,3.402,4.299,5.889,8.087,5.963	c-2.964,2.298-6.697,3.674-10.756,3.674c-0.701,0-1.387-0.04-2.065-0.122C7.73,39.577,12.283,41,17.171,41	c15.927,0,24.641-13.079,24.641-24.426c0-0.372-0.012-0.742-0.029-1.108C43.483,14.265,44.948,12.751,46.105,11.02"
            ></path>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            className="w-14 h-14 cursor-pointer delay-100  transition-all hover:h-16 hover:w-16"
            viewBox="0 0 48 48"
          >
            <path
              fill="#FFC107"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
            <path
              fill="#FF3D00"
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            ></path>
            <path
              fill="#4CAF50"
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            ></path>
            <path
              fill="#1976D2"
              d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
          </svg>
        </div>
        <form onSubmit={submitSigninApi} data-te-validation-init>
          <div className="flex flex-col relative  mb-2">
            <label htmlFor="email" className="text-base mb-2">
              نام کاربری
            </label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="absolute top-9 left-1 w-6 h-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>

            <input
              required
              onChange={fillLoginUsername}
              type="text"
              id="email"
              name="email"
              className="outline-none rounded-lg bg-transparent border border-gray-600 p-1 pl-8"
            />

            <p className="text-red-600 text-xs">{loginForm.usernameError}</p>
          </div>

          <div className="flex flex-col relative ">
            <label htmlFor="password" className="text-base mb-2 ">
              کلمه عبور
            </label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="absolute top-9 left-1 w-6 h-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>

            <input
              required
              type="password"
              onChange={fillLoginPassword}
              id="password"
              name="password"
              className="outline-none rounded-lg bg-transparent border border-gray-600 p-1 pl-8"
            />
            <p className="text-red-600 text-xs">{loginForm.passwordError}</p>
          </div>

          <div className="flex flex-row mt-4 justify-end">
            <button
              type="submit"
              className="bg-cyan-300 inline px-4 py-2 rounded-md text-black"
            >
              ورود
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
