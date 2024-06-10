import React from 'react';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import styled from '@emotion/styled';

const StyledCard = styled(Card)`
  margin-bottom: ${({ theme }) => theme.spacing(2)}px;
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Note = ({ note, onDelete }) => {
  return (
    <StyledCard>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {note.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          {note.content}
        </Typography>
        <IconButton
          onClick={() => onDelete(note.id)}
          color="secondary"
          aria-label="delete"
        >
          <DeleteIcon />
        </IconButton>
      </CardContent>
    </StyledCard>
  );
};

export default Note;
