import React, { useEffect, useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/plugins/captions.css';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';

export default function ContentGallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    // Select all images inside the main content area
    const images = Array.from(document.querySelectorAll('main img'));
    
    // Filter out images that shouldn't be in the gallery (like icons or UI elements)
    // You can adjust this filter if needed
    const galleryImages = images.filter(img => !img.closest('nav') && !img.closest('header') && !img.closest('footer'));

    if (galleryImages.length === 0) return;

    const newSlides = galleryImages.map(img => ({
      src: img.src,
      alt: img.alt,
      title: img.title || img.alt,
    }));

    setSlides(newSlides);

    const handleImageClick = (e) => {
      const img = e.target;
      const idx = galleryImages.indexOf(img);
      if (idx !== -1) {
        e.preventDefault();
        setIndex(idx);
        setOpen(true);
      }
    };

    galleryImages.forEach(img => {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', handleImageClick);
    });

    return () => {
      galleryImages.forEach(img => {
        img.style.cursor = '';
        img.removeEventListener('click', handleImageClick);
      });
    };
  }, []);

  return (
    <Lightbox
      open={open}
      close={() => setOpen(false)}
      index={index}
      slides={slides}
      plugins={[Zoom, Captions, Fullscreen]}
      animation={{ fade: 300 }}
      controller={{ closeOnBackdropClick: true }}
    />
  );
}