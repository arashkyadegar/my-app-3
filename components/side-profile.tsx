import { PropsWithChildren, useState } from "react";

export default function SideProfile({props} : any)  {

  return (
    <>
    <div className="flex flex-col rounded-lg  border border-gray-400 bg-white shadow-lg">
    <div className="bg-purple-800  h-20 flex justify-center ">
      <div className="border border-gray-300 mt-10  w-20 h-20  bg-white p-2 rounded-full overflow-hidden cursor-pointer">
        <img src="../css/images/avator (1).png" alt="" />
      </div>
    </div>
    <div className="flex flex-col justify-center items-center mt-10  w-full gap-2 ">
      <div className="flex flex-col w-full items-center py-2 border-b border-gray-400">
        <h1 className="text-center font-bold text-sm ">Track Time on WorkSample</h1>
        <h1 className="text-xs font-semibold text-gray-400 w-full text-center pb-2">for only members</h1>
      </div>
      <div className="flex flex-col w-full items-center py-2 border-b border-gray-400">
        <h1   className="text-sm font-semibold text-gray-400 w-full text-center">Following</h1>
        <h1  className="text-sm font-semibold ">23</h1>
      </div>

      <div className="flex flex-col w-full items-center py-2 border-b border-gray-400">
        <h1  className="text-sm font-semibold text-gray-400 w-full text-center">Followers</h1>
        <h1 className="text-sm font-semibold ">156</h1>
      </div>

      <div className="flex flex-col w-full items-center pb-2 justify-center">
        <h1 className=" text-sm font-semibold text-red-600">View Profile</h1>
      </div>
    </div>

      </div>
    </>
  )
}