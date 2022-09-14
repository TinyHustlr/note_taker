const noteBtn = document.querySelector("#note-btn")
const deleteBtn = document.querySelector("#delete-btn")
const noteslistEL = document.querySelector("#noteslist-el")
const zeldachatEl = document.querySelector("#zeldachat-el")
let newNoteEl = document.querySelector("#newnote-el")
let notesTaken = []
let zeldaComments = ["Okay I got that. I'll be sure Ganon does not see it.", "Noted. I might also let Link know for safe keeping.", "Well that is very interesting. I shall remember it during my research of Hyrule.", "Thank you for trusting me with that very important information.", "Oh if Ganon knew what you just wrote, we could be in a lot of trouble"]



if (notesTaken) {
    NotesTaken = localStorage.getItem("ZeldasNotes")
    for (let i = 0; i < notesTaken.length; i++) {
      noteslistEL.innerHTML += `<li class="listItem-el">${notesTaken[i]}</li>`    
    }
}

noteBtn.addEventListener("click", function() {
    notesTaken += newNoteEl.value // add notes to the array
    localStorage.setItem("ZeldasNotes", notesTaken) // add notes to local storage
    let randomChatIndex = Math.floor(Math.random() * zeldaComments.length)
    zeldachatEl.textContent = zeldaComments[randomChatIndex]
})

deleteBtn.addEventListener("click", function() {
    alert("You are about to delete all your notes!")
    alert("Are you sure? This cannot be undone.")
    localStorage.clear()
    notesTaken = []
})