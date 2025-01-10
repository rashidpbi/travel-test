'use client'



import React from 'react'

export default function Profile ({params}){
    const {id} = React.use(params);

    return <div>profile of user {id}</div>
}

