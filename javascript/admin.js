var postInput = document.getElementById("new-task"); 
var addButton = document.getElementsByTagName("button")[0]; 
var PostsHolder = document.getElementById("allposts"); 

//New Task List Item
var createNewPostElement = function(taskString) {
  //Create List Item
  var listItem = document.createElement("li");

  //label
  var label = document.createElement("label");
  //input (text)
  var editInput = document.createElement("input"); // text
  //button.edit
  var editButton = document.createElement("button");
  //button.delete
  var deleteButton = document.createElement("button");
  
  //Each element needs modifying
  
  editInput.type = "text";
  
  editButton.innerText = "Edit";
  editButton.className = "edit";
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";
  
  label.innerText = taskString;
  
  //Each element needs appending
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  return listItem;
}

//Add a new task
var addPost = function() {
  console.log("Add task...");
  //Create a new list item with the text from #new-task:
  var listItem = createNewPostElement(postInput.value);
  //Append listItem to PostsHolder
  PostsHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
  
  postInput.value = "";
}

//Edit an existing task
var editPost = function() {
  console.log("Edit task...");

  var listItem = this.parentNode;
  
  var editInput = listItem.querySelector("input[type=text");
  var label = listItem.querySelector("label");
  
  var containsClass = listItem.classList.contains("editMode");
  
  //if the class of the parent is .editMode
  if(containsClass) {
    //Switch from .editMode
    //label text become the input's value
    label.innerText = editInput.value;
  } else {
    //Switch to .editMode
    //input value becomes the label's text
    editInput.value = label.innerText;
  }
  
  //Toggle .editMode on the list item
  listItem.classList.toggle("editMode");
  
}

//Delete an existing task
var deleteTask = function() {
  console.log("Delete task...");
  var listItem = this.parentNode;
  var ul = listItem.parentNode;
  
  //Remove the parent list item from the ul
  ul.removeChild(listItem);
}

//Mark a task as complete
var taskCompleted = function() {
  console.log("Task complete...");
  //Append the task list item to the #completed-tasks
  var listItem = this.parentNode;
  bindTaskEvents(listItem, taskIncomplete);
}

//Mark a task as incomplete
var taskIncomplete = function() {
  console.log("Task incomplete...");
  //Append the task list item to the #incomplete-tasks
  var listItem = this.parentNode;
  PostsHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
  console.log("Bind list item events");
  //select taskListItem's children
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");
  
  //bind editPost to edit button
  editButton.onclick = editPost;
  
  //bind deleteTask to delete button
  deleteButton.onclick = deleteTask;
  
}

var ajaxRequest = function() {
  console.log("AJAX request");
}

//Set the click handler to the addPost function
addButton.addEventListener("click", addPost);
addButton.addEventListener("click", ajaxRequest);

//cycle over PostsHolder ul list items
for(var i = 0; i < PostsHolder.children.length; i++) {
  //bind events to list item's children (taskCompleted)
  bindTaskEvents(PostsHolder.children[i], taskCompleted);
}

