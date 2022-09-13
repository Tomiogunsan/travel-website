import React, {useState} from 'react';
import { BsArrowLeftSquareFill, BsArrowRightSquareFill} from 'react-icons/bs';

const sliderData = [
    {
        url: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"

    },
    {
        url: "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        url: "https://images.unsplash.com/photo-1476673160081-cf065607f449?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        url:"https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    }
]

const Carousel = () => {
    const [slide, setSlide] = useState(0);
    const length = sliderData.length

    const prevSlide = () =>{
        setSlide(slide === length - 1 ? 0 : slide + 1)
    }
    const nextSlide = () => {
        setSlide(slide === 0 ? length - 1 : slide -1)
    }

    return(

        <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center'>
           <BsArrowLeftSquareFill onClick={prevSlide} 
           className = 'absolute top-[50%] text-3xl text-white cursor-pointer left-8'/>
           <BsArrowRightSquareFill onClick={nextSlide}
            className = 'absolute top-[50%] text-3xl text-white cursor-pointer right-8'/>
           
            {sliderData.map((item, index) => (
                <div className ={index === slide ? 'w-full' : 'opacity-0'}>
                   {index === slide && ( <img  className='w-full h-full object-cover rounded-md'src={item.url} alt='/' />)}
                </div>
            ))}
        </div>
    )
}

export default Carousel;