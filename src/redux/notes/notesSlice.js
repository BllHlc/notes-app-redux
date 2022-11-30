import { createSlice, nanoid } from '@reduxjs/toolkit';

export const getLocalStorage = () => {
  return localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes")) : [];
};
export const setLocalStorage = (notes) => {
  localStorage.setItem("notes", JSON.stringify(notes));
};

export const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    items: [...getLocalStorage()],
    filtered: "",
    activeCategory: localStorage.getItem('activeCategory') || "",
    currentNote: [],
    activeColor: localStorage.getItem('activeColor') || 'green.200',
    drawer: false,
  },
  reducers: {
    addNote: {
      reducer(state, action) {
        state.items.push(action.payload);
        setLocalStorage(state.items);
      },
      prepare({ content, color }) {
        return {
          payload: {
            id: nanoid(),
            content,
            color,
          }
        };
      }
    },
    findNote: (state, action) => {
      state.filtered = action.payload;
    },
    category: (state, action) => {
      state.activeCategory = action.payload;
      localStorage.setItem('activeCategory', action.payload);
    },
    onClickNote: (state, action) => {
      state.currentNote = action.payload;
    },
    editNote: (state, action) => {
      state.items.find((item) => item.id === state.currentNote.id).content = action.payload;
      setLocalStorage(state.items);
    },
    deleteNote: (state) => {
      state.items = state.items.filter((item) => item.id !== state.currentNote.id);
      setLocalStorage(state.items);
    },
    changeColor: (state, action) => {
      state.activeColor = action.payload;
    },
    changeDrawer: (state) => {
      state.drawer = !state.drawer;
    },
  }
});

export const filteredNotes = (state) => {
  let filtered;
  if (state.notes.activeCategory === "") {
    filtered = state.notes.items.filter
      (item => item.content.toLowerCase().includes(state.notes.filtered.toLowerCase()));
  } else if (state.notes.activeCategory && state.notes.filtered) {
    filtered = state.notes.items.filter(item => item.content.toLowerCase().includes(state.notes.filtered.toLowerCase()) && item.color === state.notes.activeCategory);
  } else {
    filtered = state.notes.items.filter(item => item.color === state.notes.activeCategory);
  }
  return filtered;
};

export const { addNote, findNote, category, onClickNote, editNote, deleteNote, changeColor, changeDrawer } = notesSlice.actions;
export default notesSlice.reducer;