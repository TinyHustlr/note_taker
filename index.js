const noteBtn = document.querySelector("#note-btn")
const deleteBtn = document.querySelector("#delete-btn")
const noteslistEL = document.querySelector("#noteslist-el")
let newNoteEl = document.getElementById("newnote-el")
let notesTaken = []

if (notesTaken) {
    NotesTaken = localStorage.getItem("ZeldasNotes")
    for (let i = 0; i < notesTaken.length; i++) {
      noteslistEL.innerHTML += `<li class="listItem-el">${notesTaken[i]}</li>`    
    }
}

noteBtn.addEventListener("click", function() {
    notesTaken += newNoteEl.value // add notes to the array
    localStorage.setItem("ZeldasNotes", notesTaken) // add notes to local storage
    console.log(notesTaken)
})

deleteBtn.addEventListener("click", function() {
    alert("You are about to delete all your notes!")
    alert("Are you sure? This cannot be undone.")
    localStorage.clear()
    notesTaken = []
})