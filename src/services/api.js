import notes from './mockData';

export const getNotes = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...notes]);  // Return a copy of the notes array
    }, 500);
  });
};

export const createNote = async (note) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      note.id = notes.length + 1;
      notes.push(note);
      resolve(note);
    }, 500);
  });
};

export const deleteNote = async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const index = notes.findIndex(note => note.id === id);
      if (index !== -1) {
        notes.splice(index, 1);
        resolve(true);
      } else {
        resolve(false);
      }
    }, 500);
  });
};
