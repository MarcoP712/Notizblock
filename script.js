let notes = [];

function renderNotes() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = '';

    for (let i = 0; i < notes.length; i++) {
        contentRef.innerHTML += `
            <div class="note">
                + ${notes[i]}
                <button class="delete-btn" onclick="deleteNote(${i})">X</button>
            </div>
        `;
    }
}

function addNote() {
    let inputRef = document.getElementById('noteInput');
    let newNote = inputRef.value.trim();

    if (newNote !== '') {
        notes.push(newNote);
        inputRef.value = '';
        renderNotes();
    }
}

function deleteNote(index) {
    notes.splice(index, 1);
    renderNotes();
}