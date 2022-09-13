import React from 'react';
import background from '../images/beach-background.jpg';
import { AiOutlineSearch } from 'react-icons/ai';

const Hero = () => {
return(
    <div className='w-full h-screen relative'>
        <img className='w-full h-full object-cover' src={background} alt='A beach'/>
        <div className='absolute w-full h-full left-0 top-0 bg-gray-900/30'></div>
      
       <div className='absolute w-full top-0 h-full flex flex-col justify-center text-center text-white p-4'>
        <h1>First Class Travel</h1>
        <h2 className='py-4'>Top 1% Locations Worldwide</h2>

        <form className='flex justify-between items-center mx-auto max-w-[700px] w-full border p-1 rounded-md text-black bg-gray-100/90'>
            <div>
                <input className='bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none' placeholder='Search Destinations' type='text'/>
            </div>
            <div>
                <button><AiOutlineSearch size={20} className='icons' style={{color: '#fff'}} /></button>
            </div>
        </form>
        </div>
    </div>
)
}

export default Hero;
