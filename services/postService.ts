import { Post } from "@/models/entities";

export class PostService {
  baseUrl: string = "http://localhost:8000/posts/";
  async fetchOnePost(postId: string,userId: string):Promise<any> {
    let query= "";
    if(userId != "") {
      query=`?userId=${userId}`;
    }
    const resPost = await fetch(this.baseUrl + postId+ query);
    const repoPost = await resPost.json();
    return JSON.stringify(repoPost);
  }
  
  async fetchAllPosts():Promise<any> {
    const res = await fetch(this.baseUrl + "findAll");
    const repo = await res.json();
    return JSON.stringify(repo);
  }

  async fetchAddNewPost(postEntity: Post):Promise<any> {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postEntity)
    };

    fetch(this.baseUrl ,requestOptions)
      .then((res) => res.json())
        .then((data) => {
            console.log(data);
    }).catch((error: any) => {
      console.error('Exception got caught...');
      console.error(error);
    });;
  }
}