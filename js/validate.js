// validate contact form
    $('#contact').validate({

        submitHandler: function(form) {
    		$.ajax({
                url: "//formspree.io/lchan5@gmail.com",
                method: "POST",
                data: $(form).serialize(),
                dataType: "json",
                success: function() {
                    $('#contactform :input').attr('disabled', 'disabled');
                    $('#contactform').fadeTo( "slow", 0.15, function() {
                        $(this).find(':input').attr('disabled', 'disabled');
                        $(this).find('label').css('cursor','default');
                        $('#submit-success').fadeIn();
                    });
                },
                error: function() {
                    $('#contactform').fadeTo( "slow", 0.15, function() {
                        $('#submit-errors').fadeIn();
                    });
                }
            });
    	    
  	    }
          
        
        
    });
