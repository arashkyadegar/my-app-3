export class IPost {
  _id!: string;
  author!: IUser;
  title!: string;
  body!: string;
  rate!: number;
  img!: string;
  date!: string;
  isVisible!: boolean;
  documents!: Array<string>;
  tags : Array<string> = [];
  links !: Array<string>;
  comments!: Array<Comment> ;
}

export class CommentForm {
  commentText: string = "";
  commentTextError: string ="";
  formIsValid: boolean = false;
}

export class IComment {
  _id: string = "";
  user: string = "";
  text: string = "";
  rate: number = 0;
  isVisible: boolean = false;
  date: string ="";
}

 export class Comment extends IComment {}

 export class Post extends IPost {}

 export class PostForm extends IPost {
  bodyError: string = ""; 
  titleError: string = ""; 
  formIsValid: boolean = false;
 }


export interface IDocument {
  title: string;
  url: string;
  category: number;
}


export class  IUser {
  _id: string = "";
  name: string = "";
  img:string = "";
  password: string = "";
  token: string = "";
  remember: boolean = false;
  tags: string[] = [];
  likes: string[] = [];
  followers: string[] = [];
  followings: string[] = [];
}

export class User extends IUser  {}

export class ILoginFields {
  username: string = "";
  password: string = "";
}

export class LoginForm extends ILoginFields {
  usernameError: string ="";
  passwordError: string =""
  formIsValid: boolean = false;
}


module.exports = {
  Post,User,LoginForm,CommentForm,Comment,PostForm
}