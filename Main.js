let userInput = document.querySelector('input[type="text"]');
let addButton = document.querySelector('.add-btn');
let listContainer = document.querySelector('#List-container');


addButton.onclick = function() {
    let newTask = document.createElement('li');
    let taskContent = document.createTextNode(userInput.value);
    newTask.appendChild(taskContent);

    let span = document.createElement("span");
    let closeBtn = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(closeBtn);
    newTask.appendChild(span);
    listContainer.appendChild(newTask); 
    saveData()
};


listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
        saveData()
    } 
    else if (e.target.className === 'close') {
        e.target.parentElement.remove();
        saveData()
    }
}, false);


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showData();