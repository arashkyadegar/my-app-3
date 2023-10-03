import { Inter } from 'next/font/google'
import SinglePostDetailedComponent from '@/components/single-post-detailed-component';
const inter = Inter({ subsets: ['latin'] })

export default function SinglePost(rslt:any) {
  let props = {
    post: (JSON.parse(rslt.post))[0] ,
    comments: (JSON.parse(rslt.comments)),
    postId: rslt.postId
  }

  return (
      <SinglePostDetailedComponent props={props} />
  )
}
  // This gets called on every request
  export async function getServerSideProps(context:any) {
    const { postId } = context.query;

    const resPost = await fetch(`http://localhost:8000/posts/${postId}`);
    const repoPost = await resPost.json();
    let post = JSON.stringify(repoPost);

    const resComments = await fetch(`http://localhost:8000/comments/${postId}`)
    const repoComments = await resComments.json();
    let comments = JSON.stringify(repoComments);


    return { props: {post , comments , postId}}
  }
  SinglePost.Layout = "Main"