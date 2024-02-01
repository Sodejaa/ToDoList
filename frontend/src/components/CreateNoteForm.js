import { useState } from "react";
import PropTypes from "prop-types";

const CreateNoteForm = ({ createNote }) => {
  const [newNote, setNewNote] = useState("");

  const addNote = (event) => {
    event.preventDefault();

    // Logging for debugging
    console.log("Adding note:", newNote);

    createNote({
      note: newNote,
    });

    setNewNote("");
  };

  return (
    <div>
      <h2>Create new</h2>

      <form onSubmit={addNote}>
        <div className="basicText">
          Note:
          <input
            type="text"
            value={newNote}
            name="Note"
            onChange={({ target }) => setNewNote(target.value)}
            placeholder="note"
            className="inputBox"
          />
          <button type="submit" className="createButton">
            create
          </button>
        </div>
      </form>
    </div>
  );
};

CreateNoteForm.propTypes = {
  createNote: PropTypes.func.isRequired,
};

export default CreateNoteForm;
