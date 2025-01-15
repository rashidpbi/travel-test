



import React from 'react'
export function generateStaticParams() {
    return [{ id : 'a'},{ id : 'b'}]
  }
export default async function Profile ({params}){
    const {id} = await params

    return <div>profile of user {id}</div>
}

