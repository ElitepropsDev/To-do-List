var notesContainer = document.querySelector(".noteContainer")
var createBtn = document.querySelector(".btn")
var notes = document.querySelectorAll(".inputBox")


function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML)
}

createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p")
    let img = document.createElement("img")
    inputBox.className = 'inputBox'
    inputBox.setAttribute("contenteditable", "true");
    img.src = "Assets/delete-3518234-2948077.jpg"
    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "p" ){
        notes = document.querySelectorAll(".inputBox");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})
   
