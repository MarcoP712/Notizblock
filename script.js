let notes = ['banana', 'rasen mähen', 'orange'];

function renderNotes() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = '';

    for (let i = 0; i < notes.length; i++) {
        contentRef.innerHTML += `<div class="note">+ ${notes[i]}</div>`;
    }
}

function addNote() {
    let noteInputRef = document.getElementById('noteInput');
    let newNote = noteInputRef.value.trim();

    if (newNote !== '') {
        notes.push(newNote);
        noteInputRef.value = '';
        renderNotes();
    }
}