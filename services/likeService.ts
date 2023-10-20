export class LikeService {
  baseUrl: string = "http://localhost:8000/likes/";
  // async fetchCommentsByPostId(postId: string):Promise<any> {
  //   const resComments = await fetch(this.baseUrl + postId)
  //   const repoComments = await resComments.json();
  //   return JSON.stringify(repoComments);
  // }

  
  async fetchAddNewLike(userId: string,postId: string):Promise<any> {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
          { 
            "userId": userId,
            "postId":postId,
            "date":""
          }
        )
    };


    fetch(this.baseUrl,requestOptions)
      .then((res) => res.json())
        .then((data) => {
            //console.log(data);
    });
   }
}