import { useState } from 'react'
import { Link } from 'react-router-dom'
import LoadingBar, { showLoading, hideLoading } from 'react-redux-loading-bar'

// import hambuger from 'assets/img/hambuger.png'

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <>
      <LoadingBar className="fixed h-0.5 bg-blue-500 z-40" />
      <header className="fixed w-full body-font border-b border-gray-800 z-30 bg-background font-prompt">
        <div className="container mx-auto flex flex-wrap justify-between py-4 md:flex-row items-center">
          <div className="flex justify-between lg:w-auto md:w-auto sm:w-auto w-full">
            <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-0">
              <div className="text-2xl text-white font-bold">P</div>
              <span className="ml-4 px-1.5 bg-blue-600 text-xs text-white">BETA</span>
            </Link>
            <div className="lg:hidden md:hidden sm:hidden block text-white" onClick={() => setToggleMenu(!toggleMenu)}>
              <img src={''} alt="" />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header