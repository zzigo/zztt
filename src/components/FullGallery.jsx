import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/plugins/captions.css';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

export default function FullGallery({ images }) {
  const [index, setIndex] = useState(-1);

  const slides = images.map(img => ({
    src: img.src,
    title: img.title,
    description: img.type ? `${img.type.toUpperCase()} - ${img.title}` : img.title,
  }));

  return (
    <>
      <div 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
          gap: '0', 
          width: '100%', 
          minHeight: '100vh',
          background: '#000'
        }}
      >
        {images.map((img, i) => (
          <div 
            key={i} 
            style={{ 
              position: 'relative', 
              width: '100%', 
              paddingTop: '100%', // 1:1 Aspect Ratio squares
              overflow: 'hidden',
              cursor: 'pointer'
            }}
            onClick={() => setIndex(i)}
          >
            <img
              src={img.thumbnail}
              alt={img.title}
              loading="lazy"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.3s ease, opacity 0.3s ease',
                opacity: 0.8
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.opacity = '1';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.opacity = '0.8';
              }}
            />
          </div>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
        plugins={[Zoom, Captions, Fullscreen, Thumbnails]}
      />
    </>
  );
}