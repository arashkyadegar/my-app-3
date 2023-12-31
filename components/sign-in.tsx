import { LoginService } from "@/services/loginService";
import myAppContext from "./context/context";
import React, { useEffect, useState } from "react";
import validator from "validator";
import * as actions from "../redux/store/api";
import { useAppDispatch, useAppSelector } from "../redux/store/hooks";
import Swal from "sweetalert2";
import { submitSigninAction, submitSignupAction } from "@/redux/store/user";
import { submitUploadAction } from "@/redux/store/file";

export default function SignIn({ props }: any) {
  const { loginForm, setLoginForm } = React.useContext(myAppContext);
  const { signupForm, setSignupForm } = React.useContext(myAppContext);
  const { passwordRepeatVisiblity, setPasswordRepeatVisibility } =
    React.useContext(myAppContext);
  const { passwordVisiblity, setPasswordVisibility } =
    React.useContext(myAppContext);
  const { userSignInModalTab, setUserSignInModalTab } =
    React.useContext(myAppContext);
  const { userSignInModal, setUserSignInModal } =
    React.useContext(myAppContext);
  const user = useAppSelector((state) => state.entities.user);
  const fileState = useAppSelector((state) => state.entities.file);
  const dispatch = useAppDispatch();
  async function submitSigninApi(event: any): Promise<void> {
    event.preventDefault();
    if (loginForm.formIsValid) {
      const username = loginForm.username;
      const password = loginForm.password;
      const remember = true;

      dispatch(submitSigninAction(username, password, remember));

      setUserSignInModal(false);
    }
  }
  async function submitSignupApi(event: any): Promise<void> {
    event.preventDefault();
    if (signupForm.formIsValid) {
      const username = signupForm.username;
      const password = signupForm.password;
      const remember = true;

      const formdata = new FormData();
      const file = loginForm.uploaded_file;
      formdata.set("file", file);
      formdata.set("name", username);
      dispatch(submitUploadAction(formdata));
      const filename = fileState.data.name;
      dispatch(
        submitSignupAction({
          name: username,
          password: password,
          token: "",
          remember: remember,
          tags: [],
          likes: [],
          followers: [],
          followings: [],
          img: filename,
          _id: "",
        })
      );
    }
  }
  function x(payload: any) {
    let timerInterval: any;
    Swal.fire({
      title: "error",
      html: payload,
      timer: 2000,
      position: "bottom-end",
      color: "white",
      background: "#fa6b6b",
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup()!.querySelector("b");
        timerInterval = setInterval(() => {}, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
  }
  function fillLoginFile(event: any) {
    const fileInput = event.target.files[0];
    // console.log(fileInput.value);
    setLoginForm({
      ...loginForm,
      uploaded_file: fileInput,
    });
  }
  function fillSignupUsername(event: any) {
    let text: string = validator.escape(event.target.value);
    if (validator.isEmpty(text)) {
      setSignupForm({
        ...signupForm,
        usernameError: "لطفا نام کاربری را وارد کنید",
        formIsValid: false,
      });
    } else {
      setSignupForm({
        ...signupForm,
        username: text,
        usernameError: "",
        formIsValid: true,
      });
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
  function fillSignupPasswordRepeat(event: any) {
    let text: string = validator.escape(event.target.value);
    if (validator.isEmpty(text)) {
      setSignupForm({
        ...signupForm,
        passwordRepeatError: "لطفا تکرار کلمه عبور را وارد کنید",
        formIsValid: false,
      });
    } else {
      setSignupForm({
        ...signupForm,
        passwordRepeat: text,
        passwordRepeatError: "",
        formIsValid: true,
      });
    }
  }
  function fillSignupPassword(event: any) {
    let text: string = validator.escape(event.target.value);
    if (validator.isEmpty(text)) {
      setSignupForm({
        ...signupForm,
        passwordError: "لطفا کلمه عبور را وارد کنید",
        formIsValid: false,
      });
    } else {
      setSignupForm({
        ...signupForm,
        password: text,
        passwordError: "",
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

  function showPassword(event: any): void {
    alert("done");
  }

  return (
    <div className="absolute bg-white w-6/12 text-black  rounded-lg">
      <div className=" mb-10 mx-auto  border-gray-500 w-full">
        <ul className="flex flex-row  bg-purple-800 text-white rounded-t-lg justify-between">
          <ul className="flex flex-row gap-2">
            <li
              onClick={() => {
                setUserSignInModalTab(true);
              }}
              className="   cursor-pointer p-2 rounded-t-lg border border-white"
            >
              ورود
            </li>
            <li
              onClick={() => {
                setUserSignInModalTab(false);
              }}
              className="cursor-pointer p-2 rounded-t-lg  border border-white clear-right"
            >
              ثبت نام
            </li>
          </ul>
          <li className="">
            <svg
              onClick={() => setUserSignInModal(false)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-7 h-7 cursor-pointer m-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </li>
        </ul>

        {/* sign in div */}
        {userSignInModalTab && (
          <div className=" p-5">
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
            <form
              onSubmit={submitSigninApi}
              encType="multipart/form-data"
              data-te-validation-init
            >
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

                <p className="text-red-600 text-xs">
                  {loginForm.usernameError}
                </p>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="absolute top-9 left-8 w-6 h-6 cursor-pointer "
                  onMouseDown={() => setPasswordVisibility(true)}
                  onMouseUp={() => setPasswordVisibility(false)}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <input
                  required
                  type={passwordVisiblity ? "text" : "password"}
                  onChange={fillLoginPassword}
                  id="password"
                  name="password"
                  className="outline-none rounded-lg bg-transparent border border-gray-600 p-1 pl-8"
                />
                <p className="text-red-600 text-xs">
                  {loginForm.passwordError}
                </p>
              </div>

              <div className="flex flex-row mt-4 gap-2 justify-end  text-white">
                <button
                  type="submit"
                  className="bg-blue-400 hover:bg-blue-600 transition-all duration-200 inline px-4 py-2 rounded-md"
                >
                  ورود
                </button>

                <button
                  onClick={() => setUserSignInModal(false)}
                  type="button"
                  className="bg-red-400 hover:bg-red-600 transition-all duration-200 inline px-4 py-2 rounded-md"
                >
                  لغو
                </button>
              </div>
            </form>
          </div>
        )}
        {/* register  div */}
        {!userSignInModalTab && (
          <div className=" p-5">
            <form onSubmit={submitSignupApi} data-te-validation-init>
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
                  onChange={fillSignupUsername}
                  type="text"
                  id="email"
                  name="email"
                  className="outline-none rounded-lg bg-transparent border border-gray-600 p-1 pl-8"
                />

                <p className="text-red-600 text-xs">
                  {signupForm.usernameError}
                </p>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="absolute top-9 left-8 w-6 h-6 cursor-pointer "
                  onMouseDown={() => setPasswordVisibility(true)}
                  onMouseUp={() => setPasswordVisibility(false)}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <input
                  required
                  type={passwordVisiblity ? "text" : "password"}
                  onChange={fillSignupPassword}
                  id="password"
                  name="password"
                  className="outline-none rounded-lg bg-transparent border border-gray-600 p-1 pl-8"
                />
                <p className="text-red-600 text-xs">
                  {signupForm.passwordError}
                </p>
              </div>

              <div className="flex flex-col relative mb-2">
                <label htmlFor="passwordRe" className="text-base mb-2 ">
                  تکرار کلمه عبور
                </label>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="absolute top-9 left-1 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="absolute top-9 left-8 w-6 h-6 cursor-pointer "
                  onMouseDown={() => setPasswordRepeatVisibility(true)}
                  onMouseUp={() => setPasswordRepeatVisibility(false)}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <input
                  required
                  type={passwordRepeatVisiblity ? "text" : "password"}
                  onChange={fillSignupPasswordRepeat}
                  id="passwordRepeat"
                  name="passwordRepeat"
                  className="outline-none rounded-lg bg-transparent border border-gray-600 p-1 pl-8"
                />
                <p className="text-red-600 text-xs">
                  {signupForm.passwordRepeatError}
                </p>
              </div>
              <div className="flex flex-col">
                <input
                  onChange={fillLoginFile}
                  type="file"
                  className="form-control-file"
                  name="uploaded_file"
                />
              </div>
              <div className="flex flex-row mt-4 gap-2 justify-end  text-white">
                <button
                  type="submit"
                  className="bg-blue-400 hover:bg-blue-600 transition-all duration-200 inline px-4 py-2 rounded-md"
                >
                  ثبت
                </button>

                <button
                  onClick={() => setUserSignInModal(false)}
                  type="button"
                  className="bg-red-400 hover:bg-red-600 transition-all duration-200 inline px-4 py-2 rounded-md"
                >
                  لغو
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
