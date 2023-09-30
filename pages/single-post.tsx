import { Inter } from 'next/font/google'
import SinglePostComponent from '@/components/single-post-component';
import SingleCommentComponent from '@/components/single-comment-component';
const inter = Inter({ subsets: ['latin'] })

export default function SinglePost(rslt:any) {
  const post = (JSON.parse(rslt.post))[0];
  return (
      <>
      <SinglePostComponent props={post} />
      {/* comments-div  */}

      <SingleCommentComponent  props= {post._id} /> 
      
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