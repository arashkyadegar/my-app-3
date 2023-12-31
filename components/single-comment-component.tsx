import React from "react";
import { PropsWithChildren } from "react";
import { useState, useEffect } from 'react'
import myAppContext from "./context/context";
import router, { useRouter } from "next/router";
import moment from "moment";
export default function SingleCommentComponent({props} : any)  {

  return ( 
      <div key={props._id}  className="flex flex-row border even:bg-gray-100 bg-white border-gray-300 p-4">
 
        <img src={((props.user == null)? "unknown-avatar.png": props.user.img)} alt="avatar" className=" cursor-pointer w-10 h-10 rounded-full ml-2" />

        <div className="flex flex-col gap-2 w-full">
          <div className="flex flex-col">
          <h3 className=" font-bold text-xs">
          {props.user.name}
          </h3>
          <h3 className=" text-xs text-gray-500 ">
          {moment(new Date(props.date)).startOf('hour').fromNow()}
          {/* {moment(new Date(props.date)).subtract(10, 'days').calendar()} */}
          </h3>
          </div>

          <div className="flex flex-row ">
            <p className="line-clamp-1 w-full">
              {props.text}
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-red-700 mr-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          </div>

          <div className="flex flex-row pt-2 text-gray-600">
            {/* heart-svg  */}
            <a>{props.rate} پسندیدند</a>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          </div>
        </div>
      </div>  
  )
}