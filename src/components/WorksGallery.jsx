import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

// Optional plugins for more features
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

export default function WorksGallery({ posts }) {
  const [index, setIndex] = useState(-1);

  // Prepare slides for the lightbox from your posts
  const slides = posts.map(post => ({
    src: post.data.heroImage,
    title: post.data.title,
    description: post.data.description,
  }));

  return (
    <>
      <ul className="works-gallery-grid">
        {posts.map((post, i) => (
          <li key={post.id}>
            <img
              src={post.data.heroImage}
              alt={post.data.title}
              onClick={() => setIndex(i)}
              style={{ cursor: 'pointer' }}
              width={720}
              height={360}
            />
            <a href={`/works/${post.id.replace(/\.md$/, '')}/`}>
                <h4 className="title">
                    {post.data.title}
                    <span style={{ fontSize: '0.6em', opacity: 0.6 }}>({new Date(post.data.pubDate).getFullYear()})</span>
                </h4>
                <p className="description">{post.data.description}</p>
            </a>
          </li>
        ))}
      </ul>

      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </>
  );
}