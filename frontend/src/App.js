import { useState, useEffect, useRef } from "react";
import Note from "./components/Note";
import noteService from "./services/notes";
import CreateNoteForm from "./components/CreateNoteForm";

function App() {
  const [notes, setNotes] = useState([]);
  const [message, setMessage] = useState(null);
  const [editingNote, setEditingNote] = useState(null);
  const CreateNoteFormRef = useRef();

  useEffect(() => {
    noteService.getAll().then((notes) => setNotes(notes));
  }, []);

  const createNote = (noteObject) => {
    noteService
      .create(noteObject)
        .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setMessage(`a new note ${noteObject.note} added`)
        setTimeout(() => {
        setMessage(null)
        }, 5000)
      })
  }

  const handleEdit = (id) => {
    const noteToBeEdited = notes.find((note) => note.id === id);
    CreateNoteFormRef.current.setInitialValue(noteToBeEdited.note);
    setEditingNote(noteToBeEdited);
  };

  const handleRemove = (id) => {
    const noteToBeDeleted = notes.find((note) => note.id === id);
    if (window.confirm(`Remove note "${noteToBeDeleted.note}"`)) {
      noteService.remove(id).then(() => {
        setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
        setMessage(`Removed note "${noteToBeDeleted.note}"`);
        setTimeout(() => {
          setMessage(null);
        }, 5000);
      });
    }
  };
  
  console.log(notes.map(note => console.log(note)));

  return (
    <div>
      <h2>Notes</h2>
      <CreateNoteForm createNote={createNote} />
      {message && <div className="message">{message}</div>}
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          handleRemove={handleRemove}
          handleEdit={() => handleEdit(note.id)}
        />
      ))}
    </div>
  );
}

export default App;
