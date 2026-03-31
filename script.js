let notes = [];
let trashNotes = [];

function renderNotes() {
    let contentRef = document.getElementById('content');
    let trashContentRef = document.getElementById('trashContent');

    contentRef.innerHTML = '';
    trashContentRef.innerHTML = '';

    for (let i = 0; i < notes.length; i++) {
        contentRef.innerHTML += `
            <div class="note-row">
                <span>+ ${notes[i]}</span>
                <button class="delete-btn" onclick="moveToTrash(${i})">X</button>
            </div>
        `;
    }

    for (let i = 0; i < trashNotes.length; i++) {
        trashContentRef.innerHTML += `
            <div class="note-row">
                <span>+ ${trashNotes[i]}</span>
                <button class="delete-btn" onclick="deleteTrashNote(${i})">X</button>
            </div>
        `;
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

function moveToTrash(index) {
    trashNotes.push(notes[index]);
    notes.splice(index, 1);
    renderNotes();
}

function deleteTrashNote(index) {
    trashNotes.splice(index, 1);
    renderNotes();
}