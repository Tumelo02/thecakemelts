// Contact Form Handler for The Cake Melts
(function($) {
    "use strict";

    var $form = $("#contact-form");
    var $submitBtn = $("#cf-submit");
    var $successMsg = $(".text-success");
    var $errorMsg = $(".text-danger");

    // EmailJS configuration pulled from data attributes to avoid hardcoding secrets
    var emailJsService = $form.data("emailjs-service");
    var emailJsTemplate = $form.data("emailjs-template");
    var emailJsPublicKey = $form.data("emailjs-public");
    var emailJsInitialized = false;

    function isValidEmail(emailAddress) {
        var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(emailAddress);
    }

    $("#contact-form").submit(function(e) {
        e.preventDefault();

        // Hide previous messages
        $successMsg.hide();
        $errorMsg.hide();

        // Honeypot to deter bots
        var honeypot = $("#cf-website").val().trim();
        if (honeypot) {
            return false;
        }

        // Get form values
        var name = $("#cf-name").val().trim();
        var email = $("#cf-email").val().trim();
        var subject = $("#cf-subject").val().trim();
        var message = $("#cf-message").val().trim();

        // Validate form
        if (!name || name.length < 2) {
            $errorMsg.text("Please enter your full name (at least 2 characters).").fadeIn(1000);
            return false;
        }

        if (!email || !isValidEmail(email)) {
            $errorMsg.text("Please enter a valid email address.").fadeIn(1000);
            return false;
        }

        if (!subject || subject.length < 3) {
            $errorMsg.text("Please enter a subject (at least 3 characters).").fadeIn(1000);
            return false;
        }

        if (!message || message.length < 10) {
            $errorMsg.text("Please enter a message (at least 10 characters).").fadeIn(1000);
            return false;
        }

        if (!window.emailjs) {
            $errorMsg.text("Email service is unavailable right now. Please contact us directly at leratontsinyi11@gmail.com.").fadeIn(1000);
            return false;
        }

        if (!emailJsService || !emailJsTemplate || !emailJsPublicKey) {
            $errorMsg.text("Email is not configured yet. Please add EmailJS IDs to the form data attributes.").fadeIn(1000);
            return false;
        }

        if (!emailJsInitialized) {
            emailjs.init(emailJsPublicKey);
            emailJsInitialized = true;
        }

        // Disable submit button
        $submitBtn.prop('disabled', true).text('Sending...');

        emailjs.send(emailJsService, emailJsTemplate, {
            from_name: name,
            from_email: email,
            reply_to: email,
            subject: subject,
            message: message,
            time: new Date().toLocaleString()
        }).then(function() {
            $successMsg.text("Your message has been sent successfully!").fadeIn(1000);
            $errorMsg.fadeOut(500);
            $form[0].reset();
        }).catch(function(error) {
            var messageText = "Failed to send message. Please try again or email us directly at leratontsinyi11@gmail.com.";
            if (error && error.text) {
                messageText = messageText + " (" + error.text + ")";
            }
            $errorMsg.text(messageText).fadeIn(1000);
            $successMsg.fadeOut(500);
        }).finally(function() {
            $submitBtn.prop('disabled', false).text('Send Message');
        });

        return false;
    });
    
})(jQuery);

