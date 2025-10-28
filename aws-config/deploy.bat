@echo off
REM AWS S3 Deployment Script for Wedding Invitation Website (Windows)
REM Make sure you have AWS CLI installed and configured

REM Configuration
SET BUCKET_NAME=your-wedding-bucket-name
SET REGION=us-east-1
SET PROFILE=default

echo ==================================
echo Wedding Website Deployment Script
echo ==================================
echo.

REM Check if AWS CLI is installed
where aws >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo Error: AWS CLI is not installed.
    echo Please install it from: https://aws.amazon.com/cli/
    exit /b 1
)

REM Check if bucket name is set
if "%BUCKET_NAME%"=="your-wedding-bucket-name" (
    echo Error: Please set your bucket name in this script.
    echo Edit the BUCKET_NAME variable at the top of this file.
    exit /b 1
)

echo Step 1: Creating S3 bucket...
aws s3 mb s3://%BUCKET_NAME% --region %REGION% --profile %PROFILE% 2>nul

echo Step 2: Enabling static website hosting...
aws s3 website s3://%BUCKET_NAME% --index-document index.html --error-document index.html --profile %PROFILE%

echo Step 3: Setting bucket policy for public access...
REM Allow public access
aws s3api put-public-access-block --bucket %BUCKET_NAME% --public-access-block-configuration "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false" --profile %PROFILE%

REM Create temporary bucket policy file
echo { > bucket-policy-temp.json
echo   "Version": "2012-10-17", >> bucket-policy-temp.json
echo   "Statement": [ >> bucket-policy-temp.json
echo     { >> bucket-policy-temp.json
echo       "Sid": "PublicReadGetObject", >> bucket-policy-temp.json
echo       "Effect": "Allow", >> bucket-policy-temp.json
echo       "Principal": "*", >> bucket-policy-temp.json
echo       "Action": "s3:GetObject", >> bucket-policy-temp.json
echo       "Resource": "arn:aws:s3:::%BUCKET_NAME%/*" >> bucket-policy-temp.json
echo     } >> bucket-policy-temp.json
echo   ] >> bucket-policy-temp.json
echo } >> bucket-policy-temp.json

aws s3api put-bucket-policy --bucket %BUCKET_NAME% --policy file://bucket-policy-temp.json --profile %PROFILE%
del bucket-policy-temp.json

echo Step 4: Uploading website files...
cd ..
aws s3 sync . s3://%BUCKET_NAME% --exclude "*.bat" --exclude "*.sh" --exclude ".git/*" --exclude "node_modules/*" --exclude "aws-config/*" --profile %PROFILE%

echo.
echo ==================================
echo Deployment Complete!
echo ==================================
echo.
echo Your website is now live at:
echo http://%BUCKET_NAME%.s3-website-%REGION%.amazonaws.com
echo.
echo Next steps:
echo 1. Test your website using the URL above
echo 2. (Optional) Set up CloudFront for HTTPS and better performance
echo 3. (Optional) Configure a custom domain
echo.

pause
