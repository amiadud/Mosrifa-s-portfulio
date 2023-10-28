import React from 'react';
import { FaBeer, FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer footer-center p-4 text-white ">
            <div className='flex gap-5 '>
                <div className='text-4xl text-gray-500 hover:text-gray-50'>
                <a target='_black' href="https://www.facebook.com/mosrifayeasmin.mim.3"><FaFacebookF></FaFacebookF></a>
                </div>
                <div className='text-4xl text-gray-500 hover:text-gray-50'>
                <a target='_black' href="https://www.linkedin.com/in/mosrifa-yeasmin-mim-5b5978181/"><FaLinkedinIn></FaLinkedinIn></a>
                </div>
                <div className='text-4xl text-gray-500 hover:text-gray-50'>
                <a target='_black' href="https://github.com/Mosrifa111/Mosrifa-s-portfulio"><FaGithub></FaGithub></a>
                </div>
            </div>
  <aside className='text-gray-500'>
    <p>Copyright © 2023 - All right reserved by <a href="#">Mim</a></p>
  </aside>
</footer>
    );
};

export default Footer;