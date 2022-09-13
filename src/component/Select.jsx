import React from 'react';
import SelectCard from './SelectCard';
import beachOne from '../images/grid1.jpg';
import beachTwo from '../images/grid2.jpg';
import beachThree from '../images/grid3.jpg';
import beachFour from '../images/grid4.jpg';
import beachFive from '../images/grid5.jpg';
import beachSix from '../images/grid6.jpg';

const Select = () => {
    return(
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        <SelectCard bg={beachOne} text='Bora Bora'/>
        <SelectCard bg={beachTwo} text='Maldives' />
        <SelectCard  bg={beachThree} text='Antigua'/>
        <SelectCard  bg={beachFour} text='Cozumel'/>
        <SelectCard  bg={beachFive} text='Jamaica'/>
        <SelectCard  bg={beachSix} text='West'/>
    </div>
    )
}

export default Select;