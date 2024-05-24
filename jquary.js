$(document).ready(function() {
    // Click to toggle visibility
    $("#toggle-btn").click(function() {
      $("#intro").toggle();
    });
  
    // Click to fade out and fade in
    $("#fade-btn").click(function() {
      $("#intro").fadeOut(1000, function() {
        $(this).fadeIn(1000);
      });
    });
  
    // Click to add a class
    $("#class-btn").click(function() {
      $("#intro").addClass("highlight");
    });
  
    // Click to append text
    $("#append-btn").click(function() {
      $("#content").append("<p>Appended text!</p>");
    });
  
    // Click to change HTML content
    $("#html-btn").click(function() {
      $("#intro").html("<strong>HTML content changed!</strong>");
    });
  
    // Click to change text content
    $("#text-btn").click(function() {
      $("#intro").text("Text content changed!");
    });
  
    // Click to get input value and alert it
    $("#val-btn").click(function() {
      alert($("#input-box").val());
    });
  
    // Click to show input value in a paragraph
    $("#show-input-btn").click(function() {
      var inputValue = $("#input-box").val();
      $("#form-section").append("<p>" + inputValue + "</p>");
    });
  })