import { useRouter } from "next/router";
import { render } from "react-dom";

export default function B() {
  const router = useRouter()
  return <p>Post: {router.query.id}</p>
}