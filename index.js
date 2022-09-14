const noteBtn = document.querySelector("#note-btn")
const noteslistEL = document.querySelector("#noteslist-el")
let newNoteEl = document.getElementById("newnote-el")
let notesTaken = []

if (notesTaken) {
    let renderNotes = JSON.parse(localStorage.getItem("ZeldasNotes")) 
    noteslistEL.innerHTML += `<li class="listItem-el">${renderNotes}</li>`   
}

noteBtn.addEventListener("click", function() {
    notesTaken += newNoteEl.value // add notes to the array
    localStorage.setItem("ZeldasNotes", JSON.stringify(notesTaken)) // add notes to local storage
    newNoteEl.textContent = ""
})

