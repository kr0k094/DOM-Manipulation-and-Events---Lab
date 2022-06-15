function deleteByEmail() {
    let rows = Array.from(document.querySelectorAll("tbody tr"));
    let input = document.querySelector("input[name = email").value;
    let result = document.getElementById("result");
    let isFound = false;
    for (const row of rows) {   
        if(input == row.children[1].textContent){
            let parent = row.parentElement
            parent.removeChild(row);
           isFound = true;
        }   
if(isFound){
    result.textContent = "Deleted.";
}else result.textContent = "Not found.";
    
}
}