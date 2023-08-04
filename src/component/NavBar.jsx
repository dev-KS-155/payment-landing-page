import React, { useRef, useState } from 'react'
import './navbar.css'

function NavBar() {
  const btnRef = useRef();
  const toggleRef = useRef();
  const [flag, setFlag] = useState(false)

  function toggle() {
    if (flag == true) {
      btnRef.current.src = "menu.png"
      toggleRef.current.classList = "disappear";
      setFlag(false)
    }
    else {
      btnRef.current.src = "close.png"
      toggleRef.current.classList = "appear";
      setFlag(true)
    }
  }

  return (
    <>
      {/* ----for laptop,destop,tablet----- */}
      <div className="sticky top-0">
        <div className='flex max-w-0 invisible lg:min-w-full lg:visible sm:flex-row justify-around items-center flex-shrink pt-4'>
          <div className="w-[50px]">
            <a href="./NavBar.jsx"><img src="dollar.png" alt="Money" /></a>

          </div>
          <div className='text-white flex flex-row gap-20 Features'>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Help</a>
            <a href="#">Blog</a>
            <a className='truncate' href="#">About Us</a>
          </div>
          <div className='text-white flex flex-row gap-6 btn '>
            <button>Login</button>
            <button>Sinup</button>
          </div>
        </div>
      </div>
      {/* ----for mobile -------- */}
      <div className='flex lg:hidden flex-row flex-shrink justify-between px-[20px] mt-[-50px]'>
        <div className="w-[50px]">
          {/* --logo--- */}
          <a href="./NavBar.jsx"><img src="dollar.png" alt="Money" /></a>
        </div>
        <div className=' w-[45px] mt-[5px]'>
          {/* ---toggle logo ---- */}
          <button onClick={() => toggle()}><img src="menu.png" alt="Menu" ref={btnRef} /></button>
        </div>
      </div>

      <div className='disappear' ref={toggleRef}>
        <div className=' flex flex-col  gap-5 pt-[50px] pl-5 text-white font-bold text-[20px] font-mono'>
          {/* ---mobile service----- */}
          <div className='mobile_Features'>
            <a href="#">Features</a>
          </div>
          <div className='mobile_Features'>
            <a href="#">Pricing</a>
          </div>
          <div className='mobile_Features'>
            <a href="#">Help</a>
          </div>
          <div className='mobile_Features'>
            <a href="#">Blog</a>
          </div>
          <div className='mobile_Features'>
            <a href="#">About Us</a>
          </div>
          <div className='mobile_Features'>
            <button>Login</button>
          </div>
          <div className='mobile_Features'>
            <button>sinup</button>
          </div>
          <hr />
        </div>
      </div>
    </>

  )
}

export default NavBar