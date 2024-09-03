import React from 'react'
import Imagecard from './Imagecard'
import { FaShoppingCart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";


const PhotoGallery = () => {
  return (
    <div className='my-20 bg-white flex flex-col justify-center items-center'>
        <h3 className='text-3xl font-semibold my-14'>photos</h3>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-5 bg-20'>
           <Imagecard title="the beach" author="@anuj" img="https://images.pexels.com/photos/22064819/pexels-photo-22064819/free-photo-of-ornamented-wall-of-building-at-plaza-de-espana-in-seville.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
           price={10}
           icon1={
            <FaShoppingCart className='text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300' />
           }
           icon2={
            <IoIosHeart className='text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300' />
           }/> 
           <Imagecard title="the beach" author="@ayush" img="https://images.pexels.com/photos/26617846/pexels-photo-26617846/free-photo-of-horses-running-on-prairie.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
           price={10}
           icon1={
            <FaShoppingCart className='text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300' />
           }
           icon2={
            <IoIosHeart className='text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300' />
           }/> 
           <Imagecard title="the beach" author="@anup" img="https://images.pexels.com/photos/26924196/pexels-photo-26924196/free-photo-of-an-elephant-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
           price={10}
           icon1={
            <FaShoppingCart className='text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300' />
           }
           icon2={
            <IoIosHeart className='text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300' />
           }/> 
           <Imagecard title="the beach" author="@anup" img="https://images.pexels.com/photos/26707538/pexels-photo-26707538/free-photo-of-gray-fox-in-the-snow.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
           price={10}
           icon1={
            <FaShoppingCart className='text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300' />
           }
           icon2={
            <IoIosHeart className='text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300' />
           }/> 
           <Imagecard title="the beach" author="@anup" img="https://images.pexels.com/photos/27372380/pexels-photo-27372380/free-photo-of-repsol-gas-station-in-spain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
           price={10}
           icon1={
            <FaShoppingCart className='text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300' />
           }
           icon2={
            <IoIosHeart className='text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300' />
           }/> 
           <Imagecard title="the beach" author="@anup" img="https://images.pexels.com/photos/20769607/pexels-photo-20769607/free-photo-of-passatge-de-la-pau-in-barcelona.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
           price={10}
           icon1={
            <FaShoppingCart className='text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300' />
           }
           icon2={
            <IoIosHeart className='text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300' />
           }/> 
           <Imagecard title="the beach" author="@anup" img="https://images.pexels.com/photos/705424/pexels-photo-705424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
           price={10}
           icon1={
            <FaShoppingCart className='text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300' />
           }
           icon2={
            <IoIosHeart className='text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300' />
           }/> 
           <Imagecard title="the beach" author="@anup" img="https://images.pexels.com/photos/6480298/pexels-photo-6480298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
           price={10}
           icon1={
            <FaShoppingCart className='text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300' />
           }
           icon2={
            <IoIosHeart className='text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300' />
           }/> 
           <Imagecard title="the beach" author="@anup" img="https://images.pexels.com/photos/20879467/pexels-photo-20879467/free-photo-of-arc-de-triomf-in-barcelona-in-spain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
           price={10}
           icon1={
            <FaShoppingCart className='text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300' />
           }
           icon2={
            <IoIosHeart className='text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300' />
           }/> 

           
        </div>
       
      
    </div>
  )
}

export default PhotoGallery
