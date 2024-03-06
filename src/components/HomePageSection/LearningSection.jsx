import React from 'react'
import Runner from '../Runner'
import IconBtn from '../../Common.jsx/Icon'
import { useNavigate } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const LearningSection = () => {
let navigate=useNavigate()
function buttonClickHandler(){
  navigate('/dashboard/courses')
}
useEffect(()=>{
  AOS.init({duration :2000})
},[])


  return (
    <div  data-aos="fade-right">
      <div className='w-11/12 h-full  py-[50px]  mx-auto flex flex-col lg:flex-row xl:flex-row md:flex-col sm:flex-col justify-between items-center gap-y-[50px] relative '>

<div className='lg:w-[500px]  lg:h-[350px] w-[4000px] h-[350px] md:w-[550px] md:h-[380px] sm:w-[400px] sm-[350px] gap-y-4 flex flex-col justify-center '>
  <p className='text-blue-200 font-bold text-2xl'>LEARNINGS</p>
  <p className='font-bold text-white text-[40px] leading-9'>Games entertain books educate both enlighten</p>
  <p className='opacity-70 text-white text-xl '> learning, shaping skills through experiences</p>
  <div>
  <IconBtn onclick={buttonClickHandler}>Go to learning</IconBtn>
  </div>
</div>

<div >
<Runner />
</div>

</div>
    </div>
  )
}

export default LearningSection
