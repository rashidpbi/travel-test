import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {}[]

 
export default function destinationsHandler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).send([{
    _id: "a",
    name: "Bali, Indonesia",
    image:'https://res.cloudinary.com/dzoo0df0n/image/upload/v1739367758/Bali_lxbdlk.png',

},
{
    _id:"b",
    name:"Kerry, Ireland",
    image:'https://res.cloudinary.com/dzoo0df0n/image/upload/v1739367841/Kerry_ncqh6j.png'
},
{
    _id:"c",
    name:"Sydney, Australia",
    image:'https://res.cloudinary.com/dzoo0df0n/image/upload/v1739367843/Sydney_ybl8j9.png'
},
{
    _id:"d",
    name:"Paris, France",
    image:'https://res.cloudinary.com/dzoo0df0n/image/upload/v1739367842/Paris_zztrvb.png'
}])
}