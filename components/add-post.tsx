import { PropsWithChildren, useState } from "react";

export default function AddPost({props} : any)  {

  return (
    <>
    <div className=" flex flex-row w-3/6 overflow-hidden  border-gray-900 rounded-lg bg-white  shadow-xl shadow-gray-800">
     {/* left-col */}
    <div className=" flex flex-col items-center justify-center basis-1/4 bg-gradient-to-t from-red-400 to-white">
          <img src="icons-new-post-64.png" alt="" />
    </div>
     {/* right-col */}
    <div className="basis-2/3 p-4">
      <div className="flex flex-col relative  mb-2">
        <label htmlFor="twitter-account" className="text-base pb-1">عنوان</label>

        <input type="text" id="twitterAccount" name="twitter-account" className="outline-none rounded-lg bg-transparent border border-gray-600 p-1 pl-8" />
      </div>

      <div className="flex flex-col relative  mb-2">
        <label htmlFor="twitter-account" className="text-base pb-1">متن</label>

        <textarea name="" id="" rows={3}  className="outline-none rounded-lg bg-transparent border border-gray-600 p-1 pl-8"></textarea>
        <input type="text" id="twitterAccount" name="twitter-account" />
      </div>
      <div className="flex justify-end">
        <button className="bg-green-600 inline px-4 py-2 rounded-md text-white">ثبت</button>
      </div>
    </div>

    </div>
    </>)
  }