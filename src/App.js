
import { useState } from 'react';
import './App.css';

function App() {

    const[addtext ,setAddtext] = useState([]);
    const[inputtext,setInputtext] = useState ("");
    const[edittext,setEdittext] =useState("");
    const[changevalue ,setChangevalue] =useState("")

    
  const addbutton=()=>{

   console.log("hai button");
   setAddtext([...addtext ,{id : Date.now () , name :inputtext}])

  }
   

  const changetext =(h1value) => {
    console.log(h1value)
    setEdittext("");

    const newValue= addtext.map((obj)=>{
    
      if(obj.id===h1value.id){

        return {...obj , name : changevalue }
         

      }
       

      return obj;

    })
   
     setAddtext(newValue);

  }


  return (
    <div className="App">

     
     <div className='todoapp'>
          <div className='h1todo'>
            <h1 className='h1text'>TODO APP</h1>
           </div>
        
         <input className='input-main' type="text" placeholder='add content' onChange={(e)=>setInputtext(e.target.value)}  ></input>
         <button className='addbtn' onClick={()=>addbutton()}>ADD</button>

     </div>
  
     <div>
    
    {addtext.map((h1text ,index)=>{

      return(
 
      <div className='todolist' key={index} >



        {edittext===index ? (<div><input className='inputnew' onChange={(e)=>setChangevalue(e.target.value)}></input></div>) : (<div> <h1 className='todotext'>{h1text.name}</h1></div>)}

        {edittext=== index  ? (<button className='editbtn' onClick={()=>changetext(h1text)}>OK</button>):<button className='editbtn' onClick={()=>setEdittext(index)}>EDIT</button>}
       
        <button className='delete' onClick={()=>setAddtext(addtext.filter ((obj)=> obj.id !== h1text.id )) }>X</button>
        
        
        

       </div>    



  

      )})}

       
   </div>
      
       



     
    </div>
  );
}

export default App;
