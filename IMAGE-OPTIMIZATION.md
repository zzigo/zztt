# Image Optimization Guide for Astro

## Current Issue
Images are not being optimized and are too large for mobile devices. Astro can automatically optimize images similar to WordPress.

## Solution: Use Astro's Built-in Image Component

### 1. How to Use Optimized Images

Instead of using regular `<img>` tags or markdown images, use Astro's `<Image>` component:

```astro
---
import { Image } from 'astro:assets';
import myImage from '../assets/my-image.jpg';
---

<!-- Optimized image with automatic responsive sizing -->
<Image src={myImage} alt="Description" />

<!-- Or from external URLs -->
<Image src="https://example.com/image.jpg" alt="Description" width={800} height={600} />
```

### 2. Benefits

- **Automatic thumbnails**: Creates multiple sizes for different devices
- **Format conversion**: Converts to WebP/AVIF for smaller file sizes
- **Lazy loading**: Images load as user scrolls
- **Responsive**: Serves appropriate size based on screen width

### 3. Quick Migration Steps

**For local images in markdown:**
Move images to `src/assets/` and reference them properly.

**For external images (like Imgur):**
They're already optimized by the host, but you can add `loading="lazy"` attribute.

### 4. Enable Image Optimization in astro.config.mjs

The configuration is already set up! Astro's image optimization works automatically when you use the `<Image>` component.

### 5. Current Mobile Fix

The CSS has been updated to force all images to fit within viewport:

```css
@media (max-width: 720px) {
  img, video, iframe, pre, table, figure {
    max-width: 100% !important;
    width: 100% !important;
    height: auto !important;
  }
}
```

This ensures no content overflows on mobile, regardless of original image size.
