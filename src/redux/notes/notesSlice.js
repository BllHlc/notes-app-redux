import { createSlice } from '@reduxjs/toolkit';

export const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    items: [
      {
        id: 1,
        title: 'Note 1',
        content: 'Content 3',
      },
      {
        id: 2,
        title: 'Note 2',
        content: 'Content 2',
      },
    ]
  },
  reducers: {}
});


export default notesSlice.reducer;