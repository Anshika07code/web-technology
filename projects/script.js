const list = document.getElementById("list");

function addTask() {
  const task = document.getElementById("task").value;
  if (task === "") return;
  const li = document.createElement("li");
  li.innerHTML = task + "<button onclick='this.parentElement.remove()'>X</button>";
  list.appendChild(li);
  document.getElementById("task").value = "";
}
