function addTask() {
    var input = document.getElementById("taskInput");
    var ul = document.getElementById("taskList");
  
    if (input.value.trim() === "") {
      alert("Please enter a task!");
      return;
    }
  
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    ul.appendChild(li);
    input.value = "";
  
    li.onclick = function () {
      li.parentNode.removeChild(li);
    };
  }