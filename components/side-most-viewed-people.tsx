import { PropsWithChildren } from "react";

export default function SideMostViewedPeople({props} : any)  {

  return (
    
      <div className="w-full flex flex-col rounded-lg border border-gray-400  overflow-hidden  bg-white shadow-lg">
        <div className="flex flex-row justify-between border border-gray-200   items-center  pr-4 py-2">
          <h3 className="text-md font-semibold">Most viewed people</h3>
          <div>
            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-600  cursor-pointer ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
            </svg>
          </div>
        </div>

        <div className="flex flex-row border-b border-gray-200">
          <div className="flex flex-row text-xs  w-full pr-2">
            <div className="border border-gray-400  w-12 h-12 m-1 bg-white  rounded-full overflow-hidden cursor-pointer">
              <img  alt="" />
            </div>
            <div className="text-xs  w-4/4 p-2">
              <h3 className=" font-bold">Senior </h3>
              <p className="line-clamp-2 text-gray-400">
                Lorem ipsum dolor sit
              </p>
            </div>
          </div>
          
          <div className="flex items-center justify-end  p-4">
            <div className="border border-gray-300  text-gray-500 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-row border-b border-gray-200">
          <div className="flex flex-row text-xs  w-full pr-2">
            <div className="border border-gray-400  w-12 h-12 m-1 bg-white  rounded-full overflow-hidden cursor-pointer">
              <img  alt="" />
            </div>
            <div className="text-xs  w-3/4 p-2">
              <h3 className=" font-bold">Senior </h3>
              <p className="line-clamp-2 text-gray-400">
                Lorem ipsum dolor sit
              </p>
            </div>
          </div>

          <div className="flex items-center justify-end  p-4">
            <div className="border border-gray-300  text-gray-500 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-row border-b border-gray-200">
          <div className="flex flex-row text-xs  w-full pr-2">
            <div className="border border-gray-400  w-12 h-12 m-1 bg-white  rounded-full overflow-hidden cursor-pointer">
              <img  alt="" />
            </div>
            <div className="text-xs  w-3/4 p-2">
              <h3 className=" font-bold">Senior </h3>
              <p className="line-clamp-2 text-gray-400">
                Lorem ipsum dolor sit
              </p>
            </div>
          </div>

          <div className="flex items-center justify-end  p-4">
            <div className="border border-gray-300  text-gray-500 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-row border-b border-gray-200">
          <div className="flex flex-row text-xs  w-full pr-2">
            <div className="border border-gray-400  w-12 h-12 m-1 bg-white  rounded-full overflow-hidden cursor-pointer">
              <img  alt="" />
            </div>
            <div className="text-xs  w-3/4 p-2">
              <h3 className=" font-bold">Senior </h3>
              <p className="line-clamp-2 text-gray-400">
                Lorem ipsum dolor sit
              </p>
            </div>
          </div>

          <div className="flex items-center justify-end  p-4">
            <div className="border border-gray-300  text-gray-500 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </div>
          </div>
          
        </div>

      </div>
  )
  }