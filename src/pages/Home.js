import React, { useState, useEffect } from 'react';
import NoteList from '../components/NoteList';
import { getNotes, deleteNote } from '../services/api';

const Home = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const data = await getNotes();
    setNotes(data);
  };

  const handleDelete = async (id) => {
    const result = await deleteNote(id);
    if (result) {
      setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
    }
  };

  return (
    <div>
      <h1>Mis Notas</h1>
      <NoteList notes={notes} onDelete={handleDelete} />
    </div>
  );
};

export default Home;
