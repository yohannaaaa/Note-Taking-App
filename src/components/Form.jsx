import React, { useState } from 'react'

const Form = ({addNotes}) => {
  const [mainTopic, setMainTopic] = useState("");
  const [subTopic, setSubTopic] =useState("");
  const [Content, setContent] = useState("")
  const formhandler=(ev) =>{
    ev.preventDefault();
    const note ={
      mainTopic,
      subTopic,
      Content
    }
    addNotes(note)
  }
  return (
    <main>
      <form className='note-form' onSubmit={formhandler}>
      <h1>NOTES</h1>
        <input type="text" placeholder='Main' className='main-topic'
        value={mainTopic} onChange={(event)=> setMainTopic(event.target.value)
        }/>
        <input 
        type="text" placeholder='Sub topic' className='sub-topic'
        value={subTopic} onChange={(event)=> setSubTopic(event.target.value)
        }
        />
        <textarea 
           value={Content} onChange={(event)=> setContent(event.target.value)
           }
        />
        <button>Save</button>
    
      </form>
    </main>
  )
}

export default Form