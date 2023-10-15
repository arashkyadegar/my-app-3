import { PropsWithChildren } from "react";

export default function SideLink({props} : any)  {
  return (
    <div className="flex w-full flex-col mb-10 border border-gray-400 rounded-lg bg-white shadow-lg ">
      <ul className="first:border-none
      flex flex-row flex-wrap border-b border-gray-400 p-1 gap-1 text-xs font-semibold text-gray-400 justify-center">
        <li className="border-l border-gray-200 px-2 py-1">W3school</li>
        <li className="border-l border-gray-200 px-2 py-1">Yahoo</li>
        <li className="border-l border-gray-200 px-2 py-1">Google</li>
        <li className="border-l border-gray-200 px-2 py-1">Msn</li>
        <li className="border-l border-gray-200 px-2 py-1">tailwindCss</li>
        <li className="border-l border-gray-200 px-2 py-1">Youtube</li>
        <li className="border-l border-gray-200 px-2 py-1">Netfelix</li>
      </ul>

      <div className="flex flex-row justify-center pt-3 pb-4 text-xs">
        <div className="">
          Copy Right @
        </div>
        
        <div className="flex flex-row-reverse text-red-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-red-700">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
          </svg>
          <a>hello world</a>
        </div>
      </div>
  </div>
  )}