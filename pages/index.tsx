import { Inter } from 'next/font/google'
import IndexComponent from '@/components/index-component'; 
import React from 'react';
const inter = Inter({ subsets: ['latin'] })
import { PostService } from '@/services/postService';

export default function Home(rslt:any) {
 // console.log(rslt);
  return (
      <IndexComponent props={rslt} />
  )
}
  // This gets called on every request
  export async function getStaticProps() {
    const _postService = new PostService();
    let posts = await _postService.fetchAllPosts();
    return { props: {posts}}
  }
  
Home.Layout = "Main"
