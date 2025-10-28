# Wedding Photos

## Instructions

Replace the placeholder images in this folder with your actual wedding photos:

### Required Images:
- **groom.jpg** - Photo of the groom (recommended: 800x800px, square)
- **bride.jpg** - Photo of the bride (recommended: 800x800px, square)

### Gallery Images:
The gallery is currently using placeholder images from Unsplash. To add your own photos:

1. Add your wedding photos to this folder
2. Open `js/gallery.js`
3. Replace the URLs in the `galleryImages` array with your own image paths:

```javascript
const galleryImages = [
    {
        url: 'assets/images/photo1.jpg',
        alt: 'Wedding Photo 1'
    },
    {
        url: 'assets/images/photo2.jpg',
        alt: 'Wedding Photo 2'
    },
    // Add more photos...
];
```

### Image Guidelines:
- **Format**: JPG or PNG
- **Size**: Optimize images for web (recommended: 1200px width for gallery photos)
- **File names**: Use simple names without spaces (e.g., `wedding-photo-1.jpg`)
- **Quantity**: Add as many gallery photos as you like (currently set for 20+)

### Optimization Tips:
- Use tools like TinyPNG or ImageOptim to compress images
- Keep file sizes under 500KB for fast loading
- Consider using WebP format for better compression (requires code update)
