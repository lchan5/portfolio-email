jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value);
    }, "type the correct answer -_-");

// validate contact form
$(function() {
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
            $(form).ajaxSubmit({
                type:"POST",
                data: $(form).serialize(),
                url:"../process.php",
                success: function() {
                    $('#contact :input').attr('disabled', 'disabled');
                    $('#contact').fadeTo( "slow", 0.15, function() {
                        $(this).find(':input').attr('disabled', 'disabled');
                        $(this).find('label').css('cursor','default');
                        $('#success').fadeIn();
                    });
                },
                error: function() {
                    $('#contact').fadeTo( "slow", 0.15, function() {
                        $('#error').fadeIn();
                    });
                }
            });
        }
    });
});