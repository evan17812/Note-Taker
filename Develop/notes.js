document.addEventListener('DOMContentLoaded', () => {
  const listContainer = document.getElementById('list-group');
  const noteTitleInput = document.querySelector('.note-title');
  const noteTextInput = document.querySelector('.note-textarea');
  const saveNoteButton = document.querySelector('.save-note');
  const newNoteButton = document.querySelector('.new-note');
  const clearButton = document.querySelector('.clear-btn');



  saveNoteButton.addEventListener('click', saveNote);
  newNoteButton.addEventListener('click', () => {
    noteTitleInput.value = '';
    noteTextInput.value = '';
  });
  clearButton.addEventListener('click', () => {
    noteTitleInput.value = '';
    noteTextInput.value = '';
  });


  loadNotes();
});