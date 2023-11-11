import { Inter } from "next/font/google";
import SinglePostDetailedComponent from "@/components/single-post-detailed-component";
const inter = Inter({ subsets: ["latin"] });
import { PostService } from "@/services/postService";
import { CommentService } from "@/services/commentService";
export default function SinglePost(rslt: any) {
  let props = {
    post: JSON.parse(rslt.post)[0],
    comments: JSON.parse(rslt.comments),
    postId: rslt.postId,
  };

  return <SinglePostDetailedComponent props={props} />;
}
// This gets called on every request
export async function getServerSideProps(context: any) {
  const _postService = new PostService();
  const _commentService = new CommentService();
  let post;
  let comments;
  const { postId } = context.query;
  const { userId } = context.query;
  if (userId === undefined) {
    post = await _postService.fetchOnePost(postId, "");
    comments = await _commentService.fetchCommentsByPostId(postId);
  } else {
    post = await _postService.fetchOnePost(postId, userId);
    comments = await _commentService.fetchCommentsByPostId(postId);
  }

  return { props: { post, comments, postId } };
}
SinglePost.Layout = "Main";
