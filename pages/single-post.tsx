import Image from 'next/image'
import { Inter } from 'next/font/google'
import {useRouter}  from 'next/router'
import Link from "next/link";
import SinglePostComponent from '@/components/single-post-component';
import SideNewWriters from '@/components/side-new-writers';
import SideMostViewedPeople from '@/components/side-most-viewed-people';
import SideLink from '@/components/side-link';
import { Post,User } from '@/models/entities';
import IndexComponent from '@/components/index-component'; 
import { json } from 'stream/consumers';
import SingleCommentComponent from '@/components/single-comment-component';
const inter = Inter({ subsets: ['latin'] })

export default function SinglePost(rslt:any) {
  const post = (JSON.parse(rslt.post))[0];
  return (
      <>
        <SinglePostComponent props={post} />
               {/* comments-div  */}

      {post.comments.map((comment:any)=> {
          return <SingleCommentComponent key={comment} props= {comment} /> 
        })} 
      

      </>
  )
}
  // This gets called on every request
  export async function getServerSideProps(context:any) {
    const { postId } = context.query;
    const res = await fetch(`http://localhost:8000/posts/${postId}`);
    const repo = await res.json();

    let post = JSON.stringify(repo);

    // // Pass data to the page via props
    return { props: {post}}
  }
  SinglePost.Layout = "Main"