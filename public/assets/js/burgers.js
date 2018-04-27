$(function() {
$("#createburger").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newburger = {
      burger_name: $("#newburger").val().trim()
    };

    // Send the POST request.
    $.ajax("/create", {
      type: "POST",
      data: newburger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

//DELETE A BURGER
    $(".delburger").on("click", function(event) {
    var id = $(this).data("burgerid");

    // Send the DELETE request.
    $.ajax("/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted id ", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});