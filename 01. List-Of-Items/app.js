function addItem() {
    let ul = document.getElementById("items");
    let textField = document.getElementById("newItemText").value;
    let li = document.createElement("li");
    li.textContent = textField
    ul.appendChild(li);
}