import React, { useState } from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddIcon from '@mui/icons-material/Add';


const TodoList = () => {

const [liName , setliName] = useState("");
const [Got,updataGot] =   useState("");

const [liItem , setliItem] = useState()
const [gotItem, setgotItme] = useState([])

const addingStyle = () =>{

    if(!liItem){
        alert("add an item")
    }else{
    setgotItme([...gotItem,liItem])
    setliItem("")
    }
}

const deleteItem =(id) =>{
 const filtererdItems = gotItem.filter((val, ind)=>{
    return ind !== id;
 });
 setgotItme(filtererdItems)
}
  return (
    <>
      <div className='main_div' >
        <div className='second_main_div'>
           <div className='inputDiv'> 

           <input type="text" placeholder='Add List Name' className='
           upperInput'  onChange={(e)=>setliName(e.target.value)}  
           value={liName}
           />
           <AddIcon className='AddIcon' onClick={()=>{
            updataGot(liName)
            setliName("")}} />
           </div>
           <div className='addList'>
             <h1>{Got}</h1>
             <DeleteForeverIcon onClick={()=>updataGot()}/>
           </div>


             
           <div className='listItem'>
              <input type="text" placeholder='Add List Item'
               value={liItem} onChange={(e)=>setliItem(e.target.value)} />
              <AddIcon className='AddIcons' onClick={addingStyle}/>
           </div>


            {
                gotItem.map((val, ind)=>{
                    return(
                        <div className='addList' key={ind}>
                          <h3 key={ind}>{ val }</h3>
                          <DeleteForeverIcon onClick= {()=>deleteItem(ind)}/>
                        </div> 
                    )
                })
            }

          


        </div>
      </div>
    </>
  )
}

export default TodoList
