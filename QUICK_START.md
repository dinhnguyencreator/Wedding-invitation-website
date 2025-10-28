# Quick Start Guide - Wedding Invitation Website

## 5-Minute Setup

### Step 1: Test Locally (Right Now!)
1. Open [index.html](index.html) in your browser
2. Your website is already working with sample data!

### Step 2: Customize Wedding Info (5 minutes)
Edit [index.html](index.html):

**Line 44-48**: Change couple names
```html
<span class="groom-name">Your Groom Name</span>
<span class="ampersand">&</span>
<span class="bride-name">Your Bride Name</span>
```

**Line 51**: Change wedding date
```html
<p>DD Tháng MM, YYYY</p>
```

**Line 256-260**: Change venue
```html
<p class="venue-name">Your Venue Name</p>
<p class="venue-address">Your Address</p>
```

### Step 3: Set Countdown Date (1 minute)
Edit [js/countdown.js](js/countdown.js) line 4:
```javascript
const weddingDate = new Date(YYYY, MM-1, DD, HH, MM, SS).getTime();
// Example for December 27, 2025 at 6:00 PM:
const weddingDate = new Date(2025, 11, 27, 18, 0, 0).getTime();
```

### Step 4: Add Your Photos (Later)
Replace files in [assets/images/](assets/images/):
- `groom.jpg` - Groom photo
- `bride.jpg` - Bride photo

For gallery, edit [js/gallery.js](js/gallery.js) and replace the Unsplash URLs with your photo paths.

### Step 5: Add Music (Later)
Download "I Do" by 911 (or your song) and save as `assets/music/i-do-911.mp3`

## Deploy to AWS (10 minutes)

### Option A: Windows
1. Install [AWS CLI](https://aws.amazon.com/cli/)
2. Run: `aws configure` (enter your AWS credentials)
3. Edit [aws-config/deploy.bat](aws-config/deploy.bat) - change `BUCKET_NAME`
4. Run: `deploy.bat`
5. Done! Your site is live!

### Option B: Mac/Linux
1. Install [AWS CLI](https://aws.amazon.com/cli/)
2. Run: `aws configure`
3. Edit [aws-config/deploy.sh](aws-config/deploy.sh) - change `BUCKET_NAME`
4. Run: `chmod +x aws-config/deploy.sh && ./aws-config/deploy.sh`
5. Done!

## Setup RSVP (Optional - 10 minutes)

### 1. Create Google Sheet
- Go to [sheets.google.com](https://sheets.google.com)
- New spreadsheet
- Add headers: `Timestamp | Name | Email | Phone | Attendance | Guest Count | Message`

### 2. Add Apps Script
- Extensions > Apps Script
- Paste the code from [readme.md](readme.md) section 4
- Deploy as Web App
- Copy the URL

### 3. Update Website
- Edit [js/rsvp.js](js/rsvp.js) line 48
- Paste your Apps Script URL
- Save and re-deploy

## That's It!

You now have a fully functional wedding website!

### What Works Right Now:
- Countdown timer
- Photo gallery (with sample photos)
- RSVP form (demo mode until you add Google Sheets)
- Background music (once you add the MP3 file)
- All animations and effects
- Fully responsive design

### Need Help?
Check the full [README.md](readme.md) for detailed instructions and troubleshooting.

---

**Chúc mừng! Your wedding website is ready!**
