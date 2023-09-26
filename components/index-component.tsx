import { PropsWithChildren } from "react";
import SideProfile from "./side-profile";
import SinglePostComponent from "./single-post-component";
import SideLink from "./side-link";
import SideNewWriters from "./side-new-writers";
import SideMostViewedPeople from "./side-most-viewed-people";
import { Post, User } from "@/models/entities";
import router from "next/router";
import { json } from "node:stream/consumers";

export default function IndexComponent({props} : any)  {

  const postList = JSON.parse(props.post) ;
  
  return (
    <>
    <div className='flex'>
    <div className=" flex flex-col sm:flex-row w-full gap-2  ">
      <div className="flex flex-col sm:w-3/12 gap-4 rounded-lg  overflow-hidden">
        <SideProfile />
      </div>
      <div className=" flex flex-col sm:w-9/12">

        {postList.map((element:any) => (
          <SinglePostComponent key={element._id}  props = {element} />
        ))}
     
        <div className="flex flex-row gap-2">
        <SideNewWriters />
        <SideMostViewedPeople />
        </div>
        </div>
    </div>
    
    </div>
  <div className='flex flex-row mr-1 mt-2 justify-end'>
  <SideLink/>
  </div>
    </>

  )
}