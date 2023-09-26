import Image from 'next/image'
import { Inter } from 'next/font/google'
import {useRouter}  from 'next/router'
import Link from "next/link";
import SinglePost from '@/components/single-post-component';
import SideNewWriters from '@/components/side-new-writers';
import SideMostViewedPeople from '@/components/side-most-viewed-people';
import SideLink from '@/components/side-link';
import { Post,User } from '@/models/entities';
import IndexComponent from '@/components/index-component'; 
import { json } from 'stream/consumers';
const inter = Inter({ subsets: ['latin'] })

export default function Home(rslt:any) {
  const router = useRouter();
  const { locale, locales, defaultLocale } = router
  return (
      <>
        <IndexComponent props={rslt} />
      </>
  )
}
  // This gets called on every request
  export async function getServerSideProps() {
    const authorId = "650ec918679b6c8132cf94da"
    const res = await fetch(`http://localhost:8000/posts/findByAuthor?authorId=${authorId}`)
    const repo = await res.json();

    let post = JSON.stringify(repo);
    // Pass data to the page via props
    return { props: {post }}
  }
Home.Layout = "Main"
