# Setting Up EmailJS for Contact Form

If your hosting doesn't support PHP mail(), use EmailJS instead. It's free for up to 200 emails per month.

## Step 1: Sign Up for EmailJS

1. Go to https://www.emailjs.com/
2. Click "Sign Up" (it's free)
3. Create an account with your email

## Step 2: Add Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (or your email provider)
4. Connect your Gmail account: `leratontsinyi11@gmail.com`
5. Click **Create Service**
6. **Copy your Service ID** (you'll need this)

## Step 3: Create Email Template

1. Go to **Email Templates** in dashboard
2. Click **Create New Template**
3. Set up your template:

**Template Name:** Cake Order Inquiry

**Subject:** New Cake Order: {{subject}}

**Content:**
```
You have received a new cake order inquiry from your website.

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---Reply to: {{reply_to}}This email was sent from The Cake Melts website contact form.
```

4. Click **Save**
5. **Copy your Template ID** (you'll need this)

## Step 4: Get Your Public Key

1. Go to **Account** > **General**
2. Find **Public Key**
3. **Copy your Public Key** (you'll need this)

## Step 5: Update Your Website

1. **Add EmailJS Script to index.html**

   Make sure these scripts are included before the closing `</body>` tag:
   ```html
   <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
   <script src="js/contact-form.js"></script>
   ```

2. **Configure the contact form data attributes**

   Open `index.html` and find the contact form tag with `id="contact-form"`.
   Set the EmailJS IDs directly in the form data attributes:
   ```html
   <form id="contact-form" 
         data-emailjs-service="service_YOUR_SERVICE_ID" 
         data-emailjs-template="template_YOUR_TEMPLATE_ID" 
         data-emailjs-public="YOUR_PUBLIC_KEY">
   ```

   Example:
   ```html
   <form id="contact-form" 
         data-emailjs-service="service_abcd123" 
         data-emailjs-template="template_xyza456" 
         data-emailjs-public="public_7890abcd">
   ```

3. **No additional JS file is required**

   The site already uses `js/contact-form.js` to submit the form through EmailJS.
   Do not replace it with `js/contact-form-emailjs.js` unless you intentionally switch to a different implementation.

## Step 6: Test

1. Upload your updated files to your hosting
2. Visit your website
3. Fill out the contact form
4. Submit it
5. Check your email: `leratontsinyi11@gmail.com`

## Troubleshooting

**Emails not sending?**
- Check that you've replaced all three IDs correctly
- Check EmailJS dashboard for error logs
- Make sure Gmail service is connected properly

**Getting errors?**
- Open browser console (F12) to see error messages
- Check EmailJS documentation: https://www.emailjs.com/docs/

## Free Plan Limits

- ✅ 200 emails per month (free)
- ✅ Unlimited email templates
- ✅ Gmail integration
- ✅ No credit card required

If you need more than 200 emails/month, consider upgrading or using the PHP solution on a host that supports it.

---

**That's it!** Your contact form will now send emails directly to your Gmail account. 🎉

