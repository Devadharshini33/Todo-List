var items = document.getElementById("list");
var input = document.getElementById("in");

function addList() {
    var item = input.value;
    var li = document.createElement("li");
    li.innerHTML = item + "<button onclick='deleteElement(event)'>Delete</button>";
    items.appendChild(li);
    input.value = ''; // Clear the input field after adding an item
}

function deleteElement(event) {
    event.target.parentElement.remove();
}