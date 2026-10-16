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
        var occasion = $("#cf-occasion").val() || "";
        var eventDate = $("#cf-date").val() || "";
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

        if (!occasion) {
            $errorMsg.text("Please choose the occasion for your cake.").fadeIn(1000);
            $("#cf-occasion").focus();
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
            $errorMsg.text("Online orders are unavailable right now. Please WhatsApp or email us at leratontsinyi11@gmail.com.").fadeIn(1000);
            return false;
        }

        if (!emailJsInitialized) {
            emailjs.init(emailJsPublicKey);
            emailJsInitialized = true;
        }

        // Disable submit button
        $submitBtn.prop('disabled', true).text('Sending...');

        var now = new Date();
        var formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        var formattedDate = now.toLocaleDateString([], { year: 'numeric', month: 'short', day: 'numeric' });
        var formattedTimestamp = formattedTime + ' ' + formattedDate;

        // The EmailJS template only renders subject/message, so occasion and date are folded in there too.
        var subject = "Cake order: " + occasion + (eventDate ? " (" + eventDate + ")" : "");
        var fullMessage = "Occasion: " + occasion + "\n" +
            "Date needed: " + (eventDate || "Not specified") + "\n\n" + message;

        emailjs.send(emailJsService, emailJsTemplate, {
            name: name,
            from_name: name,
            from_email: email,
            reply_to: email,
            subject: subject,
            message: fullMessage,
            occasion: occasion,
            event_date: eventDate,
            time: formattedTimestamp
        }).then(function() {
            $successMsg.text("Thank you, " + name.split(" ")[0] + "! Your order request has been sent. We'll be in touch soon.").fadeIn(1000);
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
            $submitBtn.prop('disabled', false).text('Send Order Request');
        });

        return false;
    });
    
})(jQuery);

