import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createNote } from '../services/api';
import { TextField, Button, Container, Typography, Paper, Grid } from '@mui/material';
import styled from '@emotion/styled';

const StyledContainer = styled(Container)`
  margin-top: ${({ theme }) => theme.spacing(4)}px;
`;

const StyledTitle = styled(Typography)`
  margin-bottom: ${({ theme }) => theme.spacing(4)}px;
  font-weight: bold;
  color: #333;
`;

const StyledForm = styled('form')`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: ${({ theme }) => theme.spacing(4)}px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const StyledTextField = styled(TextField)`
  margin-bottom: ${({ theme }) => theme.spacing(2)}px;
`;

const StyledButton = styled(Button)`
  margin-top: ${({ theme }) => theme.spacing(2)}px;
`;

const CreateNote = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title && content) {
      await createNote({ title, content });
      navigate('/');
    }
  };

  return (
    <StyledContainer maxWidth="sm">
      <StyledTitle variant="h4">
        Crear Nota
      </StyledTitle>
      <StyledForm onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <StyledTextField
              label="Título"
              fullWidth
              margin="normal"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <StyledTextField
              label="Contenido"
              fullWidth
              margin="normal"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12}>
            <StyledButton type="submit" variant="contained" color="primary" fullWidth>
              Crear
            </StyledButton>
          </Grid>
        </Grid>
      </StyledForm>
    </StyledContainer>
  );
};

export default CreateNote;
