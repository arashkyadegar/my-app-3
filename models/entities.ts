export class IPost {
  _id!: string;
  author!: IUser;
  title!: string;
  body!: string;
  rate!: number;
  img!: string;
  date!: Date;
  isVisible!: boolean;
  documents!: Array<IDocument>;
  tags = [];
  links = [];
  comments!: Array<IComment>;
}


export class Post implements IPost {
  _id!: string ;
  author!: IUser;
  title!: string;
  body!: string;
  rate!: number;
  img!: string;
  date!: Date;
  isVisible!: boolean;
  documents!: IDocument[];
  tags!: never[];
  links!: never[];
  comments!: IComment[];

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



export interface IComment {
  _id: string;
  user: string;
  text: string;
  rate: number;
  isVisible: boolean;
  date: string;
}
module.exports = {
  Post,User
}