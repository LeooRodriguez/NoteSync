import React from 'react';
import NoteList from '../components/NoteList';
import './NotesPage.css';

const NotesPage = () => {
  return (
    <div className="notes-page">
      <h1>My Notes</h1>
      <NoteList />
    </div>
  );
}

export default NotesPage;
