import React from 'react';
import imageOne from '../images/beach1.jpg';
import imageTwo from '../images/beach2.jpg';
import imageThree from '../images/beach3.jpg';
import imageFour from '../images/beach4.jpg';
import imageFive from '../images/beach5.jpg';

const Destinations = () => {
    return(
        <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
            <h1>All-Inclusive Resorts</h1>
            <p className='py-4'>On the Caribbean's Best Beaches</p>

            <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
                <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={imageOne} alt='/' />
                <img className='w-full h-full object-cover'src={imageTwo} alt='/' />
                <img className='w-full h-full object-cover'src={imageThree} alt='/' />
                <img className='w-full h-full object-cover'src={imageFour} alt='/' />
                <img className='w-full h-full object-cover'src={imageFive} alt='/' />
            </div>
        </div>
    )
}

export default Destinations;

