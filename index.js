const newNoteEl = document.querySelector("#newnote-el")
const noteBtn = document.querySelector("#note-btn")
let notesTakenEl = document.querySelector("#notestaken-el")
let noteStore = []

noteBtn.addEventListener("click", function () {
    saveNote ()
})

function saveNote() {
    noteStore = []
    noteStore.push(newNoteEl.value)
    notesTakenEl.innerHTML += "<li>" + (noteStore) + "</li>"
    newNoteEl.value = ""
}

