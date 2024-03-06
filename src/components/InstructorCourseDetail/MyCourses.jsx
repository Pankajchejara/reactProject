import React, { useContext } from 'react'
import { Appcontext } from '../../context/Appcontext'
import { useNavigate } from 'react-router-dom'
import IconBtn from '../../Common.jsx/Icon'

const MyCourses = () => {

const {data1,setData1,submitbutton, setsubmitbutton,setEditId,editId,setEnroll,toggle,settoggle}=useContext(Appcontext)
console.log("data1 kyab hia yhi to jannat haiu +" ,data1);
const navigate=useNavigate();
// let ab=localStorage.getItem("about")

//  data1.image?(<img src={URL.createObjectURL(data1.image)} className='' />):(<p> no imag</p>)

function delhandle (id){
let fildata=data1.filter((data)=>{
  return data.id !==id
})
setData1(fildata)

}

function Editfun(elem){
  settoggle(false)
  navigate('/dashboard/CreateCourse')
  setEnroll((prev)=>{return {...prev,title:elem.title,about:elem.about,image:elem.image,video:elem.video}});
  setEditId(elem.id);
  setsubmitbutton(false);
}

function CreateCourseHandle(){
  navigate('/dashboard/enroll')
}


  return (
<>

    <div className='w-11/12 h-full  mx-auto flex  gap-x-[20px] flex-wrap gap-y-[10px] justify-center items-center'>
    
    {
      (data1.length==0) &&(<div className='text-white text-3xl w-full h-full flex flex-col items-center justify-center '><p>No course available</p><IconBtn text="create course" onclick={CreateCourseHandle}/></div>)
    }
    {
       data1.map((obj)=>{
        return <div  className='  bg-pure-greys-900 hover:shadow-pure-greys-500  shadow-md  rounded-md w-[300px] h-[400px]  flex flex-col gap-y-[5px] items-center '>
        <div className='w-full h-[200px] rounded-md border border-b-white'>
   
   {/* (<img src={URL.createObjectURL(obj.image)} className='object-fill w-[100px] h-[80px] ' />)  */}

       <img src={obj.image} className='object-cover w-full h-full aspect-auto'/>
               </div>
        <p className='text-white text-2xl'>{obj.title}</p>
      <p className='text-white font-sarif text-center '>  {(obj.about).substring (0,50)}</p>
      <div className='flex flex-col w-full gap-y-3'>
      <button className=' w-[80%] mx-auto hover:opacity-70 rounded-md bg-red-100 opacity-60' onClick={()=>delhandle(obj.id)}>Delete</button>
      <button className=' w-[80%] hover:bg-yellow-25 mx-auto rounded-md bg-yellow-200 ' onClick={()=>Editfun(obj)}>EDIT</button></div>
      </div>
       })
    }  




    </div>
    </>
  )
}

export default MyCourses
