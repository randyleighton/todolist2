$(document).ready(function () {
  $("form#task").submit(function(event) {
    var inputTask = $("input#new-task").val();

    var newTask = {taskToDo: inputTask, completed: false};
    $("#second-column").show();

    $("#task-list").append("<div id=" + newTask.taskToDo + " class='checkbox'><input type='checkbox' value=''>"
          + newTask.taskToDo + "</div");

    $("#task").find("input").val(""); // this line clears the input boxes

    $(".checkbox input").last().click(function (){
      if(!newTask.completed){
        $(this).parent().css("text-decoration", "line-through");
        newTask.completed = true;
      }else{
        $(this).parent().css("text-decoration", "none");
        newTask.completed = false;
      }

      // $(this).parent().css("text-decoration", "line-through");
    });


  event.preventDefault();
  });

});
