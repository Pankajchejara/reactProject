import React ,{useContext, useEffect, useState}from 'react'
import { Appcontext } from '../../context/Appcontext'
import { useNavigate } from 'react-router-dom'

const Courses = () => {
    const {data1,buycourse,setBuyCourse}=useContext(Appcontext)
const[data ,setData]=useState('');
// const[buyArray ,setBuyArray]=useState([]);
// let videourl=" http://res.cloudinary.com/dqr1ihw8d/video/upload/v1708603589/g2nvmuoceflbkhhf1fcb.mp4"
const[show,setShow]=useState(false);
const navigate=useNavigate();

const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };



// let obj=JSON.parse( localStorage.getItem("Enroll"))

// let pk={...obj,...pkk}

    function BuyCourseHandler(obj){
      // localStorage.setItem("Enroll",JSON.stringify(pk))
        
      let newobj=  {...obj,id:new Date().getTime().toString()}
      
      
      
      setBuyCourse((prev) => {
      const newArray = [...prev, newobj]
      console.log("New Array ", newArray)
      return newArray
    });
    
   

     
    


    
    console.log("buycousrarrrrrr",buycourse)
    // localStorage.setItem("buycoursedata",JSON.stringify(buyArray))
    // let buycoursedata= JSON.parse( localStorage.getItem("buycoursedata"))
    // let buycoursedata= JSON.parse( localStorage.getItem("buycoursedata"))

        
           
    //         setBuyCourse(buycoursedata)
        
        
navigate('/dashboard/purchased')
    }






    console.log("buy course" ,buycourse)
    function clickhandleviewDetails(objectt){
        setData(objectt.about)
        setShow(objectt.id);

    }
    function clickhandlerdelete(){
        setData("");
        setShow(false)
    }
  return (
    
    <div className=' w-full relative'>
      
      

    
    <div className='w-full flex-wrap  h-full mx-auto flex  gap-x-[20px] justify-center items-center  gap-y-[10px]'>
  {
    data1.map((obj,index)=>{
      
        return <div>
        
        <div  className='  bg-pure-greys-900 hover:shadow-pure-greys-500  shadow-md  rounded-md w-[300px] h-[400px]  flex flex-col gap-y-[5px] items-center '>
        <div className='w-full h-[200px] rounded-md border border-b-white'>
   
   {/* (<img src={URL.createObjectURL(obj.image)} className='object-fill w-[100px] h-[80px] ' />)  */}

       <img src={obj.image} className='object-cover w-full h-full aspect-auto'/>
               </div>

               <p className='text-white text-2xl'>{obj.title}</p>
      <p className='text-white font-sarif'> {obj.about}</p>

     <button className= 'text-blue-400  w-[80%] mx-auto  rounded-md bg-blue-100 ' onClick={()=>BuyCourseHandler(obj)}>buy course</button>
     <button className= 'text-blue-400  w-[80%] mx-auto  rounded-md bg-yellow-100 ' onClick={()=>clickhandleviewDetails(obj)}>viewDetails </button>
      </div>

   {show==(obj.id)&&   <div className=' bg-pure-greys-900 fixed top-[300px] left-[500px] shadow-md border border-pure-greys-500  rounded-md w-[400px] h-[300px] hover:shadow-pure-greys-500 flex flex-col gap-y-[5px] justify-center items-center '>
       <video
      //  key={obj.videourl}
      width="400"
      controls
      autoPlay={isPlaying}
      onClick={togglePlay}
      style={{ cursor: 'pointer' }}
    >
      <source src={obj.video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <p className='text-white'>{obj.title}</p>
         <button className= 'text-blue-400' onClick={clickhandlerdelete}>delde </button>
 </div>
    }
 </div>
       })
} 
    
    



    </div>
   
    </div>
  )
}

export default Courses
