import Image from 'next/image'
import { Inter } from 'next/font/google'
import  {useRouter}  from 'next/router'
import Link from "next/link";
import SinglePost from '@/components/single-post';
import SideProfile from '@/components/side-profile';
import SideNewWriters from '@/components/side-new-writers';
import SideMostViewedPeople from '@/components/side-most-viewed-people';
import SideLink from '@/components/side-link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  const { locale, locales, defaultLocale } = router

  const list = [{
    page:'a',
    query:'1'

  },{
    page:'b',
    query:'2'

  },{
    page:'W',
    query:'3'

  },];
  return (
      <>
      <div className='flex'>
      <div className=" flex flex-col sm:flex-row w-full gap-2  ">
        <div className="flex flex-col sm:w-3/12 gap-4 rounded-lg  overflow-hidden">
          <SideProfile />

        </div>
        <div className=" flex flex-col sm:w-9/12">
          <SinglePost/>
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

Home.Layout = "Main"
{/* <Link href={`/blog/${encodeURIComponent(el.page)}?id=${el.query}`} >
{`/blog/${el.page}/${el.query}`}
</Link> */}