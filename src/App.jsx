import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import NoteList from './components/NoteList'


function App() {
  const [Notes, SetNotes] = useState([])
  const [showForm, setShowForm] = useState(true)

  const addNote = (newNote) => {
    SetNotes([...Notes, newNote]);
  };
  const handleDeleteNote = (index) => {
    const updatedNotes = [...Notes];
    updatedNotes.splice(index, 1);
    SetNotes(updatedNotes);
  };
  const editNote = (index,updatedNote) => {
    const updatedNotes = [...Notes];
    updatedNotes.splice(index, 1, updatedNote);
    SetNotes(updatedNotes);
  };

  return (
    <>
    <main className='app'>
     {showForm && <Form addNotes={addNote} />}
     {!showForm && < NoteList notes={Notes} handleDeleteNote={handleDeleteNote} editednotes={editNote}/>}
     <button onClick={()=>{
      setShowForm((prevValue)=>{
        return !prevValue
      })
     }} className='show-btn'>
      {showForm ? "Show Notes" : "Back"}
     </button>
    </main>
    </>
  )
}

export default App
