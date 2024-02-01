import React from "react";
import PropTypes from "prop-types";

const Note = ({ note, handleRemove, handleEdit }) => (
  <div className="note">
    <div className="edit">
      {note.edit}
      <button onClick={() => handleEdit(note.id)} className="editButton">
        edit
      </button>
    </div>
    <div className="remove">
      {note.remove}
      <button onClick={() => handleRemove(note.id)} className="removeButton">
        remove
      </button>
    </div>
  </div>
);

Note.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number.isRequired,
    note: PropTypes.string.isRequired,
  }).isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default Note;
