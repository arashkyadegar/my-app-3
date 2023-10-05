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
  tags !: Array<string>;
  links !: Array<string>;
  comments!: Array<Comment> ;
}

export class CommentForm {
  commentText: string = "";
  commentTextError: string ="";
  formIsValid: boolean = false;
}

export interface IComment {
  _id: string;
  user: string;
  text: string;
  rate: number;
  isVisible: boolean;
  date: string;
}

export class Comment implements IComment {
  _id: string = "";
  user: string = "";
  text: string = "";
  rate: number = 0;
  isVisible: boolean = false;
  date: string ="";
}

export class Post implements IPost {
  _id!: string ;
  author!: IUser;
  title!: string;
  body!: string;
  rate!: number;
  img!: string;
  date!: string;
  isVisible!: boolean;
  documents!: string[] ;
  tags !: Array<string>;
  links !: Array<string>;
  comments!: Array<Comment>;
}


 export class PostForm extends IPost {
  _id: string ="";
  author!: IUser ; //
  title: string = ""; //
  body: string = ""; //
  rate: number = 0;
  img: string = "";
  date: string = ""; //
  isVisible: boolean = false ;
  documents: Array<string> = [];
  tags : Array<string> = []; //
  links : Array<string> = [];
  comments!: Array<Comment> ;
  bodyError: string = ""; 
  titleError: string = ""; 
  formIsValid: boolean = false;
 }


export interface IDocument {
  title: string;
  url: string;
  category: number;
}


export interface  IUser {
  _id: string;
  name: string;
  img:string;
  password: string;
  token: string;
  remember: boolean;
  tags: string[];
  likes: string[];
  followers: string[];
  followings: string[];
}


export class User implements IUser  {
  followers!: string[];
  followings!: string[];
  _id!: string;
  name!: string;
  img!:string;
  password!: string;
  token!: string;
  remember!: boolean;
  tags!: string[];
  likes!: string[];

}

export interface ILoginFields {
  username: string;
  password: string;
}

export class LoginForm implements ILoginFields {
  username: string = "";
  password: string = "";
  usernameError: string ="";
  passwordError: string =""
  formIsValid: boolean = false;
}


module.exports = {
  Post,User,LoginForm,CommentForm,Comment,PostForm
}