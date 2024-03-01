import Delete from "./Delete";

const NoteList = ({ notes, handleDeleteNote, editednotes }) => {
  
  return (
    <div className="notes"> 
      <h2>Note List</h2>
      <ul>
        {notes.map((Note, index) => (
          <li key={index}>
            <Delete notekey={index} note={Note}  onDeleteNote={handleDeleteNote} editedNote={editednotes}/>
          </li>
        ))}
      </ul>

    </div>

  );
};
export default NoteList