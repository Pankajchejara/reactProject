import React, { useContext,useEffect,useState } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import { useNavigate } from 'react-router-dom';

import Footer from '../Common.jsx/Footer';

import VideoSection from './HomePageSection/VideoSection';
import TypeScriptSection from './HomePageSection/TypeScriptSection';
import LearningSection from './HomePageSection/LearningSection';
import CardSection from './HomePageSection/CardSection';
import DevelopmentSection from './HomePageSection/DevelopmentSection';
import ReviewSlider from './HomePageSection/ReviewSlider';

import HeroSection from './HomePageSection/HeroSection';

import ExploreMore from './HomePageSection/ExploreMore';

const Home = () => {
  

  let navigate=useNavigate();
 
 
useEffect(()=>{
  AOS.init({duration :500})
},[])



function clickHandler(){
  navigate('/Games')
}

 function clickawsome(){
  document.querySelector(".awsome").classList.add("active")
 }

 
  return (
    <div className='bg-pure-greys-800 w-full overflow-x-hidden'>


<section className="bg-pure-greys-800  w-full">
  <HeroSection/>
</section>



<section className='z-1 mt-[50px] gap-y-[30px] w-full'>
<VideoSection/>
</section>

<section className='w-11/12   mt-[50px] mx-auto ' data-aos="fade-up">
<TypeScriptSection/>
</section>

<section className='relative w-full' data-aos="fade-up">

 <div className="area -z-10 flex gap-y-2 justify-center items-center ">


 <div className='w-11/12 h-full  mx-auto flex flex-col gap-y-9 items-center relative '>
 <div class="flex flex-col w-full justify-center items-center xl:max-w-[900px] py-7 text-center gap-4"><h1 class="text-5xl sm:text-[3.75rem] font-semibold text-white  ">Explore the course to Success with LittleWorld</h1><p class=" text-white text-shark-300 text-base font-normal sm:max-w-[500px]  ">Game, Learn, Define: Where Every Click Unveils a World of Knowledge</p></div>


    
       <div className='z-10  w-full h-full '>
        
<ExploreMore/>

       </div>
 



</div>
    <ul className="circles">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>

</section>



<section className='w-full bg-pure-greys-800'data-aos="fade-right">
<LearningSection/>
</section>

<section className='w-full   bg-pure-greys-700 '>
<CardSection/>
</section>

<section className='w-full py-6 bg-pure-greys-900 '>
<DevelopmentSection/>
<div className='w-[700px] shadow-md shadow-cyan-500 bg-gradient-to-r from-blue-100  h-[1px]'></div>
</section>

<section className=' h-[400px] '>
 
  <ReviewSlider/>
</section>

{/* <section className='w-full h-full bg-white '>
<ExploreMore/>

</section> */}
<section className='w-full h-full flex-wrap flex bg-pure-greys-700'>
<Footer/>
</section>



</div>
  )
}

export default Home
