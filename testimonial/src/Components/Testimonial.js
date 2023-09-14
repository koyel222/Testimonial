import React, { useState } from 'react'
import Card from './Card'
import { FiChevronLeft ,FiChevronRight} from 'react-icons/fi'

 const Testimonial = (props) => {
    const reviews=props.reviews
    let[index,setindex]=useState(0)
    const total=reviews.length
    function left(){

        if(index==0){
            setindex(total-1)
        }
        setindex(index--)
    }
    function right(){
        if(index==(total-1)){
            setindex(0)
        }
        setindex(index++)
    }
    function change(){
        const randomindex=Math.floor(Math.random()*total)
        setindex(randomindex)
    }
  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center
    mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md'>
        <div className='flex text-3xl mt-10 gap-3 text-violet-400 font-bold mx-auto'>
            <Card reviews={reviews[index]}></Card>
        </div>
        <div className='flex text-3xl mt-10 gap-3 text-violet-400 font-bold mx-auto'>
            <button className='cursor-pointer hover:text-violet-500' onClick={left}>< FiChevronLeft ></FiChevronLeft> </button>
            <button className='cursor-pointer hover:text-violet-500' onClick={right}>< FiChevronRight  /></button>
            
        </div>
        <div className='mt-6'>
            <button className='bg-violet-400 hover:bg-violet-500 transition-all duration-200
                cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg' onClick={change}>Surprise me</button>
        </div>
    </div>
  )
}
export default Testimonial