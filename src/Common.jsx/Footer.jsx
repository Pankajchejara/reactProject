import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-11/12 h-full mx-auto py-[50px] gap-x-[20px] gap-y-[20px]  justify-between flex flex-row flex-wrap'>
      <div className='flex flex-col gap-y-2 w-[400px] '>
        <h2 className='text-white text-2xl opacity-70'>About Us</h2>
        <div className='w-[200px] h-[1px] bg-richblack-5 opacity-60'></div>
        <p className='text-white opacity-60'>At LearnPlayExplore, we believe that the best way for kids to learn is through play. Our team of dedicated educators, game designers, and technology experts have come together to create a dynamic and engaging space where children can immerse themselves in a world of knowledge and fun.</p>
        <div className='flex flex-row gap-x-2 text-2xl opacity-60 '><FaGithub  className='text-blue-100'/>
<FaInstagram  className='text-red-100 opacity-60'/>
<CiFacebook className='text-blue-200 '/></div>
      </div>

      <div className='w-[300px] gap-y-2  '>
<h2 className='text-white text-2xl opacity-70'>Keep Exploring</h2>
<div className='w-[200px] h-[1px] bg-richblack-5 opacity-60'></div>
<p className='text-white opacity-60'>Learn</p>
<p className='text-white opacity-60'>Play</p>
<p className='text-white opacity-60'>Play</p>
<p className='text-white opacity-60'>Play</p>
<p className='text-white opacity-60'>Play</p>
<p className='text-white opacity-60'>Fun </p>
<p className='text-white opacity-60'>Games</p>
      </div>
      <div className='w-[400px] gap-y-2 '>
<h2 className='text-white text-2xl opacity-70'>Contact info</h2>
<div className='w-[200px] h-[1px] bg-richblack-5 opacity-60'></div>
<p className='text-white opacity-60'>Email : pankajkumarchejara119@gmail.com</p>
<p className='text-white opacity-60'>Phone : +1 (555) 123-4567</p>
<p className='text-white opacity-60'>Address : 123 Learning Lane, Cityville, State, 12345 </p>
<p className='text-white opacity-60'>Follow us on social media: Facebook, Twitter, Instagram</p>
      </div>
    </div>
  )
}

export default Footer
