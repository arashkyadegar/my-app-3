import { PropsWithChildren } from "react";

export default function SideNewWriters({props} : any)  {

  return (
    <>
    <div className="flex w-full flex-col rounded-lg border border-gray-400  bg-white shadow-lg">
    <div className="flex flex-row justify-between border border-gray-200   items-center  pr-4 py-2">
      <h3 className="text-md font-semibold">Most new writers</h3>
      <div >
        <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-600  cursor-pointer ">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
        </svg>
      </div>
    </div>
    <div className="flex flex-row px-4 py-2 border-b border-gray-200">
      <div className="w-4/4 text-xs">
        <h3 className="mb-2 font-bold">لورم ایپسوم متن ساختگی</h3>
        <p className="line-clamp-1 text-gray-400">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
        </p>
      </div>
      <div className="w-1/4">
        <h3 className="text-xs font-semibold">۱۳۹۱/۰۱/۰۱</h3>
      </div>
    </div>


    <div className="flex flex-row px-4 py-2 border-b border-gray-200">
      <div className="w-4/4 text-xs">
        <h3 className="mb-2 font-bold">لورم ایپسوم متن ساختگی</h3>
        <p className="line-clamp-1 text-gray-400">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
        </p>
      </div>
      <div className="w-1/4">
        <h3 className="text-xs font-semibold">۱۳۹۱/۰۱/۰۱</h3>
      </div>
    </div>

    <div className="flex flex-row px-4 py-2 border-b border-gray-200">
      <div className="w-4/4 text-xs">
        <h3 className="mb-2 font-bold">لورم ایپسوم متن ساختگی</h3>
        <p className="line-clamp-1 text-gray-400">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
        </p>
      </div>
      <div className="w-1/4">
        <h3 className="text-xs font-semibold">۱۳۹۱/۰۱/۰۱</h3>
      </div>
    </div>

    <div className="flex flex-row px-4 py-2 border-b border-gray-200">
      <div className="w-4/4 text-xs">
        <h3 className="mb-2 font-bold">لورم ایپسوم متن ساختگی</h3>
        <p className="line-clamp-1 text-gray-400">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
        </p>
      </div>
      <div className="w-1/4">
        <h3 className="text-xs font-semibold">۱۳۹۱/۰۱/۰۱</h3>
      </div>
    </div>
    </div>
    </>)
  }