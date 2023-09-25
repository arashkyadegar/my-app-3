// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string;
  method: string ;
}

export default function handler(req: NextApiRequest,res: NextApiResponse<Data>) {
  const reqMethod = req.method;


  // switch(reqMethod) {
  //   case "POST" :
  // }
  res.status(200).json({ name: 'John Doe', method: reqMethod! })
}
