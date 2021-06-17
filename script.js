function addTodo() {
    var todoitem = document.getElementById("todo-item");
    // console.log(todoitem.value);



    var li = document.createElement("li");
    var litext = document.createTextNode(todoitem.value);
    li.appendChild(litext);



    var delbtn = document.createElement("button");
    var deltext = document.createTextNode("DELETE ITEM");
    delbtn.appendChild(deltext);
    delbtn.setAttribute("onclick", "abc(this)");
    delbtn.setAttribute("class", "delet");


    var editbtn = document.createElement("button");
    var edittext = document.createTextNode("EDIT ITEM");
    editbtn.appendChild(edittext);
    editbtn.setAttribute("onclick", "xyz(this)");
    editbtn.setAttribute("class", "edi");



    li.appendChild(delbtn);
    li.appendChild(editbtn);

    list.appendChild(li)

    todoitem.value = "";

}


var list = document.getElementById("list")

function delall() {
    list.innerHTML = ""
}

function abc(e) {
    e.parentNode.remove();
}

function xyz(e) {
    var val = e.parentNode.firstChild.nodeValue;
    var editval = prompt("edit");
    e.parentNode.firstChild.nodeValue = editval;
}