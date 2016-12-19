  $(document).ready(function(){
    $("#contactform").submit(function(event){
      event.preventDefault();
      $.ajax({
        url: "https://www.enformed.io/5v9226ze",
        method: "post",
        dataType: "json",
        accepts: "application/json",
        data: $("#contactform").serialize(),
        success: function(){
          console.log("Your form was successfully received!");
        },
        error: function(){
          console.log("Failure. Try again.");
        }
      });
    });
  });
