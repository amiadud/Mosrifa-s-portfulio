import React from 'react';
import { FaFileDownload } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className='py-16 mx-auto' >
           
            <div className=' flex  justify-center items-center flex-col md:flex-row mx-5 gap-10'>
                <div className='flex-1 text-white space-y-2 '>
                <h2 className='text-5xl font-semibold'>Contact Details</h2>
                <h2>Mosrifa Yeasmin Mim</h2>
                <h2>Ukilpara Naogaon,rajshahi</h2>
                <h3>+880 1314-592447</h3>
                <h3>mosrifayeasminmim4u@gmail.com</h3>
                </div>
                <div className='flex-1'>
                    <button className='btn btn-primary '> <FaFileDownload/> <a href="./Mosrifas_Resume.pdf"download>Download Resume</a></button >
                </div>
            </div>

        </div>
    );
};

export default Contact;