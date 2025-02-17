import express from 'express'
import cors from 'cors'
const app = express()

const port  = 3000
app.use(cors())
app.get('/',(req,res)=>{
    res.send('hello world')

})
// app.get('/data',(req,res)=>{
//     res.send([
//         {
//             _id: "a",
//             name: "Hotels",
//             image:[Hotels],
    
//         },
//         {
//             _id:"b",
//             name:"Villas",
//             image:[Villas]
//         },
//         {
//             _id:"c",
//             name:"Resorts",
//             image:[Resorts]
//         },
//         {
//             _id:"d",
//             name:"Apartments",
//             image:[Apartments]
//         }
//       ])
// })

app.listen(port,()=>{
    console.log('listenting to port',port)
})