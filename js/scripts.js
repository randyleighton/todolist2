$(document).ready(function () {

  $("form#task").submit(function(event) {
    var inputList = $("input#new-list").val();
    var lists = [];
    lists.push(inputList);
    var newList = {name: inputList, tasks: []}
    //newList.listType.push({list: inputList})
    $("#second-column").show();

    $("#list-types").append("<div class='list'>" + newList.name + "</div>");

    $("#task").find("input").val(""); // this line clears the input boxes

    $(".list").last().click(function(){
      $("#third-column").show();
      $("#list-title").text(newList.name);
      $("#list-items").empty();

      newList.tasks.forEach(function(task) {
        $("#list-items").append("<div>" + task.description + "</div>");
      });
      // event.preventDefault();

      $("form#list-task").unbind('submit').submit(function(event) {
        var inputTask = $("input#list-task").val();
        var newTask = {description: inputTask};
        newList.tasks.push(newTask);
        $("#list-items").append("<div>" + newTask.description + "</div>");
        console.log(newList.tasks)

        event.preventDefault();
      });

    });
  event.preventDefault();
  });

  $("form#list-task").submit(function(event) {
    var inputTask = $("input#list-task").val();
    var newTask = {task: []};
    $("#list-items").append("<div>" + newTask.task + "</div>");

  event.preventDefault();
  });


});
