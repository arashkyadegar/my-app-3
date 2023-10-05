export class PostService {
  baseUrl: string = "http://localhost:8000/posts/";
  async fetchOnePost(postId: string):Promise<any> {
    const resPost = await fetch(`http://localhost:8000/posts/${postId}`);
    const repoPost = await resPost.json();
    let post = JSON.stringify(repoPost);
  }
}