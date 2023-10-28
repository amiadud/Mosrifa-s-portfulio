import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  const [count, setCount] = useState(0)

  const navLinks = <>
  <li className='mx-1  md:text-black lg:text-white'><a className='md:text-black lg:text-white ' href="/">Home</a></li>
  <li className='mx-1  md:text-black lg:text-white'><a className='bg-gray md:text-black lg:text-white' href="/#about">About</a></li>
  <li className='mx-1  md:text-black lg:text-white'><a className='bg-gray md:text-black lg:text-white' href="/#contact">Contant</a></li>
  </>

    return (
      <>
        <div className="navbar text-white  ">
  <div className="navbar-start  mx-5 ">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52  text-black md:text-black  lg:text-white">
        {navLinks}
      </ul>
    </div>
    <a className="text-4xl font-semibold text-white normal-case">Mosri<span className='text-pink-600'>f</span>a</a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-3xl ">
    {navLinks}
    </ul>
  </div>
</div>
<Banner/>
<div id='about'><About/></div>
<div  id='contact'><Contact/></div>
<Footer/>
</>
  )

}

export default App
