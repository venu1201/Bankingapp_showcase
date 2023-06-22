import { useState } from 'react'
import { logo, close, menu } from '../assets'
import { navLinks } from '../constants'
const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className='flex w-full p-3 justify-between text-white item-center'>
      <img src={logo} className='w-36' alt="logo" />
      <ul className='list-none sm:flex hidden cursor-pointer justify-end items-center '>
        {navLinks.map((nav, index) => (
          <li key={nav.id}
            className='mr-7 fron-poppins font-normal cursor-pointer'
          >
            {/* <a href=`#${nav.id}`>{nav.title}</a> */}
            <a href={`#${nav.id}`} className='hover:text-secondary'>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className='sm:hidden flex justify-center items-center'>
        <img src={toggle? close:menu} alt="menu"
        className='object-contain h-5 w-10' 
        onClick={()=> setToggle(!toggle)}/>


        <div
          className={`${!toggle ? "hidden" : "flex"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[px] rounded-xl sidebar`}
        >
          <ul className='lis-none cursor-pointer justify-end item-start flex-col '>
            {navLinks.map((nav, index) => (
              <li key={nav.id}
                className='mr-10 mt-3 font-poppins font-normal cursor-pointer'
              >
                {/* <a href=`#${nav.id}`>{nav.title}</a> */}
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>



    </div>
  )
}

export default Navbar