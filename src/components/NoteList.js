import React, { useState } from 'react';
import NoteForm from './NoteForm';
import './NoteList.css';

const initialNotes = [
  { id: 1, title: 'Note 1', content: 'Content of note 1' },
  { id: 2, title: 'Note 2', content: 'Content of note 2' },
  { id: 3, title: 'Note 3', content: 'Content of note 3' },
];

const NoteList = () => {
  const [notes, setNotes] = useState(initialNotes);
  const [noteToEdit, setNoteToEdit] = useState(null);

  const saveNote = (note) => {
    if (noteToEdit) {
      setNotes(notes.map(n => (n.id === noteToEdit.id ? { ...n, ...note } : n)));
      setNoteToEdit(null);
    } else {
      setNotes([...notes, { ...note, id: notes.length + 1 }]);
    }
  };

  const editNote = (note) => {
    setNoteToEdit(note);
  };

  return (
    <div className="note-list">
      <NoteForm onSave={saveNote} noteToEdit={noteToEdit} />
      {notes.map(note => (
        <div key={note.id} className="note-item">
          <h2>{note.title}</h2>
          <p>{note.content}</p>
          <button onClick={() => editNote(note)}>Edit</button>
        </div>
      ))}
    </div>
  );
}

export default NoteList;
