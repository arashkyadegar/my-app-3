import { useRouter } from "next/router";
import { render } from "react-dom";

export default function C() {
  const router = useRouter()
  return <p>Post: {router.query.id}</p>
}