export class CommentService {
  baseUrl: string = `${process.env.NEXT_PUBLIC_BASEURL}/comments/`;

  async fetchCommentsByPostId(postId: string):Promise<any> {
    const resComments = await fetch(this.baseUrl + postId)
    const repoComments = await resComments.json();
    return repoComments;
  }

  
  async fetchAddNewComment(userId: string,postId: string,text: string):Promise<any> {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        { 
          "userId": userId,
          "postId": postId,
          "commentId": "",
          "text": text,
          "rate": 0,
          "isVisible": false,
          "date": ""
        }
        )
    };

    fetch(this.baseUrl + postId,requestOptions)
      .then((res) => res.json())
        .then((data) => {
            //console.log(data);
    }).catch(err => {
      console.log('error');
      console.log(err);
    });
  }
}