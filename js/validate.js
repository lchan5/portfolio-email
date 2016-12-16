// validate contact form
    $('#contact').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true
            }
            /*
            answer: {
                required: true,
                answercheck: true
            }
            */
        },
        messages: {
            name: {
                required: "<br />this field is required<br /><br />",
                minlength: "your name must consist of at least 2 characters"
            },
            email: {
                required: "<br />this field is required<br /><br />"
            },
            message: {
                required: "<br />this field is required<br /><br />",
                minlength: "thats all? really?"
            }
            /*
            answer: {
                required: "<br />sorry, wrong answer!"
            }
            */
        },
        
        submitHandler: function(form) {
    		$.ajax({
                url: "//formspree.io/lchan5@gmail.com",
                method: "POST",
                data: $(form).serialize(),
                dataType: "json",
                success: function() {
                    $("#submit-success").fadeIn();
                    $("#contactform").fadeOut();
                },
                error: function() {
                    $("#submit-errors").fadeIn();
                }
            });
    	    
  	    }
        
        
        
        
        
        
    });
