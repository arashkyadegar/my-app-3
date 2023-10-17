import SideProfile from "./side-profile";
import SinglePostComponent from "./single-post-component";
import SideLink from "./side-link";
import SideNewWriters from "./side-new-writers";
import AddPost from "./add-post";
import SideMostViewedPeople from "./side-most-viewed-people";
import myAppContext from '@/components/context/context';
import React, { useEffect, useState } from "react";
import SignIn from "./sign-in";
import { User } from "@/models/entities";


export default function IndexComponent({props} : any)  {
   const {userProfile} = React.useContext(myAppContext);
   const {createPostModal,setCreatePostModal} = React.useContext(myAppContext);
   const {userSignInModal} = React.useContext(myAppContext);
  const posts = JSON.parse(props.post);
  let name:string;
  let img:string;
  let token:string;
  let _id:string;

   useEffect(() => {
    if(!localStorage.getItem('_id') === null){
      _id = localStorage.getItem('_id')!;
    }
    
    if(!localStorage.getItem('name') === null){
      name = localStorage.getItem('name')!;
    }


    if(!localStorage.getItem('img') === null){
      img = localStorage.getItem('img')!;
    }

    if(!localStorage.getItem('token') === null){
      token = localStorage.getItem('token')!;
    }

    // setUserProfile(
    //   {...userProfile,
    //     _id: localStorage.getItem('_id')!,
    //     name: localStorage.getItem('name')!,
    //     img: localStorage.getItem('img')!,
    //     token: localStorage.getItem('token')!,
    //   });
   }, []);

  return (

    <div>
      <div  className="fixed rounded-full top-96 overflow-hidden shadow-lg">
          <svg  onClick={() => setCreatePostModal(true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 cursor-pointer text-white  bg-green-300 hover:bg-green-500" >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      <div className='flex'>
        <div className=" flex flex-col sm:flex-row w-full gap-2  ">
          <div className="flex flex-col sm:w-3/12 gap-4 rounded-lg  overflow-hidden">
            <SideProfile props = {userProfile}/>
          </div>

          <div className=" flex flex-col sm:w-9/12">
            {posts.map((post:any) => (
              <SinglePostComponent key={userProfile._id}  props = {post} />
            ))}  
            <div className="flex flex-row gap-2">
              <SideNewWriters />
              <SideMostViewedPeople />
            </div>
          </div>

          {userSignInModal && (
              <div className="flex flex-col items-center justify-center  bg-black-rgba fixed inset-0">
                <SignIn />
              </div>
          )}

          {createPostModal && ( 
            <div  className=" flex flex-col items-center justify-center  bg-black-rgba fixed inset-0">
              <AddPost  />
            </div>
          )} 
          
        </div>
      </div>
      <div className='flex flex-row mr-1 mt-2 justify-end'>
        <SideLink/>
      </div>
    </div>
  )
}