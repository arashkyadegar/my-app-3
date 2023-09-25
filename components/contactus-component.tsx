import { PropsWithChildren } from "react";

class user {
  firstName:string | undefined;
  lastName:string | undefined
}
export default function ContactUsComponent({props} : any)  {

console.log(props.posts);
  return (
    <>
      hello
    </>
  )
}