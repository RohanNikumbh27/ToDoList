const inputbox = document.getElementById("inputsection");
const listContainer = document.getElementById("list-container");

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function addTask(){
    if(inputbox.value === ''){
        alert("You must Write Something in the input box, then click on add");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "";
        li.appendChild(span);
    }
    inputbox.value = "";
    saveData();
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);
saveData();
