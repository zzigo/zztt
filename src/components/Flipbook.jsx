import React, { useEffect, useRef } from 'react';
import { Document, Page } from 'react-pdf';
import 'turn.js';
import '../lib/pdfWorker';

const Flipbook = ({ pdf }) => {
  const bookRef = useRef(null);
  const pagesRef = useRef([]);

  useEffect(() => {
    if (!bookRef.current) return;

    const el = bookRef.current;

    // Initialize turn.js AFTER pages exist
    const initTurn = () => {
      if (el.children.length > 0) {
        window.$(el).turn({
          width: 800,
          height: 600,
          autoCenter: true,
        });
      }
    };

    setTimeout(initTurn, 300);
  }, []);

  return (
    <div
      ref={bookRef}
      className="flipbook"
      style={{ margin: '0 auto' }}
    >
      <Document
        file={pdf}
        onLoadSuccess={({ numPages }) => {
          pagesRef.current = Array.from({ length: numPages });
        }}
      >
        {pagesRef.current.map((_, i) => (
          <div key={i} className="page">
            <Page
              pageNumber={i + 1}
              width={400}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </div>
        ))}
      </Document>
    </div>
  );
};

export default Flipbook;