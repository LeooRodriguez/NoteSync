import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createNote } from '../services/api';
import { TextField, Button } from '@mui/material';

const CreateNote = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createNote({ title, content });
    navigate('/');
  };

  return (
    <div>
      <h1>Crear Nota</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Contenido"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button type="submit">Crear</Button>
      </form>
    </div>
  );
};

export default CreateNote;
