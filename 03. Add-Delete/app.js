function addItem() {
   let items = document.getElementById("items");
   let newItem = document.getElementById("newItemText").value;
   let li = document.createElement("li");
   li.textContent = newItem;
   items.appendChild(li);

   let deleteButton = document.createElement("a");
   deleteButton.textContent = "[Delete]";
   deleteButton.href = "#";
   li.appendChild(deleteButton);

   deleteButton.addEventListener("click", onDelete);

   function onDelete(event) {
       event.target.parentElement.remove()
   }
}