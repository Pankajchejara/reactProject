import React ,{useContext, useState}from 'react'
import { Appcontext } from '../../context/Appcontext'
import toast from 'react-hot-toast'
const Purchased = () => {
  
  const {buycourse,setBuyCourse}=useContext(Appcontext)

  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };
const [show,setShow]=useState('');

  localStorage.setItem("buycoursedata",JSON.stringify(buycourse))
  // let buyarray=JSON.parse(localStorage.getItem("buycoursedata"))

function delhandle(id){
const filterdata=buycourse.filter((data)=>{
  return data.id!=id
})
toast.success("Deleted Successfully")
setBuyCourse(filterdata)
}
console.log("filterdata",buycourse)
// (localStorage.setItem("buycoursedata",buycourse))

function viewhandle(obj){
setShow(obj.id)
}
function clickhandlerdelete(){
  setShow(false)
}
  return (
//     <div className='w-full h-full  mx-auto flex justify-center items-center  border border-blue-600 gap-x-[20px] flex-wrap gap-y-[10px]'>
        
//         {
        
//       buycourse.map((obj)=>{
//         return <div>
        
//         <div  className='  bg-pure-greys-900 hover:shadow-pure-greys-500  shadow-md  rounded-md w-[300px] h-[400px]  flex flex-col gap-y-[5px] items-center '>
//         <div className='w-full h-[200px] rounded-md border border-b-white'>
     
//   (<img src={(obj.image)} className='object-cover w-full h-full aspect-auto' />)

//                </div>
//         <p className='text-white'>{obj.title}</p>
//       <p className='text-white'> {obj.about}</p>
     
//       <button className='text-white ' onClick={()=>viewhandle(obj)}>viewDetails</button>
//   </div> 
  
  
//   {/* viewk liye  */}
  
//   {show==(obj.id)&&  <div className=' bg-pure-greys-900 fixed top-[300px] left-[500px] shadow-md border border-pure-greys-500  rounded-md w-[400px] h-[300px] hover:shadow-pure-greys-500 flex flex-col gap-y-[5px] justify-center items-center '>
//        <video
//       //  key={obj.videourl}
//       width="400"
//       controls
//       autoPlay={isPlaying}
//       onClick={togglePlay}
//       style={{ cursor: 'pointer' }}
//     >
//       <source src={obj.video} type="video/mp4" />
//       Your browser does not support the video tag.
//     </video>
//     <p className='text-white'>{obj.title}</p>
//          <button className= 'text-blue-400' onClick={clickhandlerdelete}>delde </button>
//  </div>
//     }
  
  
//   </div>
//        })
//      } </div>

<div className=' w-full relative'>
      
      

    
      <div className='w-full flex-wrap  h-full mx-auto flex  gap-x-[20px] justify-center items-center  gap-y-[10px]'>
    {
      buycourse.map((obj,index)=>{
        
          return <div>
          
          <div  className='  bg-pure-greys-900 hover:shadow-pure-greys-500  shadow-md  rounded-md w-[300px] h-[400px]  flex flex-col gap-y-[5px] items-center '>
          <div className='w-full h-[200px] rounded-md border border-b-white'>
     
     {/* (<img src={URL.createObjectURL(obj.image)} className='object-fill w-[100px] h-[80px] ' />)  */}
  
         <img src={obj.image} className='object-cover w-full h-full aspect-auto'/>
                 </div>
  
                 <p className='text-white text-2xl'>{obj.title}</p>
        <p className='text-white font-sarif'> {obj.about}</p>
  
        <button className='text-white ' onClick={()=>delhandle(obj.id)}>delete</button>
       <button className= 'text-blue-400  w-[80%] mx-auto  rounded-md bg-yellow-100 ' onClick={()=>viewhandle(obj)}>viewDetails </button>
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

export default Purchased
