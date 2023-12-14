import { useState} from 'react'
import { Link, NavLink } from 'react-router-dom';
import {FaBarsStaggered, FaXmark} from'react-icons/fa6';


const Navbar = () => {
    const[isMenuOpen,setIsMenuOpen] = useState(false);
    const handleMenuToggler = ()=>{
        setIsMenuOpen(!isMenuOpen);
    };
    const navItems =[
      {path :"/", title: "start a search"},
      {path :"/my-job", title: "My Jobs"},
      {path :"/salary", title: "Salary Estimate"},
      {path :"/post-job", title: "Post A Job"},

    ]
      return (
      <header className=' max-w-screen-2xl container mx-auto xl:px-24 px-4'>
        <nav className=' flex justify-between items-center py-6'>
            <a href ="/" className='flex items-center gap-2 text-2xl text-black'>
              <img src='' width="29" height= "30" viewBox= "0 0 29 30" fill="none" ></img>
              <span>Job Portal</span></a>
            {/* nav items for large devices */}
          <ul className='hidden md:flex gap-12'>{
            navItems.map(({path,title}) => (
              <li key={path} className='text-base text-primary'>
                <NavLink to={path}
                className={({isActive,isPending}) =>
              isActive ? "active"
              :isPending
              ?"pending"
              :" "}>
                {title}
              </NavLink>
              </li>
            ))
          }
          </ul>
          <div className='text-base text-primary font-medium space-x-5 hidden lg:block' >
            <Link to="/login" className='py-2 px-5 border rounded bg-blue-500'>Log in</Link>
          
            <Link to="/signup" className='py-2 px-5 border rounded   bg-blue text-primary'>Sign up</Link></div>
        
        <div className='md:hidden block'>
          <button onClick={handleMenuToggler}>{
              isMenuOpen ? <FaXmark/>: <FaBarsStaggered className='w-5 h-5 text-primary'/>
          }
            </button>
          </div></nav>

          <div className={`px-4 bg-black py-5 rounded-sm ${isMenuOpen ? " ": " hidden"}`}>
            <ul>
            {
            navItems.map(({path,title}) => (
              <li key={path} className='text-base text-white first:text-white py-1'>
                <NavLink to={path}
                className={({isActive,isPending}) =>
              isActive ? "active"
              :isPending
              ?"pending"
              :" "}>
                {title}
              </NavLink>
              </li>
            ))
          }
          <li><Link to="/login" className='text-white py-1'>Log in</Link></li>
            </ul>
          </div>
      </header>
        )
}

export default Navbar
