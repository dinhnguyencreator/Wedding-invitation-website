# QR Code Setup for Bank Transfer

## How to Create QR Codes

### Method 1: Using Bank Apps (Recommended)
1. Open your banking app (Vietcombank, VietinBank, etc.)
2. Go to "Receive Money" or "QR Payment" section
3. Generate a QR code for your account
4. Take a screenshot or download the QR code
5. Save as `qr-groom.png` and `qr-bride.png`

### Method 2: Online QR Code Generators

**Vietnamese Bank QR Generators:**
- **VietQR**: https://www.vietqr.io/
- **QR Pay**: Use your bank's official QR generator

**Steps:**
1. Visit your bank's QR code generator or VietQR
2. Enter bank information:
   - Bank name
   - Account number
   - Account holder name
   - Amount (optional - leave blank for custom amounts)
   - Message (optional)
3. Generate QR code
4. Download the image
5. Save as:
   - `qr-groom.png` - For groom's account
   - `qr-bride.png` - For bride's account

### Method 3: Create QR Code with API

If you're technical, you can use VietQR API:

```
https://img.vietqr.io/image/[BANK_CODE]-[ACCOUNT_NUMBER]-[TEMPLATE].png?amount=[AMOUNT]&addInfo=[MESSAGE]
```

Example:
```
https://img.vietqr.io/image/VCB-0123456789-compact.png?addInfo=Mung cuoi Duc Khanh va Hai Ngoc
```

**Bank Codes:**
- Vietcombank: VCB
- VietinBank: ICB
- BIDV: BIDV
- Techcombank: TCB
- MB Bank: MB
- ACB: ACB
- Agribank: AGR
- See full list at: https://api.vietqr.io/v2/banks

## File Requirements

**File Names:**
- `qr-groom.png` - Groom's QR code
- `qr-bride.png` - Bride's QR code

**Image Specifications:**
- Format: PNG or JPG
- Size: 200x200px to 500x500px (will be displayed at 200x200px)
- Quality: High resolution for clear scanning
- Background: White or transparent

## Update Bank Information

Don't forget to update the bank details in [index.html](../../index.html):

**For Groom (Line 292-295):**
```html
<p class="bank-name">Ngân hàng: <strong>Your Bank</strong></p>
<p class="bank-account"><strong>Your Account Number</strong></p>
<p class="bank-owner"><strong>YOUR NAME IN CAPS</strong></p>
```

**For Bride (Line 312-315):**
```html
<p class="bank-name">Ngân hàng: <strong>Your Bank</strong></p>
<p class="bank-account"><strong>Your Account Number</strong></p>
<p class="bank-owner"><strong>YOUR NAME IN CAPS</strong></p>
```

## Testing

After adding your QR codes:
1. Open the website
2. Scroll to "Hộp Mừng Cưới" section
3. Test scanning with your banking app
4. Verify account details are correct
5. Test the "Sao chép STK" button

## Placeholder QR Codes

Until you add your real QR codes, placeholder images will be shown. Replace them with your actual QR codes before deploying!

## Security Note

- ✅ QR codes are safe to share publicly
- ✅ They only contain: Bank, Account Number, Account Name
- ✅ No one can withdraw money with just a QR code
- ⚠️ Do not share OTP codes or passwords
- ⚠️ Verify the QR codes work before going live
