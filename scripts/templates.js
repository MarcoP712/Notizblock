function getNoteTemplate(index) {
    return `
        <div class="note note_notes">
            <div class="note_tag">Aktiv</div>
            <h3>${notesTitles[index]}</h3>
            <p>${notesContents[index]}</p>

            <div class="note_bottom">
                <button class="circle_btn danger_btn" onclick="moveNoteToTrash(${index})" title="In den Trash">X</button>
                <button class="circle_btn accent_btn" onclick="moveNoteToArchiv(${index})" title="Ins Archiv">A</button>
            </div>
        </div>
    `;
}

function getArchivTemplate(index) {
    return `
        <div class="note note_archiv">
            <div class="note_tag">Archiv</div>
            <h3>${archiveTitles[index]}</h3>
            <p>${archiveContents[index]}</p>

            <div class="note_bottom">
                <button class="circle_btn danger_btn" onclick="moveArchivToTrash(${index})" title="In den Trash">X</button>
                <button class="circle_btn accent_btn" onclick="moveArchivToNotes(${index})" title="Zurück zu Notes">N</button>
            </div>
        </div>
    `;
}

function getTrashTemplate(index) {
    return `
        <div class="note note_trash">
            <div class="note_tag">Trash</div>
            <h3>${trashTitles[index]}</h3>
            <p>${trashContents[index]}</p>

            <div class="note_bottom">
                <button class="circle_btn danger_btn" onclick="deleteTrashNote(${index})" title="Endgültig löschen">X</button>
                <button class="circle_btn accent_btn" onclick="moveTrashToNotes(${index})" title="Wiederherstellen">N</button>
            </div>
        </div>
    `;
}