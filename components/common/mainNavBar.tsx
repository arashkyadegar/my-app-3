// components/common/MainNavBar.tsx
import React, { PropsWithChildren, useState } from "react";
import Link from "next/link";
import myAppContext from "../context/context";
import Swal from "sweetalert2";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import { userLoggedOut } from "@/redux/store/user";
export default function MainNavBar({ children }: PropsWithChildren) {
  const { navbarMenu, setNavBarMenu } = React.useContext(myAppContext);
  const { userSignInModal, setUserSignInModal } = React.useContext(myAppContext);
  const {user} = useAppSelector((state) => state.entities);
  const dispatch = useAppDispatch();
  //const { userProfile, setUserProfile } = React.useContext(myAppContext);
  function callUserExit() {
    Swal.fire({
      title: "خروج از سایت ",
      text: "ایا قصد خروج از سایت را دارید ؟ ",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "خیر",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "بله",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(userLoggedOut({}));
        localStorage.setItem("name", "");
        localStorage.setItem("img", "img_avatar1.png");
        localStorage.setItem("_id", "");
        localStorage.setItem("token", "");
        localStorage.setItem("following", "");
        localStorage.setItem("follower", "");
        Swal.fire({
          title: "عملیات موفقیت امیز بود",
          text: "شما با موفقیت از سایت خارج شدید",
          icon: "success",
          confirmButtonText: "باشه",
        });
      }
    });
  }
  const toggleNavBar = () => {
    setNavBarMenu(!navbarMenu);
  };
  
  return (
    <div className="z-10 fixed flex flex-wrap container lg:flex-nowrap w-full p-2 bg-purple-800 text-gray-200 justify-between">
      <div className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 sm:float-right "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z"
          />
        </svg>
        { navbarMenu &&
          <ul
            className="w-4/4 flex flex-col sm:flex-row sm:flex
              gap-4 transition-transform items-center"
          >
            <li className="hover:text-gray-300 cursor-pointer">
              <Link
                href={{
                  pathname: `/`,
                }}
              >
                {" "}
                صفحه اصلی
              </Link>
            </li>
            <li className="hover:text-gray-300 cursor-pointer">گالری</li>

            <li className="hover:text-gray-300 cursor-pointer">
              <Link
                href={{
                  pathname: `/contactUs`,
                }}
              >
                {" "}
                ارتباط با ما
              </Link>
            </li>

            <li
              onClick={() => {
                setUserSignInModal(true);
              }}
              className="hover:text-gray-300 cursor-pointer"
            >
              ورود / ثبت نام
            </li>

           {user.data._id != "" && ( 
            <li
              onClick={() => {
                callUserExit();
              }}
              className="hover:text-gray-300 cursor-pointer"
            >
              خروج
            </li>
             )} 
          </ul>
        }
      </div>
      <div className="visible sm:hidden  cursor-pointer">
        <svg
                      onClick={() => {
                        toggleNavBar();
                      }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 border border-gray-200"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
    </div>
  );
}
