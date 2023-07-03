import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav className="h-[50px] flex justify-between px-5 bg-gray-500 text-white items-center">
      <span className="font-bold">React 2023</span>
      <span>
        <Link className="m-2" to="/">Products</Link>
        <Link to="/about">Abouts</Link>
      </span>
    </nav>
  )
}
