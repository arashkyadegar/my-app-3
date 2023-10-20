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
    console.log('executed');
    const _postService = new PostService();
    let post = await _postService.fetchAllPosts();
    return { props: {post}}
  }
  
Home.Layout = "Main"
