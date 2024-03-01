import React, { useState } from 'react'

const Delete = ({ notekey, note, onDeleteNote,editedNote}) => {
  const[isediting, setIsEditing] = useState(false);
  const[mainTopic, setmain] = useState('');
  const[subTopic, setsub] = useState('');
  const[Content, setdescrition]= useState('');
  const editHandler = (ev)=>{
    ev.preventDefault();
    const note={
      mainTopic,
      subTopic,
      Content
    }
    editedNote(notekey,note);
    setIsEditing(false);
  }
 
    if(isediting){
      return (
        <div>
          <form className='editedForm' onSubmit={editHandler}>
            <input type="text" placeholder='main topic' className='editmain'
              value={mainTopic} onChange={(e)=>setmain(e.target.value)} 
            />
            <input type="text" placeholder='subtopic' className='editsub'
              value={subTopic} onChange={(e)=>setsub(e.target.value)}
            />
            <input type="text" placeholder='description' className='editdes'
              value={Content} onChange={(e)=>setdescrition(e.target.value)}
            /> 
            <button className='donebtn'>done</button>
          </form>
        </div>
      )    }
  
  return (
    <div>
        <h3>{note.mainTopic}</h3>
        <p>Sub Topic: {note.subTopic}</p>
        <p>Description: {note.Content}</p>
        <button onClick={() =>{ onDeleteNote(notekey)}} className='deletebtn'>Delete Note</button>
        <button onClick={()=>setIsEditing(true)} className='editbtn'>Edit</button>
    </div>
  )
}

export default Delete