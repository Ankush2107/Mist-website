import { NavLink, Outlet } from 'react-router-dom';
import logo from '../assets/logo.png';

function RootLayout() {
  return (
    <div className='root-layout'>
      <header className='bg-white border-b-2 shadow-lg shadow-black-200'>
        <nav className='flex items-center justify-around gap-64'>
          <img className='w-[7vw]' src={logo} alt="" />
          <div className='flex items-center gap-11'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='about'>About us</NavLink>
            <NavLink to='contact'>Courses</NavLink>
            <NavLink to='contact'>Internship</NavLink>
            <NavLink to='contact'>Contact us</NavLink>
          </div>
        </nav>
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default RootLayout
