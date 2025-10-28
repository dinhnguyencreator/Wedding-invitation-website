#!/bin/bash

# AWS S3 Deployment Script for Wedding Invitation Website
# Make sure you have AWS CLI installed and configured

# Configuration
BUCKET_NAME="your-wedding-bucket-name"
REGION="us-east-1"
PROFILE="default"  # Change if you use a different AWS profile

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}==================================${NC}"
echo -e "${BLUE}Wedding Website Deployment Script${NC}"
echo -e "${BLUE}==================================${NC}"
echo ""

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo -e "${RED}Error: AWS CLI is not installed.${NC}"
    echo "Please install it from: https://aws.amazon.com/cli/"
    exit 1
fi

# Check if bucket name is set
if [ "$BUCKET_NAME" == "your-wedding-bucket-name" ]; then
    echo -e "${RED}Error: Please set your bucket name in this script.${NC}"
    echo "Edit the BUCKET_NAME variable at the top of this file."
    exit 1
fi

echo -e "${GREEN}Step 1: Creating S3 bucket...${NC}"
aws s3 mb s3://${BUCKET_NAME} --region ${REGION} --profile ${PROFILE} 2>/dev/null || echo "Bucket already exists or error occurred"

echo -e "${GREEN}Step 2: Enabling static website hosting...${NC}"
aws s3 website s3://${BUCKET_NAME} \
    --index-document index.html \
    --error-document index.html \
    --profile ${PROFILE}

echo -e "${GREEN}Step 3: Setting bucket policy for public access...${NC}"
# First, allow public access
aws s3api put-public-access-block \
    --bucket ${BUCKET_NAME} \
    --public-access-block-configuration "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false" \
    --profile ${PROFILE}

# Apply bucket policy
cat > /tmp/bucket-policy.json << EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::${BUCKET_NAME}/*"
    }
  ]
}
EOF

aws s3api put-bucket-policy \
    --bucket ${BUCKET_NAME} \
    --policy file:///tmp/bucket-policy.json \
    --profile ${PROFILE}

echo -e "${GREEN}Step 4: Uploading website files...${NC}"
# Upload all files with appropriate content types and cache settings
aws s3 sync . s3://${BUCKET_NAME} \
    --exclude "*.sh" \
    --exclude ".git/*" \
    --exclude "node_modules/*" \
    --exclude "aws-config/*" \
    --exclude "README.md" \
    --cache-control "public, max-age=31536000" \
    --profile ${PROFILE}

# Upload HTML with shorter cache
aws s3 sync . s3://${BUCKET_NAME} \
    --exclude "*" \
    --include "*.html" \
    --cache-control "public, max-age=3600" \
    --content-type "text/html" \
    --profile ${PROFILE}

# Upload CSS
aws s3 sync ./css s3://${BUCKET_NAME}/css \
    --cache-control "public, max-age=31536000" \
    --content-type "text/css" \
    --profile ${PROFILE}

# Upload JS
aws s3 sync ./js s3://${BUCKET_NAME}/js \
    --cache-control "public, max-age=31536000" \
    --content-type "application/javascript" \
    --profile ${PROFILE}

# Upload images
aws s3 sync ./assets s3://${BUCKET_NAME}/assets \
    --cache-control "public, max-age=31536000" \
    --profile ${PROFILE}

echo ""
echo -e "${GREEN}==================================${NC}"
echo -e "${GREEN}Deployment Complete!${NC}"
echo -e "${GREEN}==================================${NC}"
echo ""
echo -e "Your website is now live at:"
echo -e "${BLUE}http://${BUCKET_NAME}.s3-website-${REGION}.amazonaws.com${NC}"
echo ""
echo -e "Next steps:"
echo -e "1. Test your website using the URL above"
echo -e "2. (Optional) Set up CloudFront for HTTPS and better performance"
echo -e "3. (Optional) Configure a custom domain"
echo ""
