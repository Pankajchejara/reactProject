import React, { createContext, useState } from 'react'
export const Appcontext=createContext();


function getlocalitems (){
  let list=localStorage.getItem('Enroll')
  
  
  if(list){
    return JSON.parse( localStorage.getItem('Enroll'))
  }
    else{
    return []
  }
 
  }

function getlocalitemslocal (){
  let list=localStorage.getItem('buycoursedata')
  
  
  if(list){
    return JSON.parse( localStorage.getItem('buycoursedata'))
  }
    else{
    return []
  }
 
  }

      
  

export default function Appcontextprovider ({children}) {

 




    const[data,setData]=useState('');
    const[signupdata,setSignUpData]=useState([]);
    const[buycourse,setBuyCourse]=useState(getlocalitemslocal());
    const[submitbutton,setsubmitbutton]=useState(false)
    const[editId,setEditId]=useState([]);
    const[data1,setData1]=useState(getlocalitems());
    const [img,setImg]=useState(null);
    const[toggle,settoggle]=useState(true)
    const[buyArray ,setBuyArray]=useState([]);
    const[datapankaj ,setDatapankaj]=useState(data);
    const[enroll,setEnroll]=useState({
         title:"",about:"",image:"",id:""
       })
   console.log("my fromdata is hai"+enroll);
   console.log(data)

    const value={
        data,
        setData,
        img,
        setImg,signupdata,setSignUpData,submitbutton,setsubmitbutton,
       
        datapankaj,setDatapankaj,enroll,setEnroll,data1,setData1,editId,setEditId,toggle,settoggle,buycourse,setBuyCourse
    }
    
  console.log("data1 is ",data1)
  return (
    <div>
      <Appcontext.Provider value={value}>
        {children}
      </Appcontext.Provider>
    </div>
  )
}


