// Contact Form Handler using EmailJS (Alternative to PHP)
// Use this if your hosting doesn't support PHP mail()
// Sign up at https://www.emailjs.com/ (free: 200 emails/month)

(function($) {
    "use strict";

    // Initialize EmailJS (replace with your Public Key)
    // Get your keys from: https://dashboard.emailjs.com/admin/integration
    emailjs.init("YOUR_PUBLIC_KEY_HERE");

    // Contact Form Submission
    $("#contact-form").submit(function(e) {
        e.preventDefault();
        
        var $form = $(this);
        var $submitBtn = $("#cf-submit");
        var $successMsg = $(".text-success");
        var $errorMsg = $(".text-danger");
        
        // Get form values
        var name = $("#cf-name").val().trim();
        var email = $("#cf-email").val().trim();
        var subject = $("#cf-subject").val().trim();
        var message = $("#cf-message").val().trim();
        
        // Hide previous messages
        $successMsg.hide();
        $errorMsg.hide();
        
        // Basic validation
        function isValidEmail(emailAddress) {
            var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return pattern.test(emailAddress);
        }
        
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
        
        // Disable submit button
        $submitBtn.prop('disabled', true).text('Sending...');
        
        // Prepare email template parameters
        var templateParams = {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message,
            to_email: "leratontsinyi11@gmail.com"
        };
        
        // Send email via EmailJS
        // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual IDs
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
            .then(function(response) {
                $successMsg.text("Thank you! Your message has been sent successfully.").fadeIn(1000);
                $errorMsg.fadeOut(500);
                $form[0].reset(); // Reset form
            }, function(error) {
                $errorMsg.text("Failed to send message. Please try again or contact us directly at leratontsinyi11@gmail.com").fadeIn(1000);
                $successMsg.fadeOut(500);
            })
            .finally(function() {
                // Re-enable submit button
                $submitBtn.prop('disabled', false).text('Send Message');
            });
        
        return false;
    });
    
})(jQuery);

