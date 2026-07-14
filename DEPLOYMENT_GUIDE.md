# The Cake Melts - Free Deployment Guide

This guide will help you deploy your website for free using various hosting options.

## 📋 Table of Contents
1. [Free Hosting Options](#free-hosting-options)
2. [Option 1: InfinityFree (Recommended for PHP)](#option-1-infinityfree-recommended-for-php)
3. [Option 2: 000webhost](#option-2-000webhost)
4. [Option 3: Netlify (Static Hosting)](#option-3-netlify-static-hosting)
5. [Option 4: GitHub Pages + Formspree](#option-4-github-pages--formspree)
6. [Option 5: Vercel](#option-5-vercel)
7. [Email Configuration](#email-configuration)
8. [Troubleshooting](#troubleshooting)
9. [Security Hardening (No/Low Cost)](#security-hardening-nolow-cost)

---

## Free Hosting Options

### Quick Comparison

| Hosting Service | PHP Support | Free Domain | Storage | Bandwidth | Best For |
|----------------|-------------|-------------|---------|-----------|----------|
| **InfinityFree** | ✅ Yes | ✅ Yes | Unlimited | Unlimited | PHP websites |
| **000webhost** | ✅ Yes | ❌ No | 300 MB | 3 GB | PHP websites |
| **Netlify** | ❌ No | ✅ Yes | 100 GB | 100 GB | Static sites |
| **GitHub Pages** | ❌ No | ✅ Yes | 1 GB | 100 GB | Static sites |
| **Vercel** | ❌ No | ✅ Yes | 100 GB | 100 GB | Static sites |

---

## Option 1: InfinityFree (Recommended for PHP)

**Best for:** Full PHP support with contact form functionality

### Steps:

1. **Sign Up**
   - Go to https://www.infinityfree.net/
   - Click "Sign Up" (free)
   - Create an account

2. **Create Website**
   - Log in to your account
   - Click "Create Account" in the control panel
   - Choose a subdomain (e.g., `thecakemelts.infinityfreeapp.com`)
   - Or use your own domain if you have one

3. **Upload Files**
   - Use the File Manager in the control panel
   - Or use FTP:
     - **FTP Host:** `ftpupload.net`
     - **FTP Username:** (provided in control panel)
     - **FTP Password:** (provided in control panel)
     - **Port:** 21
   - Upload all your website files to the `htdocs` folder

4. **File Structure:**
   ```
   htdocs/
   ├── index.html
   ├── css/
   ├── js/
   ├── images/
   ├── cake images/
   └── php/
       └── contact.php
   ```

5. **Test Your Website**
   - Visit your subdomain
   - Test the contact form

**Pros:**
- ✅ Free PHP hosting
- ✅ Free subdomain
- ✅ Unlimited storage & bandwidth
- ✅ No ads (on free plan)
- ✅ Email support

**Cons:**
- ⚠️ Subdomain only (unless you use your own domain)
- ⚠️ May have some limitations on free plan

---

## Option 2: 000webhost

**Best for:** PHP hosting with good performance

### Steps:

1. **Sign Up**
   - Go to https://www.000webhost.com/
   - Click "Get Started Free"
   - Create an account

2. **Create Website**
   - Choose a subdomain name
   - Wait for account activation (may take a few minutes)

3. **Upload Files**
   - Use the File Manager
   - Or use FTP:
     - **FTP Host:** `files.000webhost.com`
     - **FTP Username:** (provided in control panel)
     - **FTP Password:** (provided in control panel)
   - Upload all files to `public_html` folder

4. **Test Your Website**
   - Visit your subdomain
   - Test the contact form

**Pros:**
- ✅ Free PHP hosting
- ✅ Good performance
- ✅ Easy to use

**Cons:**
- ⚠️ Limited storage (300 MB)
- ⚠️ Limited bandwidth (3 GB)
- ⚠️ No free domain (subdomain only)

---

## Option 3: Netlify (Static Hosting)

**Best for:** Fast static hosting (requires form service)

### Steps:

1. **Sign Up**
   - Go to https://www.netlify.com/
   - Sign up with GitHub, GitLab, or email

2. **Prepare Your Site**
   - Since Netlify doesn't support PHP, you'll need to use a form service
   - Option A: Use Formspree (see Option 4)
   - Option B: Use Netlify Forms (add `netlify` attribute to form)

3. **Deploy**
   - Drag and drop your website folder to Netlify
   - Or connect to GitHub for automatic deployments

4. **Update Contact Form**
   - If using Netlify Forms, add `netlify` attribute:
   ```html
   <form action="#" method="post" netlify>
   ```
   - Configure form notifications in Netlify dashboard

**Pros:**
- ✅ Very fast
- ✅ Free SSL certificate
- ✅ Custom domain support
- ✅ Easy deployment

**Cons:**
- ❌ No PHP support
- ⚠️ Need alternative for contact form

---

## Option 4: GitHub Pages + Formspree

**Best for:** Developers comfortable with Git

### Steps:

1. **Create GitHub Account**
   - Go to https://github.com/
   - Sign up for free account

2. **Create Repository**
   - Click "New Repository"
   - Name it (e.g., `thecakemelts-website`)
   - Make it public
   - Initialize with README

3. **Upload Files**
   - Upload all your website files
   - Commit and push

4. **Enable GitHub Pages**
   - Go to Settings > Pages
   - Select main branch
   - Your site will be at: `username.github.io/repository-name`

5. **Set Up Formspree for Contact Form**
   - Go to https://formspree.io/
   - Sign up (free plan available)
   - Create a new form
   - Get your form endpoint URL
   - Update your HTML form:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="post">
   ```

**Pros:**
- ✅ Free hosting
- ✅ Free SSL
- ✅ Version control
- ✅ Easy updates

**Cons:**
- ❌ No PHP support
- ⚠️ Need Formspree for contact form (free tier limited)

---

## Option 5: Vercel

**Best for:** Modern static sites

### Steps:

1. **Sign Up**
   - Go to https://vercel.com/
   - Sign up with GitHub

2. **Deploy**
   - Import your GitHub repository
   - Or drag and drop your folder
   - Vercel will auto-deploy

3. **Configure Contact Form**
   - Use Formspree or similar service
   - Update form action in HTML

**Pros:**
- ✅ Very fast
- ✅ Free SSL
- ✅ Automatic deployments
- ✅ Great performance

**Cons:**
- ❌ No PHP support
- ⚠️ Need alternative for contact form

---

## Email Configuration

### Important Notes About Email:

1. **PHP mail() Function:**
   - Many free hosts disable PHP's `mail()` function
   - You may need to use SMTP instead

2. **Alternative: Use Email Service**
   - **Formspree:** https://formspree.io/ (Free: 50 submissions/month)
   - **EmailJS:** https://www.emailjs.com/ (Free: 200 emails/month)
   - **SendGrid:** https://sendgrid.com/ (Free: 100 emails/day)

### Using EmailJS (Recommended Free Alternative):

1. **Sign Up**
   - Go to https://www.emailjs.com/
   - Create free account

2. **Set Up Email Service**
   - Add your Gmail account
   - Create email template

3. **Get Service ID**
   - Copy your Service ID, Template ID, and Public Key

4. **Update Your Form**
   - Add EmailJS script to your HTML:
   ```html
   <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
   <script src="js/contact-form.js"></script>
   ```
   - Configure the form using data attributes instead of hardcoding secrets.
   - Set `data-emailjs-service`, `data-emailjs-template`, and `data-emailjs-public` on the form.

### Using Formspree (Easiest):

1. **Sign Up**
   - Go to https://formspree.io/
   - Create free account

2. **Create Form**
   - Get your form endpoint
   - Update HTML:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="post">
   ```

---

## Recommended Setup for Your Budget

### Best Free Solution:

**InfinityFree + EmailJS**

1. Host on InfinityFree (free PHP hosting)
2. Use EmailJS for contact form (free, 200 emails/month)
3. This gives you:
   - ✅ Full website functionality
   - ✅ Working contact form
   - ✅ Free hosting
   - ✅ Free subdomain
   - ✅ No monthly costs

### Steps:

1. **Deploy to InfinityFree** (follow Option 1)
2. **Set Up EmailJS:**
   - Sign up at https://www.emailjs.com/
   - Add Gmail service
   - Create template with your email: `leratontsinyi11@gmail.com`
   - Get your Service ID, Template ID, and Public Key
3. **Update contact-form.js:**
   - Replace PHP submission with EmailJS
   - Add EmailJS script to HTML

### Step-by-step: Wire EmailJS on InfinityFree (no PHP mail)
1) In EmailJS:
   - Create a Service (e.g., Gmail) -> copy **Service ID**
   - Create a Template with fields: `from_name`, `from_email`, `reply_to`, `subject`, `message`
   - Copy **Template ID** and **Public Key**
2) In `index.html`:
   - Find the contact form tag (`id="contact-form"`) and set:
     - `data-emailjs-service="service_YOUR_SERVICE_ID"`
     - `data-emailjs-template="template_YOUR_TEMPLATE_ID"`
     - `data-emailjs-public="YOUR_PUBLIC_KEY"`
3) Deploy/upload:
   - Upload updated site to InfinityFree `htdocs/`
   - Ensure `https://` is enabled in the host control panel
4) Test:
   - Submit a real test order
   - Check owner inbox (including spam)
   - If blocked, re-check IDs and that EmailJS is on the free tier limits

---

## One-Step Guide: InfinityFree + EmailJS (no cost)

1) Create free InfinityFree account and site
   - Sign up at https://www.infinityfree.net/ and create a site (subdomain is fine).
   - In the control panel, enable free SSL and force HTTPS.
2) Prepare EmailJS
   - Sign up at https://www.emailjs.com/.
   - Create an Email Service (e.g., Gmail) -> note **Service ID**.
   - Create a Template with these fields: `from_name`, `reply_to`, `subject`, `message` -> note **Template ID**.
   - Copy your **Public Key**.
3) Configure the site locally
   - Open `index.html` and find the contact form (`id="contact-form"`).
   - Set:
     - `data-emailjs-service="YOUR_SERVICE_ID"`
     - `data-emailjs-template="YOUR_TEMPLATE_ID"`
     - `data-emailjs-public="YOUR_PUBLIC_KEY"`
   - Save. Do not hardcode secrets anywhere else.
4) Upload to InfinityFree
   - In the control panel File Manager, open `htdocs/`.
   - Upload the site files (including updated `index.html` and `js/contact-form.js`).
5) Test the order form
   - Visit your InfinityFree URL over HTTPS.
   - Submit a real test order.
   - Check the owner inbox (and spam). If you don’t get it, recheck the IDs and that EmailJS free tier isn’t exhausted.
6) Keep it safe on free tier
   - Leave the honeypot field in the form (already present).
   - Avoid adding source maps to production uploads.
   - Re-test after each content change; keep a zip of last known-good as rollback.

---

## Security Hardening (No/Low Cost)

Keep the existing blueprint; use this checklist to reduce risk without new spend. Prioritize items marked ✅ first.

### Before Deploy
- ✅ Secrets: Do not commit API keys/passwords; store in host dashboard env vars. Rotate any key that has ever been public.
- ✅ Dependencies: Remove unused packages; update to latest stable; run a free vulnerability scan (e.g., `npm audit`/`yarn audit`) locally before uploads.
- ✅ Build artifacts: Do not upload source maps to free hosts unless needed for debugging; if uploaded, remove them after testing.

### App Basics
- ✅ HTTPS: Enable free SSL on the host; force HTTPS redirects.
- ✅ Cookies/sessions: Use `Secure`, `HttpOnly`, and `SameSite=Lax` for any cookies. Keep session/JWT lifetime short (e.g., 1 day).
- ✅ Input handling: Validate and sanitize form input server-side; always use parameterized queries (if you add a DB later) to avoid SQL injection.
- ✅ Output encoding: Escape any user-provided content before rendering to prevent XSS.
- ✅ Error handling: Show generic error pages to users; never expose stack traces or secrets.

### Contact/Form Safety
- ✅ Rate-limit form submissions if the host offers it; otherwise add a simple honeypot field and basic throttling in code.
- ✅ File uploads (if added later): Enforce size limits, allowlisted extensions, and MIME checks; store outside webroot or in object storage.

### Headers (set via .htaccess or host controls)
- ✅ `Content-Security-Policy`: start simple, e.g. `default-src 'self'; connect-src 'self' https://api.emailjs.com; frame-ancestors 'none'; upgrade-insecure-requests;`
- ✅ `X-Frame-Options: DENY`
- ✅ `X-Content-Type-Options: nosniff`
- ✅ `Referrer-Policy: strict-origin-when-cross-origin`
- ✅ `Strict-Transport-Security: max-age=31536000; includeSubDomains` (only after HTTPS works everywhere).

### Access & Admin
- ✅ Use strong passwords and enable MFA on hosting dashboards (InfinityFree, 000webhost, GitHub, Netlify, Vercel).
- ✅ Keep a separate “owner” account with MFA; avoid sharing credentials—use team access if available.
- ✅ Remove default/demo accounts if any sample apps are deployed.

### Monitoring & Backups
- ✅ Turn on host-provided logs; review for auth errors or spam bursts.
- ✅ Keep local backups of site assets and a copy of the current upload; test that you can re-upload quickly.

### When Updating
- ✅ Test in a staging subdomain if possible; otherwise test locally before upload.
- ✅ Re-scan dependencies; re-check CSP if you add third-party scripts.
- ✅ Have a rollback plan: keep the last known-good zip of the site ready to re-upload.

### Quick Safety Audit After Deployment
- Load the site over HTTPS and confirm the lock icon.
- Submit the contact form with test data; verify success path and spam defenses.
- View source: confirm no secrets or API keys are exposed.
- Check response headers (browser devtools > Network) for CSP, HSTS, X-Frame-Options, nosniff.
- Run a free external scan (e.g., Mozilla Observatory) to spot header gaps.

---

## Troubleshooting

### Contact Form Not Working:

1. **Check PHP Support:**
   - Ensure your host supports PHP
   - Check PHP version (need PHP 5.6+)

2. **Check File Permissions:**
   - PHP files should be readable (644)
   - Folders should be executable (755)

3. **Test PHP:**
   - Create `test.php` with: `<?php phpinfo(); ?>`
   - Visit it in browser to see PHP info

4. **Check Error Logs:**
   - Check host's error log
   - Look for PHP errors

### Images Not Loading:

1. **Check File Paths:**
   - Ensure paths are correct
   - Use relative paths: `cake images/image.jpg`

2. **Check File Names:**
   - Ensure case matches (Linux servers are case-sensitive)
   - Check for spaces in filenames

### SSL Certificate:

- Most free hosts provide free SSL
- Enable it in your hosting control panel
- May take a few hours to activate

---

## Additional Resources

- **InfinityFree Help:** https://forum.infinityfree.net/
- **000webhost Support:** https://www.000webhost.com/forum
- **EmailJS Docs:** https://www.emailjs.com/docs/
- **Formspree Docs:** https://help.formspree.io/

---

## Next Steps After Deployment

1. **Test Everything:**
   - Test contact form
   - Check all images load
   - Test on mobile devices
   - Test all links

2. **Get a Custom Domain (Optional):**
   - Buy domain from Namecheap, GoDaddy, etc. ($10-15/year)
   - Point it to your hosting

3. **Set Up Google Analytics (Free):**
   - Track website visitors
   - Get insights on your audience

4. **Submit to Google Search:**
   - Submit sitemap to Google Search Console
   - Help Google index your site

---

## Support

If you need help with deployment, check:
- Hosting provider's documentation
- Their support forums
- Contact their support team

**Good luck with your website! 🎂**

