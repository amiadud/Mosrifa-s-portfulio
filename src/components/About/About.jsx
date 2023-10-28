import React from 'react';

const About = () => {
    return (
        <div className='min-h-screen bg-black text-white'>
            <div className='flex justify-center flex-col md:flex-row '>
            <div className='mx-5 my-10'>
                <img className='md:w-[300px] rounded-2xl lg:w-[500px] ' src="./mim_image.jpg" alt="" />
            </div>
            <div className='flex-1 mx-9 '>
                <div className='space-y-4 my-10 '>
                <h2 className='text-xl md:text-5xl lg:text-7xl font-semibold'>About Me</h2>
                <p className='text-lg lg:text-3xl md:text-2xl '>Currently Completing my Bachelor of Computer Science and Engineering from Varendra University of Bangladesh. My Passion is becoming a best Web Developer .</p>
                <div className='py-10'>
                <h2 className='text-xl md:text-5xl lg:text-7xl font-semibold'>Skills</h2>
                <div className='flex flex-wrap gap-6 '>
                    <div className='btn  text-lg lg:text-3xl md:text-2xl'>PHP</div>
                    <div className='btn text-lg lg:text-3xl md:text-2xl'>HTML</div>
                    <div className='btn text-lg lg:text-3xl md:text-2xl'>CSS</div>
                    <div className='btn text-lg lg:text-3xl md:text-2xl'>Node</div>
                    <div className='btn text-lg lg:text-3xl md:text-2xl'>React</div>
                    <div className='btn text-lg lg:text-3xl md:text-2xl'>MySQL</div>
                    <div className='btn text-lg lg:text-3xl md:text-2xl'>MongoDB</div>
                    <div className='btn text-lg lg:text-3xl md:text-2xl'>JavaScript</div>
                    <div className='btn text-lg lg:text-3xl md:text-2xl'>Tailwind</div>
                    <div className='btn text-lg lg:text-3xl md:text-2xl'>Firebase</div>
                </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default About;