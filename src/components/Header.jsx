import React from 'react'

function Header() {
  return (
    <header className=" bg-black text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Daily Pulse</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-blue-200">Home</a></li>
            <li><a href="#" className="hover:text-blue-200">Categories</a></li>
            <li><a href="#" className="hover:text-blue-200">About</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

