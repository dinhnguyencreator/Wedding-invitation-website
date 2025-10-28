# Wedding Invitation Website

A beautiful, responsive wedding invitation website built with HTML, CSS, and JavaScript. Designed in Vietnamese with elegant animations and interactive features.

![Wedding Website Preview](https://img.shields.io/badge/Status-Ready%20to%20Deploy-success)

## Features

- **Hero Section** - Beautiful landing page with couple names and wedding date
- **Countdown Timer** - Real-time countdown to the wedding day
- **Couple Profiles** - Bride and groom information with photos
- **Love Story Timeline** - Your journey together displayed beautifully
- **Photo Gallery** - Interactive gallery with lightbox viewer (20+ photos)
- **RSVP Form** - Guest confirmation with Google Sheets integration
- **Venue Information** - Location details with Google Maps integration
- **Background Music** - "I Do" by 911 with play/pause controls
- **Fully Responsive** - Works perfectly on all devices
- **Smooth Animations** - Elegant scroll animations and transitions
- **SEO Optimized** - Proper meta tags and structured data

## Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Fonts**: Google Fonts (Playfair Display, Open Sans, Great Vibes)
- **Icons**: Font Awesome 6.4.0
- **Images**: Unsplash placeholders (replace with your own)
- **Hosting**: AWS S3 + CloudFront (optional)
- **RSVP Backend**: Google Sheets via Apps Script

## Project Structure

```
wedding-invitation-website/
├── index.html              # Main HTML file
├── css/
│   ├── style.css          # Main styles
│   └── animations.css     # Animation effects
├── js/
│   ├── main.js           # Core functionality
│   ├── countdown.js      # Countdown timer
│   ├── gallery.js        # Photo gallery
│   ├── rsvp.js          # RSVP form handler
│   └── music.js         # Background music player
├── assets/
│   ├── images/          # Wedding photos
│   ├── music/           # Background music
│   └── icons/           # SVG icons
├── aws-config/
│   ├── s3-bucket-policy.json
│   ├── cloudfront-config.json
│   ├── deploy.sh        # Linux/Mac deployment
│   └── deploy.bat       # Windows deployment
└── README.md
```

## Quick Start

### 1. Customize Your Content

#### Update Wedding Details
Edit [index.html](index.html) and change:
- Couple names (line 44-48)
- Wedding date (line 51)
- Venue information (lines 245-260)
- Parent names (lines 73-85)

#### Set Wedding Date for Countdown
Edit [js/countdown.js](js/countdown.js) (line 4):
```javascript
const weddingDate = new Date(2025, 11, 27, 18, 0, 0).getTime();
// Format: (YYYY, MM-1, DD, HH, MM, SS)
// Note: Month is 0-indexed (0 = January, 11 = December)
```

### 2. Add Your Photos

#### Couple Photos
Replace these files in `assets/images/`:
- `groom.jpg` - Photo of groom (recommended: 800x800px)
- `bride.jpg` - Photo of bride (recommended: 800x800px)

#### Gallery Photos
Edit [js/gallery.js](js/gallery.js) to add your wedding photos:
```javascript
const galleryImages = [
    {
        url: 'assets/images/your-photo-1.jpg',
        alt: 'Wedding Photo 1'
    },
    // Add more photos...
];
```

### 3. Add Background Music

1. Download "I Do" by 911 (or your chosen song) in MP3 format
2. Place it in `assets/music/` folder
3. Name it `i-do-911.mp3`

### 4. Set Up Google Sheets for RSVP

#### Step 1: Create Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Add these column headers in row 1:
   ```
   Timestamp | Name | Email | Phone | Attendance | Guest Count | Message
   ```

#### Step 2: Deploy Apps Script
1. In your sheet, go to **Extensions > Apps Script**
2. Delete any existing code
3. Paste this code:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      new Date(),
      data.name,
      data.email,
      data.phone,
      data.attendance,
      data.guestCount,
      data.message
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success', message: 'Cảm ơn bạn đã xác nhận!' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click **Deploy > New Deployment**
5. Select type: **Web app**
6. Configure:
   - Execute as: **Me**
   - Who has access: **Anyone**
7. Click **Deploy**
8. Copy the **Web App URL**

#### Step 3: Update Website
Edit [js/rsvp.js](js/rsvp.js) (line 48):
```javascript
const GOOGLE_SCRIPT_URL = 'YOUR_WEB_APP_URL_HERE';
```

### 5. Test Locally

Simply open [index.html](index.html) in your web browser to test locally!

## AWS Deployment (Free Tier)

### Prerequisites
- AWS Account (Free Tier eligible)
- AWS CLI installed and configured
- Basic knowledge of AWS S3

### Option 1: Automatic Deployment (Recommended)

#### For Windows:
1. Open [aws-config/deploy.bat](aws-config/deploy.bat)
2. Change `BUCKET_NAME` to your desired bucket name
3. Run the script:
   ```cmd
   cd aws-config
   deploy.bat
   ```

#### For Linux/Mac:
1. Make script executable:
   ```bash
   chmod +x aws-config/deploy.sh
   ```
2. Edit [aws-config/deploy.sh](aws-config/deploy.sh) and change `BUCKET_NAME`
3. Run the script:
   ```bash
   ./aws-config/deploy.sh
   ```

### Option 2: Manual Deployment

#### Step 1: Create S3 Bucket
```bash
aws s3 mb s3://your-wedding-bucket-name --region us-east-1
```

#### Step 2: Enable Static Website Hosting
```bash
aws s3 website s3://your-wedding-bucket-name \
  --index-document index.html \
  --error-document index.html
```

#### Step 3: Set Bucket Policy
```bash
aws s3api put-bucket-policy \
  --bucket your-wedding-bucket-name \
  --policy file://aws-config/s3-bucket-policy.json
```

#### Step 4: Upload Files
```bash
aws s3 sync . s3://your-wedding-bucket-name \
  --exclude ".git/*" \
  --exclude "aws-config/*" \
  --exclude "*.md"
```

#### Step 5: Access Your Website
Your website will be available at:
```
http://your-wedding-bucket-name.s3-website-us-east-1.amazonaws.com
```

### Optional: Add CloudFront (HTTPS + CDN)

1. Go to AWS CloudFront Console
2. Create a new distribution
3. Set origin to your S3 bucket website endpoint
4. Enable "Redirect HTTP to HTTPS"
5. Set default root object: `index.html`
6. Create distribution and wait 15-20 minutes
7. Access via CloudFront domain (HTTPS enabled!)

### Optional: Custom Domain

1. Register domain (Route 53, GoDaddy, Namecheap, etc.)
2. In CloudFront, add your domain as an Alternate Domain Name (CNAME)
3. Request SSL certificate via AWS Certificate Manager
4. Update DNS records to point to CloudFront distribution
5. Access via your custom domain!

## Customization Guide

### Colors
Edit CSS variables in [css/style.css](css/style.css) (lines 6-14):
```css
:root {
    --primary-cream: #f9f7f4;
    --primary-beige: #e8dfd3;
    --accent-pink: #df9fa0;
    --accent-gold: #9a7949;
    /* Customize these colors */
}
```

### Fonts
Change fonts in [css/style.css](css/style.css) (lines 16-18):
```css
:root {
    --font-heading: 'Playfair Display', serif;
    --font-script: 'Great Vibes', cursive;
    --font-body: 'Open Sans', sans-serif;
}
```

Update Google Fonts link in [index.html](index.html) (line 10) if changing fonts.

### Animations
- Edit [css/animations.css](css/animations.css) to modify animation effects
- Adjust animation duration and delays
- Enable/disable animations in [js/main.js](js/main.js)

### Additional Sections
Add more sections by:
1. Adding HTML in [index.html](index.html)
2. Adding styles in [css/style.css](css/style.css)
3. Adding JavaScript functionality if needed

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimization

- Images are lazy-loaded
- CSS and JS are minified (recommended for production)
- CloudFront CDN for global delivery
- Optimized image formats (use WebP when possible)
- Gzip compression enabled

## Troubleshooting

### Music Doesn't Auto-Play
- Modern browsers block auto-play with sound
- Users need to interact with the page first
- Click the music button to start playing

### RSVP Form Not Working
- Check if Google Apps Script URL is correctly set
- Verify Apps Script is deployed as "Anyone" can access
- Check browser console for errors

### Images Not Loading
- Verify image paths are correct
- Check file names match code references
- Ensure images are in correct folders

### AWS Deployment Issues
- Verify AWS CLI is installed and configured
- Check bucket name is unique globally
- Ensure proper IAM permissions
- Verify bucket policy is applied correctly

## Cost Estimate (AWS Free Tier)

- **S3 Storage**: 5 GB free (your site is ~50MB)
- **S3 Requests**: 20,000 GET requests free per month
- **CloudFront**: 50 GB transfer free per month
- **Estimated cost**: $0/month for typical wedding site traffic!

## Maintenance

### After the Wedding
- Update countdown to show "Just Married!"
- Add wedding day photos to gallery
- Keep site live as a memory
- Or archive to a subdomain

## Support & Credits

### Resources
- [AWS S3 Static Website Hosting](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html)
- [Google Apps Script Documentation](https://developers.google.com/apps-script)
- [Font Awesome Icons](https://fontawesome.com/)

### Inspiration
Design inspired by modern wedding invitation websites with Vietnamese aesthetics.

### Photos
Gallery uses Unsplash placeholder images. Replace with your own photos!

## License

This project is open source and available for personal use. Feel free to customize for your wedding!

---

**Made with love for Đức Khánh & Hải Ngọc**

*Chúc mừng hạnh phúc!*
