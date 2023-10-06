export class PostService {
  baseUrl: string = "http://localhost:8000/posts/";
  async fetchOnePost(postId: string):Promise<any> {
    const resPost = await fetch(this.baseUrl + postId);
    const repoPost = await resPost.json();
    return JSON.stringify(repoPost);
  }
  
  async fetchAllPosts():Promise<any> {
    const res = await fetch(this.baseUrl + "findAll");
    const repo = await res.json();
    return JSON.stringify(repo);
  }
}