import React from 'react'
import Link from 'next/link'
import ProductCard from '../components/ProductCard'
const usersPage = () => {
  return (
    <div>
      <Link href="/users/new">Users</Link>
      <ProductCard/>
    </div>
  )
}

export default usersPage
