import React from 'react';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Note = ({ note, onDelete }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{note.title}</Typography>
        <Typography variant="body2">{note.content}</Typography>
        <IconButton onClick={() => onDelete(note.id)}>
          <DeleteIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default Note;
