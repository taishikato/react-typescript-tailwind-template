import React, { useState, useContext } from 'react'
import IsLoginContext from '../contexts/IsLoginContext'
import LoginUserContext from '../contexts/LoginUserContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const isLogin = false
  const isOpenDropDown = false
  const loginUser = {
    picture: 'https://jp.taishikato.com/photo.jpg',
    name: 'Taishi',
  }
  // const isLogin = useContext(IsLoginContext)
  // const loginUser = useContext(LoginUserContext)
  return (
    <nav
      style={{ boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.06)' }}
      className="flex items-center justify-between flex-wrap px-6 py-4 text-gray-800">
      <div className="flex items-center flex-shrink-0 mr-6">
        <a href="/" className="font-extrabold text-green-400">
          Template Nav
        </a>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:border-white focus:outline-none">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`mt-4 md:p-0 md:mt-0 lg:mt-0 lg:p-0 lg:flex-grow lg:flex lg:items-center w-full lg:w-auto rounded z-50 ${
          isOpen ? 'block' : 'hidden'
        }`}>
        <button className="font-semibold focus:outline-none flex flex-wrap items-center mr-5 pt-3 md:pt-0 lg:pt-0">
          <span className="ml-1">Ask Question</span>
        </button>
        <div className="mt-4 lg:mt-0">
          {isLogin ? (
            <div className="relative">
              <button
                // onClick={handleDropDown}
                className="relative z-10 block h-10 w-10 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white">
                <img className="h-full w-full object-cover" src={loginUser.picture} alt={loginUser.name} />
              </button>
              <div
                className={`${
                  isOpenDropDown ? 'show' : 'hidden'
                } absolute z-40 right-0 mt-2 py-2 w-full md:w-48 lg:w-48 bg-white rounded-lg shadow-xl`}>
                <a
                  href="/[username]"
                  className="block px-4 py-2 text-gray-800 cursor-pointer hover:bg-indigo-500 hover:text-white">
                  Profile
                </a>
                <a
                  href="/settings"
                  className="block px-4 py-2 text-gray-800 cursor-pointer hover:bg-indigo-500 hover:text-white">
                  Settings
                </a>
                <a
                  // onClick={signOut}
                  href="/"
                  className="cursor-pointer block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">
                  Sign out
                </a>
              </div>
            </div>
          ) : (
            <a href="/" className="font-semibold">
              Sign up / Login
            </a>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
