import React, { useState, useEffect } from 'react';
import NoteList from '../components/NoteList';
import { getNotes, deleteNote } from '../services/api';
import { Container, Typography, Paper, Grid } from '@mui/material';
import styled from '@emotion/styled';

const StyledContainer = styled(Container)`
  margin-top: ${({ theme }) => theme.spacing(4)}px;
`;

const StyledTitle = styled(Typography)`
  margin-bottom: ${({ theme }) => theme.spacing(4)}px;
  font-weight: bold;
  color: #333;
`;

const StyledPaper = styled(Paper)`
  padding: ${({ theme }) => theme.spacing(4)}px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;


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
      setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
    }
  };

  return (
    <StyledContainer maxWidth="md">
      <StyledTitle variant="h4">
        Mis Notas
      </StyledTitle>
      <StyledPaper>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <NoteList notes={notes} onDelete={handleDelete} />
          </Grid>
        </Grid>
      </StyledPaper>
    </StyledContainer>
  );
};

export default Home;
