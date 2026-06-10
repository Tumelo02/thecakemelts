<?php
// Contact Form Handler for The Cake Melts
// Email: leratontsinyi11@gmail.com

// Prevent direct access
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: ../index.html');
    exit;
}

// Get form data
$name = isset($_POST['name']) ? trim($_POST['name']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$subject = isset($_POST['subject']) ? trim($_POST['subject']) : '';
$message = isset($_POST['message']) ? trim($_POST['message']) : '';

// Validation
$errors = [];

if (empty($name)) {
    $errors[] = 'Name is required';
}

if (empty($email)) {
    $errors[] = 'Email is required';
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Invalid email format';
}

if (empty($subject)) {
    $errors[] = 'Subject is required';
}

if (empty($message)) {
    $errors[] = 'Message is required';
} elseif (strlen($message) < 10) {
    $errors[] = 'Message must be at least 10 characters';
}

// Prevent header injection
$test = "/(content-type|bcc:|cc:|to:|mime-version|content-transfer-encoding)/i";
foreach ($_POST as $key => $val) {
    if (preg_match($test, $val)) {
        $errors[] = 'Invalid input detected';
        break;
    }
}

// If there are errors, return JSON error
if (!empty($errors)) {
    header('Content-Type: application/json');
    echo json_encode(['success' => false, 'errors' => $errors]);
    exit;
}

// Prepare email
$to = 'leratontsinyi11@gmail.com';
$email_subject = 'New Cake Order Inquiry: ' . $subject;
$email_body = "You have received a new cake order inquiry from your website.\n\n";
$email_body .= "Name: " . $name . "\n";
$email_body .= "Email: " . $email . "\n";
$email_body .= "Subject: " . $subject . "\n\n";
$email_body .= "Message:\n" . $message . "\n";

$headers = "From: " . $name . " <" . $email . ">\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Send email
$mail_sent = @mail($to, $email_subject, $email_body, $headers);

if ($mail_sent) {
    header('Content-Type: application/json');
    echo json_encode(['success' => true, 'message' => 'Thank you! Your message has been sent successfully.']);
} else {
    header('Content-Type: application/json');
    echo json_encode(['success' => false, 'errors' => ['Failed to send email. Please try again or contact us directly.']]);
}
?>
