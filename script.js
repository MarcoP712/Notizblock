let notesTitles = [];
let notesContents = [];

let archiveTitles = [];
let archiveContents = [];

let trashTitles = [];
let trashContents = [];

function init() {
    loadFromLocalStorage();
    render();
}

function addNote() {
    let titleInputRef = document.getElementById('title_input');
    let contentInputRef = document.getElementById('content_input');

    let title = titleInputRef.value.trim();
    let content = contentInputRef.value.trim();

    if (title === '' || content === '') {
        return;
    }

    notesTitles.push(title);
    notesContents.push(content);

    saveToLocalStorage();
    render();

    titleInputRef.value = '';
    contentInputRef.value = '';
}

function render() {
    renderNotes();
    renderArchiv();
    renderTrash();
    renderCounters();
}

function renderNotes() {
    let notesContentRef = document.getElementById('notes_content');
    notesContentRef.innerHTML = '';

    for (let index = 0; index < notesTitles.length; index++) {
        notesContentRef.innerHTML += getNoteTemplate(index);
    }
}

function renderArchiv() {
    let archivContentRef = document.getElementById('archiv_content');
    archivContentRef.innerHTML = '';

    for (let index = 0; index < archiveTitles.length; index++) {
        archivContentRef.innerHTML += getArchivTemplate(index);
    }
}

function renderTrash() {
    let trashContentRef = document.getElementById('trash_content');
    trashContentRef.innerHTML = '';

    for (let index = 0; index < trashTitles.length; index++) {
        trashContentRef.innerHTML += getTrashTemplate(index);
    }
}

function renderCounters() {
    document.getElementById('notes_counter').innerText = notesTitles.length;
    document.getElementById('archiv_counter').innerText = archiveTitles.length;
    document.getElementById('trash_counter').innerText = trashTitles.length;
}

function moveNoteToArchiv(index) {
    archiveTitles.push(notesTitles[index]);
    archiveContents.push(notesContents[index]);

    notesTitles.splice(index, 1);
    notesContents.splice(index, 1);

    saveToLocalStorage();
    render();
}

function moveNoteToTrash(index) {
    trashTitles.push(notesTitles[index]);
    trashContents.push(notesContents[index]);

    notesTitles.splice(index, 1);
    notesContents.splice(index, 1);

    saveToLocalStorage();
    render();
}

function moveArchivToNotes(index) {
    notesTitles.push(archiveTitles[index]);
    notesContents.push(archiveContents[index]);

    archiveTitles.splice(index, 1);
    archiveContents.splice(index, 1);

    saveToLocalStorage();
    render();
}

function moveArchivToTrash(index) {
    trashTitles.push(archiveTitles[index]);
    trashContents.push(archiveContents[index]);

    archiveTitles.splice(index, 1);
    archiveContents.splice(index, 1);

    saveToLocalStorage();
    render();
}

function moveTrashToNotes(index) {
    notesTitles.push(trashTitles[index]);
    notesContents.push(trashContents[index]);

    trashTitles.splice(index, 1);
    trashContents.splice(index, 1);

    saveToLocalStorage();
    render();
}

function deleteTrashNote(index) {
    trashTitles.splice(index, 1);
    trashContents.splice(index, 1);

    saveToLocalStorage();
    render();
}

function saveToLocalStorage() {
    localStorage.setItem('notesTitles', JSON.stringify(notesTitles));
    localStorage.setItem('notesContents', JSON.stringify(notesContents));

    localStorage.setItem('archiveTitles', JSON.stringify(archiveTitles));
    localStorage.setItem('archiveContents', JSON.stringify(archiveContents));

    localStorage.setItem('trashTitles', JSON.stringify(trashTitles));
    localStorage.setItem('trashContents', JSON.stringify(trashContents));
}

function loadFromLocalStorage() {
    let storedNotesTitles = localStorage.getItem('notesTitles');
    let storedNotesContents = localStorage.getItem('notesContents');

    let storedArchiveTitles = localStorage.getItem('archiveTitles');
    let storedArchiveContents = localStorage.getItem('archiveContents');

    let storedTrashTitles = localStorage.getItem('trashTitles');
    let storedTrashContents = localStorage.getItem('trashContents');

    if (storedNotesTitles) {
        notesTitles = JSON.parse(storedNotesTitles);
    }

    if (storedNotesContents) {
        notesContents = JSON.parse(storedNotesContents);
    }

    if (storedArchiveTitles) {
        archiveTitles = JSON.parse(storedArchiveTitles);
    }

    if (storedArchiveContents) {
        archiveContents = JSON.parse(storedArchiveContents);
    }

    if (storedTrashTitles) {
        trashTitles = JSON.parse(storedTrashTitles);
    }

    if (storedTrashContents) {
        trashContents = JSON.parse(storedTrashContents);
    }
}