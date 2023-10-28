import React from 'react';

const Banner = () => {
    return (
        <div className="md:min-h-screen flex justify-start items-center bg-black text-white   ">
            <div className='md:space-y-5 mx-10 '>
            <h2 className='text-xl md:text-2xl lg:text-6xl'>Junior Web Developer</h2>
            <h3 className='text-xl md:text-5xl lg:text-7xl font-semibold'>Hi, I am <span className='text-pink-600'>Mosrifa</span></h3>
            <h4 className='text-xl md:text-5xl lg:text-7xl font-semibold'>Yeasmin Mim From Rajshahi</h4>
            </div>
        </div>
    );
};

export default Banner;