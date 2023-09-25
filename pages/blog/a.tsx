import { render } from "react-dom";
import { useRouter } from 'next/router'
export default function A() {
  const router = useRouter()
  return <p>Post: {router.query.id}</p>

}