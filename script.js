const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
function addTask(){
    if(inputBox.value===''){
        alert("you must write something!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);   //kaha display karega || appendChild() method adds a new child element to the end of a parent element
        let span=document.createElement("span");
        span.innerHTML="\u00d7";     //cross add kardega
        li.appendChild(span);    //display ho jayega ab
    }
    inputBox.value="";   //ek text enter karne k baad text box clean milega
    saveData();     //jo bhe updated data rahega refresh karne k bbadbhe wahi show karega
}

//working of check and uncheck
listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();