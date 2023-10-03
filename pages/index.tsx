import { Inter } from 'next/font/google'
import IndexComponent from '@/components/index-component'; 
import React from 'react';
const inter = Inter({ subsets: ['latin'] })


export default function Home(rslt:any) {
  return (
        <IndexComponent props={rslt} />
  )
}
  // This gets called on every request
  export async function getServerSideProps() {
    const res = await fetch(`http://localhost:8000/posts/findAll`);
    const repo = await res.json();
    let post = JSON.stringify(repo);
    return { props: {post}}
  }
  
Home.Layout = "Main"
