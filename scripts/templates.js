function getNoteTemplate(index) {
    return `
        <div class="note">
            <h3>${notesTitles[index]}</h3>
            <p>${notesContents[index]}</p>

            <div class="note_bottom">
                <button class="circle_btn" onclick="moveNoteToTrash(${index})">X</button>
                <button class="circle_btn" onclick="moveNoteToArchiv(${index})">A</button>
            </div>
        </div>
    `;
}

function getArchivTemplate(index) {
    return `
        <div class="note">
            <h3>${archiveTitles[index]}</h3>
            <p>${archiveContents[index]}</p>

            <div class="note_bottom">
                <button class="circle_btn" onclick="moveArchivToTrash(${index})">X</button>
                <button class="circle_btn" onclick="moveArchivToNotes(${index})">N</button>
            </div>
        </div>
    `;
}

function getTrashTemplate(index) {
    return `
        <div class="note">
            <h3>${trashTitles[index]}</h3>
            <p>${trashContents[index]}</p>

            <div class="note_bottom">
                <button class="circle_btn" onclick="deleteTrashNote(${index})">X</button>
                <button class="circle_btn" onclick="moveTrashToNotes(${index})">N</button>
            </div>
        </div>
    `;
}